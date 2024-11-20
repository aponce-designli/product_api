import { Module } from '@nestjs/common';
import { OutboundOrdersService } from './outbound-orders.service';
import { OutboundOrdersController } from './outbound-orders.controller';

@Module({
  providers: [OutboundOrdersService],
  controllers: [OutboundOrdersController]
})
export class OutboundOrdersModule {}
