import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings: any;

  constructor(private db: FirebaseService) { }

  ngOnInit() {
    this.db.getListings()
      .subscribe(listings => {
        this.listings = listings;
        console.log(listings);
      })
  }

}
