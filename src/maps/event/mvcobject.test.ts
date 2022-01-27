import { MVCObject } from "./mvcobject";

test("has listener object", () => {
  expect(new MVCObject().addListener()).toBeTruthy();
});
