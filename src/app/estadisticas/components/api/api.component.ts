import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(
    private cryptoServices: CryptoService
  ){
    this.cryptoServices.getList().subscribe(resp =>{
      console.log(resp)
    },error=>{
      console.log(error)
    })
  }

  ngOnInit(): void {
  }

}
