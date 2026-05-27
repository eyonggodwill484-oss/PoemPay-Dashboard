import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  template: `<div class="page-container"><h1>⚙️ Settings</h1><p>System settings and preferences coming soon...</p></div>`,
  styles: [`.page-container { padding: 40px; }`],
  standalone: true,
  imports: [CommonModule]
})
export class SettingsComponent {}
