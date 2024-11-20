import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderLine } from '../../order-lines/entities/order-line.entity';

@Entity('inbound_orders')
export class InboundOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  supplierName: string;

  @Column({ default: 'pending' })
  status: string;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.inboundOrder)
  orderLines: OrderLine[];
}
