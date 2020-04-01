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
    return this.userRepository.save(user);
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async update(id: number, user: UpdateUserDTO): Promise<User> {
    await this.userRepository.update(id, user);

    return this.userRepository.findOne(id);
  }

  async delete(id): Promise<User> {
    const deletedUser = await this.userRepository.findOne(id);
    await this.userRepository.delete(id);

    return deletedUser;
  }
}
