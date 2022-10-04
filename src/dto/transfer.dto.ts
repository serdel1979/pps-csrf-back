import { IsNotEmpty, IsNumber, MaxLength, MinLength } from "class-validator";

export class TransferDto{
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(6)
    destinatario: string;
    @IsNumber()
    @IsNotEmpty()
    monto: number;
}