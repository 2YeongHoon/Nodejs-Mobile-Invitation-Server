import 'reflect-metadata'
import { IsNull, createConnection } from 'typeorm'
import { userInfo } from 'os'
import { User } from '../entity/UserEntity'
import { WeddingInfo } from '../entity/WeddingInfoEntity'
import { Images } from '../entity/ImagesEntity'
import { Videos } from '../entity/VideosEntity'
import { lookupService } from 'dns'

var express = require('express')
var router = express.Router()

router.post('/save', async (req, res) => {
  await WeddingInfo.save(req.body)
})
