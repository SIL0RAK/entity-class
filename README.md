# Entity class

![npm](https://img.shields.io/npm/v/entity-class)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/SIL0RAK/entity-class)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/SIL0RAK/entity-class/Test)


 ## Base class for all your entities

 ```typescript
 import Entity from 'entity-class';

 const entity = new Entity({
   name: 'John',
   last_name: 'Carpenter'
 });

 console.log(entity.get('name')); // returns name
 ```

 ## Made to be extended

 ```typescript
 import Entity from 'entity-class';

 interface IUser {
  name: string;
  age: number;
  last_name: string;
}

class User extends Entity<IUser> {
  getName() {
    return this.get('name');
  }

  getLastName() {
    return this.get('last_name');
  }

  getAge() {
    return this.get('age');
  }

  getFullName() {
    return `${this.getName()} ${this.getLastName()}`;
  }

  isAdult() {
    return this.getAge() > 21;
  }
}

 const user = new User({
   name: 'John',
   age: 12,
   last_name: 'Carpenter'
 });

 console.log(user.getFullName()): // returns full name of user
 ```

## Full support for typescript

 ```typescript
  import Entity from 'entity-class';

  interface IUser {
    name: string;
    last_name: string;
    age?: number;
  }

  class User extends Entity<IUser> {
    getName() {
      return this.get('name');
    }

    getLastName() {  // : string
      return this.get('last_name');
    }

    getAge() {  // : number | undefined
      return this.get('age');
    }

    getFullName() {
      return `${this.getName()} ${this.getLastName()}`;
    }
  }

  const user = new User({
    name: 'John',
  });

  // Will indicate error:
  // Argument of type '{ name: string; }' is not assignable to parameter of type 'IUser'.
  // Property 'last_name' is missing in type '{ name: string; }' but required in type 'IUser'
 ```