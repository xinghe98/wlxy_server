import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { config } from '../conf/config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypegooseModule.forRoot(config.MONGO_URL, {}),
    AdminModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
