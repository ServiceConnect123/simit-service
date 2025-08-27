import { Test, TestingModule } from '@nestjs/testing';
import { SimitService } from './simit.service.service';

describe('SimitService', () => {
  let service: SimitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimitService],
    }).compile();

    service = module.get<SimitService>(SimitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('parseResult', () => {
    it('should parse valid XML response', () => {
      // Simula una respuesta XML simple
      service['parser'] = {
        parse: jest.fn().mockReturnValue({
          ArchivosTransito: {
            encabezado: {
              idFuncionario: 'FUNC001',
              idSecretaria: 'SEC001',
              consecutivoCarga: '1',
              archivo: 'archivo.xml',
            },
            DetalleCarga: {
              descripcion: 'OK',
              Cargados: 1,
              CargadosBuenos: 1,
              ValorCarga: 1000,
            },
          },
        }),
      } as any;

      const xml = '<xml></xml>';
      const result = service['parseResult'](xml);

      expect(result.encabezado).toBeDefined();
      expect(result.encabezado.idFuncionario).toBe('FUNC001');
      expect(result.detalle.descripcion).toBe('OK');
    });

    it('should return raw result if parsing fails', () => {
      service['parser'] = {
        parse: jest.fn(() => { throw new Error('Parse error'); }),
      } as any;

      const xml = '<xml></xml>';
      const result = service['parseResult'](xml);

      expect(result.raw).toBe(xml);
    });
  });

  describe('callSoapMethod', () => {
    it('should call SOAP method and parse result', async () => {
      const mockClient = {
        cargaArchivoComparendosAsync: jest.fn().mockResolvedValue(['<xml></xml>']),
      };
      service['getClient'] = jest.fn().mockResolvedValue(mockClient as any);
      service['parseResult'] = jest.fn().mockReturnValue({ ok: true });

      const result = await service['callSoapMethod']('cargaArchivoComparendos', {});

      expect(service['getClient']).toHaveBeenCalled();
      expect(mockClient.cargaArchivoComparendosAsync).toHaveBeenCalledWith({});
      expect(result).toEqual({ ok: true });
    });

    it('should throw error if SOAP call fails', async () => {
      const mockClient = {
        cargaArchivoComparendosAsync: jest.fn().mockRejectedValue(new Error('SOAP error')),
      };
      service['getClient'] = jest.fn().mockResolvedValue(mockClient as any);

      await expect(service['callSoapMethod']('cargaArchivoComparendos', {})).rejects.toThrow('SOAP error');
    });
  });
});
