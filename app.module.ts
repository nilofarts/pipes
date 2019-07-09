import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoPipe } from './demo/demo.pipe';
import { FilterPipe } from './demo/filter.pipe';
import { IsPassedImpurePipe } from './demo-pure-impure/isPassedImpure.pipe';
import { IsPassedPurePipe } from './demo-pure-impure/isPassedPure.pipe';
import { DemoPureImpureComponent } from './demo-pure-impure/demo-pure-impure.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoPipe,
    FilterPipe,
    IsPassedPurePipe,
    IsPassedImpurePipe,
    DemoPureImpureComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
