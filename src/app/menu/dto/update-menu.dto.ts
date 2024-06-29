import { IsOptional, IsString } from 'class-validator';

export class UpdateMenuDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  price?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsString()
  id: string;
}
