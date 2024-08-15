import { Module } from '@nestjs/common';
import { MobileService } from './mobile.service';
import { MobileController } from './mobile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mobile } from './entities/mobile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Mobile])],
  exports:[TypeOrmModule],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
