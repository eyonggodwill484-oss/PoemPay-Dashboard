import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FieldSetComponent } from '../ui/field/field-set.component';
import { FieldGroupComponent } from '../ui/field/field-group.component';
import { FieldComponent } from '../ui/field/field.component';
import { FieldLabelComponent } from '../ui/field/field-label.component';
import { FieldDescriptionComponent } from '../ui/field/field-description.component';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FieldSetComponent,
    FieldGroupComponent,
    FieldComponent,
    FieldLabelComponent,
    FieldDescriptionComponent,
    InputComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor() {}

  onReset(email?: string, event?: Event): void {
    if (event) { event.preventDefault(); }
    console.log('Password reset requested for', { email });
    // TODO: integrate reset email flow
  }
}
