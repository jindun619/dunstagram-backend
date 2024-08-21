import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(userData: CreateUserDTO): Promise<User> {
    const user = new User();
    user.name = userData.name;
    user.birthday = userData.birthday;
    user.imageUrl = userData.imageUrl;
    return this.usersRepository.save(user);
  }

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  update(id: number, userData: UpdateUserDTO): Promise<UpdateResult> {
    return this.usersRepository.update(id, userData);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete({ id: id });
  }
}
