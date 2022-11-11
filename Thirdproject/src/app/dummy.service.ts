import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
import {dataType} from './dummy' //For Model Interface

// interface dataType{
//   name:string,
//   id:number,
//   indian:boolean,
//   address:any
// }

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  // constructor(private http:HttpClient) { }
  // getDate(){
  //   let url = "https://jsonplaceholder.typicode.com/todos";
  //   return this.http.get(url);
  // }

  constructor () {}

  //For Model Interface
  // getData(){
  //   const data : dataType={
  //     name:'Raman Sinha',
  //     id:100,
  //     indian:true,
  //     address:"code 125120 Jamalpur Shiekhan"
  //   }
  //   return data;
  // }
}
