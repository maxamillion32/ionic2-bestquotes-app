import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../data/category.interface";
import quotes from '../../data/quotes';
import {QuotesPage} from "../quotes/quotes";

//To dynamically select the template: template:
// window['isMobile'] ? require('./contracts-mobile.html') : require('./contracts.html')
// or instead window['isMobile'] you can use this.isMobile and populate the prop in the comp constructor

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

  quotesPage = QuotesPage;
  quotesCollection:ICategory[];

  ngOnInit(){
    this.quotesCollection = quotes;
  }

}
