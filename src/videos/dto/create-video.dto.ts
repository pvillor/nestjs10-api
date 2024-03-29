import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string | null;

  @ApiProperty()
  @Min(1)
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  category_id: number;
}

export class CreateVideoWithUploadDoc extends CreateVideoDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: string;
}
