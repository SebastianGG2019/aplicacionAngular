import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  
  data!: any
  selectedFeed="";

  lista:string[]=["crypto","crystalplatform","documentingbtc", "cointelegraph"];

  constructor() { }

  selected(){
    this.data = {sourceType: "url", url:this.selectedFeed};
    console.log(this.selectedFeed);
  }

  ngOnInit(): void {
  }

}
