// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()


const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return {
    hotmovie: await db.collection('movies').where({
      state: 'hot'
    }).limit(10).get(),
    comemovie: await db.collection('movies').where({
      state: 'coming'
    }).limit(10).get()
  }
}