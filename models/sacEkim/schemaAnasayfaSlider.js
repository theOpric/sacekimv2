const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schemaAnasayfaSlider = new Schema({
    //Gerekli Kısımlar
    baslikTR: String,
    baslikEN: String,
    baslikES: String,
    baslikFR: String,
    baslikDE: String,
    baslikIT: String,
    baslikAR: String,
    baslikPT: String,
    baslikRU: String,
    yaziTR: Object,
    yaziEN: Object,
    yaziES: Object,
    yaziFR: Object,
    yaziDE: Object,
    yaziIT: Object,
    yaziAR: Object,
    yaziPT: Object,
    yaziRU: Object,
    gorsel: String,
    createUser: String,
    createDate: String,

});
schemaAnasayfaSlider = mongoose.model('schemaAnasayfaSlider', schemaAnasayfaSlider);
module.exports = schemaAnasayfaSlider;