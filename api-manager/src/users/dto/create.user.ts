import { IsNotEmpty, IsString, IsEmail, IsArray } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly login: string;
}
