import Joi from 'joi';

import { NextFunction, Request, Response } from 'express';
import CustomError from '../utils/CustomError';

export default (req: Request, res: Response, next: NextFunction) => {
  const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { username, password } = req.body;
  const { error } = loginSchema.validate({ username, password });

  if (error) {
    console.log('entrou validation');
    throw new CustomError(error.details[0].message, 400);
  }
  next();
};
