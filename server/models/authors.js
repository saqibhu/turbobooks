var mongoose = require( 'mongoose' );

var authorsSchema = new mongoose.Schema({
	name: { type: String, required: true }
});

mongoose.model('author', authorsSchema);