import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, classe, level, password } = req.body;
      const newUser = await this.service.create({ username, classe, level, password });
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  };
}