import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LabelService } from './label.service';

@Controller('label')
export class LabelController {
  constructor(private readonly labelService: LabelService) {}

  @Get()
  findAll() {
    return this.labelService.findAll();
  }

}
