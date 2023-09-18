import nock from "nock";
import axios, { AxiosResponse } from "axios";
import { CacheService } from "../app/CacheService";
import { HttpService } from "../app/HTTPService";
import { customConfig } from "../app/httpExample";
import { newCache } from "../app/Cache";
axios.defaults.adapter = "http";
describe("CacheService test suite", () => {
  const testCache = new CacheService(new HttpService(customConfig));
  const exampleDomain = "http://ethereum.org";
  const exampleURL = "/en/wallet";
  const exampleDomanAndURL = "http://ethereum.org/en/wallet";
  test("can fetch test response", async () => {
    const scope = nock(exampleDomain).get(exampleURL).reply(200);
    await testCache.get<AxiosResponse>(exampleDomanAndURL);
    scope.done();
    expect(newCache.list.has(exampleDomanAndURL)).toBeTruthy();
  });
});
