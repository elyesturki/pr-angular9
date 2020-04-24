import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {
  data = [
    'data1',
    'data2',
    'data3',
    'data4',
  ];
  constructor() { }

  logger(data) {
    console.log("data service: ",this.data);
    console.log("data logger: ",data)
  }

  addData(data) {
    this.data.push(data);
  }
}
