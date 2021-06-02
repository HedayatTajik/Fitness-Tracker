import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FakeJsonService {
  url = "https://jsonplaceholder.typicode.com/todos"
  constructor(private HttpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.HttpClient.get<any>(this.url)
  }
}
