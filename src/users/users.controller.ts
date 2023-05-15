import { Controller,Get,Post,Body, } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { createUserDto } from 'src/prisma/dto/create-user.dto';

@Controller('users')
@ApiTags('articles')
export class UsersController {

    @Post()
    
    create(@Body() createUserDto: createUserDto) {
      return this.userService.create(createUserDto);
    }

    constructor(private readonly userService: UsersService) {}
    @Get()
  
  findAll() {
    return this.userService.findAll();
  }
}
