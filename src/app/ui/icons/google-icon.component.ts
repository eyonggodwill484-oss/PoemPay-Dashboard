import { Component } from '@angular/core';

@Component({
  selector: 'app-google-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="icon-svg">
      <path d="M21.82 12.317c0-.74-.067-1.45-.191-2.132H12v4.038h5.412c-.233 1.242-.942 2.296-2.014 3.005v2.498h3.254c1.907-1.755 3.0-4.344 3.0-7.409Z" fill="#4285F4"/>
      <path d="M12 22c2.73 0 5.022-.905 6.696-2.451l-3.254-2.498c-.905.61-2.066.972-3.442.972-2.646 0-4.887-1.786-5.691-4.186H2.592v2.626C4.252 19.96 7.82 22 12 22Z" fill="#34A853"/>
      <path d="M6.308 13.837a6.97 6.97 0 0 1 0-3.674V7.537H2.592a9.995 9.995 0 0 0 0 8.926l3.716-2.626Z" fill="#FBBC05"/>
      <path d="M12 4.5c1.484 0 2.82.51 3.87 1.514l2.9-2.9C17.007 1.5 14.73.5 12 .5 7.82.5 4.252 2.54 2.592 5.974l3.716 2.626C7.113 6.286 9.354 4.5 12 4.5Z" fill="#EA4335"/>
    </svg>
  `,
  styles: [
    `
      :host { display: inline-flex; }
      .icon-svg { width: 18px; height: 18px; }
    `
  ]
})
export class GoogleIconComponent {}
