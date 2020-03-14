import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {
  }

  links = [
    {title: this.translate.instant('HEADER.APOD'), fragment: 'space-gallery'},
    // { title: 'Mars', fragment: 'mars-weather' },
    {title: this.translate.instant('HEADER.XFLIGHTS'), fragment: 'spacex'},
  ];
}
