import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../data/category.interface";
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

  quotesCollection:ICategory[];

  ngOnInit(){
    this.quotesCollection = quotes;
  }

}
