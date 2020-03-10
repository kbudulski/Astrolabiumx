import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SpaceGalleryComponent } from './space-gallery/space-gallery.component';
import { MarsWeatherComponent } from './mars-weather/mars-weather.component';
import { SpacexComponent } from './spacex/spacex.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'space-gallery', component: SpaceGalleryComponent },
  { path: 'mars-weather', component: MarsWeatherComponent },
  { path: 'spacex', component: SpacexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
