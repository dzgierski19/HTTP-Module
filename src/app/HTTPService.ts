import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import { userData } from "./httpExample";

export interface IHTTPService {
  get(url: String, httpHeaders?: AxiosHeaders): Promise<AxiosResponse>;
  delete(url: String, httpHeaders?: AxiosHeaders): Promise<AxiosResponse>;
  post(url: String, data: userData): Promise<AxiosResponse>;
}

export class HttpService implements IHTTPService {
  private axiosInstance: AxiosInstance;
  constructor(configuration?: CreateAxiosDefaults) {
    this.axiosInstance = axios.create(configuration);
  }

  async get(url: string, httpHeaders?: AxiosHeaders): Promise<AxiosResponse> {
    try {
      const response = await this.axiosInstance.get(url, {
        headers: httpHeaders,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
  async delete(
    url: string,
    httpHeaders?: AxiosHeaders
  ): Promise<AxiosResponse> {
    try {
      {
        const response = await this.axiosInstance.delete(url, {
          headers: httpHeaders,
        });
        return response;
      }
    } catch (error) {
      throw error;
    }
  }
  async post(url: string, data: userData): Promise<AxiosResponse> {
    try {
      const response = await this.axiosInstance.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
