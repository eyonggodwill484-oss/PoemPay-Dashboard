import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Merchant {
  id: number;
  name: string;
  mid: string;
  category: string;
  verification: 'Verified' | 'Pending' | 'Rejected';
  totalVolume: string;
  onboardingDate: string;
  iconBg: string;
  iconText: string;
}

export interface MenuItem {
  name: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-merchants',
  templateUrl: './merchant.components.html',
  styleUrls: ['./merchant.component.css'],
  imports: [CommonModule, FormsModule]
})
export class MerchantsComponent {
  isSidebarCollapsed: boolean = false;
  searchTerm: string = '';

  menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: '📊', active: false },
    { name: 'Users', icon: '👥', active: false },
    { name: 'Merchants', icon: '🏪', active: true },
    { name: 'Transactions', icon: '💸', active: false },
    { name: 'Fraud Alerts', icon: '⚠️', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
    { name: 'Notifications', icon: '🔔', active: false }
  ];

  merchants: Merchant[] = [
    {
      id: 1,
      name: 'Kengne Boutique',
      mid: 'MID-22045',
      category: 'Retail & Fashion',
      verification: 'Verified',
      totalVolume: '2.4M',
      onboardingDate: 'Jan 12, 2024',
      iconBg: '#10b981',
      iconText: 'K'
    },
    {
      id: 2,
      name: 'Tech Hub Douala',
      mid: 'MID-88120',
      category: 'Services & Tech',
      verification: 'Pending',
      totalVolume: '840K',
      onboardingDate: 'May 20, 2024',
      iconBg: '#f59e0b',
      iconText: 'T'
    },
    {
      id: 3,
      name: 'Fashion House BN',
      mid: 'MID-44231',
      category: 'Retail & Fashion',
      verification: 'Rejected',
      totalVolume: '0',
      onboardingDate: 'Jun 05, 2024',
      iconBg: '#ef4444',
      iconText: 'F'
    },
    {
      id: 4,
      name: 'AgroMart Yaoundé',
      mid: 'MID-11294',
      category: 'Food & Groceries',
      verification: 'Verified',
      totalVolume: '4.8M',
      onboardingDate: 'Feb 11, 2024',
      iconBg: '#10b981',
      iconText: 'A'
    },
    {
      id: 5,
      name: 'Douala Logistics',
      mid: 'MID-33019',
      category: 'Transport & Logistics',
      verification: 'Pending',
      totalVolume: '120K',
      onboardingDate: 'Jun 10, 2024',
      iconBg: '#f59e0b',
      iconText: 'D'
    },
    {
      id: 6,
      name: 'Camer Beauty Supply',
      mid: 'MID-55902',
      category: 'Retail & Fashion',
      verification: 'Verified',
      totalVolume: '890K',
      onboardingDate: 'Mar 15, 2024',
      iconBg: '#10b981',
      iconText: 'C'
    },
    {
      id: 7,
      name: 'Alpha Telecom',
      mid: 'MID-77123',
      category: 'Services & Tech',
      verification: 'Pending',
      totalVolume: '2.5M',
      onboardingDate: 'Apr 02, 2024',
      iconBg: '#f59e0b',
      iconText: 'A'
    },
    {
      id: 8,
      name: 'Fresh Market Buea',
      mid: 'MID-33478',
      category: 'Food & Groceries',
      verification: 'Verified',
      totalVolume: '1.2M',
      onboardingDate: 'Feb 28, 2024',
      iconBg: '#10b981',
      iconText: 'F'
    },
    {
      id: 9,
      name: 'Speed Couriers',
      mid: 'MID-99812',
      category: 'Transport & Logistics',
      verification: 'Rejected',
      totalVolume: '45K',
      onboardingDate: 'Jun 18, 2024',
      iconBg: '#ef4444',
      iconText: 'S'
    },
    {
      id: 10,
      name: 'EduTech Solutions',
      mid: 'MID-44567',
      category: 'Services & Tech',
      verification: 'Pending',
      totalVolume: '0',
      onboardingDate: 'Jul 01, 2024',
      iconBg: '#f59e0b',
      iconText: 'E'
    }
  ];

  get totalMerchants(): number {
    return this.merchants.length;
  }

  get verifiedMerchants(): number {
    return this.merchants.filter(m => m.verification === 'Verified').length;
  }

  get pendingMerchants(): number {
    return this.merchants.filter(m => m.verification === 'Pending').length;
  }

  get suspendedMerchants(): number {
    return this.merchants.filter(m => m.verification === 'Rejected').length;
  }

  get filteredMerchants(): Merchant[] {
    if (!this.searchTerm.trim()) {
      return this.merchants;
    }
    const term = this.searchTerm.toLowerCase();
    return this.merchants.filter(merchant =>
      merchant.name.toLowerCase().includes(term) ||
      merchant.mid.toLowerCase().includes(term) ||
      merchant.category.toLowerCase().includes(term)
    );
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  verifyMerchant(merchant: Merchant): void {
    console.log('Verifying merchant:', merchant);
    alert(`Verifying ${merchant.name}...`);
  }
}