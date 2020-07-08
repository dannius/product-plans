import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core';
import { LayoutModule } from '@app/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      MaterialModule,
      LayoutModule,
      CoreModule.forRoot(),
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
