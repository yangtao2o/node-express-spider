var express = require('express')
var app = express()

// 在get处理中插入响应代码，如启动爬虫，结果信息输出等
app.get('/', function(req, res) {
	res.send('Hello Express')
})

var server = app.listen(8080, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为：http://%s:%s", host, port)
})