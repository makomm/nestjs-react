import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/user.schema';
import { Label } from 'src/label/label.schema';

export type CaseDocument = Case & Document;

@Schema()
export class Case {
  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Label'})
  label: Label;

  @Prop()
  labelTime: Number;

}

export const CaseSchema = SchemaFactory.createForClass(Case);