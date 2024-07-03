import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './weather/weather-display/weather-display.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'checkweather', component: WeatherDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
