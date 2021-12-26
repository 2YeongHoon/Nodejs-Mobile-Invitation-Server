import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { userInfo } from 'os'
import { User } from '../entity/UserEntity'
import { WeddingInfo } from '../entity/WeddingInfoEntity'
import { Images } from '../entity/ImagesEntity'
import { Videos } from '../entity/VideosEntity'
import { lookupService } from 'dns'

var express = require('express')
var router = express.Router()

// Usercheck
router.post('/user-check', async (req, res) => {
  try {
    // console.log('req1', req.body)
    // console.log('req2', req.body.phoneNum)
    const userId = req.body.phoneNum
    const passWord = req.body.passWord
    // console.log('passWord', req.body.userId)

    const userIdCheck = await User.findOneOrFail({ userName: userId })
    // console.log('userIdCheck', userIdCheck)

    // const userIdCheck2 = await User.findOne(userId)
    // console.log('userIdCheck2', userIdCheck2)

    res.send(userIdCheck)
  } catch (e) {
    res.send({
      message: e
    })
    throw new Error(e)
  }
})

// // Read
// router.get('/user', async (req, res) => {
//   // phone, password
//   // query string => https://odora.com/user?phone=01027578234&password=1234
//   // path variable => https:odora.com/user/01027578234/1234
//   try {
//     const users = await User.find(req.body)
//     res.send(users)
//   } catch (e) {
//     res.send({
//       message: e
//     })
//     throw new Error(e)
//   }
// })

module.exports = router
