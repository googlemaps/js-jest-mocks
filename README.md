[![npm](https://img.shields.io/npm/v/@googlemaps/jest-mocks)][npm-pkg]
![Release](https://github.com/googlemaps/js-jest-mocks/workflows/Release/badge.svg)
![Stable](https://img.shields.io/badge/stability-stable-green)
[![Tests/Build](https://github.com/googlemaps/js-jest-mocks/actions/workflows/test.yml/badge.svg)](https://github.com/googlemaps/js-jest-mocks/actions/workflows/test.yml)

[![codecov](https://codecov.io/gh/googlemaps/js-jest-mocks/branch/main/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-jest-mocks)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![solidarity](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

![Contributors](https://img.shields.io/github/contributors/googlemaps/js-jest-mocks?color=green)
[![License](https://img.shields.io/github/license/googlemaps/js-jest-mocks?color=blue)][license]
[![StackOverflow](https://img.shields.io/stackexchange/stackoverflow/t/google-maps?color=orange&label=google-maps&logo=stackoverflow)](https://stackoverflow.com/questions/tagged/google-maps)
[![Discord](https://img.shields.io/discord/676948200904589322?color=6A7EC2&logo=discord&logoColor=ffffff)][Discord server]

# Jest Mocks for Google Maps

## Description

Jest mocks for Google Maps in TypeScript.

**Note:** If you find a missing mock, please [file an issue].

## Requirements

- [Sign up with Google Maps Platform]
- A Google Maps Platform [project] with the [**Maps Javascript API**][maps-sdk] enabled
- An [API key] associated with the project above
- Node.js and NPM

## Installation

Available via NPM as the package `@googlemaps/jest-mocks`

```
npm i @googlemaps/jest-mocks
```

## Usage

These mocks need the tests to run in a browser-like environment (for example
`jest-environment-jsdom`).

Before running the tests, you have to call the exported `initialize`
function to set up the global namespaces of the mocked Google Maps API:

```ts
import { initialize } from "@googlemaps/jest-mocks";

beforeEach(() => {
  initialize();
});
```

You can then run the test-code that makes use of the Maps API almost as normal.
"Almost" is referring to the fact that the objects are all non-functional and
some things you can do with the real maps API cannot be done with the mocks
library.

We also export the `mockInstances` object and mocked constructors of all
classes (e.g. `Map` or `Marker`) that can be used to retrieve, inspect and
configure the mocks.

```ts
import { initialize, Map, Marker, mockInstances } from "@googlemaps/jest-mocks";

// this represents your code being tested
function codeUnderTest() {
  const map = new google.maps.Map(null);
  const markerOne = new google.maps.Marker();
  const markerTwo = new google.maps.Marker();

  map.setHeading(8);
  markerOne.setMap(map);
  markerTwo.setLabel("My marker");
}

beforeEach(() => {
  initialize();
});

test("my test", () => {
  codeUnderTest();

  // mockInstances stores the lists of all maps-objects created since
  // `initialize` was called, organized by constructor.
  const mapMocks = mockInstances.get(Map);
  const markerMocks = mockInstances.get(Marker);

  expect(mapMocks).toHaveLength(1);
  expect(markerMocks).toHaveLength(2);
  expect(mapMocks[0].setHeading).toHaveBeenCalledWith(8);
  expect(markerMocks[0].setMap).toHaveBeenCalledTimes(1);
  expect(markerMocks[1].setLabel).toHaveBeenCalledWith("My marker");

  // note that this will not work (`map.setHeading(8)` will not update any
  // internal state of the map):
  expect(mapMocks[0].getHeading()).toBe(8);
});
```

### Testing Events

To test code that uses events dispatched by Maps API objects, you can
follow a pattern like this:

```ts
import { mockInstances, Map } from "./registry";

let eventTriggered = false;

function codeUnderTest() {
  const map = new google.maps.Map(null);
  const listener = map.addListener("bounds_changed", () => {
    // whatever happens here should be observeable in some way, for the
    // sake of this example, we just set a global variable:
    eventTriggered = true;
  });
}

test("testing events", () => {
  // run the code under test, which will register an event-listener
  codeUnderTest();

  // since `map.addListener` doesn't actually do anything, we'll have to
  // retrieve the event-handler function and trigger the event ourselves
  const map: google.maps.Map = mockInstances.get(Map);
  const addListener: jest.MockedFunction<typeof map.addListener> =
    map.addListener;

  expect(addListener).toHaveBeenCalledTimes(1);

  const [eventType, listener] = addListener.mock.lastCall;

  // call the listener function (for mouse-events you'd have to create the
  // event-object here as well)
  listener();

  // assert that whatever the effect of your code receiving the event happened
  expect(eventTriggered).toBe(true);
});
```

### Extending Mocks

There are situations where you need some more functionality from the mocks
than what is provided by this library. In these cases, you can extend the
existing mocks.

For example, if you want to observe the creation of a Map instance to
validate constructor-arguments, you can add a spy function like this:

```ts
let createMapSpy: jest.Mock<
  void,
  ConstructorParameters<typeof google.maps.Map>
>;

beforeEach(() => {
  initialize();

  createMapSpy = jest.fn();

  // overwrite the mock implementation with an anonymous class
  google.maps.Map = class extends google.maps.Map {
    constructor(...args: ConstructorParameters<typeof google.maps.Map>) {
      createMapSpy(...args);
      super(...args);
    }
  };
});

test("map constructor", () => {
  const mapOptions = { mapId: "abcd" };
  const map = new google.maps.Map(null, mapOptions);

  expect(createMapSpy).toHaveBeenCalledWith(null, mapOptions);
});
```

So essentially, you can overwrite the classes in the global `google.maps`
namespace with your own classes extending the existing ones. The `initialize`
function will always restore them to their initial state.

### Mocking Services

If your code is interacting with services provided by the Maps API, you can
control the results that will be returned when calling the methods of the
service. First you need to get the service instance that was created by
your code using the `mockInstances` registry:

```ts
import {
  initialize,
  AutocompleteService,
  mockInstances,
} from "@googlemaps/jest-mocks";

beforeEach(() => {
  initialize();
});

test("...", () => {
  // [... do something that creates a google.maps.AutocompleteService instance]

  const [serviceMock] = mockInstances.get(AutocompleteService);
  expect(serviceMock.getPlacePredictions).toHaveBeenCalled();
});
```

Note that the imported `AutocompleteService` and
`google.maps.places.AutocompleteService` are the same object.
The only difference is that the former one is known to be the mocked version
(so you can access the mock-interface without type-errors when writing tests
in TS.

Since the mocked methods are created in the constructor of the mocked
`AutocompleteService`, we can't overwrite the behavior of the methods before
the constructor has been called.

If the creation of the AutocompleteService is separated from it's usage,
this is relatively easy:

```ts
// assuming your class under test looks like this:
class MyAutocomplete {
  constructor() {
    this.service = new google.maps.places.AutocompleteService();
  }

  async update() {
    const res = await this.service.getPlacePredictions();
  }
}

// configure the mocks after the constructor has been called:
test("...", async () => {
  const subject = new MyAutocomplete();

  const [serviceMock] = mockInstances.get(AutocompleteService);
  serviceMock.getPlacePredictions.mockImplementation(() => {
    return {
      // whatever you want the return-value to be
    };
  });

  // now call the method under test
  await subject.update();

  // validate the outcome
});
```

The same applies if you can somehow separate the creation of the service-object
from its usage, for example, by monkey-patching it in the tests:

```ts
test("...", async () => {
  const subject = new MyAutocomplete();

  // this is assuming that `subject.update()` will internally call a method
  // `this.createAutocompleteService()` when called.
  subject.createAutocompleteService = jest.fn(() => {
    const svc = new AutocompleteService();

    // configure mocked methods as above

    return svc;
  });

  await subject.update();
});
```

Both of these solutions are probably more of an antipattern, since they
expose implementation details (like the `service` property or the
`createAutocompleteService` method) to the test, making it harder to change
the implementation without updating the test.

The recommended way is to achieve this is to replace the `AutocompleteService`
class entirely to get full control over its behavior in your tests:

```ts
const getPlacePredictionsMock = jest.fn();
class MockAutocompleteService extends AutocompleteService {
  constructor() {
    super();

    this.getPlacePredictions = getPlacePredictionsMock;
  }
}

test("...", () => {
  google.maps.places.AutocompleteService = MockAutocompleteService;
  getPlacePredictions.mockImplementation(() => {
      return { ... };
  });

  // run your test
});
```

### Cleaning up mocks

Whenever `initialize()` is called, the captured mocks are automatically cleaned. Using any of Jest's methods, you can clean the mock instances at any time:

```ts
import { initialize, Map, Marker, mockInstances } from "@googlemaps/jest-mocks";

beforeAll(() => {
  initialize();
});

// Clear all mocks
beforeEach(() => {
  mockInstances.clearAll();
});

// Clear specific mocks
beforeEach(() => {
  mockInstances.clear(Map, Marker);
});
```

## Contributing

Contributions are welcome and encouraged! If you'd like to contribute, send us a [pull request] and refer to our [code of conduct] and [contributing guide].

## Terms of Service

This library uses Google Maps Platform services. Use of Google Maps Platform services through this library is subject to the Google Maps Platform [Terms of Service].

This library is not a Google Maps Platform Core Service. Therefore, the Google Maps Platform Terms of Service (e.g. Technical Support Services, Service Level Agreements, and Deprecation Policy) do not apply to the code in this library.

## Support

This library is offered via an open source [license]. It is not governed by the Google Maps Platform Support [Technical Support Services Guidelines, the SLA, or the [Deprecation Policy]. However, any Google Maps Platform services used by the library remain subject to the Google Maps Platform Terms of Service.

This library adheres to [semantic versioning] to indicate when backwards-incompatible changes are introduced. Accordingly, while the library is in version 0.x, backwards-incompatible changes may be introduced at any time.

If you find a bug, or have a feature request, please [file an issue] on GitHub. If you would like to get answers to technical questions from other Google Maps Platform developers, ask through one of our [developer community channels]. If you'd like to contribute, please check the [contributing guide].

You can also discuss this library on our [Discord server].

[API key]: https://developers.google.com/maps/documentation/javascript/get-api-key
[maps-sdk]: https://developers.google.com/maps/documentation/javascript
[documentation]: https://googlemaps.github.io/js-jest-mocks
[npm-pkg]: https://npmjs.com/package/@googlemaps/jest-mocks

[code of conduct]: ?tab=coc-ov-file#readme
[contributing guide]: CONTRIBUTING.md
[Deprecation Policy]: https://cloud.google.com/maps-platform/terms
[developer community channels]: https://developers.google.com/maps/developer-community
[Discord server]: https://discord.gg/hYsWbmk
[file an issue]: https://github.com/googlemaps/js-jest-mocks/issues/new/choose
[license]: LICENSE
[project]: https://developers.google.com/maps/documentation/javascript/cloud-setup#enabling-apis
[pull request]: https://github.com/googlemaps/js-jest-mocks/compare
[semantic versioning]: https://semver.org
[Sign up with Google Maps Platform]: https://console.cloud.google.com/google/maps-apis/start
[similar inquiry]: https://github.com/googlemaps/js-jest-mocks/issues
[SLA]: https://cloud.google.com/maps-platform/terms/sla
[Technical Support Services Guidelines]: https://cloud.google.com/maps-platform/terms/tssg
[Terms of Service]: https://cloud.google.com/maps-platform/terms
