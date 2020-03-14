import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchModel } from './launch.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  configUrl;

  constructor(private http: HttpClient) {
  }

  getLaunchConfig(flightSelection: string): Observable<LaunchModel[]> {
    if (flightSelection === 'all') {
      this.configUrl = 'https://api.spacexdata.com/v3/launches';
    } else if (flightSelection === 'past') {
      this.configUrl = 'https://api.spacexdata.com/v3/launches/past';
    } else if (flightSelection === 'upcoming') {
      this.configUrl = 'https://api.spacexdata.com/v3/launches/upcoming';
    } else {
      this.configUrl = 'https://api.spacexdata.com/v3/launches';
    }
    return this.http.get<LaunchModel[]>(this.configUrl);
  }
}
