import { Component } from '@angular/core';

@Component({
  selector: 'app-field-description',
  standalone: true,
  template: `<p class="field-description"><ng-content></ng-content></p>`,
  styles: [
    `
      :host { display: block; }
      .field-description { font-size: 12px; color: #6b7280; margin-top: 4px; }
    `
  ]
})
export class FieldDescriptionComponent {}
