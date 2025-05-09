
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Meta
 * 
 */
export type Meta = $Result.DefaultSelection<Prisma.$MetaPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductPromotion
 * 
 */
export type ProductPromotion = $Result.DefaultSelection<Prisma.$ProductPromotionPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model ImageMeta
 * 
 */
export type ImageMeta = $Result.DefaultSelection<Prisma.$ImageMetaPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model MaterialCategory
 * 
 */
export type MaterialCategory = $Result.DefaultSelection<Prisma.$MaterialCategoryPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta`: Exposes CRUD operations for the **Meta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.meta.findMany()
    * ```
    */
  get meta(): Prisma.MetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPromotion`: Exposes CRUD operations for the **ProductPromotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPromotions
    * const productPromotions = await prisma.productPromotion.findMany()
    * ```
    */
  get productPromotion(): Prisma.ProductPromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageMeta`: Exposes CRUD operations for the **ImageMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageMetas
    * const imageMetas = await prisma.imageMeta.findMany()
    * ```
    */
  get imageMeta(): Prisma.ImageMetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialCategory`: Exposes CRUD operations for the **MaterialCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialCategories
    * const materialCategories = await prisma.materialCategory.findMany()
    * ```
    */
  get materialCategory(): Prisma.MaterialCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Category: 'Category',
    Meta: 'Meta',
    Content: 'Content',
    Product: 'Product',
    ProductPromotion: 'ProductPromotion',
    File: 'File',
    Image: 'Image',
    ImageMeta: 'ImageMeta',
    Collection: 'Collection',
    Page: 'Page',
    Gallery: 'Gallery',
    Section: 'Section',
    MaterialCategory: 'MaterialCategory',
    Material: 'Material'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "meta" | "content" | "product" | "productPromotion" | "file" | "image" | "imageMeta" | "collection" | "page" | "gallery" | "section" | "materialCategory" | "material"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Meta: {
        payload: Prisma.$MetaPayload<ExtArgs>
        fields: Prisma.MetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findFirst: {
            args: Prisma.MetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findMany: {
            args: Prisma.MetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          create: {
            args: Prisma.MetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          createMany: {
            args: Prisma.MetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          delete: {
            args: Prisma.MetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          update: {
            args: Prisma.MetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          upsert: {
            args: Prisma.MetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          aggregate: {
            args: Prisma.MetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta>
          }
          groupBy: {
            args: Prisma.MetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaCountArgs<ExtArgs>
            result: $Utils.Optional<MetaCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductPromotion: {
        payload: Prisma.$ProductPromotionPayload<ExtArgs>
        fields: Prisma.ProductPromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          findFirst: {
            args: Prisma.ProductPromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          findMany: {
            args: Prisma.ProductPromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>[]
          }
          create: {
            args: Prisma.ProductPromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          createMany: {
            args: Prisma.ProductPromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>[]
          }
          delete: {
            args: Prisma.ProductPromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          update: {
            args: Prisma.ProductPromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          deleteMany: {
            args: Prisma.ProductPromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductPromotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>[]
          }
          upsert: {
            args: Prisma.ProductPromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          aggregate: {
            args: Prisma.ProductPromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPromotion>
          }
          groupBy: {
            args: Prisma.ProductPromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPromotionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPromotionCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ImageMeta: {
        payload: Prisma.$ImageMetaPayload<ExtArgs>
        fields: Prisma.ImageMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>
          }
          findFirst: {
            args: Prisma.ImageMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>
          }
          findMany: {
            args: Prisma.ImageMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>[]
          }
          create: {
            args: Prisma.ImageMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>
          }
          createMany: {
            args: Prisma.ImageMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageMetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>[]
          }
          delete: {
            args: Prisma.ImageMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>
          }
          update: {
            args: Prisma.ImageMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>
          }
          deleteMany: {
            args: Prisma.ImageMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageMetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>[]
          }
          upsert: {
            args: Prisma.ImageMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageMetaPayload>
          }
          aggregate: {
            args: Prisma.ImageMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageMeta>
          }
          groupBy: {
            args: Prisma.ImageMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageMetaCountArgs<ExtArgs>
            result: $Utils.Optional<ImageMetaCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      MaterialCategory: {
        payload: Prisma.$MaterialCategoryPayload<ExtArgs>
        fields: Prisma.MaterialCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>
          }
          findFirst: {
            args: Prisma.MaterialCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>
          }
          findMany: {
            args: Prisma.MaterialCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>[]
          }
          create: {
            args: Prisma.MaterialCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>
          }
          createMany: {
            args: Prisma.MaterialCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>[]
          }
          delete: {
            args: Prisma.MaterialCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>
          }
          update: {
            args: Prisma.MaterialCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MaterialCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MaterialCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialCategoryPayload>
          }
          aggregate: {
            args: Prisma.MaterialCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialCategory>
          }
          groupBy: {
            args: Prisma.MaterialCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCategoryCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    meta?: MetaOmit
    content?: ContentOmit
    product?: ProductOmit
    productPromotion?: ProductPromotionOmit
    file?: FileOmit
    image?: ImageOmit
    imageMeta?: ImageMetaOmit
    collection?: CollectionOmit
    page?: PageOmit
    gallery?: GalleryOmit
    section?: SectionOmit
    materialCategory?: MaterialCategoryOmit
    material?: MaterialOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type MetaCountOutputType
   */

  export type MetaCountOutputType = {
    categories: number
    pages: number
    products: number
    collections: number
  }

  export type MetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | MetaCountOutputTypeCountCategoriesArgs
    pages?: boolean | MetaCountOutputTypeCountPagesArgs
    products?: boolean | MetaCountOutputTypeCountProductsArgs
    collections?: boolean | MetaCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaCountOutputType
     */
    select?: MetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    promotion: number
    technical: number
    files: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotion?: boolean | ProductCountOutputTypeCountPromotionArgs
    technical?: boolean | ProductCountOutputTypeCountTechnicalArgs
    files?: boolean | ProductCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPromotionWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTechnicalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type ProductPromotionCountOutputType
   */

  export type ProductPromotionCountOutputType = {
    images: number
  }

  export type ProductPromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductPromotionCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductPromotionCountOutputType without action
   */
  export type ProductPromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotionCountOutputType
     */
    select?: ProductPromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductPromotionCountOutputType without action
   */
  export type ProductPromotionCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    TechnicalProducts: number
    ProductPromotions: number
    GalleryImages: number
    Material: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TechnicalProducts?: boolean | ImageCountOutputTypeCountTechnicalProductsArgs
    ProductPromotions?: boolean | ImageCountOutputTypeCountProductPromotionsArgs
    GalleryImages?: boolean | ImageCountOutputTypeCountGalleryImagesArgs
    Material?: boolean | ImageCountOutputTypeCountMaterialArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountTechnicalProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountProductPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPromotionWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }


  /**
   * Count Type ImageMetaCountOutputType
   */

  export type ImageMetaCountOutputType = {
    Image: number
  }

  export type ImageMetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Image?: boolean | ImageMetaCountOutputTypeCountImageArgs
  }

  // Custom InputTypes
  /**
   * ImageMetaCountOutputType without action
   */
  export type ImageMetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMetaCountOutputType
     */
    select?: ImageMetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageMetaCountOutputType without action
   */
  export type ImageMetaCountOutputTypeCountImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    products: number
    section: number
    contents: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CollectionCountOutputTypeCountProductsArgs
    section?: boolean | CollectionCountOutputTypeCountSectionArgs
    contents?: boolean | CollectionCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    content: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | PageCountOutputTypeCountContentArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }


  /**
   * Count Type GalleryCountOutputType
   */

  export type GalleryCountOutputType = {
    images: number
  }

  export type GalleryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | GalleryCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCountOutputType
     */
    select?: GalleryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    images: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | SectionCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type MaterialCategoryCountOutputType
   */

  export type MaterialCategoryCountOutputType = {
    materials: number
  }

  export type MaterialCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | MaterialCategoryCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * MaterialCategoryCountOutputType without action
   */
  export type MaterialCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategoryCountOutputType
     */
    select?: MaterialCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCategoryCountOutputType without action
   */
  export type MaterialCategoryCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    description: string | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    description: string | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    description: number
    metaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    description?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    description?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    description?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    description: string | null
    metaId: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "description" | "metaId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      meta: Prisma.$MetaPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      description: string | null
      metaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends MetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetaDefaultArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly locale: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly metaId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Meta
   */

  export type AggregateMeta = {
    _count: MetaCountAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  export type MetaMinAggregateOutputType = {
    id: string | null
    locale: string | null
    title: string | null
    description: string | null
    keywords: string | null
    robots: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    title: string | null
    description: string | null
    keywords: string | null
    robots: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaCountAggregateOutputType = {
    id: number
    locale: number
    title: number
    description: number
    keywords: number
    robots: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetaMinAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    description?: true
    keywords?: true
    robots?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaMaxAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    description?: true
    keywords?: true
    robots?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaCountAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    description?: true
    keywords?: true
    robots?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta to aggregate.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metas
    **/
    _count?: true | MetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaMaxAggregateInputType
  }

  export type GetMetaAggregateType<T extends MetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta[P]>
      : GetScalarType<T[P], AggregateMeta[P]>
  }




  export type MetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithAggregationInput | MetaOrderByWithAggregationInput[]
    by: MetaScalarFieldEnum[] | MetaScalarFieldEnum
    having?: MetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaCountAggregateInputType | true
    _min?: MetaMinAggregateInputType
    _max?: MetaMaxAggregateInputType
  }

  export type MetaGroupByOutputType = {
    id: string
    locale: string
    title: string | null
    description: string | null
    keywords: string | null
    robots: boolean
    createdAt: Date
    updatedAt: Date
    _count: MetaCountAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  type GetMetaGroupByPayload<T extends MetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaGroupByOutputType[P]>
            : GetScalarType<T[P], MetaGroupByOutputType[P]>
        }
      >
    >


  export type MetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    robots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Meta$categoriesArgs<ExtArgs>
    pages?: boolean | Meta$pagesArgs<ExtArgs>
    products?: boolean | Meta$productsArgs<ExtArgs>
    collections?: boolean | Meta$collectionsArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    robots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    robots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectScalar = {
    id?: boolean
    locale?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    robots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "title" | "description" | "keywords" | "robots" | "createdAt" | "updatedAt", ExtArgs["result"]["meta"]>
  export type MetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Meta$categoriesArgs<ExtArgs>
    pages?: boolean | Meta$pagesArgs<ExtArgs>
    products?: boolean | Meta$productsArgs<ExtArgs>
    collections?: boolean | Meta$collectionsArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      pages: Prisma.$PagePayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      title: string | null
      description: string | null
      keywords: string | null
      robots: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meta"]>
    composites: {}
  }

  type MetaGetPayload<S extends boolean | null | undefined | MetaDefaultArgs> = $Result.GetResult<Prisma.$MetaPayload, S>

  type MetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaCountAggregateInputType | true
    }

  export interface MetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta'], meta: { name: 'Meta' } }
    /**
     * Find zero or one Meta that matches the filter.
     * @param {MetaFindUniqueArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaFindUniqueArgs>(args: SelectSubset<T, MetaFindUniqueArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaFindUniqueOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaFindFirstArgs>(args?: SelectSubset<T, MetaFindFirstArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.meta.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.meta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaWithIdOnly = await prisma.meta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaFindManyArgs>(args?: SelectSubset<T, MetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta.
     * @param {MetaCreateArgs} args - Arguments to create a Meta.
     * @example
     * // Create one Meta
     * const Meta = await prisma.meta.create({
     *   data: {
     *     // ... data to create a Meta
     *   }
     * })
     * 
     */
    create<T extends MetaCreateArgs>(args: SelectSubset<T, MetaCreateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {MetaCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaCreateManyArgs>(args?: SelectSubset<T, MetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metas and returns the data saved in the database.
     * @param {MetaCreateManyAndReturnArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meta.
     * @param {MetaDeleteArgs} args - Arguments to delete one Meta.
     * @example
     * // Delete one Meta
     * const Meta = await prisma.meta.delete({
     *   where: {
     *     // ... filter to delete one Meta
     *   }
     * })
     * 
     */
    delete<T extends MetaDeleteArgs>(args: SelectSubset<T, MetaDeleteArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta.
     * @param {MetaUpdateArgs} args - Arguments to update one Meta.
     * @example
     * // Update one Meta
     * const meta = await prisma.meta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaUpdateArgs>(args: SelectSubset<T, MetaUpdateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {MetaDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.meta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeleteManyArgs>(args?: SelectSubset<T, MetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaUpdateManyArgs>(args: SelectSubset<T, MetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas and returns the data updated in the database.
     * @param {MetaUpdateManyAndReturnArgs} args - Arguments to update many Metas.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meta.
     * @param {MetaUpsertArgs} args - Arguments to update or create a Meta.
     * @example
     * // Update or create a Meta
     * const meta = await prisma.meta.upsert({
     *   create: {
     *     // ... data to create a Meta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta we want to update
     *   }
     * })
     */
    upsert<T extends MetaUpsertArgs>(args: SelectSubset<T, MetaUpsertArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.meta.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends MetaCountArgs>(
      args?: Subset<T, MetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaAggregateArgs>(args: Subset<T, MetaAggregateArgs>): Prisma.PrismaPromise<GetMetaAggregateType<T>>

    /**
     * Group by Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaGroupByArgs} args - Group by arguments.
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
      T extends MetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaGroupByArgs['orderBy'] }
        : { orderBy?: MetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta model
   */
  readonly fields: MetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Meta$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Meta$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pages<T extends Meta$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Meta$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Meta$productsArgs<ExtArgs> = {}>(args?: Subset<T, Meta$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends Meta$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Meta$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meta model
   */
  interface MetaFieldRefs {
    readonly id: FieldRef<"Meta", 'String'>
    readonly locale: FieldRef<"Meta", 'String'>
    readonly title: FieldRef<"Meta", 'String'>
    readonly description: FieldRef<"Meta", 'String'>
    readonly keywords: FieldRef<"Meta", 'String'>
    readonly robots: FieldRef<"Meta", 'Boolean'>
    readonly createdAt: FieldRef<"Meta", 'DateTime'>
    readonly updatedAt: FieldRef<"Meta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meta findUnique
   */
  export type MetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findUniqueOrThrow
   */
  export type MetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findFirst
   */
  export type MetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findFirstOrThrow
   */
  export type MetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findMany
   */
  export type MetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Metas to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta create
   */
  export type MetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Meta.
     */
    data: XOR<MetaCreateInput, MetaUncheckedCreateInput>
  }

  /**
   * Meta createMany
   */
  export type MetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta createManyAndReturn
   */
  export type MetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta update
   */
  export type MetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Meta.
     */
    data: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
    /**
     * Choose, which Meta to update.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta updateMany
   */
  export type MetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta updateManyAndReturn
   */
  export type MetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta upsert
   */
  export type MetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Meta to update in case it exists.
     */
    where: MetaWhereUniqueInput
    /**
     * In case the Meta found by the `where` argument doesn't exist, create a new Meta with this data.
     */
    create: XOR<MetaCreateInput, MetaUncheckedCreateInput>
    /**
     * In case the Meta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
  }

  /**
   * Meta delete
   */
  export type MetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter which Meta to delete.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta deleteMany
   */
  export type MetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metas to delete
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to delete.
     */
    limit?: number
  }

  /**
   * Meta.categories
   */
  export type Meta$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Meta.pages
   */
  export type Meta$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Meta.products
   */
  export type Meta$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Meta.collections
   */
  export type Meta$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Meta without action
   */
  export type MetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    title: string | null
    content: string | null
    pageId: string | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    title: string | null
    content: string | null
    pageId: string | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    title: number
    content: number
    pageId: number
    collectionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    title?: true
    content?: true
    pageId?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    title?: true
    content?: true
    pageId?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    title?: true
    content?: true
    pageId?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    title: string | null
    content: string | null
    pageId: string | null
    collectionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    pageId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | Content$pageArgs<ExtArgs>
    collection?: boolean | Content$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    pageId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | Content$pageArgs<ExtArgs>
    collection?: boolean | Content$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    pageId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | Content$pageArgs<ExtArgs>
    collection?: boolean | Content$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    pageId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "title" | "content" | "pageId" | "collectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | Content$pageArgs<ExtArgs>
    collection?: boolean | Content$collectionArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | Content$pageArgs<ExtArgs>
    collection?: boolean | Content$collectionArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | Content$pageArgs<ExtArgs>
    collection?: boolean | Content$collectionArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      page: Prisma.$PagePayload<ExtArgs> | null
      collection: Prisma.$CollectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      title: string | null
      content: string | null
      pageId: string | null
      collectionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
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
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends Content$pageArgs<ExtArgs> = {}>(args?: Subset<T, Content$pageArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collection<T extends Content$collectionArgs<ExtArgs> = {}>(args?: Subset<T, Content$collectionArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly locale: FieldRef<"Content", 'String'>
    readonly name: FieldRef<"Content", 'String'>
    readonly slug: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly content: FieldRef<"Content", 'String'>
    readonly pageId: FieldRef<"Content", 'String'>
    readonly collectionId: FieldRef<"Content", 'String'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.page
   */
  export type Content$pageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
  }

  /**
   * Content.collection
   */
  export type Content$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    collectionId: string | null
    type: string | null
    description: string | null
    imageId: string | null
    top: boolean | null
    showroom: boolean | null
    price: number | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    collectionId: string | null
    type: string | null
    description: string | null
    imageId: string | null
    top: boolean | null
    showroom: boolean | null
    price: number | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    categoryId: number
    collectionId: number
    type: number
    description: number
    imageId: number
    top: number
    showroom: number
    price: number
    metaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    categoryId?: true
    collectionId?: true
    type?: true
    description?: true
    imageId?: true
    top?: true
    showroom?: true
    price?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    categoryId?: true
    collectionId?: true
    type?: true
    description?: true
    imageId?: true
    top?: true
    showroom?: true
    price?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    categoryId?: true
    collectionId?: true
    type?: true
    description?: true
    imageId?: true
    top?: true
    showroom?: true
    price?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    categoryId: string | null
    collectionId: string | null
    type: string | null
    description: string | null
    imageId: string | null
    top: boolean
    showroom: boolean
    price: number | null
    metaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    collectionId?: boolean
    type?: boolean
    description?: boolean
    imageId?: boolean
    top?: boolean
    showroom?: boolean
    price?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    collection?: boolean | Product$collectionArgs<ExtArgs>
    cover?: boolean | Product$coverArgs<ExtArgs>
    promotion?: boolean | Product$promotionArgs<ExtArgs>
    technical?: boolean | Product$technicalArgs<ExtArgs>
    files?: boolean | Product$filesArgs<ExtArgs>
    meta?: boolean | Product$metaArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    collectionId?: boolean
    type?: boolean
    description?: boolean
    imageId?: boolean
    top?: boolean
    showroom?: boolean
    price?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    collection?: boolean | Product$collectionArgs<ExtArgs>
    cover?: boolean | Product$coverArgs<ExtArgs>
    meta?: boolean | Product$metaArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    collectionId?: boolean
    type?: boolean
    description?: boolean
    imageId?: boolean
    top?: boolean
    showroom?: boolean
    price?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    collection?: boolean | Product$collectionArgs<ExtArgs>
    cover?: boolean | Product$coverArgs<ExtArgs>
    meta?: boolean | Product$metaArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    collectionId?: boolean
    type?: boolean
    description?: boolean
    imageId?: boolean
    top?: boolean
    showroom?: boolean
    price?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "categoryId" | "collectionId" | "type" | "description" | "imageId" | "top" | "showroom" | "price" | "metaId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    collection?: boolean | Product$collectionArgs<ExtArgs>
    cover?: boolean | Product$coverArgs<ExtArgs>
    promotion?: boolean | Product$promotionArgs<ExtArgs>
    technical?: boolean | Product$technicalArgs<ExtArgs>
    files?: boolean | Product$filesArgs<ExtArgs>
    meta?: boolean | Product$metaArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    collection?: boolean | Product$collectionArgs<ExtArgs>
    cover?: boolean | Product$coverArgs<ExtArgs>
    meta?: boolean | Product$metaArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    collection?: boolean | Product$collectionArgs<ExtArgs>
    cover?: boolean | Product$coverArgs<ExtArgs>
    meta?: boolean | Product$metaArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      collection: Prisma.$CollectionPayload<ExtArgs> | null
      cover: Prisma.$ImagePayload<ExtArgs> | null
      promotion: Prisma.$ProductPromotionPayload<ExtArgs>[]
      technical: Prisma.$ImagePayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      meta: Prisma.$MetaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      categoryId: string | null
      collectionId: string | null
      type: string | null
      description: string | null
      imageId: string | null
      top: boolean
      showroom: boolean
      price: number | null
      metaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collection<T extends Product$collectionArgs<ExtArgs> = {}>(args?: Subset<T, Product$collectionArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cover<T extends Product$coverArgs<ExtArgs> = {}>(args?: Subset<T, Product$coverArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    promotion<T extends Product$promotionArgs<ExtArgs> = {}>(args?: Subset<T, Product$promotionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    technical<T extends Product$technicalArgs<ExtArgs> = {}>(args?: Subset<T, Product$technicalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Product$filesArgs<ExtArgs> = {}>(args?: Subset<T, Product$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meta<T extends Product$metaArgs<ExtArgs> = {}>(args?: Subset<T, Product$metaArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly locale: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly collectionId: FieldRef<"Product", 'String'>
    readonly type: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly imageId: FieldRef<"Product", 'String'>
    readonly top: FieldRef<"Product", 'Boolean'>
    readonly showroom: FieldRef<"Product", 'Boolean'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly metaId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.collection
   */
  export type Product$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
  }

  /**
   * Product.cover
   */
  export type Product$coverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Product.promotion
   */
  export type Product$promotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    where?: ProductPromotionWhereInput
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    cursor?: ProductPromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * Product.technical
   */
  export type Product$technicalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Product.files
   */
  export type Product$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Product.meta
   */
  export type Product$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    where?: MetaWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductPromotion
   */

  export type AggregateProductPromotion = {
    _count: ProductPromotionCountAggregateOutputType | null
    _min: ProductPromotionMinAggregateOutputType | null
    _max: ProductPromotionMaxAggregateOutputType | null
  }

  export type ProductPromotionMinAggregateOutputType = {
    id: string | null
    layout: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductPromotionMaxAggregateOutputType = {
    id: string | null
    layout: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductPromotionCountAggregateOutputType = {
    id: number
    layout: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductPromotionMinAggregateInputType = {
    id?: true
    layout?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductPromotionMaxAggregateInputType = {
    id?: true
    layout?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductPromotionCountAggregateInputType = {
    id?: true
    layout?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductPromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPromotion to aggregate.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPromotions
    **/
    _count?: true | ProductPromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPromotionMaxAggregateInputType
  }

  export type GetProductPromotionAggregateType<T extends ProductPromotionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPromotion[P]>
      : GetScalarType<T[P], AggregateProductPromotion[P]>
  }




  export type ProductPromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPromotionWhereInput
    orderBy?: ProductPromotionOrderByWithAggregationInput | ProductPromotionOrderByWithAggregationInput[]
    by: ProductPromotionScalarFieldEnum[] | ProductPromotionScalarFieldEnum
    having?: ProductPromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPromotionCountAggregateInputType | true
    _min?: ProductPromotionMinAggregateInputType
    _max?: ProductPromotionMaxAggregateInputType
  }

  export type ProductPromotionGroupByOutputType = {
    id: string
    layout: string
    productId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductPromotionCountAggregateOutputType | null
    _min: ProductPromotionMinAggregateOutputType | null
    _max: ProductPromotionMaxAggregateOutputType | null
  }

  type GetProductPromotionGroupByPayload<T extends ProductPromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPromotionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPromotionGroupByOutputType[P]>
        }
      >
    >


  export type ProductPromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layout?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | ProductPromotion$imagesArgs<ExtArgs>
    Product?: boolean | ProductPromotion$ProductArgs<ExtArgs>
    _count?: boolean | ProductPromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPromotion"]>

  export type ProductPromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layout?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductPromotion$ProductArgs<ExtArgs>
  }, ExtArgs["result"]["productPromotion"]>

  export type ProductPromotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layout?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductPromotion$ProductArgs<ExtArgs>
  }, ExtArgs["result"]["productPromotion"]>

  export type ProductPromotionSelectScalar = {
    id?: boolean
    layout?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductPromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "layout" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["productPromotion"]>
  export type ProductPromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductPromotion$imagesArgs<ExtArgs>
    Product?: boolean | ProductPromotion$ProductArgs<ExtArgs>
    _count?: boolean | ProductPromotionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductPromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductPromotion$ProductArgs<ExtArgs>
  }
  export type ProductPromotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductPromotion$ProductArgs<ExtArgs>
  }

  export type $ProductPromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPromotion"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      layout: string
      productId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productPromotion"]>
    composites: {}
  }

  type ProductPromotionGetPayload<S extends boolean | null | undefined | ProductPromotionDefaultArgs> = $Result.GetResult<Prisma.$ProductPromotionPayload, S>

  type ProductPromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPromotionCountAggregateInputType | true
    }

  export interface ProductPromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPromotion'], meta: { name: 'ProductPromotion' } }
    /**
     * Find zero or one ProductPromotion that matches the filter.
     * @param {ProductPromotionFindUniqueArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPromotionFindUniqueArgs>(args: SelectSubset<T, ProductPromotionFindUniqueArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPromotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPromotionFindUniqueOrThrowArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPromotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionFindFirstArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPromotionFindFirstArgs>(args?: SelectSubset<T, ProductPromotionFindFirstArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPromotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionFindFirstOrThrowArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPromotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPromotions
     * const productPromotions = await prisma.productPromotion.findMany()
     * 
     * // Get first 10 ProductPromotions
     * const productPromotions = await prisma.productPromotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPromotionWithIdOnly = await prisma.productPromotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPromotionFindManyArgs>(args?: SelectSubset<T, ProductPromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPromotion.
     * @param {ProductPromotionCreateArgs} args - Arguments to create a ProductPromotion.
     * @example
     * // Create one ProductPromotion
     * const ProductPromotion = await prisma.productPromotion.create({
     *   data: {
     *     // ... data to create a ProductPromotion
     *   }
     * })
     * 
     */
    create<T extends ProductPromotionCreateArgs>(args: SelectSubset<T, ProductPromotionCreateArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPromotions.
     * @param {ProductPromotionCreateManyArgs} args - Arguments to create many ProductPromotions.
     * @example
     * // Create many ProductPromotions
     * const productPromotion = await prisma.productPromotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPromotionCreateManyArgs>(args?: SelectSubset<T, ProductPromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPromotions and returns the data saved in the database.
     * @param {ProductPromotionCreateManyAndReturnArgs} args - Arguments to create many ProductPromotions.
     * @example
     * // Create many ProductPromotions
     * const productPromotion = await prisma.productPromotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPromotions and only return the `id`
     * const productPromotionWithIdOnly = await prisma.productPromotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductPromotion.
     * @param {ProductPromotionDeleteArgs} args - Arguments to delete one ProductPromotion.
     * @example
     * // Delete one ProductPromotion
     * const ProductPromotion = await prisma.productPromotion.delete({
     *   where: {
     *     // ... filter to delete one ProductPromotion
     *   }
     * })
     * 
     */
    delete<T extends ProductPromotionDeleteArgs>(args: SelectSubset<T, ProductPromotionDeleteArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPromotion.
     * @param {ProductPromotionUpdateArgs} args - Arguments to update one ProductPromotion.
     * @example
     * // Update one ProductPromotion
     * const productPromotion = await prisma.productPromotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPromotionUpdateArgs>(args: SelectSubset<T, ProductPromotionUpdateArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPromotions.
     * @param {ProductPromotionDeleteManyArgs} args - Arguments to filter ProductPromotions to delete.
     * @example
     * // Delete a few ProductPromotions
     * const { count } = await prisma.productPromotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPromotionDeleteManyArgs>(args?: SelectSubset<T, ProductPromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPromotions
     * const productPromotion = await prisma.productPromotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPromotionUpdateManyArgs>(args: SelectSubset<T, ProductPromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPromotions and returns the data updated in the database.
     * @param {ProductPromotionUpdateManyAndReturnArgs} args - Arguments to update many ProductPromotions.
     * @example
     * // Update many ProductPromotions
     * const productPromotion = await prisma.productPromotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductPromotions and only return the `id`
     * const productPromotionWithIdOnly = await prisma.productPromotion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductPromotionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductPromotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductPromotion.
     * @param {ProductPromotionUpsertArgs} args - Arguments to update or create a ProductPromotion.
     * @example
     * // Update or create a ProductPromotion
     * const productPromotion = await prisma.productPromotion.upsert({
     *   create: {
     *     // ... data to create a ProductPromotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPromotion we want to update
     *   }
     * })
     */
    upsert<T extends ProductPromotionUpsertArgs>(args: SelectSubset<T, ProductPromotionUpsertArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionCountArgs} args - Arguments to filter ProductPromotions to count.
     * @example
     * // Count the number of ProductPromotions
     * const count = await prisma.productPromotion.count({
     *   where: {
     *     // ... the filter for the ProductPromotions we want to count
     *   }
     * })
    **/
    count<T extends ProductPromotionCountArgs>(
      args?: Subset<T, ProductPromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPromotionAggregateArgs>(args: Subset<T, ProductPromotionAggregateArgs>): Prisma.PrismaPromise<GetProductPromotionAggregateType<T>>

    /**
     * Group by ProductPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionGroupByArgs} args - Group by arguments.
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
      T extends ProductPromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPromotionGroupByArgs['orderBy'] }
        : { orderBy?: ProductPromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductPromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPromotion model
   */
  readonly fields: ProductPromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPromotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends ProductPromotion$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ProductPromotion$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Product<T extends ProductPromotion$ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductPromotion$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductPromotion model
   */
  interface ProductPromotionFieldRefs {
    readonly id: FieldRef<"ProductPromotion", 'String'>
    readonly layout: FieldRef<"ProductPromotion", 'String'>
    readonly productId: FieldRef<"ProductPromotion", 'String'>
    readonly createdAt: FieldRef<"ProductPromotion", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductPromotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductPromotion findUnique
   */
  export type ProductPromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion findUniqueOrThrow
   */
  export type ProductPromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion findFirst
   */
  export type ProductPromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPromotions.
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPromotions.
     */
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * ProductPromotion findFirstOrThrow
   */
  export type ProductPromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPromotions.
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPromotions.
     */
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * ProductPromotion findMany
   */
  export type ProductPromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotions to fetch.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPromotions.
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * ProductPromotion create
   */
  export type ProductPromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPromotion.
     */
    data: XOR<ProductPromotionCreateInput, ProductPromotionUncheckedCreateInput>
  }

  /**
   * ProductPromotion createMany
   */
  export type ProductPromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPromotions.
     */
    data: ProductPromotionCreateManyInput | ProductPromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPromotion createManyAndReturn
   */
  export type ProductPromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductPromotions.
     */
    data: ProductPromotionCreateManyInput | ProductPromotionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPromotion update
   */
  export type ProductPromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPromotion.
     */
    data: XOR<ProductPromotionUpdateInput, ProductPromotionUncheckedUpdateInput>
    /**
     * Choose, which ProductPromotion to update.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion updateMany
   */
  export type ProductPromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPromotions.
     */
    data: XOR<ProductPromotionUpdateManyMutationInput, ProductPromotionUncheckedUpdateManyInput>
    /**
     * Filter which ProductPromotions to update
     */
    where?: ProductPromotionWhereInput
    /**
     * Limit how many ProductPromotions to update.
     */
    limit?: number
  }

  /**
   * ProductPromotion updateManyAndReturn
   */
  export type ProductPromotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * The data used to update ProductPromotions.
     */
    data: XOR<ProductPromotionUpdateManyMutationInput, ProductPromotionUncheckedUpdateManyInput>
    /**
     * Filter which ProductPromotions to update
     */
    where?: ProductPromotionWhereInput
    /**
     * Limit how many ProductPromotions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPromotion upsert
   */
  export type ProductPromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPromotion to update in case it exists.
     */
    where: ProductPromotionWhereUniqueInput
    /**
     * In case the ProductPromotion found by the `where` argument doesn't exist, create a new ProductPromotion with this data.
     */
    create: XOR<ProductPromotionCreateInput, ProductPromotionUncheckedCreateInput>
    /**
     * In case the ProductPromotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPromotionUpdateInput, ProductPromotionUncheckedUpdateInput>
  }

  /**
   * ProductPromotion delete
   */
  export type ProductPromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter which ProductPromotion to delete.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion deleteMany
   */
  export type ProductPromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPromotions to delete
     */
    where?: ProductPromotionWhereInput
    /**
     * Limit how many ProductPromotions to delete.
     */
    limit?: number
  }

  /**
   * ProductPromotion.images
   */
  export type ProductPromotion$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * ProductPromotion.Product
   */
  export type ProductPromotion$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * ProductPromotion without action
   */
  export type ProductPromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    path: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    path: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    path: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileMinAggregateInputType = {
    id?: true
    path?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    path?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    path?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
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
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    path: string
    productId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | File$ProductArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | File$ProductArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | File$ProductArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    path?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | File$ProductArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | File$ProductArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | File$ProductArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      productId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends File$ProductArgs<ExtArgs> = {}>(args?: Subset<T, File$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly path: FieldRef<"File", 'String'>
    readonly productId: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
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
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
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
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
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
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.Product
   */
  export type File$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    path: string | null
    imageMetaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: string | null
    collectionId: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    path: string | null
    imageMetaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: string | null
    collectionId: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    path: number
    imageMetaId: number
    createdAt: number
    updatedAt: number
    sectionId: number
    collectionId: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    path?: true
    imageMetaId?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    collectionId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    path?: true
    imageMetaId?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    collectionId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    path?: true
    imageMetaId?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    collectionId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    path: string
    imageMetaId: string
    createdAt: Date
    updatedAt: Date
    sectionId: string | null
    collectionId: string | null
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    imageMetaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    collectionId?: boolean
    imageMeta?: boolean | ImageMetaDefaultArgs<ExtArgs>
    ProductCover?: boolean | Image$ProductCoverArgs<ExtArgs>
    TechnicalProducts?: boolean | Image$TechnicalProductsArgs<ExtArgs>
    ProductPromotions?: boolean | Image$ProductPromotionsArgs<ExtArgs>
    GalleryImages?: boolean | Image$GalleryImagesArgs<ExtArgs>
    section?: boolean | Image$sectionArgs<ExtArgs>
    CollectionCover?: boolean | Image$CollectionCoverArgs<ExtArgs>
    Material?: boolean | Image$MaterialArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    imageMetaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    collectionId?: boolean
    imageMeta?: boolean | ImageMetaDefaultArgs<ExtArgs>
    section?: boolean | Image$sectionArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    imageMetaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    collectionId?: boolean
    imageMeta?: boolean | ImageMetaDefaultArgs<ExtArgs>
    section?: boolean | Image$sectionArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    path?: boolean
    imageMetaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    collectionId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "imageMetaId" | "createdAt" | "updatedAt" | "sectionId" | "collectionId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageMeta?: boolean | ImageMetaDefaultArgs<ExtArgs>
    ProductCover?: boolean | Image$ProductCoverArgs<ExtArgs>
    TechnicalProducts?: boolean | Image$TechnicalProductsArgs<ExtArgs>
    ProductPromotions?: boolean | Image$ProductPromotionsArgs<ExtArgs>
    GalleryImages?: boolean | Image$GalleryImagesArgs<ExtArgs>
    section?: boolean | Image$sectionArgs<ExtArgs>
    CollectionCover?: boolean | Image$CollectionCoverArgs<ExtArgs>
    Material?: boolean | Image$MaterialArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageMeta?: boolean | ImageMetaDefaultArgs<ExtArgs>
    section?: boolean | Image$sectionArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageMeta?: boolean | ImageMetaDefaultArgs<ExtArgs>
    section?: boolean | Image$sectionArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      imageMeta: Prisma.$ImageMetaPayload<ExtArgs>
      ProductCover: Prisma.$ProductPayload<ExtArgs> | null
      TechnicalProducts: Prisma.$ProductPayload<ExtArgs>[]
      ProductPromotions: Prisma.$ProductPromotionPayload<ExtArgs>[]
      GalleryImages: Prisma.$GalleryPayload<ExtArgs>[]
      section: Prisma.$SectionPayload<ExtArgs> | null
      CollectionCover: Prisma.$CollectionPayload<ExtArgs> | null
      Material: Prisma.$MaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      imageMetaId: string
      createdAt: Date
      updatedAt: Date
      sectionId: string | null
      collectionId: string | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imageMeta<T extends ImageMetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageMetaDefaultArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProductCover<T extends Image$ProductCoverArgs<ExtArgs> = {}>(args?: Subset<T, Image$ProductCoverArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TechnicalProducts<T extends Image$TechnicalProductsArgs<ExtArgs> = {}>(args?: Subset<T, Image$TechnicalProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductPromotions<T extends Image$ProductPromotionsArgs<ExtArgs> = {}>(args?: Subset<T, Image$ProductPromotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GalleryImages<T extends Image$GalleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Image$GalleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    section<T extends Image$sectionArgs<ExtArgs> = {}>(args?: Subset<T, Image$sectionArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    CollectionCover<T extends Image$CollectionCoverArgs<ExtArgs> = {}>(args?: Subset<T, Image$CollectionCoverArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Material<T extends Image$MaterialArgs<ExtArgs> = {}>(args?: Subset<T, Image$MaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly path: FieldRef<"Image", 'String'>
    readonly imageMetaId: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
    readonly sectionId: FieldRef<"Image", 'String'>
    readonly collectionId: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.ProductCover
   */
  export type Image$ProductCoverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Image.TechnicalProducts
   */
  export type Image$TechnicalProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Image.ProductPromotions
   */
  export type Image$ProductPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    where?: ProductPromotionWhereInput
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    cursor?: ProductPromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * Image.GalleryImages
   */
  export type Image$GalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    cursor?: GalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Image.section
   */
  export type Image$sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
  }

  /**
   * Image.CollectionCover
   */
  export type Image$CollectionCoverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
  }

  /**
   * Image.Material
   */
  export type Image$MaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model ImageMeta
   */

  export type AggregateImageMeta = {
    _count: ImageMetaCountAggregateOutputType | null
    _min: ImageMetaMinAggregateOutputType | null
    _max: ImageMetaMaxAggregateOutputType | null
  }

  export type ImageMetaMinAggregateOutputType = {
    id: string | null
    locale: string | null
    title: string | null
    alt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMetaMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    title: string | null
    alt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMetaCountAggregateOutputType = {
    id: number
    locale: number
    title: number
    alt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageMetaMinAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    alt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMetaMaxAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    alt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMetaCountAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    alt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageMeta to aggregate.
     */
    where?: ImageMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageMetas to fetch.
     */
    orderBy?: ImageMetaOrderByWithRelationInput | ImageMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageMetas
    **/
    _count?: true | ImageMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMetaMaxAggregateInputType
  }

  export type GetImageMetaAggregateType<T extends ImageMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateImageMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageMeta[P]>
      : GetScalarType<T[P], AggregateImageMeta[P]>
  }




  export type ImageMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageMetaWhereInput
    orderBy?: ImageMetaOrderByWithAggregationInput | ImageMetaOrderByWithAggregationInput[]
    by: ImageMetaScalarFieldEnum[] | ImageMetaScalarFieldEnum
    having?: ImageMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageMetaCountAggregateInputType | true
    _min?: ImageMetaMinAggregateInputType
    _max?: ImageMetaMaxAggregateInputType
  }

  export type ImageMetaGroupByOutputType = {
    id: string
    locale: string
    title: string | null
    alt: string | null
    createdAt: Date
    updatedAt: Date
    _count: ImageMetaCountAggregateOutputType | null
    _min: ImageMetaMinAggregateOutputType | null
    _max: ImageMetaMaxAggregateOutputType | null
  }

  type GetImageMetaGroupByPayload<T extends ImageMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageMetaGroupByOutputType[P]>
            : GetScalarType<T[P], ImageMetaGroupByOutputType[P]>
        }
      >
    >


  export type ImageMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Image?: boolean | ImageMeta$ImageArgs<ExtArgs>
    _count?: boolean | ImageMetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageMeta"]>

  export type ImageMetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageMeta"]>

  export type ImageMetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageMeta"]>

  export type ImageMetaSelectScalar = {
    id?: boolean
    locale?: boolean
    title?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageMetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "title" | "alt" | "createdAt" | "updatedAt", ExtArgs["result"]["imageMeta"]>
  export type ImageMetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Image?: boolean | ImageMeta$ImageArgs<ExtArgs>
    _count?: boolean | ImageMetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageMetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageMetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImageMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageMeta"
    objects: {
      Image: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      title: string | null
      alt: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["imageMeta"]>
    composites: {}
  }

  type ImageMetaGetPayload<S extends boolean | null | undefined | ImageMetaDefaultArgs> = $Result.GetResult<Prisma.$ImageMetaPayload, S>

  type ImageMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageMetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageMetaCountAggregateInputType | true
    }

  export interface ImageMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageMeta'], meta: { name: 'ImageMeta' } }
    /**
     * Find zero or one ImageMeta that matches the filter.
     * @param {ImageMetaFindUniqueArgs} args - Arguments to find a ImageMeta
     * @example
     * // Get one ImageMeta
     * const imageMeta = await prisma.imageMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageMetaFindUniqueArgs>(args: SelectSubset<T, ImageMetaFindUniqueArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageMeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageMetaFindUniqueOrThrowArgs} args - Arguments to find a ImageMeta
     * @example
     * // Get one ImageMeta
     * const imageMeta = await prisma.imageMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageMetaFindFirstArgs} args - Arguments to find a ImageMeta
     * @example
     * // Get one ImageMeta
     * const imageMeta = await prisma.imageMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageMetaFindFirstArgs>(args?: SelectSubset<T, ImageMetaFindFirstArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageMetaFindFirstOrThrowArgs} args - Arguments to find a ImageMeta
     * @example
     * // Get one ImageMeta
     * const imageMeta = await prisma.imageMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageMetas
     * const imageMetas = await prisma.imageMeta.findMany()
     * 
     * // Get first 10 ImageMetas
     * const imageMetas = await prisma.imageMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageMetaWithIdOnly = await prisma.imageMeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageMetaFindManyArgs>(args?: SelectSubset<T, ImageMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageMeta.
     * @param {ImageMetaCreateArgs} args - Arguments to create a ImageMeta.
     * @example
     * // Create one ImageMeta
     * const ImageMeta = await prisma.imageMeta.create({
     *   data: {
     *     // ... data to create a ImageMeta
     *   }
     * })
     * 
     */
    create<T extends ImageMetaCreateArgs>(args: SelectSubset<T, ImageMetaCreateArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageMetas.
     * @param {ImageMetaCreateManyArgs} args - Arguments to create many ImageMetas.
     * @example
     * // Create many ImageMetas
     * const imageMeta = await prisma.imageMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageMetaCreateManyArgs>(args?: SelectSubset<T, ImageMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageMetas and returns the data saved in the database.
     * @param {ImageMetaCreateManyAndReturnArgs} args - Arguments to create many ImageMetas.
     * @example
     * // Create many ImageMetas
     * const imageMeta = await prisma.imageMeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageMetas and only return the `id`
     * const imageMetaWithIdOnly = await prisma.imageMeta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageMetaCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageMetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageMeta.
     * @param {ImageMetaDeleteArgs} args - Arguments to delete one ImageMeta.
     * @example
     * // Delete one ImageMeta
     * const ImageMeta = await prisma.imageMeta.delete({
     *   where: {
     *     // ... filter to delete one ImageMeta
     *   }
     * })
     * 
     */
    delete<T extends ImageMetaDeleteArgs>(args: SelectSubset<T, ImageMetaDeleteArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageMeta.
     * @param {ImageMetaUpdateArgs} args - Arguments to update one ImageMeta.
     * @example
     * // Update one ImageMeta
     * const imageMeta = await prisma.imageMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageMetaUpdateArgs>(args: SelectSubset<T, ImageMetaUpdateArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageMetas.
     * @param {ImageMetaDeleteManyArgs} args - Arguments to filter ImageMetas to delete.
     * @example
     * // Delete a few ImageMetas
     * const { count } = await prisma.imageMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageMetaDeleteManyArgs>(args?: SelectSubset<T, ImageMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageMetas
     * const imageMeta = await prisma.imageMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageMetaUpdateManyArgs>(args: SelectSubset<T, ImageMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageMetas and returns the data updated in the database.
     * @param {ImageMetaUpdateManyAndReturnArgs} args - Arguments to update many ImageMetas.
     * @example
     * // Update many ImageMetas
     * const imageMeta = await prisma.imageMeta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageMetas and only return the `id`
     * const imageMetaWithIdOnly = await prisma.imageMeta.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageMetaUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageMetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageMeta.
     * @param {ImageMetaUpsertArgs} args - Arguments to update or create a ImageMeta.
     * @example
     * // Update or create a ImageMeta
     * const imageMeta = await prisma.imageMeta.upsert({
     *   create: {
     *     // ... data to create a ImageMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageMeta we want to update
     *   }
     * })
     */
    upsert<T extends ImageMetaUpsertArgs>(args: SelectSubset<T, ImageMetaUpsertArgs<ExtArgs>>): Prisma__ImageMetaClient<$Result.GetResult<Prisma.$ImageMetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageMetaCountArgs} args - Arguments to filter ImageMetas to count.
     * @example
     * // Count the number of ImageMetas
     * const count = await prisma.imageMeta.count({
     *   where: {
     *     // ... the filter for the ImageMetas we want to count
     *   }
     * })
    **/
    count<T extends ImageMetaCountArgs>(
      args?: Subset<T, ImageMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageMetaAggregateArgs>(args: Subset<T, ImageMetaAggregateArgs>): Prisma.PrismaPromise<GetImageMetaAggregateType<T>>

    /**
     * Group by ImageMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageMetaGroupByArgs} args - Group by arguments.
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
      T extends ImageMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageMetaGroupByArgs['orderBy'] }
        : { orderBy?: ImageMetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageMeta model
   */
  readonly fields: ImageMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Image<T extends ImageMeta$ImageArgs<ExtArgs> = {}>(args?: Subset<T, ImageMeta$ImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ImageMeta model
   */
  interface ImageMetaFieldRefs {
    readonly id: FieldRef<"ImageMeta", 'String'>
    readonly locale: FieldRef<"ImageMeta", 'String'>
    readonly title: FieldRef<"ImageMeta", 'String'>
    readonly alt: FieldRef<"ImageMeta", 'String'>
    readonly createdAt: FieldRef<"ImageMeta", 'DateTime'>
    readonly updatedAt: FieldRef<"ImageMeta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageMeta findUnique
   */
  export type ImageMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * Filter, which ImageMeta to fetch.
     */
    where: ImageMetaWhereUniqueInput
  }

  /**
   * ImageMeta findUniqueOrThrow
   */
  export type ImageMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * Filter, which ImageMeta to fetch.
     */
    where: ImageMetaWhereUniqueInput
  }

  /**
   * ImageMeta findFirst
   */
  export type ImageMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * Filter, which ImageMeta to fetch.
     */
    where?: ImageMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageMetas to fetch.
     */
    orderBy?: ImageMetaOrderByWithRelationInput | ImageMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageMetas.
     */
    cursor?: ImageMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageMetas.
     */
    distinct?: ImageMetaScalarFieldEnum | ImageMetaScalarFieldEnum[]
  }

  /**
   * ImageMeta findFirstOrThrow
   */
  export type ImageMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * Filter, which ImageMeta to fetch.
     */
    where?: ImageMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageMetas to fetch.
     */
    orderBy?: ImageMetaOrderByWithRelationInput | ImageMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageMetas.
     */
    cursor?: ImageMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageMetas.
     */
    distinct?: ImageMetaScalarFieldEnum | ImageMetaScalarFieldEnum[]
  }

  /**
   * ImageMeta findMany
   */
  export type ImageMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * Filter, which ImageMetas to fetch.
     */
    where?: ImageMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageMetas to fetch.
     */
    orderBy?: ImageMetaOrderByWithRelationInput | ImageMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageMetas.
     */
    cursor?: ImageMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageMetas.
     */
    skip?: number
    distinct?: ImageMetaScalarFieldEnum | ImageMetaScalarFieldEnum[]
  }

  /**
   * ImageMeta create
   */
  export type ImageMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageMeta.
     */
    data: XOR<ImageMetaCreateInput, ImageMetaUncheckedCreateInput>
  }

  /**
   * ImageMeta createMany
   */
  export type ImageMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageMetas.
     */
    data: ImageMetaCreateManyInput | ImageMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageMeta createManyAndReturn
   */
  export type ImageMetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * The data used to create many ImageMetas.
     */
    data: ImageMetaCreateManyInput | ImageMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageMeta update
   */
  export type ImageMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageMeta.
     */
    data: XOR<ImageMetaUpdateInput, ImageMetaUncheckedUpdateInput>
    /**
     * Choose, which ImageMeta to update.
     */
    where: ImageMetaWhereUniqueInput
  }

  /**
   * ImageMeta updateMany
   */
  export type ImageMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageMetas.
     */
    data: XOR<ImageMetaUpdateManyMutationInput, ImageMetaUncheckedUpdateManyInput>
    /**
     * Filter which ImageMetas to update
     */
    where?: ImageMetaWhereInput
    /**
     * Limit how many ImageMetas to update.
     */
    limit?: number
  }

  /**
   * ImageMeta updateManyAndReturn
   */
  export type ImageMetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * The data used to update ImageMetas.
     */
    data: XOR<ImageMetaUpdateManyMutationInput, ImageMetaUncheckedUpdateManyInput>
    /**
     * Filter which ImageMetas to update
     */
    where?: ImageMetaWhereInput
    /**
     * Limit how many ImageMetas to update.
     */
    limit?: number
  }

  /**
   * ImageMeta upsert
   */
  export type ImageMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageMeta to update in case it exists.
     */
    where: ImageMetaWhereUniqueInput
    /**
     * In case the ImageMeta found by the `where` argument doesn't exist, create a new ImageMeta with this data.
     */
    create: XOR<ImageMetaCreateInput, ImageMetaUncheckedCreateInput>
    /**
     * In case the ImageMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageMetaUpdateInput, ImageMetaUncheckedUpdateInput>
  }

  /**
   * ImageMeta delete
   */
  export type ImageMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
    /**
     * Filter which ImageMeta to delete.
     */
    where: ImageMetaWhereUniqueInput
  }

  /**
   * ImageMeta deleteMany
   */
  export type ImageMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageMetas to delete
     */
    where?: ImageMetaWhereInput
    /**
     * Limit how many ImageMetas to delete.
     */
    limit?: number
  }

  /**
   * ImageMeta.Image
   */
  export type ImageMeta$ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * ImageMeta without action
   */
  export type ImageMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageMeta
     */
    select?: ImageMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageMeta
     */
    omit?: ImageMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageMetaInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    metaId: string | null
    coverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    metaId: string | null
    coverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    metaId: number
    coverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    metaId?: true
    coverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    metaId?: true
    coverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    metaId?: true
    coverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    metaId: string
    coverId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    metaId?: boolean
    coverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Collection$productsArgs<ExtArgs>
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    cover?: boolean | Collection$coverArgs<ExtArgs>
    section?: boolean | Collection$sectionArgs<ExtArgs>
    contents?: boolean | Collection$contentsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    metaId?: boolean
    coverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    cover?: boolean | Collection$coverArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    metaId?: boolean
    coverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    cover?: boolean | Collection$coverArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    metaId?: boolean
    coverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "metaId" | "coverId" | "createdAt" | "updatedAt", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Collection$productsArgs<ExtArgs>
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    cover?: boolean | Collection$coverArgs<ExtArgs>
    section?: boolean | Collection$sectionArgs<ExtArgs>
    contents?: boolean | Collection$contentsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    cover?: boolean | Collection$coverArgs<ExtArgs>
  }
  export type CollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    cover?: boolean | Collection$coverArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      meta: Prisma.$MetaPayload<ExtArgs>
      cover: Prisma.$ImagePayload<ExtArgs> | null
      section: Prisma.$SectionPayload<ExtArgs>[]
      contents: Prisma.$ContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      metaId: string
      coverId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Collection$productsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meta<T extends MetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetaDefaultArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cover<T extends Collection$coverArgs<ExtArgs> = {}>(args?: Subset<T, Collection$coverArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    section<T extends Collection$sectionArgs<ExtArgs> = {}>(args?: Subset<T, Collection$sectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends Collection$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly locale: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly slug: FieldRef<"Collection", 'String'>
    readonly metaId: FieldRef<"Collection", 'String'>
    readonly coverId: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly updatedAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection.products
   */
  export type Collection$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Collection.cover
   */
  export type Collection$coverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Collection.section
   */
  export type Collection$sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Collection.contents
   */
  export type Collection$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    title: string | null
    subtitle: string | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    title: string | null
    subtitle: string | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    title: number
    subtitle: number
    metaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    title?: true
    subtitle?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    title?: true
    subtitle?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    title?: true
    subtitle?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    title: string | null
    subtitle: string | null
    metaId: string
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    content?: boolean | Page$contentArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "title" | "subtitle" | "metaId" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    content?: boolean | Page$contentArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      meta: Prisma.$MetaPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      title: string | null
      subtitle: string | null
      metaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
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
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends MetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetaDefaultArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends Page$contentArgs<ExtArgs> = {}>(args?: Subset<T, Page$contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly locale: FieldRef<"Page", 'String'>
    readonly name: FieldRef<"Page", 'String'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly subtitle: FieldRef<"Page", 'String'>
    readonly metaId: FieldRef<"Page", 'String'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.content
   */
  export type Page$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Gallery$imagesArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["gallery"]>
  export type GalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Gallery$imagesArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GalleryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GalleryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }

  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryFindUniqueArgs>(args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryFindFirstArgs>(args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryFindManyArgs>(args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
     */
    create<T extends GalleryCreateArgs>(args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galleries.
     * @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryCreateManyArgs>(args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galleries and returns the data saved in the database.
     * @param {GalleryCreateManyAndReturnArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
     */
    delete<T extends GalleryDeleteArgs>(args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryUpdateArgs>(args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryDeleteManyArgs>(args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryUpdateManyArgs>(args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries and returns the data updated in the database.
     * @param {GalleryUpdateManyAndReturnArgs} args - Arguments to update many Galleries.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends GalleryUpsertArgs>(args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
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
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Gallery$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Gallery$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gallery model
   */
  interface GalleryFieldRefs {
    readonly id: FieldRef<"Gallery", 'String'>
    readonly locale: FieldRef<"Gallery", 'String'>
    readonly name: FieldRef<"Gallery", 'String'>
    readonly slug: FieldRef<"Gallery", 'String'>
    readonly createdAt: FieldRef<"Gallery", 'DateTime'>
    readonly updatedAt: FieldRef<"Gallery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }

  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery createManyAndReturn
   */
  export type GalleryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery updateManyAndReturn
   */
  export type GalleryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }

  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to delete.
     */
    limit?: number
  }

  /**
   * Gallery.images
   */
  export type Gallery$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    layout: string | null
    title: string | null
    content: string | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    layout: string | null
    title: string | null
    content: string | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    layout: number
    title: number
    content: number
    collectionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    layout?: true
    title?: true
    content?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    layout?: true
    title?: true
    content?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    layout?: true
    title?: true
    content?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    layout: string | null
    title: string | null
    content: string | null
    collectionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    layout?: boolean
    title?: boolean
    content?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | Section$collectionArgs<ExtArgs>
    images?: boolean | Section$imagesArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    layout?: boolean
    title?: boolean
    content?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | Section$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    layout?: boolean
    title?: boolean
    content?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | Section$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    layout?: boolean
    title?: boolean
    content?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "layout" | "title" | "content" | "collectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | Section$collectionArgs<ExtArgs>
    images?: boolean | Section$imagesArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | Section$collectionArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | Section$collectionArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs> | null
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      layout: string | null
      title: string | null
      content: string | null
      collectionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends Section$collectionArgs<ExtArgs> = {}>(args?: Subset<T, Section$collectionArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Section$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Section$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly locale: FieldRef<"Section", 'String'>
    readonly name: FieldRef<"Section", 'String'>
    readonly slug: FieldRef<"Section", 'String'>
    readonly layout: FieldRef<"Section", 'String'>
    readonly title: FieldRef<"Section", 'String'>
    readonly content: FieldRef<"Section", 'String'>
    readonly collectionId: FieldRef<"Section", 'String'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.collection
   */
  export type Section$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
  }

  /**
   * Section.images
   */
  export type Section$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model MaterialCategory
   */

  export type AggregateMaterialCategory = {
    _count: MaterialCategoryCountAggregateOutputType | null
    _min: MaterialCategoryMinAggregateOutputType | null
    _max: MaterialCategoryMaxAggregateOutputType | null
  }

  export type MaterialCategoryMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCategoryMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCategoryCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialCategoryMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCategoryMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCategoryCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialCategory to aggregate.
     */
    where?: MaterialCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialCategories to fetch.
     */
    orderBy?: MaterialCategoryOrderByWithRelationInput | MaterialCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialCategories
    **/
    _count?: true | MaterialCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialCategoryMaxAggregateInputType
  }

  export type GetMaterialCategoryAggregateType<T extends MaterialCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialCategory[P]>
      : GetScalarType<T[P], AggregateMaterialCategory[P]>
  }




  export type MaterialCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialCategoryWhereInput
    orderBy?: MaterialCategoryOrderByWithAggregationInput | MaterialCategoryOrderByWithAggregationInput[]
    by: MaterialCategoryScalarFieldEnum[] | MaterialCategoryScalarFieldEnum
    having?: MaterialCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCategoryCountAggregateInputType | true
    _min?: MaterialCategoryMinAggregateInputType
    _max?: MaterialCategoryMaxAggregateInputType
  }

  export type MaterialCategoryGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaterialCategoryCountAggregateOutputType | null
    _min: MaterialCategoryMinAggregateOutputType | null
    _max: MaterialCategoryMaxAggregateOutputType | null
  }

  type GetMaterialCategoryGroupByPayload<T extends MaterialCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MaterialCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materials?: boolean | MaterialCategory$materialsArgs<ExtArgs>
    _count?: boolean | MaterialCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialCategory"]>

  export type MaterialCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["materialCategory"]>

  export type MaterialCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["materialCategory"]>

  export type MaterialCategorySelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["materialCategory"]>
  export type MaterialCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | MaterialCategory$materialsArgs<ExtArgs>
    _count?: boolean | MaterialCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialCategory"
    objects: {
      materials: Prisma.$MaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["materialCategory"]>
    composites: {}
  }

  type MaterialCategoryGetPayload<S extends boolean | null | undefined | MaterialCategoryDefaultArgs> = $Result.GetResult<Prisma.$MaterialCategoryPayload, S>

  type MaterialCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCategoryCountAggregateInputType | true
    }

  export interface MaterialCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialCategory'], meta: { name: 'MaterialCategory' } }
    /**
     * Find zero or one MaterialCategory that matches the filter.
     * @param {MaterialCategoryFindUniqueArgs} args - Arguments to find a MaterialCategory
     * @example
     * // Get one MaterialCategory
     * const materialCategory = await prisma.materialCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialCategoryFindUniqueArgs>(args: SelectSubset<T, MaterialCategoryFindUniqueArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialCategoryFindUniqueOrThrowArgs} args - Arguments to find a MaterialCategory
     * @example
     * // Get one MaterialCategory
     * const materialCategory = await prisma.materialCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCategoryFindFirstArgs} args - Arguments to find a MaterialCategory
     * @example
     * // Get one MaterialCategory
     * const materialCategory = await prisma.materialCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialCategoryFindFirstArgs>(args?: SelectSubset<T, MaterialCategoryFindFirstArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCategoryFindFirstOrThrowArgs} args - Arguments to find a MaterialCategory
     * @example
     * // Get one MaterialCategory
     * const materialCategory = await prisma.materialCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialCategories
     * const materialCategories = await prisma.materialCategory.findMany()
     * 
     * // Get first 10 MaterialCategories
     * const materialCategories = await prisma.materialCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialCategoryWithIdOnly = await prisma.materialCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialCategoryFindManyArgs>(args?: SelectSubset<T, MaterialCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialCategory.
     * @param {MaterialCategoryCreateArgs} args - Arguments to create a MaterialCategory.
     * @example
     * // Create one MaterialCategory
     * const MaterialCategory = await prisma.materialCategory.create({
     *   data: {
     *     // ... data to create a MaterialCategory
     *   }
     * })
     * 
     */
    create<T extends MaterialCategoryCreateArgs>(args: SelectSubset<T, MaterialCategoryCreateArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialCategories.
     * @param {MaterialCategoryCreateManyArgs} args - Arguments to create many MaterialCategories.
     * @example
     * // Create many MaterialCategories
     * const materialCategory = await prisma.materialCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCategoryCreateManyArgs>(args?: SelectSubset<T, MaterialCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialCategories and returns the data saved in the database.
     * @param {MaterialCategoryCreateManyAndReturnArgs} args - Arguments to create many MaterialCategories.
     * @example
     * // Create many MaterialCategories
     * const materialCategory = await prisma.materialCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialCategories and only return the `id`
     * const materialCategoryWithIdOnly = await prisma.materialCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaterialCategory.
     * @param {MaterialCategoryDeleteArgs} args - Arguments to delete one MaterialCategory.
     * @example
     * // Delete one MaterialCategory
     * const MaterialCategory = await prisma.materialCategory.delete({
     *   where: {
     *     // ... filter to delete one MaterialCategory
     *   }
     * })
     * 
     */
    delete<T extends MaterialCategoryDeleteArgs>(args: SelectSubset<T, MaterialCategoryDeleteArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialCategory.
     * @param {MaterialCategoryUpdateArgs} args - Arguments to update one MaterialCategory.
     * @example
     * // Update one MaterialCategory
     * const materialCategory = await prisma.materialCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialCategoryUpdateArgs>(args: SelectSubset<T, MaterialCategoryUpdateArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialCategories.
     * @param {MaterialCategoryDeleteManyArgs} args - Arguments to filter MaterialCategories to delete.
     * @example
     * // Delete a few MaterialCategories
     * const { count } = await prisma.materialCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialCategoryDeleteManyArgs>(args?: SelectSubset<T, MaterialCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialCategories
     * const materialCategory = await prisma.materialCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialCategoryUpdateManyArgs>(args: SelectSubset<T, MaterialCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialCategories and returns the data updated in the database.
     * @param {MaterialCategoryUpdateManyAndReturnArgs} args - Arguments to update many MaterialCategories.
     * @example
     * // Update many MaterialCategories
     * const materialCategory = await prisma.materialCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaterialCategories and only return the `id`
     * const materialCategoryWithIdOnly = await prisma.materialCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaterialCategory.
     * @param {MaterialCategoryUpsertArgs} args - Arguments to update or create a MaterialCategory.
     * @example
     * // Update or create a MaterialCategory
     * const materialCategory = await prisma.materialCategory.upsert({
     *   create: {
     *     // ... data to create a MaterialCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialCategory we want to update
     *   }
     * })
     */
    upsert<T extends MaterialCategoryUpsertArgs>(args: SelectSubset<T, MaterialCategoryUpsertArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCategoryCountArgs} args - Arguments to filter MaterialCategories to count.
     * @example
     * // Count the number of MaterialCategories
     * const count = await prisma.materialCategory.count({
     *   where: {
     *     // ... the filter for the MaterialCategories we want to count
     *   }
     * })
    **/
    count<T extends MaterialCategoryCountArgs>(
      args?: Subset<T, MaterialCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialCategoryAggregateArgs>(args: Subset<T, MaterialCategoryAggregateArgs>): Prisma.PrismaPromise<GetMaterialCategoryAggregateType<T>>

    /**
     * Group by MaterialCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCategoryGroupByArgs} args - Group by arguments.
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
      T extends MaterialCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MaterialCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialCategory model
   */
  readonly fields: MaterialCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends MaterialCategory$materialsArgs<ExtArgs> = {}>(args?: Subset<T, MaterialCategory$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MaterialCategory model
   */
  interface MaterialCategoryFieldRefs {
    readonly id: FieldRef<"MaterialCategory", 'String'>
    readonly locale: FieldRef<"MaterialCategory", 'String'>
    readonly name: FieldRef<"MaterialCategory", 'String'>
    readonly slug: FieldRef<"MaterialCategory", 'String'>
    readonly description: FieldRef<"MaterialCategory", 'String'>
    readonly createdAt: FieldRef<"MaterialCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"MaterialCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaterialCategory findUnique
   */
  export type MaterialCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MaterialCategory to fetch.
     */
    where: MaterialCategoryWhereUniqueInput
  }

  /**
   * MaterialCategory findUniqueOrThrow
   */
  export type MaterialCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MaterialCategory to fetch.
     */
    where: MaterialCategoryWhereUniqueInput
  }

  /**
   * MaterialCategory findFirst
   */
  export type MaterialCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MaterialCategory to fetch.
     */
    where?: MaterialCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialCategories to fetch.
     */
    orderBy?: MaterialCategoryOrderByWithRelationInput | MaterialCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialCategories.
     */
    cursor?: MaterialCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialCategories.
     */
    distinct?: MaterialCategoryScalarFieldEnum | MaterialCategoryScalarFieldEnum[]
  }

  /**
   * MaterialCategory findFirstOrThrow
   */
  export type MaterialCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MaterialCategory to fetch.
     */
    where?: MaterialCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialCategories to fetch.
     */
    orderBy?: MaterialCategoryOrderByWithRelationInput | MaterialCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialCategories.
     */
    cursor?: MaterialCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialCategories.
     */
    distinct?: MaterialCategoryScalarFieldEnum | MaterialCategoryScalarFieldEnum[]
  }

  /**
   * MaterialCategory findMany
   */
  export type MaterialCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MaterialCategories to fetch.
     */
    where?: MaterialCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialCategories to fetch.
     */
    orderBy?: MaterialCategoryOrderByWithRelationInput | MaterialCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialCategories.
     */
    cursor?: MaterialCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialCategories.
     */
    skip?: number
    distinct?: MaterialCategoryScalarFieldEnum | MaterialCategoryScalarFieldEnum[]
  }

  /**
   * MaterialCategory create
   */
  export type MaterialCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialCategory.
     */
    data: XOR<MaterialCategoryCreateInput, MaterialCategoryUncheckedCreateInput>
  }

  /**
   * MaterialCategory createMany
   */
  export type MaterialCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialCategories.
     */
    data: MaterialCategoryCreateManyInput | MaterialCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialCategory createManyAndReturn
   */
  export type MaterialCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MaterialCategories.
     */
    data: MaterialCategoryCreateManyInput | MaterialCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialCategory update
   */
  export type MaterialCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialCategory.
     */
    data: XOR<MaterialCategoryUpdateInput, MaterialCategoryUncheckedUpdateInput>
    /**
     * Choose, which MaterialCategory to update.
     */
    where: MaterialCategoryWhereUniqueInput
  }

  /**
   * MaterialCategory updateMany
   */
  export type MaterialCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialCategories.
     */
    data: XOR<MaterialCategoryUpdateManyMutationInput, MaterialCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MaterialCategories to update
     */
    where?: MaterialCategoryWhereInput
    /**
     * Limit how many MaterialCategories to update.
     */
    limit?: number
  }

  /**
   * MaterialCategory updateManyAndReturn
   */
  export type MaterialCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MaterialCategories.
     */
    data: XOR<MaterialCategoryUpdateManyMutationInput, MaterialCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MaterialCategories to update
     */
    where?: MaterialCategoryWhereInput
    /**
     * Limit how many MaterialCategories to update.
     */
    limit?: number
  }

  /**
   * MaterialCategory upsert
   */
  export type MaterialCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialCategory to update in case it exists.
     */
    where: MaterialCategoryWhereUniqueInput
    /**
     * In case the MaterialCategory found by the `where` argument doesn't exist, create a new MaterialCategory with this data.
     */
    create: XOR<MaterialCategoryCreateInput, MaterialCategoryUncheckedCreateInput>
    /**
     * In case the MaterialCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialCategoryUpdateInput, MaterialCategoryUncheckedUpdateInput>
  }

  /**
   * MaterialCategory delete
   */
  export type MaterialCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
    /**
     * Filter which MaterialCategory to delete.
     */
    where: MaterialCategoryWhereUniqueInput
  }

  /**
   * MaterialCategory deleteMany
   */
  export type MaterialCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialCategories to delete
     */
    where?: MaterialCategoryWhereInput
    /**
     * Limit how many MaterialCategories to delete.
     */
    limit?: number
  }

  /**
   * MaterialCategory.materials
   */
  export type MaterialCategory$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * MaterialCategory without action
   */
  export type MaterialCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCategory
     */
    select?: MaterialCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialCategory
     */
    omit?: MaterialCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    imageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    imageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    locale: number
    name: number
    slug: number
    categoryId: number
    imageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialMinAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    categoryId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    categoryId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    locale?: true
    name?: true
    slug?: true
    categoryId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    locale: string
    name: string
    slug: string
    categoryId: string
    imageId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | MaterialCategoryDefaultArgs<ExtArgs>
    image?: boolean | Material$imageArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | MaterialCategoryDefaultArgs<ExtArgs>
    image?: boolean | Material$imageArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | MaterialCategoryDefaultArgs<ExtArgs>
    image?: boolean | Material$imageArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    locale?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "name" | "slug" | "categoryId" | "imageId" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MaterialCategoryDefaultArgs<ExtArgs>
    image?: boolean | Material$imageArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MaterialCategoryDefaultArgs<ExtArgs>
    image?: boolean | Material$imageArgs<ExtArgs>
  }
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MaterialCategoryDefaultArgs<ExtArgs>
    image?: boolean | Material$imageArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      category: Prisma.$MaterialCategoryPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      name: string
      slug: string
      categoryId: string
      imageId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends MaterialCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialCategoryDefaultArgs<ExtArgs>>): Prisma__MaterialCategoryClient<$Result.GetResult<Prisma.$MaterialCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends Material$imageArgs<ExtArgs> = {}>(args?: Subset<T, Material$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly locale: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly slug: FieldRef<"Material", 'String'>
    readonly categoryId: FieldRef<"Material", 'String'>
    readonly imageId: FieldRef<"Material", 'String'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.image
   */
  export type Material$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    description: 'description',
    metaId: 'metaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MetaScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    robots: 'robots',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetaScalarFieldEnum = (typeof MetaScalarFieldEnum)[keyof typeof MetaScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    title: 'title',
    content: 'content',
    pageId: 'pageId',
    collectionId: 'collectionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    categoryId: 'categoryId',
    collectionId: 'collectionId',
    type: 'type',
    description: 'description',
    imageId: 'imageId',
    top: 'top',
    showroom: 'showroom',
    price: 'price',
    metaId: 'metaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductPromotionScalarFieldEnum: {
    id: 'id',
    layout: 'layout',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductPromotionScalarFieldEnum = (typeof ProductPromotionScalarFieldEnum)[keyof typeof ProductPromotionScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    path: 'path',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    path: 'path',
    imageMetaId: 'imageMetaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sectionId: 'sectionId',
    collectionId: 'collectionId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ImageMetaScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    title: 'title',
    alt: 'alt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageMetaScalarFieldEnum = (typeof ImageMetaScalarFieldEnum)[keyof typeof ImageMetaScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    metaId: 'metaId',
    coverId: 'coverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    title: 'title',
    subtitle: 'subtitle',
    metaId: 'metaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    layout: 'layout',
    title: 'title',
    content: 'content',
    collectionId: 'collectionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const MaterialCategoryScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialCategoryScalarFieldEnum = (typeof MaterialCategoryScalarFieldEnum)[keyof typeof MaterialCategoryScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    name: 'name',
    slug: 'slug',
    categoryId: 'categoryId',
    imageId: 'imageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    locale?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    metaId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: MetaOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    locale?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    metaId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    products?: ProductListRelationFilter
  }, "id" | "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    locale?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    metaId?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MetaWhereInput = {
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    id?: StringFilter<"Meta"> | string
    locale?: StringFilter<"Meta"> | string
    title?: StringNullableFilter<"Meta"> | string | null
    description?: StringNullableFilter<"Meta"> | string | null
    keywords?: StringNullableFilter<"Meta"> | string | null
    robots?: BoolFilter<"Meta"> | boolean
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    categories?: CategoryListRelationFilter
    pages?: PageListRelationFilter
    products?: ProductListRelationFilter
    collections?: CollectionListRelationFilter
  }

  export type MetaOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    robots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    pages?: PageOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
  }

  export type MetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    locale?: StringFilter<"Meta"> | string
    title?: StringNullableFilter<"Meta"> | string | null
    description?: StringNullableFilter<"Meta"> | string | null
    keywords?: StringNullableFilter<"Meta"> | string | null
    robots?: BoolFilter<"Meta"> | boolean
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    categories?: CategoryListRelationFilter
    pages?: PageListRelationFilter
    products?: ProductListRelationFilter
    collections?: CollectionListRelationFilter
  }, "id" | "id">

  export type MetaOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    robots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetaCountOrderByAggregateInput
    _max?: MetaMaxOrderByAggregateInput
    _min?: MetaMinOrderByAggregateInput
  }

  export type MetaScalarWhereWithAggregatesInput = {
    AND?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    OR?: MetaScalarWhereWithAggregatesInput[]
    NOT?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meta"> | string
    locale?: StringWithAggregatesFilter<"Meta"> | string
    title?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    description?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    robots?: BoolWithAggregatesFilter<"Meta"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    locale?: StringFilter<"Content"> | string
    name?: StringFilter<"Content"> | string
    slug?: StringFilter<"Content"> | string
    title?: StringNullableFilter<"Content"> | string | null
    content?: StringNullableFilter<"Content"> | string | null
    pageId?: StringNullableFilter<"Content"> | string | null
    collectionId?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    collection?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    pageId?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: PageOrderByWithRelationInput
    collection?: CollectionOrderByWithRelationInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_locale?: ContentSlugLocaleCompoundUniqueInput
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    locale?: StringFilter<"Content"> | string
    name?: StringFilter<"Content"> | string
    slug?: StringFilter<"Content"> | string
    title?: StringNullableFilter<"Content"> | string | null
    content?: StringNullableFilter<"Content"> | string | null
    pageId?: StringNullableFilter<"Content"> | string | null
    collectionId?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    collection?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
  }, "id" | "slug_locale">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    pageId?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    locale?: StringWithAggregatesFilter<"Content"> | string
    name?: StringWithAggregatesFilter<"Content"> | string
    slug?: StringWithAggregatesFilter<"Content"> | string
    title?: StringNullableWithAggregatesFilter<"Content"> | string | null
    content?: StringNullableWithAggregatesFilter<"Content"> | string | null
    pageId?: StringNullableWithAggregatesFilter<"Content"> | string | null
    collectionId?: StringNullableWithAggregatesFilter<"Content"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    locale?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    collectionId?: StringNullableFilter<"Product"> | string | null
    type?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    imageId?: StringNullableFilter<"Product"> | string | null
    top?: BoolFilter<"Product"> | boolean
    showroom?: BoolFilter<"Product"> | boolean
    price?: FloatNullableFilter<"Product"> | number | null
    metaId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    collection?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
    cover?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    promotion?: ProductPromotionListRelationFilter
    technical?: ImageListRelationFilter
    files?: FileListRelationFilter
    meta?: XOR<MetaNullableScalarRelationFilter, MetaWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    top?: SortOrder
    showroom?: SortOrder
    price?: SortOrderInput | SortOrder
    metaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    collection?: CollectionOrderByWithRelationInput
    cover?: ImageOrderByWithRelationInput
    promotion?: ProductPromotionOrderByRelationAggregateInput
    technical?: ImageOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    meta?: MetaOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    imageId?: string
    slug_locale?: ProductSlugLocaleCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    locale?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    collectionId?: StringNullableFilter<"Product"> | string | null
    type?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    top?: BoolFilter<"Product"> | boolean
    showroom?: BoolFilter<"Product"> | boolean
    price?: FloatNullableFilter<"Product"> | number | null
    metaId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    collection?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
    cover?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    promotion?: ProductPromotionListRelationFilter
    technical?: ImageListRelationFilter
    files?: FileListRelationFilter
    meta?: XOR<MetaNullableScalarRelationFilter, MetaWhereInput> | null
  }, "id" | "imageId" | "slug_locale">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    top?: SortOrder
    showroom?: SortOrder
    price?: SortOrderInput | SortOrder
    metaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    locale?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    collectionId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    type?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imageId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    top?: BoolWithAggregatesFilter<"Product"> | boolean
    showroom?: BoolWithAggregatesFilter<"Product"> | boolean
    price?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    metaId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductPromotionWhereInput = {
    AND?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    OR?: ProductPromotionWhereInput[]
    NOT?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    id?: StringFilter<"ProductPromotion"> | string
    layout?: StringFilter<"ProductPromotion"> | string
    productId?: StringNullableFilter<"ProductPromotion"> | string | null
    createdAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    images?: ImageListRelationFilter
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type ProductPromotionOrderByWithRelationInput = {
    id?: SortOrder
    layout?: SortOrder
    productId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    Product?: ProductOrderByWithRelationInput
  }

  export type ProductPromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    OR?: ProductPromotionWhereInput[]
    NOT?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    layout?: StringFilter<"ProductPromotion"> | string
    productId?: StringNullableFilter<"ProductPromotion"> | string | null
    createdAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    images?: ImageListRelationFilter
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type ProductPromotionOrderByWithAggregationInput = {
    id?: SortOrder
    layout?: SortOrder
    productId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductPromotionCountOrderByAggregateInput
    _max?: ProductPromotionMaxOrderByAggregateInput
    _min?: ProductPromotionMinOrderByAggregateInput
  }

  export type ProductPromotionScalarWhereWithAggregatesInput = {
    AND?: ProductPromotionScalarWhereWithAggregatesInput | ProductPromotionScalarWhereWithAggregatesInput[]
    OR?: ProductPromotionScalarWhereWithAggregatesInput[]
    NOT?: ProductPromotionScalarWhereWithAggregatesInput | ProductPromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPromotion"> | string
    layout?: StringWithAggregatesFilter<"ProductPromotion"> | string
    productId?: StringNullableWithAggregatesFilter<"ProductPromotion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductPromotion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductPromotion"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    productId?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    productId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    path?: StringFilter<"File"> | string
    productId?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    productId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    path?: StringWithAggregatesFilter<"File"> | string
    productId?: StringNullableWithAggregatesFilter<"File"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    path?: StringFilter<"Image"> | string
    imageMetaId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    sectionId?: StringNullableFilter<"Image"> | string | null
    collectionId?: StringNullableFilter<"Image"> | string | null
    imageMeta?: XOR<ImageMetaScalarRelationFilter, ImageMetaWhereInput>
    ProductCover?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    TechnicalProducts?: ProductListRelationFilter
    ProductPromotions?: ProductPromotionListRelationFilter
    GalleryImages?: GalleryListRelationFilter
    section?: XOR<SectionNullableScalarRelationFilter, SectionWhereInput> | null
    CollectionCover?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
    Material?: MaterialListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    imageMetaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    imageMeta?: ImageMetaOrderByWithRelationInput
    ProductCover?: ProductOrderByWithRelationInput
    TechnicalProducts?: ProductOrderByRelationAggregateInput
    ProductPromotions?: ProductPromotionOrderByRelationAggregateInput
    GalleryImages?: GalleryOrderByRelationAggregateInput
    section?: SectionOrderByWithRelationInput
    CollectionCover?: CollectionOrderByWithRelationInput
    Material?: MaterialOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_imageMetaId?: ImageIdImageMetaIdCompoundUniqueInput
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    path?: StringFilter<"Image"> | string
    imageMetaId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    sectionId?: StringNullableFilter<"Image"> | string | null
    collectionId?: StringNullableFilter<"Image"> | string | null
    imageMeta?: XOR<ImageMetaScalarRelationFilter, ImageMetaWhereInput>
    ProductCover?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    TechnicalProducts?: ProductListRelationFilter
    ProductPromotions?: ProductPromotionListRelationFilter
    GalleryImages?: GalleryListRelationFilter
    section?: XOR<SectionNullableScalarRelationFilter, SectionWhereInput> | null
    CollectionCover?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
    Material?: MaterialListRelationFilter
  }, "id" | "id_imageMetaId">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    imageMetaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    path?: StringWithAggregatesFilter<"Image"> | string
    imageMetaId?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    sectionId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    collectionId?: StringNullableWithAggregatesFilter<"Image"> | string | null
  }

  export type ImageMetaWhereInput = {
    AND?: ImageMetaWhereInput | ImageMetaWhereInput[]
    OR?: ImageMetaWhereInput[]
    NOT?: ImageMetaWhereInput | ImageMetaWhereInput[]
    id?: StringFilter<"ImageMeta"> | string
    locale?: StringFilter<"ImageMeta"> | string
    title?: StringNullableFilter<"ImageMeta"> | string | null
    alt?: StringNullableFilter<"ImageMeta"> | string | null
    createdAt?: DateTimeFilter<"ImageMeta"> | Date | string
    updatedAt?: DateTimeFilter<"ImageMeta"> | Date | string
    Image?: ImageListRelationFilter
  }

  export type ImageMetaOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Image?: ImageOrderByRelationAggregateInput
  }

  export type ImageMetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageMetaWhereInput | ImageMetaWhereInput[]
    OR?: ImageMetaWhereInput[]
    NOT?: ImageMetaWhereInput | ImageMetaWhereInput[]
    locale?: StringFilter<"ImageMeta"> | string
    title?: StringNullableFilter<"ImageMeta"> | string | null
    alt?: StringNullableFilter<"ImageMeta"> | string | null
    createdAt?: DateTimeFilter<"ImageMeta"> | Date | string
    updatedAt?: DateTimeFilter<"ImageMeta"> | Date | string
    Image?: ImageListRelationFilter
  }, "id" | "id">

  export type ImageMetaOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageMetaCountOrderByAggregateInput
    _max?: ImageMetaMaxOrderByAggregateInput
    _min?: ImageMetaMinOrderByAggregateInput
  }

  export type ImageMetaScalarWhereWithAggregatesInput = {
    AND?: ImageMetaScalarWhereWithAggregatesInput | ImageMetaScalarWhereWithAggregatesInput[]
    OR?: ImageMetaScalarWhereWithAggregatesInput[]
    NOT?: ImageMetaScalarWhereWithAggregatesInput | ImageMetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImageMeta"> | string
    locale?: StringWithAggregatesFilter<"ImageMeta"> | string
    title?: StringNullableWithAggregatesFilter<"ImageMeta"> | string | null
    alt?: StringNullableWithAggregatesFilter<"ImageMeta"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImageMeta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImageMeta"> | Date | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    locale?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    slug?: StringFilter<"Collection"> | string
    metaId?: StringFilter<"Collection"> | string
    coverId?: StringNullableFilter<"Collection"> | string | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    products?: ProductListRelationFilter
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    cover?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    section?: SectionListRelationFilter
    contents?: ContentListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    metaId?: SortOrder
    coverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    meta?: MetaOrderByWithRelationInput
    cover?: ImageOrderByWithRelationInput
    section?: SectionOrderByRelationAggregateInput
    contents?: ContentOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coverId?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    locale?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    slug?: StringFilter<"Collection"> | string
    metaId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    products?: ProductListRelationFilter
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    cover?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    section?: SectionListRelationFilter
    contents?: ContentListRelationFilter
  }, "id" | "coverId" | "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    metaId?: SortOrder
    coverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    locale?: StringWithAggregatesFilter<"Collection"> | string
    name?: StringWithAggregatesFilter<"Collection"> | string
    slug?: StringWithAggregatesFilter<"Collection"> | string
    metaId?: StringWithAggregatesFilter<"Collection"> | string
    coverId?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    locale?: StringFilter<"Page"> | string
    name?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    title?: StringNullableFilter<"Page"> | string | null
    subtitle?: StringNullableFilter<"Page"> | string | null
    metaId?: StringFilter<"Page"> | string
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    content?: ContentListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    subtitle?: SortOrderInput | SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: MetaOrderByWithRelationInput
    content?: ContentOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    locale?: StringFilter<"Page"> | string
    name?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    title?: StringNullableFilter<"Page"> | string | null
    subtitle?: StringNullableFilter<"Page"> | string | null
    metaId?: StringFilter<"Page"> | string
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    content?: ContentListRelationFilter
  }, "id" | "id">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    subtitle?: SortOrderInput | SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    locale?: StringWithAggregatesFilter<"Page"> | string
    name?: StringWithAggregatesFilter<"Page"> | string
    slug?: StringWithAggregatesFilter<"Page"> | string
    title?: StringNullableWithAggregatesFilter<"Page"> | string | null
    subtitle?: StringNullableWithAggregatesFilter<"Page"> | string | null
    metaId?: StringWithAggregatesFilter<"Page"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: StringFilter<"Gallery"> | string
    locale?: StringFilter<"Gallery"> | string
    name?: StringFilter<"Gallery"> | string
    slug?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeFilter<"Gallery"> | Date | string
    images?: ImageListRelationFilter
  }

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    locale?: StringFilter<"Gallery"> | string
    name?: StringFilter<"Gallery"> | string
    slug?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeFilter<"Gallery"> | Date | string
    images?: ImageListRelationFilter
  }, "id" | "id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gallery"> | string
    locale?: StringWithAggregatesFilter<"Gallery"> | string
    name?: StringWithAggregatesFilter<"Gallery"> | string
    slug?: StringWithAggregatesFilter<"Gallery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    locale?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    slug?: StringFilter<"Section"> | string
    layout?: StringNullableFilter<"Section"> | string | null
    title?: StringNullableFilter<"Section"> | string | null
    content?: StringNullableFilter<"Section"> | string | null
    collectionId?: StringNullableFilter<"Section"> | string | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    collection?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
    images?: ImageListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    layout?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    locale?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    slug?: StringFilter<"Section"> | string
    layout?: StringNullableFilter<"Section"> | string | null
    title?: StringNullableFilter<"Section"> | string | null
    content?: StringNullableFilter<"Section"> | string | null
    collectionId?: StringNullableFilter<"Section"> | string | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    collection?: XOR<CollectionNullableScalarRelationFilter, CollectionWhereInput> | null
    images?: ImageListRelationFilter
  }, "id" | "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    layout?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    locale?: StringWithAggregatesFilter<"Section"> | string
    name?: StringWithAggregatesFilter<"Section"> | string
    slug?: StringWithAggregatesFilter<"Section"> | string
    layout?: StringNullableWithAggregatesFilter<"Section"> | string | null
    title?: StringNullableWithAggregatesFilter<"Section"> | string | null
    content?: StringNullableWithAggregatesFilter<"Section"> | string | null
    collectionId?: StringNullableWithAggregatesFilter<"Section"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
  }

  export type MaterialCategoryWhereInput = {
    AND?: MaterialCategoryWhereInput | MaterialCategoryWhereInput[]
    OR?: MaterialCategoryWhereInput[]
    NOT?: MaterialCategoryWhereInput | MaterialCategoryWhereInput[]
    id?: StringFilter<"MaterialCategory"> | string
    locale?: StringFilter<"MaterialCategory"> | string
    name?: StringFilter<"MaterialCategory"> | string
    slug?: StringFilter<"MaterialCategory"> | string
    description?: StringNullableFilter<"MaterialCategory"> | string | null
    createdAt?: DateTimeFilter<"MaterialCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialCategory"> | Date | string
    materials?: MaterialListRelationFilter
  }

  export type MaterialCategoryOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    materials?: MaterialOrderByRelationAggregateInput
  }

  export type MaterialCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialCategoryWhereInput | MaterialCategoryWhereInput[]
    OR?: MaterialCategoryWhereInput[]
    NOT?: MaterialCategoryWhereInput | MaterialCategoryWhereInput[]
    locale?: StringFilter<"MaterialCategory"> | string
    name?: StringFilter<"MaterialCategory"> | string
    slug?: StringFilter<"MaterialCategory"> | string
    description?: StringNullableFilter<"MaterialCategory"> | string | null
    createdAt?: DateTimeFilter<"MaterialCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialCategory"> | Date | string
    materials?: MaterialListRelationFilter
  }, "id" | "id">

  export type MaterialCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCategoryCountOrderByAggregateInput
    _max?: MaterialCategoryMaxOrderByAggregateInput
    _min?: MaterialCategoryMinOrderByAggregateInput
  }

  export type MaterialCategoryScalarWhereWithAggregatesInput = {
    AND?: MaterialCategoryScalarWhereWithAggregatesInput | MaterialCategoryScalarWhereWithAggregatesInput[]
    OR?: MaterialCategoryScalarWhereWithAggregatesInput[]
    NOT?: MaterialCategoryScalarWhereWithAggregatesInput | MaterialCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaterialCategory"> | string
    locale?: StringWithAggregatesFilter<"MaterialCategory"> | string
    name?: StringWithAggregatesFilter<"MaterialCategory"> | string
    slug?: StringWithAggregatesFilter<"MaterialCategory"> | string
    description?: StringNullableWithAggregatesFilter<"MaterialCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaterialCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaterialCategory"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    locale?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    slug?: StringFilter<"Material"> | string
    categoryId?: StringFilter<"Material"> | string
    imageId?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    category?: XOR<MaterialCategoryScalarRelationFilter, MaterialCategoryWhereInput>
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    imageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: MaterialCategoryOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    locale?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    slug?: StringFilter<"Material"> | string
    categoryId?: StringFilter<"Material"> | string
    imageId?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    category?: XOR<MaterialCategoryScalarRelationFilter, MaterialCategoryWhereInput>
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id" | "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    imageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    locale?: StringWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    slug?: StringWithAggregatesFilter<"Material"> | string
    categoryId?: StringWithAggregatesFilter<"Material"> | string
    imageId?: StringNullableWithAggregatesFilter<"Material"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    metaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    metaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaCreateInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutMetaInput
    pages?: PageCreateNestedManyWithoutMetaInput
    products?: ProductCreateNestedManyWithoutMetaInput
    collections?: CollectionCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutMetaInput
    pages?: PageUncheckedCreateNestedManyWithoutMetaInput
    products?: ProductUncheckedCreateNestedManyWithoutMetaInput
    collections?: CollectionUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutMetaNestedInput
    pages?: PageUpdateManyWithoutMetaNestedInput
    products?: ProductUpdateManyWithoutMetaNestedInput
    collections?: CollectionUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutMetaNestedInput
    pages?: PageUncheckedUpdateManyWithoutMetaNestedInput
    products?: ProductUncheckedUpdateManyWithoutMetaNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaCreateManyInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    page?: PageCreateNestedOneWithoutContentInput
    collection?: CollectionCreateNestedOneWithoutContentsInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    pageId?: string | null
    collectionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneWithoutContentNestedInput
    collection?: CollectionUpdateOneWithoutContentsNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    pageId?: string | null
    collectionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    collection?: CollectionCreateNestedOneWithoutProductsInput
    cover?: ImageCreateNestedOneWithoutProductCoverInput
    promotion?: ProductPromotionCreateNestedManyWithoutProductInput
    technical?: ImageCreateNestedManyWithoutTechnicalProductsInput
    files?: FileCreateNestedManyWithoutProductInput
    meta?: MetaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: ProductPromotionUncheckedCreateNestedManyWithoutProductInput
    technical?: ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput
    files?: FileUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    collection?: CollectionUpdateOneWithoutProductsNestedInput
    cover?: ImageUpdateOneWithoutProductCoverNestedInput
    promotion?: ProductPromotionUpdateManyWithoutProductNestedInput
    technical?: ImageUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUpdateManyWithoutProductNestedInput
    meta?: MetaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: ProductPromotionUncheckedUpdateManyWithoutProductNestedInput
    technical?: ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPromotionCreateInput = {
    id?: string
    layout: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutProductPromotionsInput
    Product?: ProductCreateNestedOneWithoutPromotionInput
  }

  export type ProductPromotionUncheckedCreateInput = {
    id?: string
    layout: string
    productId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductPromotionsInput
  }

  export type ProductPromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutProductPromotionsNestedInput
    Product?: ProductUpdateOneWithoutPromotionNestedInput
  }

  export type ProductPromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductPromotionsNestedInput
  }

  export type ProductPromotionCreateManyInput = {
    id?: string
    layout: string
    productId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    path: string
    productId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInput = {
    id?: string
    path: string
    productId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageMetaCreateInput = {
    id?: string
    locale: string
    title?: string | null
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Image?: ImageCreateNestedManyWithoutImageMetaInput
  }

  export type ImageMetaUncheckedCreateInput = {
    id?: string
    locale: string
    title?: string | null
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Image?: ImageUncheckedCreateNestedManyWithoutImageMetaInput
  }

  export type ImageMetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Image?: ImageUpdateManyWithoutImageMetaNestedInput
  }

  export type ImageMetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Image?: ImageUncheckedUpdateManyWithoutImageMetaNestedInput
  }

  export type ImageMetaCreateManyInput = {
    id?: string
    locale: string
    title?: string | null
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageMetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageMetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCollectionInput
    meta: MetaCreateNestedOneWithoutCollectionsInput
    cover?: ImageCreateNestedOneWithoutCollectionCoverInput
    section?: SectionCreateNestedManyWithoutCollectionInput
    contents?: ContentCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    metaId: string
    coverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCollectionInput
    section?: SectionUncheckedCreateNestedManyWithoutCollectionInput
    contents?: ContentUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCollectionNestedInput
    meta?: MetaUpdateOneRequiredWithoutCollectionsNestedInput
    cover?: ImageUpdateOneWithoutCollectionCoverNestedInput
    section?: SectionUpdateManyWithoutCollectionNestedInput
    contents?: ContentUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCollectionNestedInput
    section?: SectionUncheckedUpdateManyWithoutCollectionNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    metaId: string
    coverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutPagesInput
    content?: ContentCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    metaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutPagesNestedInput
    content?: ContentUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    metaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutGalleryImagesInput
  }

  export type GalleryUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutGalleryImagesInput
  }

  export type GalleryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutGalleryImagesNestedInput
  }

  export type GalleryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutGalleryImagesNestedInput
  }

  export type GalleryCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    collectionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    collectionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCategoryCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialCreateNestedManyWithoutCategoryInput
  }

  export type MaterialCategoryUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MaterialCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUpdateManyWithoutCategoryNestedInput
  }

  export type MaterialCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MaterialCategoryCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MaterialCategoryCreateNestedOneWithoutMaterialsInput
    image?: ImageCreateNestedOneWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId: string
    imageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MaterialCategoryUpdateOneRequiredWithoutMaterialsNestedInput
    image?: ImageUpdateOneWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId: string
    imageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MetaScalarRelationFilter = {
    is?: MetaWhereInput
    isNot?: MetaWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type PageListRelationFilter = {
    every?: PageWhereInput
    some?: PageWhereInput
    none?: PageWhereInput
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetaCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    robots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    robots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    robots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PageNullableScalarRelationFilter = {
    is?: PageWhereInput | null
    isNot?: PageWhereInput | null
  }

  export type CollectionNullableScalarRelationFilter = {
    is?: CollectionWhereInput | null
    isNot?: CollectionWhereInput | null
  }

  export type ContentSlugLocaleCompoundUniqueInput = {
    slug: string
    locale: string
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pageId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pageId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pageId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type ProductPromotionListRelationFilter = {
    every?: ProductPromotionWhereInput
    some?: ProductPromotionWhereInput
    none?: ProductPromotionWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type MetaNullableScalarRelationFilter = {
    is?: MetaWhereInput | null
    isNot?: MetaWhereInput | null
  }

  export type ProductPromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSlugLocaleCompoundUniqueInput = {
    slug: string
    locale: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    top?: SortOrder
    showroom?: SortOrder
    price?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    top?: SortOrder
    showroom?: SortOrder
    price?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    top?: SortOrder
    showroom?: SortOrder
    price?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type ProductPromotionCountOrderByAggregateInput = {
    id?: SortOrder
    layout?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    layout?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPromotionMinOrderByAggregateInput = {
    id?: SortOrder
    layout?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMetaScalarRelationFilter = {
    is?: ImageMetaWhereInput
    isNot?: ImageMetaWhereInput
  }

  export type GalleryListRelationFilter = {
    every?: GalleryWhereInput
    some?: GalleryWhereInput
    none?: GalleryWhereInput
  }

  export type SectionNullableScalarRelationFilter = {
    is?: SectionWhereInput | null
    isNot?: SectionWhereInput | null
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type GalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageIdImageMetaIdCompoundUniqueInput = {
    id: string
    imageMetaId: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    imageMetaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    collectionId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    imageMetaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    collectionId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    imageMetaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    collectionId?: SortOrder
  }

  export type ImageMetaCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    alt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    alt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMetaMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    alt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    metaId?: SortOrder
    coverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    metaId?: SortOrder
    coverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    metaId?: SortOrder
    coverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    layout?: SortOrder
    title?: SortOrder
    content?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    layout?: SortOrder
    title?: SortOrder
    content?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    layout?: SortOrder
    title?: SortOrder
    content?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialCategoryScalarRelationFilter = {
    is?: MaterialCategoryWhereInput
    isNot?: MaterialCategoryWhereInput
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<MetaCreateWithoutCategoriesInput, MetaUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutCategoriesInput
    connect?: MetaWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MetaUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<MetaCreateWithoutCategoriesInput, MetaUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutCategoriesInput
    upsert?: MetaUpsertWithoutCategoriesInput
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutCategoriesInput, MetaUpdateWithoutCategoriesInput>, MetaUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutMetaInput = {
    create?: XOR<CategoryCreateWithoutMetaInput, CategoryUncheckedCreateWithoutMetaInput> | CategoryCreateWithoutMetaInput[] | CategoryUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMetaInput | CategoryCreateOrConnectWithoutMetaInput[]
    createMany?: CategoryCreateManyMetaInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type PageCreateNestedManyWithoutMetaInput = {
    create?: XOR<PageCreateWithoutMetaInput, PageUncheckedCreateWithoutMetaInput> | PageCreateWithoutMetaInput[] | PageUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PageCreateOrConnectWithoutMetaInput | PageCreateOrConnectWithoutMetaInput[]
    createMany?: PageCreateManyMetaInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutMetaInput = {
    create?: XOR<ProductCreateWithoutMetaInput, ProductUncheckedCreateWithoutMetaInput> | ProductCreateWithoutMetaInput[] | ProductUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMetaInput | ProductCreateOrConnectWithoutMetaInput[]
    createMany?: ProductCreateManyMetaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutMetaInput = {
    create?: XOR<CollectionCreateWithoutMetaInput, CollectionUncheckedCreateWithoutMetaInput> | CollectionCreateWithoutMetaInput[] | CollectionUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMetaInput | CollectionCreateOrConnectWithoutMetaInput[]
    createMany?: CollectionCreateManyMetaInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<CategoryCreateWithoutMetaInput, CategoryUncheckedCreateWithoutMetaInput> | CategoryCreateWithoutMetaInput[] | CategoryUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMetaInput | CategoryCreateOrConnectWithoutMetaInput[]
    createMany?: CategoryCreateManyMetaInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<PageCreateWithoutMetaInput, PageUncheckedCreateWithoutMetaInput> | PageCreateWithoutMetaInput[] | PageUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PageCreateOrConnectWithoutMetaInput | PageCreateOrConnectWithoutMetaInput[]
    createMany?: PageCreateManyMetaInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<ProductCreateWithoutMetaInput, ProductUncheckedCreateWithoutMetaInput> | ProductCreateWithoutMetaInput[] | ProductUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMetaInput | ProductCreateOrConnectWithoutMetaInput[]
    createMany?: ProductCreateManyMetaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<CollectionCreateWithoutMetaInput, CollectionUncheckedCreateWithoutMetaInput> | CollectionCreateWithoutMetaInput[] | CollectionUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMetaInput | CollectionCreateOrConnectWithoutMetaInput[]
    createMany?: CollectionCreateManyMetaInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoryUpdateManyWithoutMetaNestedInput = {
    create?: XOR<CategoryCreateWithoutMetaInput, CategoryUncheckedCreateWithoutMetaInput> | CategoryCreateWithoutMetaInput[] | CategoryUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMetaInput | CategoryCreateOrConnectWithoutMetaInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMetaInput | CategoryUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: CategoryCreateManyMetaInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMetaInput | CategoryUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMetaInput | CategoryUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type PageUpdateManyWithoutMetaNestedInput = {
    create?: XOR<PageCreateWithoutMetaInput, PageUncheckedCreateWithoutMetaInput> | PageCreateWithoutMetaInput[] | PageUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PageCreateOrConnectWithoutMetaInput | PageCreateOrConnectWithoutMetaInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutMetaInput | PageUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: PageCreateManyMetaInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutMetaInput | PageUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: PageUpdateManyWithWhereWithoutMetaInput | PageUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ProductCreateWithoutMetaInput, ProductUncheckedCreateWithoutMetaInput> | ProductCreateWithoutMetaInput[] | ProductUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMetaInput | ProductCreateOrConnectWithoutMetaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMetaInput | ProductUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ProductCreateManyMetaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMetaInput | ProductUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMetaInput | ProductUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutMetaNestedInput = {
    create?: XOR<CollectionCreateWithoutMetaInput, CollectionUncheckedCreateWithoutMetaInput> | CollectionCreateWithoutMetaInput[] | CollectionUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMetaInput | CollectionCreateOrConnectWithoutMetaInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutMetaInput | CollectionUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: CollectionCreateManyMetaInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutMetaInput | CollectionUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutMetaInput | CollectionUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<CategoryCreateWithoutMetaInput, CategoryUncheckedCreateWithoutMetaInput> | CategoryCreateWithoutMetaInput[] | CategoryUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMetaInput | CategoryCreateOrConnectWithoutMetaInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMetaInput | CategoryUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: CategoryCreateManyMetaInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMetaInput | CategoryUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMetaInput | CategoryUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<PageCreateWithoutMetaInput, PageUncheckedCreateWithoutMetaInput> | PageCreateWithoutMetaInput[] | PageUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PageCreateOrConnectWithoutMetaInput | PageCreateOrConnectWithoutMetaInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutMetaInput | PageUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: PageCreateManyMetaInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutMetaInput | PageUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: PageUpdateManyWithWhereWithoutMetaInput | PageUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ProductCreateWithoutMetaInput, ProductUncheckedCreateWithoutMetaInput> | ProductCreateWithoutMetaInput[] | ProductUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMetaInput | ProductCreateOrConnectWithoutMetaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMetaInput | ProductUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ProductCreateManyMetaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMetaInput | ProductUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMetaInput | ProductUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<CollectionCreateWithoutMetaInput, CollectionUncheckedCreateWithoutMetaInput> | CollectionCreateWithoutMetaInput[] | CollectionUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMetaInput | CollectionCreateOrConnectWithoutMetaInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutMetaInput | CollectionUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: CollectionCreateManyMetaInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutMetaInput | CollectionUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutMetaInput | CollectionUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type PageCreateNestedOneWithoutContentInput = {
    create?: XOR<PageCreateWithoutContentInput, PageUncheckedCreateWithoutContentInput>
    connectOrCreate?: PageCreateOrConnectWithoutContentInput
    connect?: PageWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutContentsInput = {
    create?: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutContentsInput
    connect?: CollectionWhereUniqueInput
  }

  export type PageUpdateOneWithoutContentNestedInput = {
    create?: XOR<PageCreateWithoutContentInput, PageUncheckedCreateWithoutContentInput>
    connectOrCreate?: PageCreateOrConnectWithoutContentInput
    upsert?: PageUpsertWithoutContentInput
    disconnect?: PageWhereInput | boolean
    delete?: PageWhereInput | boolean
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutContentInput, PageUpdateWithoutContentInput>, PageUncheckedUpdateWithoutContentInput>
  }

  export type CollectionUpdateOneWithoutContentsNestedInput = {
    create?: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutContentsInput
    upsert?: CollectionUpsertWithoutContentsInput
    disconnect?: CollectionWhereInput | boolean
    delete?: CollectionWhereInput | boolean
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutContentsInput, CollectionUpdateWithoutContentsInput>, CollectionUncheckedUpdateWithoutContentsInput>
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutProductsInput = {
    create?: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutProductsInput
    connect?: CollectionWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutProductCoverInput = {
    create?: XOR<ImageCreateWithoutProductCoverInput, ImageUncheckedCreateWithoutProductCoverInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductCoverInput
    connect?: ImageWhereUniqueInput
  }

  export type ProductPromotionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPromotionCreateWithoutProductInput, ProductPromotionUncheckedCreateWithoutProductInput> | ProductPromotionCreateWithoutProductInput[] | ProductPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutProductInput | ProductPromotionCreateOrConnectWithoutProductInput[]
    createMany?: ProductPromotionCreateManyProductInputEnvelope
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutTechnicalProductsInput = {
    create?: XOR<ImageCreateWithoutTechnicalProductsInput, ImageUncheckedCreateWithoutTechnicalProductsInput> | ImageCreateWithoutTechnicalProductsInput[] | ImageUncheckedCreateWithoutTechnicalProductsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTechnicalProductsInput | ImageCreateOrConnectWithoutTechnicalProductsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutProductInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[]
    createMany?: FileCreateManyProductInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type MetaCreateNestedOneWithoutProductsInput = {
    create?: XOR<MetaCreateWithoutProductsInput, MetaUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MetaCreateOrConnectWithoutProductsInput
    connect?: MetaWhereUniqueInput
  }

  export type ProductPromotionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPromotionCreateWithoutProductInput, ProductPromotionUncheckedCreateWithoutProductInput> | ProductPromotionCreateWithoutProductInput[] | ProductPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutProductInput | ProductPromotionCreateOrConnectWithoutProductInput[]
    createMany?: ProductPromotionCreateManyProductInputEnvelope
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput = {
    create?: XOR<ImageCreateWithoutTechnicalProductsInput, ImageUncheckedCreateWithoutTechnicalProductsInput> | ImageCreateWithoutTechnicalProductsInput[] | ImageUncheckedCreateWithoutTechnicalProductsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTechnicalProductsInput | ImageCreateOrConnectWithoutTechnicalProductsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[]
    createMany?: FileCreateManyProductInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CollectionUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutProductsInput
    upsert?: CollectionUpsertWithoutProductsInput
    disconnect?: CollectionWhereInput | boolean
    delete?: CollectionWhereInput | boolean
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutProductsInput, CollectionUpdateWithoutProductsInput>, CollectionUncheckedUpdateWithoutProductsInput>
  }

  export type ImageUpdateOneWithoutProductCoverNestedInput = {
    create?: XOR<ImageCreateWithoutProductCoverInput, ImageUncheckedCreateWithoutProductCoverInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductCoverInput
    upsert?: ImageUpsertWithoutProductCoverInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutProductCoverInput, ImageUpdateWithoutProductCoverInput>, ImageUncheckedUpdateWithoutProductCoverInput>
  }

  export type ProductPromotionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutProductInput, ProductPromotionUncheckedCreateWithoutProductInput> | ProductPromotionCreateWithoutProductInput[] | ProductPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutProductInput | ProductPromotionCreateOrConnectWithoutProductInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutProductInput | ProductPromotionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPromotionCreateManyProductInputEnvelope
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutProductInput | ProductPromotionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutProductInput | ProductPromotionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutTechnicalProductsNestedInput = {
    create?: XOR<ImageCreateWithoutTechnicalProductsInput, ImageUncheckedCreateWithoutTechnicalProductsInput> | ImageCreateWithoutTechnicalProductsInput[] | ImageUncheckedCreateWithoutTechnicalProductsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTechnicalProductsInput | ImageCreateOrConnectWithoutTechnicalProductsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTechnicalProductsInput | ImageUpsertWithWhereUniqueWithoutTechnicalProductsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTechnicalProductsInput | ImageUpdateWithWhereUniqueWithoutTechnicalProductsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTechnicalProductsInput | ImageUpdateManyWithWhereWithoutTechnicalProductsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type FileUpdateManyWithoutProductNestedInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutProductInput | FileUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FileCreateManyProductInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutProductInput | FileUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FileUpdateManyWithWhereWithoutProductInput | FileUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type MetaUpdateOneWithoutProductsNestedInput = {
    create?: XOR<MetaCreateWithoutProductsInput, MetaUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MetaCreateOrConnectWithoutProductsInput
    upsert?: MetaUpsertWithoutProductsInput
    disconnect?: MetaWhereInput | boolean
    delete?: MetaWhereInput | boolean
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutProductsInput, MetaUpdateWithoutProductsInput>, MetaUncheckedUpdateWithoutProductsInput>
  }

  export type ProductPromotionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutProductInput, ProductPromotionUncheckedCreateWithoutProductInput> | ProductPromotionCreateWithoutProductInput[] | ProductPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutProductInput | ProductPromotionCreateOrConnectWithoutProductInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutProductInput | ProductPromotionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPromotionCreateManyProductInputEnvelope
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutProductInput | ProductPromotionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutProductInput | ProductPromotionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput = {
    create?: XOR<ImageCreateWithoutTechnicalProductsInput, ImageUncheckedCreateWithoutTechnicalProductsInput> | ImageCreateWithoutTechnicalProductsInput[] | ImageUncheckedCreateWithoutTechnicalProductsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTechnicalProductsInput | ImageCreateOrConnectWithoutTechnicalProductsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTechnicalProductsInput | ImageUpsertWithWhereUniqueWithoutTechnicalProductsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTechnicalProductsInput | ImageUpdateWithWhereUniqueWithoutTechnicalProductsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTechnicalProductsInput | ImageUpdateManyWithWhereWithoutTechnicalProductsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutProductInput | FileUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FileCreateManyProductInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutProductInput | FileUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FileUpdateManyWithWhereWithoutProductInput | FileUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutProductPromotionsInput = {
    create?: XOR<ImageCreateWithoutProductPromotionsInput, ImageUncheckedCreateWithoutProductPromotionsInput> | ImageCreateWithoutProductPromotionsInput[] | ImageUncheckedCreateWithoutProductPromotionsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductPromotionsInput | ImageCreateOrConnectWithoutProductPromotionsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutPromotionInput = {
    create?: XOR<ProductCreateWithoutPromotionInput, ProductUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromotionInput
    connect?: ProductWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedManyWithoutProductPromotionsInput = {
    create?: XOR<ImageCreateWithoutProductPromotionsInput, ImageUncheckedCreateWithoutProductPromotionsInput> | ImageCreateWithoutProductPromotionsInput[] | ImageUncheckedCreateWithoutProductPromotionsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductPromotionsInput | ImageCreateOrConnectWithoutProductPromotionsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutProductPromotionsNestedInput = {
    create?: XOR<ImageCreateWithoutProductPromotionsInput, ImageUncheckedCreateWithoutProductPromotionsInput> | ImageCreateWithoutProductPromotionsInput[] | ImageUncheckedCreateWithoutProductPromotionsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductPromotionsInput | ImageCreateOrConnectWithoutProductPromotionsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductPromotionsInput | ImageUpsertWithWhereUniqueWithoutProductPromotionsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductPromotionsInput | ImageUpdateWithWhereUniqueWithoutProductPromotionsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductPromotionsInput | ImageUpdateManyWithWhereWithoutProductPromotionsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProductUpdateOneWithoutPromotionNestedInput = {
    create?: XOR<ProductCreateWithoutPromotionInput, ProductUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromotionInput
    upsert?: ProductUpsertWithoutPromotionInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPromotionInput, ProductUpdateWithoutPromotionInput>, ProductUncheckedUpdateWithoutPromotionInput>
  }

  export type ImageUncheckedUpdateManyWithoutProductPromotionsNestedInput = {
    create?: XOR<ImageCreateWithoutProductPromotionsInput, ImageUncheckedCreateWithoutProductPromotionsInput> | ImageCreateWithoutProductPromotionsInput[] | ImageUncheckedCreateWithoutProductPromotionsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductPromotionsInput | ImageCreateOrConnectWithoutProductPromotionsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductPromotionsInput | ImageUpsertWithWhereUniqueWithoutProductPromotionsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductPromotionsInput | ImageUpdateWithWhereUniqueWithoutProductPromotionsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductPromotionsInput | ImageUpdateManyWithWhereWithoutProductPromotionsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutFilesInput = {
    create?: XOR<ProductCreateWithoutFilesInput, ProductUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFilesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneWithoutFilesNestedInput = {
    create?: XOR<ProductCreateWithoutFilesInput, ProductUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFilesInput
    upsert?: ProductUpsertWithoutFilesInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFilesInput, ProductUpdateWithoutFilesInput>, ProductUncheckedUpdateWithoutFilesInput>
  }

  export type ImageMetaCreateNestedOneWithoutImageInput = {
    create?: XOR<ImageMetaCreateWithoutImageInput, ImageMetaUncheckedCreateWithoutImageInput>
    connectOrCreate?: ImageMetaCreateOrConnectWithoutImageInput
    connect?: ImageMetaWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCoverInput = {
    create?: XOR<ProductCreateWithoutCoverInput, ProductUncheckedCreateWithoutCoverInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCoverInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutTechnicalInput = {
    create?: XOR<ProductCreateWithoutTechnicalInput, ProductUncheckedCreateWithoutTechnicalInput> | ProductCreateWithoutTechnicalInput[] | ProductUncheckedCreateWithoutTechnicalInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTechnicalInput | ProductCreateOrConnectWithoutTechnicalInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductPromotionCreateNestedManyWithoutImagesInput = {
    create?: XOR<ProductPromotionCreateWithoutImagesInput, ProductPromotionUncheckedCreateWithoutImagesInput> | ProductPromotionCreateWithoutImagesInput[] | ProductPromotionUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutImagesInput | ProductPromotionCreateOrConnectWithoutImagesInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type GalleryCreateNestedManyWithoutImagesInput = {
    create?: XOR<GalleryCreateWithoutImagesInput, GalleryUncheckedCreateWithoutImagesInput> | GalleryCreateWithoutImagesInput[] | GalleryUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutImagesInput | GalleryCreateOrConnectWithoutImagesInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type SectionCreateNestedOneWithoutImagesInput = {
    create?: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutImagesInput
    connect?: SectionWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutCoverInput = {
    create?: XOR<CollectionCreateWithoutCoverInput, CollectionUncheckedCreateWithoutCoverInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutCoverInput
    connect?: CollectionWhereUniqueInput
  }

  export type MaterialCreateNestedManyWithoutImageInput = {
    create?: XOR<MaterialCreateWithoutImageInput, MaterialUncheckedCreateWithoutImageInput> | MaterialCreateWithoutImageInput[] | MaterialUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImageInput | MaterialCreateOrConnectWithoutImageInput[]
    createMany?: MaterialCreateManyImageInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedOneWithoutCoverInput = {
    create?: XOR<ProductCreateWithoutCoverInput, ProductUncheckedCreateWithoutCoverInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCoverInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutTechnicalInput = {
    create?: XOR<ProductCreateWithoutTechnicalInput, ProductUncheckedCreateWithoutTechnicalInput> | ProductCreateWithoutTechnicalInput[] | ProductUncheckedCreateWithoutTechnicalInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTechnicalInput | ProductCreateOrConnectWithoutTechnicalInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductPromotionUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<ProductPromotionCreateWithoutImagesInput, ProductPromotionUncheckedCreateWithoutImagesInput> | ProductPromotionCreateWithoutImagesInput[] | ProductPromotionUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutImagesInput | ProductPromotionCreateOrConnectWithoutImagesInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type GalleryUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<GalleryCreateWithoutImagesInput, GalleryUncheckedCreateWithoutImagesInput> | GalleryCreateWithoutImagesInput[] | GalleryUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutImagesInput | GalleryCreateOrConnectWithoutImagesInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedOneWithoutCoverInput = {
    create?: XOR<CollectionCreateWithoutCoverInput, CollectionUncheckedCreateWithoutCoverInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutCoverInput
    connect?: CollectionWhereUniqueInput
  }

  export type MaterialUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<MaterialCreateWithoutImageInput, MaterialUncheckedCreateWithoutImageInput> | MaterialCreateWithoutImageInput[] | MaterialUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImageInput | MaterialCreateOrConnectWithoutImageInput[]
    createMany?: MaterialCreateManyImageInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type ImageMetaUpdateOneRequiredWithoutImageNestedInput = {
    create?: XOR<ImageMetaCreateWithoutImageInput, ImageMetaUncheckedCreateWithoutImageInput>
    connectOrCreate?: ImageMetaCreateOrConnectWithoutImageInput
    upsert?: ImageMetaUpsertWithoutImageInput
    connect?: ImageMetaWhereUniqueInput
    update?: XOR<XOR<ImageMetaUpdateToOneWithWhereWithoutImageInput, ImageMetaUpdateWithoutImageInput>, ImageMetaUncheckedUpdateWithoutImageInput>
  }

  export type ProductUpdateOneWithoutCoverNestedInput = {
    create?: XOR<ProductCreateWithoutCoverInput, ProductUncheckedCreateWithoutCoverInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCoverInput
    upsert?: ProductUpsertWithoutCoverInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCoverInput, ProductUpdateWithoutCoverInput>, ProductUncheckedUpdateWithoutCoverInput>
  }

  export type ProductUpdateManyWithoutTechnicalNestedInput = {
    create?: XOR<ProductCreateWithoutTechnicalInput, ProductUncheckedCreateWithoutTechnicalInput> | ProductCreateWithoutTechnicalInput[] | ProductUncheckedCreateWithoutTechnicalInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTechnicalInput | ProductCreateOrConnectWithoutTechnicalInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTechnicalInput | ProductUpsertWithWhereUniqueWithoutTechnicalInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTechnicalInput | ProductUpdateWithWhereUniqueWithoutTechnicalInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTechnicalInput | ProductUpdateManyWithWhereWithoutTechnicalInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductPromotionUpdateManyWithoutImagesNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutImagesInput, ProductPromotionUncheckedCreateWithoutImagesInput> | ProductPromotionCreateWithoutImagesInput[] | ProductPromotionUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutImagesInput | ProductPromotionCreateOrConnectWithoutImagesInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutImagesInput | ProductPromotionUpsertWithWhereUniqueWithoutImagesInput[]
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutImagesInput | ProductPromotionUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutImagesInput | ProductPromotionUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type GalleryUpdateManyWithoutImagesNestedInput = {
    create?: XOR<GalleryCreateWithoutImagesInput, GalleryUncheckedCreateWithoutImagesInput> | GalleryCreateWithoutImagesInput[] | GalleryUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutImagesInput | GalleryCreateOrConnectWithoutImagesInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutImagesInput | GalleryUpsertWithWhereUniqueWithoutImagesInput[]
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutImagesInput | GalleryUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutImagesInput | GalleryUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type SectionUpdateOneWithoutImagesNestedInput = {
    create?: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutImagesInput
    upsert?: SectionUpsertWithoutImagesInput
    disconnect?: SectionWhereInput | boolean
    delete?: SectionWhereInput | boolean
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutImagesInput, SectionUpdateWithoutImagesInput>, SectionUncheckedUpdateWithoutImagesInput>
  }

  export type CollectionUpdateOneWithoutCoverNestedInput = {
    create?: XOR<CollectionCreateWithoutCoverInput, CollectionUncheckedCreateWithoutCoverInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutCoverInput
    upsert?: CollectionUpsertWithoutCoverInput
    disconnect?: CollectionWhereInput | boolean
    delete?: CollectionWhereInput | boolean
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutCoverInput, CollectionUpdateWithoutCoverInput>, CollectionUncheckedUpdateWithoutCoverInput>
  }

  export type MaterialUpdateManyWithoutImageNestedInput = {
    create?: XOR<MaterialCreateWithoutImageInput, MaterialUncheckedCreateWithoutImageInput> | MaterialCreateWithoutImageInput[] | MaterialUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImageInput | MaterialCreateOrConnectWithoutImageInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutImageInput | MaterialUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: MaterialCreateManyImageInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutImageInput | MaterialUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutImageInput | MaterialUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type ProductUncheckedUpdateOneWithoutCoverNestedInput = {
    create?: XOR<ProductCreateWithoutCoverInput, ProductUncheckedCreateWithoutCoverInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCoverInput
    upsert?: ProductUpsertWithoutCoverInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCoverInput, ProductUpdateWithoutCoverInput>, ProductUncheckedUpdateWithoutCoverInput>
  }

  export type ProductUncheckedUpdateManyWithoutTechnicalNestedInput = {
    create?: XOR<ProductCreateWithoutTechnicalInput, ProductUncheckedCreateWithoutTechnicalInput> | ProductCreateWithoutTechnicalInput[] | ProductUncheckedCreateWithoutTechnicalInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTechnicalInput | ProductCreateOrConnectWithoutTechnicalInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTechnicalInput | ProductUpsertWithWhereUniqueWithoutTechnicalInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTechnicalInput | ProductUpdateWithWhereUniqueWithoutTechnicalInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTechnicalInput | ProductUpdateManyWithWhereWithoutTechnicalInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutImagesInput, ProductPromotionUncheckedCreateWithoutImagesInput> | ProductPromotionCreateWithoutImagesInput[] | ProductPromotionUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutImagesInput | ProductPromotionCreateOrConnectWithoutImagesInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutImagesInput | ProductPromotionUpsertWithWhereUniqueWithoutImagesInput[]
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutImagesInput | ProductPromotionUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutImagesInput | ProductPromotionUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type GalleryUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<GalleryCreateWithoutImagesInput, GalleryUncheckedCreateWithoutImagesInput> | GalleryCreateWithoutImagesInput[] | GalleryUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutImagesInput | GalleryCreateOrConnectWithoutImagesInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutImagesInput | GalleryUpsertWithWhereUniqueWithoutImagesInput[]
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutImagesInput | GalleryUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutImagesInput | GalleryUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateOneWithoutCoverNestedInput = {
    create?: XOR<CollectionCreateWithoutCoverInput, CollectionUncheckedCreateWithoutCoverInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutCoverInput
    upsert?: CollectionUpsertWithoutCoverInput
    disconnect?: CollectionWhereInput | boolean
    delete?: CollectionWhereInput | boolean
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutCoverInput, CollectionUpdateWithoutCoverInput>, CollectionUncheckedUpdateWithoutCoverInput>
  }

  export type MaterialUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<MaterialCreateWithoutImageInput, MaterialUncheckedCreateWithoutImageInput> | MaterialCreateWithoutImageInput[] | MaterialUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImageInput | MaterialCreateOrConnectWithoutImageInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutImageInput | MaterialUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: MaterialCreateManyImageInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutImageInput | MaterialUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutImageInput | MaterialUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutImageMetaInput = {
    create?: XOR<ImageCreateWithoutImageMetaInput, ImageUncheckedCreateWithoutImageMetaInput> | ImageCreateWithoutImageMetaInput[] | ImageUncheckedCreateWithoutImageMetaInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutImageMetaInput | ImageCreateOrConnectWithoutImageMetaInput[]
    createMany?: ImageCreateManyImageMetaInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutImageMetaInput = {
    create?: XOR<ImageCreateWithoutImageMetaInput, ImageUncheckedCreateWithoutImageMetaInput> | ImageCreateWithoutImageMetaInput[] | ImageUncheckedCreateWithoutImageMetaInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutImageMetaInput | ImageCreateOrConnectWithoutImageMetaInput[]
    createMany?: ImageCreateManyImageMetaInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutImageMetaNestedInput = {
    create?: XOR<ImageCreateWithoutImageMetaInput, ImageUncheckedCreateWithoutImageMetaInput> | ImageCreateWithoutImageMetaInput[] | ImageUncheckedCreateWithoutImageMetaInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutImageMetaInput | ImageCreateOrConnectWithoutImageMetaInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutImageMetaInput | ImageUpsertWithWhereUniqueWithoutImageMetaInput[]
    createMany?: ImageCreateManyImageMetaInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutImageMetaInput | ImageUpdateWithWhereUniqueWithoutImageMetaInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutImageMetaInput | ImageUpdateManyWithWhereWithoutImageMetaInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutImageMetaNestedInput = {
    create?: XOR<ImageCreateWithoutImageMetaInput, ImageUncheckedCreateWithoutImageMetaInput> | ImageCreateWithoutImageMetaInput[] | ImageUncheckedCreateWithoutImageMetaInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutImageMetaInput | ImageCreateOrConnectWithoutImageMetaInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutImageMetaInput | ImageUpsertWithWhereUniqueWithoutImageMetaInput[]
    createMany?: ImageCreateManyImageMetaInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutImageMetaInput | ImageUpdateWithWhereUniqueWithoutImageMetaInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutImageMetaInput | ImageUpdateManyWithWhereWithoutImageMetaInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput> | ProductCreateWithoutCollectionInput[] | ProductUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCollectionInput | ProductCreateOrConnectWithoutCollectionInput[]
    createMany?: ProductCreateManyCollectionInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type MetaCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<MetaCreateWithoutCollectionsInput, MetaUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: MetaCreateOrConnectWithoutCollectionsInput
    connect?: MetaWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutCollectionCoverInput = {
    create?: XOR<ImageCreateWithoutCollectionCoverInput, ImageUncheckedCreateWithoutCollectionCoverInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCollectionCoverInput
    connect?: ImageWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutCollectionInput = {
    create?: XOR<SectionCreateWithoutCollectionInput, SectionUncheckedCreateWithoutCollectionInput> | SectionCreateWithoutCollectionInput[] | SectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCollectionInput | SectionCreateOrConnectWithoutCollectionInput[]
    createMany?: SectionCreateManyCollectionInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type ContentCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput> | ProductCreateWithoutCollectionInput[] | ProductUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCollectionInput | ProductCreateOrConnectWithoutCollectionInput[]
    createMany?: ProductCreateManyCollectionInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<SectionCreateWithoutCollectionInput, SectionUncheckedCreateWithoutCollectionInput> | SectionCreateWithoutCollectionInput[] | SectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCollectionInput | SectionCreateOrConnectWithoutCollectionInput[]
    createMany?: SectionCreateManyCollectionInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput> | ProductCreateWithoutCollectionInput[] | ProductUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCollectionInput | ProductCreateOrConnectWithoutCollectionInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCollectionInput | ProductUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ProductCreateManyCollectionInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCollectionInput | ProductUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCollectionInput | ProductUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type MetaUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<MetaCreateWithoutCollectionsInput, MetaUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: MetaCreateOrConnectWithoutCollectionsInput
    upsert?: MetaUpsertWithoutCollectionsInput
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutCollectionsInput, MetaUpdateWithoutCollectionsInput>, MetaUncheckedUpdateWithoutCollectionsInput>
  }

  export type ImageUpdateOneWithoutCollectionCoverNestedInput = {
    create?: XOR<ImageCreateWithoutCollectionCoverInput, ImageUncheckedCreateWithoutCollectionCoverInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCollectionCoverInput
    upsert?: ImageUpsertWithoutCollectionCoverInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutCollectionCoverInput, ImageUpdateWithoutCollectionCoverInput>, ImageUncheckedUpdateWithoutCollectionCoverInput>
  }

  export type SectionUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<SectionCreateWithoutCollectionInput, SectionUncheckedCreateWithoutCollectionInput> | SectionCreateWithoutCollectionInput[] | SectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCollectionInput | SectionCreateOrConnectWithoutCollectionInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCollectionInput | SectionUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: SectionCreateManyCollectionInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCollectionInput | SectionUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCollectionInput | SectionUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type ContentUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCollectionInput | ContentUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCollectionInput | ContentUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCollectionInput | ContentUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput> | ProductCreateWithoutCollectionInput[] | ProductUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCollectionInput | ProductCreateOrConnectWithoutCollectionInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCollectionInput | ProductUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ProductCreateManyCollectionInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCollectionInput | ProductUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCollectionInput | ProductUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<SectionCreateWithoutCollectionInput, SectionUncheckedCreateWithoutCollectionInput> | SectionCreateWithoutCollectionInput[] | SectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCollectionInput | SectionCreateOrConnectWithoutCollectionInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCollectionInput | SectionUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: SectionCreateManyCollectionInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCollectionInput | SectionUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCollectionInput | SectionUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCollectionInput | ContentUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCollectionInput | ContentUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCollectionInput | ContentUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type MetaCreateNestedOneWithoutPagesInput = {
    create?: XOR<MetaCreateWithoutPagesInput, MetaUncheckedCreateWithoutPagesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutPagesInput
    connect?: MetaWhereUniqueInput
  }

  export type ContentCreateNestedManyWithoutPageInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type MetaUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<MetaCreateWithoutPagesInput, MetaUncheckedCreateWithoutPagesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutPagesInput
    upsert?: MetaUpsertWithoutPagesInput
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutPagesInput, MetaUpdateWithoutPagesInput>, MetaUncheckedUpdateWithoutPagesInput>
  }

  export type ContentUpdateManyWithoutPageNestedInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutPageInput | ContentUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutPageInput | ContentUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutPageInput | ContentUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutPageInput | ContentUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutPageInput | ContentUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutPageInput | ContentUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutGalleryImagesInput = {
    create?: XOR<ImageCreateWithoutGalleryImagesInput, ImageUncheckedCreateWithoutGalleryImagesInput> | ImageCreateWithoutGalleryImagesInput[] | ImageUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGalleryImagesInput | ImageCreateOrConnectWithoutGalleryImagesInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutGalleryImagesInput = {
    create?: XOR<ImageCreateWithoutGalleryImagesInput, ImageUncheckedCreateWithoutGalleryImagesInput> | ImageCreateWithoutGalleryImagesInput[] | ImageUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGalleryImagesInput | ImageCreateOrConnectWithoutGalleryImagesInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutGalleryImagesNestedInput = {
    create?: XOR<ImageCreateWithoutGalleryImagesInput, ImageUncheckedCreateWithoutGalleryImagesInput> | ImageCreateWithoutGalleryImagesInput[] | ImageUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGalleryImagesInput | ImageCreateOrConnectWithoutGalleryImagesInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutGalleryImagesInput | ImageUpsertWithWhereUniqueWithoutGalleryImagesInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutGalleryImagesInput | ImageUpdateWithWhereUniqueWithoutGalleryImagesInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutGalleryImagesInput | ImageUpdateManyWithWhereWithoutGalleryImagesInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutGalleryImagesNestedInput = {
    create?: XOR<ImageCreateWithoutGalleryImagesInput, ImageUncheckedCreateWithoutGalleryImagesInput> | ImageCreateWithoutGalleryImagesInput[] | ImageUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGalleryImagesInput | ImageCreateOrConnectWithoutGalleryImagesInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutGalleryImagesInput | ImageUpsertWithWhereUniqueWithoutGalleryImagesInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutGalleryImagesInput | ImageUpdateWithWhereUniqueWithoutGalleryImagesInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutGalleryImagesInput | ImageUpdateManyWithWhereWithoutGalleryImagesInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutSectionInput = {
    create?: XOR<CollectionCreateWithoutSectionInput, CollectionUncheckedCreateWithoutSectionInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutSectionInput
    connect?: CollectionWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutSectionInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CollectionUpdateOneWithoutSectionNestedInput = {
    create?: XOR<CollectionCreateWithoutSectionInput, CollectionUncheckedCreateWithoutSectionInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutSectionInput
    upsert?: CollectionUpsertWithoutSectionInput
    disconnect?: CollectionWhereInput | boolean
    delete?: CollectionWhereInput | boolean
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutSectionInput, CollectionUpdateWithoutSectionInput>, CollectionUncheckedUpdateWithoutSectionInput>
  }

  export type ImageUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSectionInput | ImageUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSectionInput | ImageUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSectionInput | ImageUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSectionInput | ImageUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSectionInput | ImageUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSectionInput | ImageUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type MaterialCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MaterialCreateWithoutCategoryInput, MaterialUncheckedCreateWithoutCategoryInput> | MaterialCreateWithoutCategoryInput[] | MaterialUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutCategoryInput | MaterialCreateOrConnectWithoutCategoryInput[]
    createMany?: MaterialCreateManyCategoryInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MaterialCreateWithoutCategoryInput, MaterialUncheckedCreateWithoutCategoryInput> | MaterialCreateWithoutCategoryInput[] | MaterialUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutCategoryInput | MaterialCreateOrConnectWithoutCategoryInput[]
    createMany?: MaterialCreateManyCategoryInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type MaterialUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MaterialCreateWithoutCategoryInput, MaterialUncheckedCreateWithoutCategoryInput> | MaterialCreateWithoutCategoryInput[] | MaterialUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutCategoryInput | MaterialCreateOrConnectWithoutCategoryInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutCategoryInput | MaterialUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MaterialCreateManyCategoryInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutCategoryInput | MaterialUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutCategoryInput | MaterialUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MaterialCreateWithoutCategoryInput, MaterialUncheckedCreateWithoutCategoryInput> | MaterialCreateWithoutCategoryInput[] | MaterialUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutCategoryInput | MaterialCreateOrConnectWithoutCategoryInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutCategoryInput | MaterialUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MaterialCreateManyCategoryInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutCategoryInput | MaterialUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutCategoryInput | MaterialUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type MaterialCategoryCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<MaterialCategoryCreateWithoutMaterialsInput, MaterialCategoryUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: MaterialCategoryCreateOrConnectWithoutMaterialsInput
    connect?: MaterialCategoryWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutMaterialInput = {
    create?: XOR<ImageCreateWithoutMaterialInput, ImageUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialInput
    connect?: ImageWhereUniqueInput
  }

  export type MaterialCategoryUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<MaterialCategoryCreateWithoutMaterialsInput, MaterialCategoryUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: MaterialCategoryCreateOrConnectWithoutMaterialsInput
    upsert?: MaterialCategoryUpsertWithoutMaterialsInput
    connect?: MaterialCategoryWhereUniqueInput
    update?: XOR<XOR<MaterialCategoryUpdateToOneWithWhereWithoutMaterialsInput, MaterialCategoryUpdateWithoutMaterialsInput>, MaterialCategoryUncheckedUpdateWithoutMaterialsInput>
  }

  export type ImageUpdateOneWithoutMaterialNestedInput = {
    create?: XOR<ImageCreateWithoutMaterialInput, ImageUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialInput
    upsert?: ImageUpsertWithoutMaterialInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutMaterialInput, ImageUpdateWithoutMaterialInput>, ImageUncheckedUpdateWithoutMaterialInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MetaCreateWithoutCategoriesInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutMetaInput
    products?: ProductCreateNestedManyWithoutMetaInput
    collections?: CollectionCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutCategoriesInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutMetaInput
    products?: ProductUncheckedCreateNestedManyWithoutMetaInput
    collections?: CollectionUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutCategoriesInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutCategoriesInput, MetaUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutProductsInput
    cover?: ImageCreateNestedOneWithoutProductCoverInput
    promotion?: ProductPromotionCreateNestedManyWithoutProductInput
    technical?: ImageCreateNestedManyWithoutTechnicalProductsInput
    files?: FileCreateNestedManyWithoutProductInput
    meta?: MetaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    locale: string
    name: string
    slug: string
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: ProductPromotionUncheckedCreateNestedManyWithoutProductInput
    technical?: ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput
    files?: FileUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MetaUpsertWithoutCategoriesInput = {
    update: XOR<MetaUpdateWithoutCategoriesInput, MetaUncheckedUpdateWithoutCategoriesInput>
    create: XOR<MetaCreateWithoutCategoriesInput, MetaUncheckedCreateWithoutCategoriesInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutCategoriesInput, MetaUncheckedUpdateWithoutCategoriesInput>
  }

  export type MetaUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutMetaNestedInput
    products?: ProductUpdateManyWithoutMetaNestedInput
    collections?: CollectionUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutMetaNestedInput
    products?: ProductUncheckedUpdateManyWithoutMetaNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    locale?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    collectionId?: StringNullableFilter<"Product"> | string | null
    type?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    imageId?: StringNullableFilter<"Product"> | string | null
    top?: BoolFilter<"Product"> | boolean
    showroom?: BoolFilter<"Product"> | boolean
    price?: FloatNullableFilter<"Product"> | number | null
    metaId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMetaInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMetaInput, CategoryUncheckedCreateWithoutMetaInput>
  }

  export type CategoryCreateManyMetaInputEnvelope = {
    data: CategoryCreateManyMetaInput | CategoryCreateManyMetaInput[]
    skipDuplicates?: boolean
  }

  export type PageCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutMetaInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutMetaInput, PageUncheckedCreateWithoutMetaInput>
  }

  export type PageCreateManyMetaInputEnvelope = {
    data: PageCreateManyMetaInput | PageCreateManyMetaInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    collection?: CollectionCreateNestedOneWithoutProductsInput
    cover?: ImageCreateNestedOneWithoutProductCoverInput
    promotion?: ProductPromotionCreateNestedManyWithoutProductInput
    technical?: ImageCreateNestedManyWithoutTechnicalProductsInput
    files?: FileCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: ProductPromotionUncheckedCreateNestedManyWithoutProductInput
    technical?: ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput
    files?: FileUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMetaInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMetaInput, ProductUncheckedCreateWithoutMetaInput>
  }

  export type ProductCreateManyMetaInputEnvelope = {
    data: ProductCreateManyMetaInput | ProductCreateManyMetaInput[]
    skipDuplicates?: boolean
  }

  export type CollectionCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCollectionInput
    cover?: ImageCreateNestedOneWithoutCollectionCoverInput
    section?: SectionCreateNestedManyWithoutCollectionInput
    contents?: ContentCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    coverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCollectionInput
    section?: SectionUncheckedCreateNestedManyWithoutCollectionInput
    contents?: ContentUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutMetaInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutMetaInput, CollectionUncheckedCreateWithoutMetaInput>
  }

  export type CollectionCreateManyMetaInputEnvelope = {
    data: CollectionCreateManyMetaInput | CollectionCreateManyMetaInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutMetaInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutMetaInput, CategoryUncheckedUpdateWithoutMetaInput>
    create: XOR<CategoryCreateWithoutMetaInput, CategoryUncheckedCreateWithoutMetaInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutMetaInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutMetaInput, CategoryUncheckedUpdateWithoutMetaInput>
  }

  export type CategoryUpdateManyWithWhereWithoutMetaInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutMetaInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    locale?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    metaId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type PageUpsertWithWhereUniqueWithoutMetaInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutMetaInput, PageUncheckedUpdateWithoutMetaInput>
    create: XOR<PageCreateWithoutMetaInput, PageUncheckedCreateWithoutMetaInput>
  }

  export type PageUpdateWithWhereUniqueWithoutMetaInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutMetaInput, PageUncheckedUpdateWithoutMetaInput>
  }

  export type PageUpdateManyWithWhereWithoutMetaInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutMetaInput>
  }

  export type PageScalarWhereInput = {
    AND?: PageScalarWhereInput | PageScalarWhereInput[]
    OR?: PageScalarWhereInput[]
    NOT?: PageScalarWhereInput | PageScalarWhereInput[]
    id?: StringFilter<"Page"> | string
    locale?: StringFilter<"Page"> | string
    name?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    title?: StringNullableFilter<"Page"> | string | null
    subtitle?: StringNullableFilter<"Page"> | string | null
    metaId?: StringFilter<"Page"> | string
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutMetaInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutMetaInput, ProductUncheckedUpdateWithoutMetaInput>
    create: XOR<ProductCreateWithoutMetaInput, ProductUncheckedCreateWithoutMetaInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutMetaInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutMetaInput, ProductUncheckedUpdateWithoutMetaInput>
  }

  export type ProductUpdateManyWithWhereWithoutMetaInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutMetaInput>
  }

  export type CollectionUpsertWithWhereUniqueWithoutMetaInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutMetaInput, CollectionUncheckedUpdateWithoutMetaInput>
    create: XOR<CollectionCreateWithoutMetaInput, CollectionUncheckedCreateWithoutMetaInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutMetaInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutMetaInput, CollectionUncheckedUpdateWithoutMetaInput>
  }

  export type CollectionUpdateManyWithWhereWithoutMetaInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutMetaInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    locale?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    slug?: StringFilter<"Collection"> | string
    metaId?: StringFilter<"Collection"> | string
    coverId?: StringNullableFilter<"Collection"> | string | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
  }

  export type PageCreateWithoutContentInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutContentInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    metaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageCreateOrConnectWithoutContentInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutContentInput, PageUncheckedCreateWithoutContentInput>
  }

  export type CollectionCreateWithoutContentsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCollectionInput
    meta: MetaCreateNestedOneWithoutCollectionsInput
    cover?: ImageCreateNestedOneWithoutCollectionCoverInput
    section?: SectionCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutContentsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    metaId: string
    coverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCollectionInput
    section?: SectionUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutContentsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
  }

  export type PageUpsertWithoutContentInput = {
    update: XOR<PageUpdateWithoutContentInput, PageUncheckedUpdateWithoutContentInput>
    create: XOR<PageCreateWithoutContentInput, PageUncheckedCreateWithoutContentInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutContentInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutContentInput, PageUncheckedUpdateWithoutContentInput>
  }

  export type PageUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpsertWithoutContentsInput = {
    update: XOR<CollectionUpdateWithoutContentsInput, CollectionUncheckedUpdateWithoutContentsInput>
    create: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutContentsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutContentsInput, CollectionUncheckedUpdateWithoutContentsInput>
  }

  export type CollectionUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCollectionNestedInput
    meta?: MetaUpdateOneRequiredWithoutCollectionsNestedInput
    cover?: ImageUpdateOneWithoutCollectionCoverNestedInput
    section?: SectionUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCollectionNestedInput
    section?: SectionUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    metaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CollectionCreateWithoutProductsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutCollectionsInput
    cover?: ImageCreateNestedOneWithoutCollectionCoverInput
    section?: SectionCreateNestedManyWithoutCollectionInput
    contents?: ContentCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutProductsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    metaId: string
    coverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: SectionUncheckedCreateNestedManyWithoutCollectionInput
    contents?: ContentUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutProductsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
  }

  export type ImageCreateWithoutProductCoverInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutProductCoverInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutProductCoverInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductCoverInput, ImageUncheckedCreateWithoutProductCoverInput>
  }

  export type ProductPromotionCreateWithoutProductInput = {
    id?: string
    layout: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutProductPromotionsInput
  }

  export type ProductPromotionUncheckedCreateWithoutProductInput = {
    id?: string
    layout: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductPromotionsInput
  }

  export type ProductPromotionCreateOrConnectWithoutProductInput = {
    where: ProductPromotionWhereUniqueInput
    create: XOR<ProductPromotionCreateWithoutProductInput, ProductPromotionUncheckedCreateWithoutProductInput>
  }

  export type ProductPromotionCreateManyProductInputEnvelope = {
    data: ProductPromotionCreateManyProductInput | ProductPromotionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutTechnicalProductsInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutTechnicalProductsInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutTechnicalProductsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutTechnicalProductsInput, ImageUncheckedCreateWithoutTechnicalProductsInput>
  }

  export type FileCreateWithoutProductInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUncheckedCreateWithoutProductInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutProductInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput>
  }

  export type FileCreateManyProductInputEnvelope = {
    data: FileCreateManyProductInput | FileCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type MetaCreateWithoutProductsInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutMetaInput
    pages?: PageCreateNestedManyWithoutMetaInput
    collections?: CollectionCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutProductsInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutMetaInput
    pages?: PageUncheckedCreateNestedManyWithoutMetaInput
    collections?: CollectionUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutProductsInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutProductsInput, MetaUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpsertWithoutProductsInput = {
    update: XOR<CollectionUpdateWithoutProductsInput, CollectionUncheckedUpdateWithoutProductsInput>
    create: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutProductsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutProductsInput, CollectionUncheckedUpdateWithoutProductsInput>
  }

  export type CollectionUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutCollectionsNestedInput
    cover?: ImageUpdateOneWithoutCollectionCoverNestedInput
    section?: SectionUpdateManyWithoutCollectionNestedInput
    contents?: ContentUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUncheckedUpdateManyWithoutCollectionNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type ImageUpsertWithoutProductCoverInput = {
    update: XOR<ImageUpdateWithoutProductCoverInput, ImageUncheckedUpdateWithoutProductCoverInput>
    create: XOR<ImageCreateWithoutProductCoverInput, ImageUncheckedCreateWithoutProductCoverInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutProductCoverInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutProductCoverInput, ImageUncheckedUpdateWithoutProductCoverInput>
  }

  export type ImageUpdateWithoutProductCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutProductCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ProductPromotionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPromotionWhereUniqueInput
    update: XOR<ProductPromotionUpdateWithoutProductInput, ProductPromotionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPromotionCreateWithoutProductInput, ProductPromotionUncheckedCreateWithoutProductInput>
  }

  export type ProductPromotionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPromotionWhereUniqueInput
    data: XOR<ProductPromotionUpdateWithoutProductInput, ProductPromotionUncheckedUpdateWithoutProductInput>
  }

  export type ProductPromotionUpdateManyWithWhereWithoutProductInput = {
    where: ProductPromotionScalarWhereInput
    data: XOR<ProductPromotionUpdateManyMutationInput, ProductPromotionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPromotionScalarWhereInput = {
    AND?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
    OR?: ProductPromotionScalarWhereInput[]
    NOT?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
    id?: StringFilter<"ProductPromotion"> | string
    layout?: StringFilter<"ProductPromotion"> | string
    productId?: StringNullableFilter<"ProductPromotion"> | string | null
    createdAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPromotion"> | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutTechnicalProductsInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutTechnicalProductsInput, ImageUncheckedUpdateWithoutTechnicalProductsInput>
    create: XOR<ImageCreateWithoutTechnicalProductsInput, ImageUncheckedCreateWithoutTechnicalProductsInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutTechnicalProductsInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutTechnicalProductsInput, ImageUncheckedUpdateWithoutTechnicalProductsInput>
  }

  export type ImageUpdateManyWithWhereWithoutTechnicalProductsInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutTechnicalProductsInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    path?: StringFilter<"Image"> | string
    imageMetaId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    sectionId?: StringNullableFilter<"Image"> | string | null
    collectionId?: StringNullableFilter<"Image"> | string | null
  }

  export type FileUpsertWithWhereUniqueWithoutProductInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutProductInput, FileUncheckedUpdateWithoutProductInput>
    create: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput>
  }

  export type FileUpdateWithWhereUniqueWithoutProductInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutProductInput, FileUncheckedUpdateWithoutProductInput>
  }

  export type FileUpdateManyWithWhereWithoutProductInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutProductInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    productId?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
  }

  export type MetaUpsertWithoutProductsInput = {
    update: XOR<MetaUpdateWithoutProductsInput, MetaUncheckedUpdateWithoutProductsInput>
    create: XOR<MetaCreateWithoutProductsInput, MetaUncheckedCreateWithoutProductsInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutProductsInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutProductsInput, MetaUncheckedUpdateWithoutProductsInput>
  }

  export type MetaUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutMetaNestedInput
    pages?: PageUpdateManyWithoutMetaNestedInput
    collections?: CollectionUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutMetaNestedInput
    pages?: PageUncheckedUpdateManyWithoutMetaNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type ImageCreateWithoutProductPromotionsInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutProductPromotionsInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutProductPromotionsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductPromotionsInput, ImageUncheckedCreateWithoutProductPromotionsInput>
  }

  export type ProductCreateWithoutPromotionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    collection?: CollectionCreateNestedOneWithoutProductsInput
    cover?: ImageCreateNestedOneWithoutProductCoverInput
    technical?: ImageCreateNestedManyWithoutTechnicalProductsInput
    files?: FileCreateNestedManyWithoutProductInput
    meta?: MetaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutPromotionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technical?: ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput
    files?: FileUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPromotionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPromotionInput, ProductUncheckedCreateWithoutPromotionInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutProductPromotionsInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductPromotionsInput, ImageUncheckedUpdateWithoutProductPromotionsInput>
    create: XOR<ImageCreateWithoutProductPromotionsInput, ImageUncheckedCreateWithoutProductPromotionsInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductPromotionsInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductPromotionsInput, ImageUncheckedUpdateWithoutProductPromotionsInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductPromotionsInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProductPromotionsInput>
  }

  export type ProductUpsertWithoutPromotionInput = {
    update: XOR<ProductUpdateWithoutPromotionInput, ProductUncheckedUpdateWithoutPromotionInput>
    create: XOR<ProductCreateWithoutPromotionInput, ProductUncheckedCreateWithoutPromotionInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPromotionInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPromotionInput, ProductUncheckedUpdateWithoutPromotionInput>
  }

  export type ProductUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    collection?: CollectionUpdateOneWithoutProductsNestedInput
    cover?: ImageUpdateOneWithoutProductCoverNestedInput
    technical?: ImageUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUpdateManyWithoutProductNestedInput
    meta?: MetaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technical?: ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutFilesInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    collection?: CollectionCreateNestedOneWithoutProductsInput
    cover?: ImageCreateNestedOneWithoutProductCoverInput
    promotion?: ProductPromotionCreateNestedManyWithoutProductInput
    technical?: ImageCreateNestedManyWithoutTechnicalProductsInput
    meta?: MetaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutFilesInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: ProductPromotionUncheckedCreateNestedManyWithoutProductInput
    technical?: ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput
  }

  export type ProductCreateOrConnectWithoutFilesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFilesInput, ProductUncheckedCreateWithoutFilesInput>
  }

  export type ProductUpsertWithoutFilesInput = {
    update: XOR<ProductUpdateWithoutFilesInput, ProductUncheckedUpdateWithoutFilesInput>
    create: XOR<ProductCreateWithoutFilesInput, ProductUncheckedCreateWithoutFilesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFilesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFilesInput, ProductUncheckedUpdateWithoutFilesInput>
  }

  export type ProductUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    collection?: CollectionUpdateOneWithoutProductsNestedInput
    cover?: ImageUpdateOneWithoutProductCoverNestedInput
    promotion?: ProductPromotionUpdateManyWithoutProductNestedInput
    technical?: ImageUpdateManyWithoutTechnicalProductsNestedInput
    meta?: MetaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: ProductPromotionUncheckedUpdateManyWithoutProductNestedInput
    technical?: ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput
  }

  export type ImageMetaCreateWithoutImageInput = {
    id?: string
    locale: string
    title?: string | null
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageMetaUncheckedCreateWithoutImageInput = {
    id?: string
    locale: string
    title?: string | null
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageMetaCreateOrConnectWithoutImageInput = {
    where: ImageMetaWhereUniqueInput
    create: XOR<ImageMetaCreateWithoutImageInput, ImageMetaUncheckedCreateWithoutImageInput>
  }

  export type ProductCreateWithoutCoverInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    collection?: CollectionCreateNestedOneWithoutProductsInput
    promotion?: ProductPromotionCreateNestedManyWithoutProductInput
    technical?: ImageCreateNestedManyWithoutTechnicalProductsInput
    files?: FileCreateNestedManyWithoutProductInput
    meta?: MetaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCoverInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: ProductPromotionUncheckedCreateNestedManyWithoutProductInput
    technical?: ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput
    files?: FileUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCoverInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCoverInput, ProductUncheckedCreateWithoutCoverInput>
  }

  export type ProductCreateWithoutTechnicalInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    collection?: CollectionCreateNestedOneWithoutProductsInput
    cover?: ImageCreateNestedOneWithoutProductCoverInput
    promotion?: ProductPromotionCreateNestedManyWithoutProductInput
    files?: FileCreateNestedManyWithoutProductInput
    meta?: MetaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutTechnicalInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: ProductPromotionUncheckedCreateNestedManyWithoutProductInput
    files?: FileUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTechnicalInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTechnicalInput, ProductUncheckedCreateWithoutTechnicalInput>
  }

  export type ProductPromotionCreateWithoutImagesInput = {
    id?: string
    layout: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedOneWithoutPromotionInput
  }

  export type ProductPromotionUncheckedCreateWithoutImagesInput = {
    id?: string
    layout: string
    productId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPromotionCreateOrConnectWithoutImagesInput = {
    where: ProductPromotionWhereUniqueInput
    create: XOR<ProductPromotionCreateWithoutImagesInput, ProductPromotionUncheckedCreateWithoutImagesInput>
  }

  export type GalleryCreateWithoutImagesInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryUncheckedCreateWithoutImagesInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryCreateOrConnectWithoutImagesInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutImagesInput, GalleryUncheckedCreateWithoutImagesInput>
  }

  export type SectionCreateWithoutImagesInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutImagesInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    collectionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionCreateOrConnectWithoutImagesInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
  }

  export type CollectionCreateWithoutCoverInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCollectionInput
    meta: MetaCreateNestedOneWithoutCollectionsInput
    section?: SectionCreateNestedManyWithoutCollectionInput
    contents?: ContentCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutCoverInput = {
    id?: string
    locale: string
    name: string
    slug: string
    metaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCollectionInput
    section?: SectionUncheckedCreateNestedManyWithoutCollectionInput
    contents?: ContentUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutCoverInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutCoverInput, CollectionUncheckedCreateWithoutCoverInput>
  }

  export type MaterialCreateWithoutImageInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MaterialCategoryCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutImageInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutImageInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutImageInput, MaterialUncheckedCreateWithoutImageInput>
  }

  export type MaterialCreateManyImageInputEnvelope = {
    data: MaterialCreateManyImageInput | MaterialCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type ImageMetaUpsertWithoutImageInput = {
    update: XOR<ImageMetaUpdateWithoutImageInput, ImageMetaUncheckedUpdateWithoutImageInput>
    create: XOR<ImageMetaCreateWithoutImageInput, ImageMetaUncheckedCreateWithoutImageInput>
    where?: ImageMetaWhereInput
  }

  export type ImageMetaUpdateToOneWithWhereWithoutImageInput = {
    where?: ImageMetaWhereInput
    data: XOR<ImageMetaUpdateWithoutImageInput, ImageMetaUncheckedUpdateWithoutImageInput>
  }

  export type ImageMetaUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageMetaUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutCoverInput = {
    update: XOR<ProductUpdateWithoutCoverInput, ProductUncheckedUpdateWithoutCoverInput>
    create: XOR<ProductCreateWithoutCoverInput, ProductUncheckedCreateWithoutCoverInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCoverInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCoverInput, ProductUncheckedUpdateWithoutCoverInput>
  }

  export type ProductUpdateWithoutCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    collection?: CollectionUpdateOneWithoutProductsNestedInput
    promotion?: ProductPromotionUpdateManyWithoutProductNestedInput
    technical?: ImageUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUpdateManyWithoutProductNestedInput
    meta?: MetaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: ProductPromotionUncheckedUpdateManyWithoutProductNestedInput
    technical?: ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutTechnicalInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutTechnicalInput, ProductUncheckedUpdateWithoutTechnicalInput>
    create: XOR<ProductCreateWithoutTechnicalInput, ProductUncheckedCreateWithoutTechnicalInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutTechnicalInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutTechnicalInput, ProductUncheckedUpdateWithoutTechnicalInput>
  }

  export type ProductUpdateManyWithWhereWithoutTechnicalInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutTechnicalInput>
  }

  export type ProductPromotionUpsertWithWhereUniqueWithoutImagesInput = {
    where: ProductPromotionWhereUniqueInput
    update: XOR<ProductPromotionUpdateWithoutImagesInput, ProductPromotionUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductPromotionCreateWithoutImagesInput, ProductPromotionUncheckedCreateWithoutImagesInput>
  }

  export type ProductPromotionUpdateWithWhereUniqueWithoutImagesInput = {
    where: ProductPromotionWhereUniqueInput
    data: XOR<ProductPromotionUpdateWithoutImagesInput, ProductPromotionUncheckedUpdateWithoutImagesInput>
  }

  export type ProductPromotionUpdateManyWithWhereWithoutImagesInput = {
    where: ProductPromotionScalarWhereInput
    data: XOR<ProductPromotionUpdateManyMutationInput, ProductPromotionUncheckedUpdateManyWithoutImagesInput>
  }

  export type GalleryUpsertWithWhereUniqueWithoutImagesInput = {
    where: GalleryWhereUniqueInput
    update: XOR<GalleryUpdateWithoutImagesInput, GalleryUncheckedUpdateWithoutImagesInput>
    create: XOR<GalleryCreateWithoutImagesInput, GalleryUncheckedCreateWithoutImagesInput>
  }

  export type GalleryUpdateWithWhereUniqueWithoutImagesInput = {
    where: GalleryWhereUniqueInput
    data: XOR<GalleryUpdateWithoutImagesInput, GalleryUncheckedUpdateWithoutImagesInput>
  }

  export type GalleryUpdateManyWithWhereWithoutImagesInput = {
    where: GalleryScalarWhereInput
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyWithoutImagesInput>
  }

  export type GalleryScalarWhereInput = {
    AND?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    OR?: GalleryScalarWhereInput[]
    NOT?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    id?: StringFilter<"Gallery"> | string
    locale?: StringFilter<"Gallery"> | string
    name?: StringFilter<"Gallery"> | string
    slug?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeFilter<"Gallery"> | Date | string
  }

  export type SectionUpsertWithoutImagesInput = {
    update: XOR<SectionUpdateWithoutImagesInput, SectionUncheckedUpdateWithoutImagesInput>
    create: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutImagesInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutImagesInput, SectionUncheckedUpdateWithoutImagesInput>
  }

  export type SectionUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpsertWithoutCoverInput = {
    update: XOR<CollectionUpdateWithoutCoverInput, CollectionUncheckedUpdateWithoutCoverInput>
    create: XOR<CollectionCreateWithoutCoverInput, CollectionUncheckedCreateWithoutCoverInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutCoverInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutCoverInput, CollectionUncheckedUpdateWithoutCoverInput>
  }

  export type CollectionUpdateWithoutCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCollectionNestedInput
    meta?: MetaUpdateOneRequiredWithoutCollectionsNestedInput
    section?: SectionUpdateManyWithoutCollectionNestedInput
    contents?: ContentUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCollectionNestedInput
    section?: SectionUncheckedUpdateManyWithoutCollectionNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type MaterialUpsertWithWhereUniqueWithoutImageInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutImageInput, MaterialUncheckedUpdateWithoutImageInput>
    create: XOR<MaterialCreateWithoutImageInput, MaterialUncheckedCreateWithoutImageInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutImageInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutImageInput, MaterialUncheckedUpdateWithoutImageInput>
  }

  export type MaterialUpdateManyWithWhereWithoutImageInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutImageInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: StringFilter<"Material"> | string
    locale?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    slug?: StringFilter<"Material"> | string
    categoryId?: StringFilter<"Material"> | string
    imageId?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
  }

  export type ImageCreateWithoutImageMetaInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutImageMetaInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutImageMetaInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutImageMetaInput, ImageUncheckedCreateWithoutImageMetaInput>
  }

  export type ImageCreateManyImageMetaInputEnvelope = {
    data: ImageCreateManyImageMetaInput | ImageCreateManyImageMetaInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutImageMetaInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutImageMetaInput, ImageUncheckedUpdateWithoutImageMetaInput>
    create: XOR<ImageCreateWithoutImageMetaInput, ImageUncheckedCreateWithoutImageMetaInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutImageMetaInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutImageMetaInput, ImageUncheckedUpdateWithoutImageMetaInput>
  }

  export type ImageUpdateManyWithWhereWithoutImageMetaInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutImageMetaInput>
  }

  export type ProductCreateWithoutCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    type?: string | null
    description?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    cover?: ImageCreateNestedOneWithoutProductCoverInput
    promotion?: ProductPromotionCreateNestedManyWithoutProductInput
    technical?: ImageCreateNestedManyWithoutTechnicalProductsInput
    files?: FileCreateNestedManyWithoutProductInput
    meta?: MetaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: ProductPromotionUncheckedCreateNestedManyWithoutProductInput
    technical?: ImageUncheckedCreateNestedManyWithoutTechnicalProductsInput
    files?: FileUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCollectionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput>
  }

  export type ProductCreateManyCollectionInputEnvelope = {
    data: ProductCreateManyCollectionInput | ProductCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type MetaCreateWithoutCollectionsInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutMetaInput
    pages?: PageCreateNestedManyWithoutMetaInput
    products?: ProductCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutCollectionsInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutMetaInput
    pages?: PageUncheckedCreateNestedManyWithoutMetaInput
    products?: ProductUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutCollectionsInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutCollectionsInput, MetaUncheckedCreateWithoutCollectionsInput>
  }

  export type ImageCreateWithoutCollectionCoverInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutCollectionCoverInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutCollectionCoverInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCollectionCoverInput, ImageUncheckedCreateWithoutCollectionCoverInput>
  }

  export type SectionCreateWithoutCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCollectionInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCollectionInput, SectionUncheckedCreateWithoutCollectionInput>
  }

  export type SectionCreateManyCollectionInputEnvelope = {
    data: SectionCreateManyCollectionInput | SectionCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type ContentCreateWithoutCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    page?: PageCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    pageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentCreateOrConnectWithoutCollectionInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput>
  }

  export type ContentCreateManyCollectionInputEnvelope = {
    data: ContentCreateManyCollectionInput | ContentCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCollectionInput, ProductUncheckedUpdateWithoutCollectionInput>
    create: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCollectionInput, ProductUncheckedUpdateWithoutCollectionInput>
  }

  export type ProductUpdateManyWithWhereWithoutCollectionInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCollectionInput>
  }

  export type MetaUpsertWithoutCollectionsInput = {
    update: XOR<MetaUpdateWithoutCollectionsInput, MetaUncheckedUpdateWithoutCollectionsInput>
    create: XOR<MetaCreateWithoutCollectionsInput, MetaUncheckedCreateWithoutCollectionsInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutCollectionsInput, MetaUncheckedUpdateWithoutCollectionsInput>
  }

  export type MetaUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutMetaNestedInput
    pages?: PageUpdateManyWithoutMetaNestedInput
    products?: ProductUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutMetaNestedInput
    pages?: PageUncheckedUpdateManyWithoutMetaNestedInput
    products?: ProductUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type ImageUpsertWithoutCollectionCoverInput = {
    update: XOR<ImageUpdateWithoutCollectionCoverInput, ImageUncheckedUpdateWithoutCollectionCoverInput>
    create: XOR<ImageCreateWithoutCollectionCoverInput, ImageUncheckedCreateWithoutCollectionCoverInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutCollectionCoverInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutCollectionCoverInput, ImageUncheckedUpdateWithoutCollectionCoverInput>
  }

  export type ImageUpdateWithoutCollectionCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutCollectionCoverInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type SectionUpsertWithWhereUniqueWithoutCollectionInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutCollectionInput, SectionUncheckedUpdateWithoutCollectionInput>
    create: XOR<SectionCreateWithoutCollectionInput, SectionUncheckedCreateWithoutCollectionInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutCollectionInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutCollectionInput, SectionUncheckedUpdateWithoutCollectionInput>
  }

  export type SectionUpdateManyWithWhereWithoutCollectionInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutCollectionInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    locale?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    slug?: StringFilter<"Section"> | string
    layout?: StringNullableFilter<"Section"> | string | null
    title?: StringNullableFilter<"Section"> | string | null
    content?: StringNullableFilter<"Section"> | string | null
    collectionId?: StringNullableFilter<"Section"> | string | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
  }

  export type ContentUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutCollectionInput, ContentUncheckedUpdateWithoutCollectionInput>
    create: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutCollectionInput, ContentUncheckedUpdateWithoutCollectionInput>
  }

  export type ContentUpdateManyWithWhereWithoutCollectionInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutCollectionInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    locale?: StringFilter<"Content"> | string
    name?: StringFilter<"Content"> | string
    slug?: StringFilter<"Content"> | string
    title?: StringNullableFilter<"Content"> | string | null
    content?: StringNullableFilter<"Content"> | string | null
    pageId?: StringNullableFilter<"Content"> | string | null
    collectionId?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
  }

  export type MetaCreateWithoutPagesInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutMetaInput
    products?: ProductCreateNestedManyWithoutMetaInput
    collections?: CollectionCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutPagesInput = {
    id?: string
    locale: string
    title?: string | null
    description?: string | null
    keywords?: string | null
    robots?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutMetaInput
    products?: ProductUncheckedCreateNestedManyWithoutMetaInput
    collections?: CollectionUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutPagesInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutPagesInput, MetaUncheckedCreateWithoutPagesInput>
  }

  export type ContentCreateWithoutPageInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutContentsInput
  }

  export type ContentUncheckedCreateWithoutPageInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    collectionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentCreateOrConnectWithoutPageInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput>
  }

  export type ContentCreateManyPageInputEnvelope = {
    data: ContentCreateManyPageInput | ContentCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type MetaUpsertWithoutPagesInput = {
    update: XOR<MetaUpdateWithoutPagesInput, MetaUncheckedUpdateWithoutPagesInput>
    create: XOR<MetaCreateWithoutPagesInput, MetaUncheckedCreateWithoutPagesInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutPagesInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutPagesInput, MetaUncheckedUpdateWithoutPagesInput>
  }

  export type MetaUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutMetaNestedInput
    products?: ProductUpdateManyWithoutMetaNestedInput
    collections?: CollectionUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutMetaNestedInput
    products?: ProductUncheckedUpdateManyWithoutMetaNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type ContentUpsertWithWhereUniqueWithoutPageInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutPageInput, ContentUncheckedUpdateWithoutPageInput>
    create: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutPageInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutPageInput, ContentUncheckedUpdateWithoutPageInput>
  }

  export type ContentUpdateManyWithWhereWithoutPageInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutPageInput>
  }

  export type ImageCreateWithoutGalleryImagesInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutGalleryImagesInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutGalleryImagesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutGalleryImagesInput, ImageUncheckedCreateWithoutGalleryImagesInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutGalleryImagesInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutGalleryImagesInput, ImageUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<ImageCreateWithoutGalleryImagesInput, ImageUncheckedCreateWithoutGalleryImagesInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutGalleryImagesInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutGalleryImagesInput, ImageUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type ImageUpdateManyWithWhereWithoutGalleryImagesInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutGalleryImagesInput>
  }

  export type CollectionCreateWithoutSectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCollectionInput
    meta: MetaCreateNestedOneWithoutCollectionsInput
    cover?: ImageCreateNestedOneWithoutCollectionCoverInput
    contents?: ContentCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutSectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    metaId: string
    coverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCollectionInput
    contents?: ContentUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutSectionInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutSectionInput, CollectionUncheckedCreateWithoutSectionInput>
  }

  export type ImageCreateWithoutSectionInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
    Material?: MaterialCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutSectionInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
    Material?: MaterialUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutSectionInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput>
  }

  export type ImageCreateManySectionInputEnvelope = {
    data: ImageCreateManySectionInput | ImageCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type CollectionUpsertWithoutSectionInput = {
    update: XOR<CollectionUpdateWithoutSectionInput, CollectionUncheckedUpdateWithoutSectionInput>
    create: XOR<CollectionCreateWithoutSectionInput, CollectionUncheckedCreateWithoutSectionInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutSectionInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutSectionInput, CollectionUncheckedUpdateWithoutSectionInput>
  }

  export type CollectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCollectionNestedInput
    meta?: MetaUpdateOneRequiredWithoutCollectionsNestedInput
    cover?: ImageUpdateOneWithoutCollectionCoverNestedInput
    contents?: ContentUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCollectionNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutSectionInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutSectionInput, ImageUncheckedUpdateWithoutSectionInput>
    create: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutSectionInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutSectionInput, ImageUncheckedUpdateWithoutSectionInput>
  }

  export type ImageUpdateManyWithWhereWithoutSectionInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutSectionInput>
  }

  export type MaterialCreateWithoutCategoryInput = {
    id?: string
    locale: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageCreateNestedOneWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutCategoryInput = {
    id?: string
    locale: string
    name: string
    slug: string
    imageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutCategoryInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutCategoryInput, MaterialUncheckedCreateWithoutCategoryInput>
  }

  export type MaterialCreateManyCategoryInputEnvelope = {
    data: MaterialCreateManyCategoryInput | MaterialCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutCategoryInput, MaterialUncheckedUpdateWithoutCategoryInput>
    create: XOR<MaterialCreateWithoutCategoryInput, MaterialUncheckedCreateWithoutCategoryInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutCategoryInput, MaterialUncheckedUpdateWithoutCategoryInput>
  }

  export type MaterialUpdateManyWithWhereWithoutCategoryInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MaterialCategoryCreateWithoutMaterialsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCategoryUncheckedCreateWithoutMaterialsInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCategoryCreateOrConnectWithoutMaterialsInput = {
    where: MaterialCategoryWhereUniqueInput
    create: XOR<MaterialCategoryCreateWithoutMaterialsInput, MaterialCategoryUncheckedCreateWithoutMaterialsInput>
  }

  export type ImageCreateWithoutMaterialInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
    imageMeta: ImageMetaCreateNestedOneWithoutImageInput
    ProductCover?: ProductCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryCreateNestedManyWithoutImagesInput
    section?: SectionCreateNestedOneWithoutImagesInput
    CollectionCover?: CollectionCreateNestedOneWithoutCoverInput
  }

  export type ImageUncheckedCreateWithoutMaterialInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
    ProductCover?: ProductUncheckedCreateNestedOneWithoutCoverInput
    TechnicalProducts?: ProductUncheckedCreateNestedManyWithoutTechnicalInput
    ProductPromotions?: ProductPromotionUncheckedCreateNestedManyWithoutImagesInput
    GalleryImages?: GalleryUncheckedCreateNestedManyWithoutImagesInput
    CollectionCover?: CollectionUncheckedCreateNestedOneWithoutCoverInput
  }

  export type ImageCreateOrConnectWithoutMaterialInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMaterialInput, ImageUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialCategoryUpsertWithoutMaterialsInput = {
    update: XOR<MaterialCategoryUpdateWithoutMaterialsInput, MaterialCategoryUncheckedUpdateWithoutMaterialsInput>
    create: XOR<MaterialCategoryCreateWithoutMaterialsInput, MaterialCategoryUncheckedCreateWithoutMaterialsInput>
    where?: MaterialCategoryWhereInput
  }

  export type MaterialCategoryUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: MaterialCategoryWhereInput
    data: XOR<MaterialCategoryUpdateWithoutMaterialsInput, MaterialCategoryUncheckedUpdateWithoutMaterialsInput>
  }

  export type MaterialCategoryUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCategoryUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpsertWithoutMaterialInput = {
    update: XOR<ImageUpdateWithoutMaterialInput, ImageUncheckedUpdateWithoutMaterialInput>
    create: XOR<ImageCreateWithoutMaterialInput, ImageUncheckedCreateWithoutMaterialInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutMaterialInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutMaterialInput, ImageUncheckedUpdateWithoutMaterialInput>
  }

  export type ImageUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
  }

  export type ImageUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    locale: string
    name: string
    slug: string
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutProductsNestedInput
    cover?: ImageUpdateOneWithoutProductCoverNestedInput
    promotion?: ProductPromotionUpdateManyWithoutProductNestedInput
    technical?: ImageUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUpdateManyWithoutProductNestedInput
    meta?: MetaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: ProductPromotionUncheckedUpdateManyWithoutProductNestedInput
    technical?: ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageCreateManyMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    subtitle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    collectionId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateManyMetaInput = {
    id?: string
    locale: string
    name: string
    slug: string
    coverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateManyWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    collection?: CollectionUpdateOneWithoutProductsNestedInput
    cover?: ImageUpdateOneWithoutProductCoverNestedInput
    promotion?: ProductPromotionUpdateManyWithoutProductNestedInput
    technical?: ImageUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: ProductPromotionUncheckedUpdateManyWithoutProductNestedInput
    technical?: ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCollectionNestedInput
    cover?: ImageUpdateOneWithoutCollectionCoverNestedInput
    section?: SectionUpdateManyWithoutCollectionNestedInput
    contents?: ContentUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCollectionNestedInput
    section?: SectionUncheckedUpdateManyWithoutCollectionNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPromotionCreateManyProductInput = {
    id?: string
    layout: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateManyProductInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPromotionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutProductPromotionsNestedInput
  }

  export type ProductPromotionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductPromotionsNestedInput
  }

  export type ProductPromotionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutTechnicalProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutTechnicalProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutTechnicalProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutProductPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutProductPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutProductPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialCreateManyImageInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutTechnicalInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    collection?: CollectionUpdateOneWithoutProductsNestedInput
    cover?: ImageUpdateOneWithoutProductCoverNestedInput
    promotion?: ProductPromotionUpdateManyWithoutProductNestedInput
    files?: FileUpdateManyWithoutProductNestedInput
    meta?: MetaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutTechnicalInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: ProductPromotionUncheckedUpdateManyWithoutProductNestedInput
    files?: FileUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutTechnicalInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPromotionUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneWithoutPromotionNestedInput
  }

  export type ProductPromotionUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPromotionUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MaterialCategoryUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyImageMetaInput = {
    id?: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: string | null
    collectionId?: string | null
  }

  export type ImageUpdateWithoutImageMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutImageMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutImageMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateManyCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    categoryId?: string | null
    type?: string | null
    description?: string | null
    imageId?: string | null
    top: boolean
    showroom: boolean
    price?: number | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionCreateManyCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    layout?: string | null
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentCreateManyCollectionInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    pageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    cover?: ImageUpdateOneWithoutProductCoverNestedInput
    promotion?: ProductPromotionUpdateManyWithoutProductNestedInput
    technical?: ImageUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUpdateManyWithoutProductNestedInput
    meta?: MetaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: ProductPromotionUncheckedUpdateManyWithoutProductNestedInput
    technical?: ImageUncheckedUpdateManyWithoutTechnicalProductsNestedInput
    files?: FileUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    top?: BoolFieldUpdateOperationsInput | boolean
    showroom?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyPageInput = {
    id?: string
    locale: string
    name: string
    slug: string
    title?: string | null
    content?: string | null
    collectionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutContentsNestedInput
  }

  export type ContentUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    section?: SectionUpdateOneWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManySectionInput = {
    id?: string
    path: string
    imageMetaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId?: string | null
  }

  export type ImageUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    imageMeta?: ImageMetaUpdateOneRequiredWithoutImageNestedInput
    ProductCover?: ProductUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUpdateOneWithoutCoverNestedInput
    Material?: MaterialUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    ProductCover?: ProductUncheckedUpdateOneWithoutCoverNestedInput
    TechnicalProducts?: ProductUncheckedUpdateManyWithoutTechnicalNestedInput
    ProductPromotions?: ProductPromotionUncheckedUpdateManyWithoutImagesNestedInput
    GalleryImages?: GalleryUncheckedUpdateManyWithoutImagesNestedInput
    CollectionCover?: CollectionUncheckedUpdateOneWithoutCoverNestedInput
    Material?: MaterialUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    imageMetaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialCreateManyCategoryInput = {
    id?: string
    locale: string
    name: string
    slug: string
    imageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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