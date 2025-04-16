import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  nuevoEndpoint() {
  return `Soy nuevo`;
  }

  @Get('hello')
  hello() {
    return `Soy nuevo 2`; 
  }
}
