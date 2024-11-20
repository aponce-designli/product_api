import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InboundOrder } from './entities/inbound-order.entity';

@Injectable()
export class InboundOrdersService {
  constructor(
    @InjectRepository(InboundOrder)
    private readonly inboundOrderRepository: Repository<InboundOrder>,
  ) {}

  findAll(): Promise<InboundOrder[]> {
    return this.inboundOrderRepository.find();
  }

  findOne(id: number): Promise<InboundOrder> {
    return this.inboundOrderRepository.findOne({ where: { id } });
  }

  create(createInboundOrderDto: Partial<InboundOrder>): Promise<InboundOrder> {
    const order = this.inboundOrderRepository.create(createInboundOrderDto);
    return this.inboundOrderRepository.save(order);
  }

  async update(id: number, updateInboundOrderDto: Partial<InboundOrder>): Promise<InboundOrder> {
    await this.inboundOrderRepository.update(id, updateInboundOrderDto);
    return this.inboundOrderRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.inboundOrderRepository.delete(id);
  }
}
