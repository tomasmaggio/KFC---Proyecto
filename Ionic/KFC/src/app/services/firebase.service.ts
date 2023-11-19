import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth= inject(AngularFireAuth);

  // ---------------AUTENTICACION---------------

  //Iniciar sesion
  IniciarSesion(user){
    return signInWithEmailAndPassword(getAuth(), email, password)
  }


  constructor() { }
}
