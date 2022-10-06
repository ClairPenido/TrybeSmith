import { Request, Response } from 'express';
// import { Products } from '../interfaces';
import ProductService from '../services/product.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAllProducts = async (req: Request, res: Response) => {
    const products = await this.service.getAllProducts();
    return res.status(200).json(products);
  };

  // public createProduct = async (req: Request<{}, {}, Omit<Products, 'id'>>, res: Response) => {
  //   try {
  //     const product = req.body;
  //     this.service.create(product);
  //     return res.status(201).json({ message: 'product created successfully' });
  //   } catch (err) {
  //     throw new Error('Error creating product');
  //   }
  // };
}