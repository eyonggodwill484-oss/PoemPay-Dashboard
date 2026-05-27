import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  exportAs: 'appInput',
  imports: [FormsModule],
  template: `
    <div class="input-root">
      <input
        [id]="id"
        [name]="name || id"
        [(ngModel)]="internalValue"
        [type]="type"
        [placeholder]="placeholder"
        [attr.aria-label]="ariaLabel || placeholder || id"
        [required]="required"
      />

      <ng-content select=".right-slot"></ng-content>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .input-root { position: relative; display: flex; align-items: center; }
      input {
        width: 100%;
        border-radius: 14px;
        border: 1px solid #d1d5db;
        height: 54px;
        padding: 0 18px;
        padding-right: 52px;
        outline: none;
        font-size: 14px;
        background: white;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      input:focus {
        border-color: #6366f1;
        box-shadow: 0 0 0 4px rgba(99,102,241,0.12);
      }
      ::ng-deep .right-slot,
      .right-slot,
      ::ng-deep .input-icon-button,
      .input-icon-button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 36px;
        border-radius: 10px;
        border: none;
        background: rgba(15,23,42,0.04);
        cursor: pointer;
        transition: background 150ms ease, transform 150ms ease;
      }
      ::ng-deep .input-icon-button:hover,
      .input-icon-button:hover {
        background: rgba(15,23,42,0.08);
        transform: translateY(-50%) scale(1.02);
      }
      .eye {
        font-size: 16px;
        color: #4b5563;
      }
    `
  ]
})
export class InputComponent {
  @Input() id = '';
  @Input() name?: string;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() ariaLabel?: string;
  @Input() required = false;

  internalValue = '';

  get value(): string {
    return this.internalValue;
  }

  set value(v: string) {
    this.internalValue = v;
  }
}
