import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, retry, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class EmailServie {
  emailUrl =
    'https://fp29cp4ohd.execute-api.us-east-1.amazonaws.com/test1/contact'
  constructor(private http: HttpClient) {}

  /** POST: add a new hero to the database */
  sendEmail(payload): any {
    return this.http
      .post<any>(this.emailUrl, payload)
      .pipe(
        tap((res) => res),
        catchError(this.handleError)
      )
      .subscribe()
  }
  handleError(error): any {
    throw new Error(error)
  }
}
