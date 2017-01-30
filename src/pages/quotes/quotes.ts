import { Component, OnInit } from '@angular/core';
import {NavParams, AlertController, ToastController} from "ionic-angular";
import {ICategory} from "../../data/category.interface";
import {IQuote} from "../../data/quote.interface";
import {FavoritesQuotesService} from "../../services/favoriteQuotes.service";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

  category:ICategory;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private favoritesQuotesService:FavoritesQuotesService,
    private toastCtrl:ToastController,
  ){}

  ngOnInit(){
    this.category = this.navParams.data;
  }

  manageFavorite(quote:IQuote){
    if(!this.isFavorite(quote)){
      this.favoritesQuotesService.add(quote);
      this.showConfirmToast();
    }
    else
      this.showConfirmAlert(()=>{
        this.favoritesQuotesService.remove(quote);
      });
  }

  isFavorite(quote:IQuote):boolean{
    return (this.favoritesQuotesService.getFavoritesQuotes().filter(q=>q.id==quote.id).length>0);
  }

  private showConfirmToast(){
    let toast = this.toastCtrl.create({
      message: 'Added to favorites',
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  private showConfirmAlert(callback:() => void){
    let confirm = this.alertCtrl.create({
      title: 'Removing Favorite',
      message: 'Are you sure?...',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { return; }
        },
        {
          text: 'Ok',
          handler: () => {
            callback();
          }
        }
      ]
    });
    confirm.present();
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
