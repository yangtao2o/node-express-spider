# Node Spider

## 使用 superagent 与 cheerio 完成简单爬虫
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

