import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import 'hammerjs';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

    nameFormControl = new FormControl('',[
    	Validators.required
    	]);

  

  constructor() { }

  ngOnInit() {
  }

}
