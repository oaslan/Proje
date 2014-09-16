(function (global) {

    app = global.app = global.app || {};

    
    app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", loading: "<h1>Yükleniyor</h1>", skin: "flat" });
    app.endpoints = {
        login: "http://localhost/BelBaskan/api/Auth/Login",
        baskanView: "http://localhost/BelBaskan/api/Auth/BaskanView",
        Cikis: "http://localhost/BelBaskan/api/Auth/Cikis",
        Rapor1: "http://155.223.207.39/BelBaskan/api/Auth/GiderButceOranBilgisiSorgula",
        Rapor2: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukHazirlananGiderButceOranBilgisiSorgula",
        Rapor3: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukGerceklesenGiderButceOranBilgisiSorgula",
        Rapor4: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukPersonelGideriToplamGelirButcesiOranBilgisiSorgula",
        Rapor5: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukGerceklesenGiderMudurlukButceOranBilgisiSorgula",
        Rapor6: "http://155.223.207.39/BelBaskan/api/Auth/GelirButceOranBilgisiSorgula",
        Rapor7: "http://155.223.207.39/BelBaskan/api/Auth/TahsildarTahsilatBilgisiSorgula",
        Rapor8: "http://155.223.207.39/BelBaskan/api/Auth/GelirTuruTahsilatBilgisiSorgula",
        Rapor9: "http://155.223.207.39/BelBaskan/api/Auth/BankaDurumBilgisiSorgula"
    };
})(window);
function onLoad()
{ 
    document.addEventListener('deviceready', onDeviceReady, false);
    checkConnection();
}

function onDeviceReady() {
    navigator.splashscreen.hide();
    $(document.body).height(window.innerHeight);
}
function checkConnection() {
    var networkState = navigator.connection.type;
    if (networkState === Connection.NONE) {
        navigator.notification.alert("Uygulama internet bağlantısı gerektirir.", function () {
            navigator.app.exitApp();
        }, "Bağlantı Hatası", 'Tamam');
    }
}
