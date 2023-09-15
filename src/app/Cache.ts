import { AxiosResponse } from "axios";

export interface Cache {
  list: Map<string, AxiosResponse>;
}
