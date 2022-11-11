import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopeService {
  url = "http://localhost:3000/posts/";
  rootUrl = "http://localhost:3000"


  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }
  saveShope(data: any) {
    // console.warn(data)
    return this.http.post(this.url, data);
  }
  deleteShope(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentShope(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  updateShope(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }
  registerUser(data: any) {
    return this.http.post(this.rootUrl + "/user", data)
  }
}
