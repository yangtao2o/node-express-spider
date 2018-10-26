const superagent = require('superagent')
const cheerio = require('cheerio')
const async = require('async')  
const fs = require('fs')
const url = require('url')
const reptileUrl = 'https://juejin.im/user/58b67dd58fd9c50061238e38/shares'

//superagent它是一个强大并且可读性很好的轻量级ajaxAPI
superagent
	.get(reptileUrl)
	.end(function(err, res) {
		if(err) {
			console.log('err:', err)
			return 
	}
	// res.test 包含未解析前响应内容
	// 通过cheerio的load方法解析整个文档
	let $ = cheerio.load(res.text)

	let data = []
	// 下面就是和jQuery一样获取元素，遍历，组装我们需要数据，添加到数组里面
	$('.entry-link').each(function(i, elem) {
	    let _this = $(elem)
	    data.push({
	       href: _this.attr('href'),
	       title: _this.find('h4').text()
	       // slug: _this.find('.title').attr('href').replace(/\/p\//, ""),
	       // author: {
	       //     slug: _this.find('.avatar').attr('href').replace(/\/u\//, ""),
	       //     avatar: _this.find('.avatar img').attr('src'),
	       //     nickname: replaceText(_this.find('.blue-link').text()),
	       //     sharedTime: _this.find('.time').attr('data-shared-at')
	       // },
	       // title: replaceText(_this.find('.title').text()),
	       // abstract: replaceText(_this.find('.abstract').text()),
	       // thumbnails: _this.find('.wrap-img img').attr('src'),
	       // collection_tag: replaceText(_this.find('.collection-tag').text()),
	       // reads_count: replaceText(_this.find('.ic-list-read').parent().text()) * 1,
	       // comments_count: replaceText(_this.find('.ic-list-comments').parent().text()) * 1,
	       // likes_count: replaceText(_this.find('.ic-list-like').parent().text()) * 1
	   })
	})

	// 写入数据，文件不存在会自动创建
	fs.writeFile(__dirname + '/data/article.json', JSON.stringify({
		status: 0,
		data: data
	}), function(err) {
		if(err) throw err;
		console.log('写入完成')
	})
})

