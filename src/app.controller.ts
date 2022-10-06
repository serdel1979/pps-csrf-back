import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
import { JwtAuthGuard } from './auth/auth.guard';
import { TransferDto } from './dto/transfer.dto';

@Controller()
export class AppController {
  constructor() {}

  private transfer: TransferDto[] = [];
  
  @UseGuards(JwtAuthGuard)
  @Post('transferir')
  transferir(@Body() transf: TransferDto ) {
    console.log(`Se transfirió $${transf.monto} a ${transf.destinatario}`);
    this.transfer.push(transf);
    return transf;
  }


  @UseGuards(JwtAuthGuard)
  @Get('transferencias')
  getAll() {
    return this.transfer;
  }


}
