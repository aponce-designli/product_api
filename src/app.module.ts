import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { InboundOrdersModule } from './inbound-orders/inbound-orders.module';
import { OutboundOrdersModule } from './outbound-orders/outbound-orders.module';
import { OrderLinesModule } from './order-lines/order-lines.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'inventory_management',
      autoLoadEntities: true,
      synchronize: true, // Cambiar a false en producción
    }),
    ProductsModule,
    InboundOrdersModule,
    OutboundOrdersModule,
    OrderLinesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
