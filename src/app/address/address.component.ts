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
        <div class="w-full max-w-4xl h-96 bg-slate-100 rounded-md overflow-hidden shadow-xl shadow-slate-300 p-4 dark:bg-zinc-900 dark:shadow-slate-900 dark:shadow-lg dark:text-white">
            <h2 class="text-3xl text-center font-extralight tracking-widest mb-4 text-black dark:text-gray-200">Address/Contract</h2>
            <form class="flex items-center flex-col max-w-lg mx-auto mb-4 space-y-10">   
                <div class="relative w-full">
                    <input type="text" #inputFeild1 (keyup.enter)="processData(inputFeild1.value, inputFeild2.value)" class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" placeholder="Paste wallet address" required />
                </div>
                <div class="relative w-full">
                    <input type="text" #inputFeild2 (keyup.enter)="processData(inputFeild1.value, inputFeild2.value)" class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" placeholder="Paste wallet address" required />
                </div>
                <!-- Copy to clipboard component -->
                <div class="w-full max-w-[32rem]">
                    <div class="relative">
                        <label for="npm-install-copy-button" class="sr-only">Label</label>
                        <input id="npm-install-copy-button" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value='' disabled readonly>
                        <button data-copy-to-clipboard-target="npm-install-copy-button" data-tooltip-target="tooltip-copy-npm-install-copy-button" class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                            <span id="default-icon">
                                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                </svg>
                            </span>
                            <span id="success-icon" class="hidden inline-flex items-center">
                                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                            </span>
                        </button>
                        <div id="tooltip-copy-npm-install-copy-button" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            <span id="default-tooltip-message">Copy to clipboard</span>
                            <span id="success-tooltip-message" class="hidden">Copied!</span>
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
                <!-- End of copy to clipboard component -->
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
    // Checks strings from inputs match.
    processData(value1: string, value2: string) {
        const emtpyString = '';
       (value1 == emtpyString || value2 == emtpyString) // Check if feilds are empty
       ? alert('Please fill out the forms') 
       : (
            (value1 == value2) // If not empty see if they match.
            ?  alert('It\'s a match you\'re good to go!')
            : alert('WARNING: NOT A MATCH')
        )
    }
}
