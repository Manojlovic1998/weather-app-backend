import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { GetRealtimeDto } from 'src/common/dtos/get-realtime.dto';
import { GetForecastDto } from 'src/common/dtos/get-forecast.dto';

@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.WEATHER_API_KEY;
  private readonly baseUrl = process.env.WEATHER_API_URL;

  constructor(private readonly httpService: HttpService) {}

  async getRealtimeWeather(getRealtimeDto: GetRealtimeDto) {
    const { location } = getRealtimeDto;
    const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${location}`;

    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch real-time weather data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getForecastWeather(getForecastDto: GetForecastDto) {
    const { location, days } = getForecastDto;
    const url = `${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=${days}`;

    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch forecast weather data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
