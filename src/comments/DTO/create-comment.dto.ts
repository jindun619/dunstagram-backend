import { IsNumber, IsString } from 'class-validator';

export class createCommentDTO {
  @IsNumber()
  authorId: number;

  @IsString()
  content: string;

  @IsString()
  date: string;

  @IsNumber()
  likes: number;
}
