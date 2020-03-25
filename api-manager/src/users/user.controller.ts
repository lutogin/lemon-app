import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interaces/user.interface';
import { CreateUserDTO } from './dto/create.user';

@Controller('user')
export class UserController {
  constructor(private usersService: UsersService) {}
}
