import {SearchModel} from './search-model';
import {inputRadioStars} from '../enum/input-radio-stars.enum';

export class SearchAdvancedModel extends SearchModel {

  private userName: string;
  private organisation: string;
  private language: string;
  private topic: string;
  private starsMin: number;
  private starsMax: number;
  private starsRadios: inputRadioStars;

}
