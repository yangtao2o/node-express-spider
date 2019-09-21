# Node Spider

> 使用 superagent 与 cheerio 完成简单爬虫，控制并发

## 使用

```bash
git clone https://github.com/yangtao2o/node-express-spider.git
cd node-express-spider

npm i

npm start
```

运行`http://localhost:3000/`，开始获取资源，需要一时半会儿，若一直重复获取中，可重启再试，也可手动改动请求数目

## 题目

代码的入口是 `app.js`，当调用 `node app.js` 时，它会输出 CNode(https://cnodejs.org/ ) 社区首页的所有主题的标题，链接和第一条评论，以 json 的格式。

注意：并发连接数需要控制在 5 个。

输出示例：

```js
[
  {
    "title": "【公告】发招聘帖的同学留意一下这里",
    "href": "http://cnodejs.org/topic/541ed2d05e28155f24676a12",
    "comment1": "呵呵呵呵"
  },
  {
    "title": "发布一款 Sublime Text 下的 JavaScript 语法高亮插件",
    "href": "http://cnodejs.org/topic/54207e2efffeb6de3d61f68f",
    "comment1": "沙发！"
  }
]
```

## 知识点

1. 学习 async(https://github.com/caolan/async ) 的使用。这里有个详细的 async demo 演示：https://github.com/alsotang/async_demo
2. 学习使用 async 来控制并发连接数。

* 原文：[《使用 async 控制并发》](https://github.com/alsotang/node-lessons/tree/master/lesson5)

## Heroku

```bash
➜  node-express-spider git:(master) npm i
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN learn-02@1.0.0 No repository field.

added 77 packages from 86 contributors and audited 175 packages in 2.302s
found 0 vulnerabilities

➜  node-express-spider git:(master) ✗ node app.js
➜  node-express-spider git:(master) ✗ heroku create 
Creating app... done, ⬢ fathomless-headland-59476
https://fathomless-headland-59476.herokuapp.com/ | https://git.heroku.com/fathomless-headland-59476.git
➜  node-express-spider git:(master) ✗ git remote -v
heroku  https://git.heroku.com/fathomless-headland-59476.git (fetch)
heroku  https://git.heroku.com/fathomless-headland-59476.git (push)
origin  https://github.com/yangtao2o/node-express-spider.git (fetch)
origin  https://github.com/yangtao2o/node-express-spider.git (push)
➜  node-express-spider git:(master) ✗ git push heroku master
枚举对象: 16, 完成.
对象计数中: 100% (16/16), 完成.
使用 8 个线程进行压缩
压缩对象中: 100% (14/14), 完成.
写入对象中: 100% (16/16), 16.19 KiB | 5.40 MiB/s, 完成.
总共 16 （差异 2），复用 0 （差异 0）
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 10.x...
remote:        Downloading and installing node 10.15.3...
remote:        Using default npm version: 6.4.1
remote:        
remote: -----> Building dependencies
remote:        Installing node modules (package.json + package-lock)
remote:        added 148 packages from 193 contributors and audited 279 packages in 4.549s
remote:        found 2 low severity vulnerabilities
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Caching build
remote:        - node_modules
remote:        
remote: -----> Pruning devDependencies
remote:        audited 279 packages in 1.578s
remote:        found 2 low severity vulnerabilities
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 21.1M
remote: -----> Launching...
remote:        Released v3
remote:        https://fathomless-headland-59476.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/fathomless-headland-59476.git
 * [new branch]      master -> master
➜  node-express-spider git:(master) ✗ heroku open
➜  node-express-spider git:(master) ✗ heroku logs --tail
```

## Node 相关
* [node-blog-express-koa2](../../../node-blog-express-koa2)
* [node-express-mongodb](../../../node-express-mongodb)
* [node-express-spider](../../../node-express-spider)

