/*!
 * Copyright 2020 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FirebaseApp } from '../firebase-app';
import * as firebaseRtdbApi from '@firebase/database';
import * as adminRtdbApi from './database';

export function database(app: FirebaseApp): firebaseRtdbApi.Database {
  return app.database();
}

// We must define a namespace to make the typings work correctly. 
// Otherwise `admin.database()` cannot be called like a function.
/* eslint-disable @typescript-eslint/no-namespace */
export namespace admin.database {
  // See https://github.com/microsoft/TypeScript/issues/4336
  /* eslint-disable @typescript-eslint/no-unused-vars */
  // For context: github.com/typescript-eslint/typescript-eslint/issues/363
  export import Database = firebaseRtdbApi.Database;
  export import DataSnapshot = firebaseRtdbApi.DataSnapshot;
  export import OnDisconnect = firebaseRtdbApi.OnDisconnect;
  export import EventType = adminRtdbApi.EventType;
  export import Query = firebaseRtdbApi.Query;
  export import Reference = firebaseRtdbApi.Reference;
  export import ThenableReference = adminRtdbApi.ThenableReference;
  export import enableLogging = firebaseRtdbApi.enableLogging;
  export import ServerValue = firebaseRtdbApi.ServerValue;
}