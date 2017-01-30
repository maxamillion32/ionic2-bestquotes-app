import {Component, OnInit} from '@angular/core';
import {FavoritesQuotesService} from "../../services/favoriteQuotes.service";
import {IQuote} from "../../data/quote.interface";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

/*
  Generated class for the Favorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage  {

  quotes:IQuote[];

  constructor(private favoritesQuotesService:FavoritesQuotesService, private modalCtrl:ModalController) {}

  ionViewWillEnter(){
    this.quotes = this.favoritesQuotesService.getFavoritesQuotes();
  }

  viewQuote(quote:IQuote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }

}
