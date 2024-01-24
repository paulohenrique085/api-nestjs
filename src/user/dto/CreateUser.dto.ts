import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

//classe de validacao
export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  old: string;
  @IsEmail()
  email: string;
  @MinLength(8)
  @MaxLength(8)
  password: string;
}
