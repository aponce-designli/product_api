import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderLine } from './entities/order-line.entity';
import { OrderLinesService } from './order-lines.service';
import { OrderLinesController } from './order-lines.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderLine])], // Registra la entidad
  controllers: [OrderLinesController], // Registra el controlador
  providers: [OrderLinesService], // Registra el servicio
})
export class OrderLinesModule {}
