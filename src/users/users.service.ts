import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createUserDto } from 'src/prisma/dto/create-user.dto';


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    create(createUserDto:createUserDto) {
        return this.prisma.user.create({data:createUserDto})
    }

    findAll() {
        return this.prisma.user.findMany({})
    }
}
