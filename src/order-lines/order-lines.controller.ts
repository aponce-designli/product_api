import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { OrderLinesService } from './order-lines.service';
import { OrderLine } from './entities/order-line.entity';
import { CreateOrderLineDto } from './dto/create-order-line.dto';

@ApiTags('Order Lines') // Swagger group name
@Controller('order-lines')
export class OrderLinesController {
  constructor(private readonly orderLinesService: OrderLinesService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all order lines' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved all order lines.' })
  findAll(): Promise<OrderLine[]> {
    return this.orderLinesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific order line by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the order line', type: String })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the order line.' })
  @ApiResponse({ status: 404, description: 'Order line not found.' })
  findOne(@Param('id') id: string): Promise<OrderLine> {
    return this.orderLinesService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new order line' })
  @ApiResponse({ status: 201, description: 'Successfully created the order line.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createOrderLineDto: CreateOrderLineDto): Promise<OrderLine> {
    return this.orderLinesService.create(createOrderLineDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing order line' })
  @ApiParam({ name: 'id', description: 'The ID of the order line to update', type: String })
  @ApiResponse({ status: 200, description: 'Successfully updated the order line.' })
  @ApiResponse({ status: 404, description: 'Order line not found.' })
  update(
    @Param('id') id: string,
    @Body() updateOrderLineDto: Partial<OrderLine>,
  ): Promise<OrderLine> {
    return this.orderLinesService.update(+id, updateOrderLineDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order line by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the order line to delete', type: String })
  @ApiResponse({ status: 200, description: 'Successfully deleted the order line.' })
  @ApiResponse({ status: 404, description: 'Order line not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.orderLinesService.remove(+id);
  }
}
