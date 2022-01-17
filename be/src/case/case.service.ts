import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCaseDto } from './dto/update-case.dto';
import { CaseDocument, Case } from './case.schema';

@Injectable()
export class CaseService {
  constructor(@InjectModel(Case.name) private caseModel: Model<CaseDocument>){}

  findNextToLabel() {
    return this.caseModel.findOne().where('label').exists(false);
  }

  update(id: string, updateCaseDto: UpdateCaseDto) {
    return this.caseModel.findByIdAndUpdate(id, updateCaseDto);
  }

}
