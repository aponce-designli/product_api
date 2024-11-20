import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InboundOrdersService } from './inbound-orders.service';
import { InboundOrdersController } from './inbound-orders.controller';
import { InboundOrder } from './entities/inbound-order.entity';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([InboundOrder]), ProductsModule],
  controllers: [InboundOrdersController],
  providers: [InboundOrdersService],
})
export class InboundOrdersModule {}
