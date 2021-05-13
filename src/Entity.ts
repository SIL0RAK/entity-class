class Entity {
  private data: Record<string, unknown>;

  constructor(data = {}) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  get(param: string): any {
    return this.data?.[param];
  }

  set(key: string, value: any) {
    this.data[key] = value;
  }

  toString() {
    return JSON.stringify(this.getData());
  }
}

export default Entity;
