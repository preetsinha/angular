import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ShopeService } from '../shope.service';

@Component({
  selector: 'app-add-shope',
  templateUrl: './add-shope.component.html',
  styleUrls: ['./add-shope.component.css']
})
export class AddShopeComponent implements OnInit {

  constructor(private shope:ShopeService) { }
  alert:boolean=false
  addShopes= new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  address:new FormControl('')
})
  ngOnInit(): void {
  }
  collectShope(){
    this.shope.saveShope(this.addShopes.value).subscribe((result)=>{
      this.alert=true
    })
    this.addShopes.reset({})
  }
  closeAlert(){
    this.alert=false
  }

}
