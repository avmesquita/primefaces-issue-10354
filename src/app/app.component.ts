import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  counter = 0;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  onClick() {
    this.counter++;
  }
}
