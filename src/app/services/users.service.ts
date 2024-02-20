import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response';

interface State {
  users: User[];
  loading: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Con el numeral  esto lo hace el ecmaScripit rn a trasnpilacion podremos acceder con js
  #state = signal<State>({
    loading: true,
    users: []
  });
  constructor() { 
    console.log('cargando Data')
  }

}


//https://reqres.in/api/users