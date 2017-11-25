import { Component, OnInit } from '@angular/core';
import { PublishersService } from '../../services/publishers.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  // Define a users property to hold our user data
  publishers: Array<any>;

  constructor(private _dataService: PublishersService) { 
  }

  ngOnInit() {
    // Access the Data Service's getUsers() method we defined
    this._dataService.getPublishers()
    .subscribe(res => this.publishers = res);
  }

  addPublisher($publisher, publisherText){
    if($publisher.which === 1) {
      var result;
      var newPublisher = {
        name: publisherText.value
      };

      result = this._dataService.savePublishers(newPublisher);
      result.subscribe(x=> {
        this.publishers.push(newPublisher)
        publisherText.value='';
      })
    }
  }

}
