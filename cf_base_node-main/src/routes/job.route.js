const express = require('express')
const JobRouter = express.Router()
const JobController = require("../controllers/job.controller")
const {isAuth} = require('../middleware/jwt_auth')
const apiValidator = require('../middleware/validatorMiddleWare');


JobRouter.get('/get-jobs', JobController.getAllJobs)




module.exports = JobRouter;