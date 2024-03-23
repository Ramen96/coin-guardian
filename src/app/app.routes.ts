import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { BlockDataComponent } from './block-data/block-data.component';


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
    },
    {
        path: 'test',
        component: BlockDataComponent,
        title: 'CoinGuardian'
    }
];

export default routes;