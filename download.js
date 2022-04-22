const fs = require('fs')
const path = require('path')
const axios = require('axios')
const async = require('async')

const downloadFile = async (url, dest) => {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })

    const writer = fs.createWriteStream(dest)
    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve(dest))
      writer.on('error', reject)
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

console.log('Now start single file download test...')

downloadFile(
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.lkcHgcSX1SYvBQ4KFu8mSQHaHa?w=220&h=220&c=7&r=0&o=5&dpr=2&pid=1.7',
  './dist/test.jpg'
)
  .then(res => console.log('downloadFile-result: ', path.resolve(res)))
  .catch(err => console.error('downloadFile Error: ', err))

const files = [
  {
    title: '这才是未来大屏该有的样子',
    url: 'https://article-fd.zol-img.com.cn/t_s640x2000/g1/M03/02/02/ChMljl2ENKuIV553AAKEYP9wZOQAAP23wGEctEAAoR4006.jpg'
  },
  {
    title: '智慧屏',
    url: 'https://article-fd.zol-img.com.cn/t_s640x2000/g1/M05/01/06/ChMljV1_QwqIEEeTACmpHidBeUkAAPz4QMudwgAKak2877.jpg'
  }
]

const getSuffix = str => str.slice(str.lastIndexOf('.'))
async.mapSeries(files, (item, callback) => {
  console.log('Now start multiple files download test again...')

  const name = `${item.title}${getSuffix(item.url)}`
  const dest = `./dist/${name}`

  console.log(name)

  downloadFile(item.url, dest)
    .then(res => console.log('downloadFile-result: ', path.resolve(res)))
    .catch(err => console.error('downloadFile Error: ', err))

  callback && callback(null, item)
})
