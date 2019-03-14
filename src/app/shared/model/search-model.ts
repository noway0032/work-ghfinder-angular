import {InputRadioSort} from '../enum/input-radio-sort.enum';
import {InputRadioOrder} from '../enum/input-radio-order.enum';
import {InputRadioStars} from '../enum/input-radio-stars.enum';
import {InputRadioSize} from '../enum/input-radio-size.enum';
import {InputRadioCreated} from '../enum/input-radio-created.enum';


export class SearchModel {

  private _searchBy: string;
  private _inName: boolean;
  private _inDescription: boolean;
  private _inReadme: boolean;
  private _sortBy: InputRadioSort;
  private _orderBy: InputRadioOrder;

  private _userName: string;
  private _organization: string;
  private _language: string[];
  private _topic: string[];
  private _starsMin: number;
  private _starsMax: number;
  private _starsRadios: InputRadioStars;
  private _createdMin: number;
  private _createdMax: number;
  private _createdRadios: InputRadioCreated;
  private _sizeMin: number;
  private _sizeMax: number;
  private _sizeRadios: InputRadioSize;

  get language(): string[] {
    return this._language;
  }

  set language(value: string[]) {
    this._language = value;
  }

  get topic(): string[] {
    return this._topic;
  }

  set topic(value: string[]) {
    this._topic = value;
  }

  get searchBy(): string {
    return this._searchBy;
  }

  set searchBy(value: string) {
    this._searchBy = value;
  }

  get inName(): boolean {
    return this._inName;
  }

  set inName(value: boolean) {
    this._inName = value;
  }

  get inDescription(): boolean {
    return this._inDescription;
  }

  set inDescription(value: boolean) {
    this._inDescription = value;
  }

  get inReadme(): boolean {
    return this._inReadme;
  }

  set inReadme(value: boolean) {
    this._inReadme = value;
  }

  get sortBy(): InputRadioSort {
    return this._sortBy;
  }

  set sortBy(value: InputRadioSort) {
    this._sortBy = value;
  }

  get orderBy(): InputRadioOrder {
    return this._orderBy;
  }

  set orderBy(value: InputRadioOrder) {
    this._orderBy = value;
  }
  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get organization(): string {
    return this._organization;
  }

  set organization(value: string) {
    this._organization = value;
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

  get starsRadios(): InputRadioStars {
    return this._starsRadios;
  }

  set starsRadios(value: InputRadioStars) {
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
