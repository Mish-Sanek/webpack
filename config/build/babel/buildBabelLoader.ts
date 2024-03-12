import { BuildOptions } from "../types/types";
import { removeTestIdPlugin } from "./removeTestIdPlugin";


export function buildBabelLoader({ mode }: BuildOptions) {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeTestIdPlugin,
      {
        props: ['data-testid']
      }
    ]);
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env', '@babel/preset-typescript',
          ['@babel/preset-react', {
            runtime: mode ? 'automatic' : 'classic'
          }]
        ],
        plugins: plugins.length ? plugins : undefined
      }
    }
  }
}
