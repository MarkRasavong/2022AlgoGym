class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  };

  public get name(): string {
    return this._name;
  };

  public set name(newValue: string) {
    newValue.trim();

    if(newValue === '') throw ('name must not be empty');

    this._name = newValue;
  }
}