import { Component } from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";
import {IQuote} from "../../data/quote.interface";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  private quote:IQuote;

  constructor(private viewCtrl:ViewController, private navParams:NavParams){
    this.quote = this.navParams.data;
  }

  leavePage(unfavorite:boolean){
    this.viewCtrl.dismiss(unfavorite); //can be invoked only when there is at-least one other page to display in the page stack.
  }

}
