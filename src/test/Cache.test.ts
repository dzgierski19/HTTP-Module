import { Cache } from "../app/Cache";

describe("Cache test suite ", () => {
  let testCache: Cache<string>;
  let elementsInCache: Map<string, string>;
  beforeEach(() => {
    testCache = new Cache();
    testCache.add("element", "data");
    elementsInCache = testCache.list;
  });
  it("should add element to cache", () => {
    testCache.add("element2", "data2");
    expect(elementsInCache.has("element2")).toBeTruthy();
    expect(testCache.check("element3")).toBeFalsy();
  });
  it("should not add another element if it's the same", () => {
    testCache.add("element", "data");
    const numberOfElementsInCache = Array.from(elementsInCache.keys()).length;
    expect(numberOfElementsInCache).toBe(1);
  });
  it("should delete ", () => {
    testCache.delete("element");
    expect(elementsInCache.has("element")).toBeFalsy();
  });
  it("should clear cache", () => {
    testCache.clear();
    const numberOfElementsInCache = Array.from(elementsInCache.keys()).length;
    expect(numberOfElementsInCache).toBe(0);
  });
  describe("should throw error", () => {
    it("when element is not available", () => {
      function error() {
        testCache.delete("element2");
      }
      expect(error).toThrow();
    });
  });
});
