import { Query, Resolver } from '@nestjs/graphql';

const users = [
  {
    id: '1',
    name: 'Ada Lovelace',
  },
  {
    id: '2',
    name: 'Alan Turing',
  },
];

@Resolver()
export class UserResolver {
  @Query()
  me() {
    return users[0];
  }

  @Resolver('User')
  user({ id }: typeof users[0]) {
    return users.find(user => user.id === id);
  }
}
