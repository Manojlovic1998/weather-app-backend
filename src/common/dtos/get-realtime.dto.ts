import { IsString, IsNotEmpty } from 'class-validator';

export class GetRealtimeDto {
  @IsString()
  @IsNotEmpty()
  location: string;
}
