import { Injectable } from '@nestjs/common';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { OutboundOrder } from './entities/outbound-order.entity';

@Injectable()
export class OutboundOrdersService {
  private outboundOrders: OutboundOrder[] = []; // This should eventually be replaced with database logic

  create(createOutboundOrderDto: CreateOutboundOrderDto): Promise<OutboundOrder> {
    const newOrder: OutboundOrder = {
      id: this.outboundOrders.length + 1,
      ...createOutboundOrderDto,
      orderLines: createOutboundOrderDto.orderLines || [], // Ensure 'orderLines' is included
    };
    this.outboundOrders.push(newOrder);
    return Promise.resolve(newOrder);
  }
}
