import { ApiProperty } from '@nestjs/swagger';

export class UpdateOutboundOrderDto {
  @ApiProperty({ description: 'Customer Name for the order', example: 'John Doe', required: false })
  customerName?: string;

  @ApiProperty({ description: 'Status of the order', example: 'shipped', default: 'shipped', required: false })
  status?: string;
}
