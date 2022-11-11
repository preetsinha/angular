import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookLiabrary } from 'src/models/BookLiabrary';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  // url = "http://localhost:3000/posts"
  url="https://localhost:7232/api/BookLaibraries/";

  constructor(private http: HttpClient) { }
  getList() {
    // console.info("some data")
    return this.http.get(this.url+"list");

  }
  saveBook(bookLaibrary: any) {
    console.info(bookLaibrary);
    
    return this.http.post<BookLiabrary>(this.url+'add',bookLaibrary);
  }
  deleteBook(id:any){
   return this.http.delete(`${this.url}${id}`)
  }
  getCurrentBook(id:any){
    return this.http.get(`${this.url}${id}`)
  }
  updateBook(id:any, data:any){
    data.id = id;
    return this.http.put(`${this.url}${id}`,data)
  }

}
