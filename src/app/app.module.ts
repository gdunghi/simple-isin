import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateIsinComponent } from './create-isin/create-isin.component';
import { ListIsinComponent } from './list-isin/list-isin.component';
import { IsinService } from './isin.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateIsinComponent,
    ListIsinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IsinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
