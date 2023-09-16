import { Axios, AxiosHeaders, AxiosResponse } from "axios";
import { Cache, newCache } from "./Cache";
import { HttpService, IHTTPService } from "./HTTPService";
import { DecoratorHTTP } from "./decoratorHTTP";

export class CacheService<T> extends DecoratorHTTP {
  constructor(http: IHTTPService) {
    super(http);
  }

  async get<T>(
    url: string,
    httpHeaders?: AxiosHeaders
  ): Promise<AxiosResponse<T>> {
    try {
      if (newCache.check(url)) {
        newCache.get(url);
      }
      const reponse = await this.http.get(url, httpHeaders);
      newCache.add(url, reponse);
      return reponse;
    } catch (error) {
      throw error;
    }
  }
}
