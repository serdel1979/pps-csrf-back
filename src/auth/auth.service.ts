import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  
  login(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);

    const data = {
      token:'',
      user: createAuthDto.user
    }
    return createAuthDto;
  }


}
