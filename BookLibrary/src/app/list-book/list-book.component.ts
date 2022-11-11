import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private book: BookService) { }
  collection: any = [];
  ngOnInit(): void {
    this.book.getList().subscribe((result) => {
      console.warn(result)
      this.collection = result;
    })
  }
  deleteBook(item:any) {
    console.warn(this.collection)
    this.collection.splice(item-1,1)
    this.book.deleteBook(item).subscribe((res) => {
      console.info(res)
    })
  }


}
