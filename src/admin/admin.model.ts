import { prop } from '@typegoose/typegoose';

export class users {
  @prop({ required: true })
  username: string;
  @prop({ required: true, select: false })
  password: string;
}
