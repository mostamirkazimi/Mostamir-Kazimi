import { Injectable } from '@nestjs/common';
import { CreateComputerDto } from './dto/create-computer.dto';
import { UpdateComputerDto } from './dto/update-computer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ComputerService {
  constructor(
    @InjectRepository(Computer)
    private computerRepository: Repository<Computer>,
  ){}


  

   async create(createComputerDto: CreateComputerDto) {
     const computer = this.computerRepository.create(createComputerDto);
     return await this.computerRepository.save(computer);
  }

  findAll(): Promise<Computer[]> {
    return this.computerRepository.find();
  }

  findOne(id: number):Promise<Computer | null> {
    return this.computerRepository.findOneBy({id});
  }

  update(id: number, updateComputerDto: UpdateComputerDto) {
    return `This action updates a #${id} computer`;
  }

  remove(id: number) {
    return this.computerRepository.delete(id);
  }
}
