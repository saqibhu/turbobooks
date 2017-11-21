import { Component } from '@angular/core';
import { PublishersService } from './services/publishers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Define a users property to hold our user data
  publishers: Array<any>;
  
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: PublishersService) {

      console.log('running constructor');
      // Access the Data Service's getUsers() method we defined
      this._dataService.getPublishers()
          .subscribe(res => this.publishers = res);
    }
}
