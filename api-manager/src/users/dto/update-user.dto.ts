import {
  IsString,
  IsOptional,
} from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsString()
  readonly login: string;
}
