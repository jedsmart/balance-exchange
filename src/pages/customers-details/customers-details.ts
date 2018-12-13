import { Customer } from './../../interfaces/customers.interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomersDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-customers-details',
  templateUrl: 'customers-details.html',
})
export class CustomersDetailsPage {

  customer: Customer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.navParams.get('data');
    console.log(this.customer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersDetailsPage');
  }

}
