import jwt, { Secret } from 'jsonwebtoken';
import { UnauthorizedError } from 'restify-errors';
import { Login, Token, Users } from '../interfaces';
import UserModel from '../models/user.model';

const { JWT_SECRET } = process.env;

export default class LoginService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async enterLogin(login: Login): Promise<Token> {
    console.log('aqui');
    const catchUser = await this.model.loginUser(login);
    console.log('service:', catchUser);
    if (!catchUser) {
      throw new UnauthorizedError('Username or password invalid');
    }
    if (catchUser.password !== login.password) {
      throw new UnauthorizedError('Username or password invalid');
    }
    const token = this.generateToken(catchUser); // https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1
    return { token };
  }

  // private seila(userDb: Users, userLogin: Login) {
  //   if (userDb.password !== userLogin.password) {
  //     throw new Error('funcionou');
  //   }
  // }

  public generateToken = (login: Users) => {
    const payload = {
      id: login.id,
      name: login.username,
    };
    return jwt.sign(payload, JWT_SECRET as Secret);
  };
}
