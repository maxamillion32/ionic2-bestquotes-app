import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../data/category.interface";
import quotes from '../../data/quotes';
import {QuotesPage} from "../quotes/quotes";

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
