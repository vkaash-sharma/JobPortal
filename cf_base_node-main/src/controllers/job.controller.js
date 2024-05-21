const CommonService = require('../services/CommonService');
const models = require('../models');



exports.getAllJobs = async(req , res) => {
    try {
        let options = {
            where : {
                deleted : 0
            }
        }
        const response =  await models.jobs.findAll(options);

       return res.send({
        status : 1 ,
        message : "Fetch Data Successfully." ,
        data : response
       })
    }catch(error) {
        CommonService.filterError(error, req, res);
    }
}