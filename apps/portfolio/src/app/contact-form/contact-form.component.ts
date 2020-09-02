import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'cmuthyala-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    })
  }
  onSubmit(form: FormGroup) {
    if (this.myForm.valid) {
      this.myForm.reset()
      this._snackBar.open('Your response is successfully submitted!', 'OK', {
        duration: 5000,
      })
    }
  }
}
