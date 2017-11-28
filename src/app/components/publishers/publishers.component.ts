import { Component, OnInit } from '@angular/core';
import { Publisher } from '../../classes/publisher';
import { PublishersService } from '../../services/publishers.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  // Define a users property to hold our user data
  //publishers: Array<any>;
  publishers: Publisher[];

  constructor(private _dataService: PublishersService) { 
  }

  ngOnInit() {
    // Access the Data Service's getUsers() method we defined
    this._dataService.getPublishers()
    .subscribe(res => this.publishers = res);
  }

  addPublisher($publisher, publisherText) {
    if($publisher.which === 1) {
      var result;
      var newPublisher = {
        name: publisherText.value
      };

      result = this._dataService.savePublisher(newPublisher);
      result.subscribe( x=> {
        this.publishers.push(newPublisher)
        publisherText.value='';
      })
    }
  }

  updatePublisher($event, publisher) {
    if($event.which === 13) {
      publisher.name = $event.target.value;
      var _publisher = {
        _id: publisher._id,
        name: publisher.name
      };
      this._dataService.updatePublisher(_publisher)
      .subscribe(data => {this.setEditState(publisher, false);});
    }
  }

  setEditState(publisher, state) {
    if(state) {
      publisher.isEditMode = state;
    } else {
      delete publisher.isEditMode;
    }
  }

  deletePublisher(publisher) {
    var publishers = this.publishers;
    this._dataService.deletePublisher(publisher._id)
    .subscribe(data => {
      if(data.n==1){
        for(var i=0; i<publishers.length; i++){
          if(publishers[i].name == publisher.name){
            publishers.splice(i,1);
          }
        }
      }
      //this._dataService.getPublishers()
      //.subscribe(res => this.publishers = res);
    })
  }
}
