import { Customer } from './../../interfaces/customers.interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {

  customers: Customer[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customers = [
      this.createCustomer(1, 'Leonardo', 'Fuenmayor'),
      this.createCustomer(2, 'Elizbeth', 'Colmenarez')
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }

  public viewDetails(customer: Customer) {
    console.log('viewDetails: ', customer);
    this.navCtrl.push('CustomersDetailsPage', {
      data: customer
    });
  }

  private createCustomer(id:number, firstName: string, lastName: string): Customer {
    let customer: Customer = {
      id: id,
      firstName: firstName,
      lastName: lastName
    };
    return customer;
  }

}
