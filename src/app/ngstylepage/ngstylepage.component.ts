import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstylepage',
  templateUrl: './ngstylepage.component.html',
  styleUrls: ['./ngstylepage.component.css']
})
export class NgstylepageComponent implements OnInit {

  visibility: boolean = true;
  pinkcolor = "pink";

  toggle() {
    this.visibility = !this.visibility;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
