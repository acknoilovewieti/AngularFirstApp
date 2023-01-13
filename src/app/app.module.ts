import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowDateComponent } from './show-date/show-date.component';
import { NgstylepageComponent } from './ngstylepage/ngstylepage.component';
import { NgmodelpageComponent } from './ngmodelpage/ngmodelpage.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogServiceService } from './log-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './github.service';

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
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [LogServiceService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
