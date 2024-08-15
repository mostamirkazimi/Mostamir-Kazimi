import { Injectable } from '@nestjs/common';
import { CreateMobileDto } from './dto/create-mobile.dto';
import { UpdateMobileDto } from './dto/update-mobile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mobile } from './entities/mobile.entity';
import { Repository } from 'typeorm';
import { CreateComputerDto } from 'src/computer/dto/create-computer.dto';

@Injectable()
export class MobileService {

   constructor(
    @InjectRepository(Mobile)
    private mobileRepository: Repository<Mobile>,
   ){}


  

  async create(createMobileDto: CreateMobileDto) {
    const mobile = this.mobileRepository.create(createMobileDto);
    return await this.mobileRepository.save(mobile);
 }

  findAll():Promise<Mobile[]> {
    return this.mobileRepository.find();
  }

  findOne(id: number):Promise<Mobile | null> {
    return this.mobileRepository.findOneBy({id})
  }

  update(id: number, updateMobileDto: UpdateMobileDto) {
    return `This action updates a #${id} mobile`;
  }

  remove(id: number) {
    return this.mobileRepository.delete(id);
  }
}
