const express = require('express');
const router = express.Router();
const schemaGenelAyarlamalar = require('../models/sacEkim/schemaGenelAyarlamalar');
const schemaAnasayfaSlider = require('../models/sacEkim/schemaAnasayfaSlider');
const schemaOncesiSonrasi = require('../models/sacEkim/schemaOncesiSonrasi');
const schemaHizmetYorumlari = require('../models/sacEkim/schemaHizmetYorumlari');

router.get('/', (req, res) => {
    schemaGenelAyarlamalar.findOne({}).then((ayarlar) => {
        schemaAnasayfaSlider.find({}).then((slider) => {
            schemaOncesiSonrasi.find({}).then((beforeAfter) => {
                schemaHizmetYorumlari.find({}).then((comments) => {
                    res.render('index', {
                        yonetim: 0,
                        kurumAdi: ayarlar ? ayarlar.kurumAdi : "Genel ayarları yapınız...",
                        telefon: ayarlar ? ayarlar.telefon : "Genel ayarları yapınız...",
                        eposta: ayarlar ? ayarlar.eposta : "Genel ayarları yapınız...",
                        youtube: ayarlar ? ayarlar.youtube : "Genel ayarları yapınız...",
                        instagram: ayarlar ? ayarlar.instagram : "Genel ayarları yapınız...",
                        facebook: ayarlar ? ayarlar.facebook : "Genel ayarları yapınız...",
                        slider,
                        beforeAfter,
                        comments,
                    });
                });
            });
        });
    });
});
router.get('/yonetim', (req, res) => {
    res.render('login', {
        yonetim: 1
    });
});

router.get('/forgetPass', (req, res) => {
    res.render('forgetPass', {
        yonetim: 1
    });
});
router.get('/404', (req, res) => {
    schemaGenelAyarlamalar.findOne({}).then((ayarlar) => {
        schemaAnasayfaSlider.find({}).then((slider) => {
            schemaOncesiSonrasi.find({}).then((beforeAfter) => {
                schemaHizmetYorumlari.find({}).then((comments) => {
                    res.render('404', {
                        yonetim: 0,
                        kurumAdi: ayarlar ? ayarlar.kurumAdi : "Genel ayarları yapınız...",
                        telefon: ayarlar ? ayarlar.telefon : "Genel ayarları yapınız...",
                        eposta: ayarlar ? ayarlar.eposta : "Genel ayarları yapınız...",
                        youtube: ayarlar ? ayarlar.youtube : "Genel ayarları yapınız...",
                        instagram: ayarlar ? ayarlar.instagram : "Genel ayarları yapınız...",
                        facebook: ayarlar ? ayarlar.facebook : "Genel ayarları yapınız...",
                        slider,
                        beforeAfter,
                        comments,
                    });
                });
            });
        });
    });
});

router.all('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;