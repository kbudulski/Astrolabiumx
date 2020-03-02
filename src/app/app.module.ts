import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { SpaceGalleryComponent } from './space-gallery/space-gallery.component';
import { MarsWeatherComponent } from './mars-weather/mars-weather.component';
import { SpacexComponent } from './spacex/spacex.component';
import { PicOfTheDayComponent } from './space-gallery/pic-of-the-day/pic-of-the-day.component';
import { ImageVideoLibraryComponent } from './space-gallery/image-video-library/image-video-library.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    SpaceGalleryComponent,
    MarsWeatherComponent,
    SpacexComponent,
    PicOfTheDayComponent,
    ImageVideoLibraryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
