import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  items? : MenuItem[];



  ngOnInit() {
    this.items = [
      {
        label: 'Cats',
      },
      {
        label: 'Dogs',
        styleClass: 'whatever'
      }
    ]
  }
}
