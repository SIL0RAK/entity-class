# Entity class

 Base class for all your entities

 ```typescript
 import Entity from 'entity-class';

 const entity = new Entity({
   name: 'John',
   last_name: 'Carpenter'
 });

 console.log(entity.get('name')); // returns name

 ```

 Feel free to extend this entity

 ```typescript
 import Entity from 'entity-class';

class User extends Entity {
  getName() {
    return this.get('name');
  }

  getLastName() {
    return this.get('last_name');
  }

  getAge() {
    return this.get('age');
  }
}

 const user = new User({
   name: 'John',
   last_name: 'Carpenter'
 });

 console.log(user.getName()): // returns name of user
 ```