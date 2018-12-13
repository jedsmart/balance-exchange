import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransactionsPage } from './../transactions/transactions';
import { CustomersPage } from '../customers/customers';
import { AccountsPage } from '../accounts/accounts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabTransactions: any;
  tabCustomers: any;
  tabAccounts: any;

  constructor(public navCtrl: NavController) {
    this.tabTransactions = TransactionsPage;
    this.tabCustomers = CustomersPage;
    this.tabAccounts = AccountsPage;
  }

}
