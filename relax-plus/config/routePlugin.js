const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const glob = require('glob')

const RegName = /(?<=.*\/package\/).*?(?=\/README.md)/
const RegPath = /(?<=.*\/package\/).*/

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap('MyPlugin', () => {
      const fileJSON = []
      const files = glob.sync(path.join(__dirname, '../package/*/README.md'))

      files.forEach((filePath, i) => {
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const matterData = matter(fileContent).data || {}
        const componentName = filePath.match(RegName)[0]
        const componentPath = filePath.match(RegPath)[0]
        const routePath = `/${componentName.toLocaleLowerCase()}`

        fileJSON.push({
          ...matterData,
          componentName,
          componentPath,
          routePath,
        })
      })

      const dataJSON = `{"data":${JSON.stringify(fileJSON, null, 2)}}`
      const dataPath = path.resolve(
        __dirname,
        `../../examples/router/data.json`
      )
      fs.writeFile(dataPath, dataJSON, (err) => {
        console.log('Data update success')
        if (err) {
          console.error(err)
          return
        }
      })
    })
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin
