import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LabelSchema, Label } from './label.schema';
import { LabelService } from './label.service';
import { LabelController } from './label.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: Label.name, schema: LabelSchema}])],
  controllers: [LabelController],
  providers: [LabelService]
})
export class LabelModule {}
