import { Pool } from 'mysql2/promise';
import { Orders } from '../interfaces';
import connection from './connection';

export default class OrderModel {
  connection:Pool;

  constructor() {
    this.connection = connection; // o que foi criado = o que foi importado
  }
  
  async getAll(): Promise<Orders[]> {
    const [result] = await this.connection.execute(`SELECT o.id, o.userId, JSON_ARRAYAGG(prod.id)
    AS productsIds FROM Trybesmith.Orders AS o 
    INNER JOIN Trybesmith.Products AS prod ON o.id = prod.orderId GROUP BY o.id;`);
    return result as Orders[];
  }
}