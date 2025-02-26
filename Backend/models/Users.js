const mongoose = require('mongoose');
const Joi = require("joi");

const SignUpSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String
    },
    Reset: {
        type: Number,
        default: 0 
    },
    Active: {
        type: Number,
        default: 0 
    }
}, { timestamps: true }); // تمكين التوقيت التلقائي

const SignUp = mongoose.model("SignUp", SignUpSchema);

function SignUpValidation(object) {
    const schema = Joi.object({
        Name: Joi.string().min(3).max(30).required(),
        Email: Joi.string().email().min(3).max(40).required(),
        Password: Joi.string().allow("")
    });

    return schema.validate(object);
}

module.exports = { SignUp, SignUpValidation };
