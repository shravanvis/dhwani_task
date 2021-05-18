import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  allUSer: any;

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.dataService.getAllUser().subscribe(res=>{
      this.allUSer = res
      console.log(res)
    })
  }

}
