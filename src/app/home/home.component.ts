import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule, FooterComponent],
  template: `
    <div class="h-1/2 flex justify-center items-center mt-24 sm:mt-32">
        <div>
        <h1 class="mb-4 text-3xl sm:text-5xl text-center font-mono leading-none tracking-tight text-black dark:text-slate-200">A tool to prevent user error</h1>
        <p class="mb-6 text-center text-base sm:text-lg lg:text-xl lg:ml-8 lg:mr-8 font-normal text-gray-600 dark:text-slate-400">A simple app to varify cryptocurrency wallet and contract address's match. Our code is open sorce on <a href="https://github.com/Ramen96" target="_blank" class="text-teal-500 underline">GitHub</a> feel free to inpect it for your self.</p>
        <p class="mb-6 text-center text-base sm:text-lg lg:text-xl font-bold font-mono text-black dark:text-slate-300">
            To verify wallet addresses, follow these steps:
        </p>
        <div class="w-full sm:w-3/4 lg:w-2/3 mx-auto mb-6 flex justify-center items-center">
            <ol class="list-decimal pl-6 text-base sm:text-lg lg:text-md font-normal text-gray-600 dark:text-slate-400 ml-6">
                <li class="mb-2 sm:mb-4">Copy the wallet address from the destination wallet where you intend to send your cryptocurrency.</li>
                <li class="mb-2 sm:mb-4">Paste the copied address into the first input bar.</li>
                <li class="mb-2 sm:mb-4">In your own wallet, navigate to the send field, copy the provided address.</li>
                <li class="mb-2 sm:mb-4">Paste the copied address into the second input bar.</li>
                <li class="mb-2 sm:mb-4">Click the 'Submit' button to compare and determine if the addresses match.</li>
            </ol>
        </div>
        <p class="mb-6 text-center text-base sm:text-lg lg:text-xl font-bold font-mono text-black dark:text-slate-300">
            To verify contract addresses, follow these steps:
        </p>
        <div class="w-full sm:w-3/4 lg:w-2/3 mx-auto mb-7 flex justify-center items-center">
            <ol class="list-decimal pl-6 text-base sm:text-lg lg:text-md font-normal text-gray-600 dark:text-slate-400 ml-6">
                <li class="mb-2 sm:mb-4">Copy the contract address from the source where you intend to interact with a smart contract.</li>
                <li class="mb-2 sm:mb-4">Paste the copied address into the first input bar.</li>
                <li class="mb-2 sm:mb-4">In your own wallet or interface, navigate to the interaction field, copy the provided contract address.</li>
                <li class="mb-2 sm:mb-4">Paste the copied contract address into the second input bar.</li>
                <li class="mb-2 sm:mb-4">Click the 'Submit' button to compare and verify if the addresses match.</li>
            </ol>
        </div>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"> <!-- Center the button and adjust spacing for responsiveness -->
            <a routerLink="app" class="inline-flex items-center font-mono tracking-widest justify-center px-4 sm:px-5 py-3 text-sm sm:text-base font-light text-center text-white bg-black rounded-full dark:bg-slate-200 dark:shadow dark:shadow-slate-700 dark:text-black">
                App
            </a>
        </div>
    </div>
</div>
<app-footer></app-footer>
<router-outlet></router-outlet>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
