// src/simit/simit.service.ts
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { CargaComparendoDto, CargaResolucionDto, CargaRecaudoDto } from 'src/shared/dtos/simit.dto';
import {
  buildSoapEnvelopeComparendo,
  buildSoapEnvelopeResolucion,
  buildSoapEnvelopeRecaudo,
} from 'src/utils/simit.soap.utils';

// Mapeo mejorado de mensajes SIMIT
export function mapSimitError(response: any): string {
  const body = response?.['soapenv:Envelope']?.['soapenv:Body'];
  const returnField =
    body?.['ns:cargaArchivoComparendosResponse']?.['ns:return'] ||
    body?.['ns:cargaArchivoResolucionResponse']?.['ns:return'] ||
    body?.['ns:cargaRecaudoResponse']?.['ns:return'];

  if (!returnField) return 'Respuesta inválida de SIMIT';

  const parser = new XMLParser({ ignoreAttributes: false });
  const parsed = parser.parse(returnField);

  const encabezado = parsed?.ArchivosTransito?.encabezado;
  const detalle = parsed?.ArchivosTransito?.detalle;
  const descripcion = detalle?.descripcion || detalle?.mensaje;
  const idTipoError = detalle?.idTipoError;

  if (idTipoError === '45') {
    return 'No autorizado: El usuario no pertenece a la secretaría indicada.';
  }

  if (descripcion) return descripcion.trim();

  if (encabezado?.archivo && !descripcion) {
    return `Carga de ${encabezado.archivo} procesada, sin mensaje de detalle.`;
  }

  return 'Error desconocido en SIMIT';
}

@Injectable()
export class SimitService {
  private readonly logger = new Logger(SimitService.name);

  private readonly endpoint =
    'https://qaconsultassimit.fcm.org.co/Simit/services/WsCargaArchivos.WsCargaArchivosHttpsSoap12Endpoint/';

  async cargarComparendo(dto: CargaComparendoDto) {
    try {
      const xml = buildSoapEnvelopeComparendo(dto);
      this.logger.log('📤 Enviando comparendo a SIMIT... , numero de comparendo:'+dto.iNnumeroComparendo);

      const { data } = await axios.post(this.endpoint, xml, {
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          SOAPAction: '""',
        },
      });

      const parser = new XMLParser({ ignoreAttributes: false });
      const response = parser.parse(data);

      const errorMsg = mapSimitError(response);

      return {
        errorMsg,
        simitResponse: response,
      };
    } catch (error) {
      this.logger.error('Error enviando comparendo a SIMIT', error);
      return {
        errorMsg: 'Error de comunicación con SIMIT',
        simitResponse: error?.response?.data || error.message || error,
      };
    }
  }

  async cargarResolucion(dto: CargaResolucionDto) {
    const xml = buildSoapEnvelopeResolucion(dto);
    this.logger.log('📤 Enviando resolución a SIMIT...');
    const { data } = await axios.post(this.endpoint, xml, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        SOAPAction: '""',
      },
    });
    const parser = new XMLParser({ ignoreAttributes: false });
    const response = parser.parse(data);

    const errorMsg = mapSimitError(response);

    return {
      errorMsg,
      simitResponse: response,
    };
  }

  async cargarRecaudo(dto: CargaRecaudoDto) {
    const xml = buildSoapEnvelopeRecaudo(dto);
    this.logger.log('📤 Enviando recaudo a SIMIT...');
    const { data } = await axios.post(this.endpoint, xml, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        SOAPAction: '""',
      },
    });
    const parser = new XMLParser({ ignoreAttributes: false });
    const response = parser.parse(data);

    const errorMsg = mapSimitError(response);

    return {
      errorMsg,
      simitResponse: response,
    };
  }
}
