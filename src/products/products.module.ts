import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Registro de la entidad Product
  controllers: [ProductsController], // Controlador asociado al módulo
  providers: [ProductsService], // Servicio asociado al módulo
  exports: [ProductsService], // Exportar el servicio si otros módulos lo necesitan
})
export class ProductsModule {}
