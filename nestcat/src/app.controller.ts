import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './cat.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Cat> {
    // return this.appService.updateCat(1, 'Yash Raj Goel', '21', 'human');

    return this.appService.deleteCat(1);
    // return this.appService.getAll();
    // return this.appService.createCat('Yash', '21', 'human');
  }
}
