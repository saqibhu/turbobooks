var mongoose = require( 'mongoose' );

var publishersSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
});

mongoose.model('publisher', publishersSchema);