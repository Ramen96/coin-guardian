import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  template: `
    <nav class="bg-slate-100 dark:dark:bg-zinc-900 dark:shadow-lg dark:shadow-slate-700 shadow-md shadow-gray-350 fixed top-0 w-full">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl tracking-widest font-light whitespace-nowrap dark:text-slate-100">CoinGuardian</span>
        </a>
        <div class="flex items-center space-x-3">
          <a href="test" class="text-white font-light text-2xl justify-self">test</a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
