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
    const userName = req.body.userName
    const userPass = req.body.userPass

    const userIdCheck = await User.findOneOrFail({ userName: userName })
    console.log('userIdcheck', userIdCheck)
    if (userIdCheck.userName == userName) {
      if (userIdCheck.userPass == userPass) {
        res.send(userIdCheck)
      } else {
        res.send('Password가 일치하지 않습니다.')
      }
    } else {
      await User.save(req.body)
      await WeddingInfo.save(req.body)
    }
    return 'done'
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
