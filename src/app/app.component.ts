import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';
  loading: boolean;
  constructor(public translate: TranslateService, private wowService: NgwWowService) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    const savedLang = localStorage.getItem('lang');
    if (savedLang != null) {
      translate.use(savedLang);
    } else {
      translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
    }
    this.loading = true;
    this.wowService.init();
  }
}
