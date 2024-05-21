// require("dotenv").config();
exports.dbconfig = {
    username: "root",
    password:"",
    database: "job_portal",
    host: "127.0.0.1",
    dialect: 'mysql',
}

exports.commonConfig = {
    jwtSecret: process.env.JWT_SECRET ?? "CFrdizg8bGbMoMX01l26bU6",
    bucketName: process.env.AWS_BUCKET_NAME,
    bucketRegion: process.env.AWS_REGION_NAME,
    secretKeyID: process.env.AWS_SECRET_KEY_ID,
    accessKeyID: process.env.AWS_ACCESS_KEY_ID,
    allowedCors: process.env.ALLOWED_CORS
}