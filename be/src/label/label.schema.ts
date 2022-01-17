import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LabelDocument = Label & Document;

@Schema()
export class Label {
  @Prop()
  name: string;

}

export const LabelSchema = SchemaFactory.createForClass(Label);