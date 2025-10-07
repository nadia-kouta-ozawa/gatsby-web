import type { GatsbyNode } from "gatsby"
import path from "path"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
  stage,
}) => {
  if (stage === "build-javascript" || stage === "build-html") {
    actions.setWebpackConfig({
      output: {
        filename: `assets/js/[name]-[contenthash].js`,
        chunkFilename: `assets/js/[name]-[contenthash].js`,
        publicPath: "/",
      },
    })
  }
}

export const onPostBuild: GatsbyNode["onPostBuild"] = async () => {
  const fs = require("fs-extra")
  const glob = require("glob")
  
  // JSファイルをassets/jsに移動
  const jsFiles = glob.sync("public/*.js")
  const jsMapFiles = glob.sync("public/*.js.map")
  const licenseFiles = glob.sync("public/*.js.LICENSE.txt")
  
  // assets/jsディレクトリを作成
  await fs.ensureDir("public/assets/js")
  
  // JSファイルを移動
  for (const file of [...jsFiles, ...jsMapFiles, ...licenseFiles]) {
    const fileName = path.basename(file)
    const targetPath = `public/assets/js/${fileName}`
    await fs.move(file, targetPath)
  }
  
  // HTMLファイル内のパスを更新
  const htmlFiles = glob.sync("public/**/*.html")
  for (const htmlFile of htmlFiles) {
    let content = await fs.readFile(htmlFile, "utf8")
    // JSファイルのパスを /assets/js/ に更新（既に /assets/js/ が含まれている場合は除く）
    content = content.replace(/src="\/(?!assets\/js\/)([^\/\s"']*\.js)"/g, 'src="/assets/js/$1"')
    content = content.replace(/\/([^\/\s"']*\.js(?:\.map|\.LICENSE\.txt)?)"/g, "/assets/js/$1\"")
    await fs.writeFile(htmlFile, content)
  }
}