import type { GatsbyNode } from "gatsby"
import path from "path"

export const onPostBuild: GatsbyNode["onPostBuild"] = async () => {
  const fs = require("fs-extra")
  const glob = require("glob")
  
  console.log("Starting JS file organization to assets/js...")
  
  // JSファイルをassets/jsに移動
  const jsFiles = glob.sync("public/*.js")
  const jsMapFiles = glob.sync("public/*.js.map")  
  const licenseFiles = glob.sync("public/*.js.LICENSE.txt")
  
  const allFiles = [...jsFiles, ...jsMapFiles, ...licenseFiles]
  
  if (allFiles.length === 0) {
    console.log("No JS files found in public root to move")
    return
  }
  
  // assets/jsディレクトリを作成
  await fs.ensureDir("public/assets/js")
  
  // ファイルを移動（存在する場合は上書き）
  for (const file of allFiles) {
    const fileName = path.basename(file)
    const targetPath = `public/assets/js/${fileName}`
    
    try {
      // 既に存在する場合は削除してから移動
      if (await fs.pathExists(targetPath)) {
        await fs.remove(targetPath)
      }
      await fs.move(file, targetPath)
      console.log(`Moved: ${fileName} -> assets/js/`)
    } catch (error) {
      console.warn(`Failed to move ${fileName}:`, error.message)
    }
  }
  
  // HTMLファイル内のパスを更新  
  const htmlFiles = glob.sync("public/**/*.html")
  for (const htmlFile of htmlFiles) {
    let content = await fs.readFile(htmlFile, "utf8")
    let originalContent = content
    
    // JSファイルのパスを /assets/js/ に更新
    content = content.replace(/src="\/([^\/\s"']+\.js)"/g, (match, filename) => {
      if (filename.startsWith('assets/js/')) return match
      return `src="/assets/js/${filename}"`
    })
    
    // その他のJS関連ファイルのパスも更新
    content = content.replace(/"\/([^\/\s"']+\.js(?:\.map|\.LICENSE\.txt)?)"/g, (match, filename) => {
      if (filename.startsWith('assets/js/')) return match  
      return `"/assets/js/${filename}"`
    })
    
    if (content !== originalContent) {
      await fs.writeFile(htmlFile, content)
      console.log(`Updated HTML references in: ${path.relative('public', htmlFile)}`)
    }
  }
  
  console.log("JS file organization completed!")
}