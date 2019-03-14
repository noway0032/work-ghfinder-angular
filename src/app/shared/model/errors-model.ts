export class ErrorsModel {
  private _message: string;
  private _resource: string;
  private _field: string;
  private _code: string;

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get resource(): string {
    return this._resource;
  }

  set resource(value: string) {
    this._resource = value;
  }

  get field(): string {
    return this._field;
  }

  set field(value: string) {
    this._field = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }
}
