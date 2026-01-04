import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_JSON } from '../constants/app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  URL_JSON = URL_JSON

  constructor(private http: HttpClient) { }

  getProvince(province: string) {
    return this.http
      .get<any>(this.URL_JSON)
      .pipe(
        map(data => data?.[province] ?? null)
      );
  }
}
