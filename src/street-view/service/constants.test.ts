/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { initialize } from '../../index';

test('street view constants', () => {
  initialize();
  expect(google.maps.StreetViewPreference.BEST).toEqual('best');
  expect(google.maps.StreetViewPreference.NEAREST).toEqual('nearest');
  expect(google.maps.StreetViewSource.DEFAULT).toEqual('default');
  expect(google.maps.StreetViewSource.OUTDOOR).toEqual('outdoor');
  expect(google.maps.StreetViewStatus.OK).toEqual('OK');
  expect(google.maps.StreetViewStatus.UNKNOWN_ERROR).toEqual('UNKNOWN_ERROR');
  expect(google.maps.StreetViewStatus.ZERO_RESULTS).toEqual('ZERO_RESULTS');
});
