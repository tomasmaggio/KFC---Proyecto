import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { User } from '../models/users.models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth= inject(AngularFireAuth);

  // ---------------AUTENTICACION---------------

  //Iniciar sesion
  IniciarSesion(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //Registrarse
  registrarse(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  constructor() { }
}
