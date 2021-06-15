import json5 from "json5";
import { getCssLoader } from "./get-css-loader";
import { getEJSRender } from "./get-ejs-render";

const filterStatic = (tag: string, attribute: string, attributes: any[]) => {
  if (attribute) {
    for (const { name, value } of attributes) {
      if (name === "src" || name === "href") {
        if (value.includes("static") || value.includes("packages")) {
          return false;
        }
      }
    }
  }
  return true;
};

/**
 * get-module-rules
 */
export function getLoader(): any[] {
  return [
    {
      test: /\.(tsx?|m?jsx?)$/,
      loader: "babel-loader",
      exclude: [/node_modules[\\/]/],
    },
    {
      test: /\.html$/i,
      use: [
        {
          loader: "html-loader",
          options: {
            sources: {
              list: [
                {
                  attribute: "src",
                  type: "src",
                  filter: filterStatic,
                },
                {
                  tag: "link",
                  attribute: "href",
                  type: "src",
                  filter: filterStatic,
                },
              ],
            },
            preprocessor: getEJSRender,
            minimize: false,
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: getCssLoader(0),
    },
    {
      test: /\.scss$/,
      use: [
        ...getCssLoader(2),
        {
          loader: "sass-loader",
          options: { sourceMap: true },
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|bmp)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    {
      test: /\.json5$/i,
      type: "json",
      parser: {
        parse: json5.parse,
      },
    },
  ];
}
