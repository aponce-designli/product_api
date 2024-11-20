import { Module } from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { InboundOrdersController } from './inbound-orders.controller';

@Module({
  providers: [InboundOrdersService],
  controllers: [InboundOrdersController]
})
export class InboundOrdersModule {}
