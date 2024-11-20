import { Module } from '@nestjs/common';
import { OrderLinesService } from './order-lines.service';

@Module({
  providers: [OrderLinesService]
})
export class OrderLinesModule {}
