import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'noteapp-session';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
