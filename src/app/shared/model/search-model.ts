export class SearchModel {

  private _searchBy: string;
  private _inName: boolean;
  private _inDescription: boolean;
  private _inReadme: boolean;

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
}
