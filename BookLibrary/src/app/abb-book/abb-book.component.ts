import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookLiabrary } from 'src/models/BookLiabrary';
import { BookService } from '../book.service';


@Component({
  selector: 'app-abb-book',
  templateUrl: './abb-book.component.html',
  styleUrls: ['./abb-book.component.css']
})
export class AbbBookComponent implements OnInit {

  constructor(private book: BookService) { }
  alert: boolean = false
  addBooks = new FormGroup({
    title: new FormControl(''),
    authorname: new FormControl(''),
    subject: new FormControl(''),
    bookno: new FormControl(''),
  })

  ngOnInit(): void {
  }
  collectBook() {
    // book:BookLiabrary;
    // book.title = this.addBooks.value.title || '';
    // book.authorname = this.addBooks.value.authorname || '';
    // book.subject = this.addBooks.value.subject || '';
    // book.bookno = this.addBooks.value.bookno || '0';

   

    this.book.saveBook(this.addBooks.value).subscribe((result: any) => {
      this.alert = true
    })
    this.addBooks.reset({})
  }
  closeAlert() {
    this.alert = false
  }

}
