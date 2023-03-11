import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { users } from './admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ReturnModelType } from '@typegoose/typegoose';
@Injectable()
export class AdminService {
	constructor(
		@InjectModel(users)
		private readonly usersmodel: ReturnModelType<typeof users>,
	) { }
	async create(createAdminDto: CreateAdminDto) {
		const user =new this.usersmodel(createAdminDto);
		return await user.save();
	}

	async findAll() {
		const allUser = this.usersmodel.find()
		return await allUser
	}

async findOne(id: string) {
		const User = this.usersmodel.findById(id)
		return await User
	}

	update(id: number, updateAdminDto: UpdateAdminDto) {
		return `This action updates a #${id} admin`;
	}

	remove(id: number) {
		return `This action removes a #${id} admin`;
	}
}
