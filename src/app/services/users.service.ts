import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResult } from '../interfaces/user';
import { LanguageResult } from '../interfaces/language';
import { PostResult } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    this.getUsers().subscribe((result: UserResult) =>{
      console.log(result.data);
    })

   }
   getUsers(){
     return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
   }
   getLanguages(){
     return this.http.get<LanguageResult>("http://localhost:3000/languages");
   }
   getPosts(){
    return this.http.get<PostResult>("http://localhost:3000/posts");
  }
}
