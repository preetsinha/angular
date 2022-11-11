import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url="http://localhost:4200/list"

  constructor(private http:HttpClient) {}
  getList() {
    return this.http.get(this.url);
  }
  saveBooks(data: any) {
    console.warn(data)
    // return this.http.post(this.url, data);
  }
}
