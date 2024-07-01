import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User, UsersResponse } from "../models/users";
import { Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  private memo = new Map()

  public getUsers(query: string): Observable<UsersResponse> {
    if(this.memo.has(query)){
      return of(this.memo.get(query))
    }
    return this.http.get<UsersResponse>(`https://api.github.com/search/users?q=${query}&page=1&per_page=20`).pipe(tap(response=>{
      this.memo.set(query, response)
    }))
  }

  public getUser(id: number | string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/user/${id}`)
  }
}
