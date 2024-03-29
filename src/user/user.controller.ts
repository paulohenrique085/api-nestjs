import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from 'src/database/repository';
import { CreateUserDTO } from './dto/CreateUser.dto';

//Decorator que configura uma controller
@Controller('/api/users')
export class UserController {
  private usuarioRepository = new UserRepository();

  //Decorator que indica a utilizacao do protocolo HTTP por baixo dos planos
  @Post('/create')
  async createUser(@Body() userData: CreateUserDTO): Promise<Output> {
    this.usuarioRepository.create(userData);
    return { message: 'User created' };
  }

  @Get('/all-users')
  async getAllUsers(): Promise<Output[]> {
    return this.usuarioRepository.getAllUsers();
  }
}

type Output = {
  message: string;
};
