import { Token, Provider } from "./provider";

export class Container {
  public providers = new Map<Token<any>, Provider<any>>();

  // 注册提供者
  addProvider<T>(provider: Provider<T>) {
    // provider就是token或者说标识符
    this.providers.set(provider.provider, provider);
  }
}
