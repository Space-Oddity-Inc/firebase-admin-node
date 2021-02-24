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

/**
 * @module firebase-admin/database
 */

import * as rtdb from '@firebase/database-types';
import {
  enableLogging as enableLoggingFunc,
  ServerValue as serverValueConst,
} from '@firebase/database';

import { App, getApp } from '../app';
import { FirebaseApp } from '../app/firebase-app';
import { Database, DatabaseService } from './database';
import { Database as TDatabase } from './database';

export { Database };
export {
  DataSnapshot,
  EventType,
  OnDisconnect,
  Query,
  Reference,
  ThenableReference,
} from '@firebase/database-types';

/**
 * [`enableLogging`](https://firebase.google.com/docs/reference/js/firebase.database#enablelogging)
 * function from the `@firebase/database` package.
 */
export const enableLogging: typeof rtdb.enableLogging = enableLoggingFunc;

/**
 * [`ServerValue`](https://firebase.google.com/docs/reference/js/firebase.database.ServerValue)
 * module from the `@firebase/database` package.
 */
export const ServerValue: rtdb.ServerValue = serverValueConst;

/**
 * Gets the {@link database.Database `Database`} service for the default
 * app or a given app.
 *
 * `getDatabase()` can be called with no arguments to access the default
 * app's {@link database.Database `Database`} service or as
 * `getDatabase(app)` to access the
 * {@link database.Database `Database`} service associated with a specific
 * app.
 *
 * @example
 * ```javascript
 * // Get the Database service for the default app
 * const defaultDatabase = getDatabase();
 * ```
 *
 * @example
 * ```javascript
 * // Get the Database service for a specific app
 * const otherDatabase = getDatabase(app);
 * ```
 *
 * @param App whose `Database` service to
 *   return. If not provided, the default `Database` service will be returned.
 *
 * @return The default `Database` service if no app
 *   is provided or the `Database` service associated with the provided app.
 */
export function getDatabase(app?: App): Database {
  return getDatabaseInstance({ app });
}

/**
 * Gets the {@link database.Database `Database`} service for the default
 * app or a given app.
 *
 * `getDatabaseWithUrl()` can be called with no arguments to access the default
 * app's {@link database.Database `Database`} service or as
 * `getDatabaseWithUrl(app)` to access the
 * {@link database.Database `Database`} service associated with a specific
 * app.
 *
 * @example
 * ```javascript
 * // Get the Database service for the default app
 * const defaultDatabase = getDatabaseWithUrl('https://example.firebaseio.com');
 * ```
 *
 * @example
 * ```javascript
 * // Get the Database service for a specific app
 * const otherDatabase = getDatabaseWithUrl('https://example.firebaseio.com', app);
 * ```
 *
 * @param App whose `Database` service to
 *   return. If not provided, the default `Database` service will be returned.
 *
 * @return The default `Database` service if no app
 *   is provided or the `Database` service associated with the provided app.
 */
export function getDatabaseWithUrl(url: string, app?: App): Database {
  return getDatabaseInstance({ url, app });
}

function  getDatabaseInstance(options: { url?: string; app?: App }): Database {
  let { app } = options;
  if (typeof app === 'undefined') {
    app = getApp();
  }

  const firebaseApp: FirebaseApp = app as FirebaseApp;
  const dbService = firebaseApp.getOrInitService('database', (app) => new DatabaseService(app));
  return dbService.getDatabase(options.url);
}

/**
 * Gets the {@link database.Database `Database`} service for the default
 * app or a given app.
 *
 * `admin.database()` can be called with no arguments to access the default
 * app's {@link database.Database `Database`} service or as
 * `admin.database(app)` to access the
 * {@link database.Database `Database`} service associated with a specific
 * app.
 *
 * `admin.database` is also a namespace that can be used to access global
 * constants and methods associated with the `Database` service.
 *
 * @example
 * ```javascript
 * // Get the Database service for the default app
 * var defaultDatabase = admin.database();
 * ```
 *
 * @example
 * ```javascript
 * // Get the Database service for a specific app
 * var otherDatabase = admin.database(app);
 * ```
 *
 * @param App whose `Database` service to
 *   return. If not provided, the default `Database` service will be returned.
 *
 * @return The default `Database` service if no app
 *   is provided or the `Database` service associated with the provided app.
 */
export declare function database(app?: App): database.Database;

/* eslint-disable @typescript-eslint/no-namespace */
export namespace database {
  export type Database = TDatabase;
  export type DataSnapshot = rtdb.DataSnapshot;
  export type EventType = rtdb.EventType;
  export type OnDisconnect = rtdb.OnDisconnect;
  export type Query = rtdb.Query;
  export type Reference = rtdb.Reference;
  export type ThenableReference = rtdb.ThenableReference;

  export declare const enableLogging: typeof rtdb.enableLogging;

  /**
   * [`ServerValue`](https://firebase.google.com/docs/reference/js/firebase.database.ServerValue)
   * module from the `@firebase/database` package.
   */
  export declare const ServerValue: rtdb.ServerValue;
}
