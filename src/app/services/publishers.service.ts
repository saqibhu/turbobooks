import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PublishersService {

  result:any;

  constructor(private _http: Http) { }

  getPublishers() { 
    return this._http.get('/api/publishers')
      //.map(result => this.result = result.json().data);
      .map((response:Response) => response.json().data);
  }

  savePublisher(publisher) {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers})

    return this._http.post('/api/publishers', JSON.stringify(publisher), options)
    .map(result => this.result = result.json().data);
  }

  updatePublisher(publisher) {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers})

    return this._http.put('/api/publishers/' + publisher._id, JSON.stringify(publisher), options)
    .map(result => this.result = result.json().data);
  }

  deletePublisher(id) {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers})

    return this._http.delete('/api/publishers/' + id, options)
    //.map(result => this.result = result.json().data)
    .map((response:Response) => response.json().data);
  }

}
