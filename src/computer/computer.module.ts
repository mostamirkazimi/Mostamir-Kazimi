import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Computer])],
  exports:[TypeOrmModule],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}
