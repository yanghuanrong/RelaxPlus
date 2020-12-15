const fs = require('fs')
const path = require('path').resolve
const matter = require('gray-matter');
const fileJSON = []
const blogPath = '../docs'

fs.readdir(path(__dirname, blogPath), (err, files) => {
  if (err) {
    return console.log('目录不存在')
  }
  console.log('Reading data')
  files.forEach((fileName, i) => {
    const filePath = path(__dirname, `${blogPath}/${fileName}`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const matterData = matter(fileContent).data || {}
    const componentName = fileName.split('.')[0]
    const routePath = `/${componentName.toLocaleLowerCase()}`

    fileJSON.push({
      ...matterData,
      componentName,
      fileName,
      routePath
    })
  })
  const dataJSON = `{"data":${JSON.stringify(fileJSON, null, 2)}}`
  const dataPath = path(__dirname, `../../src/router/data.json`)
  fs.writeFile(dataPath, dataJSON, err => {
    console.log('Data update success')
    if (err) {
      console.error(err)
      return
    }
  })
})
