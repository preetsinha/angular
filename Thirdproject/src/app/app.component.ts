import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service'
import { DummyService } from './dummy.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thirdproject';



  
  //For Model interface:)
  // getData(){
  //   const data={
  //     name:'Raman Sinha',
  //     id:100,
  //     indian:true,
  //     address:"code 125120 Jamalpur Shiekhan"
  //   }
  //   return data;
  // }
}

// export class AppComponent implements OnInit {
//   title = 'Thirdproject';


  // data: any = [];

  // constructor(private user: DummyService) { }

  // ngOnInit(): void {
  //   this.user.getDate().subscribe(data => {
  //     // debugger;
  //     console.warn(data);
  //     this.data = data
  //   });
  // }




  // For Service :)
  // name =" "
  // constructor(private user:UserDataService){
  //   console.warn(this.user.getData());
  //   let data = this.user.getData();
  //   this.name = data.name
  // }
// }
