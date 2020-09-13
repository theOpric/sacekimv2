//Dil değiştirme
let currentLang;
let browserLang = navigator.language || navigator.userLanguage;
if (!Cookies.get('lang')) {
    if (browserLang == 'tr') {
        Cookies.set('lang', 'TR');
        currentLang = 'TR';
    }
    else if (browserLang == 'en') {
        Cookies.set('lang', 'EN');
        currentLang = 'EN';
    }
    else if (browserLang == 'ru') {
        Cookies.set('lang', 'RU');
        currentLang = 'RU';
    }
    else if (browserLang == 'fr') {
        Cookies.set('lang', 'FR');
        currentLang = 'FR';
    }
    else if (browserLang == 'ar') {
        Cookies.set('lang', 'AR');
        currentLang = 'AR';
    }
    else if (browserLang == 'pt') {
        Cookies.set('lang', 'PT');
        currentLang = 'PT';
    }
    else if (browserLang == 'it') {
        Cookies.set('lang', 'IT');
        currentLang = 'IT';
    }
    else if (browserLang == 'de') {
        Cookies.set('lang', 'DE');
        currentLang = 'DE';
    }
    else if (browserLang == 'es') {
        Cookies.set('lang', 'ES');
        currentLang = 'ES';
    }
    else {
        Cookies.set('lang', 'TR');
        currentLang = 'TR';
    };
}
else {
    currentLang = Cookies.get('lang');
};

//Analiz
let oneMinuteAnalizOpened;
let oneMinuteAnalizClosed;
let step1Text;
let headerAnaliz1H4;
let notSureBtn;
let prevBtn;
let yasH4;
let ilacH4;
let ilacHayirBtn;
let ilacEvetBtn;
let ilacEvet;//playeHholder
let ilacInputEvet;
let hastalikH4;
let btnHIV;
let btnHepatit;
let btnKalp;
let btnHastalikYok;
let analizH3;
let analizInputNameSurname;//playeHholder
let analizInputMail;//playeHholder
let completeBtn;
let analizSuccess;
let completeText;
let closeBtn;

//iletişim
let contactLimitErr;
let contactSuccess;
let contactDbError;
let contactNameInputLabel;
let contactNameInput2Label;
let contactEmailInputLabel;
let contactEmailInput2Label;
let contactTextareaLabel;
let contactTextarea2Label;
let contactInfoBtn;
let contactInfoBtn2;
let contactMailInfoText;
let contactPhoneInfoText;


//navbar ve banner
let homeText;
let aboutText;
let whyUsText;
let sliderText;
let myHospitalsText;
let commentsText;
let contactText;
let bannerText;

//biz kimiz
let whyUsHeader;
let whyUsText1;
let whyUsTex2;

//methodlar
let method1Header;
let method1Text;
let method2Header;
let method2Text;
let method3Header;
let method3Text;

// neden biz
let whyUsHeaderText;
let whyUsHeaderText2;
let whyUsListText1;
let whyUsListText2;
let whyUsListText3;
let whyUsListText4;
let whyUsListText5;
let whyUsListText6;
//öncesi sonrası
let beforeAfterHeader;

//saç ekimine dair
let sliderHeaderText;
let sliderHeaderSubText;
let sliderHeaderSubText2;

//hastanelerimiz
let myHospitalsHeader;
let myHospitalsSubText;
let myHospitalsSubText2;

//ayrıcalıklarımız
let privilegesHeader;
let privilegesSubText;
let privilegesHeader1;
let privilegesText1;
let privilegesHeader2;
let privilegesText2;
let privilegesHeader3;
let privilegesText3;
let privilegesHeader4;
let privilegesText4;
let privilegesHeader5;
let privilegesText5;
let privilegesHeader6;
let privilegesText6;

//yorumlar
let commentsHeader;
let commentsSubText;

//iletişim alt
let contactFooterHeader;
let contactFooterSubText1;
let contactFooterSubText2;

//footer
let footerText;

const forTurkish = () => {

    //navbar
    homeText = "Anasayfa";
    aboutText = "Hakkımızda";
    whyUsText = "Neden&nbspBiz&nbsp?";
    sliderText = "Saç&nbspEkimine&nbspDair";
    myHospitalsText = "Hastanelerimiz";
    commentsText = "Görüşler";
    contactText = "İletişim";
    bannerText = "14 yıldır 20 farklı şehirde ve bir çok ülkede hizmetinizdeyiz..";

    //analiz
    oneMinuteAnalizOpened = "1 Dakikada Analiz";
    oneMinuteAnalizClosed = "1 Dakikada Analiz";
    step1Text = "Norwood Hamilton ve Ludwig Savin skalaları baz alınmaktadır";
    headerAnaliz1H4 = "Saç Dökülme Tipini Seçiniz";
    notSureBtn = "Emin Değilim >";
    prevBtn = "< Önceki";
    yasH4 = "Kaç Yaşındasınız ?";
    ilacH4 = "Düzenli kullandığınız bir ilaç varmı?";
    ilacHayirBtn = "HAYIR";
    ilacEvetBtn = "EVET";
    ilacEvet = "Lütfen belirtin";//playeHholder
    ilacInputEvet = "SONRAKİ";
    hastalikH4 = "Her hangi bir hastalığınız varmı ?";
    btnHIV = "HIV";
    btnHepatit = "Hepatit C";
    btnKalp = "Kronik Kalp Rahatsızlığı";
    btnHastalikYok = "HAYIR";
    analizH3 = "Analiz için formu doldurunuz.";
    analizInputNameSurname = "İsim Soyisim";//playeHholder
    analizInputMail = "Eposta";//playeHholder
    completeBtn = "BAŞVUR";
    analizSuccess = "Analiz Başarıyla Tamamlandı!";
    completeText = "Bilgileriniz tarafımıza ulaştı. İlettiğiniz bilgiler doğrultusunda size en kısa sürede geri dönüş sağlayacağız.";
    closeBtn = "KAPAT";

    //iletişim
    contactLimitErr = "Lütfen iletişim talebinizin üzerinden biraz süre geçmesini bekleyiniz.";
    contactSuccess = "İletişim talebiniz başarıyla alınmıştır";
    contactDbError = "Bilinmeyen bir hata ile karşılaşıldı.Lütfen başka iletişim kanallarından irtibat kurmayı deneyiniz.";
    contactNameInputLabel = "İsminiz";
    contactNameInput2Label = "İsminiz";
    contactEmailInputLabel = "Telefon Numarası";
    contactEmailInput2Label = "Telefon Numarası";
    contactTextareaLabel = "Talebiniz";
    contactTextarea2Label = "Talebiniz";
    contactInfoBtn = "TALEBİNİZİ İLETİN";
    contactInfoBtn2 = "TALEBİNİZİ İLETİN";
    contactMailInfoText = "E-POSTA"
    contactPhoneInfoText = "TELEFON"

    //biz kimiz
    whyUsHeader = "Biz kimiz ?";
    whyUsText1 = "Bakımlı ve sağlıklı saçlar, estetik görünümün başlıca göstergesidir. Saç ekimi aynı zamanda kişinin estetik kaygılarını da yok edip önüne geçmeyi hedeflemektedir. Eğer saç sağlığınız ve görünüşünüzle ilgili değişiklikler yapmak istiyorsanız, biz ekibimizle birlikte sizi mutlu etmek ve en iyi sonucu sağlamak için hazırız.";
    whyUsTex2 = "2006 yılından beri İstanbul Hair Aesthetic olarak saç ekimi işlemlerinizi son teknolojileri kullanarak, büyük bir özenle gerçekleştiriyoruz. Önceliğimiz hasta memnuniyetimiz.";

    //methodlar
    method1Header = "DHI";
    method1Text = "DHI saç ekimi; % 100’e yakın doğal görünümlü sonuçlar sağlayan ve daha hızlı iyileşme için 1 mm çapında en gelişmiş ekstraksiyon (alım) ve implantasyon (ekim) araçlarını kullanan, saç köklerine en az zarar veren ve hızlı iyileşme süreci sağlayan bir saç ekimi tekniğidir.";
    method2Header = "SAFIR FUE";
    method2Text = "Foliküler ünite saç ekimi yani FUE tekniği ile bu işlemi her bir saç kökünü teker teker alıp ekerek sağlamak mümkün. FUE saç ekimi tekniği, her bir saç telini diğer saç telleriyle eşleştirerek tamamen doğal bir görünüm verilmesini sağlar.";
    method3Header = "BUZ FUE";
    method3Text = "Saç ekimi için farklı yöntemler vardır. Bunlardan biri, ICE FUE yöntemidir. Bu yöntem, diğer saç ekim yöntemlerinden farklı değildir; sadece işlemin uygulanış şekli farklılık gösterir.";

    //neden biz
    whyUsHeaderText = "Neden Biz ?";
    whyUsHeaderText2 = "2006 yılından beri İstanbul Hair Aesthetic olarak saç ekimi işlemlerinizi son teknolojileri kullanarak, büyük bir özenle gerçekleştiriyoruz.";
    whyUsListText1 = "Saç ekim işlemimiz doktorlarımız tarafından yapılmaktadır. Ekiplerimiz, saç ekiminde uzmanlaşmış, tecrübeli, bu konudaki tüm yenilikleri yakından takip etmektedir.";
    whyUsListText2 = "Saç ekimi öncesi kişiye özgü tüm riskler değerlendirilip riskler sıfıra yakın en aza indirilir.";
    whyUsListText3 = "Saç ekim işlemi, ameliyathane ortamında steril koşullarda yapılmaktadır.";
    whyUsListText4 = "Kullandığımız punchlar, çoğu merkezin aksine özel yapım olup tek parça ve kişinin saçlarının özelliklerine göre farklı ebatlarda seçilmektedir. Bundan dolayı saç kökleri (greftler) zarar görmezler.";
    whyUsListText5 = "%100 sonuç garantisi veriyoruz.";
    whyUsListText6 = "Önceliğimiz sizin memnuniyetiniz.";

    //öncesi sonrası
    beforeAfterHeader = "Öncesi ve Sonrası";

    //saç ekimine dair
    sliderHeaderText = "Saç Ekimine Dair";
    sliderHeaderSubText = "Sizin için derlediğimiz bazı bilgiler...";
    sliderHeaderSubText2 = "Saç ekimi ile ilgili bir diğer yazılarımızı görmek için kaydırın";

    // hastanelerimiz
    myHospitalsHeader = "Hastanelerimiz";
    myHospitalsSubText = "Saç ekiminde İstanbul'un seçkin hastaneleri ile çalışıyoruz.";
    myHospitalsSubText2 = "Önceliğimiz memnuniyetiniz...";

    //ayrıcalıklarımız
    privilegesHeader = "AYRICALIKLARIMIZ";
    privilegesSubText = "%100 memnuniyetiniz için İstanbul Hair aesthetic farkıyla hastalarımıza sağlanacak olan ayrıcalıklar...";
    privilegesHeader1 = "SON TEKNOLOJİ";
    privilegesText1 = "Tüm teknolojik gelişmeleri takip ediyor, tüm uygulamalarımızı bu doğrultuda gerçekleştiriyoruz.";
    privilegesHeader2 = "VİP HİZMET";
    privilegesText2 = "Tüm konuklarımızın konforunu önemsiyor, tüm tedavileri boyunca Vip hizmet seçenekleri sunuyoruz.";
    privilegesHeader3 = "%100 MEMNUNİYET";
    privilegesText3 = "Hastalarımızın memnuniyetine önem veriyor ve bu doğrultuda estetik işlemlerimizi garantiliyoruz.";
    privilegesHeader4 = "LÜKS OTEL";
    privilegesText4 = "Hastalarımız işlemleri süresince, rezervasyonunu gerçekleştirdiğimiz lüks otellerde konaklıyorlar.";
    privilegesHeader5 = "ÖZEL DANIŞMAN";
    privilegesText5 = "1 yıl boyunca özel tıbbi danışmanınız, sizinle her ay iletişim halinde olacak, sürecinizi yakından izleyecek.";
    privilegesHeader6 = "TRANSFER HİZMETİ";
    privilegesText6 = "Hastalarımızın şehir içi transfer süreçlerini planlıyor, ücretsiz olarak ulaşım hizmeti veriyoruz.";

    //yorumlar
    commentsHeader = "Yorumlarınız";
    commentsSubText = "Saç ekimi ile ilgi aldığınız hizmet hakkında lütfen bize geri bildirim sağlayın.Bızde burada yayınlayalım.";

    contactFooterHeader = "Bizimle İletişime Geçin";
    contactFooterSubText1 = "Saç ekiminde %100 garanti ve memnuniyet için dünyanın her yerinden bizimle iletişime geçin.";
    contactFooterSubText2 = "”Önceliğimiz memnuniyetiniz”";
    //footer
    footerText = "” Dünyada İstanbul kadar güzel görünüşlü başka bir kent bulunmadığını </br> söyleyenler, gerçekten haklıymışlar. ” (Chateaubrıand)";
};
const forEnglish = () => {
    homeText = "Home page";
    aboutText = "about us";
    whyUsText = "Why&nbspWe &nbsp?";
    sliderText = "About Hair Transplantation";
    myHospitalsText = "Our hospitals";
    commentsText = "Opinions";
    contactText = "Contact";
    bannerText = "We have been at your service in 20 different cities and many countries for 14 years.";
    oneMinuteAnalizOpened = "Analysis in 1 Minute";
    oneMinuteAnalizClosed = "Analysis in 1 Minute";
    step1Text = "Based on Norwood Hamilton and Ludwig Savin scales";
    headerAnaliz1H4 = "Select Hair Loss Type";
    notSureBtn = "Not sure>";
    prevBtn = "<Prev";
    yasH4 = "How old are you ?";
    ilacH4 = "Do you have a regular medication?";
    ilacHayirBtn = "NO";
    ilacEvetBtn = "YES";
    ilacEvet = "Please specify";
    ilacInputEvet = "NEXT";
    hastalikH4 = "Do you have any illnesses?";
    btnHIV = "HIV";
    btnHepatit = "Hepatitis C";
    btnKalp = "Chronic Heart Disease";
    btnHastalikYok = "NO";
    analizH3 = "Fill in the form for analysis.";
    analizInputNameSurname = "Name surname";
    analizInputMail = "Email";
    completeBtn = "APPLY";
    analizSuccess = "Analysis Completed Successfully!";
    completeText = "Your information has reached us. We will get back to you as soon as possible in line with the information you provided.";
    closeBtn = "CLOSE";
    contactLimitErr = "Please wait for a while after your contact request.";
    contactSuccess = "Your contact request has been received successfully";
    contactDbError = "An unknown error was encountered. Please try contacting other communication channels.";
    contactNameInputLabel = "Your name";
    contactNameInput2Label = "Your name";
    contactEmailInputLabel = "Phone number";
    contactEmailInput2Label = "Phone number";
    contactTextareaLabel = "Your request";
    contactTextarea2Label = "Your request";
    contactInfoBtn = "SUBMIT YOUR REQUEST";
    contactInfoBtn2 = "SUBMIT YOUR REQUEST";
    contactMailInfoText = "EMAIL";
    contactPhoneInfoText = "TELEPHONE";
    whyUsHeader = "Who are we ?";
    whyUsText1 = "Well-groomed and healthy hair is the main indicator of aesthetic appearance. Hair transplantation also aims to eliminate the aesthetic concerns of the person and prevent them. If you want to make changes regarding your hair health and appearance, we are ready to make you happy and provide the best result with our team.";
    whyUsTex2 = "Since 2006, we have been performing your hair transplantation procedures as Istanbul Hair Aesthetic using the latest technologies, with great care. Our priority is patient satisfaction.";
    method1Header = "DHI";
    method1Text = "DHI hair transplantation is a hair transplantation technique that provides nearly 100% natural-looking results and uses the most advanced extraction (acquisition) and implantation (transplantation) tools with a diameter of 1 mm for faster recovery, with the least damage to hair follicles and providing a rapid healing process.";
    method2Header = "SAPPHIRE FUE";
    method2Text = "With the follicular unit hair transplantation, that is, the FUE technique, it is possible to achieve this process by taking each hair follicle one by one. The FUE hair transplant technique provides a completely natural look by matching each hair strand with other hair strands.";
    method3Header = "ICE FUE";
    method3Text = "There are different methods for hair transplantation. One of them is the ICE FUE method. This method is not different from other hair transplant methods, only the method of application differs.";
    whyUsHeaderText = "Why U.S ?";
    whyUsHeaderText2 = "Since 2006, we have been performing your hair transplantation procedures as Istanbul Hair Aesthetic using the latest technologies, with great care.";
    whyUsListText1 = "Our hair transplant is done by our doctors. Our teams are experienced in hair transplantation and closely follow all the innovations in this field.";
    whyUsListText2 = "Before hair transplantation, all personal risks are evaluated and risks are minimized to near zero.";
    whyUsListText3 = "Hair transplantation is performed in the operating room under sterile conditions.";
    whyUsListText4 = "The punches we use are custom made, unlike most centers, and are selected in one piece and in different sizes according to the characteristics of the person's hair. Therefore, hair follicles (grafts) are not damaged.";
    whyUsListText5 = "We guarantee 100% results.";
    whyUsListText6 = "Our priority is your satisfaction.";
    beforeAfterHeader = "Before and after";
    sliderHeaderText = "About Hair Transplantation";
    sliderHeaderSubText = "Some information we have compiled for you ...";
    sliderHeaderSubText2 = "Scroll to see our other articles about hair transplantation";
    myHospitalsHeader = "Our hospitals";
    myHospitalsSubText = "We work with distinguished hospitals of Istanbul in hair transplantation.";
    myHospitalsSubText2 = "Our priority is your satisfaction ...";
    privilegesHeader = "OUR PRIVILEGES";
    privilegesSubText = "The privileges to be provided to our patients with the Istanbul Hair aesthetic difference for your 100% satisfaction ...";
    privilegesHeader1 = "THE LATEST TECHNOLOGY";
    privilegesText1 = "We follow all technological developments and carry out all our applications in this direction.";
    privilegesHeader2 = "VIP SERVICE";
    privilegesText2 = "We care about the comfort of all our guests and offer VIP service options throughout all their treatments.";
    privilegesHeader3 = "100% SATISFACTION";
    privilegesText3 = "We attach importance to the satisfaction of our patients and we guarantee our aesthetic procedures accordingly.";
    privilegesHeader4 = "LUXURY HOTEL";
    privilegesText4 = "Our patients are accommodated in luxury hotels that we have booked during their procedures.";
    privilegesHeader5 = "SPECIAL ADVISOR";
    privilegesText5 = "Your private medical advisor will be in contact with you every month for 1 year and will monitor your process closely.";
    privilegesHeader6 = "TRANSFER SERVICE";
    privilegesText6 = "We plan the inner-city transfer processes of our patients and provide free transportation services.";
    commentsHeader = "Your Comments";
    commentsSubText = "Please provide us feedback about the service you are interested in with hair transplantation. We will publish it here.";
    contactFooterHeader = "Contact Us";
    contactFooterSubText1 = "Contact us from all over the world for 100% guarantee and satisfaction in hair transplantation.";
    contactFooterSubText2 = "”Our priority is your satisfaction”";
    footerText = "Those who said that ”there is no other city as beautiful as Istanbul in the world </br > were really right.”(Chateaubriand)";


};
const forEspanol = () => {
    homeText = "Página de inicio";
    aboutText = "sobre nosotros";
    whyUsText = "¿Por qué&nbspWe &nbsp?";
    sliderText = "Acerca del trasplante de cabello";
    myHospitalsText = "Nuestros hospitales";
    commentsText = "Opiniones";
    contactText = "Contacto";
    bannerText = "Hemos estado a su servicio en 20 ciudades diferentes y muchos países durante 14 años.";
    oneMinuteAnalizOpened = "Análisis en 1 minuto";
    oneMinuteAnalizClosed = "Análisis en 1 minuto";
    step1Text = "Basado en las escalas de Norwood Hamilton y Ludwig Savin";
    headerAnaliz1H4 = "Seleccione el tipo de pérdida de cabello";
    notSureBtn = "No estoy seguro>";
    prevBtn = "<Anterior";
    yasH4 = "Cuantos años tienes ?";
    ilacH4 = "¿Tiene alguna medicación regular?";
    ilacHayirBtn = "NO";
    ilacEvetBtn = "SI";
    ilacEvet = "Por favor especifica";
    ilacInputEvet = "SIGUIENTE";
    hastalikH4 = "¿Tiene alguna enfermedad?";
    btnHIV = "VIH";
    btnHepatit = "Hepatitis C";
    btnKalp = "Enfermedad cardiaca crónica";
    btnHastalikYok = "NO";
    analizH3 = "Complete el formulario para su análisis.";
    analizInputNameSurname = "Nombre Apellido";
    analizInputMail = "Email";
    completeBtn = "APLICAR";
    analizSuccess = "¡Análisis completado con éxito!";
    completeText = "Tu información nos ha llegado. Nos comunicaremos con usted lo antes posible de acuerdo con la información que proporcionó.";
    closeBtn = "CERCA";
    contactLimitErr = "Espere un poco después de su solicitud de contacto.";
    contactSuccess = "Su solicitud de contacto ha sido recibida con éxito";
    contactDbError = "Se encontró un error desconocido. Intente comunicarse con otros canales de comunicación.";
    contactNameInputLabel = "Tu nombre";
    contactNameInput2Label = "Tu nombre";
    contactEmailInputLabel = "Número de teléfono";
    contactEmailInput2Label = "Número de teléfono";
    contactTextareaLabel = "Tu petición";
    contactTextarea2Label = "Tu petición";
    contactInfoBtn = "ENVIAR SU SOLICITUD";
    contactInfoBtn2 = "ENVIAR SU SOLICITUD";
    contactMailInfoText = "CORREO ELECTRÓNICO";
    contactPhoneInfoText = "TELÉFONO";
    whyUsHeader = "Quienes somos ?";
    whyUsText1 = "Un cabello bien cuidado y saludable es el principal indicador de apariencia estética. El trasplante de cabello también tiene como objetivo eliminar las preocupaciones estéticas de la persona y prevenirlas. Si quieres hacer cambios en cuanto a la salud y apariencia de tu cabello, estamos listos para hacerte feliz y brindarte el mejor resultado con nuestro equipo.";
    whyUsTex2 = "Desde 2006, hemos estado realizando sus procedimientos de trasplante de cabello como Istanbul Hair Aesthetic utilizando las últimas tecnologías, con gran cuidado. Nuestra prioridad es la satisfacción del paciente.";
    method1Header = "DHI";
    method1Text = "El trasplante de cabello DHI es una técnica de trasplante de cabello que proporciona resultados casi 100% naturales y utiliza las herramientas de extracción (adquisición) e implantación (trasplante) más avanzadas con un diámetro de 1 mm para una recuperación más rápida, con el menor daño a los folículos pilosos y proporcionando un proceso de curación rápido.";
    method2Header = "ZAFIRO FUE";
    method2Text = "Con el trasplante de cabello de unidades foliculares, es decir, la técnica FUE, es posible lograr este proceso tomando cada folículo piloso uno a uno y trasplantando. La técnica de trasplante de cabello FUE proporciona un aspecto completamente natural al combinar cada hebra de cabello con otras hebras de cabello.";
    method3Header = "ICE FUE";
    method3Text = "Existen diferentes métodos para el trasplante de cabello. Uno de ellos es el método ICE FUE. Este método no es diferente de otros métodos de trasplante de cabello, solo difiere el método de aplicación.";
    whyUsHeaderText = "Porque nosotros ?";
    whyUsHeaderText2 = "Desde 2006, hemos estado realizando sus procedimientos de trasplante de cabello como Istanbul Hair Aesthetic utilizando las últimas tecnologías, con gran cuidado.";
    whyUsListText1 = "Nuestro trasplante de cabello lo realizan nuestros médicos. Nuestros equipos tienen experiencia en trasplante de cabello y siguen de cerca todas las innovaciones en este campo.";
    whyUsListText2 = "Antes del trasplante de cabello, se evalúan todos los riesgos personales y los riesgos se minimizan a casi cero.";
    whyUsListText3 = "El trasplante de cabello se realiza en quirófano en condiciones estériles.";
    whyUsListText4 = "Los punzones que utilizamos son hechos a medida, a diferencia de la mayoría de centros, y se seleccionan en una sola pieza y en diferentes tamaños según las características del cabello de la persona. Por lo tanto, los folículos pilosos (injertos) no se dañan.";
    whyUsListText5 = "Garantizamos resultados al 100%.";
    whyUsListText6 = "Nuestra prioridad es su satisfacción.";
    beforeAfterHeader = "Antes y después de";
    sliderHeaderText = "Acerca del trasplante de cabello";
    sliderHeaderSubText = "Alguna información que hemos recopilado para ti ...";
    sliderHeaderSubText2 = "Desplácese para ver nuestros otros artículos sobre trasplante de cabello";
    myHospitalsHeader = "Nuestros hospitales";
    myHospitalsSubText = "Trabajamos con distinguidos hospitales de Estambul en trasplante de cabello.";
    myHospitalsSubText2 = "Nuestra prioridad es su satisfacción ...";
    privilegesHeader = "NUESTROS PRIVILEGIOS";
    privilegesSubText = "Los privilegios que se brindan a nuestros pacientes con la diferencia estética de Istanbul Hair para su 100% de satisfacción ...";
    privilegesHeader1 = "LA ÚLTIMA TECNOLOGÍA";
    privilegesText1 = "Seguimos todos los desarrollos tecnológicos y llevamos a cabo todas nuestras aplicaciones en esta dirección.";
    privilegesHeader2 = "SERVICIO VIP";
    privilegesText2 = "Nos preocupamos por la comodidad de todos nuestros huéspedes y ofrecemos opciones de servicio VIP en todos sus tratamientos.";
    privilegesHeader3 = "100% SATISFACCION";
    privilegesText3 = "Damos importancia a la satisfacción de nuestros pacientes y garantizamos nuestros procedimientos estéticos en consecuencia.";
    privilegesHeader4 = "HOTEL DE LUJO";
    privilegesText4 = "Nuestros pacientes se alojan en hoteles de lujo que hemos reservado durante sus procedimientos.";
    privilegesHeader5 = "ASESOR ESPECIAL";
    privilegesText5 = "Su asesor médico privado se pondrá en contacto con usted todos los meses durante 1 año y supervisará de cerca su proceso.";
    privilegesHeader6 = "SERVICIO DE TRANSFERENCIA";
    privilegesText6 = "Planificamos los procesos de traslado al centro de la ciudad de nuestros pacientes y brindamos servicios de transporte gratuitos.";
    commentsHeader = "Tus comentarios";
    commentsSubText = "Por favor envíenos sus comentarios sobre el servicio que le interesa con el trasplante de cabello. Lo publicaremos aquí.";
    contactFooterHeader = "Contáctenos";
    contactFooterSubText1 = "Contáctenos de todo el mundo para obtener una garantía y satisfacción del 100% en el trasplante de cabello.";
    contactFooterSubText2 = "”Nuestra prioridad es tu satisfacción”";
    footerText = "Aquellos que dijeron que ”no hay otra ciudad en el mundo tan hermosa como Estambul </br> tenían razón. ”(Chateaubriand)";


};
const forFrancais = () => {
    homeText = "Page d'accueil";
    aboutText = "à propos de nous";
    whyUsText = "Pourquoi&nbspNous &nbsp?";
    sliderText = "À propos de la greffe de cheveux";
    myHospitalsText = "Nos hôpitaux";
    commentsText = "Des avis";
    contactText = "Contact";
    bannerText = "Nous sommes à votre service dans 20 villes différentes et de nombreux pays depuis 14 ans.";
    oneMinuteAnalizOpened = "Analyse en 1 minute";
    oneMinuteAnalizClosed = "Analyse en 1 minute";
    step1Text = "Basé sur les échelles Norwood Hamilton et Ludwig Savin";
    headerAnaliz1H4 = "Sélectionnez le type de perte de cheveux";
    notSureBtn = "Pas sûr>";
    prevBtn = "<Précédente";
    yasH4 = "Quel âge avez-vous ?";
    ilacH4 = "Avez-vous un médicament régulier?";
    ilacHayirBtn = "NON";
    ilacEvetBtn = "OUI";
    ilacEvet = "Veuillez préciser";
    ilacInputEvet = "SUIVANT";
    hastalikH4 = "Avez-vous des maladies?";
    btnHIV = "VIH";
    btnHepatit = "Hépatite C";
    btnKalp = "Maladie cardiaque chronique";
    btnHastalikYok = "NON";
    analizH3 = "Remplissez le formulaire pour analyse.";
    analizInputNameSurname = "Prénom / nom de famille";
    analizInputMail = "Email";
    completeBtn = "APPLIQUER";
    analizSuccess = "Analyse terminée avec succès!";
    completeText = "Vos informations nous sont parvenues. Nous vous répondrons dans les plus brefs délais en fonction des informations que vous nous avez fournies.";
    closeBtn = "PROCHE";
    contactLimitErr = "Veuillez patienter un peu après votre demande de contact.";
    contactSuccess = "Votre demande de contact a été reçue avec succès";
    contactDbError = "Une erreur inconnue s'est produite. Veuillez essayer de contacter d'autres canaux de communication.";
    contactNameInputLabel = "Votre nom";
    contactNameInput2Label = "Votre nom";
    contactEmailInputLabel = "Numéro de téléphone";
    contactEmailInput2Label = "Numéro de téléphone";
    contactTextareaLabel = "Votre demande";
    contactTextarea2Label = "Votre demande";
    contactInfoBtn = "SOUMETTEZ VOTRE DEMANDE";
    contactInfoBtn2 = "SOUMETTEZ VOTRE DEMANDE";
    contactMailInfoText = "EMAIL";
    contactPhoneInfoText = "TÉLÉPHONE";
    whyUsHeader = "Qui sommes nous ?";
    whyUsText1 = "Des cheveux bien coiffés et sains sont le principal indicateur de l'apparence esthétique. La greffe de cheveux vise également à éliminer les soucis esthétiques de la personne et à les prévenir. Si vous souhaitez apporter des modifications concernant la santé et l'apparence de vos cheveux, nous sommes prêts à vous rendre heureux et à vous fournir le meilleur résultat avec notre équipe.";
    whyUsTex2 = "Depuis 2006, nous effectuons vos procédures de greffe de cheveux comme Istanbul Hair Aesthetic en utilisant les dernières technologies, avec le plus grand soin. Notre priorité est la satisfaction des patients.";
    method1Header = "DHI";
    method1Text = "La greffe de cheveux DHI est une technique de greffe de cheveux qui fournit des résultats presque 100% naturels et utilise les outils d'extraction (acquisition) et d'implantation (transplantation) les plus avancés avec un diamètre de 1 mm pour une récupération plus rapide, avec le moins de dommages aux follicules pileux et un processus de guérison rapide.";
    method2Header = "SAPHIR FUE";
    method2Text = "Avec la greffe de cheveux d'unité folliculaire, c'est-à-dire la technique FUE, il est possible de réaliser ce processus en prenant chaque follicule pileux un par un et en le transplantant. La technique de greffe de cheveux FUE donne un aspect complètement naturel en faisant correspondre chaque mèche de cheveux avec d'autres mèches de cheveux.";
    method3Header = "ICE FUE";
    method3Text = "Il existe différentes méthodes de greffe de cheveux. L'une d'elles est la méthode ICE FUE. Cette méthode n'est pas différente des autres méthodes de greffe de cheveux, seule la méthode d'application diffère.";
    whyUsHeaderText = "Pourquoi nous ?";
    whyUsHeaderText2 = "Depuis 2006, nous effectuons vos procédures de greffe de cheveux comme Istanbul Hair Aesthetic en utilisant les dernières technologies, avec le plus grand soin.";
    whyUsListText1 = "Notre greffe de cheveux est effectuée par nos médecins. Nos équipes sont expérimentées dans la greffe de cheveux et suivent de près toutes les innovations dans ce domaine.";
    whyUsListText2 = "Avant la greffe de cheveux, tous les risques personnels sont évalués et les risques sont minimisés à près de zéro.";
    whyUsListText3 = "La greffe de cheveux est réalisée en salle d'opération dans des conditions stériles.";
    whyUsListText4 = "Les poinçons que nous utilisons sont fabriqués sur mesure, contrairement à la plupart des centres, et sont sélectionnés en une seule pièce et dans différentes tailles en fonction des caractéristiques des cheveux de la personne. Par conséquent, les follicules pileux (greffons) ne sont pas endommagés.";
    whyUsListText5 = "Nous garantissons des résultats à 100%.";
    whyUsListText6 = "Notre priorité est votre satisfaction.";
    beforeAfterHeader = "Avant et après";
    sliderHeaderText = "À propos de la greffe de cheveux";
    sliderHeaderSubText = "Quelques informations que nous avons compilées pour vous ...";
    sliderHeaderSubText2 = "Faites défiler pour voir nos autres articles sur la greffe de cheveux";
    myHospitalsHeader = "Nos hôpitaux";
    myHospitalsSubText = "Nous travaillons avec des hôpitaux distingués d'Istanbul dans le domaine de la greffe de cheveux.";
    myHospitalsSubText2 = "Notre priorité est votre satisfaction ...";
    privilegesHeader = "NOS PRIVILÈGES";
    privilegesSubText = "Les privilèges à offrir à nos patients avec la différence esthétique Istanbul Hair pour votre satisfaction à 100% ...";
    privilegesHeader1 = "LA DERNIÈRE TECHNOLOGIE";
    privilegesText1 = "Nous suivons toutes les évolutions technologiques et réalisons toutes nos applications dans ce sens.";
    privilegesHeader2 = "SERVICE VIP";
    privilegesText2 = "Nous nous soucions du confort de tous nos clients et proposons des options de service VIP tout au long de leurs soins.";
    privilegesHeader3 = "100% DE SATISFACTION";
    privilegesText3 = "Nous attachons de l'importance à la satisfaction de nos patients et nous garantissons nos procédures esthétiques en conséquence.";
    privilegesHeader4 = "HÔTEL DE LUXE";
    privilegesText4 = "Nos patients sont hébergés dans des hôtels de luxe que nous avons réservés lors de leurs procédures.";
    privilegesHeader5 = "CONSEILLER SPÉCIAL";
    privilegesText5 = "Pendant 1 an, votre médecin-conseil privé sera en contact avec vous tous les mois et suivra de près votre démarche.";
    privilegesHeader6 = "SERVICE DE TRANSFERT";
    privilegesText6 = "Nous planifions les processus de transfert en centre-ville de nos patients et fournissons des services de transport gratuits.";
    commentsHeader = "Vos commentaires";
    commentsSubText = "Veuillez nous faire part de vos commentaires sur le service qui vous intéresse en matière de greffe de cheveux. Nous le publierons ici.";
    contactFooterHeader = "Nous contacter";
    contactFooterSubText1 = "Contactez-nous de partout dans le monde pour une garantie et une satisfaction à 100% dans la greffe de cheveux.";
    contactFooterSubText2 = "”Notre priorité est votre satisfaction”";
    footerText = "Ceux qui ont dit qu '”il n'y a pas d'autre ville au monde aussi belle qu'Istanbul </br> avaient vraiment raison. ”(Chateaubriand)";


};
const forDeutsch = () => {
    homeText = "Startseite";
    aboutText = "Über uns";
    whyUsText = "Warum&nbspWir &nbsp?";
    sliderText = "Über Haartransplantation";
    myHospitalsText = "Unsere Krankenhäuser";
    commentsText = "Meinungen";
    contactText = "Kontakt";
    bannerText = "Wir sind seit 14 Jahren in 20 verschiedenen Städten und vielen Ländern für Sie da.";
    oneMinuteAnalizOpened = "Analyse in 1 Minute";
    oneMinuteAnalizClosed = "Analyse in 1 Minute";
    step1Text = "Basierend auf den Skalen von Norwood Hamilton und Ludwig Savin";
    headerAnaliz1H4 = "Wählen Sie Haarausfalltyp";
    notSureBtn = "Nicht sicher>";
    prevBtn = "<Zurück";
    yasH4 = "Wie alt sind Sie ?";
    ilacH4 = "Gibt es Medikamente, die Sie regelmäßig einnehmen?";
    ilacHayirBtn = "NEIN";
    ilacEvetBtn = "JA";
    ilacEvet = "Bitte angeben";
    ilacInputEvet = "NÄCHSTER";
    hastalikH4 = "Hast du irgendwelche krankheiten";
    btnHIV = "HIV";
    btnHepatit = "Hepatitis C";
    btnKalp = "Chronische Herzkrankheit";
    btnHastalikYok = "NEIN";
    analizH3 = "Füllen Sie das Formular zur Analyse aus.";
    analizInputNameSurname = "Vorname Nachname";
    analizInputMail = "Email";
    completeBtn = "ANWENDEN";
    analizSuccess = "Analyse erfolgreich abgeschlossen!";
    completeText = "Ihre Informationen haben uns erreicht. Wir werden uns so schnell wie möglich gemäß den von Ihnen angegebenen Informationen bei Ihnen melden.";
    closeBtn = "SCHLIESSEN";
    contactLimitErr = "Bitte warten Sie eine Weile nach Ihrer Kontaktanfrage.";
    contactSuccess = "Ihre Kontaktanfrage wurde erfolgreich empfangen";
    contactDbError = "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie, andere Kommunikationskanäle zu kontaktieren.";
    contactNameInputLabel = "Dein Name";
    contactNameInput2Label = "Dein Name";
    contactEmailInputLabel = "Telefonnummer";
    contactEmailInput2Label = "Telefonnummer";
    contactTextareaLabel = "Ihre Anfrage";
    contactTextarea2Label = "Ihre Anfrage";
    contactInfoBtn = "SENDEN SIE IHRE ANFRAGE";
    contactInfoBtn2 = "SENDEN SIE IHRE ANFRAGE";
    contactMailInfoText = "EMAIL";
    contactPhoneInfoText = "TELEFON";
    whyUsHeader = "Wer sind wir ?";
    whyUsText1 = "Gepflegtes und gesundes Haar ist der Hauptindikator für das ästhetische Erscheinungsbild. Die Haartransplantation zielt auch darauf ab, die ästhetischen Bedenken der Person zu beseitigen und sie zu verhindern. Wenn Sie Ihre Haargesundheit und Ihr Aussehen verändern möchten, sind wir bereit, Sie glücklich zu machen und mit unserem Team das beste Ergebnis zu erzielen.";
    whyUsTex2 = "Seit 2006 führen wir Ihre Haartransplantationsverfahren als Istanbul Hair Aesthetic mit den neuesten Technologien mit großer Sorgfalt durch. Unsere Priorität ist die Patientenzufriedenheit.";
    method1Header = "DHI";
    method1Text = "Die DHI-Haartransplantation ist eine Haartransplantationstechnik, die nahezu 100% natürlich aussehende Ergebnisse liefert und die fortschrittlichsten Extraktions- (Akquisitions-) und Implantations- (Transplantations-) Werkzeuge mit einem Durchmesser von 1 mm verwendet, um eine schnellere Genesung zu erreichen, die Haarfollikel am wenigsten zu schädigen und einen schnellen Heilungsprozess zu gewährleisten.";
    method2Header = "SAPPHIRE FUE";
    method2Text = "Mit der Haartransplantation der Follikeleinheit, dh der FUE-Technik, ist es möglich, dies zu erreichen, indem jeder Haarfollikel einzeln entnommen und transplantiert wird. Die FUE-Haartransplantationstechnik sorgt für ein völlig natürliches Aussehen, indem jede Haarsträhne mit anderen Haarsträhnen kombiniert wird.";
    method3Header = "ICE FUE";
    method3Text = "Es gibt verschiedene Methoden zur Haartransplantation. Eine davon ist die ICE FUE-Methode. Diese Methode unterscheidet sich nicht von anderen Haartransplantationsmethoden, nur die Art der Anwendung unterscheidet sich.";
    whyUsHeaderText = "Warum wir ?";
    whyUsHeaderText2 = "Seit 2006 führen wir Ihre Haartransplantationsverfahren als Istanbul Hair Aesthetic mit den neuesten Technologien mit großer Sorgfalt durch.";
    whyUsListText1 = "Unsere Haartransplantation wird von unseren Ärzten durchgeführt. Unsere Teams haben Erfahrung in der Haartransplantation und verfolgen alle Innovationen auf diesem Gebiet genau.";
    whyUsListText2 = "Vor der Haartransplantation werden alle persönlichen Risiken bewertet und die Risiken auf nahezu Null minimiert.";
    whyUsListText3 = "Die Haartransplantation wird im Operationssaal unter sterilen Bedingungen durchgeführt.";
    whyUsListText4 = "Die Schläge, die wir verwenden, sind im Gegensatz zu den meisten Zentren maßgeschneidert und werden je nach den Eigenschaften der Haare der Person in einem Stück und in verschiedenen Größen ausgewählt. Daher werden Haarfollikel (Transplantate) nicht beschädigt.";
    whyUsListText5 = "Wir garantieren 100% Ergebnisse.";
    whyUsListText6 = "Unsere Priorität ist Ihre Zufriedenheit.";
    beforeAfterHeader = "Vorher und nachher";
    sliderHeaderText = "Über Haartransplantation";
    sliderHeaderSubText = "Einige Informationen, die wir für Sie zusammengestellt haben ...";
    sliderHeaderSubText2 = "Blättern Sie zu unseren anderen Artikeln über Haartransplantation";
    myHospitalsHeader = "Unsere Krankenhäuser";
    myHospitalsSubText = "Wir arbeiten mit angesehenen Krankenhäusern in Istanbul bei der Haartransplantation zusammen.";
    myHospitalsSubText2 = "Unsere Priorität ist Ihre Zufriedenheit ...";
    privilegesHeader = "UNSERE PRIVILEGIEN";
    privilegesSubText = "Die Privilegien, die unseren Patienten mit dem ästhetischen Unterschied von Istanbul Hair für Ihre 100% ige Zufriedenheit gewährt werden ...";
    privilegesHeader1 = "DER LETZTE STAND DER TECHNOLOGIE";
    privilegesText1 = "Wir verfolgen alle technologischen Entwicklungen und führen alle unsere Anwendungen in diese Richtung aus.";
    privilegesHeader2 = "VIP-SERVICE";
    privilegesText2 = "Wir kümmern uns um den Komfort aller unserer Gäste und bieten VIP-Service-Optionen während all ihrer Behandlungen.";
    privilegesHeader3 = "100% ZUFRIEDENHEIT";
    privilegesText3 = "Wir legen Wert auf die Zufriedenheit unserer Patienten und garantieren unsere ästhetischen Abläufe entsprechend.";
    privilegesHeader4 = "LUXUSHOTEL";
    privilegesText4 = "Unsere Patienten werden in Luxushotels untergebracht, die wir während ihres Eingriffs gebucht haben.";
    privilegesHeader5 = "BESONDERER BERATER";
    privilegesText5 = "Ihr privater medizinischer Berater wird sich 1 Jahr lang jeden Monat mit Ihnen in Verbindung setzen und Ihren Prozess genau überwachen.";
    privilegesHeader6 = "TRANSFER-SERVICE";
    privilegesText6 = "Wir planen die innerstädtischen Transferprozesse unserer Patienten und bieten kostenlose Transportdienste an.";
    commentsHeader = "Deine Kommentare";
    commentsSubText = "Bitte geben Sie uns Feedback zu dem Service, an dem Sie bei der Haartransplantation interessiert sind. Wir werden ihn hier veröffentlichen.";
    contactFooterHeader = "Kontaktiere uns";
    contactFooterSubText1 = "Kontaktieren Sie uns aus der ganzen Welt für 100% Garantie und Zufriedenheit bei der Haartransplantation.";
    contactFooterSubText2 = "”Unsere Priorität ist Ihre Zufriedenheit”";
    footerText = "Diejenigen, die sagten, dass ”es keine andere Stadt auf der Welt gibt, die so schön ist wie Istanbul </ br>, hatten wirklich Recht. ”(Chateaubriand)";


};
const forItaliano = () => {
    homeText = "Pagina iniziale";
    aboutText = "riguardo a noi";
    whyUsText = "Perché&nbspWe &nbsp?";
    sliderText = "Informazioni sul trapianto di capelli";
    myHospitalsText = "I nostri ospedali";
    commentsText = "Opinioni";
    contactText = "Contatto";
    bannerText = "Da 14 anni siamo al vostro servizio in 20 diverse città e molti paesi.";
    oneMinuteAnalizOpened = "Analisi in 1 minuto";
    oneMinuteAnalizClosed = "Analisi in 1 minuto";
    step1Text = "Basato sulle scale di Norwood Hamilton e Ludwig Savin";
    headerAnaliz1H4 = "Seleziona il tipo di perdita di capelli";
    notSureBtn = "Non sono sicuro>";
    prevBtn = "<Prec";
    yasH4 = "Quanti anni hai ?";
    ilacH4 = "Hai un farmaco regolare?";
    ilacHayirBtn = "NO";
    ilacEvetBtn = "SÌ";
    ilacEvet = "Per favore specificare";
    ilacInputEvet = "IL PROSSIMO";
    hastalikH4 = "Hai qualche malattia?";
    btnHIV = "HIV";
    btnHepatit = "Epatite C";
    btnKalp = "Malattia cardiaca cronica";
    btnHastalikYok = "NO";
    analizH3 = "Compila il modulo per l'analisi.";
    analizInputNameSurname = "Nome cognome";
    analizInputMail = "E-mail";
    completeBtn = "APPLICARE";
    analizSuccess = "Analisi completata con successo!";
    completeText = "Le tue informazioni ci sono pervenute. Ti ricontatteremo il prima possibile in linea con le informazioni che hai fornito.";
    closeBtn = "VICINO";
    contactLimitErr = "Attendi qualche istante dopo la tua richiesta di contatto.";
    contactSuccess = "La tua richiesta di contatto è stata ricevuta con successo";
    contactDbError = "Si è verificato un errore sconosciuto. Prova a contattare altri canali di comunicazione.";
    contactNameInputLabel = "Il tuo nome";
    contactNameInput2Label = "Il tuo nome";
    contactEmailInputLabel = "Numero di telefono";
    contactEmailInput2Label = "Numero di telefono";
    contactTextareaLabel = "La tua richiesta";
    contactTextarea2Label = "La tua richiesta";
    contactInfoBtn = "INVIA LA TUA RICHIESTA";
    contactInfoBtn2 = "INVIA LA TUA RICHIESTA";
    contactMailInfoText = "E-MAIL";
    contactPhoneInfoText = "TELEFONO";
    whyUsHeader = "Chi siamo noi ?";
    whyUsText1 = "I capelli sani e ben curati sono il principale indicatore dell'aspetto estetico. Il trapianto di capelli mira anche ad eliminare le preoccupazioni estetiche della persona e prevenirle. Se desideri apportare modifiche alla salute e all'aspetto dei tuoi capelli, siamo pronti a renderti felice e fornire il miglior risultato con il nostro team.";
    whyUsTex2 = "Dal 2006 eseguiamo le vostre procedure di trapianto di capelli come Istanbul Hair Aesthetic utilizzando le ultime tecnologie, con grande cura. La nostra priorità è la soddisfazione del paziente.";
    method1Header = "DHI";
    method1Text = "Il trapianto di capelli DHI è una tecnica di trapianto di capelli che fornisce risultati quasi naturali al 100% e utilizza gli strumenti di estrazione (assunzione) e impianto (trapianto) più avanzati con un diametro di 1 mm per un recupero più rapido, con il minimo danno ai follicoli piliferi e fornendo un rapido processo di guarigione.";
    method2Header = "ZAFFIRO FUE";
    method2Text = "Con il trapianto di capelli dell'unità follicolare, cioè la tecnica FUE, è possibile ottenere questo processo prendendo uno per uno ogni follicolo pilifero e trapiantandolo. La tecnica di trapianto di capelli FUE fornisce un aspetto completamente naturale abbinando ogni ciocca di capelli con altre ciocche di capelli.";
    method3Header = "ICE FUE";
    method3Text = "Esistono diversi metodi per il trapianto di capelli. Uno di questi è il metodo ICE FUE. Questo metodo non è diverso dagli altri metodi di trapianto di capelli, solo il metodo di applicazione è diverso.";
    whyUsHeaderText = "Perché noi ?";
    whyUsHeaderText2 = "Dal 2006 eseguiamo le vostre procedure di trapianto di capelli come Istanbul Hair Aesthetic utilizzando le ultime tecnologie, con grande cura.";
    whyUsListText1 = "Il nostro trapianto di capelli viene eseguito dai nostri medici. I nostri team hanno esperienza nel trapianto di capelli e seguono da vicino tutte le innovazioni in questo campo.";
    whyUsListText2 = "Prima del trapianto di capelli, tutti i rischi personali vengono valutati e i rischi sono ridotti al minimo quasi a zero.";
    whyUsListText3 = "Il trapianto di capelli viene eseguito in sala operatoria in condizioni sterili.";
    whyUsListText4 = "I punzoni che utilizziamo sono realizzati su misura, a differenza della maggior parte dei centri, e sono selezionati in un unico pezzo e in diverse taglie in base alle caratteristiche dei capelli della persona. Pertanto, i follicoli piliferi (innesti) non sono danneggiati.";
    whyUsListText5 = "Garantiamo risultati al 100%.";
    whyUsListText6 = "La nostra priorità è la tua soddisfazione.";
    beforeAfterHeader = "Prima e dopo";
    sliderHeaderText = "Informazioni sul trapianto di capelli";
    sliderHeaderSubText = "Alcune informazioni che abbiamo raccolto per te ...";
    sliderHeaderSubText2 = "Scorri per vedere i nostri altri articoli sul trapianto di capelli";
    myHospitalsHeader = "I nostri ospedali";
    myHospitalsSubText = "Lavoriamo con illustri ospedali di Istanbul nel trapianto di capelli.";
    myHospitalsSubText2 = "La nostra priorità è la tua soddisfazione ...";
    privilegesHeader = "I NOSTRI PRIVILEGI";
    privilegesSubText = "I privilegi da offrire ai nostri pazienti con la differenza estetica Istanbul Hair per la vostra soddisfazione al 100% ...";
    privilegesHeader1 = "LA TECNOLOGIA PIÙ RECENTE";
    privilegesText1 = "Seguiamo tutti gli sviluppi tecnologici ed eseguiamo tutte le nostre applicazioni in questa direzione.";
    privilegesHeader2 = "SERVIZIO VIP";
    privilegesText2 = "Ci preoccupiamo del comfort di tutti i nostri ospiti e offriamo opzioni di servizio VIP durante tutti i loro trattamenti.";
    privilegesHeader3 = "SODDISFAZIONE AL 100%";
    privilegesText3 = "Attribuiamo importanza alla soddisfazione dei nostri pazienti e garantiamo le nostre procedure estetiche di conseguenza.";
    privilegesHeader4 = "HOTEL DI LUSSO";
    privilegesText4 = "I nostri pazienti sono alloggiati in hotel di lusso che abbiamo prenotato durante le loro procedure.";
    privilegesHeader5 = "CONSIGLIERE SPECIALE";
    privilegesText5 = "Il tuo consulente medico privato ti contatterà ogni mese per 1 anno e monitorerà attentamente il tuo processo.";
    privilegesHeader6 = "SERVIZIO TRANSFER";
    privilegesText6 = "Pianifichiamo i processi di trasferimento all'interno della città dei nostri pazienti e forniamo servizi di trasporto gratuiti.";
    commentsHeader = "I tuoi commenti";
    commentsSubText = "Ti preghiamo di fornirci un feedback sul servizio che ti interessa con il trapianto di capelli. Lo pubblicheremo qui.";
    contactFooterHeader = "Contattaci";
    contactFooterSubText1 = "Contattaci da tutto il mondo per la garanzia e la soddisfazione al 100% nel trapianto di capelli.";
    contactFooterSubText2 = "”La nostra priorità è la tua soddisfazione”";
    footerText = "Aveva proprio ragione chi diceva che ”non c'è altra città bella come Istanbul al mondo </br>. ”(Chateaubriand)";


};
const forArabic = () => {
    homeText = "الصفحة الرئيسية";
    aboutText = "معلومات عنا";
    whyUsText = "لماذا&nbspنحن &nbsp؟";
    sliderText = "حول زراعة الشعر";
    myHospitalsText = "مستشفياتنا";
    commentsText = "آراء";
    contactText = "اتصل";
    bannerText = "لقد كنا في خدمتك في 20 مدينة مختلفة والعديد من البلدان لمدة 14 عامًا.";
    oneMinuteAnalizOpened = "تحليل في دقيقة واحدة";
    oneMinuteAnalizClosed = "تحليل في دقيقة واحدة";
    step1Text = "استنادًا إلى مقاييس نوروود هاميلتون ولودفيج سافين";
    headerAnaliz1H4 = "حدد نوع تساقط الشعر";
    notSureBtn = "لست متأكدا>";
    prevBtn = "<السابق";
    yasH4 = "كم عمرك ؟";
    ilacH4 = "هل لديك دواء منتظم؟";
    ilacHayirBtn = "لا";
    ilacEvetBtn = "أجل";
    ilacEvet = "رجاء حدد";
    ilacInputEvet = "التالى";
    hastalikH4 = "هل لديك أي أمراض؟";
    btnHIV = "فيروس العوز المناعي البشري";
    btnHepatit = "التهاب الكبد ج";
    btnKalp = "أمراض القلب المزمنة";
    btnHastalikYok = "لا";
    analizH3 = "املأ النموذج للتحليل.";
    analizInputNameSurname = "اسم اللقب";
    analizInputMail = "بريد إلكتروني";
    completeBtn = "تطبيق";
    analizSuccess = "اكتمل التحليل بنجاح!";
    completeText = "لقد وصلت معلوماتك إلينا. سنعود إليك في أقرب وقت ممكن بما يتماشى مع المعلومات التي قدمتها.";
    closeBtn = "أغلق";
    contactLimitErr = "يرجى الانتظار لبعض الوقت بعد طلب الاتصال الخاص بك.";
    contactSuccess = "تم استلام طلب الاتصال الخاص بك بنجاح";
    contactDbError = "تمت مواجهة خطأ غير معروف. يرجى محاولة الاتصال بقنوات الاتصال الأخرى.";
    contactNameInputLabel = "اسمك";
    contactNameInput2Label = "اسمك";
    contactEmailInputLabel = "رقم الهاتف";
    contactEmailInput2Label = "رقم الهاتف";
    contactTextareaLabel = "طلبك";
    contactTextarea2Label = "طلبك";
    contactInfoBtn = "قم بتقديم طلبك";
    contactInfoBtn2 = "قم بتقديم طلبك";
    contactMailInfoText = "بريد إلكتروني";
    contactPhoneInfoText = "هاتف";
    whyUsHeader = "من نحن ؟";
    whyUsText1 = "يعتبر الشعر المهذب والصحي هو المؤشر الرئيسي للمظهر الجمالي. تهدف زراعة الشعر أيضًا إلى القضاء على المخاوف الجمالية لدى الشخص والوقاية منها. إذا كنت ترغب في إجراء تغييرات في صحة شعرك ومظهرك ، فنحن على استعداد لإسعادك وتقديم أفضل نتيجة مع فريقنا.";
    whyUsTex2 = "منذ عام 2006 ، بصفتنا شركة اسطنبول لتجميل الشعر ، نقوم بإجراء عمليات زراعة الشعر الخاصة بك باستخدام أحدث التقنيات بعناية فائقة. أولويتنا هي إرضاء المريض.";
    method1Header = "DHI";
    method1Text = "زراعة الشعر بتقنية DHI هي تقنية لزراعة الشعر توفر ما يقرب من 100٪ نتائج طبيعية وتستخدم أدوات الاستخراج (الاستحواذ) والغرس (الزرع) الأكثر تقدمًا بقطر 1 مم للتعافي بشكل أسرع ، مع أقل ضرر لبصيلات الشعر وتوفير عملية شفاء سريعة.";
    method2Header = "السفير فو";
    method2Text = "من خلال زراعة الشعر بالوحدة المسامية ، أي تقنية FUE ، يمكن تحقيق هذه العملية عن طريق أخذ كل بصيلة شعر واحدة تلو الأخرى وزرعها. توفر تقنية زراعة الشعر بالاقتطاف FUE مظهرًا طبيعيًا تمامًا من خلال مطابقة كل خصلة شعر مع خيوط شعر أخرى.";
    method3Header = "طريقة ICE FUE";
    method3Text = "هناك طرق مختلفة لزراعة الشعر. واحد منهم هو طريقة ICE FUE. لا تختلف هذه الطريقة عن طرق زراعة الشعر الأخرى ، تختلف طريقة التطبيق فقط.";
    whyUsHeaderText = "لماذا نحن ؟";
    whyUsHeaderText2 = "منذ عام 2006 ، بصفتنا شركة اسطنبول لتجميل الشعر ، نقوم بإجراء عمليات زراعة الشعر الخاصة بك باستخدام أحدث التقنيات بعناية فائقة.";
    whyUsListText1 = "يتم إجراء زراعة الشعر لدينا من قبل أطبائنا. تتمتع فرقنا بالخبرة في زراعة الشعر وتتابع عن كثب جميع الابتكارات في هذا المجال.";
    whyUsListText2 = "قبل زراعة الشعر ، يتم تقييم جميع المخاطر الشخصية وتقليل المخاطر إلى ما يقرب من الصفر.";
    whyUsListText3 = "تتم زراعة الشعر في غرفة العمليات تحت ظروف معقمة.";
    whyUsListText4 = "يتم صنع اللكمات التي نستخدمها حسب الطلب ، على عكس معظم المراكز ، ويتم اختيارها في قطعة واحدة وبأحجام مختلفة وفقًا لخصائص شعر الشخص. لذلك ، لا تتلف بصيلات الشعر (الطعوم).";
    whyUsListText5 = "نضمن لك نتائج 100٪.";
    whyUsListText6 = "أولويتنا هي رضاك.";
    beforeAfterHeader = "قبل وبعد";
    sliderHeaderText = "حول زراعة الشعر";
    sliderHeaderSubText = "بعض المعلومات التي قمنا بتجميعها لك ...";
    sliderHeaderSubText2 = "قم بالتمرير لرؤية مقالاتنا الأخرى حول زراعة الشعر.";
    myHospitalsHeader = "مستشفياتنا";
    myHospitalsSubText = "نحن نعمل مع مستشفيات اسطنبول المتميزة في زراعة الشعر.";
    myHospitalsSubText2 = "أولويتنا رضاكم ...";
    privilegesHeader = "امتيازاتنا";
    privilegesSubText = "الامتيازات التي يجب أن نقدمها لمرضانا مع اختلاف جمالية اسطنبول هير لرضاكم بنسبة 100٪ ...";
    privilegesHeader1 = "أحدث التكنولوجيا";
    privilegesText1 = "نحن نتابع جميع التطورات التكنولوجية وننفذ جميع تطبيقاتنا في هذا الاتجاه.";
    privilegesHeader2 = "خدمة كبار الشخصيات";
    privilegesText2 = "نحن نهتم براحة جميع ضيوفنا ونقدم خيارات خدمة VIP في جميع علاجاتهم.";
    privilegesHeader3 = "رضاء 100٪";
    privilegesText3 = "نحن نولي أهمية لرضا مرضانا ونضمن إجراءاتنا الجمالية وفقًا لذلك.";
    privilegesHeader4 = "فندق فخم";
    privilegesText4 = "يتم إيواء مرضانا في فنادق فاخرة حجزناها أثناء إجراءاتهم.";
    privilegesHeader5 = "مستشار خاص";
    privilegesText5 = "سيكون مستشارك الطبي الخاص على اتصال بك كل شهر لمدة عام واحد وسيراقب عمليتك عن كثب.";
    privilegesHeader6 = "خدمة نقل";
    privilegesText6 = "نحن نخطط لعمليات النقل داخل المدينة لمرضانا ونوفر خدمات النقل المجانية.";
    commentsHeader = "تعليقاتك";
    commentsSubText = "يرجى تزويدنا بآرائك حول الخدمة التي تهتم بها في زراعة الشعر ، وسننشرها هنا.";
    contactFooterHeader = "اتصل بنا";
    contactFooterSubText1 = "اتصل بنا من جميع أنحاء العالم للحصول على ضمان ورضاء بنسبة 100٪ في زراعة الشعر.";
    contactFooterSubText2 = "”أولويتنا هي رضاك”";
    footerText = "أولئك الذين قالوا إنه ”لا توجد مدينة أخرى في العالم جميلة مثل اسطنبول </br> كانوا على حق حقًا. ”(شاتوبريان)";


}
const forPortogues = () => {
    homeText = "Pagina inicial";
    aboutText = "sobre nós";
    whyUsText = "Por que&nbspnós &nbsp?";
    sliderText = "Sobre o transplante capilar";
    myHospitalsText = "Nossos hospitais";
    commentsText = "Opiniões";
    contactText = "Contato";
    bannerText = "Há 14 anos estamos ao seu serviço em 20 cidades diferentes e em muitos países.";
    oneMinuteAnalizOpened = "Análise em 1 minuto";
    oneMinuteAnalizClosed = "Análise em 1 minuto";
    step1Text = "Com base nas escalas de Norwood Hamilton e Ludwig Savin";
    headerAnaliz1H4 = "Selecione o tipo de queda de cabelo";
    notSureBtn = "Não tenho certeza>";
    prevBtn = "<Anterior";
    yasH4 = "Quantos anos você tem ?";
    ilacH4 = "Você tem algum remédio regular?";
    ilacHayirBtn = "NÃO";
    ilacEvetBtn = "SIM";
    ilacEvet = "Por favor especifique";
    ilacInputEvet = "PRÓXIMO";
    hastalikH4 = "Você tem alguma doença?";
    btnHIV = "HIV";
    btnHepatit = "Hepatite C";
    btnKalp = "Doença Cardíaca Crônica";
    btnHastalikYok = "NÃO";
    analizH3 = "Preencha o formulário para análise.";
    analizInputNameSurname = "Nome sobrenome";
    analizInputMail = "O email";
    completeBtn = "APLIQUE";
    analizSuccess = "Análise concluída com sucesso!";
    completeText = "Sua informação chegou até nós. Entraremos em contato com você o mais rápido possível, de acordo com as informações fornecidas.";
    closeBtn = "PERTO";
    contactLimitErr = "Aguarde um pouco após sua solicitação de contato.";
    contactSuccess = "Sua solicitação de contato foi recebida com sucesso";
    contactDbError = "Foi encontrado um erro desconhecido. Tente entrar em contato com outros canais de comunicação.";
    contactNameInputLabel = "Seu nome";
    contactNameInput2Label = "Seu nome";
    contactEmailInputLabel = "Número de telefone";
    contactEmailInput2Label = "Número de telefone";
    contactTextareaLabel = "Seu pedido";
    contactTextarea2Label = "Seu pedido";
    contactInfoBtn = "ENVIE SEU PEDIDO";
    contactInfoBtn2 = "ENVIE SEU PEDIDO";
    contactMailInfoText = "O EMAIL";
    contactPhoneInfoText = "TELEFONE";
    whyUsHeader = "Quem somos nós ?";
    whyUsText1 = "Cabelo bem tratado e saudável é o principal indicador de aparência estética. O transplante capilar também visa eliminar as preocupações estéticas da pessoa e preveni-las. Se você deseja fazer mudanças em relação à saúde e aparência do seu cabelo, estamos prontos para te fazer feliz e proporcionar o melhor resultado com nossa equipe.";
    whyUsTex2 = "Desde 2006, realizamos seus procedimentos de transplante capilar como Istanbul Hair Aesthetic utilizando as tecnologias mais recentes, com muito cuidado. Nossa prioridade é a satisfação do paciente.";
    method1Header = "DHI";
    method1Text = "O transplante de cabelo DHI é uma técnica de transplante de cabelo que fornece resultados quase 100% naturais e usa as ferramentas mais avançadas de extração (aquisição) e implantação (transplante) com um diâmetro de 1 mm para uma recuperação mais rápida, com o mínimo de danos aos folículos capilares e proporcionando um processo de cicatrização rápido.";
    method2Header = "SAPPHIRE FUE";
    method2Text = "Com o transplante capilar da unidade folicular, ou seja, a técnica FUE, é possível realizar esse processo retirando cada folículo piloso um a um e transplantando. A técnica de transplante de cabelo FUE fornece uma aparência completamente natural combinando cada fio de cabelo com outros fios de cabelo.";
    method3Header = "ICE FUE";
    method3Text = "Existem diferentes métodos de transplante de cabelo. Um deles é o método ICE FUE. Este método não é diferente de outros métodos de transplante de cabelo, apenas o método de aplicação é diferente.";
    whyUsHeaderText = "Por que nós ?";
    whyUsHeaderText2 = "Desde 2006, realizamos seus procedimentos de transplante capilar como Istanbul Hair Aesthetic utilizando as tecnologias mais recentes, com muito cuidado.";
    whyUsListText1 = "Nosso transplante de cabelo é feito por nossos médicos. Nossas equipes têm experiência em transplante capilar e acompanham de perto todas as inovações da área.";
    whyUsListText2 = "Antes do transplante de cabelo, todos os riscos pessoais são avaliados e os riscos são minimizados a quase zero.";
    whyUsListText3 = "O transplante de cabelo é realizado na sala de cirurgia em condições estéreis.";
    whyUsListText4 = "Os punções que utilizamos são feitos à medida, ao contrário da maioria dos centros, e são selecionados numa só peça e em tamanhos diferentes de acordo com as características do cabelo da pessoa. Portanto, os folículos capilares (enxertos) não são danificados.";
    whyUsListText5 = "Garantimos resultados de 100%.";
    whyUsListText6 = "Nossa prioridade é sua satisfação.";
    beforeAfterHeader = "Antes e depois";
    sliderHeaderText = "Sobre o transplante capilar";
    sliderHeaderSubText = "Algumas informações que compilamos para você ...";
    sliderHeaderSubText2 = "Role para ver nossos outros artigos sobre transplante de cabelo.";
    myHospitalsHeader = "Nossos hospitais";
    myHospitalsSubText = "Trabalhamos com hospitais renomados de Istambul em transplante de cabelo.";
    myHospitalsSubText2 = "Nossa prioridade é sua satisfação ...";
    privilegesHeader = "NOSSOS PRIVILÉGIOS";
    privilegesSubText = "Os privilégios a serem proporcionados aos nossos pacientes com o diferencial estético Istanbul Hair para sua satisfação 100% ...";
    privilegesHeader1 = "A MAIS RECENTE TECNOLOGIA";
    privilegesText1 = "Acompanhamos todos os desenvolvimentos tecnológicos e realizamos todas as nossas aplicações neste sentido.";
    privilegesHeader2 = "SERVIÇO VIP";
    privilegesText2 = "Preocupamo-nos com o conforto de todos os nossos hóspedes e oferecemos opções de serviço Vip em todos os seus tratamentos.";
    privilegesHeader3 = "100% SATISFAÇÃO";
    privilegesText3 = "Atribuímos importância à satisfação dos nossos pacientes e garantimos os nossos procedimentos estéticos em conformidade.";
    privilegesHeader4 = "HOTEL DE LUXO";
    privilegesText4 = "Nossos pacientes são alojados em hotéis luxuosos que reservamos durante seus procedimentos.";
    privilegesHeader5 = "ASSESSOR ESPECIAL";
    privilegesText5 = "O seu consultor médico particular entrará em contato com você todos os meses durante 1 ano e monitorará de perto o seu processo.";
    privilegesHeader6 = "SERVIÇO DE TRANSFERÊNCIA";
    privilegesText6 = "Planejamos os processos de transferência de nossos pacientes para o centro da cidade e oferecemos serviços de transporte gratuitos.";
    commentsHeader = "Os teus comentários";
    commentsSubText = "Envie-nos seus comentários sobre o serviço de transplante de cabelo de seu interesse, que será publicado aqui.";
    contactFooterHeader = "Contate-Nos";
    contactFooterSubText1 = "Consulte-nos de todo o mundo para garantia e satisfação 100% no transplante capilar.";
    contactFooterSubText2 = "”Nossa prioridade é sua satisfação”";
    footerText = "Aqueles que disseram que ”não há outra cidade no mundo tão bonita como Istambul </br> estavam realmente certos. ”(Chateaubriand)";


}
const forRussian = () => {
    homeText = "Домашняя страница";
    aboutText = "насчет нас";
    whyUsText = "Почему&nbsp&nbsp?";
    sliderText = "О трансплантации волос";
    myHospitalsText = "Наши больницы";
    commentsText = "Мнения";
    contactText = "Связаться с нами";
    bannerText = "Мы к вашим услугам в 20 разных городах и многих странах уже 14 лет.";
    oneMinuteAnalizOpened = "Анализ за 1 минуту";
    oneMinuteAnalizClosed = "Анализ за 1 минуту";
    step1Text = "На основе шкал Норвуда Гамильтона и Людвига Савина";
    headerAnaliz1H4 = "Выберите тип выпадения волос";
    notSureBtn = "Не уверен>";
    prevBtn = "<Предыдущая";
    yasH4 = "Сколько тебе лет ?";
    ilacH4 = "Вы регулярно принимаете лекарства?";
    ilacHayirBtn = "Нет";
    ilacEvetBtn = "ДА";
    ilacEvet = "Пожалуйста уточни";
    ilacInputEvet = "СЛЕДУЮЩИЙ";
    hastalikH4 = "У вас есть какие-нибудь болезни?";
    btnHIV = "ВИЧ";
    btnHepatit = "Гепатит С";
    btnKalp = "Хроническая болезнь сердца";
    btnHastalikYok = "Нет";
    analizH3 = "Заполните форму для анализа.";
    analizInputNameSurname = "Имя Фамилия";
    analizInputMail = "Эл. адрес";
    completeBtn = "ПОДАТЬ ЗАЯВЛЕНИЕ";
    analizSuccess = "Анализ успешно завершен!";
    completeText = "Ваша информация дошла до нас. Мы свяжемся с вами как можно скорее в соответствии с предоставленной вами информацией.";
    closeBtn = "БЛИЗКО";
    contactLimitErr = "Пожалуйста, подождите некоторое время после вашего запроса на контакт.";
    contactSuccess = "Ваш запрос на контакт успешно получен";
    contactDbError = "Произошла неизвестная ошибка. Попробуйте связаться с другими каналами связи.";
    contactNameInputLabel = "Ваше имя";
    contactNameInput2Label = "Ваше имя";
    contactEmailInputLabel = "Телефонный номер";
    contactEmailInput2Label = "Телефонный номер";
    contactTextareaLabel = "Ваш запрос";
    contactTextarea2Label = "Ваш запрос";
    contactInfoBtn = "ОТПРАВИТЬ ЗАПРОС";
    contactInfoBtn2 = "ОТПРАВИТЬ ЗАПРОС";
    contactMailInfoText = "ЭЛ. АДРЕС";
    contactPhoneInfoText = "ТЕЛЕФОН";
    whyUsHeader = "Кто мы ?";
    whyUsText1 = "Ухоженные и здоровые волосы - главный показатель эстетичного вида. Трансплантация волос также направлена ​​на устранение эстетических проблем человека и их предотвращение. Если вы хотите внести изменения в здоровье и внешний вид ваших волос, мы готовы порадовать вас и обеспечить лучший результат с нашей командой.";
    whyUsTex2 = "С 2006 года мы проводим ваши процедуры трансплантации волос под брендом Istanbul Hair Aesthetic с использованием новейших технологий и с большой осторожностью. Наш приоритет - удовлетворение пациентов.";
    method1Header = "DHI";
    method1Text = "Трансплантация волос DHI - это метод трансплантации волос, который обеспечивает почти 100% естественные результаты и использует самые современные инструменты для извлечения (забора) и имплантации (трансплантации) диаметром 1 мм для более быстрого восстановления, с наименьшим повреждением волосяных фолликулов и обеспечения быстрого процесса заживления.";
    method2Header = "САПФИР FUE";
    method2Text = "С трансплантацией волос фолликулярной единицы, то есть методом FUE, можно достичь этого процесса, беря каждый волосяной фолликул по одному. Техника пересадки волос FUE обеспечивает полностью естественный вид, сочетая каждую прядь с другими прядями.";
    method3Header = "ICE FUE";
    method3Text = "Существуют разные методы трансплантации волос. Один из них - метод ICE FUE. Этот метод не отличается от других методов пересадки волос, отличается только способ применения.";
    whyUsHeaderText = "Почему нас ?";
    whyUsHeaderText2 = "С 2006 года мы выполняем ваши процедуры трансплантации волос под брендом Istanbul Hair Aesthetic с использованием новейших технологий и с большой осторожностью.";
    whyUsListText1 = "Наша пересадка волос выполняется нашими врачами. Наши команды имеют опыт трансплантации волос и внимательно следят за всеми инновациями в этой области.";
    whyUsListText2 = "Перед трансплантацией волос оцениваются все личные риски, и риски сводятся к минимуму.";
    whyUsListText3 = "Трансплантация волос проводится в операционной в стерильных условиях.";
    whyUsListText4 = "Пуансоны, которые мы используем, изготавливаются по индивидуальному заказу, в отличие от большинства центров, и выбираются в виде одного куска и разных размеров в соответствии с характеристиками волос человека. Следовательно, волосяные фолликулы (трансплантаты) не повреждаются.";
    whyUsListText5 = "Гарантируем 100% результат.";
    whyUsListText6 = "Нашим приоритетом является ваше удовлетворение.";
    beforeAfterHeader = "До и после";
    sliderHeaderText = "О трансплантации волос";
    sliderHeaderSubText = "Некоторая информация, которую мы собрали для вас ...";
    sliderHeaderSubText2 = "Прокрутите, чтобы увидеть другие наши статьи о трансплантации волос.";
    myHospitalsHeader = "Наши больницы";
    myHospitalsSubText = "Мы работаем с известными больницами Стамбула в области трансплантации волос.";
    myHospitalsSubText2 = "Нашим приоритетом является ваше удовлетворение ...";
    privilegesHeader = "НАШИ ПРИВИЛЕГИИ";
    privilegesSubText = "Привилегии, предоставляемые нашим пациентам с эстетической разницей в эстетике Istanbul Hair для вашего 100% удовлетворения ...";
    privilegesHeader1 = "НОВЕЙШИЕ ТЕХНОЛОГИИ";
    privilegesText1 = "Мы следим за всеми технологическими разработками и выполняем все наши заявки в этом направлении.";
    privilegesHeader2 = "VIP СЕРВИС";
    privilegesText2 = "Мы заботимся о комфорте всех наших гостей и предлагаем варианты VIP-обслуживания на протяжении всех процедур.";
    privilegesHeader3 = "100% УДОВЛЕТВОРЕНИЕ";
    privilegesText3 = "Мы придаем большое значение удовлетворению наших пациентов и соответственно гарантируем выполнение эстетических процедур.";
    privilegesHeader4 = "РОСКОШНЫЙ ОТЕЛЬ";
    privilegesText4 = "Наши пациенты размещаются в роскошных отелях, которые мы забронировали во время их процедур.";
    privilegesHeader5 = "СПЕЦИАЛЬНЫЙ СОВЕТНИК";
    privilegesText5 = "Ваш частный медицинский консультант будет связываться с вами каждый месяц в течение 1 года и внимательно следить за вашим процессом.";
    privilegesHeader6 = "ТРАНСФЕРНЫЙ СЕРВИС";
    privilegesText6 = "Мы планируем процесс транспортировки наших пациентов в пределах города и предоставляем бесплатные транспортные услуги.";
    commentsHeader = "Ваши комментарии";
    commentsSubText = "Пожалуйста, поделитесь с нами своим мнением об интересующей вас услуге по трансплантации волос, мы опубликуем ее здесь.";
    contactFooterHeader = "Связаться с нами";
    contactFooterSubText1 = "Свяжитесь с нами со всего мира, чтобы получить 100% гарантию и удовлетворение трансплантацией волос.";
    contactFooterSubText2 = "”Нашим приоритетом является ваше удовлетворение”";
    footerText = "Те, кто сказал, что «нет другого города в мире красивее Стамбула </br>, были действительно правы. ”(Шатобриан)";

};
//Apply
const forApply = () => {
    //navbar
    $("#homeText").text(homeText);
    $("#aboutText").text(aboutText);
    $("#whyUsText").html(whyUsText);
    $("#sliderText").html(sliderText);
    $("#myHospitalsText").text(myHospitalsText);
    $("#commentsText").text(commentsText);
    $("#contactText").text(contactText);
    $("#bannerText").text(bannerText);

    //analiz
    $("#oneMinuteAnalizOpened").text(oneMinuteAnalizOpened);
    $("#oneMinuteAnalizClosed").text(oneMinuteAnalizClosed);
    $("#step1Text").text(step1Text);
    $("#headerAnaliz1H4").text(headerAnaliz1H4);
    $("#notSureBtn").text(notSureBtn);
    $(".prevBtn").text(prevBtn);
    $("#yasH4").text(yasH4);
    $("#ilacH4").text(ilacH4);
    $("#ilacHayirBtn").text(ilacHayirBtn);
    $("#ilacEvetBtn").text(ilacEvetBtn);
    $("#ilacEvet").attr("placeholder", ilacEvet);
    $("#ilacInputEvet").text(ilacInputEvet);
    $("#hastalikH4").text(hastalikH4);
    $("#btnHIV").text(btnHIV);
    $("#btnHepatit").text(btnHepatit);
    $("#btnKalp").text(btnKalp);
    $("#btnHastalikYok").text(btnHastalikYok);
    $("#analizH3").text(analizH3);
    $("#analizInputNameSurname").attr("placeholder", analizInputNameSurname);
    $("#analizInputMail").attr("placeholder", analizInputMail);
    $("#completeBtn").text(completeBtn);
    $("#analizSuccess").text(analizSuccess);
    $("#completeText").text(completeText);
    $("#closeBtn").text(closeBtn);

    //iletişim
    $("#contactNameInputLabel").text(contactNameInputLabel);
    $("#contactNameInput2Label").text(contactNameInput2Label);
    $("#contactEmailInputLabel").text(contactEmailInputLabel);
    $("#contactEmailInput2Label").text(contactEmailInput2Label);
    $("#contactTextareaLabel").text(contactTextareaLabel);
    $("#contactTextarea2Label").text(contactTextarea2Label);
    $("#contactInfoBtn").text(contactInfoBtn);
    $("#contactInfoBtn2").text(contactInfoBtn2);
    $("#contactMailInfoText").text(contactMailInfoText);
    $("#contactPhoneInfoText").text(contactPhoneInfoText);

    //biz kimiz
    $("#whyUsHeader").text(whyUsHeader);
    $("#whyUsText1").text(whyUsText1);
    $("#whyUsTex2").text(whyUsTex2);

    //methodlar
    $("#method1Header").text(method1Header);
    $("#method1Text").text(method1Text);
    $("#method2Header").text(method2Header);
    $("#method2Text").text(method2Text);
    $("#method3Header").text(method3Header);
    $("#method3Text").text(method3Text);

    //neden biz
    $("#whyUsHeaderText").text(whyUsHeaderText);
    $("#whyUsHeaderText2").text(whyUsHeaderText2);
    $("#whyUsListText1").text(whyUsListText1);
    $("#whyUsListText2").text(whyUsListText2);
    $("#whyUsListText3").text(whyUsListText3);
    $("#whyUsListText4").text(whyUsListText4);
    $("#whyUsListText5").text(whyUsListText5);
    $("#whyUsListText6").text(whyUsListText6);

    //öncesi ve sonrası
    $("#beforeAfterHeader").text(beforeAfterHeader);

    //saç ekimine dair
    $("#sliderHeaderText").text(sliderHeaderText);
    $("#sliderHeaderSubText").text(sliderHeaderSubText);
    $("#sliderHeaderSubText2").text(sliderHeaderSubText2);

    //hastanelerimiz
    $("#myHospitalsHeader").text(myHospitalsHeader);
    $("#myHospitalsSubText").text(myHospitalsSubText);
    $("#myHospitalsSubText2").text(myHospitalsSubText2);

    //ayrıcalıklarımız
    $("#privilegesHeader").text(privilegesHeader);
    $("#privilegesSubText").text(privilegesSubText);
    $("#privilegesHeader1").text(privilegesHeader1);
    $("#privilegesText1").text(privilegesText1);
    $("#privilegesHeader2").text(privilegesHeader2);
    $("#privilegesText2").text(privilegesText2);
    $("#privilegesHeader3").text(privilegesHeader3);
    $("#privilegesText3").text(privilegesText3);
    $("#privilegesHeader4").text(privilegesHeader4);
    $("#privilegesText4").text(privilegesText4);
    $("#privilegesHeader5").text(privilegesHeader5);
    $("#privilegesText5").text(privilegesText5);
    $("#privilegesHeader6").text(privilegesHeader6);
    $("#privilegesText6").text(privilegesText6);

    //yorumlar
    $("#commentsHeader").text(commentsHeader);
    $("#commentsSubText").text(commentsSubText);
    //iletişim alt
    $("#contactFooterHeader").text(contactFooterHeader);
    $("#contactFooterSubText1").text(contactFooterSubText1);
    $("#contactFooterSubText2").text(contactFooterSubText2);

    //footer
    $("#footerText").html(footerText);


};


if (currentLang == 'TR') {
    forTurkish();
    forApply();
};
if (currentLang == 'EN') {
    forEnglish();
    forApply();
};
if (currentLang == 'ES') {
    forEspanol();
    forApply();
};
if (currentLang == 'FR') {
    forFrancais();
    forApply();
};
if (currentLang == 'DE') {
    forDeutsch();
    forApply();
};
if (currentLang == 'IT') {
    forItaliano();
    forApply();
};
if (currentLang == 'AR') {
    forArabic();
    forApply();
};
if (currentLang == 'PT') {
    forPortogues();
    forApply();
};
if (currentLang == 'RU') {
    forRussian();
    forApply();
};