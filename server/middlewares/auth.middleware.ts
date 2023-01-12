import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api.error';
import tokenService from '../services/token.service';
import UserDto from '../dtos/user.dto';

interface GetUserAuthInfoRequest extends Request {
  user: UserDto
}

export default function (req: GetUserAuthInfoRequest | any, res: Response, next: NextFunction) {
  try {
    const authrizationHeader = req.headers.authorization;
    if (!authrizationHeader) {
      return next(ApiError.UnauthorizedError());
    }

    const accessToken = authrizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
}
