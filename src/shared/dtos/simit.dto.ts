// src/shared/dtos/simit.dto.ts
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CargaComparendoDto {

  @ApiProperty()
  @IsNumber()
  iNconsecutivoComparendo: number;

  @ApiProperty()
  @IsString()
  iNnumeroComparendo: string;

  @ApiProperty()
  @IsString()
  iNfecha: string;

  @ApiProperty()
  @IsString()
  iNhora: string;

  @ApiProperty()
  @IsString()
  iNdireccion: string;

  @ApiProperty()
  @IsString()
  iNdivipoMunicipio: string;

  @ApiProperty()
  @IsString()
  iNplaca: string;

  @ApiProperty()
  @IsString()
  iNdivipoMatricula: string;

  @ApiProperty()
  @IsNumber()
  iNtipoV: number;

  @ApiProperty()
  @IsNumber()
  iNvalorAdi:number;

  @ApiProperty()
  @IsNumber()
  iNtipoS: number;

  @ApiProperty()
  @IsNumber()
  iNcodigoRa: number;

  @ApiProperty()
  @IsNumber()
  iNcodigoMo: number;

  @ApiProperty()
  @IsNumber()
  iNcodigoPa: number;

  @ApiProperty()
  @IsString()
  iNidInfractor: string;

  @ApiProperty()
  @IsNumber()
  iNidTipoDocP: number;

  @ApiProperty()
  @IsString()
  iNnombreInfractor: string;

  @ApiProperty()
  @IsString()
  iNapellidoInfractor: string;

  @ApiProperty()
  @IsNumber()
  iNedadIn: number;

  @ApiProperty()
  @IsString()
  iNdireccionInfractor: string;

  @ApiProperty()
  @IsString()
  iNtelefonoInfractor: string;

  @ApiProperty()
  @IsString()
  iNcodigoInfraccion1: string;

  @ApiProperty()
  @IsNumber()
  iNvalorInf1: number;

  @ApiProperty()
  @IsNumber()
  iNvalorComp: number;

  @ApiProperty()
  @IsString()
  iNorganismoTransito: string;

  @ApiProperty()
  @IsNumber()
  iNestado: number;

  @ApiProperty()
  @IsString()
  iNestadoComparendoPolca: string;

  @ApiProperty()
  @IsString()
  iNcomparendoElectronico: string;
}

export class CargaResolucionDto {

  @ApiProperty()
  consecutivoR: number;

  @ApiProperty()
  numeroResolucion: string;

  @ApiProperty()
  @IsOptional()
  numeroResolucionAnterior?: string;

  @ApiProperty()
  fechaResolucion: string;

  @ApiProperty()
  tipoR: number;

  @ApiProperty()
  numeroComparendo: string;

  @ApiProperty()
  fechaComparendo: string;

  @ApiProperty()
  idContraventor: string;

  @ApiProperty()
  idTipoDocTutor: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  idCiudad: string;

  @ApiProperty()
  valorTotalResolucion: number;

  @ApiProperty()
  valorAdicionalResolucion: number;

  @ApiProperty()
  @IsOptional()
  fotoMulta?: string;

  @ApiProperty()
  codigoOrganismo: string;

  @ApiProperty()
  estadoResolucionPolca: string;

  @ApiProperty()
  valorInfraccionResolucion1: number;

  @ApiProperty()
  valorPagarInfraccionResolucion1: number;

  @ApiProperty()
  @IsOptional()
  gradoAlcohol?: string;

  @ApiProperty()
  @IsOptional()
  horasComunitarias?: string;
  // Agrega otros campos según necesidad
}

export class CargaRecaudoDto {

  @ApiProperty()
  cuenta: string;

  @ApiProperty()
  iNIdTipoDocumento: number;

  @ApiProperty()
  iNNumeroCuota: number;

  @ApiProperty()
  iNcodigoCO: number;

  @ApiProperty()
  iNconsecutivoRecaudo: number;

  @ApiProperty()
  iNdescripcionOrigen: string;

  @ApiProperty()
  iNestadoRecaudoPolca: string;

  @ApiProperty()
  iNfechaContable: string;

  @ApiProperty()
  iNfechaTransaccion: string;

  @ApiProperty()
  iNhora: string;

  @ApiProperty()
  iNidentificacion: string;

  @ApiProperty()
  iNnumeroConsignacion: string;

  @ApiProperty()
  iNnumeroReferencia: string;

  @ApiProperty()
  iNsecretaria: string;

  @ApiProperty()
  iNtipoRecaudoReferencia: number;

  @ApiProperty()
  iNvalorCheque: number;

  @ApiProperty()
  iNvalorEfectivo: number;

  @ApiProperty()
  iNvalorTotal: number;
  // Agrega otros campos según necesidad
}
