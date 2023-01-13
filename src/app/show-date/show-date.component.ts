import { Routes } from '@angular/router';
import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.css']
})
export class ShowDateComponent implements OnInit {

  message: string;
  items = ["Vasya", "Luska", "Mitrofan", "Kolya", "Petya"];
  loggedIn: boolean = true;
  isCollapsed: boolean = true;

  userName: string = "";
  response: any;

  constructor(svc: LogServiceService, private http:HttpClient) { 
    this.message = new Date().toLocaleTimeString();
    setInterval(() => {
      this.message = new Date().toLocaleTimeString();
    }, 1000); 

    svc.consoleLog("ShowDateComponent");


  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }

  ngOnInit(): void {
  }
}
