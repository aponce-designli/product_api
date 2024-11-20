import { ApiProperty } from '@nestjs/swagger';
import { OrderLine } from '../../order-lines/entities/order-line.entity';


export class CreateOutboundOrderDto {
  @ApiProperty({ description: 'Customer Name for the order', example: 'John Doe' })
  customerName: string;

  @ApiProperty({ description: 'Status of the order', example: 'pending', default: 'pending' })
  status: string;

  @ApiProperty({ description: 'Order lines associated with the outbound order', required: false })
  orderLines?: OrderLine[];  // Make this property optional
}
