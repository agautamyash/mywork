import { NgModule } from '@angular/core';
/*
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { DataService } from '../core/services/data.service';
import { FilterService } from '../core/services/filter.service';
import { SorterService } from '../core/services/sorter.service';
import { TrackByService } from '../core/services/trackby.service';
import { DialogService } from '../core/services/dialog.service';
import { AuthService } from '../core/services/auth.service';
import { EventBusService } from '../core/services/event-bus.service';
import { GrowlerService } from '../core/growler/growler.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalService, IModalContent } from '../core/modal/modal.service';



@NgModule({
  imports: [CustomerRoutingModule, SharedModule,HttpClientModule],
  declarations: [CustomerRoutingModule.components],
  providers: [
    DataService, HttpClient, SorterService, FilterService, DataService, TrackByService,GrowlerService,ModalService,
    DialogService, AuthService, EventBusService
  ],
})

*/

import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [CustomerRoutingModule, SharedModule],
  declarations: [CustomerRoutingModule.components]
})
export class CustomerModule { }
