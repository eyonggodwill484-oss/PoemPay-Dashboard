import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface Transaction {
  id: string;
  user?: { name: string; avatar: string; role?: string };
  from?: string;
  to?: string;
  method: string;
  methodIcon?: string;
  amount: number;
  status: 'success' | 'failed' | 'pending' | 'blocked';
  timestamp: string;
  provider?: string;
  providerIcon?: string;
  userAccount?: string;
}

export type TabType = 'send' | 'add' | 'withdraw';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Transactions.component.html',
  styleUrls: ['./Transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  activeTab: TabType = 'add';
  searchQuery = '';
  currentPage = 1;

  // ── Add Money stats ──────────────────────────────────────────────────────────
  addMoneyStats = {
    totalAdded:   { value: '124.8M', label: 'Total Added (XAF)', change: '+10.4%', trend: 'up' },
    deposits:     { value: '18,502', label: 'Successful Deposits', rate: '90.2% Rate', trend: 'up' },
    failed:       { value: '142',    label: 'Failed Deposits',    change: '-0.7%',  trend: 'down' },
    funnel:       { value: '64%',    label: 'Funnel Commence',   status: 'MTN MoMo', trend: 'up' }
  };

  // ── Send Money stats ─────────────────────────────────────────────────────────
  sendMoneyStats = {
    totalSent:    { value: '84.2M',  label: 'Total Amount Sent',      change: '+7.40%', trend: 'up' },
    transactions: { value: '12,408', label: 'Successful Transactions', rate: '98% Rate', trend: 'up' },
    failed:       { value: '245',    label: 'Failed',                  change: '-0.8%',  trend: 'down' },
    pending:      { value: '86',     label: 'Pending',                 change: '-27%',   trend: 'down' }
  };

  // ── Withdraw Money stats ─────────────────────────────────────────────────────
  withdrawStats = {
    totalWithdrawn: { value: '24.5M',  label: 'Total Withdrawn',   change: '+8.4%',  trend: 'up' },
    pending:        { value: '1,204',  label: 'Pending Approvals', status: 'Action Required' },
    speed:          { value: '12.4m',  label: 'Processing Speed',  rate: '99.2% Rate', trend: 'up' },
    declined:       { value: '42',     label: 'Declined Requests', change: '-2.1%',  trend: 'down' }
  };

  // ── Add Money transactions ───────────────────────────────────────────────────
  addMoneyTransactions: Transaction[] = [
    { id: '#DP-8402045', user: { name: 'Abriyan Fasala', avatar: 'AF', role: 'op-2234' }, method: 'MTN MoMo', methodIcon: 'mtn', amount: 450000, status: 'success',  timestamp: 'Jun 15, 2025' },
    { id: '#DP-8402046', user: { name: 'Bijan Nkuong',   avatar: 'BN', role: 'op-1121' }, method: 'Visa Card', methodIcon: 'visa', amount: 1350000, status: 'failed', timestamp: 'Jun 14, 2025' },
    { id: '#DP-8402047', user: { name: 'Esther Belap',   avatar: 'EB', role: 'op-3310' }, method: 'Orange Money', methodIcon: 'orange', amount: 35000, status: 'pending', timestamp: 'Jun 13, 2025' },
    { id: '#DP-8402048', user: { name: 'Samuel Ebelo',   avatar: 'SE', role: 'op-4421' }, method: 'Mastercard', methodIcon: 'mc', amount: 900000, status: 'success', timestamp: 'Jun 13, 2025' },
    { id: '#DP-8402049', user: { name: 'Grace Kamfo',    avatar: 'GK', role: 'op-5532' }, method: 'MTN MoMo',   methodIcon: 'mtn', amount: 55000, status: 'blocked', timestamp: 'Jun 13, 2025' },
  ];

  // ── Send Money transactions ──────────────────────────────────────────────────
  sendMoneyTransactions: Transaction[] = [
    { id: '#TX-94821034', from: 'Aline Fotso',    to: 'Kongno Boutique', method: 'QR Scan', amount: 25000,  status: 'success', timestamp: '10:32 AM' },
    { id: '#TX-94821035', from: 'Jean Pierre M.', to: 'Tech Hub Douala', method: 'Dynamic QR', amount: 90000, status: 'success', timestamp: '09:18 AM' },
    { id: '#TX-94821036', from: 'Chantal Nya',    to: 'Kongno Boutique', method: 'QR Scan', amount: 12500,  status: 'pending', timestamp: '08:55 AM' },
    { id: '#TX-94821037', from: 'Samuel Ndongo',  to: 'AgreMart',        method: 'Dynamic QR', amount: 98000, status: 'blocked', timestamp: '07:30 AM' },
    { id: '#TX-94821038', from: 'Grace Kamto',    to: 'Fashion House',   method: 'QR Scan', amount: 33000,  status: 'failed', timestamp: '04:22 PM' },
  ];

  // ── Withdraw Money transactions ──────────────────────────────────────────────
  withdrawTransactions: Transaction[] = [
    { id: '#WD-8821034', userAccount: 'Fatima Bello',   provider: 'MTN Mobile Money', providerIcon: 'mtn',    method: 'MTN Mobile Money', amount: 150000, status: 'success', timestamp: 'Jun 14, 2025' },
    { id: '#WD-8821035', userAccount: 'Didier Mbarga',  provider: 'Orange Money',      providerIcon: 'orange', method: 'Orange Money',      amount: 45000,  status: 'pending', timestamp: 'Jun 14, 2025' },
    { id: '#WD-8821036', userAccount: 'Jean Paul Kamga',provider: 'MTN Mobile Money', providerIcon: 'mtn',    method: 'MTN Mobile Money', amount: 275000, status: 'failed',  timestamp: 'Jun 14, 2025' },
    { id: '#WD-8821037', userAccount: 'Alice Tagne',    provider: 'Orange Money',      providerIcon: 'orange', method: 'Orange Money',      amount: 12500,  status: 'success', timestamp: 'Jun 13, 2025' },
  ];

  ngOnInit(): void {}

  setTab(tab: TabType): void {
    this.activeTab = tab;
    this.currentPage = 1;
    this.searchQuery = '';
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      success: 'status-success',
      failed:  'status-failed',
      pending: 'status-pending',
      blocked: 'status-blocked'
    };
    return map[status] ?? '';
  }

  getStatusLabel(status: string): string {
    const map: Record<string, string> = {
      success: 'Success',
      failed:  'Failed',
      pending: 'Pending',
      blocked: 'Blocked'
    };
    return map[status] ?? status;
  }

  formatAmount(amount: number): string {
    return amount.toLocaleString('fr-CM');
  }

  get filteredAddMoney(): Transaction[] {
    return this.addMoneyTransactions.filter(t =>
      !this.searchQuery ||
      t.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      t.user?.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get filteredSendMoney(): Transaction[] {
    return this.sendMoneyTransactions.filter(t =>
      !this.searchQuery ||
      t.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      t.from?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get filteredWithdraw(): Transaction[] {
    return this.withdrawTransactions.filter(t =>
      !this.searchQuery ||
      t.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      t.userAccount?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  exportCSV(): void {
    alert('Exporting CSV…');
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }
}
