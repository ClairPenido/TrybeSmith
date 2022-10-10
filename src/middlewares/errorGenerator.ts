import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { name, message } = err as Error;
  console.log(`name: ${name}`);

  switch (name) {
    case 'UnauthorizedError':
      res.status(401).json({ message });
      break;
    case 'Error': // erros vindos do joi
      res.status(400).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
};

export default errorHandler;