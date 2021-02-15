import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProduct(@Query('tag') tag) {
    return this.productsService.findAll(tag);
  }

  @Get('/:id')
  getProductById(@Param('id') id: string) {
    return this.productsService.findById(id);
  }
}
