import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodelpage',
  templateUrl: './ngmodelpage.component.html',
  styleUrls: ['./ngmodelpage.component.css']
})
export class NgmodelpageComponent implements OnInit {

  typedtext: string = "Please type here";

  constructor() { }

  ngOnInit(): void {
  }

}
