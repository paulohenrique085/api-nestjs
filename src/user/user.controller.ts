import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "src/database/repository";


//Decorator que configura uma controller
@Controller('/api/users')
export class UserController{

    private usuarioRepository = new UserRepository()
    
    //Decorator que indica a utilizacao do protocolo HTTP por baixo dos planos
    @Post('/create')
    async createUser(@Body() data): Promise<Output>{
        this.usuarioRepository.create(data)
        return data
    }
    
    @Get('/all-users')
    async getAllUsers(): Promise<Output[]>{
       
        return this.usuarioRepository.getAllUsers()

        
    }

}

type Output = {
    name: string,
    old: string,
    email: string
}

