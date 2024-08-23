import { IsNumber, IsString } from 'class-validator';

export class createCommentDTO {
  @IsNumber()
  authorId: number;

  @IsNumber()
  postId: number;

  @IsString()
  content: string;

  @IsString()
  date: string;

  @IsNumber()
  likes: number;
}
