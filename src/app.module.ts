import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';


import { ConfigModule } from '@nestjs/config';

import { ComputerModule } from './computer/computer.module';
import { MobileModule } from './mobile/mobile.module';
import { Mobile } from './mobile/entities/mobile.entity';
import { Computer } from './computer/entities/computer.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'computer_and_mobile_shop',
      entities: [Mobile,Computer],
      synchronize: true,
    }),
    ComputerModule,
    MobileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
