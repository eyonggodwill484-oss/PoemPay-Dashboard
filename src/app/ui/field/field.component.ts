import { Component } from '@angular/core';

@Component({
  selector: 'app-field',
  standalone: true,
  template: `<div class="field"><ng-content></ng-content></div>`,
  styles: [
    `
      :host { display: block; }
      .field { display: flex; flex-direction: column; gap: 8px; }
    `
  ]
})
export class FieldComponent {}
