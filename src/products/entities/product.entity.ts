import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderLine } from '../../order-lines/entities/order-line.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  sku: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int', default: 0 })
  quantity: number;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product)
  orderLines: OrderLine[];
}
