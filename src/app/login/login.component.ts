import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SessionService } from '../services/session.service';
import { FieldSetComponent } from '../ui/field/field-set.component';
import { FieldGroupComponent } from '../ui/field/field-group.component';
import { FieldComponent } from '../ui/field/field.component';
import { FieldLabelComponent } from '../ui/field/field-label.component';
import { FieldDescriptionComponent } from '../ui/field/field-description.component';
import { InputComponent } from '../ui/input/input.component';
import { EmailIconComponent } from '../ui/icons/email-icon.component';
import { GoogleIconComponent } from '../ui/icons/google-icon.component';
import { EyeIconComponent } from '../ui/icons/eye-icon.component';
import { EyeOffIconComponent } from '../ui/icons/eye-off-icon.component';

@Component({
  selector: 'app-login',
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
    EmailIconComponent,
    GoogleIconComponent,
    EyeIconComponent,
    EyeOffIconComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword = false;

  constructor(private router: Router, private sessionService: SessionService) {}

  onLogin(email?: string, password?: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    console.log('Sign in clicked', { email, password });
    // Save user session
    if (email) {
      const name = email.split('@')[0].split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      this.sessionService.saveUser(email, name);
    }
    this.router.navigate(['/dashboard']);
  }

  onEmailContinue(event?: Event): void {
    if (event) { event.preventDefault(); }
    console.log('Continue with Email clicked');
  }

  onGoogleContinue(event?: Event): void {
    if (event) { event.preventDefault(); }
    console.log('Continue with Google clicked');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onForgotPassword(event?: Event): void {
    if (event) { event.preventDefault(); }
    console.log('Forgot password clicked');
  }

  onCreateAccount(event?: Event): void {
    if (event) { event.preventDefault(); }
    console.log('Create account clicked');
  }

}
