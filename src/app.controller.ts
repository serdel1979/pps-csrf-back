import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/auth.guard';
import { TransferDto } from './dto/transfer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @UseGuards(JwtAuthGuard)
  @Post('transferir')
  transferir(@Body() transf: TransferDto ) {
    console.log(`Se transfirió $${transf.monto} a ${transf.destinatario}`);
    return transf;
  }
}
