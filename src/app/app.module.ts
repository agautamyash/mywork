import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import the feature module here so you can add it to the imports array below
import { AppRoutingModule } from './app-routing.module';




import { ParatagDirective } from './paratag.directive';
import { ChangedirDirective } from './changedir.directive';
import { MyseruserComponent } from './myseruser/myseruser.component';
import { MyseruserPipe } from './myseruser.pipe';
import { MyseruserDirective } from './myseruser.directive';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ParatagDirective,
    ChangedirDirective,
    MyseruserComponent,
    MyseruserPipe,
    MyseruserDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,           // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule    // add the feature module here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
