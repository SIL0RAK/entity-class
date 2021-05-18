class Entity <T = Record<string | number, unknown>> {
  private data: T;

  constructor(data = {} as T) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  get<K extends keyof T>(param: K) {
    return this.data[param];
  }

  set<K extends keyof T>(key: K, value: T[K]) {
    this.data[key] = value;

    return this;
  }

  toString() {
    return JSON.stringify(this.getData());
  }
}

export default Entity;
