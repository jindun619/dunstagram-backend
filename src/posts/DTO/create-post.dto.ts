import { ArrayMinSize, IsArray, IsNumber, IsString } from 'class-validator';

export class CreatePostDTO {
  @IsNumber()
  readonly authorId: number;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  readonly images: string[];

  @IsNumber()
  readonly likes: number;

  @IsNumber()
  readonly shares: number;

  @IsString()
  readonly content: string;

  @IsString()
  readonly date: string;
}
