import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './interfaces/user.interface';
import { UserEntity } from './entity/user.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateUserDTO } from './dto/create.user';
import { UpdateUserDTO } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async create(user: CreateUserDTO): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findById(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async update(id: number, user: UpdateUserDTO): Promise<UpdateResult> {
    return await this.userRepository.update(id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
