import { Products } from '../interfaces';
import ProductModel from '../models/product.model';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async getAllProducts() {
    const products: Products[] = await this.model.getAll();
    return products;
  }

  async create(product: Omit<Products, 'id'>): Promise<Products> {
    const newProduct = this.model.create(product);
    return newProduct;
  }
}