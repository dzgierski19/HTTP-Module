import { HttpService, IHTTPService } from "./HTTPService";
import { AxiosHeaders, AxiosResponse } from "axios";
import { customConfig, userData } from "./httpExample";

export class DecoratorHTTP implements IHTTPService {
  protected http: IHTTPService;
  constructor(http: IHTTPService) {
    this.http = http;
  }
  async get(url: string, httpHeaders?: AxiosHeaders): Promise<AxiosResponse> {
    return this.http.get(url, httpHeaders);
  }
  async delete(
    url: string,
    httpHeaders?: AxiosHeaders
  ): Promise<AxiosResponse> {
    return this.http.delete(url, httpHeaders);
  }
  async post(url: string, data: userData): Promise<AxiosResponse> {
    return this.http.post(url, data);
  }
}
