import { Component } from '@angular/core';

@Component({
  selector: 'app-field-set',
  standalone: true,
  template: `<div class="field-set"><ng-content></ng-content></div>`,
  styles: [
    `
      :host { display: block; width: 100%; }
      .field-set { width: 100%; max-width: 420px; }
    `
  ]
})
export class FieldSetComponent {}
