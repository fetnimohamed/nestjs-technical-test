import {
  isNotEmpty,
  isString,
  IsNumber,
  IsNotEmpty,
  IsString,
} from 'class-validator';
export class ItemDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  active: boolean;
}
export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  active: boolean;
}
