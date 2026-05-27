import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isLightMode = false;
  sidebarOpen = false;
  sidebarCollapsed = false;

  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
  }

  statsCards = [
    {
      icon: '👥',
      iconBg: 'rgba(99,102,241,0.15)',
      change: '+6.3%',
      positive: true,
      value: '24,182',
      label: 'TOTAL USERS',
      barWidth: '72%',
      barColor: '#6366f1',
      footer: '+202 this week'
    },
    {
      icon: '🏪',
      iconBg: 'rgba(245,158,11,0.15)',
      change: '+2.8%',
      positive: true,
      value: '1,284',
      label: 'TOTAL MERCHANTS',
      barWidth: '58%',
      barColor: '#f59e0b',
      footer: '+18 this week'
    },
    {
      icon: '💳',
      iconBg: 'rgba(16,185,129,0.15)',
      change: '+12.4%',
      positive: true,
      value: '48.2M',
      label: 'DAILY VOLUME (XAF)',
      barWidth: '85%',
      barColor: '#10b981',
      footer: 'vs XAF 42.8M yesterday'
    },
    {
      icon: '🛡️',
      iconBg: 'rgba(239,68,68,0.15)',
      change: '+3 new',
      positive: false,
      value: '7',
      label: 'ACTIVE FRAUD ALERTS',
      barWidth: '35%',
      barColor: '#ef4444',
      footer: 'Requires immediate review'
    }
  ];

  transactions = [
    {
      name: 'Aline Fotso',
      id: 'USR-4821',
      initials: 'AF',
      avatarColor: '#6366f1',
      merchant: 'Kongne Boutique',
      merchantInitial: 'K',
      merchantColor: '#6366f1',
      method: 'QR Scan',
      methodColor: '#6366f1',
      amount: 'XAF 25,000',
      status: 'Success',
      date: 'Jun 12, 2025',
      time: '10:12 AM'
    },
    {
      name: 'Jean-Pierre Mbeki',
      id: 'USR-CRT',
      initials: 'JM',
      avatarColor: '#f59e0b',
      merchant: 'Tech Hub Douala',
      merchantInitial: 'T',
      merchantColor: '#3b82f6',
      method: 'Dynamic QR',
      methodColor: '#f59e0b',
      amount: 'XAF 50,000',
      status: 'Success',
      date: 'Jun 12, 2025',
      time: '09:18 AM'
    },
    {
      name: 'Chantal Biya',
      id: 'USR-CHB',
      initials: 'CB',
      avatarColor: '#ec4899',
      merchant: 'Kongne Boutique',
      merchantInitial: 'K',
      merchantColor: '#6366f1',
      method: 'QR Scan',
      methodColor: '#6366f1',
      amount: 'XAF 12,500',
      status: 'Pending',
      date: 'Jun 12, 2025',
      time: '08:45 AM'
    },
    {
      name: 'Samuel Ndongo',
      id: 'USR-SND',
      initials: 'SN',
      avatarColor: '#10b981',
      merchant: 'AgroMart Yaoundé',
      merchantInitial: 'A',
      merchantColor: '#10b981',
      method: 'Dynamic QR',
      methodColor: '#f59e0b',
      amount: 'XAF 98,000',
      status: 'Success',
      date: 'Jun 12, 2025',
      time: '07:55 AM'
    },
    {
      name: 'Grace Kunto',
      id: 'USR-GKU',
      initials: 'GK',
      avatarColor: '#8b5cf6',
      merchant: 'Fashion House BN',
      merchantInitial: 'F',
      merchantColor: '#f97316',
      method: 'QR Scan',
      methodColor: '#6366f1',
      amount: 'XAF 33,000',
      status: 'Failed',
      date: 'Jun 11, 2025',
      time: '11:27 PM'
    }
  ];

  fraudAlerts = [
    {
      level: 'HIGH RISK',
      levelClass: 'high-risk',
      time: '2 min ago',
      title: 'Unusual TX Pattern',
      desc: 'UID-5391 · 12 rapid transactions above XAF 60,000',
    },
    {
      level: 'MEDIUM',
      levelClass: 'medium',
      time: '7 min ago',
      title: 'New Device Login',
      desc: 'UID-7821 · Unrecognized device detected',
    },
    {
      level: 'HIGH RISK',
      levelClass: 'high-risk',
      time: '15 min ago',
      title: 'Account Takeover Attempt',
      desc: 'UID-1004 · 8 false PIN attempts',
    }
  ];
}
