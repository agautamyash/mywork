import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyhomeComponent } from './myhome.component';

const routes: Routes = [
  { path: '', component: MyhomeComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MyhomeRoutingModule {
  static components = [ MyhomeComponent ];

}