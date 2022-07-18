const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,"Title is required"],
        minlength: [2, 'The title length should be more than 2 characters!!'],
    },
    numberOfPages: {
        type: Number,
        required: [
            true,
            "Pages is required"
        ]
    }    
}, { timestamps: true });
module.exports = mongoose.model('Book', BookSchema);

