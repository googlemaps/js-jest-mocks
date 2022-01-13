import { MVCObject } from "./mvcobject";

test("instances are stored", () => {
  const mvcObject = new MVCObject();
  expect(MVCObject.mockInstances).toStrictEqual([mvcObject]);
  expect(MVCObject.mockInstances[0].addListener).toBeTruthy();
});

test("instances are cleared after the test above", () => {
  expect(MVCObject.mockInstances).toStrictEqual([]);
});
