import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  _url= 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
  constructor(
    private http: HttpClient
  ) { 
    
  }
  getList(){
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json')
      .set('X-CMC_PRO_API_KEY', 'cd1843a5-f75f-4975-8be2-e6a735b246e9')
      .set('Access-Control-Allow-Origin',"*")
    
    return this.http.get(this._url, {
      headers: heades
    });
  }
}
