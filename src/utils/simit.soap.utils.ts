import * as dotenv from 'dotenv';
dotenv.config();

import { CargaComparendoDto, CargaResolucionDto, CargaRecaudoDto } from 'src/shared/dtos/simit.dto';

// Obtiene valores estáticos desde variables de entorno
const CLAVE = process.env.SIMIT_CLAVE || '';
const USUARIO = process.env.SIMIT_USUARIO || '';
const SECRETARIA = process.env.SIMIT_SECRETARIA || '';

export function buildSoapEnvelopeComparendo(dto: CargaComparendoDto): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:web="http://webservices.qxmultas.quipux.com.co"
                  xmlns:xsd="http://webservices.qxmultas.quipux.com.co/xsd">
  <soapenv:Header/>
  <soapenv:Body>
    <web:cargaArchivoComparendos>
      <web:comparendo>
        <xsd:clave>${CLAVE}</xsd:clave>
        <xsd:usuario>${USUARIO}</xsd:usuario>
        <xsd:secretaria>${SECRETARIA}</xsd:secretaria>
        <xsd:iNconsecutivoComparendo>${dto.iNconsecutivoComparendo}</xsd:iNconsecutivoComparendo>
        <xsd:iNnumeroComparendo>${dto.iNnumeroComparendo}</xsd:iNnumeroComparendo>
        <xsd:iNfecha>${dto.iNfecha}</xsd:iNfecha>
        <xsd:iNhora>${dto.iNhora}</xsd:iNhora>
        <xsd:iNdireccion>${dto.iNdireccion}</xsd:iNdireccion>
        <xsd:iNdivipoMunicipio>${dto.iNdivipoMunicipio}</xsd:iNdivipoMunicipio>
        <xsd:iNplaca>${dto.iNplaca}</xsd:iNplaca>
        <xsd:iNdivipoMatricula>${dto.iNdivipoMatricula}</xsd:iNdivipoMatricula>
        <xsd:iNtipoV>${dto.iNtipoV}</xsd:iNtipoV>
        <xsd:iNtipoS>${dto.iNtipoS}</xsd:iNtipoS>
        <xsd:iNcodigoRa>${dto.iNcodigoRa}</xsd:iNcodigoRa>
        <xsd:iNcodigoMo>${dto.iNcodigoMo}</xsd:iNcodigoMo>
        <xsd:iNcodigoPa>${dto.iNcodigoPa}</xsd:iNcodigoPa>
        <xsd:iNidInfractor>${dto.iNidInfractor}</xsd:iNidInfractor>
        <xsd:iNtipoD>${dto.iNidTipoDocP}</xsd:iNtipoD>
        <xsd:iNidTipoDocP>${dto.iNidTipoDocP}</xsd:iNidTipoDocP>
        <xsd:iNnombreInfractor>${dto.iNnombreInfractor}</xsd:iNnombreInfractor>
        <xsd:iNapellidoInfractor>${dto.iNapellidoInfractor}</xsd:iNapellidoInfractor>
        <xsd:iNedadIn>${dto.iNedadIn}</xsd:iNedadIn>
        <xsd:iNdireccionInfractor>${dto.iNdireccionInfractor}</xsd:iNdireccionInfractor>
        <xsd:iNtelefonoInfractor>${dto.iNtelefonoInfractor}</xsd:iNtelefonoInfractor>
        <xsd:iNcodigoInfraccion1>${dto.iNcodigoInfraccion1}</xsd:iNcodigoInfraccion1>
        <xsd:iNvalorInf1>${dto.iNvalorInf1}</xsd:iNvalorInf1>
        <xsd:iNvalorComp>${dto.iNvalorComp}</xsd:iNvalorComp>
        <xsd:iNorganismoTransito>${dto.iNorganismoTransito}</xsd:iNorganismoTransito>
        <xsd:iNestado>${dto.iNestado}</xsd:iNestado>
        <xsd:iNestadoComparendoPolca>${dto.iNestadoComparendoPolca}</xsd:iNestadoComparendoPolca>
        <xsd:iNcomparendoElectronico>${dto.iNcomparendoElectronico}</xsd:iNcomparendoElectronico>
      </web:comparendo>
    </web:cargaArchivoComparendos>
  </soapenv:Body>
</soapenv:Envelope>`;
}

export function buildSoapEnvelopeResolucion(dto: CargaResolucionDto): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                      xmlns:web="http://webservices.qxmultas.quipux.com.co"
                      xmlns:xsd="http://webservices.qxmultas.quipux.com.co/xsd">
      <soapenv:Header/>
      <soapenv:Body>
        <web:cargaArchivoResolucion>
          <web:resolucion>
            <xsd:clave>${CLAVE}</xsd:clave>
            <xsd:usuario>${USUARIO}</xsd:usuario>
            <xsd:secretaria>${SECRETARIA}</xsd:secretaria>
            <xsd:consecutivoR>${dto.consecutivoR}</xsd:consecutivoR>
            <xsd:numeroResolucion>${dto.numeroResolucion}</xsd:numeroResolucion>
            <xsd:numeroResolucionAnterior>${dto.numeroResolucionAnterior ?? ''}</xsd:numeroResolucionAnterior>
            <xsd:fechaResolucion>${dto.fechaResolucion}</xsd:fechaResolucion>
            <xsd:tipoR>${dto.tipoR}</xsd:tipoR>
            <xsd:numeroComparendo>${dto.numeroComparendo}</xsd:numeroComparendo>
            <xsd:fechaComparendo>${dto.fechaComparendo}</xsd:fechaComparendo>
            <xsd:idContraventor>${dto.idContraventor}</xsd:idContraventor>
            <xsd:idTipoDocTutor>${dto.idTipoDocTutor}</xsd:idTipoDocTutor>
            <xsd:nombre>${dto.nombre}</xsd:nombre>
            <xsd:apellido>${dto.apellido}</xsd:apellido>
            <xsd:direccion>${dto.direccion}</xsd:direccion>
            <xsd:telefono>${dto.telefono}</xsd:telefono>
            <xsd:idCiudad>${dto.idCiudad}</xsd:idCiudad>
            <xsd:valorTotalResolucion>${dto.valorTotalResolucion}</xsd:valorTotalResolucion>
            <xsd:valorAdicionalResolucion>${dto.valorAdicionalResolucion}</xsd:valorAdicionalResolucion>
            <xsd:fotoMulta>${dto.fotoMulta ?? ''}</xsd:fotoMulta>
            <xsd:codigoOrganismo>${dto.codigoOrganismo}</xsd:codigoOrganismo>
            <xsd:estadoResolucionPolca>${dto.estadoResolucionPolca}</xsd:estadoResolucionPolca>
            <xsd:valorInfraccionResolucion1>${dto.valorInfraccionResolucion1}</xsd:valorInfraccionResolucion1>
            <xsd:valorPagarInfraccionResolucion1>${dto.valorPagarInfraccionResolucion1}</xsd:valorPagarInfraccionResolucion1>
            <xsd:gradoAlcohol>${dto.gradoAlcohol ?? ''}</xsd:gradoAlcohol>
            <xsd:horasComunitarias>${dto.horasComunitarias ?? ''}</xsd:horasComunitarias>
          </web:resolucion>
        </web:cargaArchivoResolucion>
      </soapenv:Body>
    </soapenv:Envelope>`;
}

export function buildSoapEnvelopeRecaudo(dto: CargaRecaudoDto): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                      xmlns:web="http://webservices.qxmultas.quipux.com.co"
                      xmlns:xsd="http://webservices.qxmultas.quipux.com.co/xsd">
      <soapenv:Header/>
      <soapenv:Body>
        <web:cargaRecaudo>
          <web:recaudo>
            <xsd:clave>${CLAVE}</xsd:clave>
            <xsd:usuario>${USUARIO}</xsd:usuario>
            <xsd:secretaria>${SECRETARIA}</xsd:secretaria>
            <xsd:cuenta>${dto.cuenta}</xsd:cuenta>
            <xsd:iNIdTipoDocumento>${dto.iNIdTipoDocumento}</xsd:iNIdTipoDocumento>
            <xsd:iNNumeroCuota>${dto.iNNumeroCuota}</xsd:iNNumeroCuota>
            <xsd:iNcodigoCO>${dto.iNcodigoCO}</xsd:iNcodigoCO>
            <xsd:iNconsecutivoRecaudo>${dto.iNconsecutivoRecaudo}</xsd:iNconsecutivoRecaudo>
            <xsd:iNdescripcionOrigen>${dto.iNdescripcionOrigen}</xsd:iNdescripcionOrigen>
            <xsd:iNestadoRecaudoPolca>${dto.iNestadoRecaudoPolca}</xsd:iNestadoRecaudoPolca>
            <xsd:iNfechaContable>${dto.iNfechaContable}</xsd:iNfechaContable>
            <xsd:iNfechaTransaccion>${dto.iNfechaTransaccion}</xsd:iNfechaTransaccion>
            <xsd:iNhora>${dto.iNhora}</xsd:iNhora>
            <xsd:iNidentificacion>${dto.iNidentificacion}</xsd:iNidentificacion>
            <xsd:iNnumeroConsignacion>${dto.iNnumeroConsignacion}</xsd:iNnumeroConsignacion>
            <xsd:iNnumeroReferencia>${dto.iNnumeroReferencia}</xsd:iNnumeroReferencia>
            <xsd:iNsecretaria>${dto.iNsecretaria}</xsd:iNsecretaria>
            <xsd:iNtipoRecaudoReferencia>${dto.iNtipoRecaudoReferencia}</xsd:iNtipoRecaudoReferencia>
            <xsd:iNvalorCheque>${dto.iNvalorCheque}</xsd:iNvalorCheque>
            <xsd:iNvalorEfectivo>${dto.iNvalorEfectivo}</xsd:iNvalorEfectivo>
            <xsd:iNvalorTotal>${dto.iNvalorTotal}</xsd:iNvalorTotal>
          </web:recaudo>
        </web:cargaRecaudo>
      </soapenv:Body>
    </soapenv:Envelope>`;
}