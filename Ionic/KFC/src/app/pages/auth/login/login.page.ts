import { Component, OnInit, inject } from '@angular/core';

import { FirebaseService } from 'src/app/services/firebase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/users.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  firebaseService = inject(FirebaseService)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.form.value)
    this.firebaseService.IniciarSesion(this.form.value as User).then(res =>{
      console.log(res)
    })
  }

}
