import { Component, OnInit } from '@angular/core';
import {NavParams} from "ionic-angular";
import {ICategory} from "../../data/category.interface";
import {IQuote} from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

  category:ICategory;

  constructor(private navParams:NavParams){

  }

  ngOnInit(){
    this.category = this.navParams.data;
  }

  addToFavorites(quote:IQuote){

  }

  //this is actually called when UI is ready, but we need
  //data to fill the UI, so or you use a different event
  //or you check for availability of the data on the UI
  //before trying to use it: {{category?categoryName}}
  //will check category !=null before accessing categoryName
  // ionViewDidLoad(){
  //   this.category = this.navParams.data;
  // }


}
