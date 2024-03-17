import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
<footer class="mt-8 text-center">
        <p class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">Support Us through Donations</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <p class="text-sm text-gray-500 dark:text-gray-400">BTC: <span class="font-mono">Your_BTC_Address</span></p>
            <p class="text-sm text-gray-500 dark:text-gray-400">ETH: <span class="font-mono">Your_ETH_Address</span></p>
            <p class="text-sm text-gray-500 dark:text-gray-400">SOL: <span class="font-mono">Your_SOL_Address</span></p>
            <p class="text-sm text-gray-500 dark:text-gray-400">AVAX: <span class="font-mono">Your_AVAX_Address</span></p>
        </div>
    </footer>


  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
