import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-block-data',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex justify-center items-center h-1/2 mt-36">
        <div class="w-full max-w-4xl h-80 bg-slate-100 rounded-md overflow-hidden shadow-xl shadow-slate-300 p-4 dark:bg-zinc-900 dark:shadow-slate-900 dark:shadow-lg dark:text-white">
            <h2 class="text-3xl text-center font-extralight tracking-widest mb-4 text-black dark:text-gray-200">Blockchain Data</h2>
        </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrl: './block-data.component.scss'
})
export class BlockDataComponent {

}
