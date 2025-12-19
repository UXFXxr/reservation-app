// src/app/features/product/models/product.model.ts
export interface Product {
  _id: string; // MongoDB用 optional
  name: string;
  price: number;
  description: string;
  heading: string;
  headingTxt: string;
  imageUrl: string;
}
