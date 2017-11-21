import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PublishersService {

  result:any;

  constructor(private _http: Http) { }

  getPublishers() { 
    console.log('in data.service');
    return this._http.get('/api/publishers')
      .map(result => this.result = result.json().data);
  }

}
