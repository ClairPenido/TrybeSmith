import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Products } from '../interfaces';
import connection from './connection';

export default class ProductModel {
  connection:Pool;

  constructor() {
    this.connection = connection; // o que foi criado = o que foi importado
  }

  async getAll(): Promise<Products[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as Products[];
  }

  async create(product: Omit<Products, 'id'>): Promise<Products> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)',
      [name, amount],
    );
    const { insertId } = result;
    return {
      id: insertId,
      ...product,
    };
  }
}
