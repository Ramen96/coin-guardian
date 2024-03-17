import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddressComponent } from './address/address.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,AddressComponent],
  template:`
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'coin-guardian';
}
