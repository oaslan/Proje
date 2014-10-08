(function (global) {

    app = global.app = global.app || {};

    
    app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", loading: "<h1>Yükleniyor</h1>", skin: "flat" });
    /*
    app.endpoints = {
        login: "http://155.223.207.39/BelBaskan/api/Auth/Login",
        baskanView: "http://155.223.207.39/BelBaskan/api/Auth/BaskanView",
        arayanDetay: "http://155.223.207.39/BelBaskan/api/Auth/ArayanDetayBilgisiSorgula",
        arayanDetayAciklama: "http://155.223.207.39/BelBaskan/api/Auth/ArayanDetaySonucEkle",
        Cikis: "http://155.223.207.39/BelBaskan/api/Auth/Cikis",
        Rapor1: "http://155.223.207.39/BelBaskan/api/Auth/GiderButceOranBilgisiSorgula",
        Rapor2: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukHazirlananGiderButceOranBilgisiSorgula",
        Rapor3: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukGerceklesenGiderButceOranBilgisiSorgula",
        Rapor4: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukPersonelGideriToplamGelirButcesiOranBilgisiSorgula",
        Rapor5: "http://155.223.207.39/BelBaskan/api/Auth/MudurlukGerceklesenGiderMudurlukButceOranBilgisiSorgula",
        Rapor6: "http://155.223.207.39/BelBaskan/api/Auth/GelirButceOranBilgisiSorgula",
        Rapor7: "http://155.223.207.39/BelBaskan/api/Auth/TahsildarTahsilatBilgisiSorgula",
        Rapor8: "http://155.223.207.39/BelBaskan/api/Auth/GelirTuruTahsilatBilgisiSorgula",
        Rapor9: "http://155.223.207.39/BelBaskan/api/Auth/BankaDurumBilgisiSorgula",


        randevuDetayAciklama: "http://155.223.207.39/BelBaskan/api/Auth/RandevuDetayAciklamaEkle",
        randevuDetay: "http://155.223.207.39/BelBaskan/api/Auth/RandevuDetayBilgisiSorgula"
    };
  */

    //var hostAdress = getIP();
    

    /*function getIP()
    {
        if (window.XMLHttpRequest) {
            var httpObj = new XMLHttpRequest();                         //yeni tarayıcılarda xml dosyasını bu şekilde import edebiliriz
        }
        else {
            var httpObj = new ActiveXObject("Microsoft.XMLHTTP");       //internet explorer'ın bazı eski sürümlerine destek verebilmek için bu şekilde
        }

        httpObj.open("GET", "ip.txt", false);                      //xml dosyamızın adı.
        httpObj.send();

        var veri = httpObj.responseText;
        return veri.toString();
    };*/
    var hostAdress = window.localStorage.getItem("ipAdres");
    //console.log(hostAdress);

    app.endpoints = {
        login: "http://" + hostAdress +"/BelBaskan/api/Auth/Login",
        baskanView: "http://" + hostAdress + "/BelBaskan/api/Auth/BaskanView",
        arayanDetay: "http://" + hostAdress + "/BelBaskan/api/Auth/ArayanDetayBilgisiSorgula",
        arayanDetayAciklama: "http://" + hostAdress + "/BelBaskan/api/Auth/ArayanDetaySonucEkle",
        Cikis: "http://" + hostAdress + "/BelBaskan/api/Auth/Cikis",
        Rapor1: "http://" + hostAdress + "/BelBaskan/api/Auth/GiderButceOranBilgisiSorgula",
        Rapor2: "http://" + hostAdress + "/BelBaskan/api/Auth/MudurlukHazirlananGiderButceOranBilgisiSorgula",
        Rapor3: "http://" + hostAdress + "/BelBaskan/api/Auth/MudurlukGerceklesenGiderButceOranBilgisiSorgula",
        Rapor4: "http://" + hostAdress + "/BelBaskan/api/Auth/MudurlukPersonelGideriToplamGelirButcesiOranBilgisiSorgula",
        Rapor5: "http://" + hostAdress + "/BelBaskan/api/Auth/MudurlukGerceklesenGiderMudurlukButceOranBilgisiSorgula",
        Rapor6: "http://" + hostAdress + "/BelBaskan/api/Auth/GelirButceOranBilgisiSorgula",
        Rapor7: "http://" + hostAdress + "/BelBaskan/api/Auth/TahsildarTahsilatBilgisiSorgula",
        Rapor8: "http://" + hostAdress + "/BelBaskan/api/Auth/GelirTuruTahsilatBilgisiSorgula",
        Rapor9: "http://" + hostAdress + "/BelBaskan/api/Auth/BankaDurumBilgisiSorgula",

        
        randevuDetayAciklama: "http://" + hostAdress + "/BelBaskan/api/Auth/RandevuDetayAciklamaEkle",
        randevuDetay: "http://" + hostAdress + "/BelBaskan/api/Auth/RandevuDetayBilgisiSorgula",
        ajandaRandevuDetay: "http://" + hostAdress + "/BelBaskan/api/Auth/AjandaRandevuDetay"
    };

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
