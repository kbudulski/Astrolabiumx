import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SpaceGalleryComponent } from './space-gallery/space-gallery.component';
import { MarsWeatherComponent } from './mars-weather/mars-weather.component';
import { SpacexComponent } from './spacex/spacex.component';
import { PicOfTheDayComponent } from './space-gallery/pic-of-the-day/pic-of-the-day.component';
import { ImageVideoLibraryComponent } from './space-gallery/image-video-library/image-video-library.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DataTableComponent } from './spacex/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatInputModule } from '@angular/material/input';
import { NgwWowModule } from 'ngx-wow';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SpaceGalleryComponent,
    MarsWeatherComponent,
    SpacexComponent,
    PicOfTheDayComponent,
    ImageVideoLibraryComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatProgressBarModule,
    NgHttpLoaderModule.forRoot(),
    MatInputModule,
    NgwWowModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }
