const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schemaGenelAyarlamalar = new Schema({
    //Gerekli Kısımlar
    kurumAdi: { type: String, required: true, },
    telefon: { type: String, required: true },
    eposta: { type: String, required: true },
    youtube: { type: String, required: true },
    instagram: { type: String, required: true },
    facebook: { type: String, required: true },

});
schemaGenelAyarlamalar = mongoose.model('schemaGenelAyarlamalar', schemaGenelAyarlamalar);
module.exports = schemaGenelAyarlamalar;