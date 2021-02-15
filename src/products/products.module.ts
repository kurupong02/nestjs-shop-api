import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsSchema } from './products.schema';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'products', schema: ProductsSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
