import {SearchModel} from './search-model';
import {inputRadioStars} from '../enum/input-radio-stars.enum';
import {InputRadioSize} from '../enum/input-radio-size.enum';
import {InputRadioCreated} from '../enum/input-radio-created.enum';

export class SearchAdvancedModel extends SearchModel {

  private _userName: string;
  private _organisation: string;
  private _language: string;
  private _topic: string;

  private _starsMin: number;
  private _starsMax: number;
  private _starsRadios: inputRadioStars;

  private _createdMin: number;
  private _createdMax: number;
  private _createdRadios: InputRadioCreated;

  private _sizeMin: number;
  private _sizeMax: number;
  private _sizeRadios: InputRadioSize;


  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get organisation(): string {
    return this._organisation;
  }

  set organisation(value: string) {
    this._organisation = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get topic(): string {
    return this._topic;
  }

  set topic(value: string) {
    this._topic = value;
  }

  get starsMin(): number {
    return this._starsMin;
  }

  set starsMin(value: number) {
    this._starsMin = value;
  }

  get starsMax(): number {
    return this._starsMax;
  }

  set starsMax(value: number) {
    this._starsMax = value;
  }

  get starsRadios(): inputRadioStars {
    return this._starsRadios;
  }

  set starsRadios(value: inputRadioStars) {
    this._starsRadios = value;
  }

  get createdMin(): number {
    return this._createdMin;
  }

  set createdMin(value: number) {
    this._createdMin = value;
  }

  get createdMax(): number {
    return this._createdMax;
  }

  set createdMax(value: number) {
    this._createdMax = value;
  }

  get createdRadios(): InputRadioCreated {
    return this._createdRadios;
  }

  set createdRadios(value: InputRadioCreated) {
    this._createdRadios = value;
  }

  get sizeMin(): number {
    return this._sizeMin;
  }

  set sizeMin(value: number) {
    this._sizeMin = value;
  }

  get sizeMax(): number {
    return this._sizeMax;
  }

  set sizeMax(value: number) {
    this._sizeMax = value;
  }

  get sizeRadios(): InputRadioSize {
    return this._sizeRadios;
  }

  set sizeRadios(value: InputRadioSize) {
    this._sizeRadios = value;
  }
}
