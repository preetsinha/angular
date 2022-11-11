import { Component, OnInit } from '@angular/core';
import { ShopeService } from '../shope.service';

@Component({
  selector: 'app-list-shope',
  templateUrl: './list-shope.component.html',
  styleUrls: ['./list-shope.component.css']
})
export class ListShopeComponent implements OnInit {

  constructor(private shope:ShopeService) { }
collection:any=[];
  ngOnInit(): void {
       this.shope.getList().subscribe((result)=>{
          console.warn(result);
          this.collection=result;
       })
  }
  deleteShope(item:any){
    console.warn(this.collection)
    this.collection.splice(item-1,1)
     this.shope.deleteShope(item).subscribe((result)=>{
      console.warn(result)
   
     })
 
  }
}
