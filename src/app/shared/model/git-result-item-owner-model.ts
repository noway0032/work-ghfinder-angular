export class GitResultItemOwnerModel {
  private _login: string;
  private _id: number;
  private _node_id: string;
  private _avatar_url: string;
  private _gravatar_id: string;
  private _url: string;
  private _html_url: string;
  private _followers_url: string;
  private _following_url: string;
  private _gists_url: string;
  private _starred_url: string;
  private _subscriptions_url: string;
  private _organizations_url: string;
  private _repos_url: string;
  private _events_url: string;
  private _received_events_url: string;
  private _type: string;
  private _site_admin: boolean;

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get node_id(): string {
    return this._node_id;
  }

  set node_id(value: string) {
    this._node_id = value;
  }

  get avatar_url(): string {
    return this._avatar_url;
  }

  set avatar_url(value: string) {
    this._avatar_url = value;
  }

  get gravatar_id(): string {
    return this._gravatar_id;
  }

  set gravatar_id(value: string) {
    this._gravatar_id = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get html_url(): string {
    return this._html_url;
  }

  set html_url(value: string) {
    this._html_url = value;
  }

  get followers_url(): string {
    return this._followers_url;
  }

  set followers_url(value: string) {
    this._followers_url = value;
  }

  get following_url(): string {
    return this._following_url;
  }

  set following_url(value: string) {
    this._following_url = value;
  }

  get gists_url(): string {
    return this._gists_url;
  }

  set gists_url(value: string) {
    this._gists_url = value;
  }

  get starred_url(): string {
    return this._starred_url;
  }

  set starred_url(value: string) {
    this._starred_url = value;
  }

  get subscriptions_url(): string {
    return this._subscriptions_url;
  }

  set subscriptions_url(value: string) {
    this._subscriptions_url = value;
  }

  get organizations_url(): string {
    return this._organizations_url;
  }

  set organizations_url(value: string) {
    this._organizations_url = value;
  }

  get repos_url(): string {
    return this._repos_url;
  }

  set repos_url(value: string) {
    this._repos_url = value;
  }

  get events_url(): string {
    return this._events_url;
  }

  set events_url(value: string) {
    this._events_url = value;
  }

  get received_events_url(): string {
    return this._received_events_url;
  }

  set received_events_url(value: string) {
    this._received_events_url = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get site_admin(): boolean {
    return this._site_admin;
  }

  set site_admin(value: boolean) {
    this._site_admin = value;
  }
}
