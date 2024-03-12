const Joi = require("joi")

const validator =(schema)=>(payload)=> schema.validate(payload,{abortEarly:false})

const Schema = Joi.object({
    conspiracy_theory:Joi.string().required(),
    description:Joi.string().required(),
    source:Joi.string().required(),
    reference_images:Joi.string().required()
})

exports.validateEntry = validator(Schema)