import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  country: string;
  buttonState: boolean;

  constructor(public dialog: MatDialog, private translate: TranslateService) {
  }

  public openContactForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {firstName: this.firstName, lastName: this.lastName, email: this.email, country: this.country};
    const dialogRef = this.dialog.open(ContactFormComponent, dialogConfig);

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      this.buttonState = false;
      return this.translate.instant('CONTACT.EMPTYMAIL');
    }
    return this.email.hasError('email') ? this.translate.instant('CONTACT.WRONGMAIL') : '';
  }

  ngOnInit(): void {
  }

  onSubmitClick() {
    this.dialog.closeAll();
  }
}
