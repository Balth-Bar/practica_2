import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Users} from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  selectdUser: Users;
  users: Users[];
  readonly URL_API = 'http://localhost:3000/api/user';


  constructor(private http: HttpClient) {
      this.selectdUser = new Users();
   }
   

  postUser(Users: Users ){
    return this.http.post(this.URL_API,Users);
  }


}
