import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  template: `<div class="page-container"><h1>💳 Transactions</h1><p>Transaction management and history coming soon...</p></div>`,
  styles: [`.page-container { padding: 40px; }`],
  standalone: true,
  imports: [CommonModule]
})
export class TransactionsComponent {}
