# douban
## 模仿微信小程序/云开发微信小程序/RN移动端
### 运行环境
node .数据库mongodb

### 后台启动
进入doubanServer文件夹=>app.js（node app.js）
### 微信小程序启动
在微信开发者工具中导入weixindouban文件夹，由于本人用的是本机ip地址请求，所以需要把IP地址改为自己的IP地址
在app.js文件中，最下来的globalData中 url: 'http://192.168.1.7:3000'改为 url:'http://自己的IP:3000'
### RN移动端启动
进入doubanapp文件夹中，npm install下载依赖包
react-native run-android启动命令
