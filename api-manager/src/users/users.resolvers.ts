import { Args, Query, Resolver, ResolveReference, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Resolver('User')
export class UsersResolvers {
  constructor(private usersService: UsersService) {}

  @Query()
  User(@Args('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Query()
  Users(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Mutation()
  createUser(_, { name, login }) {
    return this.usersService.create({ id: null, name, login });
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.usersService.getById(reference.id);
  }
}
