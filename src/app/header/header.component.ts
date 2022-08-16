import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCurrency:String="INR"
  title:string="Shubham Verma"
  constructor() { }

  ngOnInit(): void {
  }
  sendCurrency(event:String){
  
    console.log(event)
 
   }
}
