import { ApiProperty } from '@nestjs/swagger';

export class CreateInboundOrderDto {
  @ApiProperty({ description: 'provider name', example: 'provider A' })
  supplierName: string;

  @ApiProperty({
    description: 'Orden status',
    example: 'pending',
    default: 'pending',
  })
  status: string;
}
