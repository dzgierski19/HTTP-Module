import nock from "nock";
import axios, { AxiosResponse } from "axios";
import { CacheService } from "../app/CacheService";
import { HttpService } from "../app/HTTPService";
import { customConfig } from "../app/httpExample";
import { Cache } from "../app/Cache";

const cache = new Cache<AxiosResponse>();

describe("CacheService test suite", () => {
  const testCacheService = new CacheService(
    new HttpService(customConfig),
    cache
  );

  const exampleURL = "/en/wallet";
  const exampleBadURL = "/en/vitalik";

  const scope = nock(customConfig.baseURL)
    .get(exampleURL)
    .reply(200, "path matched")
    .get(exampleBadURL)
    .reply(400, "Not Found");

  it("should return reponse for valid url", async () => {
    expect(cache.check(exampleURL)).toBeFalsy();
    await testCacheService.get<AxiosResponse>(exampleURL);
    expect(cache.check(exampleURL)).toBeTruthy();
  });

  it("should throw error for invalid url", async () => {
    try {
      await testCacheService.get<AxiosResponse>(exampleBadURL);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });
});
