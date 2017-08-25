import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IContact } from './models/contact';

@Injectable()
export class ContactClientService {
  readonly API_URL = 'http://localhost:8910/api/contacts';
  constructor(private http: HttpClient) { }

  getListContacts(): Observable<IContact[]> {
    /*
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic auth-token');

    let params = new HttpParams();
    params = params.set('page', '1');

    console.log(headers, params);

    return this.http.get<IContact[]>(this.API_URL, {
      headers: headers,
      params: params
    })
    */
    return this.http.get<IContact[]>(this.API_URL)
      .catch(err => {
        return Observable.of(err);
      });
  }
  createContact(contact: IContact) {
    return this.http.post(this.API_URL, contact)
      .catch(err => {
        return Observable.of(err);
      });
  }
  deleteContact(contactId) {
    return this.http.delete(this.API_URL + '/' + contactId)
      .catch(err => {
        return Observable.of(err);
      });
  }
}
