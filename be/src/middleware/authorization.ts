import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { validateJWT } from 'src/utils';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if(!token || !validateJWT(token)) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    next();
  }
}
