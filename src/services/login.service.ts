import jwt, { Secret } from 'jsonwebtoken';
import { Login, Token, Users } from '../interfaces';
import UserModel from '../models/user.model';

const { JWT_SECRET } = process.env;

export default class LoginService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async enterLogin(username: Login): Promise<Token> {
    console.log('aqui');
    const [catchUser] = await this.model.loginUser(username);
    console.log('service:', catchUser);
    // if (catchUser)
    const token = this.generateToken(catchUser);
    return { token };
  }

  public generateToken = (login: Users) => {
    const payload = {
      id: login.id,
      name: login.username,
    };
    return jwt.sign(payload, JWT_SECRET as Secret);
  };
}
