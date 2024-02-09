import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset'

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [FieldsetModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
