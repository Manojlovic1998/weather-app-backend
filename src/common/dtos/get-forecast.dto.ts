import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class GetForecastDto {
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsInt()
  @Min(1)
  @Max(3)
  days: number;
}
