import { Component } from '@angular/core';
import { CardModule} from 'primeng/card';
import { APP_NAME } from 'src/utils/application.const';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CardModule],
  templateUrl: './terms-of-service.component.html',
  styleUrl: './terms-of-service.component.css'
})
export class TermsOfServiceComponent {
  appName = APP_NAME;
}
