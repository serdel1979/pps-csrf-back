import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    user: string;
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}


