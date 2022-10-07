import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  enterLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.service.enterLogin(req.body);
      console.log('controller', user);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}