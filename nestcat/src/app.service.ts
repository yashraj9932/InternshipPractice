import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}

  getAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async getOneById(id: number): Promise<Cat> {
    try {
      const cat = await this.catsRepository.findOneOrFail(id);
      return cat;
    } catch (err) {
      throw err;
    }
  }

  createCat(name: string, age: string, breed: string): Promise<Cat> {
    const newUser = this.catsRepository.create({ name, age, breed });
    return this.catsRepository.save(newUser);
  }

  async updateCat(
    id: number,
    name?: string,
    age?: string,
    breed?: string,
  ): Promise<Cat> {
    const cat = await this.getOneById(id);
    if (name) cat.name = name;
    if (age) cat.age = age;
    if (breed) cat.breed = breed;
    return this.catsRepository.save(cat);
  }

  async deleteCat(id: number): Promise<Cat> {
    const cat = await this.getOneById(id);
    if (cat) {
      return this.catsRepository.remove(cat);
    } else {
      throw new NotFoundException();
    }
  }
}
