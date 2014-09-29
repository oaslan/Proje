(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        Kullanici: "",
        Sifre: "",
        onLogin: function () {

            var that = this,
                Kullanici = that.get("Kullanici").trim(),
                Sifre = that.get("Sifre").trim();

            if (Kullanici === "" || Sifre === "") {
                /*navigator.notification.alert("Kullanıcı Adı ve Şifre gerekli!",
                    function () { }, "Giriş Hatası", 'Tamam');*/
                alert("Kullanıcı Adı ve Şifre gerekli!");
                return;
            }
            $.ajax({
	            type: "POST",
                url: app.endpoints.login,
	            //url: "http://localhost/BelBaskan/api/Auth/Login",
	            data: { "Kullanici" : Kullanici, "Sifre" : Sifre },
	            beforeSend: function () { app.application.showLoading(); },
	            complete: function () {  app.application.hideLoading(); },
	            dataType: "json",
	            crossDomain: true,
	            success: function (d) {
	                if (d.durum) {
	                    window.localStorage.setItem("accessToken", d.accessToken);
                        console.log(window.localStorage.getItem("accessToken"));
	                    window.location = "index_logged.html";
	                }
	                else {
	                /*navigator.notification.alert("Kullanıcı adı veya şifre hatası.",
                        function () { }, "Giriş Hatası", 'Tamam');*/
	                    alert(d.mesaj);
	                }
	            },
	            error: function () {
	                /*navigator.notification.alert("Giriş işlemi sırasında bir hata oldu. Lütfen tekrar deneyiniz.",
                    function () { }, "Sistem Hatası", 'Tamam');*/
	                alert("Giriş işlemi sırasında bir hata oldu. Lütfen tekrar deneyiniz.");

	            }
	        });
            //that.set("isLoggedIn", true);
        },
        onInit : function(){
             
            var token = window.localStorage.getItem("accessToken");
            if(token !== undefined && token !== null && token !== "")
            {
                window.location="index_logged.html";
            }
        },
        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
        },

        clearForm: function () {
            var that = this;

            that.set("Kullanici", "");
            that.set("Sifre", "");
        },

        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onLogin();
            }
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
    app.loginService.viewModel.onInit();

    
})(window);


function MevcutIPGoster()
{
    //var mevcutIP = GetXml();
    var kontrol = window.localStorage.getItem("ipAdres");
    //console.log("adres : " + kontrol);
    if(kontrol === null)
        window.localStorage.setItem("ipAdres", "localhost");

    //var mevcutIP = getIP();
    var mevcutIP = window.localStorage.getItem("ipAdres");
    console.log(mevcutIP);
    document.getElementById("MevcutServisIP").textContent = mevcutIP.toString();
};

function Kaydet(value) {
    var yeniIP = document.getElementById('yeniServisIP').value;
    console.log(yeniIP);

    //YeniIP değeri xml e yada dosyaya yazdırılmalı bu kısımda
    //setIP(yeniIP);
    window.localStorage.setItem("ipAdres", yeniIP.toString());


    document.getElementById('yeniServisIP').value = "";
    window.location.href = "#tabstrip-login";
};

function Iptal()
{
    window.location.href = "#tabstrip-login";
};


/*function setIP() {
    if (window.XMLHttpRequest) {
        var httpObj = new XMLHttpRequest();                         //yeni tarayıcılarda xml dosyasını bu şekilde import edebiliriz
    }
    else {
        var httpObj = new ActiveXObject("Microsoft.XMLHTTP");       //internet explorer'ın bazı eski sürümlerine destek verebilmek için bu şekilde
    }
    var s = httpObj.CreateTextFile("ip.txt", true);
    s.WriteLine('Hello');
    s.Close();
}*/


function setIP(yeniIP)
{
    "use strict";
    var fs = require("fs");
    fs.writeFile("ip.txt", yeniIP.toString(), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
};


function getIP() {
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
};


