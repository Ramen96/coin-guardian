import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddressComponent } from './address/address.component';
import { BlockDataComponent } from './block-data/block-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,AddressComponent, BlockDataComponent],
  template:`
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'coin-guardian';
}
