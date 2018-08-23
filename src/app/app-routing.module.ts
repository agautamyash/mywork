import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';


const app_routes: Routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'myhome', loadChildren: 'app/myhome/myhome.module#MyhomeModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },


    
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule' },
    { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
    { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page



];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }