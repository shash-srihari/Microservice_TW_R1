import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      // Call the authentication service to handle the login logic
      const user = await this.authService.validateUser(loginDto);
      //console.log(user);
      if (!user) {
        // Handle invalid credentials
        throw new UnauthorizedException('Invalid username or password');
      }
      //console.log("After user, before token Gen");
      // Generate a JWT token for the authenticated user
      const token = await this.authService.generateJwtToken(user);
      //console.log("After user, after token Gen");
      // Return the token in the response
      return { token };
    } catch (error) {
      // Log the error for debugging purposes
      console.error(error);

      // Throw a more specific error message
      throw new UnauthorizedException('Login failed. Please try again.');
    }
  }
}
