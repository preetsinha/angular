import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShopeService } from '../shope.service';


@Component({
  selector: 'app-update-shope',
  templateUrl: './update-shope.component.html',
  styleUrls: ['./update-shope.component.css']
})
export class UpdateShopeComponent implements OnInit {
  alert:boolean=false
  editShopes = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private router: ActivatedRoute,private shope:ShopeService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
   this.shope.getCurrentShope(this.router.snapshot.params['id']).subscribe((result:any)=>{
   console.warn(result)
  this.editShopes = new FormGroup({
    name: new FormControl(result.name),
    email: new FormControl(result.email),
    address: new FormControl(result.address)
    })
   })
  }
collection(){
  console.warn("item",this.editShopes.value)
  this.shope.updateShope(this.router.snapshot.params['id'],this.editShopes.value).subscribe((result)=>{
    console.warn(result)
    this.alert=true
  })
}
closeAlert(){
  this.alert=false
}

}
