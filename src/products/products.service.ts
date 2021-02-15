import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products, ProductsDocument } from './products.schema';
import * as _ from 'lodash';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private productsModel: Model<ProductsDocument>,
  ) {}

  async findAll(tag: string): Promise<Products[]> {
    const res = await this.productsModel.find().exec();
    if (!tag || tag === 'all') return res;

    const resFilter = await _.filter(res, (r) => {
      return _.includes(r.tag, tag);
    });

    return resFilter;
  }

  findById(i: string) {
    return this.productsModel.find({ _id: i });
  }
}
