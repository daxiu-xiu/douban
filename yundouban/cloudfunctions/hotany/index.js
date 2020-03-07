// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  let { count, start, text } = event
  const wxContext = cloud.getWXContext()
  if (text == '正在热映') {
    return {
      hot: await db.collection('movies').where({
        state: 'hot'
      }).limit(event.count).skip(event.start).get(),
      hottotal: await db.collection('movies').where({
        state: 'hot'
      }).count(),
    }
  } else if (text == '即将上映') {
    return {
      hot: await db.collection('movies').where({
        state: 'coming'
      }).limit(event.count).skip(event.start).get(),
      hottotal: await db.collection('movies').where({
        state: 'coming'
      }).count(),
    }
  }

}