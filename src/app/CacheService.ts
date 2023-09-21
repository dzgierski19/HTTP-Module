import { Axios, AxiosHeaders, AxiosResponse } from "axios";
import { Cache, ICache, newCache } from "./Cache";
import { HttpService, IHTTPService } from "./HTTPService";
import { DecoratorHTTP } from "./decoratorHTTP";
import { customConfig } from "./httpExample";

export class CacheService extends DecoratorHTTP {
  constructor(
    http: IHTTPService,
    private readonly cache: ICache<AxiosResponse>
  ) {
    super(http);
  }

  async get<T>(
    url: string,
    httpHeaders?: AxiosHeaders
  ): Promise<AxiosResponse<T>> {
    if (this.cache.check(url)) {
      this.cache.get(url);
    }
    const reponse = await this.http.get(url, httpHeaders);
    this.cache.add(url, reponse);
    return reponse;
  }
}
const cache = new CacheService(new HttpService(customConfig), new Cache());

// (async () => {
//   try {
//     await cache.get("en/developers/learning-tools/");
//     await cache.get("en/developers/learning-tools/");
//     await cache.get("en/developers/");
//     console.log(newCache.list.keys());
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// })();
