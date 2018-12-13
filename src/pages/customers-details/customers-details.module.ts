import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomersDetailsPage } from './customers-details';

@NgModule({
  declarations: [
    CustomersDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomersDetailsPage),
  ],
})
export class CustomersDetailsPageModule {}
