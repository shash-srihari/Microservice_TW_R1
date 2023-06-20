import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      // Verify and decode the token
      const decodedToken = jwt.verify(token, 'ShashankSrihariTechwondoe');

      // Set the decoded token in the request user object
      request.user = {
        token,
        decodedToken,
      };

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
