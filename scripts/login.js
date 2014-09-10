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
                navigator.notification.alert("Kullanıcı Adı ve Şifre gerekli!",
                    function () { }, "Giriş Hatası", 'Tamam');

                return;
            }
            $.ajax({
	            type: "POST",
	            url: app.endpoints.login,
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
	                navigator.notification.alert("Kullanıcı adı veya şifre hatası.",
                        function () { }, "Giriş Hatası", 'Tamam');
	                }
	            },
	            error: function () {
	                navigator.notification.alert("Giriş işlemi sırasında bir hata oldu. Lütfen tekrar deneyiniz.",
                    function () { }, "Sistem Hatası", 'Tamam');

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