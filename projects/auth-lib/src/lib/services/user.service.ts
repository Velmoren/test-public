import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public getUser(user?: UserModel): Observable<UserModel> {
    return this._http.get<UserModel>(`https://testdb-a01ea-default-rtdb.firebaseio.com/data.json`);
  };
}
