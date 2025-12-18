const Product = require('../data/products');

const Product = require('/');
class FakeDB {
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading: 'サンプルテキスト1',
        headingTxt: '',
        imageUrl: 'https://via.placeholder.com/230/0000ff/ffffff?text=Standard',
      },
      {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading: 'サンプルテキスト2',
        headingTxt:
          'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        imageUrl: 'https://via.placeholder.com/230/0000ff/ffffff?text=Standard',
      },
      {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading: 'サンプルテキスト3',
        headingTxt:
          'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        imageUrl: 'https://via.placeholder.com/230/0000ff/ffffff?text=Standard',
      },
      {
        id: 4,
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading: 'サンプルテキスト4',
        headingTxt:
          'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        imageUrl: 'https://via.placeholder.com/230/0000ff/ffffff?text=Standard',
      },
    ];
  }
  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new product(product);
      newProduct.save();
    });
  }
}
