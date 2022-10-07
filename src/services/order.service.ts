import { Orders } from '../interfaces';
import OrderModel from '../models/order.model';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  async getAllOrders() {
    const orders: Orders[] = await this.model.getAll();
    return orders;
  }
}