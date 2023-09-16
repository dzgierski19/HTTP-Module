import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import { userData } from "./httpExample";

export interface IHTTPService {
  get(url: string, httpHeaders?: AxiosHeaders): Promise<AxiosResponse>;
  delete(url: string, httpHeaders?: AxiosHeaders): Promise<AxiosResponse>;
  post(url: string, data: userData): Promise<AxiosResponse>;
}

export class HttpService implements IHTTPService {
  private axiosInstance: AxiosInstance;
  constructor(configuration?: CreateAxiosDefaults) {
    this.axiosInstance = axios.create(configuration);
  }

  async get<T>(
    url: string,
    httpHeaders?: AxiosHeaders
  ): Promise<AxiosResponse<T>> {
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
  ): Promise<AxiosResponse<void>> {
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

  async post<T, D>(
    url: string,
    httpHeaders?: AxiosHeaders,
    data?: T
  ): Promise<AxiosResponse<D>> {
    try {
      const response = await this.axiosInstance.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
