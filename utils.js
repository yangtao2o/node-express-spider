const fs = require('fs')
const path = require('path')
const axios = require('axios')

/**
 * downloadFile
 * @param {*} url 图片地址
 * @param {*} name 下载后的文件名
 * @param {*} filepath 文件下载的本地目录
 * @returns
 */
const filepathInit = '/Users/yangtao/Downloads/foxitPDF/'
const nameInit = '未命名文件'

async function downloadFile({ url, filepath = filepathInit, name = nameInit }) {
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath)
  }

  let mypath = ''
  try {
    mypath = path.resolve(filepath, name.replace('/', '-'))
  } catch (error) {
    mypath = path.resolve(filepath, encodeURIComponent(name))
  }
  const writer = fs.createWriteStream(mypath)
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })
  response.data.pipe(writer)
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve('finish: ' + name))
    writer.on('error', reject)
  })
}

async function asyncPool(poolLimit, iterable, iteratorFn) {
  const ret = []
  const executing = new Set()
  for (const item of iterable) {
    const p = Promise.resolve().then(() => iteratorFn(item, iterable))
    ret.push(p)
    executing.add(p)
    const clean = () => executing.delete(p)
    p.then(clean).catch(clean)
    if (executing.size >= poolLimit) {
      await Promise.race(executing)
    }
  }
  return Promise.all(ret)
}

const fileName = 'filelists.json'
const storeData = (data, path = fileName) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

const loadData = (path = fileName) => {
  try {
    return fs.readFileSync(path, 'utf-8')
  } catch (err) {
    console.error(err)
    return false
  }
}

module.exports = {
  downloadFile,
  asyncPool,
  storeData,
  loadData
}
