import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  template: `<div class="page-container"><h1>📊 Analytics</h1><p>Advanced analytics and reporting coming soon...</p></div>`,
  styles: [`.page-container { padding: 40px; }`],
  standalone: true,
  imports: [CommonModule]
})
export class AnalyticsComponent {}
