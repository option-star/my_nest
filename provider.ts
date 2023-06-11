import { Type } from "./type";

// 针对字符串类型的token，我们编写一个InjectionToken
// 为什么不能直接用字符传当token， 因为可能同名
export class InjectionToken {
  constructor(public injectionIdentifier: string) {}
}
export type Token<T> = Type<T> | InjectionToken;

export interface BaseProvider<T> {
  provider: Token<T>;
}
export interface ClassProvider<T> extends BaseProvider<T> {
  useClass: Type<T>;
}
export interface ValueProvider<T> extends BaseProvider<T> {
  useValue: T;
}
export interface FactoryProvider<T> extends BaseProvider<T> {
  useFactory: () => T;
}
export type Provider<T> = ClassProvider<T> | ValueProvider<T> | FactoryProvider<T>;