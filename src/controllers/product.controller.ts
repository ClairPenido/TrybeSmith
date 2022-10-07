import { NextFunction, Request, Response } from 'express';
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

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, amount } = req.body;
      console.log('controller', req.body);
      const newProduct = await this.service.create({ name, amount });
      return res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };
}