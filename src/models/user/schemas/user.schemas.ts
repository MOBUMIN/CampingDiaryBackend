import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  password: number;
}

export const UserSchema = SchemaFactory.createForClass(User);