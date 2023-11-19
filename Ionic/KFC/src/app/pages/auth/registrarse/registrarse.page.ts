import { Component, OnInit, inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/users.models';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  firebaseService = inject(FirebaseService)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit() {
  }
  crearUsuario(){
    console.log(this.form.value)
    this.firebaseService.registrarse(this.form.value as User).then(res =>{
      console.log(res)
    })
  }
}
