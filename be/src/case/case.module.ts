import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CaseSchema, Case } from './case.schema';
import { CaseService } from './case.service';
import { CaseController } from './case.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Case.name, schema: CaseSchema}])],
  controllers: [CaseController],
  providers: [CaseService]
})
export class CaseModule {}
