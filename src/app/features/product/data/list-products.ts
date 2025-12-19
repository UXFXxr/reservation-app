import { Product } from '../models/product.model';

export const products: Product[] = [
  {
    _id: '648a123abc',
    name: '商品A',
    price: 1200,
    description: '商品Aの説明',
    heading: '新商品',
    headingTxt: 'おすすめポイントA',
    imageUrl: './assets/img/productA.jpg',
  },
  {
    _id: '648a124def',
    name: '商品B',
    price: 2500,
    description: '商品Bの説明',
    heading: '人気商品',
    headingTxt: 'おすすめポイントB',
    imageUrl: './assets/img/productB.jpg',
  },
];
