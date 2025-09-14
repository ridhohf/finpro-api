
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model TenantProfile
 * 
 */
export type TenantProfile = $Result.DefaultSelection<Prisma.$TenantProfilePayload>
/**
 * Model SocialLogins
 * 
 */
export type SocialLogins = $Result.DefaultSelection<Prisma.$SocialLoginsPayload>
/**
 * Model EmailVerifications
 * 
 */
export type EmailVerifications = $Result.DefaultSelection<Prisma.$EmailVerificationsPayload>
/**
 * Model ResetPasswords
 * 
 */
export type ResetPasswords = $Result.DefaultSelection<Prisma.$ResetPasswordsPayload>
/**
 * Model PropertyCategories
 * 
 */
export type PropertyCategories = $Result.DefaultSelection<Prisma.$PropertyCategoriesPayload>
/**
 * Model Properties
 * 
 */
export type Properties = $Result.DefaultSelection<Prisma.$PropertiesPayload>
/**
 * Model Rooms
 * 
 */
export type Rooms = $Result.DefaultSelection<Prisma.$RoomsPayload>
/**
 * Model RoomAvailabilities
 * 
 */
export type RoomAvailabilities = $Result.DefaultSelection<Prisma.$RoomAvailabilitiesPayload>
/**
 * Model PeakSeasons
 * 
 */
export type PeakSeasons = $Result.DefaultSelection<Prisma.$PeakSeasonsPayload>
/**
 * Model Reservations
 * 
 */
export type Reservations = $Result.DefaultSelection<Prisma.$ReservationsPayload>
/**
 * Model PaymentProofs
 * 
 */
export type PaymentProofs = $Result.DefaultSelection<Prisma.$PaymentProofsPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReservationStatus: {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PENDING_CONFIRMATION: 'PENDING_CONFIRMATION',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.tenantProfile`: Exposes CRUD operations for the **TenantProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantProfiles
    * const tenantProfiles = await prisma.tenantProfile.findMany()
    * ```
    */
  get tenantProfile(): Prisma.TenantProfileDelegate<ExtArgs>;

  /**
   * `prisma.socialLogins`: Exposes CRUD operations for the **SocialLogins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLogins
    * const socialLogins = await prisma.socialLogins.findMany()
    * ```
    */
  get socialLogins(): Prisma.SocialLoginsDelegate<ExtArgs>;

  /**
   * `prisma.emailVerifications`: Exposes CRUD operations for the **EmailVerifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerifications
    * const emailVerifications = await prisma.emailVerifications.findMany()
    * ```
    */
  get emailVerifications(): Prisma.EmailVerificationsDelegate<ExtArgs>;

  /**
   * `prisma.resetPasswords`: Exposes CRUD operations for the **ResetPasswords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResetPasswords
    * const resetPasswords = await prisma.resetPasswords.findMany()
    * ```
    */
  get resetPasswords(): Prisma.ResetPasswordsDelegate<ExtArgs>;

  /**
   * `prisma.propertyCategories`: Exposes CRUD operations for the **PropertyCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyCategories
    * const propertyCategories = await prisma.propertyCategories.findMany()
    * ```
    */
  get propertyCategories(): Prisma.PropertyCategoriesDelegate<ExtArgs>;

  /**
   * `prisma.properties`: Exposes CRUD operations for the **Properties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.properties.findMany()
    * ```
    */
  get properties(): Prisma.PropertiesDelegate<ExtArgs>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **Rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.RoomsDelegate<ExtArgs>;

  /**
   * `prisma.roomAvailabilities`: Exposes CRUD operations for the **RoomAvailabilities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomAvailabilities
    * const roomAvailabilities = await prisma.roomAvailabilities.findMany()
    * ```
    */
  get roomAvailabilities(): Prisma.RoomAvailabilitiesDelegate<ExtArgs>;

  /**
   * `prisma.peakSeasons`: Exposes CRUD operations for the **PeakSeasons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeakSeasons
    * const peakSeasons = await prisma.peakSeasons.findMany()
    * ```
    */
  get peakSeasons(): Prisma.PeakSeasonsDelegate<ExtArgs>;

  /**
   * `prisma.reservations`: Exposes CRUD operations for the **Reservations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservations.findMany()
    * ```
    */
  get reservations(): Prisma.ReservationsDelegate<ExtArgs>;

  /**
   * `prisma.paymentProofs`: Exposes CRUD operations for the **PaymentProofs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentProofs
    * const paymentProofs = await prisma.paymentProofs.findMany()
    * ```
    */
  get paymentProofs(): Prisma.PaymentProofsDelegate<ExtArgs>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    TenantProfile: 'TenantProfile',
    SocialLogins: 'SocialLogins',
    EmailVerifications: 'EmailVerifications',
    ResetPasswords: 'ResetPasswords',
    PropertyCategories: 'PropertyCategories',
    Properties: 'Properties',
    Rooms: 'Rooms',
    RoomAvailabilities: 'RoomAvailabilities',
    PeakSeasons: 'PeakSeasons',
    Reservations: 'Reservations',
    PaymentProofs: 'PaymentProofs',
    Reviews: 'Reviews'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "tenantProfile" | "socialLogins" | "emailVerifications" | "resetPasswords" | "propertyCategories" | "properties" | "rooms" | "roomAvailabilities" | "peakSeasons" | "reservations" | "paymentProofs" | "reviews"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      TenantProfile: {
        payload: Prisma.$TenantProfilePayload<ExtArgs>
        fields: Prisma.TenantProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          findFirst: {
            args: Prisma.TenantProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          findMany: {
            args: Prisma.TenantProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>[]
          }
          create: {
            args: Prisma.TenantProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          createMany: {
            args: Prisma.TenantProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>[]
          }
          delete: {
            args: Prisma.TenantProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          update: {
            args: Prisma.TenantProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          deleteMany: {
            args: Prisma.TenantProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          aggregate: {
            args: Prisma.TenantProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantProfile>
          }
          groupBy: {
            args: Prisma.TenantProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TenantProfileCountAggregateOutputType> | number
          }
        }
      }
      SocialLogins: {
        payload: Prisma.$SocialLoginsPayload<ExtArgs>
        fields: Prisma.SocialLoginsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLoginsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLoginsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          findFirst: {
            args: Prisma.SocialLoginsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLoginsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          findMany: {
            args: Prisma.SocialLoginsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>[]
          }
          create: {
            args: Prisma.SocialLoginsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          createMany: {
            args: Prisma.SocialLoginsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLoginsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>[]
          }
          delete: {
            args: Prisma.SocialLoginsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          update: {
            args: Prisma.SocialLoginsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          deleteMany: {
            args: Prisma.SocialLoginsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLoginsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialLoginsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          aggregate: {
            args: Prisma.SocialLoginsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLogins>
          }
          groupBy: {
            args: Prisma.SocialLoginsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLoginsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLoginsCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLoginsCountAggregateOutputType> | number
          }
        }
      }
      EmailVerifications: {
        payload: Prisma.$EmailVerificationsPayload<ExtArgs>
        fields: Prisma.EmailVerificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>
          }
          update: {
            args: Prisma.EmailVerificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailVerificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationsPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerifications>
          }
          groupBy: {
            args: Prisma.EmailVerificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationsCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationsCountAggregateOutputType> | number
          }
        }
      }
      ResetPasswords: {
        payload: Prisma.$ResetPasswordsPayload<ExtArgs>
        fields: Prisma.ResetPasswordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResetPasswordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResetPasswordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>
          }
          findFirst: {
            args: Prisma.ResetPasswordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResetPasswordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>
          }
          findMany: {
            args: Prisma.ResetPasswordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>[]
          }
          create: {
            args: Prisma.ResetPasswordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>
          }
          createMany: {
            args: Prisma.ResetPasswordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResetPasswordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>[]
          }
          delete: {
            args: Prisma.ResetPasswordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>
          }
          update: {
            args: Prisma.ResetPasswordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>
          }
          deleteMany: {
            args: Prisma.ResetPasswordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResetPasswordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResetPasswordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordsPayload>
          }
          aggregate: {
            args: Prisma.ResetPasswordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResetPasswords>
          }
          groupBy: {
            args: Prisma.ResetPasswordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResetPasswordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResetPasswordsCountArgs<ExtArgs>
            result: $Utils.Optional<ResetPasswordsCountAggregateOutputType> | number
          }
        }
      }
      PropertyCategories: {
        payload: Prisma.$PropertyCategoriesPayload<ExtArgs>
        fields: Prisma.PropertyCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>
          }
          findFirst: {
            args: Prisma.PropertyCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>
          }
          findMany: {
            args: Prisma.PropertyCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>[]
          }
          create: {
            args: Prisma.PropertyCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>
          }
          createMany: {
            args: Prisma.PropertyCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>[]
          }
          delete: {
            args: Prisma.PropertyCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>
          }
          update: {
            args: Prisma.PropertyCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.PropertyCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoriesPayload>
          }
          aggregate: {
            args: Prisma.PropertyCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyCategories>
          }
          groupBy: {
            args: Prisma.PropertyCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoriesCountAggregateOutputType> | number
          }
        }
      }
      Properties: {
        payload: Prisma.$PropertiesPayload<ExtArgs>
        fields: Prisma.PropertiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          findFirst: {
            args: Prisma.PropertiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          findMany: {
            args: Prisma.PropertiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>[]
          }
          create: {
            args: Prisma.PropertiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          createMany: {
            args: Prisma.PropertiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>[]
          }
          delete: {
            args: Prisma.PropertiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          update: {
            args: Prisma.PropertiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          deleteMany: {
            args: Prisma.PropertiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          aggregate: {
            args: Prisma.PropertiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperties>
          }
          groupBy: {
            args: Prisma.PropertiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertiesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertiesCountAggregateOutputType> | number
          }
        }
      }
      Rooms: {
        payload: Prisma.$RoomsPayload<ExtArgs>
        fields: Prisma.RoomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findFirst: {
            args: Prisma.RoomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findMany: {
            args: Prisma.RoomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          create: {
            args: Prisma.RoomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          createMany: {
            args: Prisma.RoomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          delete: {
            args: Prisma.RoomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          update: {
            args: Prisma.RoomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          deleteMany: {
            args: Prisma.RoomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.RoomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      RoomAvailabilities: {
        payload: Prisma.$RoomAvailabilitiesPayload<ExtArgs>
        fields: Prisma.RoomAvailabilitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomAvailabilitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomAvailabilitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>
          }
          findFirst: {
            args: Prisma.RoomAvailabilitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomAvailabilitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>
          }
          findMany: {
            args: Prisma.RoomAvailabilitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>[]
          }
          create: {
            args: Prisma.RoomAvailabilitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>
          }
          createMany: {
            args: Prisma.RoomAvailabilitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomAvailabilitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>[]
          }
          delete: {
            args: Prisma.RoomAvailabilitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>
          }
          update: {
            args: Prisma.RoomAvailabilitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>
          }
          deleteMany: {
            args: Prisma.RoomAvailabilitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomAvailabilitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomAvailabilitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilitiesPayload>
          }
          aggregate: {
            args: Prisma.RoomAvailabilitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomAvailabilities>
          }
          groupBy: {
            args: Prisma.RoomAvailabilitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomAvailabilitiesCountArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilitiesCountAggregateOutputType> | number
          }
        }
      }
      PeakSeasons: {
        payload: Prisma.$PeakSeasonsPayload<ExtArgs>
        fields: Prisma.PeakSeasonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeakSeasonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeakSeasonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>
          }
          findFirst: {
            args: Prisma.PeakSeasonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeakSeasonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>
          }
          findMany: {
            args: Prisma.PeakSeasonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>[]
          }
          create: {
            args: Prisma.PeakSeasonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>
          }
          createMany: {
            args: Prisma.PeakSeasonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeakSeasonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>[]
          }
          delete: {
            args: Prisma.PeakSeasonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>
          }
          update: {
            args: Prisma.PeakSeasonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>
          }
          deleteMany: {
            args: Prisma.PeakSeasonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeakSeasonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeakSeasonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonsPayload>
          }
          aggregate: {
            args: Prisma.PeakSeasonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeakSeasons>
          }
          groupBy: {
            args: Prisma.PeakSeasonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeakSeasonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeakSeasonsCountArgs<ExtArgs>
            result: $Utils.Optional<PeakSeasonsCountAggregateOutputType> | number
          }
        }
      }
      Reservations: {
        payload: Prisma.$ReservationsPayload<ExtArgs>
        fields: Prisma.ReservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findFirst: {
            args: Prisma.ReservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findMany: {
            args: Prisma.ReservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          create: {
            args: Prisma.ReservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          createMany: {
            args: Prisma.ReservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          delete: {
            args: Prisma.ReservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          update: {
            args: Prisma.ReservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          deleteMany: {
            args: Prisma.ReservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          aggregate: {
            args: Prisma.ReservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservations>
          }
          groupBy: {
            args: Prisma.ReservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationsCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationsCountAggregateOutputType> | number
          }
        }
      }
      PaymentProofs: {
        payload: Prisma.$PaymentProofsPayload<ExtArgs>
        fields: Prisma.PaymentProofsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentProofsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentProofsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>
          }
          findFirst: {
            args: Prisma.PaymentProofsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentProofsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>
          }
          findMany: {
            args: Prisma.PaymentProofsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>[]
          }
          create: {
            args: Prisma.PaymentProofsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>
          }
          createMany: {
            args: Prisma.PaymentProofsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentProofsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>[]
          }
          delete: {
            args: Prisma.PaymentProofsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>
          }
          update: {
            args: Prisma.PaymentProofsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentProofsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentProofsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentProofsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofsPayload>
          }
          aggregate: {
            args: Prisma.PaymentProofsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentProofs>
          }
          groupBy: {
            args: Prisma.PaymentProofsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentProofsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentProofsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentProofsCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    properties: number
    propertyCategories: number
    reservations: number
    reviews: number
    emailVerifications: number
    resetPasswords: number
    socialLogins: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | UsersCountOutputTypeCountPropertiesArgs
    propertyCategories?: boolean | UsersCountOutputTypeCountPropertyCategoriesArgs
    reservations?: boolean | UsersCountOutputTypeCountReservationsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    emailVerifications?: boolean | UsersCountOutputTypeCountEmailVerificationsArgs
    resetPasswords?: boolean | UsersCountOutputTypeCountResetPasswordsArgs
    socialLogins?: boolean | UsersCountOutputTypeCountSocialLoginsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertiesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPropertyCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCategoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountResetPasswordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetPasswordsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSocialLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLoginsWhereInput
  }


  /**
   * Count Type PropertyCategoriesCountOutputType
   */

  export type PropertyCategoriesCountOutputType = {
    properties: number
  }

  export type PropertyCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyCategoriesCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCategoriesCountOutputType without action
   */
  export type PropertyCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategoriesCountOutputType
     */
    select?: PropertyCategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCategoriesCountOutputType without action
   */
  export type PropertyCategoriesCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertiesWhereInput
  }


  /**
   * Count Type PropertiesCountOutputType
   */

  export type PropertiesCountOutputType = {
    rooms: number
    reservations: number
    reviews: number
    peakSeasons: number
  }

  export type PropertiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | PropertiesCountOutputTypeCountRoomsArgs
    reservations?: boolean | PropertiesCountOutputTypeCountReservationsArgs
    reviews?: boolean | PropertiesCountOutputTypeCountReviewsArgs
    peakSeasons?: boolean | PropertiesCountOutputTypeCountPeakSeasonsArgs
  }

  // Custom InputTypes
  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertiesCountOutputType
     */
    select?: PropertiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomsWhereInput
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountPeakSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeakSeasonsWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    reservations: number
    roomAvailabilities: number
    peakSeasons: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | RoomsCountOutputTypeCountReservationsArgs
    roomAvailabilities?: boolean | RoomsCountOutputTypeCountRoomAvailabilitiesArgs
    peakSeasons?: boolean | RoomsCountOutputTypeCountPeakSeasonsArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountRoomAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilitiesWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountPeakSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeakSeasonsWhereInput
  }


  /**
   * Count Type ReservationsCountOutputType
   */

  export type ReservationsCountOutputType = {
    paymentProofs: number
    reviews: number
  }

  export type ReservationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentProofs?: boolean | ReservationsCountOutputTypeCountPaymentProofsArgs
    reviews?: boolean | ReservationsCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationsCountOutputType
     */
    select?: ReservationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeCountPaymentProofsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentProofsWhereInput
  }

  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    provider: string | null
    providerId: string | null
    isVerified: boolean | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    provider: string | null
    providerId: string | null
    isVerified: boolean | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    provider: number
    providerId: number
    isVerified: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    provider?: true
    providerId?: true
    isVerified?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    provider?: true
    providerId?: true
    isVerified?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    provider?: true
    providerId?: true
    isVerified?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string | null
    role: string
    provider: string | null
    providerId: string | null
    isVerified: boolean
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    provider?: boolean
    providerId?: boolean
    isVerified?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantProfile?: boolean | Users$tenantProfileArgs<ExtArgs>
    properties?: boolean | Users$propertiesArgs<ExtArgs>
    propertyCategories?: boolean | Users$propertyCategoriesArgs<ExtArgs>
    reservations?: boolean | Users$reservationsArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    emailVerifications?: boolean | Users$emailVerificationsArgs<ExtArgs>
    resetPasswords?: boolean | Users$resetPasswordsArgs<ExtArgs>
    socialLogins?: boolean | Users$socialLoginsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    provider?: boolean
    providerId?: boolean
    isVerified?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    provider?: boolean
    providerId?: boolean
    isVerified?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantProfile?: boolean | Users$tenantProfileArgs<ExtArgs>
    properties?: boolean | Users$propertiesArgs<ExtArgs>
    propertyCategories?: boolean | Users$propertyCategoriesArgs<ExtArgs>
    reservations?: boolean | Users$reservationsArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    emailVerifications?: boolean | Users$emailVerificationsArgs<ExtArgs>
    resetPasswords?: boolean | Users$resetPasswordsArgs<ExtArgs>
    socialLogins?: boolean | Users$socialLoginsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      tenantProfile: Prisma.$TenantProfilePayload<ExtArgs> | null
      properties: Prisma.$PropertiesPayload<ExtArgs>[]
      propertyCategories: Prisma.$PropertyCategoriesPayload<ExtArgs>[]
      reservations: Prisma.$ReservationsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      emailVerifications: Prisma.$EmailVerificationsPayload<ExtArgs>[]
      resetPasswords: Prisma.$ResetPasswordsPayload<ExtArgs>[]
      socialLogins: Prisma.$SocialLoginsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string | null
      role: string
      provider: string | null
      providerId: string | null
      isVerified: boolean
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenantProfile<T extends Users$tenantProfileArgs<ExtArgs> = {}>(args?: Subset<T, Users$tenantProfileArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    properties<T extends Users$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Users$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findMany"> | Null>
    propertyCategories<T extends Users$propertyCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Users$propertyCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "findMany"> | Null>
    reservations<T extends Users$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany"> | Null>
    emailVerifications<T extends Users$emailVerificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$emailVerificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "findMany"> | Null>
    resetPasswords<T extends Users$resetPasswordsArgs<ExtArgs> = {}>(args?: Subset<T, Users$resetPasswordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "findMany"> | Null>
    socialLogins<T extends Users$socialLoginsArgs<ExtArgs> = {}>(args?: Subset<T, Users$socialLoginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly provider: FieldRef<"Users", 'String'>
    readonly providerId: FieldRef<"Users", 'String'>
    readonly isVerified: FieldRef<"Users", 'Boolean'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.tenantProfile
   */
  export type Users$tenantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    where?: TenantProfileWhereInput
  }

  /**
   * Users.properties
   */
  export type Users$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    where?: PropertiesWhereInput
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    cursor?: PropertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Users.propertyCategories
   */
  export type Users$propertyCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    where?: PropertyCategoriesWhereInput
    orderBy?: PropertyCategoriesOrderByWithRelationInput | PropertyCategoriesOrderByWithRelationInput[]
    cursor?: PropertyCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyCategoriesScalarFieldEnum | PropertyCategoriesScalarFieldEnum[]
  }

  /**
   * Users.reservations
   */
  export type Users$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Users.reviews
   */
  export type Users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users.emailVerifications
   */
  export type Users$emailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    where?: EmailVerificationsWhereInput
    orderBy?: EmailVerificationsOrderByWithRelationInput | EmailVerificationsOrderByWithRelationInput[]
    cursor?: EmailVerificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationsScalarFieldEnum | EmailVerificationsScalarFieldEnum[]
  }

  /**
   * Users.resetPasswords
   */
  export type Users$resetPasswordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    where?: ResetPasswordsWhereInput
    orderBy?: ResetPasswordsOrderByWithRelationInput | ResetPasswordsOrderByWithRelationInput[]
    cursor?: ResetPasswordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResetPasswordsScalarFieldEnum | ResetPasswordsScalarFieldEnum[]
  }

  /**
   * Users.socialLogins
   */
  export type Users$socialLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    where?: SocialLoginsWhereInput
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[]
    cursor?: SocialLoginsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model TenantProfile
   */

  export type AggregateTenantProfile = {
    _count: TenantProfileCountAggregateOutputType | null
    _avg: TenantProfileAvgAggregateOutputType | null
    _sum: TenantProfileSumAggregateOutputType | null
    _min: TenantProfileMinAggregateOutputType | null
    _max: TenantProfileMaxAggregateOutputType | null
  }

  export type TenantProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantProfile to aggregate.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantProfiles
    **/
    _count?: true | TenantProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantProfileMaxAggregateInputType
  }

  export type GetTenantProfileAggregateType<T extends TenantProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantProfile[P]>
      : GetScalarType<T[P], AggregateTenantProfile[P]>
  }




  export type TenantProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantProfileWhereInput
    orderBy?: TenantProfileOrderByWithAggregationInput | TenantProfileOrderByWithAggregationInput[]
    by: TenantProfileScalarFieldEnum[] | TenantProfileScalarFieldEnum
    having?: TenantProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantProfileCountAggregateInputType | true
    _avg?: TenantProfileAvgAggregateInputType
    _sum?: TenantProfileSumAggregateInputType
    _min?: TenantProfileMinAggregateInputType
    _max?: TenantProfileMaxAggregateInputType
  }

  export type TenantProfileGroupByOutputType = {
    id: number
    userId: number
    companyName: string
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantProfileCountAggregateOutputType | null
    _avg: TenantProfileAvgAggregateOutputType | null
    _sum: TenantProfileSumAggregateOutputType | null
    _min: TenantProfileMinAggregateOutputType | null
    _max: TenantProfileMaxAggregateOutputType | null
  }

  type GetTenantProfileGroupByPayload<T extends TenantProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TenantProfileGroupByOutputType[P]>
        }
      >
    >


  export type TenantProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantProfile"]>

  export type TenantProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantProfile"]>

  export type TenantProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TenantProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TenantProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantProfile"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenantProfile"]>
    composites: {}
  }

  type TenantProfileGetPayload<S extends boolean | null | undefined | TenantProfileDefaultArgs> = $Result.GetResult<Prisma.$TenantProfilePayload, S>

  type TenantProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantProfileCountAggregateInputType | true
    }

  export interface TenantProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantProfile'], meta: { name: 'TenantProfile' } }
    /**
     * Find zero or one TenantProfile that matches the filter.
     * @param {TenantProfileFindUniqueArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantProfileFindUniqueArgs>(args: SelectSubset<T, TenantProfileFindUniqueArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TenantProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantProfileFindUniqueOrThrowArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TenantProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindFirstArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantProfileFindFirstArgs>(args?: SelectSubset<T, TenantProfileFindFirstArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TenantProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindFirstOrThrowArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TenantProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantProfiles
     * const tenantProfiles = await prisma.tenantProfile.findMany()
     * 
     * // Get first 10 TenantProfiles
     * const tenantProfiles = await prisma.tenantProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantProfileWithIdOnly = await prisma.tenantProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantProfileFindManyArgs>(args?: SelectSubset<T, TenantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TenantProfile.
     * @param {TenantProfileCreateArgs} args - Arguments to create a TenantProfile.
     * @example
     * // Create one TenantProfile
     * const TenantProfile = await prisma.tenantProfile.create({
     *   data: {
     *     // ... data to create a TenantProfile
     *   }
     * })
     * 
     */
    create<T extends TenantProfileCreateArgs>(args: SelectSubset<T, TenantProfileCreateArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TenantProfiles.
     * @param {TenantProfileCreateManyArgs} args - Arguments to create many TenantProfiles.
     * @example
     * // Create many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantProfileCreateManyArgs>(args?: SelectSubset<T, TenantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantProfiles and returns the data saved in the database.
     * @param {TenantProfileCreateManyAndReturnArgs} args - Arguments to create many TenantProfiles.
     * @example
     * // Create many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantProfiles and only return the `id`
     * const tenantProfileWithIdOnly = await prisma.tenantProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TenantProfile.
     * @param {TenantProfileDeleteArgs} args - Arguments to delete one TenantProfile.
     * @example
     * // Delete one TenantProfile
     * const TenantProfile = await prisma.tenantProfile.delete({
     *   where: {
     *     // ... filter to delete one TenantProfile
     *   }
     * })
     * 
     */
    delete<T extends TenantProfileDeleteArgs>(args: SelectSubset<T, TenantProfileDeleteArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TenantProfile.
     * @param {TenantProfileUpdateArgs} args - Arguments to update one TenantProfile.
     * @example
     * // Update one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantProfileUpdateArgs>(args: SelectSubset<T, TenantProfileUpdateArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TenantProfiles.
     * @param {TenantProfileDeleteManyArgs} args - Arguments to filter TenantProfiles to delete.
     * @example
     * // Delete a few TenantProfiles
     * const { count } = await prisma.tenantProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantProfileDeleteManyArgs>(args?: SelectSubset<T, TenantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantProfileUpdateManyArgs>(args: SelectSubset<T, TenantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TenantProfile.
     * @param {TenantProfileUpsertArgs} args - Arguments to update or create a TenantProfile.
     * @example
     * // Update or create a TenantProfile
     * const tenantProfile = await prisma.tenantProfile.upsert({
     *   create: {
     *     // ... data to create a TenantProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantProfile we want to update
     *   }
     * })
     */
    upsert<T extends TenantProfileUpsertArgs>(args: SelectSubset<T, TenantProfileUpsertArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TenantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileCountArgs} args - Arguments to filter TenantProfiles to count.
     * @example
     * // Count the number of TenantProfiles
     * const count = await prisma.tenantProfile.count({
     *   where: {
     *     // ... the filter for the TenantProfiles we want to count
     *   }
     * })
    **/
    count<T extends TenantProfileCountArgs>(
      args?: Subset<T, TenantProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantProfileAggregateArgs>(args: Subset<T, TenantProfileAggregateArgs>): Prisma.PrismaPromise<GetTenantProfileAggregateType<T>>

    /**
     * Group by TenantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantProfileGroupByArgs['orderBy'] }
        : { orderBy?: TenantProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantProfile model
   */
  readonly fields: TenantProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TenantProfile model
   */ 
  interface TenantProfileFieldRefs {
    readonly id: FieldRef<"TenantProfile", 'Int'>
    readonly userId: FieldRef<"TenantProfile", 'Int'>
    readonly companyName: FieldRef<"TenantProfile", 'String'>
    readonly phone: FieldRef<"TenantProfile", 'String'>
    readonly address: FieldRef<"TenantProfile", 'String'>
    readonly createdAt: FieldRef<"TenantProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"TenantProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantProfile findUnique
   */
  export type TenantProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile findUniqueOrThrow
   */
  export type TenantProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile findFirst
   */
  export type TenantProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantProfiles.
     */
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile findFirstOrThrow
   */
  export type TenantProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantProfiles.
     */
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile findMany
   */
  export type TenantProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfiles to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile create
   */
  export type TenantProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantProfile.
     */
    data: XOR<TenantProfileCreateInput, TenantProfileUncheckedCreateInput>
  }

  /**
   * TenantProfile createMany
   */
  export type TenantProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantProfiles.
     */
    data: TenantProfileCreateManyInput | TenantProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantProfile createManyAndReturn
   */
  export type TenantProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TenantProfiles.
     */
    data: TenantProfileCreateManyInput | TenantProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantProfile update
   */
  export type TenantProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantProfile.
     */
    data: XOR<TenantProfileUpdateInput, TenantProfileUncheckedUpdateInput>
    /**
     * Choose, which TenantProfile to update.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile updateMany
   */
  export type TenantProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantProfiles.
     */
    data: XOR<TenantProfileUpdateManyMutationInput, TenantProfileUncheckedUpdateManyInput>
    /**
     * Filter which TenantProfiles to update
     */
    where?: TenantProfileWhereInput
  }

  /**
   * TenantProfile upsert
   */
  export type TenantProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantProfile to update in case it exists.
     */
    where: TenantProfileWhereUniqueInput
    /**
     * In case the TenantProfile found by the `where` argument doesn't exist, create a new TenantProfile with this data.
     */
    create: XOR<TenantProfileCreateInput, TenantProfileUncheckedCreateInput>
    /**
     * In case the TenantProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantProfileUpdateInput, TenantProfileUncheckedUpdateInput>
  }

  /**
   * TenantProfile delete
   */
  export type TenantProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter which TenantProfile to delete.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile deleteMany
   */
  export type TenantProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantProfiles to delete
     */
    where?: TenantProfileWhereInput
  }

  /**
   * TenantProfile without action
   */
  export type TenantProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
  }


  /**
   * Model SocialLogins
   */

  export type AggregateSocialLogins = {
    _count: SocialLoginsCountAggregateOutputType | null
    _avg: SocialLoginsAvgAggregateOutputType | null
    _sum: SocialLoginsSumAggregateOutputType | null
    _min: SocialLoginsMinAggregateOutputType | null
    _max: SocialLoginsMaxAggregateOutputType | null
  }

  export type SocialLoginsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SocialLoginsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SocialLoginsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: string | null
    providerId: string | null
    createdAt: Date | null
  }

  export type SocialLoginsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: string | null
    providerId: string | null
    createdAt: Date | null
  }

  export type SocialLoginsCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerId: number
    createdAt: number
    _all: number
  }


  export type SocialLoginsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SocialLoginsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SocialLoginsMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    createdAt?: true
  }

  export type SocialLoginsMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    createdAt?: true
  }

  export type SocialLoginsCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    createdAt?: true
    _all?: true
  }

  export type SocialLoginsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLogins to aggregate.
     */
    where?: SocialLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLogins
    **/
    _count?: true | SocialLoginsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialLoginsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialLoginsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLoginsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLoginsMaxAggregateInputType
  }

  export type GetSocialLoginsAggregateType<T extends SocialLoginsAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLogins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLogins[P]>
      : GetScalarType<T[P], AggregateSocialLogins[P]>
  }




  export type SocialLoginsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLoginsWhereInput
    orderBy?: SocialLoginsOrderByWithAggregationInput | SocialLoginsOrderByWithAggregationInput[]
    by: SocialLoginsScalarFieldEnum[] | SocialLoginsScalarFieldEnum
    having?: SocialLoginsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLoginsCountAggregateInputType | true
    _avg?: SocialLoginsAvgAggregateInputType
    _sum?: SocialLoginsSumAggregateInputType
    _min?: SocialLoginsMinAggregateInputType
    _max?: SocialLoginsMaxAggregateInputType
  }

  export type SocialLoginsGroupByOutputType = {
    id: number
    userId: number
    provider: string
    providerId: string
    createdAt: Date
    _count: SocialLoginsCountAggregateOutputType | null
    _avg: SocialLoginsAvgAggregateOutputType | null
    _sum: SocialLoginsSumAggregateOutputType | null
    _min: SocialLoginsMinAggregateOutputType | null
    _max: SocialLoginsMaxAggregateOutputType | null
  }

  type GetSocialLoginsGroupByPayload<T extends SocialLoginsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLoginsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLoginsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLoginsGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLoginsGroupByOutputType[P]>
        }
      >
    >


  export type SocialLoginsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLogins"]>

  export type SocialLoginsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLogins"]>

  export type SocialLoginsSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
  }

  export type SocialLoginsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SocialLoginsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $SocialLoginsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLogins"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      provider: string
      providerId: string
      createdAt: Date
    }, ExtArgs["result"]["socialLogins"]>
    composites: {}
  }

  type SocialLoginsGetPayload<S extends boolean | null | undefined | SocialLoginsDefaultArgs> = $Result.GetResult<Prisma.$SocialLoginsPayload, S>

  type SocialLoginsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialLoginsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialLoginsCountAggregateInputType | true
    }

  export interface SocialLoginsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLogins'], meta: { name: 'SocialLogins' } }
    /**
     * Find zero or one SocialLogins that matches the filter.
     * @param {SocialLoginsFindUniqueArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLoginsFindUniqueArgs>(args: SelectSubset<T, SocialLoginsFindUniqueArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SocialLogins that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocialLoginsFindUniqueOrThrowArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLoginsFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLoginsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SocialLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsFindFirstArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLoginsFindFirstArgs>(args?: SelectSubset<T, SocialLoginsFindFirstArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SocialLogins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsFindFirstOrThrowArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLoginsFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLoginsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SocialLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLogins
     * const socialLogins = await prisma.socialLogins.findMany()
     * 
     * // Get first 10 SocialLogins
     * const socialLogins = await prisma.socialLogins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLoginsWithIdOnly = await prisma.socialLogins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLoginsFindManyArgs>(args?: SelectSubset<T, SocialLoginsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SocialLogins.
     * @param {SocialLoginsCreateArgs} args - Arguments to create a SocialLogins.
     * @example
     * // Create one SocialLogins
     * const SocialLogins = await prisma.socialLogins.create({
     *   data: {
     *     // ... data to create a SocialLogins
     *   }
     * })
     * 
     */
    create<T extends SocialLoginsCreateArgs>(args: SelectSubset<T, SocialLoginsCreateArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SocialLogins.
     * @param {SocialLoginsCreateManyArgs} args - Arguments to create many SocialLogins.
     * @example
     * // Create many SocialLogins
     * const socialLogins = await prisma.socialLogins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLoginsCreateManyArgs>(args?: SelectSubset<T, SocialLoginsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLogins and returns the data saved in the database.
     * @param {SocialLoginsCreateManyAndReturnArgs} args - Arguments to create many SocialLogins.
     * @example
     * // Create many SocialLogins
     * const socialLogins = await prisma.socialLogins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLogins and only return the `id`
     * const socialLoginsWithIdOnly = await prisma.socialLogins.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLoginsCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLoginsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SocialLogins.
     * @param {SocialLoginsDeleteArgs} args - Arguments to delete one SocialLogins.
     * @example
     * // Delete one SocialLogins
     * const SocialLogins = await prisma.socialLogins.delete({
     *   where: {
     *     // ... filter to delete one SocialLogins
     *   }
     * })
     * 
     */
    delete<T extends SocialLoginsDeleteArgs>(args: SelectSubset<T, SocialLoginsDeleteArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SocialLogins.
     * @param {SocialLoginsUpdateArgs} args - Arguments to update one SocialLogins.
     * @example
     * // Update one SocialLogins
     * const socialLogins = await prisma.socialLogins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLoginsUpdateArgs>(args: SelectSubset<T, SocialLoginsUpdateArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SocialLogins.
     * @param {SocialLoginsDeleteManyArgs} args - Arguments to filter SocialLogins to delete.
     * @example
     * // Delete a few SocialLogins
     * const { count } = await prisma.socialLogins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLoginsDeleteManyArgs>(args?: SelectSubset<T, SocialLoginsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLogins
     * const socialLogins = await prisma.socialLogins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLoginsUpdateManyArgs>(args: SelectSubset<T, SocialLoginsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialLogins.
     * @param {SocialLoginsUpsertArgs} args - Arguments to update or create a SocialLogins.
     * @example
     * // Update or create a SocialLogins
     * const socialLogins = await prisma.socialLogins.upsert({
     *   create: {
     *     // ... data to create a SocialLogins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLogins we want to update
     *   }
     * })
     */
    upsert<T extends SocialLoginsUpsertArgs>(args: SelectSubset<T, SocialLoginsUpsertArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsCountArgs} args - Arguments to filter SocialLogins to count.
     * @example
     * // Count the number of SocialLogins
     * const count = await prisma.socialLogins.count({
     *   where: {
     *     // ... the filter for the SocialLogins we want to count
     *   }
     * })
    **/
    count<T extends SocialLoginsCountArgs>(
      args?: Subset<T, SocialLoginsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLoginsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialLoginsAggregateArgs>(args: Subset<T, SocialLoginsAggregateArgs>): Prisma.PrismaPromise<GetSocialLoginsAggregateType<T>>

    /**
     * Group by SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialLoginsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLoginsGroupByArgs['orderBy'] }
        : { orderBy?: SocialLoginsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialLoginsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLoginsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLogins model
   */
  readonly fields: SocialLoginsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLogins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLoginsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialLogins model
   */ 
  interface SocialLoginsFieldRefs {
    readonly id: FieldRef<"SocialLogins", 'Int'>
    readonly userId: FieldRef<"SocialLogins", 'Int'>
    readonly provider: FieldRef<"SocialLogins", 'String'>
    readonly providerId: FieldRef<"SocialLogins", 'String'>
    readonly createdAt: FieldRef<"SocialLogins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialLogins findUnique
   */
  export type SocialLoginsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins findUniqueOrThrow
   */
  export type SocialLoginsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins findFirst
   */
  export type SocialLoginsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where?: SocialLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLogins.
     */
    cursor?: SocialLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLogins.
     */
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[]
  }

  /**
   * SocialLogins findFirstOrThrow
   */
  export type SocialLoginsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where?: SocialLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLogins.
     */
    cursor?: SocialLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLogins.
     */
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[]
  }

  /**
   * SocialLogins findMany
   */
  export type SocialLoginsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where?: SocialLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLogins.
     */
    cursor?: SocialLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[]
  }

  /**
   * SocialLogins create
   */
  export type SocialLoginsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLogins.
     */
    data: XOR<SocialLoginsCreateInput, SocialLoginsUncheckedCreateInput>
  }

  /**
   * SocialLogins createMany
   */
  export type SocialLoginsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLogins.
     */
    data: SocialLoginsCreateManyInput | SocialLoginsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLogins createManyAndReturn
   */
  export type SocialLoginsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SocialLogins.
     */
    data: SocialLoginsCreateManyInput | SocialLoginsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLogins update
   */
  export type SocialLoginsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLogins.
     */
    data: XOR<SocialLoginsUpdateInput, SocialLoginsUncheckedUpdateInput>
    /**
     * Choose, which SocialLogins to update.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins updateMany
   */
  export type SocialLoginsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLogins.
     */
    data: XOR<SocialLoginsUpdateManyMutationInput, SocialLoginsUncheckedUpdateManyInput>
    /**
     * Filter which SocialLogins to update
     */
    where?: SocialLoginsWhereInput
  }

  /**
   * SocialLogins upsert
   */
  export type SocialLoginsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLogins to update in case it exists.
     */
    where: SocialLoginsWhereUniqueInput
    /**
     * In case the SocialLogins found by the `where` argument doesn't exist, create a new SocialLogins with this data.
     */
    create: XOR<SocialLoginsCreateInput, SocialLoginsUncheckedCreateInput>
    /**
     * In case the SocialLogins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLoginsUpdateInput, SocialLoginsUncheckedUpdateInput>
  }

  /**
   * SocialLogins delete
   */
  export type SocialLoginsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter which SocialLogins to delete.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins deleteMany
   */
  export type SocialLoginsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLogins to delete
     */
    where?: SocialLoginsWhereInput
  }

  /**
   * SocialLogins without action
   */
  export type SocialLoginsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerifications
   */

  export type AggregateEmailVerifications = {
    _count: EmailVerificationsCountAggregateOutputType | null
    _avg: EmailVerificationsAvgAggregateOutputType | null
    _sum: EmailVerificationsSumAggregateOutputType | null
    _min: EmailVerificationsMinAggregateOutputType | null
    _max: EmailVerificationsMaxAggregateOutputType | null
  }

  export type EmailVerificationsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type EmailVerificationsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type EmailVerificationsCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    used: number
    _all: number
  }


  export type EmailVerificationsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationsMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type EmailVerificationsMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type EmailVerificationsCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
    _all?: true
  }

  export type EmailVerificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerifications to aggregate.
     */
    where?: EmailVerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationsOrderByWithRelationInput | EmailVerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerifications
    **/
    _count?: true | EmailVerificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailVerificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailVerificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationsMaxAggregateInputType
  }

  export type GetEmailVerificationsAggregateType<T extends EmailVerificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerifications[P]>
      : GetScalarType<T[P], AggregateEmailVerifications[P]>
  }




  export type EmailVerificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationsWhereInput
    orderBy?: EmailVerificationsOrderByWithAggregationInput | EmailVerificationsOrderByWithAggregationInput[]
    by: EmailVerificationsScalarFieldEnum[] | EmailVerificationsScalarFieldEnum
    having?: EmailVerificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationsCountAggregateInputType | true
    _avg?: EmailVerificationsAvgAggregateInputType
    _sum?: EmailVerificationsSumAggregateInputType
    _min?: EmailVerificationsMinAggregateInputType
    _max?: EmailVerificationsMaxAggregateInputType
  }

  export type EmailVerificationsGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date
    used: boolean
    _count: EmailVerificationsCountAggregateOutputType | null
    _avg: EmailVerificationsAvgAggregateOutputType | null
    _sum: EmailVerificationsSumAggregateOutputType | null
    _min: EmailVerificationsMinAggregateOutputType | null
    _max: EmailVerificationsMaxAggregateOutputType | null
  }

  type GetEmailVerificationsGroupByPayload<T extends EmailVerificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationsGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationsGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerifications"]>

  export type EmailVerificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerifications"]>

  export type EmailVerificationsSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
  }

  export type EmailVerificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type EmailVerificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerifications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date
      used: boolean
    }, ExtArgs["result"]["emailVerifications"]>
    composites: {}
  }

  type EmailVerificationsGetPayload<S extends boolean | null | undefined | EmailVerificationsDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationsPayload, S>

  type EmailVerificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmailVerificationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmailVerificationsCountAggregateInputType | true
    }

  export interface EmailVerificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerifications'], meta: { name: 'EmailVerifications' } }
    /**
     * Find zero or one EmailVerifications that matches the filter.
     * @param {EmailVerificationsFindUniqueArgs} args - Arguments to find a EmailVerifications
     * @example
     * // Get one EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationsFindUniqueArgs>(args: SelectSubset<T, EmailVerificationsFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmailVerifications that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmailVerificationsFindUniqueOrThrowArgs} args - Arguments to find a EmailVerifications
     * @example
     * // Get one EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmailVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationsFindFirstArgs} args - Arguments to find a EmailVerifications
     * @example
     * // Get one EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationsFindFirstArgs>(args?: SelectSubset<T, EmailVerificationsFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmailVerifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationsFindFirstOrThrowArgs} args - Arguments to find a EmailVerifications
     * @example
     * // Get one EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmailVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.findMany()
     * 
     * // Get first 10 EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationsWithIdOnly = await prisma.emailVerifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationsFindManyArgs>(args?: SelectSubset<T, EmailVerificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmailVerifications.
     * @param {EmailVerificationsCreateArgs} args - Arguments to create a EmailVerifications.
     * @example
     * // Create one EmailVerifications
     * const EmailVerifications = await prisma.emailVerifications.create({
     *   data: {
     *     // ... data to create a EmailVerifications
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationsCreateArgs>(args: SelectSubset<T, EmailVerificationsCreateArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmailVerifications.
     * @param {EmailVerificationsCreateManyArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationsCreateManyArgs>(args?: SelectSubset<T, EmailVerificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerifications and returns the data saved in the database.
     * @param {EmailVerificationsCreateManyAndReturnArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerifications and only return the `id`
     * const emailVerificationsWithIdOnly = await prisma.emailVerifications.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmailVerifications.
     * @param {EmailVerificationsDeleteArgs} args - Arguments to delete one EmailVerifications.
     * @example
     * // Delete one EmailVerifications
     * const EmailVerifications = await prisma.emailVerifications.delete({
     *   where: {
     *     // ... filter to delete one EmailVerifications
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationsDeleteArgs>(args: SelectSubset<T, EmailVerificationsDeleteArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmailVerifications.
     * @param {EmailVerificationsUpdateArgs} args - Arguments to update one EmailVerifications.
     * @example
     * // Update one EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationsUpdateArgs>(args: SelectSubset<T, EmailVerificationsUpdateArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmailVerifications.
     * @param {EmailVerificationsDeleteManyArgs} args - Arguments to filter EmailVerifications to delete.
     * @example
     * // Delete a few EmailVerifications
     * const { count } = await prisma.emailVerifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationsDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationsUpdateManyArgs>(args: SelectSubset<T, EmailVerificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmailVerifications.
     * @param {EmailVerificationsUpsertArgs} args - Arguments to update or create a EmailVerifications.
     * @example
     * // Update or create a EmailVerifications
     * const emailVerifications = await prisma.emailVerifications.upsert({
     *   create: {
     *     // ... data to create a EmailVerifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerifications we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationsUpsertArgs>(args: SelectSubset<T, EmailVerificationsUpsertArgs<ExtArgs>>): Prisma__EmailVerificationsClient<$Result.GetResult<Prisma.$EmailVerificationsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationsCountArgs} args - Arguments to filter EmailVerifications to count.
     * @example
     * // Count the number of EmailVerifications
     * const count = await prisma.emailVerifications.count({
     *   where: {
     *     // ... the filter for the EmailVerifications we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationsCountArgs>(
      args?: Subset<T, EmailVerificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationsAggregateArgs>(args: Subset<T, EmailVerificationsAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationsAggregateType<T>>

    /**
     * Group by EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationsGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerifications model
   */
  readonly fields: EmailVerificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerifications model
   */ 
  interface EmailVerificationsFieldRefs {
    readonly id: FieldRef<"EmailVerifications", 'Int'>
    readonly userId: FieldRef<"EmailVerifications", 'Int'>
    readonly token: FieldRef<"EmailVerifications", 'String'>
    readonly expiresAt: FieldRef<"EmailVerifications", 'DateTime'>
    readonly used: FieldRef<"EmailVerifications", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerifications findUnique
   */
  export type EmailVerificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where: EmailVerificationsWhereUniqueInput
  }

  /**
   * EmailVerifications findUniqueOrThrow
   */
  export type EmailVerificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where: EmailVerificationsWhereUniqueInput
  }

  /**
   * EmailVerifications findFirst
   */
  export type EmailVerificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationsOrderByWithRelationInput | EmailVerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationsScalarFieldEnum | EmailVerificationsScalarFieldEnum[]
  }

  /**
   * EmailVerifications findFirstOrThrow
   */
  export type EmailVerificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationsOrderByWithRelationInput | EmailVerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationsScalarFieldEnum | EmailVerificationsScalarFieldEnum[]
  }

  /**
   * EmailVerifications findMany
   */
  export type EmailVerificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationsOrderByWithRelationInput | EmailVerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerifications.
     */
    cursor?: EmailVerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    distinct?: EmailVerificationsScalarFieldEnum | EmailVerificationsScalarFieldEnum[]
  }

  /**
   * EmailVerifications create
   */
  export type EmailVerificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerifications.
     */
    data: XOR<EmailVerificationsCreateInput, EmailVerificationsUncheckedCreateInput>
  }

  /**
   * EmailVerifications createMany
   */
  export type EmailVerificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationsCreateManyInput | EmailVerificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerifications createManyAndReturn
   */
  export type EmailVerificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationsCreateManyInput | EmailVerificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerifications update
   */
  export type EmailVerificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerifications.
     */
    data: XOR<EmailVerificationsUpdateInput, EmailVerificationsUncheckedUpdateInput>
    /**
     * Choose, which EmailVerifications to update.
     */
    where: EmailVerificationsWhereUniqueInput
  }

  /**
   * EmailVerifications updateMany
   */
  export type EmailVerificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationsUpdateManyMutationInput, EmailVerificationsUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationsWhereInput
  }

  /**
   * EmailVerifications upsert
   */
  export type EmailVerificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerifications to update in case it exists.
     */
    where: EmailVerificationsWhereUniqueInput
    /**
     * In case the EmailVerifications found by the `where` argument doesn't exist, create a new EmailVerifications with this data.
     */
    create: XOR<EmailVerificationsCreateInput, EmailVerificationsUncheckedCreateInput>
    /**
     * In case the EmailVerifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationsUpdateInput, EmailVerificationsUncheckedUpdateInput>
  }

  /**
   * EmailVerifications delete
   */
  export type EmailVerificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
    /**
     * Filter which EmailVerifications to delete.
     */
    where: EmailVerificationsWhereUniqueInput
  }

  /**
   * EmailVerifications deleteMany
   */
  export type EmailVerificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerifications to delete
     */
    where?: EmailVerificationsWhereInput
  }

  /**
   * EmailVerifications without action
   */
  export type EmailVerificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerifications
     */
    select?: EmailVerificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationsInclude<ExtArgs> | null
  }


  /**
   * Model ResetPasswords
   */

  export type AggregateResetPasswords = {
    _count: ResetPasswordsCountAggregateOutputType | null
    _avg: ResetPasswordsAvgAggregateOutputType | null
    _sum: ResetPasswordsSumAggregateOutputType | null
    _min: ResetPasswordsMinAggregateOutputType | null
    _max: ResetPasswordsMaxAggregateOutputType | null
  }

  export type ResetPasswordsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ResetPasswordsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ResetPasswordsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type ResetPasswordsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type ResetPasswordsCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    used: number
    _all: number
  }


  export type ResetPasswordsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ResetPasswordsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ResetPasswordsMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type ResetPasswordsMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type ResetPasswordsCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
    _all?: true
  }

  export type ResetPasswordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetPasswords to aggregate.
     */
    where?: ResetPasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswords to fetch.
     */
    orderBy?: ResetPasswordsOrderByWithRelationInput | ResetPasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResetPasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResetPasswords
    **/
    _count?: true | ResetPasswordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResetPasswordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResetPasswordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResetPasswordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResetPasswordsMaxAggregateInputType
  }

  export type GetResetPasswordsAggregateType<T extends ResetPasswordsAggregateArgs> = {
        [P in keyof T & keyof AggregateResetPasswords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetPasswords[P]>
      : GetScalarType<T[P], AggregateResetPasswords[P]>
  }




  export type ResetPasswordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetPasswordsWhereInput
    orderBy?: ResetPasswordsOrderByWithAggregationInput | ResetPasswordsOrderByWithAggregationInput[]
    by: ResetPasswordsScalarFieldEnum[] | ResetPasswordsScalarFieldEnum
    having?: ResetPasswordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResetPasswordsCountAggregateInputType | true
    _avg?: ResetPasswordsAvgAggregateInputType
    _sum?: ResetPasswordsSumAggregateInputType
    _min?: ResetPasswordsMinAggregateInputType
    _max?: ResetPasswordsMaxAggregateInputType
  }

  export type ResetPasswordsGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date
    used: boolean
    _count: ResetPasswordsCountAggregateOutputType | null
    _avg: ResetPasswordsAvgAggregateOutputType | null
    _sum: ResetPasswordsSumAggregateOutputType | null
    _min: ResetPasswordsMinAggregateOutputType | null
    _max: ResetPasswordsMaxAggregateOutputType | null
  }

  type GetResetPasswordsGroupByPayload<T extends ResetPasswordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResetPasswordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResetPasswordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResetPasswordsGroupByOutputType[P]>
            : GetScalarType<T[P], ResetPasswordsGroupByOutputType[P]>
        }
      >
    >


  export type ResetPasswordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswords"]>

  export type ResetPasswordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswords"]>

  export type ResetPasswordsSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
  }

  export type ResetPasswordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ResetPasswordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ResetPasswordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResetPasswords"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date
      used: boolean
    }, ExtArgs["result"]["resetPasswords"]>
    composites: {}
  }

  type ResetPasswordsGetPayload<S extends boolean | null | undefined | ResetPasswordsDefaultArgs> = $Result.GetResult<Prisma.$ResetPasswordsPayload, S>

  type ResetPasswordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResetPasswordsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResetPasswordsCountAggregateInputType | true
    }

  export interface ResetPasswordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResetPasswords'], meta: { name: 'ResetPasswords' } }
    /**
     * Find zero or one ResetPasswords that matches the filter.
     * @param {ResetPasswordsFindUniqueArgs} args - Arguments to find a ResetPasswords
     * @example
     * // Get one ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResetPasswordsFindUniqueArgs>(args: SelectSubset<T, ResetPasswordsFindUniqueArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResetPasswords that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResetPasswordsFindUniqueOrThrowArgs} args - Arguments to find a ResetPasswords
     * @example
     * // Get one ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResetPasswordsFindUniqueOrThrowArgs>(args: SelectSubset<T, ResetPasswordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResetPasswords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordsFindFirstArgs} args - Arguments to find a ResetPasswords
     * @example
     * // Get one ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResetPasswordsFindFirstArgs>(args?: SelectSubset<T, ResetPasswordsFindFirstArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResetPasswords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordsFindFirstOrThrowArgs} args - Arguments to find a ResetPasswords
     * @example
     * // Get one ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResetPasswordsFindFirstOrThrowArgs>(args?: SelectSubset<T, ResetPasswordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResetPasswords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.findMany()
     * 
     * // Get first 10 ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resetPasswordsWithIdOnly = await prisma.resetPasswords.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResetPasswordsFindManyArgs>(args?: SelectSubset<T, ResetPasswordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResetPasswords.
     * @param {ResetPasswordsCreateArgs} args - Arguments to create a ResetPasswords.
     * @example
     * // Create one ResetPasswords
     * const ResetPasswords = await prisma.resetPasswords.create({
     *   data: {
     *     // ... data to create a ResetPasswords
     *   }
     * })
     * 
     */
    create<T extends ResetPasswordsCreateArgs>(args: SelectSubset<T, ResetPasswordsCreateArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResetPasswords.
     * @param {ResetPasswordsCreateManyArgs} args - Arguments to create many ResetPasswords.
     * @example
     * // Create many ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResetPasswordsCreateManyArgs>(args?: SelectSubset<T, ResetPasswordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResetPasswords and returns the data saved in the database.
     * @param {ResetPasswordsCreateManyAndReturnArgs} args - Arguments to create many ResetPasswords.
     * @example
     * // Create many ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResetPasswords and only return the `id`
     * const resetPasswordsWithIdOnly = await prisma.resetPasswords.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResetPasswordsCreateManyAndReturnArgs>(args?: SelectSubset<T, ResetPasswordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResetPasswords.
     * @param {ResetPasswordsDeleteArgs} args - Arguments to delete one ResetPasswords.
     * @example
     * // Delete one ResetPasswords
     * const ResetPasswords = await prisma.resetPasswords.delete({
     *   where: {
     *     // ... filter to delete one ResetPasswords
     *   }
     * })
     * 
     */
    delete<T extends ResetPasswordsDeleteArgs>(args: SelectSubset<T, ResetPasswordsDeleteArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResetPasswords.
     * @param {ResetPasswordsUpdateArgs} args - Arguments to update one ResetPasswords.
     * @example
     * // Update one ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResetPasswordsUpdateArgs>(args: SelectSubset<T, ResetPasswordsUpdateArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResetPasswords.
     * @param {ResetPasswordsDeleteManyArgs} args - Arguments to filter ResetPasswords to delete.
     * @example
     * // Delete a few ResetPasswords
     * const { count } = await prisma.resetPasswords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResetPasswordsDeleteManyArgs>(args?: SelectSubset<T, ResetPasswordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetPasswords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResetPasswordsUpdateManyArgs>(args: SelectSubset<T, ResetPasswordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResetPasswords.
     * @param {ResetPasswordsUpsertArgs} args - Arguments to update or create a ResetPasswords.
     * @example
     * // Update or create a ResetPasswords
     * const resetPasswords = await prisma.resetPasswords.upsert({
     *   create: {
     *     // ... data to create a ResetPasswords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetPasswords we want to update
     *   }
     * })
     */
    upsert<T extends ResetPasswordsUpsertArgs>(args: SelectSubset<T, ResetPasswordsUpsertArgs<ExtArgs>>): Prisma__ResetPasswordsClient<$Result.GetResult<Prisma.$ResetPasswordsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResetPasswords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordsCountArgs} args - Arguments to filter ResetPasswords to count.
     * @example
     * // Count the number of ResetPasswords
     * const count = await prisma.resetPasswords.count({
     *   where: {
     *     // ... the filter for the ResetPasswords we want to count
     *   }
     * })
    **/
    count<T extends ResetPasswordsCountArgs>(
      args?: Subset<T, ResetPasswordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResetPasswordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResetPasswords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResetPasswordsAggregateArgs>(args: Subset<T, ResetPasswordsAggregateArgs>): Prisma.PrismaPromise<GetResetPasswordsAggregateType<T>>

    /**
     * Group by ResetPasswords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResetPasswordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetPasswordsGroupByArgs['orderBy'] }
        : { orderBy?: ResetPasswordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResetPasswordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResetPasswordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResetPasswords model
   */
  readonly fields: ResetPasswordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetPasswords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResetPasswordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResetPasswords model
   */ 
  interface ResetPasswordsFieldRefs {
    readonly id: FieldRef<"ResetPasswords", 'Int'>
    readonly userId: FieldRef<"ResetPasswords", 'Int'>
    readonly token: FieldRef<"ResetPasswords", 'String'>
    readonly expiresAt: FieldRef<"ResetPasswords", 'DateTime'>
    readonly used: FieldRef<"ResetPasswords", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ResetPasswords findUnique
   */
  export type ResetPasswordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswords to fetch.
     */
    where: ResetPasswordsWhereUniqueInput
  }

  /**
   * ResetPasswords findUniqueOrThrow
   */
  export type ResetPasswordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswords to fetch.
     */
    where: ResetPasswordsWhereUniqueInput
  }

  /**
   * ResetPasswords findFirst
   */
  export type ResetPasswordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswords to fetch.
     */
    where?: ResetPasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswords to fetch.
     */
    orderBy?: ResetPasswordsOrderByWithRelationInput | ResetPasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetPasswords.
     */
    cursor?: ResetPasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetPasswords.
     */
    distinct?: ResetPasswordsScalarFieldEnum | ResetPasswordsScalarFieldEnum[]
  }

  /**
   * ResetPasswords findFirstOrThrow
   */
  export type ResetPasswordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswords to fetch.
     */
    where?: ResetPasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswords to fetch.
     */
    orderBy?: ResetPasswordsOrderByWithRelationInput | ResetPasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetPasswords.
     */
    cursor?: ResetPasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetPasswords.
     */
    distinct?: ResetPasswordsScalarFieldEnum | ResetPasswordsScalarFieldEnum[]
  }

  /**
   * ResetPasswords findMany
   */
  export type ResetPasswordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswords to fetch.
     */
    where?: ResetPasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswords to fetch.
     */
    orderBy?: ResetPasswordsOrderByWithRelationInput | ResetPasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResetPasswords.
     */
    cursor?: ResetPasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswords.
     */
    skip?: number
    distinct?: ResetPasswordsScalarFieldEnum | ResetPasswordsScalarFieldEnum[]
  }

  /**
   * ResetPasswords create
   */
  export type ResetPasswordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * The data needed to create a ResetPasswords.
     */
    data: XOR<ResetPasswordsCreateInput, ResetPasswordsUncheckedCreateInput>
  }

  /**
   * ResetPasswords createMany
   */
  export type ResetPasswordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResetPasswords.
     */
    data: ResetPasswordsCreateManyInput | ResetPasswordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResetPasswords createManyAndReturn
   */
  export type ResetPasswordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResetPasswords.
     */
    data: ResetPasswordsCreateManyInput | ResetPasswordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetPasswords update
   */
  export type ResetPasswordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * The data needed to update a ResetPasswords.
     */
    data: XOR<ResetPasswordsUpdateInput, ResetPasswordsUncheckedUpdateInput>
    /**
     * Choose, which ResetPasswords to update.
     */
    where: ResetPasswordsWhereUniqueInput
  }

  /**
   * ResetPasswords updateMany
   */
  export type ResetPasswordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResetPasswords.
     */
    data: XOR<ResetPasswordsUpdateManyMutationInput, ResetPasswordsUncheckedUpdateManyInput>
    /**
     * Filter which ResetPasswords to update
     */
    where?: ResetPasswordsWhereInput
  }

  /**
   * ResetPasswords upsert
   */
  export type ResetPasswordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * The filter to search for the ResetPasswords to update in case it exists.
     */
    where: ResetPasswordsWhereUniqueInput
    /**
     * In case the ResetPasswords found by the `where` argument doesn't exist, create a new ResetPasswords with this data.
     */
    create: XOR<ResetPasswordsCreateInput, ResetPasswordsUncheckedCreateInput>
    /**
     * In case the ResetPasswords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResetPasswordsUpdateInput, ResetPasswordsUncheckedUpdateInput>
  }

  /**
   * ResetPasswords delete
   */
  export type ResetPasswordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
    /**
     * Filter which ResetPasswords to delete.
     */
    where: ResetPasswordsWhereUniqueInput
  }

  /**
   * ResetPasswords deleteMany
   */
  export type ResetPasswordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetPasswords to delete
     */
    where?: ResetPasswordsWhereInput
  }

  /**
   * ResetPasswords without action
   */
  export type ResetPasswordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswords
     */
    select?: ResetPasswordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordsInclude<ExtArgs> | null
  }


  /**
   * Model PropertyCategories
   */

  export type AggregatePropertyCategories = {
    _count: PropertyCategoriesCountAggregateOutputType | null
    _avg: PropertyCategoriesAvgAggregateOutputType | null
    _sum: PropertyCategoriesSumAggregateOutputType | null
    _min: PropertyCategoriesMinAggregateOutputType | null
    _max: PropertyCategoriesMaxAggregateOutputType | null
  }

  export type PropertyCategoriesAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type PropertyCategoriesSumAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type PropertyCategoriesMinAggregateOutputType = {
    id: number | null
    tenantId: number | null
    name: string | null
    description: string | null
  }

  export type PropertyCategoriesMaxAggregateOutputType = {
    id: number | null
    tenantId: number | null
    name: string | null
    description: string | null
  }

  export type PropertyCategoriesCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    description: number
    _all: number
  }


  export type PropertyCategoriesAvgAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type PropertyCategoriesSumAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type PropertyCategoriesMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
  }

  export type PropertyCategoriesMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
  }

  export type PropertyCategoriesCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    _all?: true
  }

  export type PropertyCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategories to aggregate.
     */
    where?: PropertyCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoriesOrderByWithRelationInput | PropertyCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyCategories
    **/
    _count?: true | PropertyCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyCategoriesMaxAggregateInputType
  }

  export type GetPropertyCategoriesAggregateType<T extends PropertyCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyCategories[P]>
      : GetScalarType<T[P], AggregatePropertyCategories[P]>
  }




  export type PropertyCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCategoriesWhereInput
    orderBy?: PropertyCategoriesOrderByWithAggregationInput | PropertyCategoriesOrderByWithAggregationInput[]
    by: PropertyCategoriesScalarFieldEnum[] | PropertyCategoriesScalarFieldEnum
    having?: PropertyCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCategoriesCountAggregateInputType | true
    _avg?: PropertyCategoriesAvgAggregateInputType
    _sum?: PropertyCategoriesSumAggregateInputType
    _min?: PropertyCategoriesMinAggregateInputType
    _max?: PropertyCategoriesMaxAggregateInputType
  }

  export type PropertyCategoriesGroupByOutputType = {
    id: number
    tenantId: number
    name: string
    description: string
    _count: PropertyCategoriesCountAggregateOutputType | null
    _avg: PropertyCategoriesAvgAggregateOutputType | null
    _sum: PropertyCategoriesSumAggregateOutputType | null
    _min: PropertyCategoriesMinAggregateOutputType | null
    _max: PropertyCategoriesMaxAggregateOutputType | null
  }

  type GetPropertyCategoriesGroupByPayload<T extends PropertyCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type PropertyCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
    properties?: boolean | PropertyCategories$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyCategories"]>

  export type PropertyCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyCategories"]>

  export type PropertyCategoriesSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
  }

  export type PropertyCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
    properties?: boolean | PropertyCategories$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PropertyCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyCategories"
    objects: {
      tenant: Prisma.$UsersPayload<ExtArgs>
      properties: Prisma.$PropertiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenantId: number
      name: string
      description: string
    }, ExtArgs["result"]["propertyCategories"]>
    composites: {}
  }

  type PropertyCategoriesGetPayload<S extends boolean | null | undefined | PropertyCategoriesDefaultArgs> = $Result.GetResult<Prisma.$PropertyCategoriesPayload, S>

  type PropertyCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyCategoriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCategoriesCountAggregateInputType | true
    }

  export interface PropertyCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyCategories'], meta: { name: 'PropertyCategories' } }
    /**
     * Find zero or one PropertyCategories that matches the filter.
     * @param {PropertyCategoriesFindUniqueArgs} args - Arguments to find a PropertyCategories
     * @example
     * // Get one PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyCategoriesFindUniqueArgs>(args: SelectSubset<T, PropertyCategoriesFindUniqueArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyCategories that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyCategoriesFindUniqueOrThrowArgs} args - Arguments to find a PropertyCategories
     * @example
     * // Get one PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoriesFindFirstArgs} args - Arguments to find a PropertyCategories
     * @example
     * // Get one PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyCategoriesFindFirstArgs>(args?: SelectSubset<T, PropertyCategoriesFindFirstArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoriesFindFirstOrThrowArgs} args - Arguments to find a PropertyCategories
     * @example
     * // Get one PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.findMany()
     * 
     * // Get first 10 PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyCategoriesWithIdOnly = await prisma.propertyCategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyCategoriesFindManyArgs>(args?: SelectSubset<T, PropertyCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyCategories.
     * @param {PropertyCategoriesCreateArgs} args - Arguments to create a PropertyCategories.
     * @example
     * // Create one PropertyCategories
     * const PropertyCategories = await prisma.propertyCategories.create({
     *   data: {
     *     // ... data to create a PropertyCategories
     *   }
     * })
     * 
     */
    create<T extends PropertyCategoriesCreateArgs>(args: SelectSubset<T, PropertyCategoriesCreateArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyCategories.
     * @param {PropertyCategoriesCreateManyArgs} args - Arguments to create many PropertyCategories.
     * @example
     * // Create many PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCategoriesCreateManyArgs>(args?: SelectSubset<T, PropertyCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyCategories and returns the data saved in the database.
     * @param {PropertyCategoriesCreateManyAndReturnArgs} args - Arguments to create many PropertyCategories.
     * @example
     * // Create many PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyCategories and only return the `id`
     * const propertyCategoriesWithIdOnly = await prisma.propertyCategories.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyCategories.
     * @param {PropertyCategoriesDeleteArgs} args - Arguments to delete one PropertyCategories.
     * @example
     * // Delete one PropertyCategories
     * const PropertyCategories = await prisma.propertyCategories.delete({
     *   where: {
     *     // ... filter to delete one PropertyCategories
     *   }
     * })
     * 
     */
    delete<T extends PropertyCategoriesDeleteArgs>(args: SelectSubset<T, PropertyCategoriesDeleteArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyCategories.
     * @param {PropertyCategoriesUpdateArgs} args - Arguments to update one PropertyCategories.
     * @example
     * // Update one PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyCategoriesUpdateArgs>(args: SelectSubset<T, PropertyCategoriesUpdateArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyCategories.
     * @param {PropertyCategoriesDeleteManyArgs} args - Arguments to filter PropertyCategories to delete.
     * @example
     * // Delete a few PropertyCategories
     * const { count } = await prisma.propertyCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyCategoriesDeleteManyArgs>(args?: SelectSubset<T, PropertyCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyCategoriesUpdateManyArgs>(args: SelectSubset<T, PropertyCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyCategories.
     * @param {PropertyCategoriesUpsertArgs} args - Arguments to update or create a PropertyCategories.
     * @example
     * // Update or create a PropertyCategories
     * const propertyCategories = await prisma.propertyCategories.upsert({
     *   create: {
     *     // ... data to create a PropertyCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyCategories we want to update
     *   }
     * })
     */
    upsert<T extends PropertyCategoriesUpsertArgs>(args: SelectSubset<T, PropertyCategoriesUpsertArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoriesCountArgs} args - Arguments to filter PropertyCategories to count.
     * @example
     * // Count the number of PropertyCategories
     * const count = await prisma.propertyCategories.count({
     *   where: {
     *     // ... the filter for the PropertyCategories we want to count
     *   }
     * })
    **/
    count<T extends PropertyCategoriesCountArgs>(
      args?: Subset<T, PropertyCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyCategoriesAggregateArgs>(args: Subset<T, PropertyCategoriesAggregateArgs>): Prisma.PrismaPromise<GetPropertyCategoriesAggregateType<T>>

    /**
     * Group by PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: PropertyCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyCategories model
   */
  readonly fields: PropertyCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    properties<T extends PropertyCategories$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategories$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyCategories model
   */ 
  interface PropertyCategoriesFieldRefs {
    readonly id: FieldRef<"PropertyCategories", 'Int'>
    readonly tenantId: FieldRef<"PropertyCategories", 'Int'>
    readonly name: FieldRef<"PropertyCategories", 'String'>
    readonly description: FieldRef<"PropertyCategories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertyCategories findUnique
   */
  export type PropertyCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where: PropertyCategoriesWhereUniqueInput
  }

  /**
   * PropertyCategories findUniqueOrThrow
   */
  export type PropertyCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where: PropertyCategoriesWhereUniqueInput
  }

  /**
   * PropertyCategories findFirst
   */
  export type PropertyCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where?: PropertyCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoriesOrderByWithRelationInput | PropertyCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoriesScalarFieldEnum | PropertyCategoriesScalarFieldEnum[]
  }

  /**
   * PropertyCategories findFirstOrThrow
   */
  export type PropertyCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where?: PropertyCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoriesOrderByWithRelationInput | PropertyCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoriesScalarFieldEnum | PropertyCategoriesScalarFieldEnum[]
  }

  /**
   * PropertyCategories findMany
   */
  export type PropertyCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where?: PropertyCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoriesOrderByWithRelationInput | PropertyCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyCategories.
     */
    cursor?: PropertyCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    distinct?: PropertyCategoriesScalarFieldEnum | PropertyCategoriesScalarFieldEnum[]
  }

  /**
   * PropertyCategories create
   */
  export type PropertyCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyCategories.
     */
    data: XOR<PropertyCategoriesCreateInput, PropertyCategoriesUncheckedCreateInput>
  }

  /**
   * PropertyCategories createMany
   */
  export type PropertyCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyCategories.
     */
    data: PropertyCategoriesCreateManyInput | PropertyCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyCategories createManyAndReturn
   */
  export type PropertyCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyCategories.
     */
    data: PropertyCategoriesCreateManyInput | PropertyCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyCategories update
   */
  export type PropertyCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyCategories.
     */
    data: XOR<PropertyCategoriesUpdateInput, PropertyCategoriesUncheckedUpdateInput>
    /**
     * Choose, which PropertyCategories to update.
     */
    where: PropertyCategoriesWhereUniqueInput
  }

  /**
   * PropertyCategories updateMany
   */
  export type PropertyCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyCategories.
     */
    data: XOR<PropertyCategoriesUpdateManyMutationInput, PropertyCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyCategories to update
     */
    where?: PropertyCategoriesWhereInput
  }

  /**
   * PropertyCategories upsert
   */
  export type PropertyCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyCategories to update in case it exists.
     */
    where: PropertyCategoriesWhereUniqueInput
    /**
     * In case the PropertyCategories found by the `where` argument doesn't exist, create a new PropertyCategories with this data.
     */
    create: XOR<PropertyCategoriesCreateInput, PropertyCategoriesUncheckedCreateInput>
    /**
     * In case the PropertyCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyCategoriesUpdateInput, PropertyCategoriesUncheckedUpdateInput>
  }

  /**
   * PropertyCategories delete
   */
  export type PropertyCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
    /**
     * Filter which PropertyCategories to delete.
     */
    where: PropertyCategoriesWhereUniqueInput
  }

  /**
   * PropertyCategories deleteMany
   */
  export type PropertyCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategories to delete
     */
    where?: PropertyCategoriesWhereInput
  }

  /**
   * PropertyCategories.properties
   */
  export type PropertyCategories$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    where?: PropertiesWhereInput
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    cursor?: PropertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * PropertyCategories without action
   */
  export type PropertyCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategories
     */
    select?: PropertyCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Properties
   */

  export type AggregateProperties = {
    _count: PropertiesCountAggregateOutputType | null
    _avg: PropertiesAvgAggregateOutputType | null
    _sum: PropertiesSumAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  export type PropertiesAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type PropertiesSumAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type PropertiesMinAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    name: string | null
    description: string | null
    picture: string | null
    address: string | null
    city: string | null
    lat: Decimal | null
    lng: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertiesMaxAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    name: string | null
    description: string | null
    picture: string | null
    address: string | null
    city: string | null
    lat: Decimal | null
    lng: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertiesCountAggregateOutputType = {
    id: number
    tenantId: number
    categoryId: number
    name: number
    description: number
    picture: number
    address: number
    city: number
    lat: number
    lng: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertiesAvgAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    lat?: true
    lng?: true
  }

  export type PropertiesSumAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    lat?: true
    lng?: true
  }

  export type PropertiesMinAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    description?: true
    picture?: true
    address?: true
    city?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertiesMaxAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    description?: true
    picture?: true
    address?: true
    city?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertiesCountAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    description?: true
    picture?: true
    address?: true
    city?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to aggregate.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertiesMaxAggregateInputType
  }

  export type GetPropertiesAggregateType<T extends PropertiesAggregateArgs> = {
        [P in keyof T & keyof AggregateProperties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperties[P]>
      : GetScalarType<T[P], AggregateProperties[P]>
  }




  export type PropertiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertiesWhereInput
    orderBy?: PropertiesOrderByWithAggregationInput | PropertiesOrderByWithAggregationInput[]
    by: PropertiesScalarFieldEnum[] | PropertiesScalarFieldEnum
    having?: PropertiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertiesCountAggregateInputType | true
    _avg?: PropertiesAvgAggregateInputType
    _sum?: PropertiesSumAggregateInputType
    _min?: PropertiesMinAggregateInputType
    _max?: PropertiesMaxAggregateInputType
  }

  export type PropertiesGroupByOutputType = {
    id: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat: Decimal | null
    lng: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: PropertiesCountAggregateOutputType | null
    _avg: PropertiesAvgAggregateOutputType | null
    _sum: PropertiesSumAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  type GetPropertiesGroupByPayload<T extends PropertiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
        }
      >
    >


  export type PropertiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    picture?: boolean
    address?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
    category?: boolean | PropertyCategoriesDefaultArgs<ExtArgs>
    rooms?: boolean | Properties$roomsArgs<ExtArgs>
    reservations?: boolean | Properties$reservationsArgs<ExtArgs>
    reviews?: boolean | Properties$reviewsArgs<ExtArgs>
    peakSeasons?: boolean | Properties$peakSeasonsArgs<ExtArgs>
    _count?: boolean | PropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type PropertiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    picture?: boolean
    address?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
    category?: boolean | PropertyCategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type PropertiesSelectScalar = {
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    picture?: boolean
    address?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
    category?: boolean | PropertyCategoriesDefaultArgs<ExtArgs>
    rooms?: boolean | Properties$roomsArgs<ExtArgs>
    reservations?: boolean | Properties$reservationsArgs<ExtArgs>
    reviews?: boolean | Properties$reviewsArgs<ExtArgs>
    peakSeasons?: boolean | Properties$peakSeasonsArgs<ExtArgs>
    _count?: boolean | PropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | UsersDefaultArgs<ExtArgs>
    category?: boolean | PropertyCategoriesDefaultArgs<ExtArgs>
  }

  export type $PropertiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Properties"
    objects: {
      tenant: Prisma.$UsersPayload<ExtArgs>
      category: Prisma.$PropertyCategoriesPayload<ExtArgs>
      rooms: Prisma.$RoomsPayload<ExtArgs>[]
      reservations: Prisma.$ReservationsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      peakSeasons: Prisma.$PeakSeasonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenantId: number
      categoryId: number
      name: string
      description: string
      picture: string
      address: string
      city: string
      lat: Prisma.Decimal | null
      lng: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["properties"]>
    composites: {}
  }

  type PropertiesGetPayload<S extends boolean | null | undefined | PropertiesDefaultArgs> = $Result.GetResult<Prisma.$PropertiesPayload, S>

  type PropertiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertiesCountAggregateInputType | true
    }

  export interface PropertiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Properties'], meta: { name: 'Properties' } }
    /**
     * Find zero or one Properties that matches the filter.
     * @param {PropertiesFindUniqueArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertiesFindUniqueArgs>(args: SelectSubset<T, PropertiesFindUniqueArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Properties that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertiesFindUniqueOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertiesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesFindFirstArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertiesFindFirstArgs>(args?: SelectSubset<T, PropertiesFindFirstArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Properties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesFindFirstOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertiesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.properties.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.properties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertiesWithIdOnly = await prisma.properties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertiesFindManyArgs>(args?: SelectSubset<T, PropertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Properties.
     * @param {PropertiesCreateArgs} args - Arguments to create a Properties.
     * @example
     * // Create one Properties
     * const Properties = await prisma.properties.create({
     *   data: {
     *     // ... data to create a Properties
     *   }
     * })
     * 
     */
    create<T extends PropertiesCreateArgs>(args: SelectSubset<T, PropertiesCreateArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Properties.
     * @param {PropertiesCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertiesCreateManyArgs>(args?: SelectSubset<T, PropertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertiesCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertiesWithIdOnly = await prisma.properties.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertiesCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Properties.
     * @param {PropertiesDeleteArgs} args - Arguments to delete one Properties.
     * @example
     * // Delete one Properties
     * const Properties = await prisma.properties.delete({
     *   where: {
     *     // ... filter to delete one Properties
     *   }
     * })
     * 
     */
    delete<T extends PropertiesDeleteArgs>(args: SelectSubset<T, PropertiesDeleteArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Properties.
     * @param {PropertiesUpdateArgs} args - Arguments to update one Properties.
     * @example
     * // Update one Properties
     * const properties = await prisma.properties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertiesUpdateArgs>(args: SelectSubset<T, PropertiesUpdateArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertiesDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.properties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertiesDeleteManyArgs>(args?: SelectSubset<T, PropertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const properties = await prisma.properties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertiesUpdateManyArgs>(args: SelectSubset<T, PropertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Properties.
     * @param {PropertiesUpsertArgs} args - Arguments to update or create a Properties.
     * @example
     * // Update or create a Properties
     * const properties = await prisma.properties.upsert({
     *   create: {
     *     // ... data to create a Properties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Properties we want to update
     *   }
     * })
     */
    upsert<T extends PropertiesUpsertArgs>(args: SelectSubset<T, PropertiesUpsertArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.properties.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertiesCountArgs>(
      args?: Subset<T, PropertiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertiesAggregateArgs>(args: Subset<T, PropertiesAggregateArgs>): Prisma.PrismaPromise<GetPropertiesAggregateType<T>>

    /**
     * Group by Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertiesGroupByArgs['orderBy'] }
        : { orderBy?: PropertiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Properties model
   */
  readonly fields: PropertiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Properties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends PropertyCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategoriesDefaultArgs<ExtArgs>>): Prisma__PropertyCategoriesClient<$Result.GetResult<Prisma.$PropertyCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rooms<T extends Properties$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Properties$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findMany"> | Null>
    reservations<T extends Properties$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Properties$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Properties$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Properties$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany"> | Null>
    peakSeasons<T extends Properties$peakSeasonsArgs<ExtArgs> = {}>(args?: Subset<T, Properties$peakSeasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Properties model
   */ 
  interface PropertiesFieldRefs {
    readonly id: FieldRef<"Properties", 'Int'>
    readonly tenantId: FieldRef<"Properties", 'Int'>
    readonly categoryId: FieldRef<"Properties", 'Int'>
    readonly name: FieldRef<"Properties", 'String'>
    readonly description: FieldRef<"Properties", 'String'>
    readonly picture: FieldRef<"Properties", 'String'>
    readonly address: FieldRef<"Properties", 'String'>
    readonly city: FieldRef<"Properties", 'String'>
    readonly lat: FieldRef<"Properties", 'Decimal'>
    readonly lng: FieldRef<"Properties", 'Decimal'>
    readonly createdAt: FieldRef<"Properties", 'DateTime'>
    readonly updatedAt: FieldRef<"Properties", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Properties findUnique
   */
  export type PropertiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties findUniqueOrThrow
   */
  export type PropertiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties findFirst
   */
  export type PropertiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Properties findFirstOrThrow
   */
  export type PropertiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Properties findMany
   */
  export type PropertiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Properties create
   */
  export type PropertiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Properties.
     */
    data: XOR<PropertiesCreateInput, PropertiesUncheckedCreateInput>
  }

  /**
   * Properties createMany
   */
  export type PropertiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertiesCreateManyInput | PropertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Properties createManyAndReturn
   */
  export type PropertiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertiesCreateManyInput | PropertiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Properties update
   */
  export type PropertiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Properties.
     */
    data: XOR<PropertiesUpdateInput, PropertiesUncheckedUpdateInput>
    /**
     * Choose, which Properties to update.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties updateMany
   */
  export type PropertiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertiesUpdateManyMutationInput, PropertiesUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertiesWhereInput
  }

  /**
   * Properties upsert
   */
  export type PropertiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Properties to update in case it exists.
     */
    where: PropertiesWhereUniqueInput
    /**
     * In case the Properties found by the `where` argument doesn't exist, create a new Properties with this data.
     */
    create: XOR<PropertiesCreateInput, PropertiesUncheckedCreateInput>
    /**
     * In case the Properties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertiesUpdateInput, PropertiesUncheckedUpdateInput>
  }

  /**
   * Properties delete
   */
  export type PropertiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter which Properties to delete.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties deleteMany
   */
  export type PropertiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertiesWhereInput
  }

  /**
   * Properties.rooms
   */
  export type Properties$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    where?: RoomsWhereInput
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    cursor?: RoomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Properties.reservations
   */
  export type Properties$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Properties.reviews
   */
  export type Properties$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Properties.peakSeasons
   */
  export type Properties$peakSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    where?: PeakSeasonsWhereInput
    orderBy?: PeakSeasonsOrderByWithRelationInput | PeakSeasonsOrderByWithRelationInput[]
    cursor?: PeakSeasonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeakSeasonsScalarFieldEnum | PeakSeasonsScalarFieldEnum[]
  }

  /**
   * Properties without action
   */
  export type PropertiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
  }


  /**
   * Model Rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    basePrice: Decimal | null
    maxGuests: number | null
  }

  export type RoomsSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    basePrice: Decimal | null
    maxGuests: number | null
  }

  export type RoomsMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    description: string | null
    basePrice: Decimal | null
    maxGuests: number | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomsMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    description: string | null
    basePrice: Decimal | null
    maxGuests: number | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomsCountAggregateOutputType = {
    id: number
    propertyId: number
    name: number
    description: number
    basePrice: number
    maxGuests: number
    picture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    id?: true
    propertyId?: true
    basePrice?: true
    maxGuests?: true
  }

  export type RoomsSumAggregateInputType = {
    id?: true
    propertyId?: true
    basePrice?: true
    maxGuests?: true
  }

  export type RoomsMinAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    basePrice?: true
    maxGuests?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomsMaxAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    basePrice?: true
    maxGuests?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomsCountAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    basePrice?: true
    maxGuests?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to aggregate.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type RoomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomsWhereInput
    orderBy?: RoomsOrderByWithAggregationInput | RoomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: RoomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    id: number
    propertyId: number
    name: string
    description: string
    basePrice: Decimal
    maxGuests: number
    picture: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends RoomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type RoomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    basePrice?: boolean
    maxGuests?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    reservations?: boolean | Rooms$reservationsArgs<ExtArgs>
    roomAvailabilities?: boolean | Rooms$roomAvailabilitiesArgs<ExtArgs>
    peakSeasons?: boolean | Rooms$peakSeasonsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    basePrice?: boolean
    maxGuests?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectScalar = {
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    basePrice?: boolean
    maxGuests?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    reservations?: boolean | Rooms$reservationsArgs<ExtArgs>
    roomAvailabilities?: boolean | Rooms$roomAvailabilitiesArgs<ExtArgs>
    peakSeasons?: boolean | Rooms$peakSeasonsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
  }

  export type $RoomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rooms"
    objects: {
      property: Prisma.$PropertiesPayload<ExtArgs>
      reservations: Prisma.$ReservationsPayload<ExtArgs>[]
      roomAvailabilities: Prisma.$RoomAvailabilitiesPayload<ExtArgs>[]
      peakSeasons: Prisma.$PeakSeasonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      name: string
      description: string
      basePrice: Prisma.Decimal
      maxGuests: number
      picture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type RoomsGetPayload<S extends boolean | null | undefined | RoomsDefaultArgs> = $Result.GetResult<Prisma.$RoomsPayload, S>

  type RoomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface RoomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rooms'], meta: { name: 'Rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {RoomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomsFindUniqueArgs>(args: SelectSubset<T, RoomsFindUniqueArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomsFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomsFindFirstArgs>(args?: SelectSubset<T, RoomsFindFirstArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomsFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomsFindManyArgs>(args?: SelectSubset<T, RoomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rooms.
     * @param {RoomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends RoomsCreateArgs>(args: SelectSubset<T, RoomsCreateArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rooms.
     * @param {RoomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomsCreateManyArgs>(args?: SelectSubset<T, RoomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomsCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomsCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rooms.
     * @param {RoomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends RoomsDeleteArgs>(args: SelectSubset<T, RoomsDeleteArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rooms.
     * @param {RoomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomsUpdateArgs>(args: SelectSubset<T, RoomsUpdateArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomsDeleteManyArgs>(args?: SelectSubset<T, RoomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomsUpdateManyArgs>(args: SelectSubset<T, RoomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rooms.
     * @param {RoomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends RoomsUpsertArgs>(args: SelectSubset<T, RoomsUpsertArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomsCountArgs>(
      args?: Subset<T, RoomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomsGroupByArgs['orderBy'] }
        : { orderBy?: RoomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rooms model
   */
  readonly fields: RoomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertiesDefaultArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reservations<T extends Rooms$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany"> | Null>
    roomAvailabilities<T extends Rooms$roomAvailabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$roomAvailabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "findMany"> | Null>
    peakSeasons<T extends Rooms$peakSeasonsArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$peakSeasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rooms model
   */ 
  interface RoomsFieldRefs {
    readonly id: FieldRef<"Rooms", 'Int'>
    readonly propertyId: FieldRef<"Rooms", 'Int'>
    readonly name: FieldRef<"Rooms", 'String'>
    readonly description: FieldRef<"Rooms", 'String'>
    readonly basePrice: FieldRef<"Rooms", 'Decimal'>
    readonly maxGuests: FieldRef<"Rooms", 'Int'>
    readonly picture: FieldRef<"Rooms", 'String'>
    readonly createdAt: FieldRef<"Rooms", 'DateTime'>
    readonly updatedAt: FieldRef<"Rooms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rooms findUnique
   */
  export type RoomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms findUniqueOrThrow
   */
  export type RoomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms findFirst
   */
  export type RoomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms findFirstOrThrow
   */
  export type RoomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms findMany
   */
  export type RoomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms create
   */
  export type RoomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rooms.
     */
    data: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
  }

  /**
   * Rooms createMany
   */
  export type RoomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomsCreateManyInput | RoomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rooms createManyAndReturn
   */
  export type RoomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomsCreateManyInput | RoomsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rooms update
   */
  export type RoomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rooms.
     */
    data: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
    /**
     * Choose, which Rooms to update.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms updateMany
   */
  export type RoomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomsWhereInput
  }

  /**
   * Rooms upsert
   */
  export type RoomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rooms to update in case it exists.
     */
    where: RoomsWhereUniqueInput
    /**
     * In case the Rooms found by the `where` argument doesn't exist, create a new Rooms with this data.
     */
    create: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
    /**
     * In case the Rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
  }

  /**
   * Rooms delete
   */
  export type RoomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter which Rooms to delete.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms deleteMany
   */
  export type RoomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomsWhereInput
  }

  /**
   * Rooms.reservations
   */
  export type Rooms$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Rooms.roomAvailabilities
   */
  export type Rooms$roomAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    where?: RoomAvailabilitiesWhereInput
    orderBy?: RoomAvailabilitiesOrderByWithRelationInput | RoomAvailabilitiesOrderByWithRelationInput[]
    cursor?: RoomAvailabilitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomAvailabilitiesScalarFieldEnum | RoomAvailabilitiesScalarFieldEnum[]
  }

  /**
   * Rooms.peakSeasons
   */
  export type Rooms$peakSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    where?: PeakSeasonsWhereInput
    orderBy?: PeakSeasonsOrderByWithRelationInput | PeakSeasonsOrderByWithRelationInput[]
    cursor?: PeakSeasonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeakSeasonsScalarFieldEnum | PeakSeasonsScalarFieldEnum[]
  }

  /**
   * Rooms without action
   */
  export type RoomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
  }


  /**
   * Model RoomAvailabilities
   */

  export type AggregateRoomAvailabilities = {
    _count: RoomAvailabilitiesCountAggregateOutputType | null
    _avg: RoomAvailabilitiesAvgAggregateOutputType | null
    _sum: RoomAvailabilitiesSumAggregateOutputType | null
    _min: RoomAvailabilitiesMinAggregateOutputType | null
    _max: RoomAvailabilitiesMaxAggregateOutputType | null
  }

  export type RoomAvailabilitiesAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    priceOverride: Decimal | null
  }

  export type RoomAvailabilitiesSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    priceOverride: Decimal | null
  }

  export type RoomAvailabilitiesMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    date: Date | null
    isAvailable: boolean | null
    priceOverride: Decimal | null
  }

  export type RoomAvailabilitiesMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    date: Date | null
    isAvailable: boolean | null
    priceOverride: Decimal | null
  }

  export type RoomAvailabilitiesCountAggregateOutputType = {
    id: number
    roomId: number
    date: number
    isAvailable: number
    priceOverride: number
    _all: number
  }


  export type RoomAvailabilitiesAvgAggregateInputType = {
    id?: true
    roomId?: true
    priceOverride?: true
  }

  export type RoomAvailabilitiesSumAggregateInputType = {
    id?: true
    roomId?: true
    priceOverride?: true
  }

  export type RoomAvailabilitiesMinAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
    priceOverride?: true
  }

  export type RoomAvailabilitiesMaxAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
    priceOverride?: true
  }

  export type RoomAvailabilitiesCountAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
    priceOverride?: true
    _all?: true
  }

  export type RoomAvailabilitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailabilities to aggregate.
     */
    where?: RoomAvailabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilitiesOrderByWithRelationInput | RoomAvailabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomAvailabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomAvailabilities
    **/
    _count?: true | RoomAvailabilitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvailabilitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomAvailabilitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomAvailabilitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomAvailabilitiesMaxAggregateInputType
  }

  export type GetRoomAvailabilitiesAggregateType<T extends RoomAvailabilitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomAvailabilities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomAvailabilities[P]>
      : GetScalarType<T[P], AggregateRoomAvailabilities[P]>
  }




  export type RoomAvailabilitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilitiesWhereInput
    orderBy?: RoomAvailabilitiesOrderByWithAggregationInput | RoomAvailabilitiesOrderByWithAggregationInput[]
    by: RoomAvailabilitiesScalarFieldEnum[] | RoomAvailabilitiesScalarFieldEnum
    having?: RoomAvailabilitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomAvailabilitiesCountAggregateInputType | true
    _avg?: RoomAvailabilitiesAvgAggregateInputType
    _sum?: RoomAvailabilitiesSumAggregateInputType
    _min?: RoomAvailabilitiesMinAggregateInputType
    _max?: RoomAvailabilitiesMaxAggregateInputType
  }

  export type RoomAvailabilitiesGroupByOutputType = {
    id: number
    roomId: number
    date: Date
    isAvailable: boolean
    priceOverride: Decimal | null
    _count: RoomAvailabilitiesCountAggregateOutputType | null
    _avg: RoomAvailabilitiesAvgAggregateOutputType | null
    _sum: RoomAvailabilitiesSumAggregateOutputType | null
    _min: RoomAvailabilitiesMinAggregateOutputType | null
    _max: RoomAvailabilitiesMaxAggregateOutputType | null
  }

  type GetRoomAvailabilitiesGroupByPayload<T extends RoomAvailabilitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomAvailabilitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomAvailabilitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomAvailabilitiesGroupByOutputType[P]>
            : GetScalarType<T[P], RoomAvailabilitiesGroupByOutputType[P]>
        }
      >
    >


  export type RoomAvailabilitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    priceOverride?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailabilities"]>

  export type RoomAvailabilitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    priceOverride?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailabilities"]>

  export type RoomAvailabilitiesSelectScalar = {
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    priceOverride?: boolean
  }

  export type RoomAvailabilitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }
  export type RoomAvailabilitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }

  export type $RoomAvailabilitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomAvailabilities"
    objects: {
      room: Prisma.$RoomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      date: Date
      isAvailable: boolean
      priceOverride: Prisma.Decimal | null
    }, ExtArgs["result"]["roomAvailabilities"]>
    composites: {}
  }

  type RoomAvailabilitiesGetPayload<S extends boolean | null | undefined | RoomAvailabilitiesDefaultArgs> = $Result.GetResult<Prisma.$RoomAvailabilitiesPayload, S>

  type RoomAvailabilitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomAvailabilitiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomAvailabilitiesCountAggregateInputType | true
    }

  export interface RoomAvailabilitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomAvailabilities'], meta: { name: 'RoomAvailabilities' } }
    /**
     * Find zero or one RoomAvailabilities that matches the filter.
     * @param {RoomAvailabilitiesFindUniqueArgs} args - Arguments to find a RoomAvailabilities
     * @example
     * // Get one RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomAvailabilitiesFindUniqueArgs>(args: SelectSubset<T, RoomAvailabilitiesFindUniqueArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoomAvailabilities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomAvailabilitiesFindUniqueOrThrowArgs} args - Arguments to find a RoomAvailabilities
     * @example
     * // Get one RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomAvailabilitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomAvailabilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoomAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilitiesFindFirstArgs} args - Arguments to find a RoomAvailabilities
     * @example
     * // Get one RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomAvailabilitiesFindFirstArgs>(args?: SelectSubset<T, RoomAvailabilitiesFindFirstArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoomAvailabilities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilitiesFindFirstOrThrowArgs} args - Arguments to find a RoomAvailabilities
     * @example
     * // Get one RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomAvailabilitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomAvailabilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoomAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.findMany()
     * 
     * // Get first 10 RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomAvailabilitiesWithIdOnly = await prisma.roomAvailabilities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomAvailabilitiesFindManyArgs>(args?: SelectSubset<T, RoomAvailabilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoomAvailabilities.
     * @param {RoomAvailabilitiesCreateArgs} args - Arguments to create a RoomAvailabilities.
     * @example
     * // Create one RoomAvailabilities
     * const RoomAvailabilities = await prisma.roomAvailabilities.create({
     *   data: {
     *     // ... data to create a RoomAvailabilities
     *   }
     * })
     * 
     */
    create<T extends RoomAvailabilitiesCreateArgs>(args: SelectSubset<T, RoomAvailabilitiesCreateArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoomAvailabilities.
     * @param {RoomAvailabilitiesCreateManyArgs} args - Arguments to create many RoomAvailabilities.
     * @example
     * // Create many RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomAvailabilitiesCreateManyArgs>(args?: SelectSubset<T, RoomAvailabilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomAvailabilities and returns the data saved in the database.
     * @param {RoomAvailabilitiesCreateManyAndReturnArgs} args - Arguments to create many RoomAvailabilities.
     * @example
     * // Create many RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomAvailabilities and only return the `id`
     * const roomAvailabilitiesWithIdOnly = await prisma.roomAvailabilities.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomAvailabilitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomAvailabilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoomAvailabilities.
     * @param {RoomAvailabilitiesDeleteArgs} args - Arguments to delete one RoomAvailabilities.
     * @example
     * // Delete one RoomAvailabilities
     * const RoomAvailabilities = await prisma.roomAvailabilities.delete({
     *   where: {
     *     // ... filter to delete one RoomAvailabilities
     *   }
     * })
     * 
     */
    delete<T extends RoomAvailabilitiesDeleteArgs>(args: SelectSubset<T, RoomAvailabilitiesDeleteArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoomAvailabilities.
     * @param {RoomAvailabilitiesUpdateArgs} args - Arguments to update one RoomAvailabilities.
     * @example
     * // Update one RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomAvailabilitiesUpdateArgs>(args: SelectSubset<T, RoomAvailabilitiesUpdateArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoomAvailabilities.
     * @param {RoomAvailabilitiesDeleteManyArgs} args - Arguments to filter RoomAvailabilities to delete.
     * @example
     * // Delete a few RoomAvailabilities
     * const { count } = await prisma.roomAvailabilities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomAvailabilitiesDeleteManyArgs>(args?: SelectSubset<T, RoomAvailabilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomAvailabilitiesUpdateManyArgs>(args: SelectSubset<T, RoomAvailabilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomAvailabilities.
     * @param {RoomAvailabilitiesUpsertArgs} args - Arguments to update or create a RoomAvailabilities.
     * @example
     * // Update or create a RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailabilities.upsert({
     *   create: {
     *     // ... data to create a RoomAvailabilities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomAvailabilities we want to update
     *   }
     * })
     */
    upsert<T extends RoomAvailabilitiesUpsertArgs>(args: SelectSubset<T, RoomAvailabilitiesUpsertArgs<ExtArgs>>): Prisma__RoomAvailabilitiesClient<$Result.GetResult<Prisma.$RoomAvailabilitiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilitiesCountArgs} args - Arguments to filter RoomAvailabilities to count.
     * @example
     * // Count the number of RoomAvailabilities
     * const count = await prisma.roomAvailabilities.count({
     *   where: {
     *     // ... the filter for the RoomAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends RoomAvailabilitiesCountArgs>(
      args?: Subset<T, RoomAvailabilitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomAvailabilitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAvailabilitiesAggregateArgs>(args: Subset<T, RoomAvailabilitiesAggregateArgs>): Prisma.PrismaPromise<GetRoomAvailabilitiesAggregateType<T>>

    /**
     * Group by RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomAvailabilitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomAvailabilitiesGroupByArgs['orderBy'] }
        : { orderBy?: RoomAvailabilitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomAvailabilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomAvailabilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomAvailabilities model
   */
  readonly fields: RoomAvailabilitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomAvailabilities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomAvailabilitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomsDefaultArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomAvailabilities model
   */ 
  interface RoomAvailabilitiesFieldRefs {
    readonly id: FieldRef<"RoomAvailabilities", 'Int'>
    readonly roomId: FieldRef<"RoomAvailabilities", 'Int'>
    readonly date: FieldRef<"RoomAvailabilities", 'DateTime'>
    readonly isAvailable: FieldRef<"RoomAvailabilities", 'Boolean'>
    readonly priceOverride: FieldRef<"RoomAvailabilities", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * RoomAvailabilities findUnique
   */
  export type RoomAvailabilitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where: RoomAvailabilitiesWhereUniqueInput
  }

  /**
   * RoomAvailabilities findUniqueOrThrow
   */
  export type RoomAvailabilitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where: RoomAvailabilitiesWhereUniqueInput
  }

  /**
   * RoomAvailabilities findFirst
   */
  export type RoomAvailabilitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where?: RoomAvailabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilitiesOrderByWithRelationInput | RoomAvailabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilitiesScalarFieldEnum | RoomAvailabilitiesScalarFieldEnum[]
  }

  /**
   * RoomAvailabilities findFirstOrThrow
   */
  export type RoomAvailabilitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where?: RoomAvailabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilitiesOrderByWithRelationInput | RoomAvailabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilitiesScalarFieldEnum | RoomAvailabilitiesScalarFieldEnum[]
  }

  /**
   * RoomAvailabilities findMany
   */
  export type RoomAvailabilitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where?: RoomAvailabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilitiesOrderByWithRelationInput | RoomAvailabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomAvailabilities.
     */
    cursor?: RoomAvailabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    distinct?: RoomAvailabilitiesScalarFieldEnum | RoomAvailabilitiesScalarFieldEnum[]
  }

  /**
   * RoomAvailabilities create
   */
  export type RoomAvailabilitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomAvailabilities.
     */
    data: XOR<RoomAvailabilitiesCreateInput, RoomAvailabilitiesUncheckedCreateInput>
  }

  /**
   * RoomAvailabilities createMany
   */
  export type RoomAvailabilitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomAvailabilities.
     */
    data: RoomAvailabilitiesCreateManyInput | RoomAvailabilitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomAvailabilities createManyAndReturn
   */
  export type RoomAvailabilitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoomAvailabilities.
     */
    data: RoomAvailabilitiesCreateManyInput | RoomAvailabilitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomAvailabilities update
   */
  export type RoomAvailabilitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomAvailabilities.
     */
    data: XOR<RoomAvailabilitiesUpdateInput, RoomAvailabilitiesUncheckedUpdateInput>
    /**
     * Choose, which RoomAvailabilities to update.
     */
    where: RoomAvailabilitiesWhereUniqueInput
  }

  /**
   * RoomAvailabilities updateMany
   */
  export type RoomAvailabilitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomAvailabilities.
     */
    data: XOR<RoomAvailabilitiesUpdateManyMutationInput, RoomAvailabilitiesUncheckedUpdateManyInput>
    /**
     * Filter which RoomAvailabilities to update
     */
    where?: RoomAvailabilitiesWhereInput
  }

  /**
   * RoomAvailabilities upsert
   */
  export type RoomAvailabilitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomAvailabilities to update in case it exists.
     */
    where: RoomAvailabilitiesWhereUniqueInput
    /**
     * In case the RoomAvailabilities found by the `where` argument doesn't exist, create a new RoomAvailabilities with this data.
     */
    create: XOR<RoomAvailabilitiesCreateInput, RoomAvailabilitiesUncheckedCreateInput>
    /**
     * In case the RoomAvailabilities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomAvailabilitiesUpdateInput, RoomAvailabilitiesUncheckedUpdateInput>
  }

  /**
   * RoomAvailabilities delete
   */
  export type RoomAvailabilitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
    /**
     * Filter which RoomAvailabilities to delete.
     */
    where: RoomAvailabilitiesWhereUniqueInput
  }

  /**
   * RoomAvailabilities deleteMany
   */
  export type RoomAvailabilitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailabilities to delete
     */
    where?: RoomAvailabilitiesWhereInput
  }

  /**
   * RoomAvailabilities without action
   */
  export type RoomAvailabilitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailabilities
     */
    select?: RoomAvailabilitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilitiesInclude<ExtArgs> | null
  }


  /**
   * Model PeakSeasons
   */

  export type AggregatePeakSeasons = {
    _count: PeakSeasonsCountAggregateOutputType | null
    _avg: PeakSeasonsAvgAggregateOutputType | null
    _sum: PeakSeasonsSumAggregateOutputType | null
    _min: PeakSeasonsMinAggregateOutputType | null
    _max: PeakSeasonsMaxAggregateOutputType | null
  }

  export type PeakSeasonsAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    value: Decimal | null
    propertiesId: number | null
  }

  export type PeakSeasonsSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    value: Decimal | null
    propertiesId: number | null
  }

  export type PeakSeasonsMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    priceIncreaseType: string | null
    value: Decimal | null
    createdAt: Date | null
    propertiesId: number | null
  }

  export type PeakSeasonsMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    priceIncreaseType: string | null
    value: Decimal | null
    createdAt: Date | null
    propertiesId: number | null
  }

  export type PeakSeasonsCountAggregateOutputType = {
    id: number
    roomId: number
    name: number
    startDate: number
    endDate: number
    priceIncreaseType: number
    value: number
    createdAt: number
    propertiesId: number
    _all: number
  }


  export type PeakSeasonsAvgAggregateInputType = {
    id?: true
    roomId?: true
    value?: true
    propertiesId?: true
  }

  export type PeakSeasonsSumAggregateInputType = {
    id?: true
    roomId?: true
    value?: true
    propertiesId?: true
  }

  export type PeakSeasonsMinAggregateInputType = {
    id?: true
    roomId?: true
    name?: true
    startDate?: true
    endDate?: true
    priceIncreaseType?: true
    value?: true
    createdAt?: true
    propertiesId?: true
  }

  export type PeakSeasonsMaxAggregateInputType = {
    id?: true
    roomId?: true
    name?: true
    startDate?: true
    endDate?: true
    priceIncreaseType?: true
    value?: true
    createdAt?: true
    propertiesId?: true
  }

  export type PeakSeasonsCountAggregateInputType = {
    id?: true
    roomId?: true
    name?: true
    startDate?: true
    endDate?: true
    priceIncreaseType?: true
    value?: true
    createdAt?: true
    propertiesId?: true
    _all?: true
  }

  export type PeakSeasonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeakSeasons to aggregate.
     */
    where?: PeakSeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasons to fetch.
     */
    orderBy?: PeakSeasonsOrderByWithRelationInput | PeakSeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeakSeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeakSeasons
    **/
    _count?: true | PeakSeasonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeakSeasonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeakSeasonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeakSeasonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeakSeasonsMaxAggregateInputType
  }

  export type GetPeakSeasonsAggregateType<T extends PeakSeasonsAggregateArgs> = {
        [P in keyof T & keyof AggregatePeakSeasons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeakSeasons[P]>
      : GetScalarType<T[P], AggregatePeakSeasons[P]>
  }




  export type PeakSeasonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeakSeasonsWhereInput
    orderBy?: PeakSeasonsOrderByWithAggregationInput | PeakSeasonsOrderByWithAggregationInput[]
    by: PeakSeasonsScalarFieldEnum[] | PeakSeasonsScalarFieldEnum
    having?: PeakSeasonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeakSeasonsCountAggregateInputType | true
    _avg?: PeakSeasonsAvgAggregateInputType
    _sum?: PeakSeasonsSumAggregateInputType
    _min?: PeakSeasonsMinAggregateInputType
    _max?: PeakSeasonsMaxAggregateInputType
  }

  export type PeakSeasonsGroupByOutputType = {
    id: number
    roomId: number
    name: string
    startDate: Date
    endDate: Date
    priceIncreaseType: string
    value: Decimal
    createdAt: Date
    propertiesId: number | null
    _count: PeakSeasonsCountAggregateOutputType | null
    _avg: PeakSeasonsAvgAggregateOutputType | null
    _sum: PeakSeasonsSumAggregateOutputType | null
    _min: PeakSeasonsMinAggregateOutputType | null
    _max: PeakSeasonsMaxAggregateOutputType | null
  }

  type GetPeakSeasonsGroupByPayload<T extends PeakSeasonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeakSeasonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeakSeasonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeakSeasonsGroupByOutputType[P]>
            : GetScalarType<T[P], PeakSeasonsGroupByOutputType[P]>
        }
      >
    >


  export type PeakSeasonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    priceIncreaseType?: boolean
    value?: boolean
    createdAt?: boolean
    propertiesId?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    Properties?: boolean | PeakSeasons$PropertiesArgs<ExtArgs>
  }, ExtArgs["result"]["peakSeasons"]>

  export type PeakSeasonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    priceIncreaseType?: boolean
    value?: boolean
    createdAt?: boolean
    propertiesId?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    Properties?: boolean | PeakSeasons$PropertiesArgs<ExtArgs>
  }, ExtArgs["result"]["peakSeasons"]>

  export type PeakSeasonsSelectScalar = {
    id?: boolean
    roomId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    priceIncreaseType?: boolean
    value?: boolean
    createdAt?: boolean
    propertiesId?: boolean
  }

  export type PeakSeasonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    Properties?: boolean | PeakSeasons$PropertiesArgs<ExtArgs>
  }
  export type PeakSeasonsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    Properties?: boolean | PeakSeasons$PropertiesArgs<ExtArgs>
  }

  export type $PeakSeasonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeakSeasons"
    objects: {
      room: Prisma.$RoomsPayload<ExtArgs>
      Properties: Prisma.$PropertiesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      name: string
      startDate: Date
      endDate: Date
      priceIncreaseType: string
      value: Prisma.Decimal
      createdAt: Date
      propertiesId: number | null
    }, ExtArgs["result"]["peakSeasons"]>
    composites: {}
  }

  type PeakSeasonsGetPayload<S extends boolean | null | undefined | PeakSeasonsDefaultArgs> = $Result.GetResult<Prisma.$PeakSeasonsPayload, S>

  type PeakSeasonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeakSeasonsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PeakSeasonsCountAggregateInputType | true
    }

  export interface PeakSeasonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeakSeasons'], meta: { name: 'PeakSeasons' } }
    /**
     * Find zero or one PeakSeasons that matches the filter.
     * @param {PeakSeasonsFindUniqueArgs} args - Arguments to find a PeakSeasons
     * @example
     * // Get one PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeakSeasonsFindUniqueArgs>(args: SelectSubset<T, PeakSeasonsFindUniqueArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PeakSeasons that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PeakSeasonsFindUniqueOrThrowArgs} args - Arguments to find a PeakSeasons
     * @example
     * // Get one PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeakSeasonsFindUniqueOrThrowArgs>(args: SelectSubset<T, PeakSeasonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PeakSeasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonsFindFirstArgs} args - Arguments to find a PeakSeasons
     * @example
     * // Get one PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeakSeasonsFindFirstArgs>(args?: SelectSubset<T, PeakSeasonsFindFirstArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PeakSeasons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonsFindFirstOrThrowArgs} args - Arguments to find a PeakSeasons
     * @example
     * // Get one PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeakSeasonsFindFirstOrThrowArgs>(args?: SelectSubset<T, PeakSeasonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PeakSeasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.findMany()
     * 
     * // Get first 10 PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peakSeasonsWithIdOnly = await prisma.peakSeasons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeakSeasonsFindManyArgs>(args?: SelectSubset<T, PeakSeasonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PeakSeasons.
     * @param {PeakSeasonsCreateArgs} args - Arguments to create a PeakSeasons.
     * @example
     * // Create one PeakSeasons
     * const PeakSeasons = await prisma.peakSeasons.create({
     *   data: {
     *     // ... data to create a PeakSeasons
     *   }
     * })
     * 
     */
    create<T extends PeakSeasonsCreateArgs>(args: SelectSubset<T, PeakSeasonsCreateArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PeakSeasons.
     * @param {PeakSeasonsCreateManyArgs} args - Arguments to create many PeakSeasons.
     * @example
     * // Create many PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeakSeasonsCreateManyArgs>(args?: SelectSubset<T, PeakSeasonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeakSeasons and returns the data saved in the database.
     * @param {PeakSeasonsCreateManyAndReturnArgs} args - Arguments to create many PeakSeasons.
     * @example
     * // Create many PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeakSeasons and only return the `id`
     * const peakSeasonsWithIdOnly = await prisma.peakSeasons.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeakSeasonsCreateManyAndReturnArgs>(args?: SelectSubset<T, PeakSeasonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PeakSeasons.
     * @param {PeakSeasonsDeleteArgs} args - Arguments to delete one PeakSeasons.
     * @example
     * // Delete one PeakSeasons
     * const PeakSeasons = await prisma.peakSeasons.delete({
     *   where: {
     *     // ... filter to delete one PeakSeasons
     *   }
     * })
     * 
     */
    delete<T extends PeakSeasonsDeleteArgs>(args: SelectSubset<T, PeakSeasonsDeleteArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PeakSeasons.
     * @param {PeakSeasonsUpdateArgs} args - Arguments to update one PeakSeasons.
     * @example
     * // Update one PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeakSeasonsUpdateArgs>(args: SelectSubset<T, PeakSeasonsUpdateArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PeakSeasons.
     * @param {PeakSeasonsDeleteManyArgs} args - Arguments to filter PeakSeasons to delete.
     * @example
     * // Delete a few PeakSeasons
     * const { count } = await prisma.peakSeasons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeakSeasonsDeleteManyArgs>(args?: SelectSubset<T, PeakSeasonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeakSeasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeakSeasonsUpdateManyArgs>(args: SelectSubset<T, PeakSeasonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PeakSeasons.
     * @param {PeakSeasonsUpsertArgs} args - Arguments to update or create a PeakSeasons.
     * @example
     * // Update or create a PeakSeasons
     * const peakSeasons = await prisma.peakSeasons.upsert({
     *   create: {
     *     // ... data to create a PeakSeasons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeakSeasons we want to update
     *   }
     * })
     */
    upsert<T extends PeakSeasonsUpsertArgs>(args: SelectSubset<T, PeakSeasonsUpsertArgs<ExtArgs>>): Prisma__PeakSeasonsClient<$Result.GetResult<Prisma.$PeakSeasonsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PeakSeasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonsCountArgs} args - Arguments to filter PeakSeasons to count.
     * @example
     * // Count the number of PeakSeasons
     * const count = await prisma.peakSeasons.count({
     *   where: {
     *     // ... the filter for the PeakSeasons we want to count
     *   }
     * })
    **/
    count<T extends PeakSeasonsCountArgs>(
      args?: Subset<T, PeakSeasonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeakSeasonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeakSeasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeakSeasonsAggregateArgs>(args: Subset<T, PeakSeasonsAggregateArgs>): Prisma.PrismaPromise<GetPeakSeasonsAggregateType<T>>

    /**
     * Group by PeakSeasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeakSeasonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeakSeasonsGroupByArgs['orderBy'] }
        : { orderBy?: PeakSeasonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeakSeasonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeakSeasonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeakSeasons model
   */
  readonly fields: PeakSeasonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeakSeasons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeakSeasonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomsDefaultArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Properties<T extends PeakSeasons$PropertiesArgs<ExtArgs> = {}>(args?: Subset<T, PeakSeasons$PropertiesArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeakSeasons model
   */ 
  interface PeakSeasonsFieldRefs {
    readonly id: FieldRef<"PeakSeasons", 'Int'>
    readonly roomId: FieldRef<"PeakSeasons", 'Int'>
    readonly name: FieldRef<"PeakSeasons", 'String'>
    readonly startDate: FieldRef<"PeakSeasons", 'DateTime'>
    readonly endDate: FieldRef<"PeakSeasons", 'DateTime'>
    readonly priceIncreaseType: FieldRef<"PeakSeasons", 'String'>
    readonly value: FieldRef<"PeakSeasons", 'Decimal'>
    readonly createdAt: FieldRef<"PeakSeasons", 'DateTime'>
    readonly propertiesId: FieldRef<"PeakSeasons", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PeakSeasons findUnique
   */
  export type PeakSeasonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasons to fetch.
     */
    where: PeakSeasonsWhereUniqueInput
  }

  /**
   * PeakSeasons findUniqueOrThrow
   */
  export type PeakSeasonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasons to fetch.
     */
    where: PeakSeasonsWhereUniqueInput
  }

  /**
   * PeakSeasons findFirst
   */
  export type PeakSeasonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasons to fetch.
     */
    where?: PeakSeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasons to fetch.
     */
    orderBy?: PeakSeasonsOrderByWithRelationInput | PeakSeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeakSeasons.
     */
    cursor?: PeakSeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeakSeasons.
     */
    distinct?: PeakSeasonsScalarFieldEnum | PeakSeasonsScalarFieldEnum[]
  }

  /**
   * PeakSeasons findFirstOrThrow
   */
  export type PeakSeasonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasons to fetch.
     */
    where?: PeakSeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasons to fetch.
     */
    orderBy?: PeakSeasonsOrderByWithRelationInput | PeakSeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeakSeasons.
     */
    cursor?: PeakSeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeakSeasons.
     */
    distinct?: PeakSeasonsScalarFieldEnum | PeakSeasonsScalarFieldEnum[]
  }

  /**
   * PeakSeasons findMany
   */
  export type PeakSeasonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasons to fetch.
     */
    where?: PeakSeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasons to fetch.
     */
    orderBy?: PeakSeasonsOrderByWithRelationInput | PeakSeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeakSeasons.
     */
    cursor?: PeakSeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasons.
     */
    skip?: number
    distinct?: PeakSeasonsScalarFieldEnum | PeakSeasonsScalarFieldEnum[]
  }

  /**
   * PeakSeasons create
   */
  export type PeakSeasonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * The data needed to create a PeakSeasons.
     */
    data: XOR<PeakSeasonsCreateInput, PeakSeasonsUncheckedCreateInput>
  }

  /**
   * PeakSeasons createMany
   */
  export type PeakSeasonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeakSeasons.
     */
    data: PeakSeasonsCreateManyInput | PeakSeasonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeakSeasons createManyAndReturn
   */
  export type PeakSeasonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PeakSeasons.
     */
    data: PeakSeasonsCreateManyInput | PeakSeasonsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeakSeasons update
   */
  export type PeakSeasonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * The data needed to update a PeakSeasons.
     */
    data: XOR<PeakSeasonsUpdateInput, PeakSeasonsUncheckedUpdateInput>
    /**
     * Choose, which PeakSeasons to update.
     */
    where: PeakSeasonsWhereUniqueInput
  }

  /**
   * PeakSeasons updateMany
   */
  export type PeakSeasonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeakSeasons.
     */
    data: XOR<PeakSeasonsUpdateManyMutationInput, PeakSeasonsUncheckedUpdateManyInput>
    /**
     * Filter which PeakSeasons to update
     */
    where?: PeakSeasonsWhereInput
  }

  /**
   * PeakSeasons upsert
   */
  export type PeakSeasonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * The filter to search for the PeakSeasons to update in case it exists.
     */
    where: PeakSeasonsWhereUniqueInput
    /**
     * In case the PeakSeasons found by the `where` argument doesn't exist, create a new PeakSeasons with this data.
     */
    create: XOR<PeakSeasonsCreateInput, PeakSeasonsUncheckedCreateInput>
    /**
     * In case the PeakSeasons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeakSeasonsUpdateInput, PeakSeasonsUncheckedUpdateInput>
  }

  /**
   * PeakSeasons delete
   */
  export type PeakSeasonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
    /**
     * Filter which PeakSeasons to delete.
     */
    where: PeakSeasonsWhereUniqueInput
  }

  /**
   * PeakSeasons deleteMany
   */
  export type PeakSeasonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeakSeasons to delete
     */
    where?: PeakSeasonsWhereInput
  }

  /**
   * PeakSeasons.Properties
   */
  export type PeakSeasons$PropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    where?: PropertiesWhereInput
  }

  /**
   * PeakSeasons without action
   */
  export type PeakSeasonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasons
     */
    select?: PeakSeasonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonsInclude<ExtArgs> | null
  }


  /**
   * Model Reservations
   */

  export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  export type ReservationsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    duration: number | null
    totalPrice: Decimal | null
  }

  export type ReservationsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    duration: number | null
    totalPrice: Decimal | null
  }

  export type ReservationsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    checkIn: Date | null
    checkOut: Date | null
    duration: number | null
    totalPrice: Decimal | null
    status: $Enums.ReservationStatus | null
    reminderSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    checkIn: Date | null
    checkOut: Date | null
    duration: number | null
    totalPrice: Decimal | null
    status: $Enums.ReservationStatus | null
    reminderSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationsCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: number
    checkOut: number
    duration: number
    totalPrice: number
    status: number
    reminderSentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationsAvgAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    duration?: true
    totalPrice?: true
  }

  export type ReservationsSumAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    duration?: true
    totalPrice?: true
  }

  export type ReservationsMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    duration?: true
    totalPrice?: true
    status?: true
    reminderSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationsMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    duration?: true
    totalPrice?: true
    status?: true
    reminderSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationsCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    duration?: true
    totalPrice?: true
    status?: true
    reminderSentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to aggregate.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationsMaxAggregateInputType
  }

  export type GetReservationsAggregateType<T extends ReservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservations[P]>
      : GetScalarType<T[P], AggregateReservations[P]>
  }




  export type ReservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithAggregationInput | ReservationsOrderByWithAggregationInput[]
    by: ReservationsScalarFieldEnum[] | ReservationsScalarFieldEnum
    having?: ReservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationsCountAggregateInputType | true
    _avg?: ReservationsAvgAggregateInputType
    _sum?: ReservationsSumAggregateInputType
    _min?: ReservationsMinAggregateInputType
    _max?: ReservationsMaxAggregateInputType
  }

  export type ReservationsGroupByOutputType = {
    id: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date
    checkOut: Date
    duration: number
    totalPrice: Decimal
    status: $Enums.ReservationStatus
    reminderSentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  type GetReservationsGroupByPayload<T extends ReservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
        }
      >
    >


  export type ReservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    duration?: boolean
    totalPrice?: boolean
    status?: boolean
    reminderSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    paymentProofs?: boolean | Reservations$paymentProofsArgs<ExtArgs>
    reviews?: boolean | Reservations$reviewsArgs<ExtArgs>
    _count?: boolean | ReservationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservations"]>

  export type ReservationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    duration?: boolean
    totalPrice?: boolean
    status?: boolean
    reminderSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservations"]>

  export type ReservationsSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    duration?: boolean
    totalPrice?: boolean
    status?: boolean
    reminderSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    paymentProofs?: boolean | Reservations$paymentProofsArgs<ExtArgs>
    reviews?: boolean | Reservations$reviewsArgs<ExtArgs>
    _count?: boolean | ReservationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }

  export type $ReservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservations"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      property: Prisma.$PropertiesPayload<ExtArgs>
      room: Prisma.$RoomsPayload<ExtArgs>
      paymentProofs: Prisma.$PaymentProofsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      propertyId: number
      roomId: number
      checkIn: Date
      checkOut: Date
      duration: number
      totalPrice: Prisma.Decimal
      status: $Enums.ReservationStatus
      reminderSentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservations"]>
    composites: {}
  }

  type ReservationsGetPayload<S extends boolean | null | undefined | ReservationsDefaultArgs> = $Result.GetResult<Prisma.$ReservationsPayload, S>

  type ReservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationsCountAggregateInputType | true
    }

  export interface ReservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservations'], meta: { name: 'Reservations' } }
    /**
     * Find zero or one Reservations that matches the filter.
     * @param {ReservationsFindUniqueArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationsFindUniqueArgs>(args: SelectSubset<T, ReservationsFindUniqueArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reservations that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationsFindUniqueOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationsFindFirstArgs>(args?: SelectSubset<T, ReservationsFindFirstArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservations.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationsWithIdOnly = await prisma.reservations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationsFindManyArgs>(args?: SelectSubset<T, ReservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reservations.
     * @param {ReservationsCreateArgs} args - Arguments to create a Reservations.
     * @example
     * // Create one Reservations
     * const Reservations = await prisma.reservations.create({
     *   data: {
     *     // ... data to create a Reservations
     *   }
     * })
     * 
     */
    create<T extends ReservationsCreateArgs>(args: SelectSubset<T, ReservationsCreateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reservations.
     * @param {ReservationsCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationsCreateManyArgs>(args?: SelectSubset<T, ReservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationsCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationsWithIdOnly = await prisma.reservations.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reservations.
     * @param {ReservationsDeleteArgs} args - Arguments to delete one Reservations.
     * @example
     * // Delete one Reservations
     * const Reservations = await prisma.reservations.delete({
     *   where: {
     *     // ... filter to delete one Reservations
     *   }
     * })
     * 
     */
    delete<T extends ReservationsDeleteArgs>(args: SelectSubset<T, ReservationsDeleteArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reservations.
     * @param {ReservationsUpdateArgs} args - Arguments to update one Reservations.
     * @example
     * // Update one Reservations
     * const reservations = await prisma.reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationsUpdateArgs>(args: SelectSubset<T, ReservationsUpdateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationsDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationsDeleteManyArgs>(args?: SelectSubset<T, ReservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationsUpdateManyArgs>(args: SelectSubset<T, ReservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservations.
     * @param {ReservationsUpsertArgs} args - Arguments to update or create a Reservations.
     * @example
     * // Update or create a Reservations
     * const reservations = await prisma.reservations.upsert({
     *   create: {
     *     // ... data to create a Reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservations we want to update
     *   }
     * })
     */
    upsert<T extends ReservationsUpsertArgs>(args: SelectSubset<T, ReservationsUpsertArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservations.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationsCountArgs>(
      args?: Subset<T, ReservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationsAggregateArgs>(args: Subset<T, ReservationsAggregateArgs>): Prisma.PrismaPromise<GetReservationsAggregateType<T>>

    /**
     * Group by Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationsGroupByArgs['orderBy'] }
        : { orderBy?: ReservationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservations model
   */
  readonly fields: ReservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    property<T extends PropertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertiesDefaultArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    room<T extends RoomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomsDefaultArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    paymentProofs<T extends Reservations$paymentProofsArgs<ExtArgs> = {}>(args?: Subset<T, Reservations$paymentProofsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Reservations$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Reservations$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservations model
   */ 
  interface ReservationsFieldRefs {
    readonly id: FieldRef<"Reservations", 'Int'>
    readonly userId: FieldRef<"Reservations", 'Int'>
    readonly propertyId: FieldRef<"Reservations", 'Int'>
    readonly roomId: FieldRef<"Reservations", 'Int'>
    readonly checkIn: FieldRef<"Reservations", 'DateTime'>
    readonly checkOut: FieldRef<"Reservations", 'DateTime'>
    readonly duration: FieldRef<"Reservations", 'Int'>
    readonly totalPrice: FieldRef<"Reservations", 'Decimal'>
    readonly status: FieldRef<"Reservations", 'ReservationStatus'>
    readonly reminderSentAt: FieldRef<"Reservations", 'DateTime'>
    readonly createdAt: FieldRef<"Reservations", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservations findUnique
   */
  export type ReservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findUniqueOrThrow
   */
  export type ReservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findFirst
   */
  export type ReservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findFirstOrThrow
   */
  export type ReservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findMany
   */
  export type ReservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations create
   */
  export type ReservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservations.
     */
    data: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
  }

  /**
   * Reservations createMany
   */
  export type ReservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservations createManyAndReturn
   */
  export type ReservationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservations update
   */
  export type ReservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservations.
     */
    data: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
    /**
     * Choose, which Reservations to update.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations updateMany
   */
  export type ReservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationsWhereInput
  }

  /**
   * Reservations upsert
   */
  export type ReservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservations to update in case it exists.
     */
    where: ReservationsWhereUniqueInput
    /**
     * In case the Reservations found by the `where` argument doesn't exist, create a new Reservations with this data.
     */
    create: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
    /**
     * In case the Reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
  }

  /**
   * Reservations delete
   */
  export type ReservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter which Reservations to delete.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations deleteMany
   */
  export type ReservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationsWhereInput
  }

  /**
   * Reservations.paymentProofs
   */
  export type Reservations$paymentProofsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    where?: PaymentProofsWhereInput
    orderBy?: PaymentProofsOrderByWithRelationInput | PaymentProofsOrderByWithRelationInput[]
    cursor?: PaymentProofsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentProofsScalarFieldEnum | PaymentProofsScalarFieldEnum[]
  }

  /**
   * Reservations.reviews
   */
  export type Reservations$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reservations without action
   */
  export type ReservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
  }


  /**
   * Model PaymentProofs
   */

  export type AggregatePaymentProofs = {
    _count: PaymentProofsCountAggregateOutputType | null
    _avg: PaymentProofsAvgAggregateOutputType | null
    _sum: PaymentProofsSumAggregateOutputType | null
    _min: PaymentProofsMinAggregateOutputType | null
    _max: PaymentProofsMaxAggregateOutputType | null
  }

  export type PaymentProofsAvgAggregateOutputType = {
    id: number | null
    reservationId: number | null
  }

  export type PaymentProofsSumAggregateOutputType = {
    id: number | null
    reservationId: number | null
  }

  export type PaymentProofsMinAggregateOutputType = {
    id: number | null
    reservationId: number | null
    image: string | null
    isValid: boolean | null
    rejectedReason: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentProofsMaxAggregateOutputType = {
    id: number | null
    reservationId: number | null
    image: string | null
    isValid: boolean | null
    rejectedReason: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentProofsCountAggregateOutputType = {
    id: number
    reservationId: number
    image: number
    isValid: number
    rejectedReason: number
    uploadedAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentProofsAvgAggregateInputType = {
    id?: true
    reservationId?: true
  }

  export type PaymentProofsSumAggregateInputType = {
    id?: true
    reservationId?: true
  }

  export type PaymentProofsMinAggregateInputType = {
    id?: true
    reservationId?: true
    image?: true
    isValid?: true
    rejectedReason?: true
    uploadedAt?: true
    updatedAt?: true
  }

  export type PaymentProofsMaxAggregateInputType = {
    id?: true
    reservationId?: true
    image?: true
    isValid?: true
    rejectedReason?: true
    uploadedAt?: true
    updatedAt?: true
  }

  export type PaymentProofsCountAggregateInputType = {
    id?: true
    reservationId?: true
    image?: true
    isValid?: true
    rejectedReason?: true
    uploadedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentProofsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentProofs to aggregate.
     */
    where?: PaymentProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofsOrderByWithRelationInput | PaymentProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentProofs
    **/
    _count?: true | PaymentProofsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentProofsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentProofsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentProofsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentProofsMaxAggregateInputType
  }

  export type GetPaymentProofsAggregateType<T extends PaymentProofsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentProofs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentProofs[P]>
      : GetScalarType<T[P], AggregatePaymentProofs[P]>
  }




  export type PaymentProofsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentProofsWhereInput
    orderBy?: PaymentProofsOrderByWithAggregationInput | PaymentProofsOrderByWithAggregationInput[]
    by: PaymentProofsScalarFieldEnum[] | PaymentProofsScalarFieldEnum
    having?: PaymentProofsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentProofsCountAggregateInputType | true
    _avg?: PaymentProofsAvgAggregateInputType
    _sum?: PaymentProofsSumAggregateInputType
    _min?: PaymentProofsMinAggregateInputType
    _max?: PaymentProofsMaxAggregateInputType
  }

  export type PaymentProofsGroupByOutputType = {
    id: number
    reservationId: number
    image: string
    isValid: boolean
    rejectedReason: string | null
    uploadedAt: Date
    updatedAt: Date
    _count: PaymentProofsCountAggregateOutputType | null
    _avg: PaymentProofsAvgAggregateOutputType | null
    _sum: PaymentProofsSumAggregateOutputType | null
    _min: PaymentProofsMinAggregateOutputType | null
    _max: PaymentProofsMaxAggregateOutputType | null
  }

  type GetPaymentProofsGroupByPayload<T extends PaymentProofsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentProofsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentProofsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentProofsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentProofsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentProofsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    image?: boolean
    isValid?: boolean
    rejectedReason?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentProofs"]>

  export type PaymentProofsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    image?: boolean
    isValid?: boolean
    rejectedReason?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentProofs"]>

  export type PaymentProofsSelectScalar = {
    id?: boolean
    reservationId?: boolean
    image?: boolean
    isValid?: boolean
    rejectedReason?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentProofsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }
  export type PaymentProofsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }

  export type $PaymentProofsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentProofs"
    objects: {
      reservation: Prisma.$ReservationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservationId: number
      image: string
      isValid: boolean
      rejectedReason: string | null
      uploadedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentProofs"]>
    composites: {}
  }

  type PaymentProofsGetPayload<S extends boolean | null | undefined | PaymentProofsDefaultArgs> = $Result.GetResult<Prisma.$PaymentProofsPayload, S>

  type PaymentProofsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentProofsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentProofsCountAggregateInputType | true
    }

  export interface PaymentProofsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentProofs'], meta: { name: 'PaymentProofs' } }
    /**
     * Find zero or one PaymentProofs that matches the filter.
     * @param {PaymentProofsFindUniqueArgs} args - Arguments to find a PaymentProofs
     * @example
     * // Get one PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentProofsFindUniqueArgs>(args: SelectSubset<T, PaymentProofsFindUniqueArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentProofs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentProofsFindUniqueOrThrowArgs} args - Arguments to find a PaymentProofs
     * @example
     * // Get one PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentProofsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentProofsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentProofs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofsFindFirstArgs} args - Arguments to find a PaymentProofs
     * @example
     * // Get one PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentProofsFindFirstArgs>(args?: SelectSubset<T, PaymentProofsFindFirstArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentProofs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofsFindFirstOrThrowArgs} args - Arguments to find a PaymentProofs
     * @example
     * // Get one PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentProofsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentProofsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentProofs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.findMany()
     * 
     * // Get first 10 PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentProofsWithIdOnly = await prisma.paymentProofs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentProofsFindManyArgs>(args?: SelectSubset<T, PaymentProofsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentProofs.
     * @param {PaymentProofsCreateArgs} args - Arguments to create a PaymentProofs.
     * @example
     * // Create one PaymentProofs
     * const PaymentProofs = await prisma.paymentProofs.create({
     *   data: {
     *     // ... data to create a PaymentProofs
     *   }
     * })
     * 
     */
    create<T extends PaymentProofsCreateArgs>(args: SelectSubset<T, PaymentProofsCreateArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentProofs.
     * @param {PaymentProofsCreateManyArgs} args - Arguments to create many PaymentProofs.
     * @example
     * // Create many PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentProofsCreateManyArgs>(args?: SelectSubset<T, PaymentProofsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentProofs and returns the data saved in the database.
     * @param {PaymentProofsCreateManyAndReturnArgs} args - Arguments to create many PaymentProofs.
     * @example
     * // Create many PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentProofs and only return the `id`
     * const paymentProofsWithIdOnly = await prisma.paymentProofs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentProofsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentProofsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentProofs.
     * @param {PaymentProofsDeleteArgs} args - Arguments to delete one PaymentProofs.
     * @example
     * // Delete one PaymentProofs
     * const PaymentProofs = await prisma.paymentProofs.delete({
     *   where: {
     *     // ... filter to delete one PaymentProofs
     *   }
     * })
     * 
     */
    delete<T extends PaymentProofsDeleteArgs>(args: SelectSubset<T, PaymentProofsDeleteArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentProofs.
     * @param {PaymentProofsUpdateArgs} args - Arguments to update one PaymentProofs.
     * @example
     * // Update one PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentProofsUpdateArgs>(args: SelectSubset<T, PaymentProofsUpdateArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentProofs.
     * @param {PaymentProofsDeleteManyArgs} args - Arguments to filter PaymentProofs to delete.
     * @example
     * // Delete a few PaymentProofs
     * const { count } = await prisma.paymentProofs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentProofsDeleteManyArgs>(args?: SelectSubset<T, PaymentProofsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentProofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentProofsUpdateManyArgs>(args: SelectSubset<T, PaymentProofsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentProofs.
     * @param {PaymentProofsUpsertArgs} args - Arguments to update or create a PaymentProofs.
     * @example
     * // Update or create a PaymentProofs
     * const paymentProofs = await prisma.paymentProofs.upsert({
     *   create: {
     *     // ... data to create a PaymentProofs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentProofs we want to update
     *   }
     * })
     */
    upsert<T extends PaymentProofsUpsertArgs>(args: SelectSubset<T, PaymentProofsUpsertArgs<ExtArgs>>): Prisma__PaymentProofsClient<$Result.GetResult<Prisma.$PaymentProofsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentProofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofsCountArgs} args - Arguments to filter PaymentProofs to count.
     * @example
     * // Count the number of PaymentProofs
     * const count = await prisma.paymentProofs.count({
     *   where: {
     *     // ... the filter for the PaymentProofs we want to count
     *   }
     * })
    **/
    count<T extends PaymentProofsCountArgs>(
      args?: Subset<T, PaymentProofsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentProofsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentProofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentProofsAggregateArgs>(args: Subset<T, PaymentProofsAggregateArgs>): Prisma.PrismaPromise<GetPaymentProofsAggregateType<T>>

    /**
     * Group by PaymentProofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentProofsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentProofsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentProofsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentProofsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentProofsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentProofs model
   */
  readonly fields: PaymentProofsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentProofs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentProofsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationsDefaultArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentProofs model
   */ 
  interface PaymentProofsFieldRefs {
    readonly id: FieldRef<"PaymentProofs", 'Int'>
    readonly reservationId: FieldRef<"PaymentProofs", 'Int'>
    readonly image: FieldRef<"PaymentProofs", 'String'>
    readonly isValid: FieldRef<"PaymentProofs", 'Boolean'>
    readonly rejectedReason: FieldRef<"PaymentProofs", 'String'>
    readonly uploadedAt: FieldRef<"PaymentProofs", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentProofs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentProofs findUnique
   */
  export type PaymentProofsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProofs to fetch.
     */
    where: PaymentProofsWhereUniqueInput
  }

  /**
   * PaymentProofs findUniqueOrThrow
   */
  export type PaymentProofsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProofs to fetch.
     */
    where: PaymentProofsWhereUniqueInput
  }

  /**
   * PaymentProofs findFirst
   */
  export type PaymentProofsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProofs to fetch.
     */
    where?: PaymentProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofsOrderByWithRelationInput | PaymentProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentProofs.
     */
    cursor?: PaymentProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentProofs.
     */
    distinct?: PaymentProofsScalarFieldEnum | PaymentProofsScalarFieldEnum[]
  }

  /**
   * PaymentProofs findFirstOrThrow
   */
  export type PaymentProofsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProofs to fetch.
     */
    where?: PaymentProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofsOrderByWithRelationInput | PaymentProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentProofs.
     */
    cursor?: PaymentProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentProofs.
     */
    distinct?: PaymentProofsScalarFieldEnum | PaymentProofsScalarFieldEnum[]
  }

  /**
   * PaymentProofs findMany
   */
  export type PaymentProofsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProofs to fetch.
     */
    where?: PaymentProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofsOrderByWithRelationInput | PaymentProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentProofs.
     */
    cursor?: PaymentProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    distinct?: PaymentProofsScalarFieldEnum | PaymentProofsScalarFieldEnum[]
  }

  /**
   * PaymentProofs create
   */
  export type PaymentProofsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentProofs.
     */
    data: XOR<PaymentProofsCreateInput, PaymentProofsUncheckedCreateInput>
  }

  /**
   * PaymentProofs createMany
   */
  export type PaymentProofsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentProofs.
     */
    data: PaymentProofsCreateManyInput | PaymentProofsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentProofs createManyAndReturn
   */
  export type PaymentProofsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentProofs.
     */
    data: PaymentProofsCreateManyInput | PaymentProofsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentProofs update
   */
  export type PaymentProofsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentProofs.
     */
    data: XOR<PaymentProofsUpdateInput, PaymentProofsUncheckedUpdateInput>
    /**
     * Choose, which PaymentProofs to update.
     */
    where: PaymentProofsWhereUniqueInput
  }

  /**
   * PaymentProofs updateMany
   */
  export type PaymentProofsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentProofs.
     */
    data: XOR<PaymentProofsUpdateManyMutationInput, PaymentProofsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentProofs to update
     */
    where?: PaymentProofsWhereInput
  }

  /**
   * PaymentProofs upsert
   */
  export type PaymentProofsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentProofs to update in case it exists.
     */
    where: PaymentProofsWhereUniqueInput
    /**
     * In case the PaymentProofs found by the `where` argument doesn't exist, create a new PaymentProofs with this data.
     */
    create: XOR<PaymentProofsCreateInput, PaymentProofsUncheckedCreateInput>
    /**
     * In case the PaymentProofs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentProofsUpdateInput, PaymentProofsUncheckedUpdateInput>
  }

  /**
   * PaymentProofs delete
   */
  export type PaymentProofsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
    /**
     * Filter which PaymentProofs to delete.
     */
    where: PaymentProofsWhereUniqueInput
  }

  /**
   * PaymentProofs deleteMany
   */
  export type PaymentProofsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentProofs to delete
     */
    where?: PaymentProofsWhereInput
  }

  /**
   * PaymentProofs without action
   */
  export type PaymentProofsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProofs
     */
    select?: PaymentProofsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofsInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    reservationId: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    reservationId: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    reservationId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    reservationId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    reservationId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    reservationId?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    reservationId?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    reservationId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    reservationId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    reservationId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    userId: number
    propertyId: number
    reservationId: number
    rating: number
    comment: string
    createdAt: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    reservationId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    reservationId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    reservationId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationsDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      property: Prisma.$PropertiesPayload<ExtArgs>
      reservation: Prisma.$ReservationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      propertyId: number
      reservationId: number
      rating: number
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    property<T extends PropertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertiesDefaultArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reservation<T extends ReservationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationsDefaultArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly userId: FieldRef<"Reviews", 'Int'>
    readonly propertyId: FieldRef<"Reviews", 'Int'>
    readonly reservationId: FieldRef<"Reviews", 'Int'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly createdAt: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    provider: 'provider',
    providerId: 'providerId',
    isVerified: 'isVerified',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TenantProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantProfileScalarFieldEnum = (typeof TenantProfileScalarFieldEnum)[keyof typeof TenantProfileScalarFieldEnum]


  export const SocialLoginsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerId: 'providerId',
    createdAt: 'createdAt'
  };

  export type SocialLoginsScalarFieldEnum = (typeof SocialLoginsScalarFieldEnum)[keyof typeof SocialLoginsScalarFieldEnum]


  export const EmailVerificationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    used: 'used'
  };

  export type EmailVerificationsScalarFieldEnum = (typeof EmailVerificationsScalarFieldEnum)[keyof typeof EmailVerificationsScalarFieldEnum]


  export const ResetPasswordsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    used: 'used'
  };

  export type ResetPasswordsScalarFieldEnum = (typeof ResetPasswordsScalarFieldEnum)[keyof typeof ResetPasswordsScalarFieldEnum]


  export const PropertyCategoriesScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    description: 'description'
  };

  export type PropertyCategoriesScalarFieldEnum = (typeof PropertyCategoriesScalarFieldEnum)[keyof typeof PropertyCategoriesScalarFieldEnum]


  export const PropertiesScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    categoryId: 'categoryId',
    name: 'name',
    description: 'description',
    picture: 'picture',
    address: 'address',
    city: 'city',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertiesScalarFieldEnum = (typeof PropertiesScalarFieldEnum)[keyof typeof PropertiesScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    description: 'description',
    basePrice: 'basePrice',
    maxGuests: 'maxGuests',
    picture: 'picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const RoomAvailabilitiesScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    date: 'date',
    isAvailable: 'isAvailable',
    priceOverride: 'priceOverride'
  };

  export type RoomAvailabilitiesScalarFieldEnum = (typeof RoomAvailabilitiesScalarFieldEnum)[keyof typeof RoomAvailabilitiesScalarFieldEnum]


  export const PeakSeasonsScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    priceIncreaseType: 'priceIncreaseType',
    value: 'value',
    createdAt: 'createdAt',
    propertiesId: 'propertiesId'
  };

  export type PeakSeasonsScalarFieldEnum = (typeof PeakSeasonsScalarFieldEnum)[keyof typeof PeakSeasonsScalarFieldEnum]


  export const ReservationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    roomId: 'roomId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    duration: 'duration',
    totalPrice: 'totalPrice',
    status: 'status',
    reminderSentAt: 'reminderSentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationsScalarFieldEnum = (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum]


  export const PaymentProofsScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    image: 'image',
    isValid: 'isValid',
    rejectedReason: 'rejectedReason',
    uploadedAt: 'uploadedAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentProofsScalarFieldEnum = (typeof PaymentProofsScalarFieldEnum)[keyof typeof PaymentProofsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    reservationId: 'reservationId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    provider?: StringNullableFilter<"Users"> | string | null
    providerId?: StringNullableFilter<"Users"> | string | null
    isVerified?: BoolFilter<"Users"> | boolean
    avatar?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    tenantProfile?: XOR<TenantProfileNullableRelationFilter, TenantProfileWhereInput> | null
    properties?: PropertiesListRelationFilter
    propertyCategories?: PropertyCategoriesListRelationFilter
    reservations?: ReservationsListRelationFilter
    reviews?: ReviewsListRelationFilter
    emailVerifications?: EmailVerificationsListRelationFilter
    resetPasswords?: ResetPasswordsListRelationFilter
    socialLogins?: SocialLoginsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantProfile?: TenantProfileOrderByWithRelationInput
    properties?: PropertiesOrderByRelationAggregateInput
    propertyCategories?: PropertyCategoriesOrderByRelationAggregateInput
    reservations?: ReservationsOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    emailVerifications?: EmailVerificationsOrderByRelationAggregateInput
    resetPasswords?: ResetPasswordsOrderByRelationAggregateInput
    socialLogins?: SocialLoginsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    provider?: StringNullableFilter<"Users"> | string | null
    providerId?: StringNullableFilter<"Users"> | string | null
    isVerified?: BoolFilter<"Users"> | boolean
    avatar?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    tenantProfile?: XOR<TenantProfileNullableRelationFilter, TenantProfileWhereInput> | null
    properties?: PropertiesListRelationFilter
    propertyCategories?: PropertyCategoriesListRelationFilter
    reservations?: ReservationsListRelationFilter
    reviews?: ReviewsListRelationFilter
    emailVerifications?: EmailVerificationsListRelationFilter
    resetPasswords?: ResetPasswordsListRelationFilter
    socialLogins?: SocialLoginsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringWithAggregatesFilter<"Users"> | string
    provider?: StringNullableWithAggregatesFilter<"Users"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Users"> | boolean
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type TenantProfileWhereInput = {
    AND?: TenantProfileWhereInput | TenantProfileWhereInput[]
    OR?: TenantProfileWhereInput[]
    NOT?: TenantProfileWhereInput | TenantProfileWhereInput[]
    id?: IntFilter<"TenantProfile"> | number
    userId?: IntFilter<"TenantProfile"> | number
    companyName?: StringFilter<"TenantProfile"> | string
    phone?: StringNullableFilter<"TenantProfile"> | string | null
    address?: StringNullableFilter<"TenantProfile"> | string | null
    createdAt?: DateTimeFilter<"TenantProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TenantProfile"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type TenantProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type TenantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TenantProfileWhereInput | TenantProfileWhereInput[]
    OR?: TenantProfileWhereInput[]
    NOT?: TenantProfileWhereInput | TenantProfileWhereInput[]
    companyName?: StringFilter<"TenantProfile"> | string
    phone?: StringNullableFilter<"TenantProfile"> | string | null
    address?: StringNullableFilter<"TenantProfile"> | string | null
    createdAt?: DateTimeFilter<"TenantProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TenantProfile"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type TenantProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantProfileCountOrderByAggregateInput
    _avg?: TenantProfileAvgOrderByAggregateInput
    _max?: TenantProfileMaxOrderByAggregateInput
    _min?: TenantProfileMinOrderByAggregateInput
    _sum?: TenantProfileSumOrderByAggregateInput
  }

  export type TenantProfileScalarWhereWithAggregatesInput = {
    AND?: TenantProfileScalarWhereWithAggregatesInput | TenantProfileScalarWhereWithAggregatesInput[]
    OR?: TenantProfileScalarWhereWithAggregatesInput[]
    NOT?: TenantProfileScalarWhereWithAggregatesInput | TenantProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TenantProfile"> | number
    userId?: IntWithAggregatesFilter<"TenantProfile"> | number
    companyName?: StringWithAggregatesFilter<"TenantProfile"> | string
    phone?: StringNullableWithAggregatesFilter<"TenantProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"TenantProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string
  }

  export type SocialLoginsWhereInput = {
    AND?: SocialLoginsWhereInput | SocialLoginsWhereInput[]
    OR?: SocialLoginsWhereInput[]
    NOT?: SocialLoginsWhereInput | SocialLoginsWhereInput[]
    id?: IntFilter<"SocialLogins"> | number
    userId?: IntFilter<"SocialLogins"> | number
    provider?: StringFilter<"SocialLogins"> | string
    providerId?: StringFilter<"SocialLogins"> | string
    createdAt?: DateTimeFilter<"SocialLogins"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type SocialLoginsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type SocialLoginsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerId?: SocialLoginsProviderProviderIdCompoundUniqueInput
    AND?: SocialLoginsWhereInput | SocialLoginsWhereInput[]
    OR?: SocialLoginsWhereInput[]
    NOT?: SocialLoginsWhereInput | SocialLoginsWhereInput[]
    userId?: IntFilter<"SocialLogins"> | number
    provider?: StringFilter<"SocialLogins"> | string
    providerId?: StringFilter<"SocialLogins"> | string
    createdAt?: DateTimeFilter<"SocialLogins"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id" | "provider_providerId">

  export type SocialLoginsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    _count?: SocialLoginsCountOrderByAggregateInput
    _avg?: SocialLoginsAvgOrderByAggregateInput
    _max?: SocialLoginsMaxOrderByAggregateInput
    _min?: SocialLoginsMinOrderByAggregateInput
    _sum?: SocialLoginsSumOrderByAggregateInput
  }

  export type SocialLoginsScalarWhereWithAggregatesInput = {
    AND?: SocialLoginsScalarWhereWithAggregatesInput | SocialLoginsScalarWhereWithAggregatesInput[]
    OR?: SocialLoginsScalarWhereWithAggregatesInput[]
    NOT?: SocialLoginsScalarWhereWithAggregatesInput | SocialLoginsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialLogins"> | number
    userId?: IntWithAggregatesFilter<"SocialLogins"> | number
    provider?: StringWithAggregatesFilter<"SocialLogins"> | string
    providerId?: StringWithAggregatesFilter<"SocialLogins"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialLogins"> | Date | string
  }

  export type EmailVerificationsWhereInput = {
    AND?: EmailVerificationsWhereInput | EmailVerificationsWhereInput[]
    OR?: EmailVerificationsWhereInput[]
    NOT?: EmailVerificationsWhereInput | EmailVerificationsWhereInput[]
    id?: IntFilter<"EmailVerifications"> | number
    userId?: IntFilter<"EmailVerifications"> | number
    token?: StringFilter<"EmailVerifications"> | string
    expiresAt?: DateTimeFilter<"EmailVerifications"> | Date | string
    used?: BoolFilter<"EmailVerifications"> | boolean
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type EmailVerificationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type EmailVerificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailVerificationsWhereInput | EmailVerificationsWhereInput[]
    OR?: EmailVerificationsWhereInput[]
    NOT?: EmailVerificationsWhereInput | EmailVerificationsWhereInput[]
    userId?: IntFilter<"EmailVerifications"> | number
    token?: StringFilter<"EmailVerifications"> | string
    expiresAt?: DateTimeFilter<"EmailVerifications"> | Date | string
    used?: BoolFilter<"EmailVerifications"> | boolean
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type EmailVerificationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    _count?: EmailVerificationsCountOrderByAggregateInput
    _avg?: EmailVerificationsAvgOrderByAggregateInput
    _max?: EmailVerificationsMaxOrderByAggregateInput
    _min?: EmailVerificationsMinOrderByAggregateInput
    _sum?: EmailVerificationsSumOrderByAggregateInput
  }

  export type EmailVerificationsScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationsScalarWhereWithAggregatesInput | EmailVerificationsScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationsScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationsScalarWhereWithAggregatesInput | EmailVerificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailVerifications"> | number
    userId?: IntWithAggregatesFilter<"EmailVerifications"> | number
    token?: StringWithAggregatesFilter<"EmailVerifications"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerifications"> | Date | string
    used?: BoolWithAggregatesFilter<"EmailVerifications"> | boolean
  }

  export type ResetPasswordsWhereInput = {
    AND?: ResetPasswordsWhereInput | ResetPasswordsWhereInput[]
    OR?: ResetPasswordsWhereInput[]
    NOT?: ResetPasswordsWhereInput | ResetPasswordsWhereInput[]
    id?: IntFilter<"ResetPasswords"> | number
    userId?: IntFilter<"ResetPasswords"> | number
    token?: StringFilter<"ResetPasswords"> | string
    expiresAt?: DateTimeFilter<"ResetPasswords"> | Date | string
    used?: BoolFilter<"ResetPasswords"> | boolean
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type ResetPasswordsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type ResetPasswordsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResetPasswordsWhereInput | ResetPasswordsWhereInput[]
    OR?: ResetPasswordsWhereInput[]
    NOT?: ResetPasswordsWhereInput | ResetPasswordsWhereInput[]
    userId?: IntFilter<"ResetPasswords"> | number
    token?: StringFilter<"ResetPasswords"> | string
    expiresAt?: DateTimeFilter<"ResetPasswords"> | Date | string
    used?: BoolFilter<"ResetPasswords"> | boolean
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type ResetPasswordsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    _count?: ResetPasswordsCountOrderByAggregateInput
    _avg?: ResetPasswordsAvgOrderByAggregateInput
    _max?: ResetPasswordsMaxOrderByAggregateInput
    _min?: ResetPasswordsMinOrderByAggregateInput
    _sum?: ResetPasswordsSumOrderByAggregateInput
  }

  export type ResetPasswordsScalarWhereWithAggregatesInput = {
    AND?: ResetPasswordsScalarWhereWithAggregatesInput | ResetPasswordsScalarWhereWithAggregatesInput[]
    OR?: ResetPasswordsScalarWhereWithAggregatesInput[]
    NOT?: ResetPasswordsScalarWhereWithAggregatesInput | ResetPasswordsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResetPasswords"> | number
    userId?: IntWithAggregatesFilter<"ResetPasswords"> | number
    token?: StringWithAggregatesFilter<"ResetPasswords"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ResetPasswords"> | Date | string
    used?: BoolWithAggregatesFilter<"ResetPasswords"> | boolean
  }

  export type PropertyCategoriesWhereInput = {
    AND?: PropertyCategoriesWhereInput | PropertyCategoriesWhereInput[]
    OR?: PropertyCategoriesWhereInput[]
    NOT?: PropertyCategoriesWhereInput | PropertyCategoriesWhereInput[]
    id?: IntFilter<"PropertyCategories"> | number
    tenantId?: IntFilter<"PropertyCategories"> | number
    name?: StringFilter<"PropertyCategories"> | string
    description?: StringFilter<"PropertyCategories"> | string
    tenant?: XOR<UsersRelationFilter, UsersWhereInput>
    properties?: PropertiesListRelationFilter
  }

  export type PropertyCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tenant?: UsersOrderByWithRelationInput
    properties?: PropertiesOrderByRelationAggregateInput
  }

  export type PropertyCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyCategoriesWhereInput | PropertyCategoriesWhereInput[]
    OR?: PropertyCategoriesWhereInput[]
    NOT?: PropertyCategoriesWhereInput | PropertyCategoriesWhereInput[]
    tenantId?: IntFilter<"PropertyCategories"> | number
    name?: StringFilter<"PropertyCategories"> | string
    description?: StringFilter<"PropertyCategories"> | string
    tenant?: XOR<UsersRelationFilter, UsersWhereInput>
    properties?: PropertiesListRelationFilter
  }, "id">

  export type PropertyCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: PropertyCategoriesCountOrderByAggregateInput
    _avg?: PropertyCategoriesAvgOrderByAggregateInput
    _max?: PropertyCategoriesMaxOrderByAggregateInput
    _min?: PropertyCategoriesMinOrderByAggregateInput
    _sum?: PropertyCategoriesSumOrderByAggregateInput
  }

  export type PropertyCategoriesScalarWhereWithAggregatesInput = {
    AND?: PropertyCategoriesScalarWhereWithAggregatesInput | PropertyCategoriesScalarWhereWithAggregatesInput[]
    OR?: PropertyCategoriesScalarWhereWithAggregatesInput[]
    NOT?: PropertyCategoriesScalarWhereWithAggregatesInput | PropertyCategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyCategories"> | number
    tenantId?: IntWithAggregatesFilter<"PropertyCategories"> | number
    name?: StringWithAggregatesFilter<"PropertyCategories"> | string
    description?: StringWithAggregatesFilter<"PropertyCategories"> | string
  }

  export type PropertiesWhereInput = {
    AND?: PropertiesWhereInput | PropertiesWhereInput[]
    OR?: PropertiesWhereInput[]
    NOT?: PropertiesWhereInput | PropertiesWhereInput[]
    id?: IntFilter<"Properties"> | number
    tenantId?: IntFilter<"Properties"> | number
    categoryId?: IntFilter<"Properties"> | number
    name?: StringFilter<"Properties"> | string
    description?: StringFilter<"Properties"> | string
    picture?: StringFilter<"Properties"> | string
    address?: StringFilter<"Properties"> | string
    city?: StringFilter<"Properties"> | string
    lat?: DecimalNullableFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Properties"> | Date | string
    updatedAt?: DateTimeFilter<"Properties"> | Date | string
    tenant?: XOR<UsersRelationFilter, UsersWhereInput>
    category?: XOR<PropertyCategoriesRelationFilter, PropertyCategoriesWhereInput>
    rooms?: RoomsListRelationFilter
    reservations?: ReservationsListRelationFilter
    reviews?: ReviewsListRelationFilter
    peakSeasons?: PeakSeasonsListRelationFilter
  }

  export type PropertiesOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: UsersOrderByWithRelationInput
    category?: PropertyCategoriesOrderByWithRelationInput
    rooms?: RoomsOrderByRelationAggregateInput
    reservations?: ReservationsOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    peakSeasons?: PeakSeasonsOrderByRelationAggregateInput
  }

  export type PropertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertiesWhereInput | PropertiesWhereInput[]
    OR?: PropertiesWhereInput[]
    NOT?: PropertiesWhereInput | PropertiesWhereInput[]
    tenantId?: IntFilter<"Properties"> | number
    categoryId?: IntFilter<"Properties"> | number
    name?: StringFilter<"Properties"> | string
    description?: StringFilter<"Properties"> | string
    picture?: StringFilter<"Properties"> | string
    address?: StringFilter<"Properties"> | string
    city?: StringFilter<"Properties"> | string
    lat?: DecimalNullableFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Properties"> | Date | string
    updatedAt?: DateTimeFilter<"Properties"> | Date | string
    tenant?: XOR<UsersRelationFilter, UsersWhereInput>
    category?: XOR<PropertyCategoriesRelationFilter, PropertyCategoriesWhereInput>
    rooms?: RoomsListRelationFilter
    reservations?: ReservationsListRelationFilter
    reviews?: ReviewsListRelationFilter
    peakSeasons?: PeakSeasonsListRelationFilter
  }, "id">

  export type PropertiesOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertiesCountOrderByAggregateInput
    _avg?: PropertiesAvgOrderByAggregateInput
    _max?: PropertiesMaxOrderByAggregateInput
    _min?: PropertiesMinOrderByAggregateInput
    _sum?: PropertiesSumOrderByAggregateInput
  }

  export type PropertiesScalarWhereWithAggregatesInput = {
    AND?: PropertiesScalarWhereWithAggregatesInput | PropertiesScalarWhereWithAggregatesInput[]
    OR?: PropertiesScalarWhereWithAggregatesInput[]
    NOT?: PropertiesScalarWhereWithAggregatesInput | PropertiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Properties"> | number
    tenantId?: IntWithAggregatesFilter<"Properties"> | number
    categoryId?: IntWithAggregatesFilter<"Properties"> | number
    name?: StringWithAggregatesFilter<"Properties"> | string
    description?: StringWithAggregatesFilter<"Properties"> | string
    picture?: StringWithAggregatesFilter<"Properties"> | string
    address?: StringWithAggregatesFilter<"Properties"> | string
    city?: StringWithAggregatesFilter<"Properties"> | string
    lat?: DecimalNullableWithAggregatesFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableWithAggregatesFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Properties"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Properties"> | Date | string
  }

  export type RoomsWhereInput = {
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    id?: IntFilter<"Rooms"> | number
    propertyId?: IntFilter<"Rooms"> | number
    name?: StringFilter<"Rooms"> | string
    description?: StringFilter<"Rooms"> | string
    basePrice?: DecimalFilter<"Rooms"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFilter<"Rooms"> | number
    picture?: StringNullableFilter<"Rooms"> | string | null
    createdAt?: DateTimeFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeFilter<"Rooms"> | Date | string
    property?: XOR<PropertiesRelationFilter, PropertiesWhereInput>
    reservations?: ReservationsListRelationFilter
    roomAvailabilities?: RoomAvailabilitiesListRelationFilter
    peakSeasons?: PeakSeasonsListRelationFilter
  }

  export type RoomsOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertiesOrderByWithRelationInput
    reservations?: ReservationsOrderByRelationAggregateInput
    roomAvailabilities?: RoomAvailabilitiesOrderByRelationAggregateInput
    peakSeasons?: PeakSeasonsOrderByRelationAggregateInput
  }

  export type RoomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    propertyId?: IntFilter<"Rooms"> | number
    name?: StringFilter<"Rooms"> | string
    description?: StringFilter<"Rooms"> | string
    basePrice?: DecimalFilter<"Rooms"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFilter<"Rooms"> | number
    picture?: StringNullableFilter<"Rooms"> | string | null
    createdAt?: DateTimeFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeFilter<"Rooms"> | Date | string
    property?: XOR<PropertiesRelationFilter, PropertiesWhereInput>
    reservations?: ReservationsListRelationFilter
    roomAvailabilities?: RoomAvailabilitiesListRelationFilter
    peakSeasons?: PeakSeasonsListRelationFilter
  }, "id">

  export type RoomsOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomsCountOrderByAggregateInput
    _avg?: RoomsAvgOrderByAggregateInput
    _max?: RoomsMaxOrderByAggregateInput
    _min?: RoomsMinOrderByAggregateInput
    _sum?: RoomsSumOrderByAggregateInput
  }

  export type RoomsScalarWhereWithAggregatesInput = {
    AND?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    OR?: RoomsScalarWhereWithAggregatesInput[]
    NOT?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rooms"> | number
    propertyId?: IntWithAggregatesFilter<"Rooms"> | number
    name?: StringWithAggregatesFilter<"Rooms"> | string
    description?: StringWithAggregatesFilter<"Rooms"> | string
    basePrice?: DecimalWithAggregatesFilter<"Rooms"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntWithAggregatesFilter<"Rooms"> | number
    picture?: StringNullableWithAggregatesFilter<"Rooms"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rooms"> | Date | string
  }

  export type RoomAvailabilitiesWhereInput = {
    AND?: RoomAvailabilitiesWhereInput | RoomAvailabilitiesWhereInput[]
    OR?: RoomAvailabilitiesWhereInput[]
    NOT?: RoomAvailabilitiesWhereInput | RoomAvailabilitiesWhereInput[]
    id?: IntFilter<"RoomAvailabilities"> | number
    roomId?: IntFilter<"RoomAvailabilities"> | number
    date?: DateTimeFilter<"RoomAvailabilities"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailabilities"> | boolean
    priceOverride?: DecimalNullableFilter<"RoomAvailabilities"> | Decimal | DecimalJsLike | number | string | null
    room?: XOR<RoomsRelationFilter, RoomsWhereInput>
  }

  export type RoomAvailabilitiesOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    priceOverride?: SortOrderInput | SortOrder
    room?: RoomsOrderByWithRelationInput
  }

  export type RoomAvailabilitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomId_date?: RoomAvailabilitiesRoomIdDateCompoundUniqueInput
    AND?: RoomAvailabilitiesWhereInput | RoomAvailabilitiesWhereInput[]
    OR?: RoomAvailabilitiesWhereInput[]
    NOT?: RoomAvailabilitiesWhereInput | RoomAvailabilitiesWhereInput[]
    roomId?: IntFilter<"RoomAvailabilities"> | number
    date?: DateTimeFilter<"RoomAvailabilities"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailabilities"> | boolean
    priceOverride?: DecimalNullableFilter<"RoomAvailabilities"> | Decimal | DecimalJsLike | number | string | null
    room?: XOR<RoomsRelationFilter, RoomsWhereInput>
  }, "id" | "roomId_date">

  export type RoomAvailabilitiesOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    priceOverride?: SortOrderInput | SortOrder
    _count?: RoomAvailabilitiesCountOrderByAggregateInput
    _avg?: RoomAvailabilitiesAvgOrderByAggregateInput
    _max?: RoomAvailabilitiesMaxOrderByAggregateInput
    _min?: RoomAvailabilitiesMinOrderByAggregateInput
    _sum?: RoomAvailabilitiesSumOrderByAggregateInput
  }

  export type RoomAvailabilitiesScalarWhereWithAggregatesInput = {
    AND?: RoomAvailabilitiesScalarWhereWithAggregatesInput | RoomAvailabilitiesScalarWhereWithAggregatesInput[]
    OR?: RoomAvailabilitiesScalarWhereWithAggregatesInput[]
    NOT?: RoomAvailabilitiesScalarWhereWithAggregatesInput | RoomAvailabilitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomAvailabilities"> | number
    roomId?: IntWithAggregatesFilter<"RoomAvailabilities"> | number
    date?: DateTimeWithAggregatesFilter<"RoomAvailabilities"> | Date | string
    isAvailable?: BoolWithAggregatesFilter<"RoomAvailabilities"> | boolean
    priceOverride?: DecimalNullableWithAggregatesFilter<"RoomAvailabilities"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PeakSeasonsWhereInput = {
    AND?: PeakSeasonsWhereInput | PeakSeasonsWhereInput[]
    OR?: PeakSeasonsWhereInput[]
    NOT?: PeakSeasonsWhereInput | PeakSeasonsWhereInput[]
    id?: IntFilter<"PeakSeasons"> | number
    roomId?: IntFilter<"PeakSeasons"> | number
    name?: StringFilter<"PeakSeasons"> | string
    startDate?: DateTimeFilter<"PeakSeasons"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasons"> | Date | string
    priceIncreaseType?: StringFilter<"PeakSeasons"> | string
    value?: DecimalFilter<"PeakSeasons"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PeakSeasons"> | Date | string
    propertiesId?: IntNullableFilter<"PeakSeasons"> | number | null
    room?: XOR<RoomsRelationFilter, RoomsWhereInput>
    Properties?: XOR<PropertiesNullableRelationFilter, PropertiesWhereInput> | null
  }

  export type PeakSeasonsOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    priceIncreaseType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    propertiesId?: SortOrderInput | SortOrder
    room?: RoomsOrderByWithRelationInput
    Properties?: PropertiesOrderByWithRelationInput
  }

  export type PeakSeasonsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeakSeasonsWhereInput | PeakSeasonsWhereInput[]
    OR?: PeakSeasonsWhereInput[]
    NOT?: PeakSeasonsWhereInput | PeakSeasonsWhereInput[]
    roomId?: IntFilter<"PeakSeasons"> | number
    name?: StringFilter<"PeakSeasons"> | string
    startDate?: DateTimeFilter<"PeakSeasons"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasons"> | Date | string
    priceIncreaseType?: StringFilter<"PeakSeasons"> | string
    value?: DecimalFilter<"PeakSeasons"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PeakSeasons"> | Date | string
    propertiesId?: IntNullableFilter<"PeakSeasons"> | number | null
    room?: XOR<RoomsRelationFilter, RoomsWhereInput>
    Properties?: XOR<PropertiesNullableRelationFilter, PropertiesWhereInput> | null
  }, "id">

  export type PeakSeasonsOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    priceIncreaseType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    propertiesId?: SortOrderInput | SortOrder
    _count?: PeakSeasonsCountOrderByAggregateInput
    _avg?: PeakSeasonsAvgOrderByAggregateInput
    _max?: PeakSeasonsMaxOrderByAggregateInput
    _min?: PeakSeasonsMinOrderByAggregateInput
    _sum?: PeakSeasonsSumOrderByAggregateInput
  }

  export type PeakSeasonsScalarWhereWithAggregatesInput = {
    AND?: PeakSeasonsScalarWhereWithAggregatesInput | PeakSeasonsScalarWhereWithAggregatesInput[]
    OR?: PeakSeasonsScalarWhereWithAggregatesInput[]
    NOT?: PeakSeasonsScalarWhereWithAggregatesInput | PeakSeasonsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PeakSeasons"> | number
    roomId?: IntWithAggregatesFilter<"PeakSeasons"> | number
    name?: StringWithAggregatesFilter<"PeakSeasons"> | string
    startDate?: DateTimeWithAggregatesFilter<"PeakSeasons"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"PeakSeasons"> | Date | string
    priceIncreaseType?: StringWithAggregatesFilter<"PeakSeasons"> | string
    value?: DecimalWithAggregatesFilter<"PeakSeasons"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"PeakSeasons"> | Date | string
    propertiesId?: IntNullableWithAggregatesFilter<"PeakSeasons"> | number | null
  }

  export type ReservationsWhereInput = {
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    id?: IntFilter<"Reservations"> | number
    userId?: IntFilter<"Reservations"> | number
    propertyId?: IntFilter<"Reservations"> | number
    roomId?: IntFilter<"Reservations"> | number
    checkIn?: DateTimeFilter<"Reservations"> | Date | string
    checkOut?: DateTimeFilter<"Reservations"> | Date | string
    duration?: IntFilter<"Reservations"> | number
    totalPrice?: DecimalFilter<"Reservations"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservations"> | $Enums.ReservationStatus
    reminderSentAt?: DateTimeNullableFilter<"Reservations"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    property?: XOR<PropertiesRelationFilter, PropertiesWhereInput>
    room?: XOR<RoomsRelationFilter, RoomsWhereInput>
    paymentProofs?: PaymentProofsListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type ReservationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    duration?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    reminderSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    property?: PropertiesOrderByWithRelationInput
    room?: RoomsOrderByWithRelationInput
    paymentProofs?: PaymentProofsOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type ReservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    userId?: IntFilter<"Reservations"> | number
    propertyId?: IntFilter<"Reservations"> | number
    roomId?: IntFilter<"Reservations"> | number
    checkIn?: DateTimeFilter<"Reservations"> | Date | string
    checkOut?: DateTimeFilter<"Reservations"> | Date | string
    duration?: IntFilter<"Reservations"> | number
    totalPrice?: DecimalFilter<"Reservations"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservations"> | $Enums.ReservationStatus
    reminderSentAt?: DateTimeNullableFilter<"Reservations"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    property?: XOR<PropertiesRelationFilter, PropertiesWhereInput>
    room?: XOR<RoomsRelationFilter, RoomsWhereInput>
    paymentProofs?: PaymentProofsListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "id">

  export type ReservationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    duration?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    reminderSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationsCountOrderByAggregateInput
    _avg?: ReservationsAvgOrderByAggregateInput
    _max?: ReservationsMaxOrderByAggregateInput
    _min?: ReservationsMinOrderByAggregateInput
    _sum?: ReservationsSumOrderByAggregateInput
  }

  export type ReservationsScalarWhereWithAggregatesInput = {
    AND?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    OR?: ReservationsScalarWhereWithAggregatesInput[]
    NOT?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservations"> | number
    userId?: IntWithAggregatesFilter<"Reservations"> | number
    propertyId?: IntWithAggregatesFilter<"Reservations"> | number
    roomId?: IntWithAggregatesFilter<"Reservations"> | number
    checkIn?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
    duration?: IntWithAggregatesFilter<"Reservations"> | number
    totalPrice?: DecimalWithAggregatesFilter<"Reservations"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservations"> | $Enums.ReservationStatus
    reminderSentAt?: DateTimeNullableWithAggregatesFilter<"Reservations"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
  }

  export type PaymentProofsWhereInput = {
    AND?: PaymentProofsWhereInput | PaymentProofsWhereInput[]
    OR?: PaymentProofsWhereInput[]
    NOT?: PaymentProofsWhereInput | PaymentProofsWhereInput[]
    id?: IntFilter<"PaymentProofs"> | number
    reservationId?: IntFilter<"PaymentProofs"> | number
    image?: StringFilter<"PaymentProofs"> | string
    isValid?: BoolFilter<"PaymentProofs"> | boolean
    rejectedReason?: StringNullableFilter<"PaymentProofs"> | string | null
    uploadedAt?: DateTimeFilter<"PaymentProofs"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentProofs"> | Date | string
    reservation?: XOR<ReservationsRelationFilter, ReservationsWhereInput>
  }

  export type PaymentProofsOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    image?: SortOrder
    isValid?: SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    reservation?: ReservationsOrderByWithRelationInput
  }

  export type PaymentProofsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentProofsWhereInput | PaymentProofsWhereInput[]
    OR?: PaymentProofsWhereInput[]
    NOT?: PaymentProofsWhereInput | PaymentProofsWhereInput[]
    reservationId?: IntFilter<"PaymentProofs"> | number
    image?: StringFilter<"PaymentProofs"> | string
    isValid?: BoolFilter<"PaymentProofs"> | boolean
    rejectedReason?: StringNullableFilter<"PaymentProofs"> | string | null
    uploadedAt?: DateTimeFilter<"PaymentProofs"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentProofs"> | Date | string
    reservation?: XOR<ReservationsRelationFilter, ReservationsWhereInput>
  }, "id">

  export type PaymentProofsOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    image?: SortOrder
    isValid?: SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentProofsCountOrderByAggregateInput
    _avg?: PaymentProofsAvgOrderByAggregateInput
    _max?: PaymentProofsMaxOrderByAggregateInput
    _min?: PaymentProofsMinOrderByAggregateInput
    _sum?: PaymentProofsSumOrderByAggregateInput
  }

  export type PaymentProofsScalarWhereWithAggregatesInput = {
    AND?: PaymentProofsScalarWhereWithAggregatesInput | PaymentProofsScalarWhereWithAggregatesInput[]
    OR?: PaymentProofsScalarWhereWithAggregatesInput[]
    NOT?: PaymentProofsScalarWhereWithAggregatesInput | PaymentProofsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentProofs"> | number
    reservationId?: IntWithAggregatesFilter<"PaymentProofs"> | number
    image?: StringWithAggregatesFilter<"PaymentProofs"> | string
    isValid?: BoolWithAggregatesFilter<"PaymentProofs"> | boolean
    rejectedReason?: StringNullableWithAggregatesFilter<"PaymentProofs"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"PaymentProofs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentProofs"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    propertyId?: IntFilter<"Reviews"> | number
    reservationId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    property?: XOR<PropertiesRelationFilter, PropertiesWhereInput>
    reservation?: XOR<ReservationsRelationFilter, ReservationsWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    reservationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    property?: PropertiesOrderByWithRelationInput
    reservation?: ReservationsOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_reservationId?: ReviewsUserIdReservationIdCompoundUniqueInput
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    userId?: IntFilter<"Reviews"> | number
    propertyId?: IntFilter<"Reviews"> | number
    reservationId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    property?: XOR<PropertiesRelationFilter, PropertiesWhereInput>
    reservation?: XOR<ReservationsRelationFilter, ReservationsWhereInput>
  }, "id" | "userId_reservationId">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    reservationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    userId?: IntWithAggregatesFilter<"Reviews"> | number
    propertyId?: IntWithAggregatesFilter<"Reviews"> | number
    reservationId?: IntWithAggregatesFilter<"Reviews"> | number
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringWithAggregatesFilter<"Reviews"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileCreateInput = {
    companyName: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutTenantProfileInput
  }

  export type TenantProfileUncheckedCreateInput = {
    id?: number
    userId: number
    companyName: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantProfileUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTenantProfileNestedInput
  }

  export type TenantProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileCreateManyInput = {
    id?: number
    userId: number
    companyName: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantProfileUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLoginsCreateInput = {
    provider: string
    providerId: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutSocialLoginsInput
  }

  export type SocialLoginsUncheckedCreateInput = {
    id?: number
    userId: number
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type SocialLoginsUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSocialLoginsNestedInput
  }

  export type SocialLoginsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLoginsCreateManyInput = {
    id?: number
    userId: number
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type SocialLoginsUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLoginsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationsCreateInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
    user: UsersCreateNestedOneWithoutEmailVerificationsInput
  }

  export type EmailVerificationsUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type EmailVerificationsUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutEmailVerificationsNestedInput
  }

  export type EmailVerificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationsCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type EmailVerificationsUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetPasswordsCreateInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
    user: UsersCreateNestedOneWithoutResetPasswordsInput
  }

  export type ResetPasswordsUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type ResetPasswordsUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutResetPasswordsNestedInput
  }

  export type ResetPasswordsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetPasswordsCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type ResetPasswordsUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetPasswordsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyCategoriesCreateInput = {
    name: string
    description: string
    tenant: UsersCreateNestedOneWithoutPropertyCategoriesInput
    properties?: PropertiesCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoriesUncheckedCreateInput = {
    id?: number
    tenantId: number
    name: string
    description: string
    properties?: PropertiesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tenant?: UsersUpdateOneRequiredWithoutPropertyCategoriesNestedInput
    properties?: PropertiesUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: PropertiesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoriesCreateManyInput = {
    id?: number
    tenantId: number
    name: string
    description: string
  }

  export type PropertyCategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PropertiesCreateInput = {
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: UsersCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoriesCreateNestedOneWithoutPropertiesInput
    rooms?: RoomsCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesUncheckedCreateInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsUncheckedCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UsersUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoriesUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomsUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUncheckedUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesCreateManyInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsCreateInput = {
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertiesCreateNestedOneWithoutRoomsInput
    reservations?: ReservationsCreateNestedManyWithoutRoomInput
    roomAvailabilities?: RoomAvailabilitiesCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutRoomInput
    roomAvailabilities?: RoomAvailabilitiesUncheckedCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertiesUpdateOneRequiredWithoutRoomsNestedInput
    reservations?: ReservationsUpdateManyWithoutRoomNestedInput
    roomAvailabilities?: RoomAvailabilitiesUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUncheckedUpdateManyWithoutRoomNestedInput
    roomAvailabilities?: RoomAvailabilitiesUncheckedUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsCreateManyInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilitiesCreateInput = {
    date: Date | string
    isAvailable?: boolean
    priceOverride?: Decimal | DecimalJsLike | number | string | null
    room: RoomsCreateNestedOneWithoutRoomAvailabilitiesInput
  }

  export type RoomAvailabilitiesUncheckedCreateInput = {
    id?: number
    roomId: number
    date: Date | string
    isAvailable?: boolean
    priceOverride?: Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    priceOverride?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    room?: RoomsUpdateOneRequiredWithoutRoomAvailabilitiesNestedInput
  }

  export type RoomAvailabilitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    priceOverride?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesCreateManyInput = {
    id?: number
    roomId: number
    date: Date | string
    isAvailable?: boolean
    priceOverride?: Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    priceOverride?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    priceOverride?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PeakSeasonsCreateInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    room: RoomsCreateNestedOneWithoutPeakSeasonsInput
    Properties?: PropertiesCreateNestedOneWithoutPeakSeasonsInput
  }

  export type PeakSeasonsUncheckedCreateInput = {
    id?: number
    roomId: number
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    propertiesId?: number | null
  }

  export type PeakSeasonsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomsUpdateOneRequiredWithoutPeakSeasonsNestedInput
    Properties?: PropertiesUpdateOneWithoutPeakSeasonsNestedInput
  }

  export type PeakSeasonsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertiesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PeakSeasonsCreateManyInput = {
    id?: number
    roomId: number
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    propertiesId?: number | null
  }

  export type PeakSeasonsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertiesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReservationsCreateInput = {
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutReservationsInput
    property: PropertiesCreateNestedOneWithoutReservationsInput
    room: RoomsCreateNestedOneWithoutReservationsInput
    paymentProofs?: PaymentProofsCreateNestedManyWithoutReservationInput
    reviews?: ReviewsCreateNestedManyWithoutReservationInput
  }

  export type ReservationsUncheckedCreateInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProofs?: PaymentProofsUncheckedCreateNestedManyWithoutReservationInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationsUpdateInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
    property?: PropertiesUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomsUpdateOneRequiredWithoutReservationsNestedInput
    paymentProofs?: PaymentProofsUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProofs?: PaymentProofsUncheckedUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsCreateManyInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationsUpdateManyMutationInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentProofsCreateInput = {
    image: string
    isValid?: boolean
    rejectedReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
    reservation: ReservationsCreateNestedOneWithoutPaymentProofsInput
  }

  export type PaymentProofsUncheckedCreateInput = {
    id?: number
    reservationId: number
    image: string
    isValid?: boolean
    rejectedReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentProofsUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationsUpdateOneRequiredWithoutPaymentProofsNestedInput
  }

  export type PaymentProofsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentProofsCreateManyInput = {
    id?: number
    reservationId: number
    image: string
    isValid?: boolean
    rejectedReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentProofsUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentProofsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
    property: PropertiesCreateNestedOneWithoutReviewsInput
    reservation: ReservationsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    userId: number
    propertyId: number
    reservationId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    property?: PropertiesUpdateOneRequiredWithoutReviewsNestedInput
    reservation?: ReservationsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    userId: number
    propertyId: number
    reservationId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TenantProfileNullableRelationFilter = {
    is?: TenantProfileWhereInput | null
    isNot?: TenantProfileWhereInput | null
  }

  export type PropertiesListRelationFilter = {
    every?: PropertiesWhereInput
    some?: PropertiesWhereInput
    none?: PropertiesWhereInput
  }

  export type PropertyCategoriesListRelationFilter = {
    every?: PropertyCategoriesWhereInput
    some?: PropertyCategoriesWhereInput
    none?: PropertyCategoriesWhereInput
  }

  export type ReservationsListRelationFilter = {
    every?: ReservationsWhereInput
    some?: ReservationsWhereInput
    none?: ReservationsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type EmailVerificationsListRelationFilter = {
    every?: EmailVerificationsWhereInput
    some?: EmailVerificationsWhereInput
    none?: EmailVerificationsWhereInput
  }

  export type ResetPasswordsListRelationFilter = {
    every?: ResetPasswordsWhereInput
    some?: ResetPasswordsWhereInput
    none?: ResetPasswordsWhereInput
  }

  export type SocialLoginsListRelationFilter = {
    every?: SocialLoginsWhereInput
    some?: SocialLoginsWhereInput
    none?: SocialLoginsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailVerificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResetPasswordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialLoginsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isVerified?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isVerified?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isVerified?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TenantProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TenantProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SocialLoginsProviderProviderIdCompoundUniqueInput = {
    provider: string
    providerId: string
  }

  export type SocialLoginsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialLoginsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SocialLoginsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialLoginsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialLoginsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type EmailVerificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type EmailVerificationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type EmailVerificationsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ResetPasswordsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type ResetPasswordsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ResetPasswordsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type ResetPasswordsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type ResetPasswordsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PropertyCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PropertyCategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type PropertyCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PropertyCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PropertyCategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PropertyCategoriesRelationFilter = {
    is?: PropertyCategoriesWhereInput
    isNot?: PropertyCategoriesWhereInput
  }

  export type RoomsListRelationFilter = {
    every?: RoomsWhereInput
    some?: RoomsWhereInput
    none?: RoomsWhereInput
  }

  export type PeakSeasonsListRelationFilter = {
    every?: PeakSeasonsWhereInput
    some?: PeakSeasonsWhereInput
    none?: PeakSeasonsWhereInput
  }

  export type RoomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeakSeasonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertiesCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertiesAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type PropertiesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertiesMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertiesSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PropertiesRelationFilter = {
    is?: PropertiesWhereInput
    isNot?: PropertiesWhereInput
  }

  export type RoomAvailabilitiesListRelationFilter = {
    every?: RoomAvailabilitiesWhereInput
    some?: RoomAvailabilitiesWhereInput
    none?: RoomAvailabilitiesWhereInput
  }

  export type RoomAvailabilitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomsCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomsAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
  }

  export type RoomsMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomsMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomsSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type RoomsRelationFilter = {
    is?: RoomsWhereInput
    isNot?: RoomsWhereInput
  }

  export type RoomAvailabilitiesRoomIdDateCompoundUniqueInput = {
    roomId: number
    date: Date | string
  }

  export type RoomAvailabilitiesCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    priceOverride?: SortOrder
  }

  export type RoomAvailabilitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    priceOverride?: SortOrder
  }

  export type RoomAvailabilitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    priceOverride?: SortOrder
  }

  export type RoomAvailabilitiesMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    priceOverride?: SortOrder
  }

  export type RoomAvailabilitiesSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    priceOverride?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PropertiesNullableRelationFilter = {
    is?: PropertiesWhereInput | null
    isNot?: PropertiesWhereInput | null
  }

  export type PeakSeasonsCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    priceIncreaseType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    propertiesId?: SortOrder
  }

  export type PeakSeasonsAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    value?: SortOrder
    propertiesId?: SortOrder
  }

  export type PeakSeasonsMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    priceIncreaseType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    propertiesId?: SortOrder
  }

  export type PeakSeasonsMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    priceIncreaseType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    propertiesId?: SortOrder
  }

  export type PeakSeasonsSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    value?: SortOrder
    propertiesId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentProofsListRelationFilter = {
    every?: PaymentProofsWhereInput
    some?: PaymentProofsWhereInput
    none?: PaymentProofsWhereInput
  }

  export type PaymentProofsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    duration?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    reminderSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    duration?: SortOrder
    totalPrice?: SortOrder
  }

  export type ReservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    duration?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    reminderSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    duration?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    reminderSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    duration?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReservationsRelationFilter = {
    is?: ReservationsWhereInput
    isNot?: ReservationsWhereInput
  }

  export type PaymentProofsCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    image?: SortOrder
    isValid?: SortOrder
    rejectedReason?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentProofsAvgOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
  }

  export type PaymentProofsMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    image?: SortOrder
    isValid?: SortOrder
    rejectedReason?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentProofsMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    image?: SortOrder
    isValid?: SortOrder
    rejectedReason?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentProofsSumOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
  }

  export type ReviewsUserIdReservationIdCompoundUniqueInput = {
    userId: number
    reservationId: number
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    reservationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    reservationId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    reservationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    reservationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    reservationId?: SortOrder
    rating?: SortOrder
  }

  export type TenantProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    connect?: TenantProfileWhereUniqueInput
  }

  export type PropertiesCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertiesCreateWithoutTenantInput, PropertiesUncheckedCreateWithoutTenantInput> | PropertiesCreateWithoutTenantInput[] | PropertiesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutTenantInput | PropertiesCreateOrConnectWithoutTenantInput[]
    createMany?: PropertiesCreateManyTenantInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type PropertyCategoriesCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCategoriesCreateWithoutTenantInput, PropertyCategoriesUncheckedCreateWithoutTenantInput> | PropertyCategoriesCreateWithoutTenantInput[] | PropertyCategoriesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoriesCreateOrConnectWithoutTenantInput | PropertyCategoriesCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCategoriesCreateManyTenantInputEnvelope
    connect?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
  }

  export type ReservationsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type EmailVerificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationsCreateWithoutUserInput, EmailVerificationsUncheckedCreateWithoutUserInput> | EmailVerificationsCreateWithoutUserInput[] | EmailVerificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationsCreateOrConnectWithoutUserInput | EmailVerificationsCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationsCreateManyUserInputEnvelope
    connect?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
  }

  export type ResetPasswordsCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetPasswordsCreateWithoutUserInput, ResetPasswordsUncheckedCreateWithoutUserInput> | ResetPasswordsCreateWithoutUserInput[] | ResetPasswordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordsCreateOrConnectWithoutUserInput | ResetPasswordsCreateOrConnectWithoutUserInput[]
    createMany?: ResetPasswordsCreateManyUserInputEnvelope
    connect?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
  }

  export type SocialLoginsCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialLoginsCreateWithoutUserInput, SocialLoginsUncheckedCreateWithoutUserInput> | SocialLoginsCreateWithoutUserInput[] | SocialLoginsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutUserInput | SocialLoginsCreateOrConnectWithoutUserInput[]
    createMany?: SocialLoginsCreateManyUserInputEnvelope
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
  }

  export type TenantProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    connect?: TenantProfileWhereUniqueInput
  }

  export type PropertiesUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertiesCreateWithoutTenantInput, PropertiesUncheckedCreateWithoutTenantInput> | PropertiesCreateWithoutTenantInput[] | PropertiesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutTenantInput | PropertiesCreateOrConnectWithoutTenantInput[]
    createMany?: PropertiesCreateManyTenantInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCategoriesCreateWithoutTenantInput, PropertyCategoriesUncheckedCreateWithoutTenantInput> | PropertyCategoriesCreateWithoutTenantInput[] | PropertyCategoriesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoriesCreateOrConnectWithoutTenantInput | PropertyCategoriesCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCategoriesCreateManyTenantInputEnvelope
    connect?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type EmailVerificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationsCreateWithoutUserInput, EmailVerificationsUncheckedCreateWithoutUserInput> | EmailVerificationsCreateWithoutUserInput[] | EmailVerificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationsCreateOrConnectWithoutUserInput | EmailVerificationsCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationsCreateManyUserInputEnvelope
    connect?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
  }

  export type ResetPasswordsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetPasswordsCreateWithoutUserInput, ResetPasswordsUncheckedCreateWithoutUserInput> | ResetPasswordsCreateWithoutUserInput[] | ResetPasswordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordsCreateOrConnectWithoutUserInput | ResetPasswordsCreateOrConnectWithoutUserInput[]
    createMany?: ResetPasswordsCreateManyUserInputEnvelope
    connect?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
  }

  export type SocialLoginsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialLoginsCreateWithoutUserInput, SocialLoginsUncheckedCreateWithoutUserInput> | SocialLoginsCreateWithoutUserInput[] | SocialLoginsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutUserInput | SocialLoginsCreateOrConnectWithoutUserInput[]
    createMany?: SocialLoginsCreateManyUserInputEnvelope
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TenantProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    upsert?: TenantProfileUpsertWithoutUserInput
    disconnect?: TenantProfileWhereInput | boolean
    delete?: TenantProfileWhereInput | boolean
    connect?: TenantProfileWhereUniqueInput
    update?: XOR<XOR<TenantProfileUpdateToOneWithWhereWithoutUserInput, TenantProfileUpdateWithoutUserInput>, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type PropertiesUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertiesCreateWithoutTenantInput, PropertiesUncheckedCreateWithoutTenantInput> | PropertiesCreateWithoutTenantInput[] | PropertiesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutTenantInput | PropertiesCreateOrConnectWithoutTenantInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutTenantInput | PropertiesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertiesCreateManyTenantInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutTenantInput | PropertiesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutTenantInput | PropertiesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type PropertyCategoriesUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCategoriesCreateWithoutTenantInput, PropertyCategoriesUncheckedCreateWithoutTenantInput> | PropertyCategoriesCreateWithoutTenantInput[] | PropertyCategoriesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoriesCreateOrConnectWithoutTenantInput | PropertyCategoriesCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyCategoriesUpsertWithWhereUniqueWithoutTenantInput | PropertyCategoriesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCategoriesCreateManyTenantInputEnvelope
    set?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    disconnect?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    delete?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    connect?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    update?: PropertyCategoriesUpdateWithWhereUniqueWithoutTenantInput | PropertyCategoriesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyCategoriesUpdateManyWithWhereWithoutTenantInput | PropertyCategoriesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyCategoriesScalarWhereInput | PropertyCategoriesScalarWhereInput[]
  }

  export type ReservationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutUserInput | ReservationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutUserInput | ReservationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutUserInput | ReservationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type EmailVerificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationsCreateWithoutUserInput, EmailVerificationsUncheckedCreateWithoutUserInput> | EmailVerificationsCreateWithoutUserInput[] | EmailVerificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationsCreateOrConnectWithoutUserInput | EmailVerificationsCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationsUpsertWithWhereUniqueWithoutUserInput | EmailVerificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationsCreateManyUserInputEnvelope
    set?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    disconnect?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    delete?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    connect?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    update?: EmailVerificationsUpdateWithWhereUniqueWithoutUserInput | EmailVerificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationsUpdateManyWithWhereWithoutUserInput | EmailVerificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationsScalarWhereInput | EmailVerificationsScalarWhereInput[]
  }

  export type ResetPasswordsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetPasswordsCreateWithoutUserInput, ResetPasswordsUncheckedCreateWithoutUserInput> | ResetPasswordsCreateWithoutUserInput[] | ResetPasswordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordsCreateOrConnectWithoutUserInput | ResetPasswordsCreateOrConnectWithoutUserInput[]
    upsert?: ResetPasswordsUpsertWithWhereUniqueWithoutUserInput | ResetPasswordsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetPasswordsCreateManyUserInputEnvelope
    set?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    disconnect?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    delete?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    connect?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    update?: ResetPasswordsUpdateWithWhereUniqueWithoutUserInput | ResetPasswordsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetPasswordsUpdateManyWithWhereWithoutUserInput | ResetPasswordsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetPasswordsScalarWhereInput | ResetPasswordsScalarWhereInput[]
  }

  export type SocialLoginsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialLoginsCreateWithoutUserInput, SocialLoginsUncheckedCreateWithoutUserInput> | SocialLoginsCreateWithoutUserInput[] | SocialLoginsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutUserInput | SocialLoginsCreateOrConnectWithoutUserInput[]
    upsert?: SocialLoginsUpsertWithWhereUniqueWithoutUserInput | SocialLoginsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialLoginsCreateManyUserInputEnvelope
    set?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    disconnect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    delete?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    update?: SocialLoginsUpdateWithWhereUniqueWithoutUserInput | SocialLoginsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialLoginsUpdateManyWithWhereWithoutUserInput | SocialLoginsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    upsert?: TenantProfileUpsertWithoutUserInput
    disconnect?: TenantProfileWhereInput | boolean
    delete?: TenantProfileWhereInput | boolean
    connect?: TenantProfileWhereUniqueInput
    update?: XOR<XOR<TenantProfileUpdateToOneWithWhereWithoutUserInput, TenantProfileUpdateWithoutUserInput>, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type PropertiesUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertiesCreateWithoutTenantInput, PropertiesUncheckedCreateWithoutTenantInput> | PropertiesCreateWithoutTenantInput[] | PropertiesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutTenantInput | PropertiesCreateOrConnectWithoutTenantInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutTenantInput | PropertiesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertiesCreateManyTenantInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutTenantInput | PropertiesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutTenantInput | PropertiesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCategoriesCreateWithoutTenantInput, PropertyCategoriesUncheckedCreateWithoutTenantInput> | PropertyCategoriesCreateWithoutTenantInput[] | PropertyCategoriesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCategoriesCreateOrConnectWithoutTenantInput | PropertyCategoriesCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyCategoriesUpsertWithWhereUniqueWithoutTenantInput | PropertyCategoriesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCategoriesCreateManyTenantInputEnvelope
    set?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    disconnect?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    delete?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    connect?: PropertyCategoriesWhereUniqueInput | PropertyCategoriesWhereUniqueInput[]
    update?: PropertyCategoriesUpdateWithWhereUniqueWithoutTenantInput | PropertyCategoriesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyCategoriesUpdateManyWithWhereWithoutTenantInput | PropertyCategoriesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyCategoriesScalarWhereInput | PropertyCategoriesScalarWhereInput[]
  }

  export type ReservationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutUserInput | ReservationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutUserInput | ReservationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutUserInput | ReservationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationsCreateWithoutUserInput, EmailVerificationsUncheckedCreateWithoutUserInput> | EmailVerificationsCreateWithoutUserInput[] | EmailVerificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationsCreateOrConnectWithoutUserInput | EmailVerificationsCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationsUpsertWithWhereUniqueWithoutUserInput | EmailVerificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationsCreateManyUserInputEnvelope
    set?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    disconnect?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    delete?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    connect?: EmailVerificationsWhereUniqueInput | EmailVerificationsWhereUniqueInput[]
    update?: EmailVerificationsUpdateWithWhereUniqueWithoutUserInput | EmailVerificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationsUpdateManyWithWhereWithoutUserInput | EmailVerificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationsScalarWhereInput | EmailVerificationsScalarWhereInput[]
  }

  export type ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetPasswordsCreateWithoutUserInput, ResetPasswordsUncheckedCreateWithoutUserInput> | ResetPasswordsCreateWithoutUserInput[] | ResetPasswordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordsCreateOrConnectWithoutUserInput | ResetPasswordsCreateOrConnectWithoutUserInput[]
    upsert?: ResetPasswordsUpsertWithWhereUniqueWithoutUserInput | ResetPasswordsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetPasswordsCreateManyUserInputEnvelope
    set?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    disconnect?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    delete?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    connect?: ResetPasswordsWhereUniqueInput | ResetPasswordsWhereUniqueInput[]
    update?: ResetPasswordsUpdateWithWhereUniqueWithoutUserInput | ResetPasswordsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetPasswordsUpdateManyWithWhereWithoutUserInput | ResetPasswordsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetPasswordsScalarWhereInput | ResetPasswordsScalarWhereInput[]
  }

  export type SocialLoginsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialLoginsCreateWithoutUserInput, SocialLoginsUncheckedCreateWithoutUserInput> | SocialLoginsCreateWithoutUserInput[] | SocialLoginsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutUserInput | SocialLoginsCreateOrConnectWithoutUserInput[]
    upsert?: SocialLoginsUpsertWithWhereUniqueWithoutUserInput | SocialLoginsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialLoginsCreateManyUserInputEnvelope
    set?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    disconnect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    delete?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[]
    update?: SocialLoginsUpdateWithWhereUniqueWithoutUserInput | SocialLoginsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialLoginsUpdateManyWithWhereWithoutUserInput | SocialLoginsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTenantProfileInput = {
    create?: XOR<UsersCreateWithoutTenantProfileInput, UsersUncheckedCreateWithoutTenantProfileInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTenantProfileInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTenantProfileNestedInput = {
    create?: XOR<UsersCreateWithoutTenantProfileInput, UsersUncheckedCreateWithoutTenantProfileInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTenantProfileInput
    upsert?: UsersUpsertWithoutTenantProfileInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTenantProfileInput, UsersUpdateWithoutTenantProfileInput>, UsersUncheckedUpdateWithoutTenantProfileInput>
  }

  export type UsersCreateNestedOneWithoutSocialLoginsInput = {
    create?: XOR<UsersCreateWithoutSocialLoginsInput, UsersUncheckedCreateWithoutSocialLoginsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSocialLoginsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSocialLoginsNestedInput = {
    create?: XOR<UsersCreateWithoutSocialLoginsInput, UsersUncheckedCreateWithoutSocialLoginsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSocialLoginsInput
    upsert?: UsersUpsertWithoutSocialLoginsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSocialLoginsInput, UsersUpdateWithoutSocialLoginsInput>, UsersUncheckedUpdateWithoutSocialLoginsInput>
  }

  export type UsersCreateNestedOneWithoutEmailVerificationsInput = {
    create?: XOR<UsersCreateWithoutEmailVerificationsInput, UsersUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmailVerificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutEmailVerificationsNestedInput = {
    create?: XOR<UsersCreateWithoutEmailVerificationsInput, UsersUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmailVerificationsInput
    upsert?: UsersUpsertWithoutEmailVerificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEmailVerificationsInput, UsersUpdateWithoutEmailVerificationsInput>, UsersUncheckedUpdateWithoutEmailVerificationsInput>
  }

  export type UsersCreateNestedOneWithoutResetPasswordsInput = {
    create?: XOR<UsersCreateWithoutResetPasswordsInput, UsersUncheckedCreateWithoutResetPasswordsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutResetPasswordsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutResetPasswordsNestedInput = {
    create?: XOR<UsersCreateWithoutResetPasswordsInput, UsersUncheckedCreateWithoutResetPasswordsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutResetPasswordsInput
    upsert?: UsersUpsertWithoutResetPasswordsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutResetPasswordsInput, UsersUpdateWithoutResetPasswordsInput>, UsersUncheckedUpdateWithoutResetPasswordsInput>
  }

  export type UsersCreateNestedOneWithoutPropertyCategoriesInput = {
    create?: XOR<UsersCreateWithoutPropertyCategoriesInput, UsersUncheckedCreateWithoutPropertyCategoriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPropertyCategoriesInput
    connect?: UsersWhereUniqueInput
  }

  export type PropertiesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertiesCreateWithoutCategoryInput, PropertiesUncheckedCreateWithoutCategoryInput> | PropertiesCreateWithoutCategoryInput[] | PropertiesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutCategoryInput | PropertiesCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertiesCreateManyCategoryInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type PropertiesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertiesCreateWithoutCategoryInput, PropertiesUncheckedCreateWithoutCategoryInput> | PropertiesCreateWithoutCategoryInput[] | PropertiesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutCategoryInput | PropertiesCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertiesCreateManyCategoryInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutPropertyCategoriesNestedInput = {
    create?: XOR<UsersCreateWithoutPropertyCategoriesInput, UsersUncheckedCreateWithoutPropertyCategoriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPropertyCategoriesInput
    upsert?: UsersUpsertWithoutPropertyCategoriesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPropertyCategoriesInput, UsersUpdateWithoutPropertyCategoriesInput>, UsersUncheckedUpdateWithoutPropertyCategoriesInput>
  }

  export type PropertiesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertiesCreateWithoutCategoryInput, PropertiesUncheckedCreateWithoutCategoryInput> | PropertiesCreateWithoutCategoryInput[] | PropertiesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutCategoryInput | PropertiesCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutCategoryInput | PropertiesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertiesCreateManyCategoryInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutCategoryInput | PropertiesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutCategoryInput | PropertiesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type PropertiesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertiesCreateWithoutCategoryInput, PropertiesUncheckedCreateWithoutCategoryInput> | PropertiesCreateWithoutCategoryInput[] | PropertiesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutCategoryInput | PropertiesCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutCategoryInput | PropertiesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertiesCreateManyCategoryInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutCategoryInput | PropertiesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutCategoryInput | PropertiesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UsersCreateWithoutPropertiesInput, UsersUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPropertiesInput
    connect?: UsersWhereUniqueInput
  }

  export type PropertyCategoriesCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<PropertyCategoriesCreateWithoutPropertiesInput, PropertyCategoriesUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoriesCreateOrConnectWithoutPropertiesInput
    connect?: PropertyCategoriesWhereUniqueInput
  }

  export type RoomsCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomsCreateWithoutPropertyInput, RoomsUncheckedCreateWithoutPropertyInput> | RoomsCreateWithoutPropertyInput[] | RoomsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutPropertyInput | RoomsCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomsCreateManyPropertyInputEnvelope
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
  }

  export type ReservationsCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReservationsCreateWithoutPropertyInput, ReservationsUncheckedCreateWithoutPropertyInput> | ReservationsCreateWithoutPropertyInput[] | ReservationsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutPropertyInput | ReservationsCreateOrConnectWithoutPropertyInput[]
    createMany?: ReservationsCreateManyPropertyInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewsCreateWithoutPropertyInput, ReviewsUncheckedCreateWithoutPropertyInput> | ReviewsCreateWithoutPropertyInput[] | ReviewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPropertyInput | ReviewsCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewsCreateManyPropertyInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PeakSeasonsCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<PeakSeasonsCreateWithoutPropertiesInput, PeakSeasonsUncheckedCreateWithoutPropertiesInput> | PeakSeasonsCreateWithoutPropertiesInput[] | PeakSeasonsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutPropertiesInput | PeakSeasonsCreateOrConnectWithoutPropertiesInput[]
    createMany?: PeakSeasonsCreateManyPropertiesInputEnvelope
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
  }

  export type RoomsUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomsCreateWithoutPropertyInput, RoomsUncheckedCreateWithoutPropertyInput> | RoomsCreateWithoutPropertyInput[] | RoomsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutPropertyInput | RoomsCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomsCreateManyPropertyInputEnvelope
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReservationsCreateWithoutPropertyInput, ReservationsUncheckedCreateWithoutPropertyInput> | ReservationsCreateWithoutPropertyInput[] | ReservationsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutPropertyInput | ReservationsCreateOrConnectWithoutPropertyInput[]
    createMany?: ReservationsCreateManyPropertyInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewsCreateWithoutPropertyInput, ReviewsUncheckedCreateWithoutPropertyInput> | ReviewsCreateWithoutPropertyInput[] | ReviewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPropertyInput | ReviewsCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewsCreateManyPropertyInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PeakSeasonsUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<PeakSeasonsCreateWithoutPropertiesInput, PeakSeasonsUncheckedCreateWithoutPropertiesInput> | PeakSeasonsCreateWithoutPropertiesInput[] | PeakSeasonsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutPropertiesInput | PeakSeasonsCreateOrConnectWithoutPropertiesInput[]
    createMany?: PeakSeasonsCreateManyPropertiesInputEnvelope
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UsersUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UsersCreateWithoutPropertiesInput, UsersUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPropertiesInput
    upsert?: UsersUpsertWithoutPropertiesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPropertiesInput, UsersUpdateWithoutPropertiesInput>, UsersUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyCategoriesUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<PropertyCategoriesCreateWithoutPropertiesInput, PropertyCategoriesUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoriesCreateOrConnectWithoutPropertiesInput
    upsert?: PropertyCategoriesUpsertWithoutPropertiesInput
    connect?: PropertyCategoriesWhereUniqueInput
    update?: XOR<XOR<PropertyCategoriesUpdateToOneWithWhereWithoutPropertiesInput, PropertyCategoriesUpdateWithoutPropertiesInput>, PropertyCategoriesUncheckedUpdateWithoutPropertiesInput>
  }

  export type RoomsUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomsCreateWithoutPropertyInput, RoomsUncheckedCreateWithoutPropertyInput> | RoomsCreateWithoutPropertyInput[] | RoomsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutPropertyInput | RoomsCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomsUpsertWithWhereUniqueWithoutPropertyInput | RoomsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomsCreateManyPropertyInputEnvelope
    set?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    disconnect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    delete?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    update?: RoomsUpdateWithWhereUniqueWithoutPropertyInput | RoomsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomsUpdateManyWithWhereWithoutPropertyInput | RoomsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
  }

  export type ReservationsUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReservationsCreateWithoutPropertyInput, ReservationsUncheckedCreateWithoutPropertyInput> | ReservationsCreateWithoutPropertyInput[] | ReservationsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutPropertyInput | ReservationsCreateOrConnectWithoutPropertyInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutPropertyInput | ReservationsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReservationsCreateManyPropertyInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutPropertyInput | ReservationsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutPropertyInput | ReservationsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewsCreateWithoutPropertyInput, ReviewsUncheckedCreateWithoutPropertyInput> | ReviewsCreateWithoutPropertyInput[] | ReviewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPropertyInput | ReviewsCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutPropertyInput | ReviewsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewsCreateManyPropertyInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutPropertyInput | ReviewsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutPropertyInput | ReviewsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PeakSeasonsUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<PeakSeasonsCreateWithoutPropertiesInput, PeakSeasonsUncheckedCreateWithoutPropertiesInput> | PeakSeasonsCreateWithoutPropertiesInput[] | PeakSeasonsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutPropertiesInput | PeakSeasonsCreateOrConnectWithoutPropertiesInput[]
    upsert?: PeakSeasonsUpsertWithWhereUniqueWithoutPropertiesInput | PeakSeasonsUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: PeakSeasonsCreateManyPropertiesInputEnvelope
    set?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    disconnect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    delete?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    update?: PeakSeasonsUpdateWithWhereUniqueWithoutPropertiesInput | PeakSeasonsUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: PeakSeasonsUpdateManyWithWhereWithoutPropertiesInput | PeakSeasonsUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: PeakSeasonsScalarWhereInput | PeakSeasonsScalarWhereInput[]
  }

  export type RoomsUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomsCreateWithoutPropertyInput, RoomsUncheckedCreateWithoutPropertyInput> | RoomsCreateWithoutPropertyInput[] | RoomsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutPropertyInput | RoomsCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomsUpsertWithWhereUniqueWithoutPropertyInput | RoomsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomsCreateManyPropertyInputEnvelope
    set?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    disconnect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    delete?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    update?: RoomsUpdateWithWhereUniqueWithoutPropertyInput | RoomsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomsUpdateManyWithWhereWithoutPropertyInput | RoomsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
  }

  export type ReservationsUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReservationsCreateWithoutPropertyInput, ReservationsUncheckedCreateWithoutPropertyInput> | ReservationsCreateWithoutPropertyInput[] | ReservationsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutPropertyInput | ReservationsCreateOrConnectWithoutPropertyInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutPropertyInput | ReservationsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReservationsCreateManyPropertyInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutPropertyInput | ReservationsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutPropertyInput | ReservationsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewsCreateWithoutPropertyInput, ReviewsUncheckedCreateWithoutPropertyInput> | ReviewsCreateWithoutPropertyInput[] | ReviewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPropertyInput | ReviewsCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutPropertyInput | ReviewsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewsCreateManyPropertyInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutPropertyInput | ReviewsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutPropertyInput | ReviewsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PeakSeasonsUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<PeakSeasonsCreateWithoutPropertiesInput, PeakSeasonsUncheckedCreateWithoutPropertiesInput> | PeakSeasonsCreateWithoutPropertiesInput[] | PeakSeasonsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutPropertiesInput | PeakSeasonsCreateOrConnectWithoutPropertiesInput[]
    upsert?: PeakSeasonsUpsertWithWhereUniqueWithoutPropertiesInput | PeakSeasonsUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: PeakSeasonsCreateManyPropertiesInputEnvelope
    set?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    disconnect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    delete?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    update?: PeakSeasonsUpdateWithWhereUniqueWithoutPropertiesInput | PeakSeasonsUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: PeakSeasonsUpdateManyWithWhereWithoutPropertiesInput | PeakSeasonsUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: PeakSeasonsScalarWhereInput | PeakSeasonsScalarWhereInput[]
  }

  export type PropertiesCreateNestedOneWithoutRoomsInput = {
    create?: XOR<PropertiesCreateWithoutRoomsInput, PropertiesUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutRoomsInput
    connect?: PropertiesWhereUniqueInput
  }

  export type ReservationsCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationsCreateWithoutRoomInput, ReservationsUncheckedCreateWithoutRoomInput> | ReservationsCreateWithoutRoomInput[] | ReservationsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutRoomInput | ReservationsCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationsCreateManyRoomInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type RoomAvailabilitiesCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilitiesCreateWithoutRoomInput, RoomAvailabilitiesUncheckedCreateWithoutRoomInput> | RoomAvailabilitiesCreateWithoutRoomInput[] | RoomAvailabilitiesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilitiesCreateOrConnectWithoutRoomInput | RoomAvailabilitiesCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilitiesCreateManyRoomInputEnvelope
    connect?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
  }

  export type PeakSeasonsCreateNestedManyWithoutRoomInput = {
    create?: XOR<PeakSeasonsCreateWithoutRoomInput, PeakSeasonsUncheckedCreateWithoutRoomInput> | PeakSeasonsCreateWithoutRoomInput[] | PeakSeasonsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutRoomInput | PeakSeasonsCreateOrConnectWithoutRoomInput[]
    createMany?: PeakSeasonsCreateManyRoomInputEnvelope
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationsCreateWithoutRoomInput, ReservationsUncheckedCreateWithoutRoomInput> | ReservationsCreateWithoutRoomInput[] | ReservationsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutRoomInput | ReservationsCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationsCreateManyRoomInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type RoomAvailabilitiesUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilitiesCreateWithoutRoomInput, RoomAvailabilitiesUncheckedCreateWithoutRoomInput> | RoomAvailabilitiesCreateWithoutRoomInput[] | RoomAvailabilitiesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilitiesCreateOrConnectWithoutRoomInput | RoomAvailabilitiesCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilitiesCreateManyRoomInputEnvelope
    connect?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
  }

  export type PeakSeasonsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PeakSeasonsCreateWithoutRoomInput, PeakSeasonsUncheckedCreateWithoutRoomInput> | PeakSeasonsCreateWithoutRoomInput[] | PeakSeasonsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutRoomInput | PeakSeasonsCreateOrConnectWithoutRoomInput[]
    createMany?: PeakSeasonsCreateManyRoomInputEnvelope
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PropertiesUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<PropertiesCreateWithoutRoomsInput, PropertiesUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutRoomsInput
    upsert?: PropertiesUpsertWithoutRoomsInput
    connect?: PropertiesWhereUniqueInput
    update?: XOR<XOR<PropertiesUpdateToOneWithWhereWithoutRoomsInput, PropertiesUpdateWithoutRoomsInput>, PropertiesUncheckedUpdateWithoutRoomsInput>
  }

  export type ReservationsUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationsCreateWithoutRoomInput, ReservationsUncheckedCreateWithoutRoomInput> | ReservationsCreateWithoutRoomInput[] | ReservationsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutRoomInput | ReservationsCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutRoomInput | ReservationsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationsCreateManyRoomInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutRoomInput | ReservationsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutRoomInput | ReservationsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type RoomAvailabilitiesUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilitiesCreateWithoutRoomInput, RoomAvailabilitiesUncheckedCreateWithoutRoomInput> | RoomAvailabilitiesCreateWithoutRoomInput[] | RoomAvailabilitiesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilitiesCreateOrConnectWithoutRoomInput | RoomAvailabilitiesCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilitiesUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilitiesUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilitiesCreateManyRoomInputEnvelope
    set?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    disconnect?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    delete?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    connect?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    update?: RoomAvailabilitiesUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilitiesUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilitiesUpdateManyWithWhereWithoutRoomInput | RoomAvailabilitiesUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilitiesScalarWhereInput | RoomAvailabilitiesScalarWhereInput[]
  }

  export type PeakSeasonsUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PeakSeasonsCreateWithoutRoomInput, PeakSeasonsUncheckedCreateWithoutRoomInput> | PeakSeasonsCreateWithoutRoomInput[] | PeakSeasonsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutRoomInput | PeakSeasonsCreateOrConnectWithoutRoomInput[]
    upsert?: PeakSeasonsUpsertWithWhereUniqueWithoutRoomInput | PeakSeasonsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PeakSeasonsCreateManyRoomInputEnvelope
    set?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    disconnect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    delete?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    update?: PeakSeasonsUpdateWithWhereUniqueWithoutRoomInput | PeakSeasonsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PeakSeasonsUpdateManyWithWhereWithoutRoomInput | PeakSeasonsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PeakSeasonsScalarWhereInput | PeakSeasonsScalarWhereInput[]
  }

  export type ReservationsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationsCreateWithoutRoomInput, ReservationsUncheckedCreateWithoutRoomInput> | ReservationsCreateWithoutRoomInput[] | ReservationsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutRoomInput | ReservationsCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutRoomInput | ReservationsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationsCreateManyRoomInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutRoomInput | ReservationsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutRoomInput | ReservationsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type RoomAvailabilitiesUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilitiesCreateWithoutRoomInput, RoomAvailabilitiesUncheckedCreateWithoutRoomInput> | RoomAvailabilitiesCreateWithoutRoomInput[] | RoomAvailabilitiesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilitiesCreateOrConnectWithoutRoomInput | RoomAvailabilitiesCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilitiesUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilitiesUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilitiesCreateManyRoomInputEnvelope
    set?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    disconnect?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    delete?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    connect?: RoomAvailabilitiesWhereUniqueInput | RoomAvailabilitiesWhereUniqueInput[]
    update?: RoomAvailabilitiesUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilitiesUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilitiesUpdateManyWithWhereWithoutRoomInput | RoomAvailabilitiesUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilitiesScalarWhereInput | RoomAvailabilitiesScalarWhereInput[]
  }

  export type PeakSeasonsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PeakSeasonsCreateWithoutRoomInput, PeakSeasonsUncheckedCreateWithoutRoomInput> | PeakSeasonsCreateWithoutRoomInput[] | PeakSeasonsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonsCreateOrConnectWithoutRoomInput | PeakSeasonsCreateOrConnectWithoutRoomInput[]
    upsert?: PeakSeasonsUpsertWithWhereUniqueWithoutRoomInput | PeakSeasonsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PeakSeasonsCreateManyRoomInputEnvelope
    set?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    disconnect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    delete?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    connect?: PeakSeasonsWhereUniqueInput | PeakSeasonsWhereUniqueInput[]
    update?: PeakSeasonsUpdateWithWhereUniqueWithoutRoomInput | PeakSeasonsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PeakSeasonsUpdateManyWithWhereWithoutRoomInput | PeakSeasonsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PeakSeasonsScalarWhereInput | PeakSeasonsScalarWhereInput[]
  }

  export type RoomsCreateNestedOneWithoutRoomAvailabilitiesInput = {
    create?: XOR<RoomsCreateWithoutRoomAvailabilitiesInput, RoomsUncheckedCreateWithoutRoomAvailabilitiesInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutRoomAvailabilitiesInput
    connect?: RoomsWhereUniqueInput
  }

  export type RoomsUpdateOneRequiredWithoutRoomAvailabilitiesNestedInput = {
    create?: XOR<RoomsCreateWithoutRoomAvailabilitiesInput, RoomsUncheckedCreateWithoutRoomAvailabilitiesInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutRoomAvailabilitiesInput
    upsert?: RoomsUpsertWithoutRoomAvailabilitiesInput
    connect?: RoomsWhereUniqueInput
    update?: XOR<XOR<RoomsUpdateToOneWithWhereWithoutRoomAvailabilitiesInput, RoomsUpdateWithoutRoomAvailabilitiesInput>, RoomsUncheckedUpdateWithoutRoomAvailabilitiesInput>
  }

  export type RoomsCreateNestedOneWithoutPeakSeasonsInput = {
    create?: XOR<RoomsCreateWithoutPeakSeasonsInput, RoomsUncheckedCreateWithoutPeakSeasonsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutPeakSeasonsInput
    connect?: RoomsWhereUniqueInput
  }

  export type PropertiesCreateNestedOneWithoutPeakSeasonsInput = {
    create?: XOR<PropertiesCreateWithoutPeakSeasonsInput, PropertiesUncheckedCreateWithoutPeakSeasonsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutPeakSeasonsInput
    connect?: PropertiesWhereUniqueInput
  }

  export type RoomsUpdateOneRequiredWithoutPeakSeasonsNestedInput = {
    create?: XOR<RoomsCreateWithoutPeakSeasonsInput, RoomsUncheckedCreateWithoutPeakSeasonsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutPeakSeasonsInput
    upsert?: RoomsUpsertWithoutPeakSeasonsInput
    connect?: RoomsWhereUniqueInput
    update?: XOR<XOR<RoomsUpdateToOneWithWhereWithoutPeakSeasonsInput, RoomsUpdateWithoutPeakSeasonsInput>, RoomsUncheckedUpdateWithoutPeakSeasonsInput>
  }

  export type PropertiesUpdateOneWithoutPeakSeasonsNestedInput = {
    create?: XOR<PropertiesCreateWithoutPeakSeasonsInput, PropertiesUncheckedCreateWithoutPeakSeasonsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutPeakSeasonsInput
    upsert?: PropertiesUpsertWithoutPeakSeasonsInput
    disconnect?: PropertiesWhereInput | boolean
    delete?: PropertiesWhereInput | boolean
    connect?: PropertiesWhereUniqueInput
    update?: XOR<XOR<PropertiesUpdateToOneWithWhereWithoutPeakSeasonsInput, PropertiesUpdateWithoutPeakSeasonsInput>, PropertiesUncheckedUpdateWithoutPeakSeasonsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReservationsInput
    connect?: UsersWhereUniqueInput
  }

  export type PropertiesCreateNestedOneWithoutReservationsInput = {
    create?: XOR<PropertiesCreateWithoutReservationsInput, PropertiesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutReservationsInput
    connect?: PropertiesWhereUniqueInput
  }

  export type RoomsCreateNestedOneWithoutReservationsInput = {
    create?: XOR<RoomsCreateWithoutReservationsInput, RoomsUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutReservationsInput
    connect?: RoomsWhereUniqueInput
  }

  export type PaymentProofsCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentProofsCreateWithoutReservationInput, PaymentProofsUncheckedCreateWithoutReservationInput> | PaymentProofsCreateWithoutReservationInput[] | PaymentProofsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentProofsCreateOrConnectWithoutReservationInput | PaymentProofsCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentProofsCreateManyReservationInputEnvelope
    connect?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReviewsCreateWithoutReservationInput, ReviewsUncheckedCreateWithoutReservationInput> | ReviewsCreateWithoutReservationInput[] | ReviewsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReservationInput | ReviewsCreateOrConnectWithoutReservationInput[]
    createMany?: ReviewsCreateManyReservationInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PaymentProofsUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentProofsCreateWithoutReservationInput, PaymentProofsUncheckedCreateWithoutReservationInput> | PaymentProofsCreateWithoutReservationInput[] | PaymentProofsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentProofsCreateOrConnectWithoutReservationInput | PaymentProofsCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentProofsCreateManyReservationInputEnvelope
    connect?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReviewsCreateWithoutReservationInput, ReviewsUncheckedCreateWithoutReservationInput> | ReviewsCreateWithoutReservationInput[] | ReviewsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReservationInput | ReviewsCreateOrConnectWithoutReservationInput[]
    createMany?: ReviewsCreateManyReservationInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReservationsInput
    upsert?: UsersUpsertWithoutReservationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReservationsInput, UsersUpdateWithoutReservationsInput>, UsersUncheckedUpdateWithoutReservationsInput>
  }

  export type PropertiesUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<PropertiesCreateWithoutReservationsInput, PropertiesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutReservationsInput
    upsert?: PropertiesUpsertWithoutReservationsInput
    connect?: PropertiesWhereUniqueInput
    update?: XOR<XOR<PropertiesUpdateToOneWithWhereWithoutReservationsInput, PropertiesUpdateWithoutReservationsInput>, PropertiesUncheckedUpdateWithoutReservationsInput>
  }

  export type RoomsUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<RoomsCreateWithoutReservationsInput, RoomsUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutReservationsInput
    upsert?: RoomsUpsertWithoutReservationsInput
    connect?: RoomsWhereUniqueInput
    update?: XOR<XOR<RoomsUpdateToOneWithWhereWithoutReservationsInput, RoomsUpdateWithoutReservationsInput>, RoomsUncheckedUpdateWithoutReservationsInput>
  }

  export type PaymentProofsUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentProofsCreateWithoutReservationInput, PaymentProofsUncheckedCreateWithoutReservationInput> | PaymentProofsCreateWithoutReservationInput[] | PaymentProofsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentProofsCreateOrConnectWithoutReservationInput | PaymentProofsCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentProofsUpsertWithWhereUniqueWithoutReservationInput | PaymentProofsUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentProofsCreateManyReservationInputEnvelope
    set?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    disconnect?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    delete?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    connect?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    update?: PaymentProofsUpdateWithWhereUniqueWithoutReservationInput | PaymentProofsUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentProofsUpdateManyWithWhereWithoutReservationInput | PaymentProofsUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentProofsScalarWhereInput | PaymentProofsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReviewsCreateWithoutReservationInput, ReviewsUncheckedCreateWithoutReservationInput> | ReviewsCreateWithoutReservationInput[] | ReviewsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReservationInput | ReviewsCreateOrConnectWithoutReservationInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutReservationInput | ReviewsUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReviewsCreateManyReservationInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutReservationInput | ReviewsUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutReservationInput | ReviewsUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PaymentProofsUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentProofsCreateWithoutReservationInput, PaymentProofsUncheckedCreateWithoutReservationInput> | PaymentProofsCreateWithoutReservationInput[] | PaymentProofsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentProofsCreateOrConnectWithoutReservationInput | PaymentProofsCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentProofsUpsertWithWhereUniqueWithoutReservationInput | PaymentProofsUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentProofsCreateManyReservationInputEnvelope
    set?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    disconnect?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    delete?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    connect?: PaymentProofsWhereUniqueInput | PaymentProofsWhereUniqueInput[]
    update?: PaymentProofsUpdateWithWhereUniqueWithoutReservationInput | PaymentProofsUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentProofsUpdateManyWithWhereWithoutReservationInput | PaymentProofsUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentProofsScalarWhereInput | PaymentProofsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReviewsCreateWithoutReservationInput, ReviewsUncheckedCreateWithoutReservationInput> | ReviewsCreateWithoutReservationInput[] | ReviewsUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReservationInput | ReviewsCreateOrConnectWithoutReservationInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutReservationInput | ReviewsUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReviewsCreateManyReservationInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutReservationInput | ReviewsUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutReservationInput | ReviewsUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReservationsCreateNestedOneWithoutPaymentProofsInput = {
    create?: XOR<ReservationsCreateWithoutPaymentProofsInput, ReservationsUncheckedCreateWithoutPaymentProofsInput>
    connectOrCreate?: ReservationsCreateOrConnectWithoutPaymentProofsInput
    connect?: ReservationsWhereUniqueInput
  }

  export type ReservationsUpdateOneRequiredWithoutPaymentProofsNestedInput = {
    create?: XOR<ReservationsCreateWithoutPaymentProofsInput, ReservationsUncheckedCreateWithoutPaymentProofsInput>
    connectOrCreate?: ReservationsCreateOrConnectWithoutPaymentProofsInput
    upsert?: ReservationsUpsertWithoutPaymentProofsInput
    connect?: ReservationsWhereUniqueInput
    update?: XOR<XOR<ReservationsUpdateToOneWithWhereWithoutPaymentProofsInput, ReservationsUpdateWithoutPaymentProofsInput>, ReservationsUncheckedUpdateWithoutPaymentProofsInput>
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type PropertiesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PropertiesCreateWithoutReviewsInput, PropertiesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutReviewsInput
    connect?: PropertiesWhereUniqueInput
  }

  export type ReservationsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ReservationsCreateWithoutReviewsInput, ReservationsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ReservationsCreateOrConnectWithoutReviewsInput
    connect?: ReservationsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertiesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<PropertiesCreateWithoutReviewsInput, PropertiesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutReviewsInput
    upsert?: PropertiesUpsertWithoutReviewsInput
    connect?: PropertiesWhereUniqueInput
    update?: XOR<XOR<PropertiesUpdateToOneWithWhereWithoutReviewsInput, PropertiesUpdateWithoutReviewsInput>, PropertiesUncheckedUpdateWithoutReviewsInput>
  }

  export type ReservationsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ReservationsCreateWithoutReviewsInput, ReservationsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ReservationsCreateOrConnectWithoutReviewsInput
    upsert?: ReservationsUpsertWithoutReviewsInput
    connect?: ReservationsWhereUniqueInput
    update?: XOR<XOR<ReservationsUpdateToOneWithWhereWithoutReviewsInput, ReservationsUpdateWithoutReviewsInput>, ReservationsUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TenantProfileCreateWithoutUserInput = {
    companyName: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantProfileUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantProfileCreateOrConnectWithoutUserInput = {
    where: TenantProfileWhereUniqueInput
    create: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
  }

  export type PropertiesCreateWithoutTenantInput = {
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PropertyCategoriesCreateNestedOneWithoutPropertiesInput
    rooms?: RoomsCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesUncheckedCreateWithoutTenantInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsUncheckedCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesCreateOrConnectWithoutTenantInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutTenantInput, PropertiesUncheckedCreateWithoutTenantInput>
  }

  export type PropertiesCreateManyTenantInputEnvelope = {
    data: PropertiesCreateManyTenantInput | PropertiesCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCategoriesCreateWithoutTenantInput = {
    name: string
    description: string
    properties?: PropertiesCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoriesUncheckedCreateWithoutTenantInput = {
    id?: number
    name: string
    description: string
    properties?: PropertiesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoriesCreateOrConnectWithoutTenantInput = {
    where: PropertyCategoriesWhereUniqueInput
    create: XOR<PropertyCategoriesCreateWithoutTenantInput, PropertyCategoriesUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCategoriesCreateManyTenantInputEnvelope = {
    data: PropertyCategoriesCreateManyTenantInput | PropertyCategoriesCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ReservationsCreateWithoutUserInput = {
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertiesCreateNestedOneWithoutReservationsInput
    room: RoomsCreateNestedOneWithoutReservationsInput
    paymentProofs?: PaymentProofsCreateNestedManyWithoutReservationInput
    reviews?: ReviewsCreateNestedManyWithoutReservationInput
  }

  export type ReservationsUncheckedCreateWithoutUserInput = {
    id?: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProofs?: PaymentProofsUncheckedCreateNestedManyWithoutReservationInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationsCreateOrConnectWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput>
  }

  export type ReservationsCreateManyUserInputEnvelope = {
    data: ReservationsCreateManyUserInput | ReservationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    property: PropertiesCreateNestedOneWithoutReviewsInput
    reservation: ReservationsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    propertyId: number
    reservationId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationsCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type EmailVerificationsUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type EmailVerificationsCreateOrConnectWithoutUserInput = {
    where: EmailVerificationsWhereUniqueInput
    create: XOR<EmailVerificationsCreateWithoutUserInput, EmailVerificationsUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationsCreateManyUserInputEnvelope = {
    data: EmailVerificationsCreateManyUserInput | EmailVerificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResetPasswordsCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type ResetPasswordsUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type ResetPasswordsCreateOrConnectWithoutUserInput = {
    where: ResetPasswordsWhereUniqueInput
    create: XOR<ResetPasswordsCreateWithoutUserInput, ResetPasswordsUncheckedCreateWithoutUserInput>
  }

  export type ResetPasswordsCreateManyUserInputEnvelope = {
    data: ResetPasswordsCreateManyUserInput | ResetPasswordsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialLoginsCreateWithoutUserInput = {
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type SocialLoginsUncheckedCreateWithoutUserInput = {
    id?: number
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type SocialLoginsCreateOrConnectWithoutUserInput = {
    where: SocialLoginsWhereUniqueInput
    create: XOR<SocialLoginsCreateWithoutUserInput, SocialLoginsUncheckedCreateWithoutUserInput>
  }

  export type SocialLoginsCreateManyUserInputEnvelope = {
    data: SocialLoginsCreateManyUserInput | SocialLoginsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantProfileUpsertWithoutUserInput = {
    update: XOR<TenantProfileUpdateWithoutUserInput, TenantProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    where?: TenantProfileWhereInput
  }

  export type TenantProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantProfileWhereInput
    data: XOR<TenantProfileUpdateWithoutUserInput, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type TenantProfileUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertiesUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertiesWhereUniqueInput
    update: XOR<PropertiesUpdateWithoutTenantInput, PropertiesUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertiesCreateWithoutTenantInput, PropertiesUncheckedCreateWithoutTenantInput>
  }

  export type PropertiesUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertiesWhereUniqueInput
    data: XOR<PropertiesUpdateWithoutTenantInput, PropertiesUncheckedUpdateWithoutTenantInput>
  }

  export type PropertiesUpdateManyWithWhereWithoutTenantInput = {
    where: PropertiesScalarWhereInput
    data: XOR<PropertiesUpdateManyMutationInput, PropertiesUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertiesScalarWhereInput = {
    AND?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
    OR?: PropertiesScalarWhereInput[]
    NOT?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
    id?: IntFilter<"Properties"> | number
    tenantId?: IntFilter<"Properties"> | number
    categoryId?: IntFilter<"Properties"> | number
    name?: StringFilter<"Properties"> | string
    description?: StringFilter<"Properties"> | string
    picture?: StringFilter<"Properties"> | string
    address?: StringFilter<"Properties"> | string
    city?: StringFilter<"Properties"> | string
    lat?: DecimalNullableFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"Properties"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Properties"> | Date | string
    updatedAt?: DateTimeFilter<"Properties"> | Date | string
  }

  export type PropertyCategoriesUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertyCategoriesWhereUniqueInput
    update: XOR<PropertyCategoriesUpdateWithoutTenantInput, PropertyCategoriesUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertyCategoriesCreateWithoutTenantInput, PropertyCategoriesUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCategoriesUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertyCategoriesWhereUniqueInput
    data: XOR<PropertyCategoriesUpdateWithoutTenantInput, PropertyCategoriesUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyCategoriesUpdateManyWithWhereWithoutTenantInput = {
    where: PropertyCategoriesScalarWhereInput
    data: XOR<PropertyCategoriesUpdateManyMutationInput, PropertyCategoriesUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertyCategoriesScalarWhereInput = {
    AND?: PropertyCategoriesScalarWhereInput | PropertyCategoriesScalarWhereInput[]
    OR?: PropertyCategoriesScalarWhereInput[]
    NOT?: PropertyCategoriesScalarWhereInput | PropertyCategoriesScalarWhereInput[]
    id?: IntFilter<"PropertyCategories"> | number
    tenantId?: IntFilter<"PropertyCategories"> | number
    name?: StringFilter<"PropertyCategories"> | string
    description?: StringFilter<"PropertyCategories"> | string
  }

  export type ReservationsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<ReservationsUpdateWithoutUserInput, ReservationsUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput>
  }

  export type ReservationsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<ReservationsUpdateWithoutUserInput, ReservationsUncheckedUpdateWithoutUserInput>
  }

  export type ReservationsUpdateManyWithWhereWithoutUserInput = {
    where: ReservationsScalarWhereInput
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationsScalarWhereInput = {
    AND?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    OR?: ReservationsScalarWhereInput[]
    NOT?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    id?: IntFilter<"Reservations"> | number
    userId?: IntFilter<"Reservations"> | number
    propertyId?: IntFilter<"Reservations"> | number
    roomId?: IntFilter<"Reservations"> | number
    checkIn?: DateTimeFilter<"Reservations"> | Date | string
    checkOut?: DateTimeFilter<"Reservations"> | Date | string
    duration?: IntFilter<"Reservations"> | number
    totalPrice?: DecimalFilter<"Reservations"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservations"> | $Enums.ReservationStatus
    reminderSentAt?: DateTimeNullableFilter<"Reservations"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    propertyId?: IntFilter<"Reviews"> | number
    reservationId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type EmailVerificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationsWhereUniqueInput
    update: XOR<EmailVerificationsUpdateWithoutUserInput, EmailVerificationsUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationsCreateWithoutUserInput, EmailVerificationsUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationsWhereUniqueInput
    data: XOR<EmailVerificationsUpdateWithoutUserInput, EmailVerificationsUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationsUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationsScalarWhereInput
    data: XOR<EmailVerificationsUpdateManyMutationInput, EmailVerificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationsScalarWhereInput = {
    AND?: EmailVerificationsScalarWhereInput | EmailVerificationsScalarWhereInput[]
    OR?: EmailVerificationsScalarWhereInput[]
    NOT?: EmailVerificationsScalarWhereInput | EmailVerificationsScalarWhereInput[]
    id?: IntFilter<"EmailVerifications"> | number
    userId?: IntFilter<"EmailVerifications"> | number
    token?: StringFilter<"EmailVerifications"> | string
    expiresAt?: DateTimeFilter<"EmailVerifications"> | Date | string
    used?: BoolFilter<"EmailVerifications"> | boolean
  }

  export type ResetPasswordsUpsertWithWhereUniqueWithoutUserInput = {
    where: ResetPasswordsWhereUniqueInput
    update: XOR<ResetPasswordsUpdateWithoutUserInput, ResetPasswordsUncheckedUpdateWithoutUserInput>
    create: XOR<ResetPasswordsCreateWithoutUserInput, ResetPasswordsUncheckedCreateWithoutUserInput>
  }

  export type ResetPasswordsUpdateWithWhereUniqueWithoutUserInput = {
    where: ResetPasswordsWhereUniqueInput
    data: XOR<ResetPasswordsUpdateWithoutUserInput, ResetPasswordsUncheckedUpdateWithoutUserInput>
  }

  export type ResetPasswordsUpdateManyWithWhereWithoutUserInput = {
    where: ResetPasswordsScalarWhereInput
    data: XOR<ResetPasswordsUpdateManyMutationInput, ResetPasswordsUncheckedUpdateManyWithoutUserInput>
  }

  export type ResetPasswordsScalarWhereInput = {
    AND?: ResetPasswordsScalarWhereInput | ResetPasswordsScalarWhereInput[]
    OR?: ResetPasswordsScalarWhereInput[]
    NOT?: ResetPasswordsScalarWhereInput | ResetPasswordsScalarWhereInput[]
    id?: IntFilter<"ResetPasswords"> | number
    userId?: IntFilter<"ResetPasswords"> | number
    token?: StringFilter<"ResetPasswords"> | string
    expiresAt?: DateTimeFilter<"ResetPasswords"> | Date | string
    used?: BoolFilter<"ResetPasswords"> | boolean
  }

  export type SocialLoginsUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialLoginsWhereUniqueInput
    update: XOR<SocialLoginsUpdateWithoutUserInput, SocialLoginsUncheckedUpdateWithoutUserInput>
    create: XOR<SocialLoginsCreateWithoutUserInput, SocialLoginsUncheckedCreateWithoutUserInput>
  }

  export type SocialLoginsUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialLoginsWhereUniqueInput
    data: XOR<SocialLoginsUpdateWithoutUserInput, SocialLoginsUncheckedUpdateWithoutUserInput>
  }

  export type SocialLoginsUpdateManyWithWhereWithoutUserInput = {
    where: SocialLoginsScalarWhereInput
    data: XOR<SocialLoginsUpdateManyMutationInput, SocialLoginsUncheckedUpdateManyWithoutUserInput>
  }

  export type SocialLoginsScalarWhereInput = {
    AND?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[]
    OR?: SocialLoginsScalarWhereInput[]
    NOT?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[]
    id?: IntFilter<"SocialLogins"> | number
    userId?: IntFilter<"SocialLogins"> | number
    provider?: StringFilter<"SocialLogins"> | string
    providerId?: StringFilter<"SocialLogins"> | string
    createdAt?: DateTimeFilter<"SocialLogins"> | Date | string
  }

  export type UsersCreateWithoutTenantProfileInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTenantProfileInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTenantProfileInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTenantProfileInput, UsersUncheckedCreateWithoutTenantProfileInput>
  }

  export type UsersUpsertWithoutTenantProfileInput = {
    update: XOR<UsersUpdateWithoutTenantProfileInput, UsersUncheckedUpdateWithoutTenantProfileInput>
    create: XOR<UsersCreateWithoutTenantProfileInput, UsersUncheckedCreateWithoutTenantProfileInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTenantProfileInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTenantProfileInput, UsersUncheckedUpdateWithoutTenantProfileInput>
  }

  export type UsersUpdateWithoutTenantProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTenantProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutSocialLoginsInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSocialLoginsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSocialLoginsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSocialLoginsInput, UsersUncheckedCreateWithoutSocialLoginsInput>
  }

  export type UsersUpsertWithoutSocialLoginsInput = {
    update: XOR<UsersUpdateWithoutSocialLoginsInput, UsersUncheckedUpdateWithoutSocialLoginsInput>
    create: XOR<UsersCreateWithoutSocialLoginsInput, UsersUncheckedCreateWithoutSocialLoginsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSocialLoginsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSocialLoginsInput, UsersUncheckedUpdateWithoutSocialLoginsInput>
  }

  export type UsersUpdateWithoutSocialLoginsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSocialLoginsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutEmailVerificationsInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutEmailVerificationsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutEmailVerificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEmailVerificationsInput, UsersUncheckedCreateWithoutEmailVerificationsInput>
  }

  export type UsersUpsertWithoutEmailVerificationsInput = {
    update: XOR<UsersUpdateWithoutEmailVerificationsInput, UsersUncheckedUpdateWithoutEmailVerificationsInput>
    create: XOR<UsersCreateWithoutEmailVerificationsInput, UsersUncheckedCreateWithoutEmailVerificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEmailVerificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEmailVerificationsInput, UsersUncheckedUpdateWithoutEmailVerificationsInput>
  }

  export type UsersUpdateWithoutEmailVerificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutEmailVerificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutResetPasswordsInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutResetPasswordsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutResetPasswordsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutResetPasswordsInput, UsersUncheckedCreateWithoutResetPasswordsInput>
  }

  export type UsersUpsertWithoutResetPasswordsInput = {
    update: XOR<UsersUpdateWithoutResetPasswordsInput, UsersUncheckedUpdateWithoutResetPasswordsInput>
    create: XOR<UsersCreateWithoutResetPasswordsInput, UsersUncheckedCreateWithoutResetPasswordsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutResetPasswordsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutResetPasswordsInput, UsersUncheckedUpdateWithoutResetPasswordsInput>
  }

  export type UsersUpdateWithoutResetPasswordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutResetPasswordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutPropertyCategoriesInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPropertyCategoriesInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPropertyCategoriesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPropertyCategoriesInput, UsersUncheckedCreateWithoutPropertyCategoriesInput>
  }

  export type PropertiesCreateWithoutCategoryInput = {
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: UsersCreateNestedOneWithoutPropertiesInput
    rooms?: RoomsCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesUncheckedCreateWithoutCategoryInput = {
    id?: number
    tenantId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsUncheckedCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesCreateOrConnectWithoutCategoryInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutCategoryInput, PropertiesUncheckedCreateWithoutCategoryInput>
  }

  export type PropertiesCreateManyCategoryInputEnvelope = {
    data: PropertiesCreateManyCategoryInput | PropertiesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPropertyCategoriesInput = {
    update: XOR<UsersUpdateWithoutPropertyCategoriesInput, UsersUncheckedUpdateWithoutPropertyCategoriesInput>
    create: XOR<UsersCreateWithoutPropertyCategoriesInput, UsersUncheckedCreateWithoutPropertyCategoriesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPropertyCategoriesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPropertyCategoriesInput, UsersUncheckedUpdateWithoutPropertyCategoriesInput>
  }

  export type UsersUpdateWithoutPropertyCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPropertyCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertiesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PropertiesWhereUniqueInput
    update: XOR<PropertiesUpdateWithoutCategoryInput, PropertiesUncheckedUpdateWithoutCategoryInput>
    create: XOR<PropertiesCreateWithoutCategoryInput, PropertiesUncheckedCreateWithoutCategoryInput>
  }

  export type PropertiesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PropertiesWhereUniqueInput
    data: XOR<PropertiesUpdateWithoutCategoryInput, PropertiesUncheckedUpdateWithoutCategoryInput>
  }

  export type PropertiesUpdateManyWithWhereWithoutCategoryInput = {
    where: PropertiesScalarWhereInput
    data: XOR<PropertiesUpdateManyMutationInput, PropertiesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UsersCreateWithoutPropertiesInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPropertiesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPropertiesInput, UsersUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyCategoriesCreateWithoutPropertiesInput = {
    name: string
    description: string
    tenant: UsersCreateNestedOneWithoutPropertyCategoriesInput
  }

  export type PropertyCategoriesUncheckedCreateWithoutPropertiesInput = {
    id?: number
    tenantId: number
    name: string
    description: string
  }

  export type PropertyCategoriesCreateOrConnectWithoutPropertiesInput = {
    where: PropertyCategoriesWhereUniqueInput
    create: XOR<PropertyCategoriesCreateWithoutPropertiesInput, PropertyCategoriesUncheckedCreateWithoutPropertiesInput>
  }

  export type RoomsCreateWithoutPropertyInput = {
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsCreateNestedManyWithoutRoomInput
    roomAvailabilities?: RoomAvailabilitiesCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutRoomInput
    roomAvailabilities?: RoomAvailabilitiesUncheckedCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutPropertyInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutPropertyInput, RoomsUncheckedCreateWithoutPropertyInput>
  }

  export type RoomsCreateManyPropertyInputEnvelope = {
    data: RoomsCreateManyPropertyInput | RoomsCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ReservationsCreateWithoutPropertyInput = {
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutReservationsInput
    room: RoomsCreateNestedOneWithoutReservationsInput
    paymentProofs?: PaymentProofsCreateNestedManyWithoutReservationInput
    reviews?: ReviewsCreateNestedManyWithoutReservationInput
  }

  export type ReservationsUncheckedCreateWithoutPropertyInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProofs?: PaymentProofsUncheckedCreateNestedManyWithoutReservationInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationsCreateOrConnectWithoutPropertyInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutPropertyInput, ReservationsUncheckedCreateWithoutPropertyInput>
  }

  export type ReservationsCreateManyPropertyInputEnvelope = {
    data: ReservationsCreateManyPropertyInput | ReservationsCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutPropertyInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
    reservation: ReservationsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutPropertyInput = {
    id?: number
    userId: number
    reservationId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutPropertyInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutPropertyInput, ReviewsUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewsCreateManyPropertyInputEnvelope = {
    data: ReviewsCreateManyPropertyInput | ReviewsCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PeakSeasonsCreateWithoutPropertiesInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    room: RoomsCreateNestedOneWithoutPeakSeasonsInput
  }

  export type PeakSeasonsUncheckedCreateWithoutPropertiesInput = {
    id?: number
    roomId: number
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PeakSeasonsCreateOrConnectWithoutPropertiesInput = {
    where: PeakSeasonsWhereUniqueInput
    create: XOR<PeakSeasonsCreateWithoutPropertiesInput, PeakSeasonsUncheckedCreateWithoutPropertiesInput>
  }

  export type PeakSeasonsCreateManyPropertiesInputEnvelope = {
    data: PeakSeasonsCreateManyPropertiesInput | PeakSeasonsCreateManyPropertiesInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPropertiesInput = {
    update: XOR<UsersUpdateWithoutPropertiesInput, UsersUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UsersCreateWithoutPropertiesInput, UsersUncheckedCreateWithoutPropertiesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPropertiesInput, UsersUncheckedUpdateWithoutPropertiesInput>
  }

  export type UsersUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyCategoriesUpsertWithoutPropertiesInput = {
    update: XOR<PropertyCategoriesUpdateWithoutPropertiesInput, PropertyCategoriesUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PropertyCategoriesCreateWithoutPropertiesInput, PropertyCategoriesUncheckedCreateWithoutPropertiesInput>
    where?: PropertyCategoriesWhereInput
  }

  export type PropertyCategoriesUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: PropertyCategoriesWhereInput
    data: XOR<PropertyCategoriesUpdateWithoutPropertiesInput, PropertyCategoriesUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyCategoriesUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tenant?: UsersUpdateOneRequiredWithoutPropertyCategoriesNestedInput
  }

  export type PropertyCategoriesUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RoomsUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RoomsWhereUniqueInput
    update: XOR<RoomsUpdateWithoutPropertyInput, RoomsUncheckedUpdateWithoutPropertyInput>
    create: XOR<RoomsCreateWithoutPropertyInput, RoomsUncheckedCreateWithoutPropertyInput>
  }

  export type RoomsUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RoomsWhereUniqueInput
    data: XOR<RoomsUpdateWithoutPropertyInput, RoomsUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomsUpdateManyWithWhereWithoutPropertyInput = {
    where: RoomsScalarWhereInput
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomsScalarWhereInput = {
    AND?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
    OR?: RoomsScalarWhereInput[]
    NOT?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
    id?: IntFilter<"Rooms"> | number
    propertyId?: IntFilter<"Rooms"> | number
    name?: StringFilter<"Rooms"> | string
    description?: StringFilter<"Rooms"> | string
    basePrice?: DecimalFilter<"Rooms"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFilter<"Rooms"> | number
    picture?: StringNullableFilter<"Rooms"> | string | null
    createdAt?: DateTimeFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeFilter<"Rooms"> | Date | string
  }

  export type ReservationsUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<ReservationsUpdateWithoutPropertyInput, ReservationsUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReservationsCreateWithoutPropertyInput, ReservationsUncheckedCreateWithoutPropertyInput>
  }

  export type ReservationsUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<ReservationsUpdateWithoutPropertyInput, ReservationsUncheckedUpdateWithoutPropertyInput>
  }

  export type ReservationsUpdateManyWithWhereWithoutPropertyInput = {
    where: ReservationsScalarWhereInput
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutPropertyInput, ReviewsUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReviewsCreateWithoutPropertyInput, ReviewsUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutPropertyInput, ReviewsUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutPropertyInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PeakSeasonsUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: PeakSeasonsWhereUniqueInput
    update: XOR<PeakSeasonsUpdateWithoutPropertiesInput, PeakSeasonsUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PeakSeasonsCreateWithoutPropertiesInput, PeakSeasonsUncheckedCreateWithoutPropertiesInput>
  }

  export type PeakSeasonsUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: PeakSeasonsWhereUniqueInput
    data: XOR<PeakSeasonsUpdateWithoutPropertiesInput, PeakSeasonsUncheckedUpdateWithoutPropertiesInput>
  }

  export type PeakSeasonsUpdateManyWithWhereWithoutPropertiesInput = {
    where: PeakSeasonsScalarWhereInput
    data: XOR<PeakSeasonsUpdateManyMutationInput, PeakSeasonsUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type PeakSeasonsScalarWhereInput = {
    AND?: PeakSeasonsScalarWhereInput | PeakSeasonsScalarWhereInput[]
    OR?: PeakSeasonsScalarWhereInput[]
    NOT?: PeakSeasonsScalarWhereInput | PeakSeasonsScalarWhereInput[]
    id?: IntFilter<"PeakSeasons"> | number
    roomId?: IntFilter<"PeakSeasons"> | number
    name?: StringFilter<"PeakSeasons"> | string
    startDate?: DateTimeFilter<"PeakSeasons"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasons"> | Date | string
    priceIncreaseType?: StringFilter<"PeakSeasons"> | string
    value?: DecimalFilter<"PeakSeasons"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PeakSeasons"> | Date | string
    propertiesId?: IntNullableFilter<"PeakSeasons"> | number | null
  }

  export type PropertiesCreateWithoutRoomsInput = {
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: UsersCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoriesCreateNestedOneWithoutPropertiesInput
    reservations?: ReservationsCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesUncheckedCreateWithoutRoomsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesCreateOrConnectWithoutRoomsInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutRoomsInput, PropertiesUncheckedCreateWithoutRoomsInput>
  }

  export type ReservationsCreateWithoutRoomInput = {
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutReservationsInput
    property: PropertiesCreateNestedOneWithoutReservationsInput
    paymentProofs?: PaymentProofsCreateNestedManyWithoutReservationInput
    reviews?: ReviewsCreateNestedManyWithoutReservationInput
  }

  export type ReservationsUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: number
    propertyId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProofs?: PaymentProofsUncheckedCreateNestedManyWithoutReservationInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationsCreateOrConnectWithoutRoomInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutRoomInput, ReservationsUncheckedCreateWithoutRoomInput>
  }

  export type ReservationsCreateManyRoomInputEnvelope = {
    data: ReservationsCreateManyRoomInput | ReservationsCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomAvailabilitiesCreateWithoutRoomInput = {
    date: Date | string
    isAvailable?: boolean
    priceOverride?: Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesUncheckedCreateWithoutRoomInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
    priceOverride?: Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesCreateOrConnectWithoutRoomInput = {
    where: RoomAvailabilitiesWhereUniqueInput
    create: XOR<RoomAvailabilitiesCreateWithoutRoomInput, RoomAvailabilitiesUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilitiesCreateManyRoomInputEnvelope = {
    data: RoomAvailabilitiesCreateManyRoomInput | RoomAvailabilitiesCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PeakSeasonsCreateWithoutRoomInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    Properties?: PropertiesCreateNestedOneWithoutPeakSeasonsInput
  }

  export type PeakSeasonsUncheckedCreateWithoutRoomInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    propertiesId?: number | null
  }

  export type PeakSeasonsCreateOrConnectWithoutRoomInput = {
    where: PeakSeasonsWhereUniqueInput
    create: XOR<PeakSeasonsCreateWithoutRoomInput, PeakSeasonsUncheckedCreateWithoutRoomInput>
  }

  export type PeakSeasonsCreateManyRoomInputEnvelope = {
    data: PeakSeasonsCreateManyRoomInput | PeakSeasonsCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PropertiesUpsertWithoutRoomsInput = {
    update: XOR<PropertiesUpdateWithoutRoomsInput, PropertiesUncheckedUpdateWithoutRoomsInput>
    create: XOR<PropertiesCreateWithoutRoomsInput, PropertiesUncheckedCreateWithoutRoomsInput>
    where?: PropertiesWhereInput
  }

  export type PropertiesUpdateToOneWithWhereWithoutRoomsInput = {
    where?: PropertiesWhereInput
    data: XOR<PropertiesUpdateWithoutRoomsInput, PropertiesUncheckedUpdateWithoutRoomsInput>
  }

  export type PropertiesUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UsersUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoriesUpdateOneRequiredWithoutPropertiesNestedInput
    reservations?: ReservationsUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type ReservationsUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<ReservationsUpdateWithoutRoomInput, ReservationsUncheckedUpdateWithoutRoomInput>
    create: XOR<ReservationsCreateWithoutRoomInput, ReservationsUncheckedCreateWithoutRoomInput>
  }

  export type ReservationsUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<ReservationsUpdateWithoutRoomInput, ReservationsUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationsUpdateManyWithWhereWithoutRoomInput = {
    where: ReservationsScalarWhereInput
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomAvailabilitiesUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilitiesWhereUniqueInput
    update: XOR<RoomAvailabilitiesUpdateWithoutRoomInput, RoomAvailabilitiesUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomAvailabilitiesCreateWithoutRoomInput, RoomAvailabilitiesUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilitiesUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilitiesWhereUniqueInput
    data: XOR<RoomAvailabilitiesUpdateWithoutRoomInput, RoomAvailabilitiesUncheckedUpdateWithoutRoomInput>
  }

  export type RoomAvailabilitiesUpdateManyWithWhereWithoutRoomInput = {
    where: RoomAvailabilitiesScalarWhereInput
    data: XOR<RoomAvailabilitiesUpdateManyMutationInput, RoomAvailabilitiesUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomAvailabilitiesScalarWhereInput = {
    AND?: RoomAvailabilitiesScalarWhereInput | RoomAvailabilitiesScalarWhereInput[]
    OR?: RoomAvailabilitiesScalarWhereInput[]
    NOT?: RoomAvailabilitiesScalarWhereInput | RoomAvailabilitiesScalarWhereInput[]
    id?: IntFilter<"RoomAvailabilities"> | number
    roomId?: IntFilter<"RoomAvailabilities"> | number
    date?: DateTimeFilter<"RoomAvailabilities"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailabilities"> | boolean
    priceOverride?: DecimalNullableFilter<"RoomAvailabilities"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PeakSeasonsUpsertWithWhereUniqueWithoutRoomInput = {
    where: PeakSeasonsWhereUniqueInput
    update: XOR<PeakSeasonsUpdateWithoutRoomInput, PeakSeasonsUncheckedUpdateWithoutRoomInput>
    create: XOR<PeakSeasonsCreateWithoutRoomInput, PeakSeasonsUncheckedCreateWithoutRoomInput>
  }

  export type PeakSeasonsUpdateWithWhereUniqueWithoutRoomInput = {
    where: PeakSeasonsWhereUniqueInput
    data: XOR<PeakSeasonsUpdateWithoutRoomInput, PeakSeasonsUncheckedUpdateWithoutRoomInput>
  }

  export type PeakSeasonsUpdateManyWithWhereWithoutRoomInput = {
    where: PeakSeasonsScalarWhereInput
    data: XOR<PeakSeasonsUpdateManyMutationInput, PeakSeasonsUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomsCreateWithoutRoomAvailabilitiesInput = {
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertiesCreateNestedOneWithoutRoomsInput
    reservations?: ReservationsCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutRoomAvailabilitiesInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutRoomAvailabilitiesInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutRoomAvailabilitiesInput, RoomsUncheckedCreateWithoutRoomAvailabilitiesInput>
  }

  export type RoomsUpsertWithoutRoomAvailabilitiesInput = {
    update: XOR<RoomsUpdateWithoutRoomAvailabilitiesInput, RoomsUncheckedUpdateWithoutRoomAvailabilitiesInput>
    create: XOR<RoomsCreateWithoutRoomAvailabilitiesInput, RoomsUncheckedCreateWithoutRoomAvailabilitiesInput>
    where?: RoomsWhereInput
  }

  export type RoomsUpdateToOneWithWhereWithoutRoomAvailabilitiesInput = {
    where?: RoomsWhereInput
    data: XOR<RoomsUpdateWithoutRoomAvailabilitiesInput, RoomsUncheckedUpdateWithoutRoomAvailabilitiesInput>
  }

  export type RoomsUpdateWithoutRoomAvailabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertiesUpdateOneRequiredWithoutRoomsNestedInput
    reservations?: ReservationsUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutRoomAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUncheckedUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsCreateWithoutPeakSeasonsInput = {
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertiesCreateNestedOneWithoutRoomsInput
    reservations?: ReservationsCreateNestedManyWithoutRoomInput
    roomAvailabilities?: RoomAvailabilitiesCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutPeakSeasonsInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutRoomInput
    roomAvailabilities?: RoomAvailabilitiesUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutPeakSeasonsInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutPeakSeasonsInput, RoomsUncheckedCreateWithoutPeakSeasonsInput>
  }

  export type PropertiesCreateWithoutPeakSeasonsInput = {
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: UsersCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoriesCreateNestedOneWithoutPropertiesInput
    rooms?: RoomsCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesUncheckedCreateWithoutPeakSeasonsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsUncheckedCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesCreateOrConnectWithoutPeakSeasonsInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutPeakSeasonsInput, PropertiesUncheckedCreateWithoutPeakSeasonsInput>
  }

  export type RoomsUpsertWithoutPeakSeasonsInput = {
    update: XOR<RoomsUpdateWithoutPeakSeasonsInput, RoomsUncheckedUpdateWithoutPeakSeasonsInput>
    create: XOR<RoomsCreateWithoutPeakSeasonsInput, RoomsUncheckedCreateWithoutPeakSeasonsInput>
    where?: RoomsWhereInput
  }

  export type RoomsUpdateToOneWithWhereWithoutPeakSeasonsInput = {
    where?: RoomsWhereInput
    data: XOR<RoomsUpdateWithoutPeakSeasonsInput, RoomsUncheckedUpdateWithoutPeakSeasonsInput>
  }

  export type RoomsUpdateWithoutPeakSeasonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertiesUpdateOneRequiredWithoutRoomsNestedInput
    reservations?: ReservationsUpdateManyWithoutRoomNestedInput
    roomAvailabilities?: RoomAvailabilitiesUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutPeakSeasonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUncheckedUpdateManyWithoutRoomNestedInput
    roomAvailabilities?: RoomAvailabilitiesUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PropertiesUpsertWithoutPeakSeasonsInput = {
    update: XOR<PropertiesUpdateWithoutPeakSeasonsInput, PropertiesUncheckedUpdateWithoutPeakSeasonsInput>
    create: XOR<PropertiesCreateWithoutPeakSeasonsInput, PropertiesUncheckedCreateWithoutPeakSeasonsInput>
    where?: PropertiesWhereInput
  }

  export type PropertiesUpdateToOneWithWhereWithoutPeakSeasonsInput = {
    where?: PropertiesWhereInput
    data: XOR<PropertiesUpdateWithoutPeakSeasonsInput, PropertiesUncheckedUpdateWithoutPeakSeasonsInput>
  }

  export type PropertiesUpdateWithoutPeakSeasonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UsersUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoriesUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomsUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutPeakSeasonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUncheckedUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UsersCreateWithoutReservationsInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutReservationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
  }

  export type PropertiesCreateWithoutReservationsInput = {
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: UsersCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoriesCreateNestedOneWithoutPropertiesInput
    rooms?: RoomsCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesUncheckedCreateWithoutReservationsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesCreateOrConnectWithoutReservationsInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutReservationsInput, PropertiesUncheckedCreateWithoutReservationsInput>
  }

  export type RoomsCreateWithoutReservationsInput = {
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertiesCreateNestedOneWithoutRoomsInput
    roomAvailabilities?: RoomAvailabilitiesCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutReservationsInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomAvailabilities?: RoomAvailabilitiesUncheckedCreateNestedManyWithoutRoomInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutReservationsInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutReservationsInput, RoomsUncheckedCreateWithoutReservationsInput>
  }

  export type PaymentProofsCreateWithoutReservationInput = {
    image: string
    isValid?: boolean
    rejectedReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentProofsUncheckedCreateWithoutReservationInput = {
    id?: number
    image: string
    isValid?: boolean
    rejectedReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentProofsCreateOrConnectWithoutReservationInput = {
    where: PaymentProofsWhereUniqueInput
    create: XOR<PaymentProofsCreateWithoutReservationInput, PaymentProofsUncheckedCreateWithoutReservationInput>
  }

  export type PaymentProofsCreateManyReservationInputEnvelope = {
    data: PaymentProofsCreateManyReservationInput | PaymentProofsCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutReservationInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
    property: PropertiesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutReservationInput = {
    id?: number
    userId: number
    propertyId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutReservationInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutReservationInput, ReviewsUncheckedCreateWithoutReservationInput>
  }

  export type ReviewsCreateManyReservationInputEnvelope = {
    data: ReviewsCreateManyReservationInput | ReviewsCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutReservationsInput = {
    update: XOR<UsersUpdateWithoutReservationsInput, UsersUncheckedUpdateWithoutReservationsInput>
    create: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReservationsInput, UsersUncheckedUpdateWithoutReservationsInput>
  }

  export type UsersUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertiesUpsertWithoutReservationsInput = {
    update: XOR<PropertiesUpdateWithoutReservationsInput, PropertiesUncheckedUpdateWithoutReservationsInput>
    create: XOR<PropertiesCreateWithoutReservationsInput, PropertiesUncheckedCreateWithoutReservationsInput>
    where?: PropertiesWhereInput
  }

  export type PropertiesUpdateToOneWithWhereWithoutReservationsInput = {
    where?: PropertiesWhereInput
    data: XOR<PropertiesUpdateWithoutReservationsInput, PropertiesUncheckedUpdateWithoutReservationsInput>
  }

  export type PropertiesUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UsersUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoriesUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomsUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type RoomsUpsertWithoutReservationsInput = {
    update: XOR<RoomsUpdateWithoutReservationsInput, RoomsUncheckedUpdateWithoutReservationsInput>
    create: XOR<RoomsCreateWithoutReservationsInput, RoomsUncheckedCreateWithoutReservationsInput>
    where?: RoomsWhereInput
  }

  export type RoomsUpdateToOneWithWhereWithoutReservationsInput = {
    where?: RoomsWhereInput
    data: XOR<RoomsUpdateWithoutReservationsInput, RoomsUncheckedUpdateWithoutReservationsInput>
  }

  export type RoomsUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertiesUpdateOneRequiredWithoutRoomsNestedInput
    roomAvailabilities?: RoomAvailabilitiesUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomAvailabilities?: RoomAvailabilitiesUncheckedUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PaymentProofsUpsertWithWhereUniqueWithoutReservationInput = {
    where: PaymentProofsWhereUniqueInput
    update: XOR<PaymentProofsUpdateWithoutReservationInput, PaymentProofsUncheckedUpdateWithoutReservationInput>
    create: XOR<PaymentProofsCreateWithoutReservationInput, PaymentProofsUncheckedCreateWithoutReservationInput>
  }

  export type PaymentProofsUpdateWithWhereUniqueWithoutReservationInput = {
    where: PaymentProofsWhereUniqueInput
    data: XOR<PaymentProofsUpdateWithoutReservationInput, PaymentProofsUncheckedUpdateWithoutReservationInput>
  }

  export type PaymentProofsUpdateManyWithWhereWithoutReservationInput = {
    where: PaymentProofsScalarWhereInput
    data: XOR<PaymentProofsUpdateManyMutationInput, PaymentProofsUncheckedUpdateManyWithoutReservationInput>
  }

  export type PaymentProofsScalarWhereInput = {
    AND?: PaymentProofsScalarWhereInput | PaymentProofsScalarWhereInput[]
    OR?: PaymentProofsScalarWhereInput[]
    NOT?: PaymentProofsScalarWhereInput | PaymentProofsScalarWhereInput[]
    id?: IntFilter<"PaymentProofs"> | number
    reservationId?: IntFilter<"PaymentProofs"> | number
    image?: StringFilter<"PaymentProofs"> | string
    isValid?: BoolFilter<"PaymentProofs"> | boolean
    rejectedReason?: StringNullableFilter<"PaymentProofs"> | string | null
    uploadedAt?: DateTimeFilter<"PaymentProofs"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentProofs"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutReservationInput, ReviewsUncheckedUpdateWithoutReservationInput>
    create: XOR<ReviewsCreateWithoutReservationInput, ReviewsUncheckedCreateWithoutReservationInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutReservationInput, ReviewsUncheckedUpdateWithoutReservationInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutReservationInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationsCreateWithoutPaymentProofsInput = {
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutReservationsInput
    property: PropertiesCreateNestedOneWithoutReservationsInput
    room: RoomsCreateNestedOneWithoutReservationsInput
    reviews?: ReviewsCreateNestedManyWithoutReservationInput
  }

  export type ReservationsUncheckedCreateWithoutPaymentProofsInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationsCreateOrConnectWithoutPaymentProofsInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutPaymentProofsInput, ReservationsUncheckedCreateWithoutPaymentProofsInput>
  }

  export type ReservationsUpsertWithoutPaymentProofsInput = {
    update: XOR<ReservationsUpdateWithoutPaymentProofsInput, ReservationsUncheckedUpdateWithoutPaymentProofsInput>
    create: XOR<ReservationsCreateWithoutPaymentProofsInput, ReservationsUncheckedCreateWithoutPaymentProofsInput>
    where?: ReservationsWhereInput
  }

  export type ReservationsUpdateToOneWithWhereWithoutPaymentProofsInput = {
    where?: ReservationsWhereInput
    data: XOR<ReservationsUpdateWithoutPaymentProofsInput, ReservationsUncheckedUpdateWithoutPaymentProofsInput>
  }

  export type ReservationsUpdateWithoutPaymentProofsInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
    property?: PropertiesUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomsUpdateOneRequiredWithoutReservationsNestedInput
    reviews?: ReviewsUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutPaymentProofsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type UsersCreateWithoutReviewsInput = {
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertiesCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesCreateNestedManyWithoutTenantInput
    reservations?: ReservationsCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    role: string
    provider?: string | null
    providerId?: string | null
    isVerified?: boolean
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertiesUncheckedCreateNestedManyWithoutTenantInput
    propertyCategories?: PropertyCategoriesUncheckedCreateNestedManyWithoutTenantInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationsUncheckedCreateNestedManyWithoutUserInput
    resetPasswords?: ResetPasswordsUncheckedCreateNestedManyWithoutUserInput
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type PropertiesCreateWithoutReviewsInput = {
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: UsersCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoriesCreateNestedOneWithoutPropertiesInput
    rooms?: RoomsCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesUncheckedCreateWithoutReviewsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsUncheckedCreateNestedManyWithoutPropertyInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutPropertyInput
    peakSeasons?: PeakSeasonsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type PropertiesCreateOrConnectWithoutReviewsInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutReviewsInput, PropertiesUncheckedCreateWithoutReviewsInput>
  }

  export type ReservationsCreateWithoutReviewsInput = {
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutReservationsInput
    property: PropertiesCreateNestedOneWithoutReservationsInput
    room: RoomsCreateNestedOneWithoutReservationsInput
    paymentProofs?: PaymentProofsCreateNestedManyWithoutReservationInput
  }

  export type ReservationsUncheckedCreateWithoutReviewsInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProofs?: PaymentProofsUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationsCreateOrConnectWithoutReviewsInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutReviewsInput, ReservationsUncheckedCreateWithoutReviewsInput>
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertiesUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertiesUncheckedUpdateManyWithoutTenantNestedInput
    propertyCategories?: PropertyCategoriesUncheckedUpdateManyWithoutTenantNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationsUncheckedUpdateManyWithoutUserNestedInput
    resetPasswords?: ResetPasswordsUncheckedUpdateManyWithoutUserNestedInput
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertiesUpsertWithoutReviewsInput = {
    update: XOR<PropertiesUpdateWithoutReviewsInput, PropertiesUncheckedUpdateWithoutReviewsInput>
    create: XOR<PropertiesCreateWithoutReviewsInput, PropertiesUncheckedCreateWithoutReviewsInput>
    where?: PropertiesWhereInput
  }

  export type PropertiesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PropertiesWhereInput
    data: XOR<PropertiesUpdateWithoutReviewsInput, PropertiesUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertiesUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UsersUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoriesUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomsUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUncheckedUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type ReservationsUpsertWithoutReviewsInput = {
    update: XOR<ReservationsUpdateWithoutReviewsInput, ReservationsUncheckedUpdateWithoutReviewsInput>
    create: XOR<ReservationsCreateWithoutReviewsInput, ReservationsUncheckedCreateWithoutReviewsInput>
    where?: ReservationsWhereInput
  }

  export type ReservationsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ReservationsWhereInput
    data: XOR<ReservationsUpdateWithoutReviewsInput, ReservationsUncheckedUpdateWithoutReviewsInput>
  }

  export type ReservationsUpdateWithoutReviewsInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
    property?: PropertiesUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomsUpdateOneRequiredWithoutReservationsNestedInput
    paymentProofs?: PaymentProofsUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProofs?: PaymentProofsUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type PropertiesCreateManyTenantInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCategoriesCreateManyTenantInput = {
    id?: number
    name: string
    description: string
  }

  export type ReservationsCreateManyUserInput = {
    id?: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    propertyId: number
    reservationId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type EmailVerificationsCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type ResetPasswordsCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    used?: boolean
  }

  export type SocialLoginsCreateManyUserInput = {
    id?: number
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type PropertiesUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PropertyCategoriesUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomsUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUncheckedUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoriesUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: PropertiesUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoriesUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: PropertiesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoriesUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationsUpdateWithoutUserInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertiesUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomsUpdateOneRequiredWithoutReservationsNestedInput
    paymentProofs?: PaymentProofsUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProofs?: PaymentProofsUncheckedUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertiesUpdateOneRequiredWithoutReviewsNestedInput
    reservation?: ReservationsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationsUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetPasswordsUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetPasswordsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetPasswordsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialLoginsUpdateWithoutUserInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLoginsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLoginsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertiesCreateManyCategoryInput = {
    id?: number
    tenantId: number
    name: string
    description: string
    picture: string
    address: string
    city: string
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertiesUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UsersUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomsUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUncheckedUpdateManyWithoutPropertyNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutPropertyNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type PropertiesUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsCreateManyPropertyInput = {
    id?: number
    name: string
    description: string
    basePrice: Decimal | DecimalJsLike | number | string
    maxGuests?: number
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationsCreateManyPropertyInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyPropertyInput = {
    id?: number
    userId: number
    reservationId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type PeakSeasonsCreateManyPropertiesInput = {
    id?: number
    roomId: number
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RoomsUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUpdateManyWithoutRoomNestedInput
    roomAvailabilities?: RoomAvailabilitiesUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUncheckedUpdateManyWithoutRoomNestedInput
    roomAvailabilities?: RoomAvailabilitiesUncheckedUpdateManyWithoutRoomNestedInput
    peakSeasons?: PeakSeasonsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUpdateWithoutPropertyInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomsUpdateOneRequiredWithoutReservationsNestedInput
    paymentProofs?: PaymentProofsUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProofs?: PaymentProofsUncheckedUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutPropertyInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    reservation?: ReservationsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonsUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomsUpdateOneRequiredWithoutPeakSeasonsNestedInput
  }

  export type PeakSeasonsUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonsUncheckedUpdateManyWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsCreateManyRoomInput = {
    id?: number
    userId: number
    propertyId: number
    checkIn: Date | string
    checkOut: Date | string
    duration: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    reminderSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomAvailabilitiesCreateManyRoomInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
    priceOverride?: Decimal | DecimalJsLike | number | string | null
  }

  export type PeakSeasonsCreateManyRoomInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    priceIncreaseType: string
    value: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    propertiesId?: number | null
  }

  export type ReservationsUpdateWithoutRoomInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
    property?: PropertiesUpdateOneRequiredWithoutReservationsNestedInput
    paymentProofs?: PaymentProofsUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProofs?: PaymentProofsUncheckedUpdateManyWithoutReservationNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationsUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilitiesUpdateWithoutRoomInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    priceOverride?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    priceOverride?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RoomAvailabilitiesUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    priceOverride?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PeakSeasonsUpdateWithoutRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Properties?: PropertiesUpdateOneWithoutPeakSeasonsNestedInput
  }

  export type PeakSeasonsUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertiesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PeakSeasonsUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priceIncreaseType?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertiesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentProofsCreateManyReservationInput = {
    id?: number
    image: string
    isValid?: boolean
    rejectedReason?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyReservationInput = {
    id?: number
    userId: number
    propertyId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type PaymentProofsUpdateWithoutReservationInput = {
    image?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentProofsUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentProofsUncheckedUpdateManyWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutReservationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    property?: PropertiesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyCategoriesCountOutputTypeDefaultArgs instead
     */
    export type PropertyCategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyCategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertiesCountOutputTypeDefaultArgs instead
     */
    export type PropertiesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertiesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomsCountOutputTypeDefaultArgs instead
     */
    export type RoomsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationsCountOutputTypeDefaultArgs instead
     */
    export type ReservationsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantProfileDefaultArgs instead
     */
    export type TenantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialLoginsDefaultArgs instead
     */
    export type SocialLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialLoginsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmailVerificationsDefaultArgs instead
     */
    export type EmailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmailVerificationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResetPasswordsDefaultArgs instead
     */
    export type ResetPasswordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResetPasswordsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyCategoriesDefaultArgs instead
     */
    export type PropertyCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyCategoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertiesDefaultArgs instead
     */
    export type PropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomsDefaultArgs instead
     */
    export type RoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomAvailabilitiesDefaultArgs instead
     */
    export type RoomAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomAvailabilitiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeakSeasonsDefaultArgs instead
     */
    export type PeakSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeakSeasonsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationsDefaultArgs instead
     */
    export type ReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentProofsDefaultArgs instead
     */
    export type PaymentProofsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentProofsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewsDefaultArgs instead
     */
    export type ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}