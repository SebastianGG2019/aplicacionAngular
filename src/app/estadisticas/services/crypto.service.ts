import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  low_24h: number;
  market_cap_rank: number
}

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  _url= 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  constructor(
    private http: HttpClient
  ) { 
    
  }
  getList(){
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json')    
    return this.http.get<Coin[]>(this._url, {
      headers: heades
    });
  }
}
