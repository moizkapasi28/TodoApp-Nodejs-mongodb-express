const Joi = require('joi')
const authSchema = Joi.object({
    nm: Joi.string().required().min(2)
})
module.exports = {authSchema}