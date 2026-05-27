import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface StatCard {
  icon: string;
  iconBg: string;
  iconColor: string;
  change: string;
  changeType: 'positive' | 'negative' | 'warning';
  value: string;
  label: string;
  barColor: string;
  sub: string;
}

interface Customer {
  name: string;
  uid: string;
  initials: string;
  avatarColor: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  regDate: string;
}

interface NavItem {
  icon: string;
  label: string;
  active: boolean;
  badge?: string;
}

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  navItems: NavItem[] = [
    { icon: 'dashboard', label: 'Dashboard', active: false },
    { icon: 'customer',  label: 'Customer',  active: true  },
    { icon: 'merchants', label: 'Merchants', active: false },
    { icon: 'transactions', label: 'Transactions', active: false },
    { icon: 'fraud', label: 'Fraud Alerts', active: false, badge: '7' },
    { icon: 'settings', label: 'Settings', active: false },
    { icon: 'notifications', label: 'Notifications', active: false },
  ];

  searchQuery = '';

  stats: StatCard[] = [
    {
      label: 'TOTAL USERS',
      value: '24,182',
      change: '+4.2%',
      changeType: 'positive',
      sub: '+312 this week',
      icon: 'users',
      iconBg: '#ede9fe',
      iconColor: '#7c3aed',
      barColor: '#7c3aed',
    },
    {
      label: 'ACTIVE USERS',
      value: '18,452',
      change: '+8.1%',
      changeType: 'positive',
      sub: '76% of total base',
      icon: 'active',
      iconBg: '#d1fae5',
      iconColor: '#059669',
      barColor: '#059669',
    },
    {
      label: 'NEW USERS (WEEK)',
      value: '1,105',
      change: '-2.4%',
      changeType: 'negative',
      sub: 'Last 7 days registration',
      icon: 'new',
      iconBg: '#fef3c7',
      iconColor: '#d97706',
      barColor: '#f59e0b',
    },
    {
      label: 'SUSPENDED USERS',
      value: '124',
      change: '+12 new',
      changeType: 'warning',
      sub: 'Needs compliance review',
      icon: 'suspended',
      iconBg: '#fee2e2',
      iconColor: '#dc2626',
      barColor: '#ef4444',
    },
  ];

  customers: Customer[] = [
    {
      name: 'Aline Fotso',
      uid: 'UID-8823',
      initials: 'AF',
      avatarColor: '#e0c3fc',
      email: 'aline.fotso@example.com',
      phone: '+237 671 234 567',
      status: 'Active',
      regDate: 'Jun 12, 2024',
    },
    {
      name: 'Jean-Pierre Mbeki',
      uid: 'UID-4417',
      initials: 'JM',
      avatarColor: '#c7d2fe',
      email: 'jp.mbeki@domain.cm',
      phone: '+237 699 888 777',
      status: 'Inactive',
      regDate: 'Apr 05, 2024',
    },
    {
      name: 'Chantal Biya',
      uid: 'UID-2901',
      initials: 'CB',
      avatarColor: '#bfdbfe',
      email: 'chantal.b@yandex.com',
      phone: '+237 675 444 333',
      status: 'Suspended',
      regDate: 'Dec 22, 2023',
    },
    {
      name: 'Samuel Ndongo',
      uid: 'UID-6634',
      initials: 'SN',
      avatarColor: '#a7f3d0',
      email: 'sam.ndongo@outlook.fr',
      phone: '+237 655 000 111',
      status: 'Active',
      regDate: 'Feb 11, 2024',
    },
    {
      name: 'Grace Kamto',
      uid: 'UID-1155',
      initials: 'GK',
      avatarColor: '#fde68a',
      email: 'g.kamto@gmail.com',
      phone: '+237 677 555 999',
      status: 'Active',
      regDate: 'Aug 30, 2024',
    },
  ];

  get filteredCustomers(): Customer[] {
    if (!this.searchQuery) return this.customers;
    const q = this.searchQuery.toLowerCase();
    return this.customers.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.uid.toLowerCase().includes(q)
    );
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':    return 'status-active';
      case 'inactive':  return 'status-inactive';
      case 'suspended': return 'status-suspended';
      default:          return '';
    }
  }

  totalUsers = 24182;
  currentPage = 1;
  pageSize = 10;

  get totalPages(): number {
    return Math.ceil(this.totalUsers / this.pageSize);
  }

  goToPage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPaginationPages(): (number | string)[] {
    if (this.totalPages <= 7) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
    if (this.currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', this.totalPages];
    }
    if (this.currentPage >= this.totalPages - 3) {
      return [1, '...', this.totalPages - 4, this.totalPages - 3,
              this.totalPages - 2, this.totalPages - 1, this.totalPages];
    }
    return [1, '...', this.currentPage - 1, this.currentPage,
            this.currentPage + 1, '...', this.totalPages];
  }
}
