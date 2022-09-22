import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
 // url = "http://api.exchangeratesapi.io/v1/latest?access_key=050beeaad0ad5cda72460c6758d5a11e&amp;format=1";
 url = "https://v6.exchangerate-api.com/v6/7e8a74d1ea24d8ea5179702c/latest/EUR";
 //d08b544b8ce8e049f81d7e4c
 constructor(private httpClient: HttpClient) { 
    this.getExchangeRates();
  }

  getExchangeRates(){
   return this.httpClient.get<any>(this.url);
  }
}
