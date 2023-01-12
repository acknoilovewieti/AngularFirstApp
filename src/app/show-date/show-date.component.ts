import { Routes } from '@angular/router';
import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';

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

  constructor(svc: LogServiceService) { 
    this.message = new Date().toLocaleTimeString();
    setInterval(() => {
      this.message = new Date().toLocaleTimeString();
    }, 1000); 

    svc.consoleDebug("ShowDateComponent");
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }
}
