import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, retry, tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class EmailServie {
  emailUrl =
    'https://fp29cp4ohd.execute-api.us-east-1.amazonaws.com/test1/contact'
  constructor(private http: HttpClient) {}

  /** POST: add a new hero to the database */
  sendEmail(payload): Observable<any> {
    return this.http.post<any>(this.emailUrl, payload)
  }
  getDataFromPublicApi() {
    const data = this.http.get<any>('https://gorest.co.in/public-api/users')
    data.subscribe((data) => {
      console.log('data: ', data)
    })
  }
}
