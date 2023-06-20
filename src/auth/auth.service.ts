import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.interface';
import { JwtPayload } from '../auth/jwt-payload.interface';
import { users } from '../user/users.data';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(loginDto: LoginDto): Promise<User | null> {
    const { username, password } = loginDto;
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );
    return user || null;
  }

  async generateJwtToken(user: User): Promise<string> {
    // Generate a JWT token for the user
    //console.log(user);
    const payload: JwtPayload = { username: user.username };
    const token: string = await this.jwtService.signAsync(payload);
    
    return token;
  }
}
