import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {


  constructor( jwtToken: JwtService){}
  
  login(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);



    const data = {
      token:'',
      user: createAuthDto.user
    }
    return createAuthDto;
  }


}
