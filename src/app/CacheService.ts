import { Axios, AxiosHeaders, AxiosResponse } from "axios";
import { Cache, newCache } from "./Cache";
import { HttpService, IHTTPService } from "./HTTPService";
import { DecoratorHTTP } from "./decoratorHTTP";
import { customConfig } from "./httpExample";

export class CacheService extends DecoratorHTTP {
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

const cache = new CacheService(new HttpService(customConfig));

(async () => {
  try {
    await cache.get("en/developers/learning-tools/");
    await cache.get("en/developers/learning-tools/");
    await cache.get("en/developers/");
    console.log(newCache.list.keys());
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
