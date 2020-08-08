import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cmuthyala-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  this.myForm = this.fb.group({
    name: ['Chandu Muthyala', Validators.required],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
    message: ['', [Validators.required, Validators.minLength(15)]]
  });
  }
  onSubmit(form:FormGroup){
    console.log(form.value);
  }

}
