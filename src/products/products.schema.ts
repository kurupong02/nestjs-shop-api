import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Double } from 'mongodb';
import { Document } from 'mongoose';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
  @Prop()
  name: string;

  @Prop()
  image: string[];

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  tag: string[];

  @Prop()
  specifications: string[];
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
