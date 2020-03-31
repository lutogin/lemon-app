import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersResolvers } from './users/users.resolvers';
import { UsersService } from './users/users.service';
import { UserEntity } from './users/entity/user.entity';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
    }),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: true, // FOR DEV
    })
  ],
  providers: [UsersResolvers, UsersService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    console.log('Connection to DB:', connection.isConnected);
  }
}
