import { Body, Controller, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async login(@Body() userDto: UserDto){
    const token = await this.userService.login(userDto);
    
    if(!token) throw new HttpException('Bad Credentials.', HttpStatus.UNAUTHORIZED);

    return {
      token,
      login: userDto.login
    }
  }
}
