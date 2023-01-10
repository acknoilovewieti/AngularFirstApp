import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowDateComponent } from './show-date/show-date.component';
import { NgstylepageComponent } from './ngstylepage/ngstylepage.component';
import { NgmodelpageComponent } from './ngmodelpage/ngmodelpage.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: ShowDateComponent},
  {path: 'Home', component: ShowDateComponent},
  {path: 'NgStyle', component: NgstylepageComponent},
  {path: 'NgModel', component: NgmodelpageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ShowDateComponent,
    NgstylepageComponent,
    NgmodelpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
