import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class ProductController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAllOrders = async (req: Request, res: Response) => {
    const orders = await this.service.getAllOrders();
    console.log('controller', orders);
    return res.status(200).json(orders);
  };
}