export function buildDevserver(options) {
    var _a;
    return {
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 3000,
        open: true,
        // работает только с дев сервером. В других случаях нужно проксировать запросы в индекс.хтмл
        historyApiFallback: true,
    };
}
