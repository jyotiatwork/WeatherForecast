import { Component } from '@angular/core';
import { weatherData } from '../../weatherData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-display',
  standalone: false,
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css',
})
export class WeatherDisplayComponent {
  selectedWeatherData = weatherData;
  // constructor(private router: Router) {}
  // navigateToHome() {
  //   this.router.navigate(['/home']);
  // }
}
