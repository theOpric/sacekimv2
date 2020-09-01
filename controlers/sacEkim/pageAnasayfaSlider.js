const htmlspecialchar = require('htmlspecialchars');
const moment = require('moment'); moment().locale('tr');
const queryManager = require('../queryManager');
const queryString = 'baslikTR gorsel createUser createDate';
const schemaAnasayfaSlider = require('../../models/sacEkim/schemaAnasayfaSlider');

const Click = (data, actionName, callback) => {
    schemaAnasayfaSlider.find({}, 'baslikTR baslikEN baslikES baslikFR baslikDE baslikIT baslikAR baslikPT baslikRU yaziTR yaziEN yaziES yaziFR yaziDE yaziIT yaziAR yaziPT yaziRU').then((sliderData) => {
        let tableData = [{
            _id: '',
            baslikTR: '',
            gorsel: '',
            createUser: '',
            createDate: '',
        }];
        let json = {
            request: data,
            tableData,
            actionName,
            queryString,
            queryJSON: {},
            querySchema: 'AnasayfaSlider'
        };
        queryManager.Click(json, (result) => {
            result['sliderData'] = sliderData;
            callback(result);
        });
    });
};
const Insert = (data, actionName, callback) => {
    let clientData = data.data;
    let uniqueFields = {};
    let newData = new schemaAnasayfaSlider({
        baslikTR: clientData[9],
        baslikEN: clientData[10],
        baslikES: clientData[11],
        baslikFR: clientData[12],
        baslikDE: clientData[13],
        baslikIT: clientData[14],
        baslikAR: clientData[15],
        baslikPT: clientData[16],
        baslikRU: clientData[17],
        yaziTR: clientData[0],
        yaziEN: clientData[1],
        yaziES: clientData[2],
        yaziFR: clientData[3],
        yaziDE: clientData[4],
        yaziIT: clientData[5],
        yaziAR: clientData[6],
        yaziPT: clientData[7],
        yaziRU: clientData[8],
        gorsel: clientData[18],
    });
    let returnDataFormat = ['_id', 'baslikTR', 'gorsel', 'createUser', 'createDate'];
    delete data['data'];
    let json = {
        request: data, actionName,
        newData,
        createInfo: { status: true, editFormat: 'YYYY/MM/DD HH:mm', createFormat: 'YYYY/MM/DD HH:mm' },
        unique: { status: false },
        returnDataFormat
    };
    queryManager.Insert(json, (processStatus) => {
        callback(processStatus);
    });
};
const Update = (data, actionName, callback) => {
    let _id = htmlspecialchar(data.processID);
    let clientData = data.data;
    let returnDataFormat = [
        '_id',//0
        'baslikTR',//1
        'yaziTR',//2
        'yaziEN',//3
        'yaziES',//4
        'yaziFR',//5
        'yaziDE',//6
        'yaziIT',//7
        'yaziAR',//8
        'yaziPT',//9
        'yaziRU',//10
        'gorsel',//11
        'baslikEN',//12
        'baslikES',//13
        'baslikFR',//14
        'baslikDE',//15
        'baslikIT',//16
        'baslikAR',//17
        'baslikPT',//18
        'baslikRU',//19
        'createUser',//20
        'createDate'//21
    ];
    let updateFieldValue = [
        '',//0
        clientData[9],//1
        clientData[0],//2
        clientData[1],//3
        clientData[2],//4
        clientData[3],//5
        clientData[4],//6
        clientData[5],//7
        clientData[6],//8
        clientData[7],//9
        clientData[8],//10
        'no-update',//11
        clientData[10],//12
        clientData[11],//13
        clientData[12],//14
        clientData[13],//15
        clientData[14],//16
        clientData[15],//17
        clientData[16],//18
        clientData[17],//19
        'no-update',//20
        moment().format('YYYY/MM/DD HH:mm')//21
    ];
    let json = {
        request: data,
        actionName,
        returnDataFormat,
        updateFieldValue,
        unique: { status: false, },
        queryJSON: { _id },
        queryString,
        querySchema: 'AnasayfaSlider',
        hasBelong: false,
    };
    queryManager.Update(json, (result) => {
        delete result['arr'].yaziEN;
        delete result['arr'].yaziTR;
        delete result['arr'].yaziES;
        delete result['arr'].yaziFR;
        delete result['arr'].yaziDE;
        delete result['arr'].yaziIT;
        delete result['arr'].yaziAR;
        delete result['arr'].yaziPT;
        delete result['arr'].yaziRU;
        delete result['arr'].baslikEN;
        delete result['arr'].baslikES;
        delete result['arr'].baslikFR;
        delete result['arr'].baslikDE;
        delete result['arr'].baslikIT;
        delete result['arr'].baslikAR;
        delete result['arr'].baslikPT;
        delete result['arr'].baslikRU;
        callback(result);
    });
};
const Delete = (data, actionName, callback) => {
    let _id = htmlspecialchar(data.processID);
    let json = {
        request: data,
        actionName,
        queryJSON: { _id, },
        querySchema: 'AnasayfaSlider',
        dtColLen: 4,
    };
    queryManager.Delete(json, (result) => {
        callback(result);
    });
};
module.exports = {
    Click,
    Insert,
    Delete,
    Update
};