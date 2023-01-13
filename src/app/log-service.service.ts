import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor() { }

  consoleLog(arg: string) {
    console.log("Run component:" + arg);
  }
}
