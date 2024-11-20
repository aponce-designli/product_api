import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderLineDto {
  @ApiProperty({ description: 'The quantity of the product', example: 5 })
  quantity: number;

  @ApiProperty({ description: 'The price of the product', example: 100.5 })
  price: number;

  @ApiProperty({ description: 'The ID of the associated product', example: 1 })
  productId: number;

  @ApiProperty({
    description: 'The ID of the associated inbound order (optional)',
    example: 2,
    required: false,
  })
  inboundOrderId?: number;

  @ApiProperty({
    description: 'The ID of the associated outbound order (optional)',
    example: 3,
    required: false,
  })
  outboundOrderId?: number;
}
