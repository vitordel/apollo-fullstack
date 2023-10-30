import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Min(0)
  discount: number;
}