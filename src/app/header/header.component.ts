import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public route: ActivatedRoute ) {}
  links = [
    { title: 'Daily', fragment: 'space-gallery' },
    { title: 'Mars', fragment: 'mars-weather' },
    { title: 'SpaceX', fragment: 'spacex' },
  ];
  ngOnInit(): void {
  }

}
