import { prop } from '@typegoose/typegoose';

export class users {
  @prop({ required: true })
  email: string;
  @prop({ required: true })
  password: string;
}
