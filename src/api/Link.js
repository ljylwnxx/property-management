import service from "../utils/service.js"

const mockBaseUrl='https://console-mock.apipost.cn/mock/9a804a40-e898-47ff-be09-725f2b6f3be6'

// 封装相关的数据请求

let link=(url,method="get",data,params)=>{
   return new Promise((resolve,reject)=>{
    service.request({
        url:`${mockBaseUrl}${url}`,
        method,
        data,
        params
    }).then((ok)=>{
      resolve(ok)
    }).catch((err)=>{
      reject(err )
    })
   })
}

export default link