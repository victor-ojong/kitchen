import { IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  vendorId: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  price: string;
  // itemNumber: number;

  @IsString()
  category: string;
}
