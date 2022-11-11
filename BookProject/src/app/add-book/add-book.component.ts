import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private book: BookService) { }
  alert: boolean = false
  addbook = new FormGroup({
    Title: new FormControl(''),
    Subject: new FormControl(''),
    AuthorName: new FormControl('')
  })
  ngOnInit(): void {
  }
  collectBooks() {
    this.book.saveBooks(this.addbook.value).subscribe((result: any) => {
      this.alert = true
    })
    this.addbook.reset({})
  }
  closeAlert() {
    this.alert = false
  }

}