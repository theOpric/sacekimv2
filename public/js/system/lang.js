//Dil değiştirme
let currentLang;
if (!Cookies.get('lang') || Cookies.get('lang') != 'TR') {
    Cookies.set('lang', 'TR');
    currentLang = 'TR';
}
else {
    currentLang = Cookies.get('lang');
};

//Common veriables
let languageText;
let logoutText;
let statusTextTrue;
let statusTextFalse;
let newRecordBtnText;
let btnTextUpdate;
let btnTextCancel;
let btnTextCancel2;
let btnTextDelete;
let btnTextClose;
let titleConfirmNew;
let titleConfirmUpdate;
let titleConfirmDelete;
let titleConfirmCancel;
let titleConfirmShow;
let titleConfirmSure;
let confirmRecordDeleteText;
let confirmRecordCancelText;
let confirmRecordSureText;
let comboBoxSearchText;
let comboBoxSearchPlaceholder;
let slimSelectChecked;
let saveBtnText;
//Common Db Messages
let dbDataNotFoundBeforeDeleted;
let dbErrorMongo;
let dbDataSuccess;
let dbDataNotFound;
let dbDataHasAlready;
let dbDataNotValidation;
let dbDataHasChieldNotDelete;

//Menu (Akademik Takvim)
let langJSON = {};
let menuAcademicCalendar;
let menuAcademicYear;
let menuAcademicWeek;
let statusCheckboxTextActive;

//Menu (Sınıf Seviyeleri)
let menuClassLevel;
let menuModule;
let menuBranch;

const forTurkish = () => {
    //For jquery.validate.min.js alerts
    requiredAlert = "Bu alan zorunludur.";
    minAlert = "Minimum ";
    minAlert2 = " karakterden oluşmalıdır. ";
    //end
    //Common Veriables
    dataTableLanguage = {
        "sDecimal": ",",
        "sEmptyTable": "Tabloda herhangi bir veri mevcut değil",
        "sInfo": "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
        "sInfoEmpty": "Kayıt yok",
        "sInfoFiltered": "(_MAX_ kayıt içerisinden bulunan)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "Sayfada _MENU_ kayıt göster",
        "sLoadingRecords": "Yükleniyor...",
        "sProcessing": "İşleniyor...",
        "sSearch": "Ara:",
        "sZeroRecords": "Eşleşen kayıt bulunamadı",
        "oPaginate": {
            "sFirst": "İlk",
            "sLast": "Son",
            "sNext": "Sonraki",
            "sPrevious": "Önceki"
        },
        "oAria": {
            "sSortAscending": ": artan sütun sıralamasını aktifleştir",
            "sSortDescending": ": azalan sütun sıralamasını aktifleştir"
        },
        "select": {
            "rows": {
                "_": "%d kayıt seçildi",
                "0": "",
                "1": "1 kayıt seçildi"
            }
        }
    };
    languageText = "Türkçe";
    logoutText = "Çıkış Yap";
    langJSON['thCommon_Process'] = "İşlemler";
    statusTextTrue = "Aktif";
    statusTextFalse = "Pasif";
    statusCheckboxTextActive = "Bu aktif bir kayıttır.";
    newRecordBtnText = "Yeni Kayıt";
    saveBtnText = "Kaydet";
    btnTextUpdate = "Güncelle";
    btnTextCancel = "İptal";
    btnTextCancel2 = "Evet";
    btnTextDelete = "Sil";
    btnTextClose = "Kapat";
    titleConfirmNew = "Kayıt Ekle";
    titleConfirmUpdate = "Kayıt Güncelle";
    titleConfirmDelete = "Kayıt Sil";
    titleConfirmCancel = "Kayıt İptal";
    titleConfirmShow = "Kayıt Görüntüle";
    titleConfirmSure = "İşlem Onayı";
    confirmRecordDeleteText = "Bu kaydı silmek istediğinden emin misin?";
    confirmRecordCancelText = "Bu kaydı iptal etmek istediğinden emin misin?";
    confirmRecordSureText = "İşleme devam etmek istediğine emin misin?";
    comboBoxSearchText = "Aranan değer bulunamadı.";
    comboBoxSearchPlaceholder = "Arama yap..";
    slimSelectChecked = "Önce nereye kayıt yapacağınızı seçmelisiniz.";
    //Common Db Messages
    dbDataNotFoundBeforeDeleted = "Daha önce bu kayıt silindiği için işleminiz yapılamadı!";
    dbErrorMongo = "Beklenmeyen bir hata oluştu. Sistem yöneticisi ile iletişime geçiniz.";
    dbDataSuccess = "İşlem başarıyla tamamlandı.";
    dbDataHasAlready = "Böyle bir kayıt sistemde zaten var!";
    dbDataNotValidation = "Girilen değer(ler) geçerli bir biçimde değildir!";
    dbDataNotFound = "Gösterilecek kayıt bulunamadı.";
    dbDataHasChieldNotDelete = "İşlem yaptığınız kayıta bağlı başka bir kayıt olduğundan bu işlem gerçekleştirilemedi!";
    btnBext = "İleri";
    btnPrevious = "Önceki";
    btnFinish = "Tamamla";

    //Bilgilerim
    langJSON['menuBilgilerim'] = "Bilgilerim";
    langJSON['thBilgilerim_userTitle'] = "Unvan";
    langJSON['thBilgilerim_passportID'] = "T.C. Kimlik";
    langJSON['thBilgilerim_fullName'] = "Ad-Soyad";
    langJSON['thBilgilerim_gender'] = "Cinsiyet";
    langJSON['thBilgilerim_email'] = "E-posta";
    langJSON['thBilgilerim_ogrenciNo'] = "Öğrenci Numarası";
    langJSON['thBilgilerim_firmaAdi'] = "Firma Adı";

    //İletişim Bilgileri
    langJSON['menuIletisimBilgileri'] = "İletişim Bilgileri";
    langJSON['thIletisimBilgileri_email'] = "E-posta";
    langJSON['thIletisimBilgileri_address'] = "Adres";
    langJSON['thIletisimBilgileri_phonenumber1'] = "Telefon 1";
    langJSON['thIletisimBilgileri_phonenumber2'] = "Telefon 2";

    //Şifre Değiştir
    langJSON['menuSifreDegistir'] = "Şifre Değiştir";
    langJSON['thSifreDegistir_username'] = "Kullanıcı Adı";
    langJSON['thSifreDegistir_password'] = "Kullanıcı Şifresi";
    langJSON['thSifreDegistir_editUser'] = "Son Düzenleyen";
    langJSON['thSifreDegistir_editDate'] = "Düzenlenme Tarihi";

    //Email Tanımlama
    langJSON['menuEmailTanimlama'] = "E-Mail Sunucusu";
    langJSON['thEmailTanimlama_smtp'] = "SMTP Adresi";
    langJSON['thEmailTanimlama_port'] = "PORT Numarası";
    langJSON['thEmailTanimlama_user'] = "Kullanıcı Adı";
    langJSON['thEmailTanimlama_pass'] = "Kullanıcı Şifresi";
    langJSON['thEmailTanimlama_editUser'] = "Son Düzenleme";
    langJSON['thEmailTanimlama_editDate'] = "Tarihi";

    //Kullanici Goruntule
    langJSON['menuKullaniciGoruntule'] = "Kullanıcı Görüntüleme";
    langJSON['thKullaniciGoruntule_passportID'] = "Kimlik Numarası";
    langJSON['thKullaniciGoruntule_fullName'] = "Adı Soyadı";
    langJSON['thKullaniciGoruntule_userTitle'] = "Unvan";
    langJSON['thKullaniciGoruntule_username'] = "Kullancı Adı";
    //Genel Ayarlamalar
    langJSON['menuGenelAyarlamalar'] = "Genel Ayarlamalar";
    langJSON['thGenelAyarlamalar_kurumAdi'] = "Kurum Adı";
    langJSON['thGenelAyarlamalar_telefon'] = "Yönlendirilcek Telefon";
    langJSON['thGenelAyarlamalar_eposta'] = "İletişim E-postası";
    langJSON['thGenelAyarlamalar_youtube'] = "Youtube";
    langJSON['thGenelAyarlamalar_instagram'] = "Instagram";
    langJSON['thGenelAyarlamalar_facebook'] = "Facebook";
    //Anasayfa Slider
    langJSON['menuAnasayfaSlider'] = "Ansayfa Slider Yönetimi";
    langJSON['thAnasayfaSlider_baslikTR'] = "Başlık TR";
    langJSON['thAnasayfaSlider_gorsel'] = "Slider Görseli";
    langJSON['thAnasayfaSlider_createUser'] = "Oluşturan";
    langJSON['thAnasayfaSlider_createDate'] = "Tarihi";
    //Oncesi Sonrasi
    langJSON['menuOncesiSonrasi'] = "Öncesi ve Sonrası";
    langJSON['thOncesiSonrasi_beforeAfter'] = "Öncesi ve Sonrası";
    //İletişim Talebi
    langJSON['menuIletisimTalebi'] = "İletişim Talebi";
    langJSON['thIletisimTalebi_isim'] = "İsim";
    langJSON['thIletisimTalebi_telefon'] = "Telefon";
    langJSON['thIletisimTalebi_mesaj'] = "Mesaj";
    langJSON['thIletisimTalebi_createDate'] = "Tarih";
    langJSON['thIletisimTalebi_status'] = "Durum";
    //Saç Analiz Talebi
    langJSON['menuSacAnalizTalebi'] = "Saç Analizi Talebi";
    langJSON['thSacAnalizTalebi_ad'] = "İsim";
    langJSON['thSacAnalizTalebi_gender'] = "Cinsiyet";
    langJSON['thSacAnalizTalebi_ulke'] = "Ülke";
    langJSON['thSacAnalizTalebi_telefon'] = "Telefon";
    langJSON['thSacAnalizTalebi_eposta'] = "Mail";
    langJSON['thSacAnalizTalebi_tip'] = "Tip";
    langJSON['thSacAnalizTalebi_yas'] = "Yaş";
    langJSON['thSacAnalizTalebi_ilac'] = "Kullandığı İlaçlar";
    langJSON['thSacAnalizTalebi_kronik'] = "Rahatsızlıkları";
    //İletişim Kayıtları
    langJSON['menuIletisimKayitlari'] = "Saç Analizi Talebi";
    langJSON['thIletisimKayitlari_isim'] = "İsim";
    langJSON['thIletisimKayitlari_telefon'] = "Telefon";
    langJSON['thIletisimKayitlari_mesaj'] = "Mesaj";
    langJSON['thIletisimKayitlari_createDate'] = "Oluşturulma";
    langJSON['thIletisimKayitlari_status'] = "Durum";
    //Saç Analizi Kayıtları
    langJSON['menuSacAnaliziKayitlari'] = "Saç Analizi Talebi";
    langJSON['thSacAnaliziKayitlari_ad'] = "İsim";
    langJSON['thSacAnaliziKayitlari_gender'] = "Cinsiyet";
    langJSON['thSacAnaliziKayitlari_ulke'] = "Ülke";
    langJSON['thSacAnaliziKayitlari_telefon'] = "Telefon";
    langJSON['thSacAnaliziKayitlari_eposta'] = "Mail";
    langJSON['thSacAnaliziKayitlari_tip'] = "Tip";
    langJSON['thSacAnaliziKayitlari_yas'] = "Yaş";
    langJSON['thSacAnaliziKayitlari_ilac'] = "Kullandığı İlaçlar";
    langJSON['thSacAnaliziKayitlari_kronik'] = "Rahatsızlıkları";
    //İletişim Kayıtları
    langJSON['menuHizmetYorumlari'] = "Hizmet Yorumları";
    langJSON['thHizmetYorumlari_gorsel'] = "Hasta Görseli";
    langJSON['thHizmetYorumlari_hastaAdi'] = "Hasta Adı";
    langJSON['thHizmetYorumlari_hastaYorumTR'] = "Hasta Yorumu";
};
const forEnglish = () => {
    alert('Çalışıyor');
};
if (currentLang == 'TR') {
    forTurkish();
};
if (currentLang == 'EN') {
    forEnglish();
    //createHTML();
};


