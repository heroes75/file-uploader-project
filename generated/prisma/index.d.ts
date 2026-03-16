
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model Folder
 * 
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>
/**
 * Model ShareFolder
 * 
 */
export type ShareFolder = $Result.DefaultSelection<Prisma.$ShareFolderPayload>
/**
 * Model ShareFile
 * 
 */
export type ShareFile = $Result.DefaultSelection<Prisma.$ShareFilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **Files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.FilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folder.findMany()
    * ```
    */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareFolder`: Exposes CRUD operations for the **ShareFolder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareFolders
    * const shareFolders = await prisma.shareFolder.findMany()
    * ```
    */
  get shareFolder(): Prisma.ShareFolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareFile`: Exposes CRUD operations for the **ShareFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareFiles
    * const shareFiles = await prisma.shareFile.findMany()
    * ```
    */
  get shareFile(): Prisma.ShareFileDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    User: 'User',
    Files: 'Files',
    Folder: 'Folder',
    ShareFolder: 'ShareFolder',
    ShareFile: 'ShareFile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "user" | "files" | "folder" | "shareFolder" | "shareFile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Files: {
        payload: Prisma.$FilesPayload<ExtArgs>
        fields: Prisma.FilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findFirst: {
            args: Prisma.FilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findMany: {
            args: Prisma.FilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          create: {
            args: Prisma.FilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          createMany: {
            args: Prisma.FilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          delete: {
            args: Prisma.FilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          update: {
            args: Prisma.FilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          deleteMany: {
            args: Prisma.FilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          upsert: {
            args: Prisma.FilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.FilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>
        fields: Prisma.FolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolder>
          }
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>
            result: $Utils.Optional<FolderCountAggregateOutputType> | number
          }
        }
      }
      ShareFolder: {
        payload: Prisma.$ShareFolderPayload<ExtArgs>
        fields: Prisma.ShareFolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareFolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareFolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>
          }
          findFirst: {
            args: Prisma.ShareFolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareFolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>
          }
          findMany: {
            args: Prisma.ShareFolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>[]
          }
          create: {
            args: Prisma.ShareFolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>
          }
          createMany: {
            args: Prisma.ShareFolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareFolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>[]
          }
          delete: {
            args: Prisma.ShareFolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>
          }
          update: {
            args: Prisma.ShareFolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>
          }
          deleteMany: {
            args: Prisma.ShareFolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareFolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareFolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>[]
          }
          upsert: {
            args: Prisma.ShareFolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFolderPayload>
          }
          aggregate: {
            args: Prisma.ShareFolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareFolder>
          }
          groupBy: {
            args: Prisma.ShareFolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareFolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareFolderCountArgs<ExtArgs>
            result: $Utils.Optional<ShareFolderCountAggregateOutputType> | number
          }
        }
      }
      ShareFile: {
        payload: Prisma.$ShareFilePayload<ExtArgs>
        fields: Prisma.ShareFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>
          }
          findFirst: {
            args: Prisma.ShareFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>
          }
          findMany: {
            args: Prisma.ShareFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>[]
          }
          create: {
            args: Prisma.ShareFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>
          }
          createMany: {
            args: Prisma.ShareFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>[]
          }
          delete: {
            args: Prisma.ShareFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>
          }
          update: {
            args: Prisma.ShareFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>
          }
          deleteMany: {
            args: Prisma.ShareFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>[]
          }
          upsert: {
            args: Prisma.ShareFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareFilePayload>
          }
          aggregate: {
            args: Prisma.ShareFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareFile>
          }
          groupBy: {
            args: Prisma.ShareFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareFileCountArgs<ExtArgs>
            result: $Utils.Optional<ShareFileCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    user?: UserOmit
    files?: FilesOmit
    folder?: FolderOmit
    shareFolder?: ShareFolderOmit
    shareFile?: ShareFileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    folders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | UserCountOutputTypeCountFoldersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }


  /**
   * Count Type FilesCountOutputType
   */

  export type FilesCountOutputType = {
    shareFiles: number
  }

  export type FilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareFiles?: boolean | FilesCountOutputTypeCountShareFilesArgs
  }

  // Custom InputTypes
  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesCountOutputType
     */
    select?: FilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeCountShareFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareFileWhereInput
  }


  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    files: number
    folders: number
    shareFolders: number
  }

  export type FolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | FolderCountOutputTypeCountFilesArgs
    folders?: boolean | FolderCountOutputTypeCountFoldersArgs
    shareFolders?: boolean | FolderCountOutputTypeCountShareFoldersArgs
  }

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountShareFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareFolderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    folders?: boolean | User$foldersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | User$foldersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      folders: Prisma.$FolderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folders<T extends User$foldersArgs<ExtArgs> = {}>(args?: Subset<T, User$foldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.folders
   */
  export type User$foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    size: number | null
  }

  export type FilesSumAggregateOutputType = {
    size: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    fileUrl: string | null
    size: number | null
    uploadedAt: Date | null
    folderId: string | null
    destinationId: string | null
  }

  export type FilesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    fileUrl: string | null
    size: number | null
    uploadedAt: Date | null
    folderId: string | null
    destinationId: string | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    name: number
    originalName: number
    fileUrl: number
    size: number
    uploadedAt: number
    folderId: number
    destinationId: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    size?: true
  }

  export type FilesSumAggregateInputType = {
    size?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    fileUrl?: true
    size?: true
    uploadedAt?: true
    folderId?: true
    destinationId?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    fileUrl?: true
    size?: true
    uploadedAt?: true
    folderId?: true
    destinationId?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    fileUrl?: true
    size?: true
    uploadedAt?: true
    folderId?: true
    destinationId?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to aggregate.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type FilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithAggregationInput | FilesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: FilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt: Date
    folderId: string
    destinationId: string
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends FilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type FilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    fileUrl?: boolean
    size?: boolean
    uploadedAt?: boolean
    folderId?: boolean
    destinationId?: boolean
    destinationFolder?: boolean | FolderDefaultArgs<ExtArgs>
    shareFiles?: boolean | Files$shareFilesArgs<ExtArgs>
    _count?: boolean | FilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    fileUrl?: boolean
    size?: boolean
    uploadedAt?: boolean
    folderId?: boolean
    destinationId?: boolean
    destinationFolder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    fileUrl?: boolean
    size?: boolean
    uploadedAt?: boolean
    folderId?: boolean
    destinationId?: boolean
    destinationFolder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectScalar = {
    id?: boolean
    name?: boolean
    originalName?: boolean
    fileUrl?: boolean
    size?: boolean
    uploadedAt?: boolean
    folderId?: boolean
    destinationId?: boolean
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "originalName" | "fileUrl" | "size" | "uploadedAt" | "folderId" | "destinationId", ExtArgs["result"]["files"]>
  export type FilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationFolder?: boolean | FolderDefaultArgs<ExtArgs>
    shareFiles?: boolean | Files$shareFilesArgs<ExtArgs>
    _count?: boolean | FilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationFolder?: boolean | FolderDefaultArgs<ExtArgs>
  }
  export type FilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationFolder?: boolean | FolderDefaultArgs<ExtArgs>
  }

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {
      destinationFolder: Prisma.$FolderPayload<ExtArgs>
      shareFiles: Prisma.$ShareFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      originalName: string
      fileUrl: string
      size: number
      uploadedAt: Date
      folderId: string
      destinationId: string
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type FilesGetPayload<S extends boolean | null | undefined | FilesDefaultArgs> = $Result.GetResult<Prisma.$FilesPayload, S>

  type FilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface FilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Files'], meta: { name: 'Files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {FilesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilesFindUniqueArgs>(args: SelectSubset<T, FilesFindUniqueArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilesFindFirstArgs>(args?: SelectSubset<T, FilesFindFirstArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilesFindManyArgs>(args?: SelectSubset<T, FilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {FilesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends FilesCreateArgs>(args: SelectSubset<T, FilesCreateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FilesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilesCreateManyArgs>(args?: SelectSubset<T, FilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FilesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {FilesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends FilesDeleteArgs>(args: SelectSubset<T, FilesDeleteArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {FilesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilesUpdateArgs>(args: SelectSubset<T, FilesUpdateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FilesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilesDeleteManyArgs>(args?: SelectSubset<T, FilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilesUpdateManyArgs>(args: SelectSubset<T, FilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FilesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {FilesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends FilesUpsertArgs>(args: SelectSubset<T, FilesUpsertArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FilesCountArgs>(
      args?: Subset<T, FilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesGroupByArgs} args - Group by arguments.
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
      T extends FilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Files model
   */
  readonly fields: FilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinationFolder<T extends FolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FolderDefaultArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shareFiles<T extends Files$shareFilesArgs<ExtArgs> = {}>(args?: Subset<T, Files$shareFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Files model
   */
  interface FilesFieldRefs {
    readonly id: FieldRef<"Files", 'String'>
    readonly name: FieldRef<"Files", 'String'>
    readonly originalName: FieldRef<"Files", 'String'>
    readonly fileUrl: FieldRef<"Files", 'String'>
    readonly size: FieldRef<"Files", 'Int'>
    readonly uploadedAt: FieldRef<"Files", 'DateTime'>
    readonly folderId: FieldRef<"Files", 'String'>
    readonly destinationId: FieldRef<"Files", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Files findUnique
   */
  export type FilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findUniqueOrThrow
   */
  export type FilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findFirst
   */
  export type FilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findFirstOrThrow
   */
  export type FilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findMany
   */
  export type FilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files create
   */
  export type FilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Files.
     */
    data: XOR<FilesCreateInput, FilesUncheckedCreateInput>
  }

  /**
   * Files createMany
   */
  export type FilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Files createManyAndReturn
   */
  export type FilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files update
   */
  export type FilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Files.
     */
    data: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
    /**
     * Choose, which Files to update.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files updateMany
   */
  export type FilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * Files updateManyAndReturn
   */
  export type FilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files upsert
   */
  export type FilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Files to update in case it exists.
     */
    where: FilesWhereUniqueInput
    /**
     * In case the Files found by the `where` argument doesn't exist, create a new Files with this data.
     */
    create: XOR<FilesCreateInput, FilesUncheckedCreateInput>
    /**
     * In case the Files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
  }

  /**
   * Files delete
   */
  export type FilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter which Files to delete.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files deleteMany
   */
  export type FilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * Files.shareFiles
   */
  export type Files$shareFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    where?: ShareFileWhereInput
    orderBy?: ShareFileOrderByWithRelationInput | ShareFileOrderByWithRelationInput[]
    cursor?: ShareFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareFileScalarFieldEnum | ShareFileScalarFieldEnum[]
  }

  /**
   * Files without action
   */
  export type FilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
  }


  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  export type FolderAvgAggregateOutputType = {
    userId: number | null
  }

  export type FolderSumAggregateOutputType = {
    userId: number | null
  }

  export type FolderMinAggregateOutputType = {
    id: string | null
    name: string | null
    destination: string | null
    folderUrl: string | null
    userId: number | null
    parentId: string | null
  }

  export type FolderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    destination: string | null
    folderUrl: string | null
    userId: number | null
    parentId: string | null
  }

  export type FolderCountAggregateOutputType = {
    id: number
    name: number
    destination: number
    folderUrl: number
    userId: number
    parentId: number
    _all: number
  }


  export type FolderAvgAggregateInputType = {
    userId?: true
  }

  export type FolderSumAggregateInputType = {
    userId?: true
  }

  export type FolderMinAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    folderUrl?: true
    userId?: true
    parentId?: true
  }

  export type FolderMaxAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    folderUrl?: true
    userId?: true
    parentId?: true
  }

  export type FolderCountAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    folderUrl?: true
    userId?: true
    parentId?: true
    _all?: true
  }

  export type FolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folders
    **/
    _count?: true | FolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolderMaxAggregateInputType
  }

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
        [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>
  }




  export type FolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithAggregationInput | FolderOrderByWithAggregationInput[]
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum
    having?: FolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolderCountAggregateInputType | true
    _avg?: FolderAvgAggregateInputType
    _sum?: FolderSumAggregateInputType
    _min?: FolderMinAggregateInputType
    _max?: FolderMaxAggregateInputType
  }

  export type FolderGroupByOutputType = {
    id: string
    name: string
    destination: string
    folderUrl: string
    userId: number
    parentId: string | null
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>
        }
      >
    >


  export type FolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    folderUrl?: boolean
    userId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
    files?: boolean | Folder$filesArgs<ExtArgs>
    folders?: boolean | Folder$foldersArgs<ExtArgs>
    shareFolders?: boolean | Folder$shareFoldersArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    folderUrl?: boolean
    userId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    folderUrl?: boolean
    userId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectScalar = {
    id?: boolean
    name?: boolean
    destination?: boolean
    folderUrl?: boolean
    userId?: boolean
    parentId?: boolean
  }

  export type FolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "destination" | "folderUrl" | "userId" | "parentId", ExtArgs["result"]["folder"]>
  export type FolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
    files?: boolean | Folder$filesArgs<ExtArgs>
    folders?: boolean | Folder$foldersArgs<ExtArgs>
    shareFolders?: boolean | Folder$shareFoldersArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }
  export type FolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }

  export type $FolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$FolderPayload<ExtArgs> | null
      files: Prisma.$FilesPayload<ExtArgs>[]
      folders: Prisma.$FolderPayload<ExtArgs>[]
      shareFolders: Prisma.$ShareFolderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      destination: string
      folderUrl: string
      userId: number
      parentId: string | null
    }, ExtArgs["result"]["folder"]>
    composites: {}
  }

  type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = $Result.GetResult<Prisma.$FolderPayload, S>

  type FolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolderCountAggregateInputType | true
    }

  export interface FolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folder'], meta: { name: 'Folder' } }
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolderFindManyArgs>(args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     * 
     */
    create<T extends FolderCreateArgs>(args: SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolderCreateManyArgs>(args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     * 
     */
    delete<T extends FolderDeleteArgs>(args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolderUpdateArgs>(args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolderDeleteManyArgs>(args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolderUpdateManyArgs>(args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {FolderUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(args: SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolderAggregateArgs>(args: Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
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
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs['orderBy'] }
        : { orderBy?: FolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folder model
   */
  readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Folder$parentArgs<ExtArgs> = {}>(args?: Subset<T, Folder$parentArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    files<T extends Folder$filesArgs<ExtArgs> = {}>(args?: Subset<T, Folder$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    folders<T extends Folder$foldersArgs<ExtArgs> = {}>(args?: Subset<T, Folder$foldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shareFolders<T extends Folder$shareFoldersArgs<ExtArgs> = {}>(args?: Subset<T, Folder$shareFoldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", 'String'>
    readonly name: FieldRef<"Folder", 'String'>
    readonly destination: FieldRef<"Folder", 'String'>
    readonly folderUrl: FieldRef<"Folder", 'String'>
    readonly userId: FieldRef<"Folder", 'Int'>
    readonly parentId: FieldRef<"Folder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder create
   */
  export type FolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>
  }

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder update
   */
  export type FolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder updateManyAndReturn
   */
  export type FolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
  }

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to delete.
     */
    limit?: number
  }

  /**
   * Folder.parent
   */
  export type Folder$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
  }

  /**
   * Folder.files
   */
  export type Folder$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    cursor?: FilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Folder.folders
   */
  export type Folder$foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder.shareFolders
   */
  export type Folder$shareFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    where?: ShareFolderWhereInput
    orderBy?: ShareFolderOrderByWithRelationInput | ShareFolderOrderByWithRelationInput[]
    cursor?: ShareFolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareFolderScalarFieldEnum | ShareFolderScalarFieldEnum[]
  }

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
  }


  /**
   * Model ShareFolder
   */

  export type AggregateShareFolder = {
    _count: ShareFolderCountAggregateOutputType | null
    _min: ShareFolderMinAggregateOutputType | null
    _max: ShareFolderMaxAggregateOutputType | null
  }

  export type ShareFolderMinAggregateOutputType = {
    id: string | null
    name: string | null
    shareUrl: string | null
    expiredAt: Date | null
    folderId: string | null
  }

  export type ShareFolderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    shareUrl: string | null
    expiredAt: Date | null
    folderId: string | null
  }

  export type ShareFolderCountAggregateOutputType = {
    id: number
    name: number
    shareUrl: number
    expiredAt: number
    folderId: number
    _all: number
  }


  export type ShareFolderMinAggregateInputType = {
    id?: true
    name?: true
    shareUrl?: true
    expiredAt?: true
    folderId?: true
  }

  export type ShareFolderMaxAggregateInputType = {
    id?: true
    name?: true
    shareUrl?: true
    expiredAt?: true
    folderId?: true
  }

  export type ShareFolderCountAggregateInputType = {
    id?: true
    name?: true
    shareUrl?: true
    expiredAt?: true
    folderId?: true
    _all?: true
  }

  export type ShareFolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareFolder to aggregate.
     */
    where?: ShareFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFolders to fetch.
     */
    orderBy?: ShareFolderOrderByWithRelationInput | ShareFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareFolders
    **/
    _count?: true | ShareFolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareFolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareFolderMaxAggregateInputType
  }

  export type GetShareFolderAggregateType<T extends ShareFolderAggregateArgs> = {
        [P in keyof T & keyof AggregateShareFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareFolder[P]>
      : GetScalarType<T[P], AggregateShareFolder[P]>
  }




  export type ShareFolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareFolderWhereInput
    orderBy?: ShareFolderOrderByWithAggregationInput | ShareFolderOrderByWithAggregationInput[]
    by: ShareFolderScalarFieldEnum[] | ShareFolderScalarFieldEnum
    having?: ShareFolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareFolderCountAggregateInputType | true
    _min?: ShareFolderMinAggregateInputType
    _max?: ShareFolderMaxAggregateInputType
  }

  export type ShareFolderGroupByOutputType = {
    id: string
    name: string
    shareUrl: string
    expiredAt: Date
    folderId: string
    _count: ShareFolderCountAggregateOutputType | null
    _min: ShareFolderMinAggregateOutputType | null
    _max: ShareFolderMaxAggregateOutputType | null
  }

  type GetShareFolderGroupByPayload<T extends ShareFolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareFolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareFolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareFolderGroupByOutputType[P]>
            : GetScalarType<T[P], ShareFolderGroupByOutputType[P]>
        }
      >
    >


  export type ShareFolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shareUrl?: boolean
    expiredAt?: boolean
    folderId?: boolean
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareFolder"]>

  export type ShareFolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shareUrl?: boolean
    expiredAt?: boolean
    folderId?: boolean
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareFolder"]>

  export type ShareFolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shareUrl?: boolean
    expiredAt?: boolean
    folderId?: boolean
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareFolder"]>

  export type ShareFolderSelectScalar = {
    id?: boolean
    name?: boolean
    shareUrl?: boolean
    expiredAt?: boolean
    folderId?: boolean
  }

  export type ShareFolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shareUrl" | "expiredAt" | "folderId", ExtArgs["result"]["shareFolder"]>
  export type ShareFolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }
  export type ShareFolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }
  export type ShareFolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }

  export type $ShareFolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareFolder"
    objects: {
      folder: Prisma.$FolderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      shareUrl: string
      expiredAt: Date
      folderId: string
    }, ExtArgs["result"]["shareFolder"]>
    composites: {}
  }

  type ShareFolderGetPayload<S extends boolean | null | undefined | ShareFolderDefaultArgs> = $Result.GetResult<Prisma.$ShareFolderPayload, S>

  type ShareFolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareFolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareFolderCountAggregateInputType | true
    }

  export interface ShareFolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareFolder'], meta: { name: 'ShareFolder' } }
    /**
     * Find zero or one ShareFolder that matches the filter.
     * @param {ShareFolderFindUniqueArgs} args - Arguments to find a ShareFolder
     * @example
     * // Get one ShareFolder
     * const shareFolder = await prisma.shareFolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareFolderFindUniqueArgs>(args: SelectSubset<T, ShareFolderFindUniqueArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareFolder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareFolderFindUniqueOrThrowArgs} args - Arguments to find a ShareFolder
     * @example
     * // Get one ShareFolder
     * const shareFolder = await prisma.shareFolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareFolderFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareFolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareFolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFolderFindFirstArgs} args - Arguments to find a ShareFolder
     * @example
     * // Get one ShareFolder
     * const shareFolder = await prisma.shareFolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareFolderFindFirstArgs>(args?: SelectSubset<T, ShareFolderFindFirstArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareFolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFolderFindFirstOrThrowArgs} args - Arguments to find a ShareFolder
     * @example
     * // Get one ShareFolder
     * const shareFolder = await prisma.shareFolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareFolderFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareFolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareFolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareFolders
     * const shareFolders = await prisma.shareFolder.findMany()
     * 
     * // Get first 10 ShareFolders
     * const shareFolders = await prisma.shareFolder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareFolderWithIdOnly = await prisma.shareFolder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareFolderFindManyArgs>(args?: SelectSubset<T, ShareFolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareFolder.
     * @param {ShareFolderCreateArgs} args - Arguments to create a ShareFolder.
     * @example
     * // Create one ShareFolder
     * const ShareFolder = await prisma.shareFolder.create({
     *   data: {
     *     // ... data to create a ShareFolder
     *   }
     * })
     * 
     */
    create<T extends ShareFolderCreateArgs>(args: SelectSubset<T, ShareFolderCreateArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareFolders.
     * @param {ShareFolderCreateManyArgs} args - Arguments to create many ShareFolders.
     * @example
     * // Create many ShareFolders
     * const shareFolder = await prisma.shareFolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareFolderCreateManyArgs>(args?: SelectSubset<T, ShareFolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareFolders and returns the data saved in the database.
     * @param {ShareFolderCreateManyAndReturnArgs} args - Arguments to create many ShareFolders.
     * @example
     * // Create many ShareFolders
     * const shareFolder = await prisma.shareFolder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareFolders and only return the `id`
     * const shareFolderWithIdOnly = await prisma.shareFolder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareFolderCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareFolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareFolder.
     * @param {ShareFolderDeleteArgs} args - Arguments to delete one ShareFolder.
     * @example
     * // Delete one ShareFolder
     * const ShareFolder = await prisma.shareFolder.delete({
     *   where: {
     *     // ... filter to delete one ShareFolder
     *   }
     * })
     * 
     */
    delete<T extends ShareFolderDeleteArgs>(args: SelectSubset<T, ShareFolderDeleteArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareFolder.
     * @param {ShareFolderUpdateArgs} args - Arguments to update one ShareFolder.
     * @example
     * // Update one ShareFolder
     * const shareFolder = await prisma.shareFolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareFolderUpdateArgs>(args: SelectSubset<T, ShareFolderUpdateArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareFolders.
     * @param {ShareFolderDeleteManyArgs} args - Arguments to filter ShareFolders to delete.
     * @example
     * // Delete a few ShareFolders
     * const { count } = await prisma.shareFolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareFolderDeleteManyArgs>(args?: SelectSubset<T, ShareFolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareFolders
     * const shareFolder = await prisma.shareFolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareFolderUpdateManyArgs>(args: SelectSubset<T, ShareFolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareFolders and returns the data updated in the database.
     * @param {ShareFolderUpdateManyAndReturnArgs} args - Arguments to update many ShareFolders.
     * @example
     * // Update many ShareFolders
     * const shareFolder = await prisma.shareFolder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareFolders and only return the `id`
     * const shareFolderWithIdOnly = await prisma.shareFolder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareFolderUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareFolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareFolder.
     * @param {ShareFolderUpsertArgs} args - Arguments to update or create a ShareFolder.
     * @example
     * // Update or create a ShareFolder
     * const shareFolder = await prisma.shareFolder.upsert({
     *   create: {
     *     // ... data to create a ShareFolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareFolder we want to update
     *   }
     * })
     */
    upsert<T extends ShareFolderUpsertArgs>(args: SelectSubset<T, ShareFolderUpsertArgs<ExtArgs>>): Prisma__ShareFolderClient<$Result.GetResult<Prisma.$ShareFolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFolderCountArgs} args - Arguments to filter ShareFolders to count.
     * @example
     * // Count the number of ShareFolders
     * const count = await prisma.shareFolder.count({
     *   where: {
     *     // ... the filter for the ShareFolders we want to count
     *   }
     * })
    **/
    count<T extends ShareFolderCountArgs>(
      args?: Subset<T, ShareFolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareFolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareFolderAggregateArgs>(args: Subset<T, ShareFolderAggregateArgs>): Prisma.PrismaPromise<GetShareFolderAggregateType<T>>

    /**
     * Group by ShareFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFolderGroupByArgs} args - Group by arguments.
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
      T extends ShareFolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareFolderGroupByArgs['orderBy'] }
        : { orderBy?: ShareFolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShareFolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareFolder model
   */
  readonly fields: ShareFolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareFolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareFolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folder<T extends FolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FolderDefaultArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShareFolder model
   */
  interface ShareFolderFieldRefs {
    readonly id: FieldRef<"ShareFolder", 'String'>
    readonly name: FieldRef<"ShareFolder", 'String'>
    readonly shareUrl: FieldRef<"ShareFolder", 'String'>
    readonly expiredAt: FieldRef<"ShareFolder", 'DateTime'>
    readonly folderId: FieldRef<"ShareFolder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShareFolder findUnique
   */
  export type ShareFolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * Filter, which ShareFolder to fetch.
     */
    where: ShareFolderWhereUniqueInput
  }

  /**
   * ShareFolder findUniqueOrThrow
   */
  export type ShareFolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * Filter, which ShareFolder to fetch.
     */
    where: ShareFolderWhereUniqueInput
  }

  /**
   * ShareFolder findFirst
   */
  export type ShareFolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * Filter, which ShareFolder to fetch.
     */
    where?: ShareFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFolders to fetch.
     */
    orderBy?: ShareFolderOrderByWithRelationInput | ShareFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareFolders.
     */
    cursor?: ShareFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareFolders.
     */
    distinct?: ShareFolderScalarFieldEnum | ShareFolderScalarFieldEnum[]
  }

  /**
   * ShareFolder findFirstOrThrow
   */
  export type ShareFolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * Filter, which ShareFolder to fetch.
     */
    where?: ShareFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFolders to fetch.
     */
    orderBy?: ShareFolderOrderByWithRelationInput | ShareFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareFolders.
     */
    cursor?: ShareFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareFolders.
     */
    distinct?: ShareFolderScalarFieldEnum | ShareFolderScalarFieldEnum[]
  }

  /**
   * ShareFolder findMany
   */
  export type ShareFolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * Filter, which ShareFolders to fetch.
     */
    where?: ShareFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFolders to fetch.
     */
    orderBy?: ShareFolderOrderByWithRelationInput | ShareFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareFolders.
     */
    cursor?: ShareFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFolders.
     */
    skip?: number
    distinct?: ShareFolderScalarFieldEnum | ShareFolderScalarFieldEnum[]
  }

  /**
   * ShareFolder create
   */
  export type ShareFolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareFolder.
     */
    data: XOR<ShareFolderCreateInput, ShareFolderUncheckedCreateInput>
  }

  /**
   * ShareFolder createMany
   */
  export type ShareFolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareFolders.
     */
    data: ShareFolderCreateManyInput | ShareFolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareFolder createManyAndReturn
   */
  export type ShareFolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * The data used to create many ShareFolders.
     */
    data: ShareFolderCreateManyInput | ShareFolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareFolder update
   */
  export type ShareFolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareFolder.
     */
    data: XOR<ShareFolderUpdateInput, ShareFolderUncheckedUpdateInput>
    /**
     * Choose, which ShareFolder to update.
     */
    where: ShareFolderWhereUniqueInput
  }

  /**
   * ShareFolder updateMany
   */
  export type ShareFolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareFolders.
     */
    data: XOR<ShareFolderUpdateManyMutationInput, ShareFolderUncheckedUpdateManyInput>
    /**
     * Filter which ShareFolders to update
     */
    where?: ShareFolderWhereInput
    /**
     * Limit how many ShareFolders to update.
     */
    limit?: number
  }

  /**
   * ShareFolder updateManyAndReturn
   */
  export type ShareFolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * The data used to update ShareFolders.
     */
    data: XOR<ShareFolderUpdateManyMutationInput, ShareFolderUncheckedUpdateManyInput>
    /**
     * Filter which ShareFolders to update
     */
    where?: ShareFolderWhereInput
    /**
     * Limit how many ShareFolders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareFolder upsert
   */
  export type ShareFolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareFolder to update in case it exists.
     */
    where: ShareFolderWhereUniqueInput
    /**
     * In case the ShareFolder found by the `where` argument doesn't exist, create a new ShareFolder with this data.
     */
    create: XOR<ShareFolderCreateInput, ShareFolderUncheckedCreateInput>
    /**
     * In case the ShareFolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareFolderUpdateInput, ShareFolderUncheckedUpdateInput>
  }

  /**
   * ShareFolder delete
   */
  export type ShareFolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
    /**
     * Filter which ShareFolder to delete.
     */
    where: ShareFolderWhereUniqueInput
  }

  /**
   * ShareFolder deleteMany
   */
  export type ShareFolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareFolders to delete
     */
    where?: ShareFolderWhereInput
    /**
     * Limit how many ShareFolders to delete.
     */
    limit?: number
  }

  /**
   * ShareFolder without action
   */
  export type ShareFolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFolder
     */
    select?: ShareFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFolder
     */
    omit?: ShareFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFolderInclude<ExtArgs> | null
  }


  /**
   * Model ShareFile
   */

  export type AggregateShareFile = {
    _count: ShareFileCountAggregateOutputType | null
    _min: ShareFileMinAggregateOutputType | null
    _max: ShareFileMaxAggregateOutputType | null
  }

  export type ShareFileMinAggregateOutputType = {
    id: string | null
    shareFileUrl: string | null
    expiredAt: Date | null
    fileId: string | null
  }

  export type ShareFileMaxAggregateOutputType = {
    id: string | null
    shareFileUrl: string | null
    expiredAt: Date | null
    fileId: string | null
  }

  export type ShareFileCountAggregateOutputType = {
    id: number
    shareFileUrl: number
    expiredAt: number
    fileId: number
    _all: number
  }


  export type ShareFileMinAggregateInputType = {
    id?: true
    shareFileUrl?: true
    expiredAt?: true
    fileId?: true
  }

  export type ShareFileMaxAggregateInputType = {
    id?: true
    shareFileUrl?: true
    expiredAt?: true
    fileId?: true
  }

  export type ShareFileCountAggregateInputType = {
    id?: true
    shareFileUrl?: true
    expiredAt?: true
    fileId?: true
    _all?: true
  }

  export type ShareFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareFile to aggregate.
     */
    where?: ShareFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFiles to fetch.
     */
    orderBy?: ShareFileOrderByWithRelationInput | ShareFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareFiles
    **/
    _count?: true | ShareFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareFileMaxAggregateInputType
  }

  export type GetShareFileAggregateType<T extends ShareFileAggregateArgs> = {
        [P in keyof T & keyof AggregateShareFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareFile[P]>
      : GetScalarType<T[P], AggregateShareFile[P]>
  }




  export type ShareFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareFileWhereInput
    orderBy?: ShareFileOrderByWithAggregationInput | ShareFileOrderByWithAggregationInput[]
    by: ShareFileScalarFieldEnum[] | ShareFileScalarFieldEnum
    having?: ShareFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareFileCountAggregateInputType | true
    _min?: ShareFileMinAggregateInputType
    _max?: ShareFileMaxAggregateInputType
  }

  export type ShareFileGroupByOutputType = {
    id: string
    shareFileUrl: string
    expiredAt: Date
    fileId: string
    _count: ShareFileCountAggregateOutputType | null
    _min: ShareFileMinAggregateOutputType | null
    _max: ShareFileMaxAggregateOutputType | null
  }

  type GetShareFileGroupByPayload<T extends ShareFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareFileGroupByOutputType[P]>
            : GetScalarType<T[P], ShareFileGroupByOutputType[P]>
        }
      >
    >


  export type ShareFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareFileUrl?: boolean
    expiredAt?: boolean
    fileId?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareFile"]>

  export type ShareFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareFileUrl?: boolean
    expiredAt?: boolean
    fileId?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareFile"]>

  export type ShareFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareFileUrl?: boolean
    expiredAt?: boolean
    fileId?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareFile"]>

  export type ShareFileSelectScalar = {
    id?: boolean
    shareFileUrl?: boolean
    expiredAt?: boolean
    fileId?: boolean
  }

  export type ShareFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shareFileUrl" | "expiredAt" | "fileId", ExtArgs["result"]["shareFile"]>
  export type ShareFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }
  export type ShareFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }
  export type ShareFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }

  export type $ShareFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareFile"
    objects: {
      file: Prisma.$FilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shareFileUrl: string
      expiredAt: Date
      fileId: string
    }, ExtArgs["result"]["shareFile"]>
    composites: {}
  }

  type ShareFileGetPayload<S extends boolean | null | undefined | ShareFileDefaultArgs> = $Result.GetResult<Prisma.$ShareFilePayload, S>

  type ShareFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareFileCountAggregateInputType | true
    }

  export interface ShareFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareFile'], meta: { name: 'ShareFile' } }
    /**
     * Find zero or one ShareFile that matches the filter.
     * @param {ShareFileFindUniqueArgs} args - Arguments to find a ShareFile
     * @example
     * // Get one ShareFile
     * const shareFile = await prisma.shareFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareFileFindUniqueArgs>(args: SelectSubset<T, ShareFileFindUniqueArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareFileFindUniqueOrThrowArgs} args - Arguments to find a ShareFile
     * @example
     * // Get one ShareFile
     * const shareFile = await prisma.shareFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFileFindFirstArgs} args - Arguments to find a ShareFile
     * @example
     * // Get one ShareFile
     * const shareFile = await prisma.shareFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareFileFindFirstArgs>(args?: SelectSubset<T, ShareFileFindFirstArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFileFindFirstOrThrowArgs} args - Arguments to find a ShareFile
     * @example
     * // Get one ShareFile
     * const shareFile = await prisma.shareFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareFiles
     * const shareFiles = await prisma.shareFile.findMany()
     * 
     * // Get first 10 ShareFiles
     * const shareFiles = await prisma.shareFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareFileWithIdOnly = await prisma.shareFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareFileFindManyArgs>(args?: SelectSubset<T, ShareFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareFile.
     * @param {ShareFileCreateArgs} args - Arguments to create a ShareFile.
     * @example
     * // Create one ShareFile
     * const ShareFile = await prisma.shareFile.create({
     *   data: {
     *     // ... data to create a ShareFile
     *   }
     * })
     * 
     */
    create<T extends ShareFileCreateArgs>(args: SelectSubset<T, ShareFileCreateArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareFiles.
     * @param {ShareFileCreateManyArgs} args - Arguments to create many ShareFiles.
     * @example
     * // Create many ShareFiles
     * const shareFile = await prisma.shareFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareFileCreateManyArgs>(args?: SelectSubset<T, ShareFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareFiles and returns the data saved in the database.
     * @param {ShareFileCreateManyAndReturnArgs} args - Arguments to create many ShareFiles.
     * @example
     * // Create many ShareFiles
     * const shareFile = await prisma.shareFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareFiles and only return the `id`
     * const shareFileWithIdOnly = await prisma.shareFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareFile.
     * @param {ShareFileDeleteArgs} args - Arguments to delete one ShareFile.
     * @example
     * // Delete one ShareFile
     * const ShareFile = await prisma.shareFile.delete({
     *   where: {
     *     // ... filter to delete one ShareFile
     *   }
     * })
     * 
     */
    delete<T extends ShareFileDeleteArgs>(args: SelectSubset<T, ShareFileDeleteArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareFile.
     * @param {ShareFileUpdateArgs} args - Arguments to update one ShareFile.
     * @example
     * // Update one ShareFile
     * const shareFile = await prisma.shareFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareFileUpdateArgs>(args: SelectSubset<T, ShareFileUpdateArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareFiles.
     * @param {ShareFileDeleteManyArgs} args - Arguments to filter ShareFiles to delete.
     * @example
     * // Delete a few ShareFiles
     * const { count } = await prisma.shareFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareFileDeleteManyArgs>(args?: SelectSubset<T, ShareFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareFiles
     * const shareFile = await prisma.shareFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareFileUpdateManyArgs>(args: SelectSubset<T, ShareFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareFiles and returns the data updated in the database.
     * @param {ShareFileUpdateManyAndReturnArgs} args - Arguments to update many ShareFiles.
     * @example
     * // Update many ShareFiles
     * const shareFile = await prisma.shareFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareFiles and only return the `id`
     * const shareFileWithIdOnly = await prisma.shareFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareFile.
     * @param {ShareFileUpsertArgs} args - Arguments to update or create a ShareFile.
     * @example
     * // Update or create a ShareFile
     * const shareFile = await prisma.shareFile.upsert({
     *   create: {
     *     // ... data to create a ShareFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareFile we want to update
     *   }
     * })
     */
    upsert<T extends ShareFileUpsertArgs>(args: SelectSubset<T, ShareFileUpsertArgs<ExtArgs>>): Prisma__ShareFileClient<$Result.GetResult<Prisma.$ShareFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFileCountArgs} args - Arguments to filter ShareFiles to count.
     * @example
     * // Count the number of ShareFiles
     * const count = await prisma.shareFile.count({
     *   where: {
     *     // ... the filter for the ShareFiles we want to count
     *   }
     * })
    **/
    count<T extends ShareFileCountArgs>(
      args?: Subset<T, ShareFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareFileAggregateArgs>(args: Subset<T, ShareFileAggregateArgs>): Prisma.PrismaPromise<GetShareFileAggregateType<T>>

    /**
     * Group by ShareFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFileGroupByArgs} args - Group by arguments.
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
      T extends ShareFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareFileGroupByArgs['orderBy'] }
        : { orderBy?: ShareFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShareFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareFile model
   */
  readonly fields: ShareFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilesDefaultArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShareFile model
   */
  interface ShareFileFieldRefs {
    readonly id: FieldRef<"ShareFile", 'String'>
    readonly shareFileUrl: FieldRef<"ShareFile", 'String'>
    readonly expiredAt: FieldRef<"ShareFile", 'DateTime'>
    readonly fileId: FieldRef<"ShareFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShareFile findUnique
   */
  export type ShareFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * Filter, which ShareFile to fetch.
     */
    where: ShareFileWhereUniqueInput
  }

  /**
   * ShareFile findUniqueOrThrow
   */
  export type ShareFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * Filter, which ShareFile to fetch.
     */
    where: ShareFileWhereUniqueInput
  }

  /**
   * ShareFile findFirst
   */
  export type ShareFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * Filter, which ShareFile to fetch.
     */
    where?: ShareFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFiles to fetch.
     */
    orderBy?: ShareFileOrderByWithRelationInput | ShareFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareFiles.
     */
    cursor?: ShareFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareFiles.
     */
    distinct?: ShareFileScalarFieldEnum | ShareFileScalarFieldEnum[]
  }

  /**
   * ShareFile findFirstOrThrow
   */
  export type ShareFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * Filter, which ShareFile to fetch.
     */
    where?: ShareFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFiles to fetch.
     */
    orderBy?: ShareFileOrderByWithRelationInput | ShareFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareFiles.
     */
    cursor?: ShareFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareFiles.
     */
    distinct?: ShareFileScalarFieldEnum | ShareFileScalarFieldEnum[]
  }

  /**
   * ShareFile findMany
   */
  export type ShareFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * Filter, which ShareFiles to fetch.
     */
    where?: ShareFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareFiles to fetch.
     */
    orderBy?: ShareFileOrderByWithRelationInput | ShareFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareFiles.
     */
    cursor?: ShareFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareFiles.
     */
    skip?: number
    distinct?: ShareFileScalarFieldEnum | ShareFileScalarFieldEnum[]
  }

  /**
   * ShareFile create
   */
  export type ShareFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareFile.
     */
    data: XOR<ShareFileCreateInput, ShareFileUncheckedCreateInput>
  }

  /**
   * ShareFile createMany
   */
  export type ShareFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareFiles.
     */
    data: ShareFileCreateManyInput | ShareFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareFile createManyAndReturn
   */
  export type ShareFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * The data used to create many ShareFiles.
     */
    data: ShareFileCreateManyInput | ShareFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareFile update
   */
  export type ShareFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareFile.
     */
    data: XOR<ShareFileUpdateInput, ShareFileUncheckedUpdateInput>
    /**
     * Choose, which ShareFile to update.
     */
    where: ShareFileWhereUniqueInput
  }

  /**
   * ShareFile updateMany
   */
  export type ShareFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareFiles.
     */
    data: XOR<ShareFileUpdateManyMutationInput, ShareFileUncheckedUpdateManyInput>
    /**
     * Filter which ShareFiles to update
     */
    where?: ShareFileWhereInput
    /**
     * Limit how many ShareFiles to update.
     */
    limit?: number
  }

  /**
   * ShareFile updateManyAndReturn
   */
  export type ShareFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * The data used to update ShareFiles.
     */
    data: XOR<ShareFileUpdateManyMutationInput, ShareFileUncheckedUpdateManyInput>
    /**
     * Filter which ShareFiles to update
     */
    where?: ShareFileWhereInput
    /**
     * Limit how many ShareFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareFile upsert
   */
  export type ShareFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareFile to update in case it exists.
     */
    where: ShareFileWhereUniqueInput
    /**
     * In case the ShareFile found by the `where` argument doesn't exist, create a new ShareFile with this data.
     */
    create: XOR<ShareFileCreateInput, ShareFileUncheckedCreateInput>
    /**
     * In case the ShareFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareFileUpdateInput, ShareFileUncheckedUpdateInput>
  }

  /**
   * ShareFile delete
   */
  export type ShareFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
    /**
     * Filter which ShareFile to delete.
     */
    where: ShareFileWhereUniqueInput
  }

  /**
   * ShareFile deleteMany
   */
  export type ShareFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareFiles to delete
     */
    where?: ShareFileWhereInput
    /**
     * Limit how many ShareFiles to delete.
     */
    limit?: number
  }

  /**
   * ShareFile without action
   */
  export type ShareFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareFile
     */
    select?: ShareFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareFile
     */
    omit?: ShareFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareFileInclude<ExtArgs> | null
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


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    originalName: 'originalName',
    fileUrl: 'fileUrl',
    size: 'size',
    uploadedAt: 'uploadedAt',
    folderId: 'folderId',
    destinationId: 'destinationId'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const FolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    destination: 'destination',
    folderUrl: 'folderUrl',
    userId: 'userId',
    parentId: 'parentId'
  };

  export type FolderScalarFieldEnum = (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum]


  export const ShareFolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shareUrl: 'shareUrl',
    expiredAt: 'expiredAt',
    folderId: 'folderId'
  };

  export type ShareFolderScalarFieldEnum = (typeof ShareFolderScalarFieldEnum)[keyof typeof ShareFolderScalarFieldEnum]


  export const ShareFileScalarFieldEnum: {
    id: 'id',
    shareFileUrl: 'shareFileUrl',
    expiredAt: 'expiredAt',
    fileId: 'fileId'
  };

  export type ShareFileScalarFieldEnum = (typeof ShareFileScalarFieldEnum)[keyof typeof ShareFileScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    folders?: FolderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    folders?: FolderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    folders?: FolderListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type FilesWhereInput = {
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    id?: StringFilter<"Files"> | string
    name?: StringFilter<"Files"> | string
    originalName?: StringFilter<"Files"> | string
    fileUrl?: StringFilter<"Files"> | string
    size?: IntFilter<"Files"> | number
    uploadedAt?: DateTimeFilter<"Files"> | Date | string
    folderId?: StringFilter<"Files"> | string
    destinationId?: StringFilter<"Files"> | string
    destinationFolder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
    shareFiles?: ShareFileListRelationFilter
  }

  export type FilesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    size?: SortOrder
    uploadedAt?: SortOrder
    folderId?: SortOrder
    destinationId?: SortOrder
    destinationFolder?: FolderOrderByWithRelationInput
    shareFiles?: ShareFileOrderByRelationAggregateInput
  }

  export type FilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileUrl?: string
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    name?: StringFilter<"Files"> | string
    originalName?: StringFilter<"Files"> | string
    size?: IntFilter<"Files"> | number
    uploadedAt?: DateTimeFilter<"Files"> | Date | string
    folderId?: StringFilter<"Files"> | string
    destinationId?: StringFilter<"Files"> | string
    destinationFolder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
    shareFiles?: ShareFileListRelationFilter
  }, "id" | "fileUrl">

  export type FilesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    size?: SortOrder
    uploadedAt?: SortOrder
    folderId?: SortOrder
    destinationId?: SortOrder
    _count?: FilesCountOrderByAggregateInput
    _avg?: FilesAvgOrderByAggregateInput
    _max?: FilesMaxOrderByAggregateInput
    _min?: FilesMinOrderByAggregateInput
    _sum?: FilesSumOrderByAggregateInput
  }

  export type FilesScalarWhereWithAggregatesInput = {
    AND?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    OR?: FilesScalarWhereWithAggregatesInput[]
    NOT?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Files"> | string
    name?: StringWithAggregatesFilter<"Files"> | string
    originalName?: StringWithAggregatesFilter<"Files"> | string
    fileUrl?: StringWithAggregatesFilter<"Files"> | string
    size?: IntWithAggregatesFilter<"Files"> | number
    uploadedAt?: DateTimeWithAggregatesFilter<"Files"> | Date | string
    folderId?: StringWithAggregatesFilter<"Files"> | string
    destinationId?: StringWithAggregatesFilter<"Files"> | string
  }

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    destination?: StringFilter<"Folder"> | string
    folderUrl?: StringFilter<"Folder"> | string
    userId?: IntFilter<"Folder"> | number
    parentId?: StringNullableFilter<"Folder"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    files?: FilesListRelationFilter
    folders?: FolderListRelationFilter
    shareFolders?: ShareFolderListRelationFilter
  }

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    folderUrl?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    parent?: FolderOrderByWithRelationInput
    files?: FilesOrderByRelationAggregateInput
    folders?: FolderOrderByRelationAggregateInput
    shareFolders?: ShareFolderOrderByRelationAggregateInput
  }

  export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    destination?: string
    folderUrl?: string
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    name?: StringFilter<"Folder"> | string
    userId?: IntFilter<"Folder"> | number
    parentId?: StringNullableFilter<"Folder"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    files?: FilesListRelationFilter
    folders?: FolderListRelationFilter
    shareFolders?: ShareFolderListRelationFilter
  }, "id" | "destination" | "folderUrl">

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    folderUrl?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: FolderCountOrderByAggregateInput
    _avg?: FolderAvgOrderByAggregateInput
    _max?: FolderMaxOrderByAggregateInput
    _min?: FolderMinOrderByAggregateInput
    _sum?: FolderSumOrderByAggregateInput
  }

  export type FolderScalarWhereWithAggregatesInput = {
    AND?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    OR?: FolderScalarWhereWithAggregatesInput[]
    NOT?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Folder"> | string
    name?: StringWithAggregatesFilter<"Folder"> | string
    destination?: StringWithAggregatesFilter<"Folder"> | string
    folderUrl?: StringWithAggregatesFilter<"Folder"> | string
    userId?: IntWithAggregatesFilter<"Folder"> | number
    parentId?: StringNullableWithAggregatesFilter<"Folder"> | string | null
  }

  export type ShareFolderWhereInput = {
    AND?: ShareFolderWhereInput | ShareFolderWhereInput[]
    OR?: ShareFolderWhereInput[]
    NOT?: ShareFolderWhereInput | ShareFolderWhereInput[]
    id?: StringFilter<"ShareFolder"> | string
    name?: StringFilter<"ShareFolder"> | string
    shareUrl?: StringFilter<"ShareFolder"> | string
    expiredAt?: DateTimeFilter<"ShareFolder"> | Date | string
    folderId?: StringFilter<"ShareFolder"> | string
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
  }

  export type ShareFolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shareUrl?: SortOrder
    expiredAt?: SortOrder
    folderId?: SortOrder
    folder?: FolderOrderByWithRelationInput
  }

  export type ShareFolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareUrl?: string
    AND?: ShareFolderWhereInput | ShareFolderWhereInput[]
    OR?: ShareFolderWhereInput[]
    NOT?: ShareFolderWhereInput | ShareFolderWhereInput[]
    name?: StringFilter<"ShareFolder"> | string
    expiredAt?: DateTimeFilter<"ShareFolder"> | Date | string
    folderId?: StringFilter<"ShareFolder"> | string
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
  }, "id" | "shareUrl">

  export type ShareFolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shareUrl?: SortOrder
    expiredAt?: SortOrder
    folderId?: SortOrder
    _count?: ShareFolderCountOrderByAggregateInput
    _max?: ShareFolderMaxOrderByAggregateInput
    _min?: ShareFolderMinOrderByAggregateInput
  }

  export type ShareFolderScalarWhereWithAggregatesInput = {
    AND?: ShareFolderScalarWhereWithAggregatesInput | ShareFolderScalarWhereWithAggregatesInput[]
    OR?: ShareFolderScalarWhereWithAggregatesInput[]
    NOT?: ShareFolderScalarWhereWithAggregatesInput | ShareFolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareFolder"> | string
    name?: StringWithAggregatesFilter<"ShareFolder"> | string
    shareUrl?: StringWithAggregatesFilter<"ShareFolder"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"ShareFolder"> | Date | string
    folderId?: StringWithAggregatesFilter<"ShareFolder"> | string
  }

  export type ShareFileWhereInput = {
    AND?: ShareFileWhereInput | ShareFileWhereInput[]
    OR?: ShareFileWhereInput[]
    NOT?: ShareFileWhereInput | ShareFileWhereInput[]
    id?: StringFilter<"ShareFile"> | string
    shareFileUrl?: StringFilter<"ShareFile"> | string
    expiredAt?: DateTimeFilter<"ShareFile"> | Date | string
    fileId?: StringFilter<"ShareFile"> | string
    file?: XOR<FilesScalarRelationFilter, FilesWhereInput>
  }

  export type ShareFileOrderByWithRelationInput = {
    id?: SortOrder
    shareFileUrl?: SortOrder
    expiredAt?: SortOrder
    fileId?: SortOrder
    file?: FilesOrderByWithRelationInput
  }

  export type ShareFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareFileUrl?: string
    AND?: ShareFileWhereInput | ShareFileWhereInput[]
    OR?: ShareFileWhereInput[]
    NOT?: ShareFileWhereInput | ShareFileWhereInput[]
    expiredAt?: DateTimeFilter<"ShareFile"> | Date | string
    fileId?: StringFilter<"ShareFile"> | string
    file?: XOR<FilesScalarRelationFilter, FilesWhereInput>
  }, "id" | "shareFileUrl">

  export type ShareFileOrderByWithAggregationInput = {
    id?: SortOrder
    shareFileUrl?: SortOrder
    expiredAt?: SortOrder
    fileId?: SortOrder
    _count?: ShareFileCountOrderByAggregateInput
    _max?: ShareFileMaxOrderByAggregateInput
    _min?: ShareFileMinOrderByAggregateInput
  }

  export type ShareFileScalarWhereWithAggregatesInput = {
    AND?: ShareFileScalarWhereWithAggregatesInput | ShareFileScalarWhereWithAggregatesInput[]
    OR?: ShareFileScalarWhereWithAggregatesInput[]
    NOT?: ShareFileScalarWhereWithAggregatesInput | ShareFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareFile"> | string
    shareFileUrl?: StringWithAggregatesFilter<"ShareFile"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"ShareFile"> | Date | string
    fileId?: StringWithAggregatesFilter<"ShareFile"> | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    folders?: FolderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    folders?: FolderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FilesCreateInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    destinationId: string
    destinationFolder: FolderCreateNestedOneWithoutFilesInput
    shareFiles?: ShareFileCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    folderId: string
    destinationId: string
    shareFiles?: ShareFileUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationId?: StringFieldUpdateOperationsInput | string
    destinationFolder?: FolderUpdateOneRequiredWithoutFilesNestedInput
    shareFiles?: ShareFileUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    shareFiles?: ShareFileUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesCreateManyInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    folderId: string
    destinationId: string
  }

  export type FilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type FolderCreateInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    user: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutFoldersInput
    files?: FilesCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    userId: number
    parentId?: string | null
    files?: FilesUncheckedCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderUncheckedCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutFoldersNestedInput
    files?: FilesUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    files?: FilesUncheckedUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUncheckedUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderCreateManyInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    userId: number
    parentId?: string | null
  }

  export type FolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
  }

  export type FolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareFolderCreateInput = {
    id?: string
    name: string
    shareUrl: string
    expiredAt: Date | string
    folder: FolderCreateNestedOneWithoutShareFoldersInput
  }

  export type ShareFolderUncheckedCreateInput = {
    id?: string
    name: string
    shareUrl: string
    expiredAt: Date | string
    folderId: string
  }

  export type ShareFolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneRequiredWithoutShareFoldersNestedInput
  }

  export type ShareFolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: StringFieldUpdateOperationsInput | string
  }

  export type ShareFolderCreateManyInput = {
    id?: string
    name: string
    shareUrl: string
    expiredAt: Date | string
    folderId: string
  }

  export type ShareFolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareFolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: StringFieldUpdateOperationsInput | string
  }

  export type ShareFileCreateInput = {
    id?: string
    shareFileUrl: string
    expiredAt: Date | string
    file: FilesCreateNestedOneWithoutShareFilesInput
  }

  export type ShareFileUncheckedCreateInput = {
    id?: string
    shareFileUrl: string
    expiredAt: Date | string
    fileId: string
  }

  export type ShareFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareFileUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FilesUpdateOneRequiredWithoutShareFilesNestedInput
  }

  export type ShareFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareFileUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
  }

  export type ShareFileCreateManyInput = {
    id?: string
    shareFileUrl: string
    expiredAt: Date | string
    fileId: string
  }

  export type ShareFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareFileUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareFileUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
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

  export type FolderListRelationFilter = {
    every?: FolderWhereInput
    some?: FolderWhereInput
    none?: FolderWhereInput
  }

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type FolderScalarRelationFilter = {
    is?: FolderWhereInput
    isNot?: FolderWhereInput
  }

  export type ShareFileListRelationFilter = {
    every?: ShareFileWhereInput
    some?: ShareFileWhereInput
    none?: ShareFileWhereInput
  }

  export type ShareFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    size?: SortOrder
    uploadedAt?: SortOrder
    folderId?: SortOrder
    destinationId?: SortOrder
  }

  export type FilesAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FilesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    size?: SortOrder
    uploadedAt?: SortOrder
    folderId?: SortOrder
    destinationId?: SortOrder
  }

  export type FilesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    size?: SortOrder
    uploadedAt?: SortOrder
    folderId?: SortOrder
    destinationId?: SortOrder
  }

  export type FilesSumOrderByAggregateInput = {
    size?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FolderNullableScalarRelationFilter = {
    is?: FolderWhereInput | null
    isNot?: FolderWhereInput | null
  }

  export type FilesListRelationFilter = {
    every?: FilesWhereInput
    some?: FilesWhereInput
    none?: FilesWhereInput
  }

  export type ShareFolderListRelationFilter = {
    every?: ShareFolderWhereInput
    some?: ShareFolderWhereInput
    none?: ShareFolderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareFolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    folderUrl?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type FolderAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    folderUrl?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    folderUrl?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type FolderSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type ShareFolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shareUrl?: SortOrder
    expiredAt?: SortOrder
    folderId?: SortOrder
  }

  export type ShareFolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shareUrl?: SortOrder
    expiredAt?: SortOrder
    folderId?: SortOrder
  }

  export type ShareFolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shareUrl?: SortOrder
    expiredAt?: SortOrder
    folderId?: SortOrder
  }

  export type FilesScalarRelationFilter = {
    is?: FilesWhereInput
    isNot?: FilesWhereInput
  }

  export type ShareFileCountOrderByAggregateInput = {
    id?: SortOrder
    shareFileUrl?: SortOrder
    expiredAt?: SortOrder
    fileId?: SortOrder
  }

  export type ShareFileMaxOrderByAggregateInput = {
    id?: SortOrder
    shareFileUrl?: SortOrder
    expiredAt?: SortOrder
    fileId?: SortOrder
  }

  export type ShareFileMinOrderByAggregateInput = {
    id?: SortOrder
    shareFileUrl?: SortOrder
    expiredAt?: SortOrder
    fileId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FolderCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FolderUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FolderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FolderCreateNestedOneWithoutFilesInput = {
    create?: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFilesInput
    connect?: FolderWhereUniqueInput
  }

  export type ShareFileCreateNestedManyWithoutFileInput = {
    create?: XOR<ShareFileCreateWithoutFileInput, ShareFileUncheckedCreateWithoutFileInput> | ShareFileCreateWithoutFileInput[] | ShareFileUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareFileCreateOrConnectWithoutFileInput | ShareFileCreateOrConnectWithoutFileInput[]
    createMany?: ShareFileCreateManyFileInputEnvelope
    connect?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
  }

  export type ShareFileUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<ShareFileCreateWithoutFileInput, ShareFileUncheckedCreateWithoutFileInput> | ShareFileCreateWithoutFileInput[] | ShareFileUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareFileCreateOrConnectWithoutFileInput | ShareFileCreateOrConnectWithoutFileInput[]
    createMany?: ShareFileCreateManyFileInputEnvelope
    connect?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
  }

  export type FolderUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFilesInput
    upsert?: FolderUpsertWithoutFilesInput
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutFilesInput, FolderUpdateWithoutFilesInput>, FolderUncheckedUpdateWithoutFilesInput>
  }

  export type ShareFileUpdateManyWithoutFileNestedInput = {
    create?: XOR<ShareFileCreateWithoutFileInput, ShareFileUncheckedCreateWithoutFileInput> | ShareFileCreateWithoutFileInput[] | ShareFileUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareFileCreateOrConnectWithoutFileInput | ShareFileCreateOrConnectWithoutFileInput[]
    upsert?: ShareFileUpsertWithWhereUniqueWithoutFileInput | ShareFileUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ShareFileCreateManyFileInputEnvelope
    set?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    disconnect?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    delete?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    connect?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    update?: ShareFileUpdateWithWhereUniqueWithoutFileInput | ShareFileUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ShareFileUpdateManyWithWhereWithoutFileInput | ShareFileUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ShareFileScalarWhereInput | ShareFileScalarWhereInput[]
  }

  export type ShareFileUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<ShareFileCreateWithoutFileInput, ShareFileUncheckedCreateWithoutFileInput> | ShareFileCreateWithoutFileInput[] | ShareFileUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareFileCreateOrConnectWithoutFileInput | ShareFileCreateOrConnectWithoutFileInput[]
    upsert?: ShareFileUpsertWithWhereUniqueWithoutFileInput | ShareFileUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ShareFileCreateManyFileInputEnvelope
    set?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    disconnect?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    delete?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    connect?: ShareFileWhereUniqueInput | ShareFileWhereUniqueInput[]
    update?: ShareFileUpdateWithWhereUniqueWithoutFileInput | ShareFileUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ShareFileUpdateManyWithWhereWithoutFileInput | ShareFileUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ShareFileScalarWhereInput | ShareFileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFoldersInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    connect?: UserWhereUniqueInput
  }

  export type FolderCreateNestedOneWithoutFoldersInput = {
    create?: XOR<FolderCreateWithoutFoldersInput, FolderUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFoldersInput
    connect?: FolderWhereUniqueInput
  }

  export type FilesCreateNestedManyWithoutDestinationFolderInput = {
    create?: XOR<FilesCreateWithoutDestinationFolderInput, FilesUncheckedCreateWithoutDestinationFolderInput> | FilesCreateWithoutDestinationFolderInput[] | FilesUncheckedCreateWithoutDestinationFolderInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutDestinationFolderInput | FilesCreateOrConnectWithoutDestinationFolderInput[]
    createMany?: FilesCreateManyDestinationFolderInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type FolderCreateNestedManyWithoutParentInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type ShareFolderCreateNestedManyWithoutFolderInput = {
    create?: XOR<ShareFolderCreateWithoutFolderInput, ShareFolderUncheckedCreateWithoutFolderInput> | ShareFolderCreateWithoutFolderInput[] | ShareFolderUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ShareFolderCreateOrConnectWithoutFolderInput | ShareFolderCreateOrConnectWithoutFolderInput[]
    createMany?: ShareFolderCreateManyFolderInputEnvelope
    connect?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
  }

  export type FilesUncheckedCreateNestedManyWithoutDestinationFolderInput = {
    create?: XOR<FilesCreateWithoutDestinationFolderInput, FilesUncheckedCreateWithoutDestinationFolderInput> | FilesCreateWithoutDestinationFolderInput[] | FilesUncheckedCreateWithoutDestinationFolderInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutDestinationFolderInput | FilesCreateOrConnectWithoutDestinationFolderInput[]
    createMany?: FilesCreateManyDestinationFolderInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type ShareFolderUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<ShareFolderCreateWithoutFolderInput, ShareFolderUncheckedCreateWithoutFolderInput> | ShareFolderCreateWithoutFolderInput[] | ShareFolderUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ShareFolderCreateOrConnectWithoutFolderInput | ShareFolderCreateOrConnectWithoutFolderInput[]
    createMany?: ShareFolderCreateManyFolderInputEnvelope
    connect?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFoldersNestedInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    upsert?: UserUpsertWithoutFoldersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoldersInput, UserUpdateWithoutFoldersInput>, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type FolderUpdateOneWithoutFoldersNestedInput = {
    create?: XOR<FolderCreateWithoutFoldersInput, FolderUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFoldersInput
    upsert?: FolderUpsertWithoutFoldersInput
    disconnect?: FolderWhereInput | boolean
    delete?: FolderWhereInput | boolean
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutFoldersInput, FolderUpdateWithoutFoldersInput>, FolderUncheckedUpdateWithoutFoldersInput>
  }

  export type FilesUpdateManyWithoutDestinationFolderNestedInput = {
    create?: XOR<FilesCreateWithoutDestinationFolderInput, FilesUncheckedCreateWithoutDestinationFolderInput> | FilesCreateWithoutDestinationFolderInput[] | FilesUncheckedCreateWithoutDestinationFolderInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutDestinationFolderInput | FilesCreateOrConnectWithoutDestinationFolderInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutDestinationFolderInput | FilesUpsertWithWhereUniqueWithoutDestinationFolderInput[]
    createMany?: FilesCreateManyDestinationFolderInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutDestinationFolderInput | FilesUpdateWithWhereUniqueWithoutDestinationFolderInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutDestinationFolderInput | FilesUpdateManyWithWhereWithoutDestinationFolderInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type FolderUpdateManyWithoutParentNestedInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutParentInput | FolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutParentInput | FolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutParentInput | FolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type ShareFolderUpdateManyWithoutFolderNestedInput = {
    create?: XOR<ShareFolderCreateWithoutFolderInput, ShareFolderUncheckedCreateWithoutFolderInput> | ShareFolderCreateWithoutFolderInput[] | ShareFolderUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ShareFolderCreateOrConnectWithoutFolderInput | ShareFolderCreateOrConnectWithoutFolderInput[]
    upsert?: ShareFolderUpsertWithWhereUniqueWithoutFolderInput | ShareFolderUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: ShareFolderCreateManyFolderInputEnvelope
    set?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    disconnect?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    delete?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    connect?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    update?: ShareFolderUpdateWithWhereUniqueWithoutFolderInput | ShareFolderUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: ShareFolderUpdateManyWithWhereWithoutFolderInput | ShareFolderUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: ShareFolderScalarWhereInput | ShareFolderScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FilesUncheckedUpdateManyWithoutDestinationFolderNestedInput = {
    create?: XOR<FilesCreateWithoutDestinationFolderInput, FilesUncheckedCreateWithoutDestinationFolderInput> | FilesCreateWithoutDestinationFolderInput[] | FilesUncheckedCreateWithoutDestinationFolderInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutDestinationFolderInput | FilesCreateOrConnectWithoutDestinationFolderInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutDestinationFolderInput | FilesUpsertWithWhereUniqueWithoutDestinationFolderInput[]
    createMany?: FilesCreateManyDestinationFolderInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutDestinationFolderInput | FilesUpdateWithWhereUniqueWithoutDestinationFolderInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutDestinationFolderInput | FilesUpdateManyWithWhereWithoutDestinationFolderInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type FolderUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutParentInput | FolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutParentInput | FolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutParentInput | FolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type ShareFolderUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<ShareFolderCreateWithoutFolderInput, ShareFolderUncheckedCreateWithoutFolderInput> | ShareFolderCreateWithoutFolderInput[] | ShareFolderUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ShareFolderCreateOrConnectWithoutFolderInput | ShareFolderCreateOrConnectWithoutFolderInput[]
    upsert?: ShareFolderUpsertWithWhereUniqueWithoutFolderInput | ShareFolderUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: ShareFolderCreateManyFolderInputEnvelope
    set?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    disconnect?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    delete?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    connect?: ShareFolderWhereUniqueInput | ShareFolderWhereUniqueInput[]
    update?: ShareFolderUpdateWithWhereUniqueWithoutFolderInput | ShareFolderUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: ShareFolderUpdateManyWithWhereWithoutFolderInput | ShareFolderUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: ShareFolderScalarWhereInput | ShareFolderScalarWhereInput[]
  }

  export type FolderCreateNestedOneWithoutShareFoldersInput = {
    create?: XOR<FolderCreateWithoutShareFoldersInput, FolderUncheckedCreateWithoutShareFoldersInput>
    connectOrCreate?: FolderCreateOrConnectWithoutShareFoldersInput
    connect?: FolderWhereUniqueInput
  }

  export type FolderUpdateOneRequiredWithoutShareFoldersNestedInput = {
    create?: XOR<FolderCreateWithoutShareFoldersInput, FolderUncheckedCreateWithoutShareFoldersInput>
    connectOrCreate?: FolderCreateOrConnectWithoutShareFoldersInput
    upsert?: FolderUpsertWithoutShareFoldersInput
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutShareFoldersInput, FolderUpdateWithoutShareFoldersInput>, FolderUncheckedUpdateWithoutShareFoldersInput>
  }

  export type FilesCreateNestedOneWithoutShareFilesInput = {
    create?: XOR<FilesCreateWithoutShareFilesInput, FilesUncheckedCreateWithoutShareFilesInput>
    connectOrCreate?: FilesCreateOrConnectWithoutShareFilesInput
    connect?: FilesWhereUniqueInput
  }

  export type FilesUpdateOneRequiredWithoutShareFilesNestedInput = {
    create?: XOR<FilesCreateWithoutShareFilesInput, FilesUncheckedCreateWithoutShareFilesInput>
    connectOrCreate?: FilesCreateOrConnectWithoutShareFilesInput
    upsert?: FilesUpsertWithoutShareFilesInput
    connect?: FilesWhereUniqueInput
    update?: XOR<XOR<FilesUpdateToOneWithWhereWithoutShareFilesInput, FilesUpdateWithoutShareFilesInput>, FilesUncheckedUpdateWithoutShareFilesInput>
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

  export type FolderCreateWithoutUserInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    parent?: FolderCreateNestedOneWithoutFoldersInput
    files?: FilesCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    parentId?: string | null
    files?: FilesUncheckedCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderUncheckedCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutUserInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderCreateManyUserInputEnvelope = {
    data: FolderCreateManyUserInput | FolderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FolderUpsertWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
  }

  export type FolderUpdateManyWithWhereWithoutUserInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutUserInput>
  }

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[]
    OR?: FolderScalarWhereInput[]
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    destination?: StringFilter<"Folder"> | string
    folderUrl?: StringFilter<"Folder"> | string
    userId?: IntFilter<"Folder"> | number
    parentId?: StringNullableFilter<"Folder"> | string | null
  }

  export type FolderCreateWithoutFilesInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    user: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutFoldersInput
    folders?: FolderCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutFilesInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    userId: number
    parentId?: string | null
    folders?: FolderUncheckedCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutFilesInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
  }

  export type ShareFileCreateWithoutFileInput = {
    id?: string
    shareFileUrl: string
    expiredAt: Date | string
  }

  export type ShareFileUncheckedCreateWithoutFileInput = {
    id?: string
    shareFileUrl: string
    expiredAt: Date | string
  }

  export type ShareFileCreateOrConnectWithoutFileInput = {
    where: ShareFileWhereUniqueInput
    create: XOR<ShareFileCreateWithoutFileInput, ShareFileUncheckedCreateWithoutFileInput>
  }

  export type ShareFileCreateManyFileInputEnvelope = {
    data: ShareFileCreateManyFileInput | ShareFileCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type FolderUpsertWithoutFilesInput = {
    update: XOR<FolderUpdateWithoutFilesInput, FolderUncheckedUpdateWithoutFilesInput>
    create: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutFilesInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutFilesInput, FolderUncheckedUpdateWithoutFilesInput>
  }

  export type FolderUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutFoldersNestedInput
    folders?: FolderUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: FolderUncheckedUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type ShareFileUpsertWithWhereUniqueWithoutFileInput = {
    where: ShareFileWhereUniqueInput
    update: XOR<ShareFileUpdateWithoutFileInput, ShareFileUncheckedUpdateWithoutFileInput>
    create: XOR<ShareFileCreateWithoutFileInput, ShareFileUncheckedCreateWithoutFileInput>
  }

  export type ShareFileUpdateWithWhereUniqueWithoutFileInput = {
    where: ShareFileWhereUniqueInput
    data: XOR<ShareFileUpdateWithoutFileInput, ShareFileUncheckedUpdateWithoutFileInput>
  }

  export type ShareFileUpdateManyWithWhereWithoutFileInput = {
    where: ShareFileScalarWhereInput
    data: XOR<ShareFileUpdateManyMutationInput, ShareFileUncheckedUpdateManyWithoutFileInput>
  }

  export type ShareFileScalarWhereInput = {
    AND?: ShareFileScalarWhereInput | ShareFileScalarWhereInput[]
    OR?: ShareFileScalarWhereInput[]
    NOT?: ShareFileScalarWhereInput | ShareFileScalarWhereInput[]
    id?: StringFilter<"ShareFile"> | string
    shareFileUrl?: StringFilter<"ShareFile"> | string
    expiredAt?: DateTimeFilter<"ShareFile"> | Date | string
    fileId?: StringFilter<"ShareFile"> | string
  }

  export type UserCreateWithoutFoldersInput = {
    username: string
    password: string
  }

  export type UserUncheckedCreateWithoutFoldersInput = {
    id?: number
    username: string
    password: string
  }

  export type UserCreateOrConnectWithoutFoldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
  }

  export type FolderCreateWithoutFoldersInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    user: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutFoldersInput
    files?: FilesCreateNestedManyWithoutDestinationFolderInput
    shareFolders?: ShareFolderCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutFoldersInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    userId: number
    parentId?: string | null
    files?: FilesUncheckedCreateNestedManyWithoutDestinationFolderInput
    shareFolders?: ShareFolderUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutFoldersInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutFoldersInput, FolderUncheckedCreateWithoutFoldersInput>
  }

  export type FilesCreateWithoutDestinationFolderInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    destinationId: string
    shareFiles?: ShareFileCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutDestinationFolderInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    destinationId: string
    shareFiles?: ShareFileUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutDestinationFolderInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutDestinationFolderInput, FilesUncheckedCreateWithoutDestinationFolderInput>
  }

  export type FilesCreateManyDestinationFolderInputEnvelope = {
    data: FilesCreateManyDestinationFolderInput | FilesCreateManyDestinationFolderInput[]
    skipDuplicates?: boolean
  }

  export type FolderCreateWithoutParentInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    user: UserCreateNestedOneWithoutFoldersInput
    files?: FilesCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    userId: number
    files?: FilesUncheckedCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderUncheckedCreateNestedManyWithoutParentInput
    shareFolders?: ShareFolderUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutParentInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput>
  }

  export type FolderCreateManyParentInputEnvelope = {
    data: FolderCreateManyParentInput | FolderCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ShareFolderCreateWithoutFolderInput = {
    id?: string
    name: string
    shareUrl: string
    expiredAt: Date | string
  }

  export type ShareFolderUncheckedCreateWithoutFolderInput = {
    id?: string
    name: string
    shareUrl: string
    expiredAt: Date | string
  }

  export type ShareFolderCreateOrConnectWithoutFolderInput = {
    where: ShareFolderWhereUniqueInput
    create: XOR<ShareFolderCreateWithoutFolderInput, ShareFolderUncheckedCreateWithoutFolderInput>
  }

  export type ShareFolderCreateManyFolderInputEnvelope = {
    data: ShareFolderCreateManyFolderInput | ShareFolderCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFoldersInput = {
    update: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type UserUpdateWithoutFoldersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutFoldersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FolderUpsertWithoutFoldersInput = {
    update: XOR<FolderUpdateWithoutFoldersInput, FolderUncheckedUpdateWithoutFoldersInput>
    create: XOR<FolderCreateWithoutFoldersInput, FolderUncheckedCreateWithoutFoldersInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutFoldersInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutFoldersInput, FolderUncheckedUpdateWithoutFoldersInput>
  }

  export type FolderUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutFoldersNestedInput
    files?: FilesUpdateManyWithoutDestinationFolderNestedInput
    shareFolders?: ShareFolderUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    files?: FilesUncheckedUpdateManyWithoutDestinationFolderNestedInput
    shareFolders?: ShareFolderUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FilesUpsertWithWhereUniqueWithoutDestinationFolderInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutDestinationFolderInput, FilesUncheckedUpdateWithoutDestinationFolderInput>
    create: XOR<FilesCreateWithoutDestinationFolderInput, FilesUncheckedCreateWithoutDestinationFolderInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutDestinationFolderInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutDestinationFolderInput, FilesUncheckedUpdateWithoutDestinationFolderInput>
  }

  export type FilesUpdateManyWithWhereWithoutDestinationFolderInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutDestinationFolderInput>
  }

  export type FilesScalarWhereInput = {
    AND?: FilesScalarWhereInput | FilesScalarWhereInput[]
    OR?: FilesScalarWhereInput[]
    NOT?: FilesScalarWhereInput | FilesScalarWhereInput[]
    id?: StringFilter<"Files"> | string
    name?: StringFilter<"Files"> | string
    originalName?: StringFilter<"Files"> | string
    fileUrl?: StringFilter<"Files"> | string
    size?: IntFilter<"Files"> | number
    uploadedAt?: DateTimeFilter<"Files"> | Date | string
    folderId?: StringFilter<"Files"> | string
    destinationId?: StringFilter<"Files"> | string
  }

  export type FolderUpsertWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutParentInput, FolderUncheckedUpdateWithoutParentInput>
    create: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutParentInput, FolderUncheckedUpdateWithoutParentInput>
  }

  export type FolderUpdateManyWithWhereWithoutParentInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutParentInput>
  }

  export type ShareFolderUpsertWithWhereUniqueWithoutFolderInput = {
    where: ShareFolderWhereUniqueInput
    update: XOR<ShareFolderUpdateWithoutFolderInput, ShareFolderUncheckedUpdateWithoutFolderInput>
    create: XOR<ShareFolderCreateWithoutFolderInput, ShareFolderUncheckedCreateWithoutFolderInput>
  }

  export type ShareFolderUpdateWithWhereUniqueWithoutFolderInput = {
    where: ShareFolderWhereUniqueInput
    data: XOR<ShareFolderUpdateWithoutFolderInput, ShareFolderUncheckedUpdateWithoutFolderInput>
  }

  export type ShareFolderUpdateManyWithWhereWithoutFolderInput = {
    where: ShareFolderScalarWhereInput
    data: XOR<ShareFolderUpdateManyMutationInput, ShareFolderUncheckedUpdateManyWithoutFolderInput>
  }

  export type ShareFolderScalarWhereInput = {
    AND?: ShareFolderScalarWhereInput | ShareFolderScalarWhereInput[]
    OR?: ShareFolderScalarWhereInput[]
    NOT?: ShareFolderScalarWhereInput | ShareFolderScalarWhereInput[]
    id?: StringFilter<"ShareFolder"> | string
    name?: StringFilter<"ShareFolder"> | string
    shareUrl?: StringFilter<"ShareFolder"> | string
    expiredAt?: DateTimeFilter<"ShareFolder"> | Date | string
    folderId?: StringFilter<"ShareFolder"> | string
  }

  export type FolderCreateWithoutShareFoldersInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    user: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutFoldersInput
    files?: FilesCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderCreateNestedManyWithoutParentInput
  }

  export type FolderUncheckedCreateWithoutShareFoldersInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    userId: number
    parentId?: string | null
    files?: FilesUncheckedCreateNestedManyWithoutDestinationFolderInput
    folders?: FolderUncheckedCreateNestedManyWithoutParentInput
  }

  export type FolderCreateOrConnectWithoutShareFoldersInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutShareFoldersInput, FolderUncheckedCreateWithoutShareFoldersInput>
  }

  export type FolderUpsertWithoutShareFoldersInput = {
    update: XOR<FolderUpdateWithoutShareFoldersInput, FolderUncheckedUpdateWithoutShareFoldersInput>
    create: XOR<FolderCreateWithoutShareFoldersInput, FolderUncheckedCreateWithoutShareFoldersInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutShareFoldersInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutShareFoldersInput, FolderUncheckedUpdateWithoutShareFoldersInput>
  }

  export type FolderUpdateWithoutShareFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutFoldersNestedInput
    files?: FilesUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUpdateManyWithoutParentNestedInput
  }

  export type FolderUncheckedUpdateWithoutShareFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    files?: FilesUncheckedUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUncheckedUpdateManyWithoutParentNestedInput
  }

  export type FilesCreateWithoutShareFilesInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    destinationId: string
    destinationFolder: FolderCreateNestedOneWithoutFilesInput
  }

  export type FilesUncheckedCreateWithoutShareFilesInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    folderId: string
    destinationId: string
  }

  export type FilesCreateOrConnectWithoutShareFilesInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutShareFilesInput, FilesUncheckedCreateWithoutShareFilesInput>
  }

  export type FilesUpsertWithoutShareFilesInput = {
    update: XOR<FilesUpdateWithoutShareFilesInput, FilesUncheckedUpdateWithoutShareFilesInput>
    create: XOR<FilesCreateWithoutShareFilesInput, FilesUncheckedCreateWithoutShareFilesInput>
    where?: FilesWhereInput
  }

  export type FilesUpdateToOneWithWhereWithoutShareFilesInput = {
    where?: FilesWhereInput
    data: XOR<FilesUpdateWithoutShareFilesInput, FilesUncheckedUpdateWithoutShareFilesInput>
  }

  export type FilesUpdateWithoutShareFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationId?: StringFieldUpdateOperationsInput | string
    destinationFolder?: FolderUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FilesUncheckedUpdateWithoutShareFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type FolderCreateManyUserInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    parentId?: string | null
  }

  export type FolderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    parent?: FolderUpdateOneWithoutFoldersNestedInput
    files?: FilesUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    files?: FilesUncheckedUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUncheckedUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareFileCreateManyFileInput = {
    id?: string
    shareFileUrl: string
    expiredAt: Date | string
  }

  export type ShareFileUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareFileUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareFileUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareFileUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareFileUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareFileUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesCreateManyDestinationFolderInput = {
    id?: string
    name: string
    originalName: string
    fileUrl: string
    size: number
    uploadedAt?: Date | string
    destinationId: string
  }

  export type FolderCreateManyParentInput = {
    id?: string
    name: string
    destination: string
    folderUrl: string
    userId: number
  }

  export type ShareFolderCreateManyFolderInput = {
    id?: string
    name: string
    shareUrl: string
    expiredAt: Date | string
  }

  export type FilesUpdateWithoutDestinationFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationId?: StringFieldUpdateOperationsInput | string
    shareFiles?: ShareFileUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutDestinationFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationId?: StringFieldUpdateOperationsInput | string
    shareFiles?: ShareFileUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateManyWithoutDestinationFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type FolderUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    files?: FilesUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    files?: FilesUncheckedUpdateManyWithoutDestinationFolderNestedInput
    folders?: FolderUncheckedUpdateManyWithoutParentNestedInput
    shareFolders?: ShareFolderUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    folderUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ShareFolderUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareFolderUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareFolderUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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