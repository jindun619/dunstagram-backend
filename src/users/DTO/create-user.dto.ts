import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly birthday: string;

  @IsString()
  readonly imageUrl: string;
}
