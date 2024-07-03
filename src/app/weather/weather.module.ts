import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

@NgModule({
  declarations: [WeatherDisplayComponent],
  imports: [CommonModule],
  exports: [WeatherDisplayComponent],
})
export class WeatherModule {}
