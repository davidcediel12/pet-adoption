import { Component } from '@angular/core';
import { APP_NAME } from 'src/utils/application.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  appName = APP_NAME;
}
