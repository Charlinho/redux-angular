export class User {
  name: string;
  lastName: string;

  constructor() {}

  setName(name: string, lastName: string): User {
    this.name = name;
    this.lastName = lastName;

    return this;
  }
}