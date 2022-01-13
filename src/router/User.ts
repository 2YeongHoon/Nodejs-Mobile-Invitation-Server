import 'reflect-metadata'
import { IsNull, createConnection } from 'typeorm'
import { userInfo } from 'os'
import { User } from '../entity/UserEntity'
import { WeddingInfo } from '../entity/WeddingInfoEntity'
import { Images } from '../entity/ImagesEntity'
import { Videos } from '../entity/VideosEntity'
import { lookupService } from 'dns'
import * as express from 'express'

var router = express.Router()

// UserCheck
router.post('/user-check', async (req, res) => {
  const userName = req.body.userName
  const userPass = req.body.userPass

  try {
    const userIdCheck = await User.findOne({
      userName: userName
    })

    if (userIdCheck == null) {
      await User.save(req.body)
      res.send('user create....')
      return 'database create'
    }

    if (userIdCheck.userName == userName) {
      if (userIdCheck.userPass == userPass) {
        res.send(userIdCheck)
      } else {
        res.send('Password Incorrect....')
      }
    }
    res.send('end')
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

export default router
