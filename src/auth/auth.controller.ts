import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async singup(@Body() createUserDto: CreateUserDTO) {
    const response = await this.authService.createUser(createUserDto);

    return {
      message: 'success',
      id: response.id,
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDTO) {
    const response = await this.authService.login(loginDto);
    console.log(response);
    return {
      message: 'success',
      payload: response,
    };
  }
}
