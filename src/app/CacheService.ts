import { AxiosHeaders, AxiosResponse } from "axios";
import { Cache } from "./Cache";
import { HttpService, IHTTPService } from "./HTTPService";
import { DecoratorHTTP } from "./decoratorHTTP";

export class CacheService extends DecoratorHTTP implements Cache {
  list: Map<string, AxiosResponse> = new Map();
  async get(
    url: string,
    httpHeaders?: AxiosHeaders
  ): Promise<AxiosResponse<any, any>> {
    try {
      if (this.list.has(url)) {
        return this.list.get(url);
      }
      const reponse = await super.get(url, httpHeaders);
      this.list.set(url, reponse);
      return reponse;
    } catch (error) {
      throw error;
    }
  }
}

const cache = new CacheService(new HttpService());
