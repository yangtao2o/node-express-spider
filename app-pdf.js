const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const { downloadFile, asyncPool, storeData, loadData } = require('./utils.js')

const app = express()

const PORT = process.env.PORT || 3001

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res, next) => {
  res.send('Hello Express')
})

app.post('/lists', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  let data = ''

  req.on('data', chunk => {
    data += chunk
  })

  req.on('end', () => {
    data = JSON.parse(data)
    storeData(data)
    console.log('已获取全部列表, 共 ', data.length)
    res.send({ code: 0, status: 200 })
  })
})

app.post('/download-single', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  let data = ''

  req.on('data', chunk => {
    data += chunk
  })

  const handler = item => {
    return new Promise(resolve => {
      const { url, name } = item
      downloadFile({ url, name }).then(res => {
        console.log('downloadFile: ', res)
        resolve(name)
      })
    })
  }

  req.on('end', () => {
    data = JSON.parse(data)
    console.log('需要下载文件数量为: ', data.length)

    asyncPool(1, data, handler).then(response => {
      console.log('response', response)

      const lists = loadData()

      res.send({ code: 0, status: 200, data: JSON.parse(lists) })
    })
  })
})

let isLoading = false
app.post('/download', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (isLoading) {
    res.end('0')
    return
  }

  isLoading = true

  let data = ''

  req.on('data', chunk => {
    data += chunk
  })

  const handler = item => {
    return new Promise(resolve => {
      const { url, name } = item
      downloadFile({ url, name }).then(res => {
        console.log('downloadFile: ', res)
        resolve(name)
      })
    })
  }

  req.on('end', () => {
    data = JSON.parse(data)
    console.log('需要下载文件数量为: ', data.length)

    asyncPool(1, data, handler).then(res => {
      console.log(res)
      console.log('已全部下载完毕, 共 ', data.length)
      isLoading = false
    })

    res.send(data)
  })
})

app.listen(PORT, (req, res) => {
  console.log('App is listening at port ' + PORT)
})
