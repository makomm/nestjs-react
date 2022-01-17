import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { CaseService } from './case.service';
import { UpdateCaseDto } from './dto/update-case.dto';

@Controller('case')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Get()
  findNextToLabel() {
    return this.caseService.findNextToLabel();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseDto: UpdateCaseDto) {
    return this.caseService.update(id, updateCaseDto);
  }

}
