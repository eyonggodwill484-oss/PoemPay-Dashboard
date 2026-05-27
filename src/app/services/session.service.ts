import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface UserSession {
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly STORAGE_KEY = 'poempay_user_session';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  saveUser(email: string, name: string): void {
    if (!this.isBrowser()) return;
    const userData: UserSession = { email, name };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userData));
  }

  getUser(): UserSession | null {
    if (!this.isBrowser()) return null;
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  clearUser(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
