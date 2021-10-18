import {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
        trime: true,
        uppercase: true,

    },
    departement: {
        type: String,
    },

    profilePicture: {
        type: String,
    },
    cv: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    labels: [{
        type: String
    }],
    performance: {
        type: String,
    },
    scoreEvaluacionDocente: {
        type: Number,
    },

    /*
    comments: [{
        author: {
            type: String,
        },
        comment: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now()
        },


    }], */


},
{
    timestamps: true,
    versionKey: false
});


export default model('Teacher', teacherSchema);