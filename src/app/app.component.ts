import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';

  constructor(public translate: TranslateService) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    const savedLang = localStorage.getItem('lang');
    if (savedLang != null) {
      translate.use(savedLang);
    } else {
      translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
    }
  }
}
