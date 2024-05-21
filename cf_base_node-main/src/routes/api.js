const api = require('express')();
const UserRouter = require('./user.route');
const AuthRouter = require('./auth.route');
const UploadFile = require('./upload.route');
const notifyRouter = require('./notification.route');
const featureRouter = require('./features.route');
const jobRouter = require('./job.route');

api.get("/", (req, res) => {
    res.send('Hello Node Server🌎 is Working Fine here...');
})
api.use('/user', UserRouter);
api.use('/auth', AuthRouter);
api.use('/upload', UploadFile);
api.use('/notification', notifyRouter);
api.use('/feature', featureRouter);
api.use('/jobs',jobRouter)

module.exports = api