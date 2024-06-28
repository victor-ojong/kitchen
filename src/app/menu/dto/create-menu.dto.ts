import { IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  price: string;

  @IsString()
  category: string;
}
