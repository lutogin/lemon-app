import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';


@Injectable()
export class UsersService {
  users: User[] = [{ id: '1', name: 'Test', login: '@test' }];

  async create(data: User): Promise<User> {
    const newUser: User = { id: this.users.length.toString(), name: data.name, login: data.login };
    this.users.push(newUser);

    return newUser;
  }

  async getById(id): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async getAll(): Promise<User[]> {
    return this.users;
  }

  // async update(id, data) {
  //
  // }
}
