import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { users } from './admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ReturnModelType } from '@typegoose/typegoose';
@Injectable()
export class AdminService {
  constructor(
    @InjectModel(users)
    private readonly usersmodel: ReturnModelType<typeof users>,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    const user = new this.usersmodel(createAdminDto);
    await user.save();
    return {
      data: '',
      code: 0,
      message: 'User Created Successfully',
    };
  }

  async findAll() {
    const allUser = this.usersmodel.find();
    return await allUser;
  }

  async findOne(id: string) {
    const User: users = await this.usersmodel.findById(id);
    return User;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
