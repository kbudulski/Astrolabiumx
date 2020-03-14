import { Component, OnInit } from '@angular/core';
import { DailyPictureService } from './daily-picture.service';
import { DailyPictureModel } from './daily-picture.model';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.scss']
})
export class PicOfTheDayComponent implements OnInit {
  dailyPictureModel: DailyPictureModel;
  fakeType = 'image';

  constructor(private dailyPictureService: DailyPictureService) { }

  getDailyPicture(): void {
    this.dailyPictureService.getApodConfig()
      .subscribe(dailyPictureModel => (this.dailyPictureModel = dailyPictureModel));
  }

  ngOnInit() {
      //this.getDailyPicture();
  }
}
