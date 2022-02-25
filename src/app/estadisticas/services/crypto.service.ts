import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  _url= 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/historical'
  constructor(
    private http: HttpClient
  ) { 
    
  }
  getList(){
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json')
      .set('X-CMC_PRO_API_KEY', 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c')
      .set('Access-Control-Allow-Origin',"*")
    
    return this.http.get(this._url, {
      headers: heades
    });
  }
}
