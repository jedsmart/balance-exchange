import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomersAddPage } from './customers-add';

@NgModule({
  declarations: [
    CustomersAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomersAddPage),
  ],
})
export class CustomersAddPageModule {}
