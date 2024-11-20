import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutboundOrdersService } from './outbound-orders.service';
import { OutboundOrdersController } from './outbound-orders.controller';
import { OutboundOrder } from './entities/outbound-order.entity';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([OutboundOrder]), ProductsModule],
  controllers: [OutboundOrdersController],
  providers: [OutboundOrdersService],
})
export class OutboundOrdersModule {}
