import Entity from './Entity';

describe('Entity methods', () => {
  test('get should return data by key', () => {
    const entity = new Entity({
      'name': 'Petras',
    });

    expect(entity.get('name')).toBe('Petras');
  });

  test('get should return undefined if parameter is missing', () => {
    const entity = new Entity<Record<string, unknown>>({
      'name': 'Petras',
    });

    expect(entity.get('last_name')).toBeUndefined();
  });

  test('getData should return object containing all the data', () => {
    const entity = new Entity({
      'name': 'Petras',
      'age': 15,
    });

    expect(entity.getData()).toEqual({
      'name': 'Petras',
      'age': 15,
    });
  });

  test('toString should return JSON object containing all data', () => {
    const entity = new Entity({
      'name': 'Petras',
      'age': 15,
    });

    expect(entity.toString()).toBe('{"name":"Petras","age":15}');
  });

  test('toString should return JSON object containing all data', () => {
    const entity = new Entity({
      'name': 'Petras',
      'age': 15,
    });

    expect(entity.toString()).toBe('{"name":"Petras","age":15}');
  });

  test('set should update data', () => {
    const entity = new Entity({
      'name': 'Petras',
      'age': 15,
    });

    expect(entity.toString()).toBe('{"name":"Petras","age":15}');

    entity.set('name', 'John');

    expect(entity.toString()).toBe('{"name":"John","age":15}');
  });

  test('Entity should be extendable', () => {
    class User extends Entity {
      getName() {
        return this.get('name');
      }

      getAge() {
        return this.get('age');
      }
    }

    const user = new User({
      name: 'Arthur',
      age: 50,
      last_name: 'Bing'
    })
    
    expect(user.getName()).toBe('Arthur');
    expect(user.get('last_name')).toBe('Bing');
    expect(user.getAge()).toBe(50);
  });
});