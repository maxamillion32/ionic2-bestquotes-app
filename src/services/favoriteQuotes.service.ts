import {IQuote} from "../data/quote.interface";

export class FavoritesQuotesService {

  private favoritesQuotes:IQuote[] = [];

  add(quote:IQuote){
    if(this.favoritesQuotes.filter(q => q.id == quote.id).length==0)
      this.favoritesQuotes.push(quote);
  }

  remove(quote:IQuote){
    const position = this.favoritesQuotes.findIndex((q:IQuote) => {
      return (q.id==quote.id);
    });

    this.favoritesQuotes.splice(position,1);
  }

  getFavoritesQuotes():IQuote[]{
    return this.favoritesQuotes.slice(); //returns a copy to client
  }

}
