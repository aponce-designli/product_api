import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderLine } from '../../order-lines/entities/order-line.entity';

@Entity('outbound_orders') // Mapea esta clase a la tabla 'outbound_orders'
export class OutboundOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column({ default: 'pending' })
  status: string;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.outboundOrder)
  orderLines: OrderLine[];
}
