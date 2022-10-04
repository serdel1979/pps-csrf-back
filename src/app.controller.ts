import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @UseGuards(JwtAuthGuard)
  @Get('transferir')
  transferir() {
    return "ho";
  }
}
