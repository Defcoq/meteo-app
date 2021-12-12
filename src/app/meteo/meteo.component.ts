import { Component, OnInit } from '@angular/core';
import { Weather } from '../meteo';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {
  weather: Weather | undefined;

  constructor(private weatherService: MeteoService)

    { }

  ngOnInit(): void {
  }

  search(city: string) {

    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  
  }

}
