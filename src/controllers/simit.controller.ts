// src/simit/simit.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { SimitService } from 'src/services/simit.service/simit.service.service';
import { CargaComparendoDto, CargaResolucionDto, CargaRecaudoDto } from 'src/shared/dtos/simit.dto';

class SimitErrorResponse {
  errorMsg: string;
  simitResponse: any;
}

@ApiTags('SIMIT')
@Controller('simit')
export class SimitController {
  constructor(private readonly simitService: SimitService) {}

  @Post('comparendo')
  @ApiOperation({ summary: 'Carga comparendo en SIMIT' })
  @ApiBody({ type: CargaComparendoDto })
  @ApiResponse({ status: 200, description: 'Carga exitosa o error SIMIT', type: SimitErrorResponse })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado: El usuario no pertenece a la secretaría indicada.' })
  async cargarComparendo(@Body() dto: CargaComparendoDto) {
    return this.simitService.cargarComparendo(dto);
  }

  @Post('resolucion')
  @ApiOperation({ summary: 'Carga resolución en SIMIT' })
  @ApiBody({ type: CargaResolucionDto })
  @ApiResponse({ status: 200, description: 'Carga exitosa o error SIMIT', type: SimitErrorResponse })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado: El usuario no pertenece a la secretaría indicada.' })
  async cargarResolucion(@Body() dto: CargaResolucionDto) {
    return this.simitService.cargarResolucion(dto);
  }

  @Post('recaudo')
  @ApiOperation({ summary: 'Carga recaudo en SIMIT' })
  @ApiBody({ type: CargaRecaudoDto })
  @ApiResponse({ status: 200, description: 'Carga exitosa o error SIMIT', type: SimitErrorResponse })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado: El usuario no pertenece a la secretaría indicada.' })
  async cargarRecaudo(@Body() dto: CargaRecaudoDto) {
    return this.simitService.cargarRecaudo(dto);
  }
}
