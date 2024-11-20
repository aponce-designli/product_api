import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { InboundOrdersService } from './inbound-orders.service';
import { InboundOrder } from './entities/inbound-order.entity';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';

@ApiTags('Inbound Orders') // Grupo en Swagger
@Controller('inbound-orders')
export class InboundOrdersController {
  constructor(private readonly inboundOrdersService: InboundOrdersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las órdenes de entrada' })
  @ApiResponse({ status: 200, description: 'Órdenes listadas exitosamente.' })
  findAll(): Promise<InboundOrder[]> {
    return this.inboundOrdersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una orden de entrada por ID' })
  @ApiParam({ name: 'id', description: 'ID de la orden', type: String })
  @ApiResponse({ status: 200, description: 'Orden encontrada.' })
  @ApiResponse({ status: 404, description: 'Orden no encontrada.' })
  findOne(@Param('id') id: string): Promise<InboundOrder> {
    return this.inboundOrdersService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva orden de entrada' })
  @ApiResponse({ status: 201, description: 'Orden creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createInboundOrderDto: CreateInboundOrderDto): Promise<InboundOrder> {
    return this.inboundOrdersService.create(createInboundOrderDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una orden de entrada existente' })
  @ApiParam({ name: 'id', description: 'ID de la orden a actualizar', type: String })
  @ApiResponse({ status: 200, description: 'Orden actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Orden no encontrada.' })
  update(
    @Param('id') id: string,
    @Body() updateInboundOrderDto: Partial<InboundOrder>,
  ): Promise<InboundOrder> {
    return this.inboundOrdersService.update(+id, updateInboundOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una orden de entrada' })
  @ApiParam({ name: 'id', description: 'ID de la orden a eliminar', type: String })
  @ApiResponse({ status: 200, description: 'Orden eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Orden no encontrada.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.inboundOrdersService.remove(+id);
  }
}
