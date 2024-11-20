import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderLine } from './entities/order-line.entity';

@Injectable()
export class OrderLinesService {
  constructor(
    @InjectRepository(OrderLine)
    private readonly orderLineRepository: Repository<OrderLine>,
  ) {}

  findAll(): Promise<OrderLine[]> {
    return this.orderLineRepository.find();
  }

  findOne(id: number): Promise<OrderLine> {
    return this.orderLineRepository.findOne({ where: { id } });
  }

  create(createOrderLineDto: Partial<OrderLine>): Promise<OrderLine> {
    const orderLine = this.orderLineRepository.create(createOrderLineDto);
    return this.orderLineRepository.save(orderLine);
  }

  async update(id: number, updateOrderLineDto: Partial<OrderLine>): Promise<OrderLine> {
    await this.orderLineRepository.update(id, updateOrderLineDto);
    return this.orderLineRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.orderLineRepository.delete(id);
  }
}
