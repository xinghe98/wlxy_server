import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { users } from './admin.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([users])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
