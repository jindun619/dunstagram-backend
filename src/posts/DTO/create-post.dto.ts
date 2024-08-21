import { ArrayMinSize, IsArray, IsString } from 'class-validator';

export class CreatePostDTO {
  //author

  //images
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  readonly images: string[];

  //actions

  //content
  @IsString()
  readonly content: string;

  //date
  @IsString()
  readonly date: string;
}
