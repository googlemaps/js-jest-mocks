import { initialize, importLibrary } from "./index";

beforeEach(() => {
  initialize();
});

test("google.maps.importLibrary is a mock", async () => {
  expect(google.maps.importLibrary).toBeDefined();
  expect((google.maps.importLibrary as any).mock).toBeDefined();
});

const libraries = [
  "core",
  "maps",
  "places",
  "geocoding",
  "routes",
  "marker",
  "geometry",
  "elevation",
  "streetView",
  "journeySharing",
  "drawing",
  "visualization",
];

test.each(libraries)("library %s is returned", async (name) => {
  const libraryPromise = google.maps.importLibrary(name);
  expect(libraryPromise).toBeInstanceOf(Promise);
  await expect(libraryPromise).resolves.toBeDefined();
});

test("throws an error for unknown libraries", async () => {
  await expect(google.maps.importLibrary("unknown")).rejects.toThrowError();
});

test("importLibrary is exported as mock", async () => {
  await google.maps.importLibrary("core");
  expect(importLibrary.mock.calls).toHaveLength(1);
});
