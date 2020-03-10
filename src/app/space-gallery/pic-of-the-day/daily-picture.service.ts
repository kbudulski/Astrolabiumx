import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyPictureModel } from './daily-picture.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DailyPictureService {

  configUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  constructor(private http: HttpClient) {
  }

  getApodConfig(): Observable<DailyPictureModel> {
    return this.http.get<DailyPictureModel>(this.configUrl);
  }
}
