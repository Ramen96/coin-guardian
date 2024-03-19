import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule,FooterComponent],
  template:`
    <div class="flex justify-center items-center h-1/2 mt-36">
        <div class="w-full max-w-4xl h-80 bg-slate-100 rounded-md overflow-hidden shadow-xl shadow-slate-300 p-4 dark:bg-zinc-900 dark:shadow-slate-900 dark:shadow-lg dark:text-white">
            <h2 class="text-3xl text-center font-extralight tracking-widest mb-4 text-black dark:text-gray-200">Address/Contract</h2>
            <form class="flex items-center flex-col max-w-lg mx-auto mb-4 space-y-10">   
                <div class="relative w-full">
                    <input type="text" #inputFeild1 (keyup.enter)="processData(inputFeild1.value, inputFeild2.value)" class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" placeholder="Paste wallet address" required />
                </div>
                <div class="relative w-full">
                    <input type="text" #inputFeild2 (keyup.enter)="processData(inputFeild1.value, inputFeild2.value)" class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" placeholder="Paste wallet address" required />
                </div>
                <button type="submit" (click)="processData(inputFeild1.value, inputFeild2.value)" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-light font-mono tracking-widest text-white bg-black rounded-full border focus:outline-none dark:bg-white dark:text-black">Submit</button>
            </form>
        </div>
    </div>
  <app-footer></app-footer>
  <router-outlet></router-outlet>
  `,
  styleUrls: ["address.component.scss"]
})
export class AddressComponent {
    // Checks strings from inputs match. Also checks if either input is empty.
    processData(value1: string, value2: string) {
        const emtpyString = '';
       (value1 == emtpyString || value2 == emtpyString) 
       ? alert('Please fill out the forms') 
       : (
            (value1 == value2) 
            ? alert('It\'s a match you\'re good to go!') 
            : alert('WARNING: NOT A MATCH')
        )
    }
}
