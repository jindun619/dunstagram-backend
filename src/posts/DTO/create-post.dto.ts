import { ArrayMinSize, IsArray, IsNumber, IsString } from 'class-validator';
import { User } from 'src/users/users.entity';

export class CreatePostDTO {
  @IsNumber()
  readonly authorId: number;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  readonly images: string[];

  //actions

  @IsString()
  readonly content: string;

  @IsString()
  readonly date: string;
}
