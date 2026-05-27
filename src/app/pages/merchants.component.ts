import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merchants',
  template: `<div class="page-container"><h1>🧾 Merchants</h1><p>Merchant management and analytics coming soon...</p></div>`,
  styles: [`.page-container { padding: 40px; }`],
  standalone: true,
  imports: [CommonModule]
})
export class MerchantsComponent {}
