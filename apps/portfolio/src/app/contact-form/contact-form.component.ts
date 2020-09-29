import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { EmailServie } from './services/email.service'
import { catchError, tap } from 'rxjs/operators'
@Component({
  selector: 'cmuthyala-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  myForm: FormGroup
  title = `Contact me here`
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private emailSvc: EmailServie
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    })
  }
  getErrorMessage() {
    if (this.myForm.controls.email.hasError('required')) {
      return '* Required'
    }

    return this.myForm.controls.email.hasError('email')
      ? '* Not a valid email'
      : ''
  }
  onSubmit(form: FormGroup) {
    if (this.myForm.valid) {
      const payload = {
        name: form.value.name,
        email: form.value.email,
        subject: 'Thank you for your feedback',
        message: form.value.message,
      }
      this.emailSvc.sendEmail(payload).subscribe((res) => {
        console.log(res)
        if (!!res?.errorType) {
          this._snackBar.open(`${res?.errorMessage}`, 'OK', {
            duration: 5000,
          })
        } else {
          this.myForm.reset()
          this._snackBar.open(
            'Your response is successfully submitted!',
            'OK',
            {
              duration: 5000,
            }
          )
        }
      }),
        catchError((err) => {
          this._snackBar.open(
            `Oops something went wrong, please try again!.`,
            'OK',
            {
              duration: 5000,
            }
          )
          throw err
        })
    }
  }
}
