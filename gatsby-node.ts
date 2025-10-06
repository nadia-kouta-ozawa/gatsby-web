import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
  plugins,
}) => {
  actions.setWebpackConfig({
    output: {
      filename: "_assets/[name]-[contenthash].js",
      chunkFilename: "_assets/[name]-[contenthash].js",
    },
    plugins: [
      plugins.define({
        __GATSBY_ASSET_PREFIX__: JSON.stringify("_assets/"),
      }),
    ],
  });
};