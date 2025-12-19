const Product = require('../data/products'); // ← mongooseモデル

class FakeDb {
  constructor() {
    this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading: 'サンプルテキスト1',
        headingTxt: '',
        imageUrl: 'https://via.placeholder.com/230/0000ff/ffffff?text=Standard',
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading: 'サンプルテキスト2',
        headingTxt:
          'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        imageUrl: 'https://via.placeholder.com/230/0000ff/ffffff?text=Standard',
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading: 'サンプルテキスト3',
        headingTxt:
          'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        imageUrl: 'https://via.placeholder.com/230/0000ff/ffffff?text=Standard',
      },
    ];
  }

  // MongoDB にデータ投入（非同期）
  async secDb() {
    await Product.deleteMany({});

    for (const product of this.products) {
      const newProduct = new Product(product);
      await newProduct.save();
    }

    console.log('Products seeded');
  }
}

module.exports = FakeDb;
