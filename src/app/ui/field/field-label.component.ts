import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-label',
  standalone: true,
  template: `<label class="field-label" [for]="htmlFor"><ng-content></ng-content></label>`,
  styles: [
    `
      :host { display: block; }
      .field-label { font-size: 13px; font-weight: 600; color: #374151; }
    `
  ]
})
export class FieldLabelComponent {
  @Input() htmlFor = '';
}
