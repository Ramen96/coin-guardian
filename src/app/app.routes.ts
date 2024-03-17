import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'app',
        component: AddressComponent,
        title: 'CoinGuardian'
    }
];

export default routes;