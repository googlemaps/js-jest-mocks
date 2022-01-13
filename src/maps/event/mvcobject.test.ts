import { initialize } from "../../index";
import { Map_ } from "../maps/map";
import { MVCObject } from "./mvcobject";

test("instances are stored", () => {
  const mvcObject = new MVCObject();
  expect(MVCObject.mockInstances).toStrictEqual([mvcObject]);
  expect(MVCObject.mockInstances[0].addListener).toBeTruthy();
});

test("setup child class", () => {
  initialize();
  new google.maps.Map(null);
  expect(Map_.mockInstances).toBeTruthy();
});

test("auto cleanup after each test from above", () => {
  expect(MVCObject.mockInstances).toBeUndefined();
  expect(Map_.mockInstances).toBeUndefined();
  expect(MVCObject._mockClasses).toBeUndefined();
});
