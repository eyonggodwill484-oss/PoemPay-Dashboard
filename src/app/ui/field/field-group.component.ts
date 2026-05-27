import { Component } from '@angular/core';

@Component({
  selector: 'app-field-group',
  standalone: true,
  template: `<div class="field-group"><ng-content></ng-content></div>`,
  styles: [
    `
      :host { display: block; }
      .field-group { display: grid; gap: 24px; }
    `
  ]
})
export class FieldGroupComponent {}
