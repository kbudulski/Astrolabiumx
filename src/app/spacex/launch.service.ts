import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchModel } from './launch.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  configUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {
  }

  getLaunchConfig(): Observable<LaunchModel[]> {
    return this.http.get<LaunchModel[]>(this.configUrl);

  }
}
