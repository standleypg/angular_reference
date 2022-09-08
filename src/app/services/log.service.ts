import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  logMesage(msg: string) {
    alert(msg);
  }
}
