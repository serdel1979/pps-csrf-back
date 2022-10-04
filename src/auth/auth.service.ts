import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {


  constructor( private jwtToken: JwtService){}
  
  login(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);

    const payload = {
      user: createAuthDto.user
    }
    const token = this.jwtToken.sign(payload);

    const data = {
      token,
      user: createAuthDto.user
    }
    return data;
  }


}
