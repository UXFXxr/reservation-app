export interface RelatedProduct {
  _id: string; // 商品のID（ルーティング用）
  name: string; // 商品名
  imageUrl: string; // 商品画像URL
  description?: string; // 商品説明（オプション）
  headingTxt?: string; // 見出しのテキスト（オプション）
}
