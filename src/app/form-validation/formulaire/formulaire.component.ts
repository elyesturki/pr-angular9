import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as CryptoJS from 'crypto-js';
import { MustMatch } from './must-match.validator';

// https://jasonwatmore.com/fr/post/2019/06/14/angular-8-exemple-de-validation-de-formulaires-reactifs-reactive-forms
// https://coryrylan.com/blog/angular-form-builder-and-validation-management
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  fc;
  message = {
    success: 'OK !',
    error: 'Valeur incorrecte'
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      cp: ['', Validators.required],
      country: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
       validator: MustMatch('password', 'confirmPassword')
    });

  }

 // get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.fc = this.registerForm.controls;
    // console.log('.errors: ', this.fc.password.errors, 'confirm: ', this.fc.confirmPassword.errors);
   // console.log("country: ",this.registerForm.controls.country);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    // reset form
    // this.onReset();
  }

  onReset() {
   this.submitted = false;
   this.registerForm.reset();
  }

  // Autocomplete search counrty
  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'France',
       capital : 'Paris'
     },
     {
       id: 2,
       name: 'England'
     }
     ,
     {
       id: 3,
       name: 'Germany'
     }
     ,
     {
       id: 4,
       name: 'Russia'
     }
     ,
     {
       id: 5,
       name: 'Espagne'
     }
     ,
     {
       id: 6,
       name: 'Poland'
     }
     ,
     {
       id: 7,
       name: 'Italie'
     }
  ];
  selectEvent(item) {
    // do something with selected item
  };
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  onFocused(e){
    // do something when input is focused
  }

  //encrypt & decrypt data
  hash = 'U2FsdGVkX19wAdHTt6F2';
  encryptData(str) {
   return CryptoJS.AES.encrypt(str.trim(), this.hash.trim()).toString();
  }
  decryptData(str) {
    return CryptoJS.AES.decrypt(str.trim(), this.hash.trim()).toString(CryptoJS.enc.Utf8);
  }
}
