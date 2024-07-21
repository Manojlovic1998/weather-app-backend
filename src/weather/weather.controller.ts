import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { GetRealtimeDto } from 'src/common/dtos/get-realtime.dto';
import { GetForecastDto } from 'src/common/dtos/get-forecast.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('realtime')
  async getRealtime(@Query() getRealtimeDto: GetRealtimeDto) {
    return this.weatherService.getRealtimeWeather(getRealtimeDto);
  }

  @Get('forecast')
  async getForecast(@Query() getForecastDto: GetForecastDto) {
    return this.weatherService.getForecastWeather(getForecastDto);
  }
}
