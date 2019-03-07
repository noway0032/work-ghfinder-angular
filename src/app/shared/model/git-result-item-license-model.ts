export class GitResultItemLicenseModel {
  private _key: string;
  private _name: string;
  private _spdx_id: string;
  private _url: string;
  private _node_id: string;

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get spdx_id(): string {
    return this._spdx_id;
  }

  set spdx_id(value: string) {
    this._spdx_id = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get node_id(): string {
    return this._node_id;
  }

  set node_id(value: string) {
    this._node_id = value;
  }
}
