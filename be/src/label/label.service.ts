import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Label, LabelDocument } from './label.schema';

@Injectable()
export class LabelService {
  constructor(@InjectModel(Label.name) private labelModel: Model<LabelDocument>){}

  findAll() {
    return this.labelModel.find().exec();
  }

}
