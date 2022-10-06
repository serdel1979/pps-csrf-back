import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {


  constructor( private jwtToken: JwtService){}
  
  login(createAuthDto: CreateAuthDto) {

    const payload = {
      user: createAuthDto.user
    }
    const token = this.jwtToken.sign(payload);

    console.log(`Se logueo el usuario ${createAuthDto.user} y se le asigno el token ${token}`);
    const data = {
      token,
      user: createAuthDto.user
    }
    return data;
  }


}
