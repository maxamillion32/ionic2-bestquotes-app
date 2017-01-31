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
    modal.onDidDismiss((unfavorite:boolean)=>{
      if(unfavorite) this.unfavoriteQuote(quote);
    });
    modal.present();
  }

  unfavoriteQuote(quote: IQuote) {
    this.favoritesQuotesService.remove(quote);

    //un explicit update of component prop is needed because
    //the service method returns a copy of the quotes hosted
    //in the service it self. This would be the case for primitive
    //types too (string, int, bool, etc...).
    //If you want to bidirectional automatic data-binding you must
    //bind to service's objects and original instances (not to copies)
    this.quotes = this.favoritesQuotesService.getFavoritesQuotes();
  }

}
