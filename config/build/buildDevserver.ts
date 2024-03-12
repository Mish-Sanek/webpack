import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevserver(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    // работает только с дев сервером. В других случаях нужно проксировать запросы в индекс.хтмл
    historyApiFallback: true,
    hot: true,
  }
}
