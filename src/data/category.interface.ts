import {IQuote} from "./quote.interface";
export interface ICategory {
  categoryName:string;
  quotes:IQuote[];
  icon:string;
}
