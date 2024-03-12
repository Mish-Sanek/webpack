import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var svgrLoader = {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    };
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            }
        },
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Creates `style` nodes from JS strings
            // "style-loader",
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    var tsLoader = {
        // ts-loader умеет работать с jsx/tsx из коробки,если бы не было тайпскрипта - нужно было бы ставить babel-loader
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ],
        exclude: /node_modules/,
    };
    return [assetLoader, svgrLoader, scssLoader, tsLoader];
}
