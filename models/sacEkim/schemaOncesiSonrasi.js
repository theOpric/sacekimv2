const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schemaOncesiSonrasi = new Schema({
    //Gerekli Kısımlar    
    beforeAfter: String,
});
schemaOncesiSonrasi = mongoose.model('schemaOncesiSonrasi', schemaOncesiSonrasi);
module.exports = schemaOncesiSonrasi;