import { Injectable, ExecutionContext } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'ShashankSrihariTechwondoe', // Replace with your actual secret key
    });
  }

  async validate(payload: JwtPayload, context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    request.user = payload.username; // Store the username in the request context
    return this.authService.validateUser(payload);
  }
}
