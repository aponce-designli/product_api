import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { InboundOrder } from '../../inbound-orders/entities/inbound-order.entity';
import { OutboundOrder } from '../../outbound-orders/entities/outbound-order.entity';

@Entity('order_lines') // Mapea esta clase a la tabla 'order_lines'
export class OrderLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.orderLines)
  product: Product;

  @ManyToOne(() => InboundOrder, (inboundOrder) => inboundOrder.orderLines, {
    nullable: true,
  })
  inboundOrder: InboundOrder;

  @ManyToOne(() => OutboundOrder, (outboundOrder) => outboundOrder.orderLines, {
    nullable: true,
  })
  outboundOrder: OutboundOrder;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
