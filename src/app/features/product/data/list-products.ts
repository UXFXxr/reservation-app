// 型は既存の Product 型を使用
import { Product } from './products';

// リストページ用の商品データ
export const listProducts: Product[] = [
  {
    id: 101,
    name: 'Custom Product 1',
    description: 'リストページ用の説明文1',
    heading: 'リスト用サンプル1',
    price: 1000,
    imageUrl: 'https://via.placeholder.com/230',
  },
  {
    id: 102,
    name: 'Custom Product 2',
    description: 'リストページ用の説明文2',
    heading: 'リスト用サンプル2',
    price: 2000,
    imageUrl: 'https://via.placeholder.com/230',
  },
  {
    id: 103,
    name: 'Custom Product 3',
    description: 'リストページ用の説明文3',
    heading: 'リスト用サンプル3',
    price: 1500,
    imageUrl: 'https://via.placeholder.com/230',
  },
  // 必要に応じて追加
];
