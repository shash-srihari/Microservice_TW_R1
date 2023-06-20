import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller'; // Add this line to import the AuthController

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      // Configure JWT options, such as secret key and token expiration
      secret: 'ShashankSrihariTechwondoe'
    }),
  ],
  providers: [AuthService, JwtAuthGuard, JwtStrategy],
  controllers: [AuthController], // Add this line to include the AuthController
  exports: [JwtAuthGuard], // Export the JwtAuthGuard if it needs to be used in other modules
})
export class AuthModule {}
