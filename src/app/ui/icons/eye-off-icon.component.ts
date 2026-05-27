import { Component } from '@angular/core';

@Component({
  selector: 'app-eye-off-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="icon-svg">
      <path d="M1 12C1 12 5 4.5 12 4.5s11 7.5 11 7.5-4 7.5-11 7.5S1 12 1 12Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 3l18 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `,
  styles: [
    `
      :host { display: inline-flex; }
      .icon-svg { width: 18px; height: 18px; }
    `
  ]
})
export class EyeOffIconComponent {}
