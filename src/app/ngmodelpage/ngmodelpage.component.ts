import { LogServiceService } from './../log-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodelpage',
  templateUrl: './ngmodelpage.component.html',
  styleUrls: ['./ngmodelpage.component.css']
})
export class NgmodelpageComponent implements OnInit {

  typedtext: string = "Please type here";

  constructor(svc: LogServiceService) { 
    svc.consoleLog("NgmodelpageComponent");
  }

  ngOnInit(): void {
  }

}
