import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import {
  DeleteResult,
  MissingDeleteDateColumnError,
  Repository,
  UpdateResult,
} from 'typeorm';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: CreateUserDTO): Promise<User> {
    const user = this.usersRepository.create(userData);
    return await this.usersRepository.save(user);
  }

  async getAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: number, userData: UpdateUserDTO): Promise<UpdateResult> {
    const result = await this.usersRepository.update(id, userData);
    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
    return result;
  }

  async delete(id: number): Promise<DeleteResult> {
    const result = await this.usersRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
    return result;
  }
}
