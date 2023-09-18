import { Axios, AxiosResponse } from "axios";

export interface ICache<T> {
  list: Map<string, T>;
  add(string: string, value: T): void;
  get(string: string): T;
  delete(string: string): void;
  clear(): void;
  check(string: string): boolean;
}

export class Cache<T> implements ICache<T> {
  list: Map<string, T> = new Map();
  add(string: string, value: T) {
    if (!this.check(string)) {
      this.list.set(string, value);
    }
  }
  get(string: string): T {
    this.checkIfAvailable(string);
    return this.list.get(string);
  }
  delete(string: string) {
    this.checkIfAvailable(string);
    this.list.delete(string);
  }

  clear() {
    this.list.clear();
  }

  check(string: string) {
    return this.list.has(string);
  }

  private checkIfAvailable(string: string) {
    if (!this.list.has(string)) {
      throw new Error("this item is not available");
    }
  }
}

export const newCache = new Cache();
