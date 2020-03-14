import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';
import { AppComponent } from '../app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public dialog: MatDialog, public translate: TranslateService) {
  }

  contact: ContactFormComponent = new ContactFormComponent(this.dialog, this.translate);

  useAng() {
    this.translate.use('en');
    localStorage.setItem('lang', 'en');
  }

  usePol() {
    this.translate.use('pl');
    localStorage.setItem('lang', 'pl');
  }

  onFormButtonClick() {
    this.contact.openContactForm();
  }
}
