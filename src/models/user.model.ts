import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Users } from '../interfaces';
import connection from './connection';

export default class UserModel {
  connection:Pool;

  constructor() {
    this.connection = connection; // o que foi criado = o que foi importado
  }
  
  async create(user: Omit<Users, 'id'>): Promise<Users> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId } = result;
    return {
      id: insertId,
      ...user,
    };
  }
}