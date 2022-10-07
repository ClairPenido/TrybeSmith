import jwt, { Secret } from 'jsonwebtoken';
import { Token, Users } from '../interfaces';
import UserModel from '../models/user.model';

const { JWT_SECRET } = process.env;

export default class Userservice {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: Omit<Users, 'id'>): Promise<Token> {
    const newUser = await this.model.create(user);
    console.log('service', newUser);

    const token = this.generateToken(newUser);
    return { token };
  }
  
  public generateToken = (user: Users) => {
    const payload = {
      id: user.id,
      name: user.username,
      classe: user.classe,
    };
    return jwt.sign(payload, JWT_SECRET as Secret);
  };
}