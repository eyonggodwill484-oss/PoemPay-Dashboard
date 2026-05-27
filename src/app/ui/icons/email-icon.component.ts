import { Component } from '@angular/core';

@Component({
  selector: 'app-email-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="icon-svg">
      <path d="M3 5.25C3 4.00736 4.00736 3 5.25 3h13.5C19.9926 3 21 4.00736 21 5.25v13.5c0 1.2426-1.0074 2.25-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.75V5.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M4.5 6.75 11.25 12.75l6.75-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M19.5 6.75 12.75 12.75 4.5 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,
  styles: [
    `
      :host { display: inline-flex; }
      .icon-svg { width: 18px; height: 18px; }
    `
  ]
})
export class EmailIconComponent {}
