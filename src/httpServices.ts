import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aaec42026727406996601c11e585e847",
  },
});

class DataServices<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = <V>(config: AxiosRequestConfig) => {
    const controller = new AbortController();
    const result = axiosInstance.get<V>(this.endpoint, {
      signal: controller.signal,
      ...config,
    });
    return { result, cancel: () => controller.abort() };
  };

  deleted = (id: number) => {
    return axiosInstance.delete(this.endpoint + id);
  };
  update = (id: number, entity: T) => {
    return axiosInstance.patch(this.endpoint + id, entity);
  };
  create = (entity: T) => {
    return axiosInstance.post(this.endpoint, entity);
  };
}

export default DataServices;
