import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './Admin_dashboard/dashboard.component';
import { TransactionsComponent } from './Transactions/Transactions.component';
import { AnalyticsComponent } from './pages/analytics.component';
import { SettingsComponent } from './pages/settings.component';
import { CustomerComponent } from './customer/customer.component';
import { MerchantsComponent } from './merchant/merchant.components';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Admin_dashboard', component: DashboardComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'merchant', component: MerchantsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'settings', component: SettingsComponent }
];
