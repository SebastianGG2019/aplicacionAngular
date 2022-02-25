import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { Coin } from '../../services/crypto.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  coins: Coin[]= [];
  coinsSort: Coin[]= [];

  constructor(
    private cryptoServices: CryptoService
  ){
    this.cryptoServices.getList().subscribe(resp =>{
      console.log(resp)
      
      this.coins = resp;
    },error=>{
      console.log(error)
    })
  }

  ngOnInit(): void {
  }
}
