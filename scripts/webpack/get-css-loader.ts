import { loader as MiniCssExtractLoader } from "mini-css-extract-plugin";

export function getCssLoader(importLoaders: number) {
  const isProd = process.env.NODE_ENV === "production";
  return [
    isProd
      ? {
          loader: MiniCssExtractLoader,
        }
      : "style-loader",
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
              isProd
                ? {
                    browsers: ["last 2 version", "> 1%", "IE 10"],
                    autoprefixer: { grid: true },
                  }
                : {},
            ],
          ],
        },
      },
    },
  ];
}
