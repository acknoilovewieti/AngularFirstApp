import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor() { }

  consoleDebug(arg: string) {
    console.log("Run component:" + arg);
  }
}
