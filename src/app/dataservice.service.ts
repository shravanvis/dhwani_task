import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/users'

  getAllUser(){
    return this.httpClient.get(this.apiUrl)
  }
}
