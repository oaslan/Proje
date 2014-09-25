(function (global) {

    app = global.app = global.app || {};

    
    app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", loading: "<h1>Yükleniyor</h1>", skin: "flat" });

    app.endpoints = {
        login: "http://155.223.206.138/BelBaskan/api/Auth/Login",
        baskanView: "http://155.223.206.138/BelBaskan/api/Auth/BaskanView",
        arayanDetay: "http://155.223.206.138/BelBaskan/api/Auth/ArayanDetayBilgisiSorgula",
        arayanDetayAciklama: "http://155.223.206.138/BelBaskan/api/Auth/ArayanDetaySonucEkle",
        Cikis: "http://155.223.206.138/BelBaskan/api/Auth/Cikis",
        Rapor1: "http://155.223.206.138/BelBaskan/api/Auth/GiderButceOranBilgisiSorgula",
        Rapor2: "http://155.223.206.138/BelBaskan/api/Auth/MudurlukHazirlananGiderButceOranBilgisiSorgula",
        Rapor3: "http://155.223.206.138/BelBaskan/api/Auth/MudurlukGerceklesenGiderButceOranBilgisiSorgula",
        Rapor4: "http://155.223.206.138/BelBaskan/api/Auth/MudurlukPersonelGideriToplamGelirButcesiOranBilgisiSorgula",
        Rapor5: "http://155.223.206.138/BelBaskan/api/Auth/MudurlukGerceklesenGiderMudurlukButceOranBilgisiSorgula",
        Rapor6: "http://155.223.206.138/BelBaskan/api/Auth/GelirButceOranBilgisiSorgula",
        Rapor7: "http://155.223.206.138/BelBaskan/api/Auth/TahsildarTahsilatBilgisiSorgula",
        Rapor8: "http://155.223.206.138/BelBaskan/api/Auth/GelirTuruTahsilatBilgisiSorgula",
        Rapor9: "http://155.223.206.138/BelBaskan/api/Auth/BankaDurumBilgisiSorgula",


        randevuDetayAciklama: "http://155.223.206.138/BelBaskan/api/Auth/RandevuDetayAciklamaEkle",
        randevuDetay: "http://155.223.206.138/BelBaskan/api/Auth/RandevuDetayBilgisiSorgula"
    };
  /*
    app.endpoints = {
        login: "http://localhost/BelBaskan/api/Auth/Login",
        baskanView: "http://localhost/BelBaskan/api/Auth/BaskanView",
        arayanDetay: "http://localhost/BelBaskan/api/Auth/ArayanDetayBilgisiSorgula",
        arayanDetayAciklama: "http://localhost/BelBaskan/api/Auth/ArayanDetaySonucEkle",
        Cikis: "http://localhost/BelBaskan/api/Auth/Cikis",
        Rapor1: "http://localhost/BelBaskan/api/Auth/GiderButceOranBilgisiSorgula",
        Rapor2: "http://localhost/BelBaskan/api/Auth/MudurlukHazirlananGiderButceOranBilgisiSorgula",
        Rapor3: "http://localhost/BelBaskan/api/Auth/MudurlukGerceklesenGiderButceOranBilgisiSorgula",
        Rapor4: "http://localhost/BelBaskan/api/Auth/MudurlukPersonelGideriToplamGelirButcesiOranBilgisiSorgula",
        Rapor5: "http://localhost/BelBaskan/api/Auth/MudurlukGerceklesenGiderMudurlukButceOranBilgisiSorgula",
        Rapor6: "http://localhost/BelBaskan/api/Auth/GelirButceOranBilgisiSorgula",
        Rapor7: "http://localhost/BelBaskan/api/Auth/TahsildarTahsilatBilgisiSorgula",
        Rapor8: "http://localhost/BelBaskan/api/Auth/GelirTuruTahsilatBilgisiSorgula",
        Rapor9: "http://localhost/BelBaskan/api/Auth/BankaDurumBilgisiSorgula",

        
        randevuDetayAciklama: "http://localhost/BelBaskan/api/Auth/RandevuDetayAciklamaEkle",
        randevuDetay: "http://localhost/BelBaskan/api/Auth/RandevuDetayBilgisiSorgula"
    };
    */
})(window);
function onLoad()
{ 
    document.addEventListener('deviceready', onDeviceReady, false);
    checkConnection();
}

function onDeviceReady() {
    //navigator.splashscreen.hide();
    cordova.exec(null, null, "SplashScreen", "hide", []);
    $(document.body).height(window.innerHeight);
}
function checkConnection() {
    //var networkState = navigator.connection.type;
    if (typeof navigator.connection !== "undefined")
    {
        if (navigator.network.connection.type === Connection.NONE) {
            /*navigator.notification.alert("Uygulama internet bağlantısı gerektirir.", function () {
                navigator.app.exitApp();
            }, "Bağlantı Hatası", 'Tamam');*/
            alert("Uygulama internet bağlantısı gerektirir.");
        }
    }
}
