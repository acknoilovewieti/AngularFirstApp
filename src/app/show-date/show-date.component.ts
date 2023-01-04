import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.message = new Date().toLocaleTimeString();
    setInterval(() => {
      this.message = new Date().toLocaleTimeString();
    }, 1000); 
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}
