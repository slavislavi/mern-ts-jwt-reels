import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api.error';

export default function (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('[API ERROR]: ', err);

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: 'Unexpected Error' });
}
