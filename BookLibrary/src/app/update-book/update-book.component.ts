import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  alert: boolean = false
  editBooks = new FormGroup({
    title: new FormControl(''),
    authorname: new FormControl(''),
    subject: new FormControl(''),
    bookno: new FormControl(''),
  })
  constructor(private route: ActivatedRoute, private book: BookService) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params['id'])
    this.book.getCurrentBook(this.route.snapshot.params['id'])
    .subscribe((result: any) => {
      console.warn(result)
      this.editBooks = new FormGroup({
        title: new FormControl(result.title),
        authorname: new FormControl(result.authorname),
        subject: new FormControl(result.subject),
        bookno: new FormControl(result.bookno),
      })
    })
  }
  updateCollection() {
    debugger
    console.warn("item", this.editBooks.value)
    this.book.updateBook(this.route.snapshot.params['id'], this.editBooks.value).subscribe((result: any) => {
      console.warn("result", result)
      this.alert = true
    })
  }
  closeAlert() {
    this.alert = false
  }

}
