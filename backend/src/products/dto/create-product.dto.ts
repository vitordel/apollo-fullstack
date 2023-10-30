import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  category_id: number; // Assuming category_id is a string, adjust based on your actual data type

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;
}