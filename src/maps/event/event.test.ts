import { initialize } from "../../index";
import { event } from "./event";

test("event system", () => {
  initialize();
  expect(google.maps.event).toStrictEqual(event);
});
