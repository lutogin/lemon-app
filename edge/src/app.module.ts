import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql'
import { AppController } from './app.controller';
import { AppService } from './app.service';

const { API_MANAGER_HOST, API_MANAGER_PORT } = process.env;

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'users', url: `http://${API_MANAGER_HOST}:${API_MANAGER_PORT}/graphql` },
        ],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
