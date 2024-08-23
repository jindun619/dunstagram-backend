import { PartialType } from '@nestjs/mapped-types';
import { createCommentDTO } from './create-comment.dto';

export class updateCommentDTO extends PartialType(createCommentDTO) {}
