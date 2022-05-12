import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('app')
// When we do the above instead of the below then base direct wala/home route becomes host/app instead of host/
//same if we put a string below in get, it will further nest ki host/app/:downget
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
