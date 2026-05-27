import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { FieldSetComponent } from '../ui/field/field-set.component';
import { FieldGroupComponent } from '../ui/field/field-group.component';
import { FieldComponent } from '../ui/field/field.component';
import { FieldLabelComponent } from '../ui/field/field-label.component';
import { FieldDescriptionComponent } from '../ui/field/field-description.component';
import { InputComponent } from '../ui/input/input.component';
import { EyeIconComponent } from '../ui/icons/eye-icon.component';
import { EyeOffIconComponent } from '../ui/icons/eye-off-icon.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FieldSetComponent,
    FieldGroupComponent,
    FieldComponent,
    FieldLabelComponent,
    FieldDescriptionComponent,
    InputComponent,
    EyeIconComponent,
    EyeOffIconComponent
  ],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  showPassword = false;

  constructor(private router: Router, private sessionService: SessionService) {}

  onCreate(name?: string, email?: string, password?: string, event?: Event): void {
    if (event) { event.preventDefault(); }
    console.log('Create account submitted', { name, email, password });
    // Save user session
    if (email && name) {
      this.sessionService.saveUser(email, name);
    }
    this.router.navigate(['/dashboard']);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
