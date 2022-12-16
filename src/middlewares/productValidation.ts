import Joi from 'joi';

import { NextFunction, Request, Response } from 'express';
import CustomError from '../utils/CustomError';

export default (req: Request, res: Response, next: NextFunction) => {
  const productSchema = Joi.object({
    name: Joi.string().required().min(2),
    amount: Joi.string().required().min(2),
  });
  const { name, amount } = req.body;
  const { error } = productSchema.validate({ name, amount });

  if (error) {
    console.log('erro Joi:', error);
    throw new CustomError(error.details[0].message, 400);
  }
  next();
};
