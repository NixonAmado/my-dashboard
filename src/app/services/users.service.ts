import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response'; //type para que no haga ningún tipo de trasnpilación
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Con el numeral  esto lo hace el ecmaScripit rn a trasnpilacion podremos acceder con js
  private http = inject( HttpClient )
  #state = signal<State>({
    loading: true,
    users: []
  });

  public users = computed( () => this.#state().users); //no se podrá cambiar intencionalmente, y ademas es de solo lectura
  public loading = computed( () => this.#state().loading); //no se podrá cambiar intencionalmente, y ademas es de solo lectura

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe( delay(1500))
    .subscribe( res => {

        this.#state.set({
          loading:false,
          users: res.data,
        })
      });
  }

  getUserById( id:string ){
  return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
  .pipe(
    delay(1500),
    map(resp => resp.data ))
  }
}


//https://reqres.in/api/users
