import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


interface auth {
  status: any;
  data: any;
}
// const API_URL = 'https://yts.mx/api/v2/';
const API_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }


  getapi() {
    return API_URL;
  } 

  get(endpoint: any) {
    return this.http.get<any>(API_URL + endpoint);
  }

}
