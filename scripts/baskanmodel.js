var scope, token;
var RandevuId;
var ArayanId;
app = window.app = window.app || {};

angular.module('belediyeModul', []).controller('belediyeCTRL', ['$scope', function ($scope) {
    //Arayan + Randevu
    $scope.Tarih = "03.02.2014";
    $scope.Arayanlar = [];
    $scope.Randevular = [];
    $scope.SecilenRandevu = [];
    $scope.SecilenArayan = []
    
    //Rapor 1
    $scope.Yillar;
    $scope.sorguBaslangicYil;
    $scope.sorguBitisYil;

    $scope.GiderButceOranBilgisiSorguSonuc = [];
    $scope.GiderButceOranBilgisiForm = function(){
        if($scope.sorguBaslangicYil.length < 1 || $scope.sorguBitisYil.length < 1)
        {
            navigator.notification.alert("Rapor için başlangıç ve bitiş yılı seçilmelidir.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguBaslangicYil': $scope.sorguBaslangicYil, 'sorguBitisYil' : $scope.sorguBitisYil },
                url: app.endpoints.Rapor1,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor1-chart", title:$scope.sorguBaslangicYil + " - " +  $scope.sorguBitisYil, data:result };
                        RaporChart1(chartData);
                        $scope.$apply(function(){
                           $scope.GiderButceOranBilgisiSorguSonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor2Sonuc;
    $scope.Rapor2 = function(){
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor2,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor2-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart2(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor2Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor3Sonuc;
    $scope.Rapor3 = function()
    {
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor3,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor3-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart3(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor3Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor4Sonuc;
    $scope.Rapor4 = function(){
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor4,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor4-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart4(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor4Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor5Sonuc;
    $scope.Rapor5 = function()
    {
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor5,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor5-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart5(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor5Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
        
    };
    $scope.Rapor6Sonuc;
    $scope.Rapor6 = function()
    {
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguBaslangicYil': $scope.sorguBaslangicYil,'sorguBitisYil':$scope.sorguBitisYil},
                url: app.endpoints.Rapor6,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor6-chart",title:$scope.sorguBaslangicYil + " - " +$scope.sorguBitisYil, data:result };
                        RaporChart6(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor6Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.BaslangicYil;
    $scope.BitisYil;
    $scope.Rapor7Sonuc;
    $scope.Rapor7 = function()
    {
        console.log($scope.BaslangicYil + " - " + $scope.BitisYil);
        if($scope.BaslangicYil === undefined || $scope.BitisYil === undefined)
        {
            
            navigator.notification.alert("Rapor için başlangıç ve bitiş tarihi belirtilmeli.",
                    function () { }, "Form Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'BaslangicYil': $scope.BaslangicYil.split("-").reverse().join("."),'BitisYil':$scope.BitisYil.split("-").reverse().join(".")},
                url: app.endpoints.Rapor7,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor7-chart",title:$scope.BaslangicYil.split("-").reverse().join(".") + " - " + $scope.BitisYil.split("-").reverse().join("."), data:result };
                        RaporChart7(chartData);
                        $scope.$apply(function(){
                           result.data.unshift({IslemTipiAdi:"Toplam", IslemTipiTahsilatTutari: result.toplam});
                           $scope.Rapor7Sonuc = result.data;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor8Sonuc;
    $scope.Rapor8 = function(){
        
        if($scope.BaslangicYil === undefined || $scope.BitisYil === undefined)
        {
            
            navigator.notification.alert("Rapor için başlangıç ve bitiş tarihi belirtilmeli.",
                    function () { }, "Form Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'BaslangicYil': $scope.BaslangicYil.split("-").reverse().join("."),'BitisYil':$scope.BitisYil.split("-").reverse().join(".")},
                url: app.endpoints.Rapor8,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor8-chart",title:$scope.BaslangicYil.split("-").reverse().join(".") + " - " + $scope.BitisYil.split("-").reverse().join("."), data:result };
                        RaporChart8(chartData);
                        $scope.$apply(function(){
                           //result.data.unshift({IslemTipiAdi:"Toplam", IslemTipiTahsilatTutari: result.toplam});
                           $scope.Rapor8Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor9Sonuc;
    $scope.Rapor9 = function(){
        if($scope.BaslangicYil === undefined)
        {
            
            navigator.notification.alert("Rapor için başlangıç ve bitiş tarihi belirtilmeli.",
                    function () { }, "Form Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'BaslangicYil': $scope.BaslangicYil.split("-").reverse().join(".") },
                url: app.endpoints.Rapor9,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        $scope.$apply(function(){
                           //result.data.unshift({IslemTipiAdi:"Toplam", IslemTipiTahsilatTutari: result.toplam});
                           $scope.Rapor9Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
        
    };
}]);



var RaporChart1 = function(data)
{            
            var harcamaList = Array();
            var butceList = Array();
            var Yillar = Array();
            for(var i = 0; i< data.data.length;i++)
            {
                harcamaList.push(parseFloat(data.data[i].Harcama));
                butceList.push(parseFloat(data.data[i].Butce));
                Yillar.push(parseInt(data.data[i].Yil));
                
            }
            $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: butceList,
                    color: "#f3ac32"
                }, {
                    name: "Harcama",
                    data: harcamaList,
                    color: "#b8b8b8"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    categories: Yillar,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= series.name #: #= value #"
                }
            });
 
};
var RaporChart2 = function(data)
{
    var mudurluk = Array();
    var Butce = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        mudurluk.push(data.data[i].Aciklama);
        Butce.push(parseFloat(data.data[i].MeclisKabul));
    }
    $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: Butce,
                    color: "#5bc0de"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: mudurluk,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category #: #= value #"
                }
            });
 
};
var RaporChart3 = function(data)
{
    var mudurluk = Array();
    var Butce = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        mudurluk.push(data.data[i].Aciklama);
        Butce.push(parseFloat(data.data[i].Harcama));
    }
    $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: Butce,
                    color: "#5bc0de"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: mudurluk,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category #: #= value #"
                }
            });
 
};
var RaporChart4 = function(data)
{
    var mudurluk = Array();
    var Butce = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        mudurluk.push(data.data[i].Aciklama);
        Butce.push(parseFloat(data.data[i].Harcama));
    }
    $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Harcama",
                    data: Butce,
                    color: "#5bc0de"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: mudurluk,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category #: #= value #"
                }
            });
 
};
var RaporChart5 = function(data)
{            
            var harcamaList = Array();
            var butceList = Array();
            var kategori = Array();
            for(var i = 0; i< data.data.length;i++)
            {
                if(data.data[i].KurId === 0)
                    continue;
                harcamaList.push(parseFloat(data.data[i].Harcama));
                butceList.push(parseFloat(data.data[i].Butce));
                kategori.push(data.data[i].Aciklama);
                
            }
            $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: butceList,
                    color: "#f3ac32"
                }, {
                    name: "Harcama",
                    data: harcamaList,
                    color: "#b8b8b8"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: kategori,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category # ( #= series.name # ) : #= value #"
                }
            });
 
};
var RaporChart6 = function(data)
{            
            var harcamaList = Array();
            var butceList = Array();
            var Yillar = Array();
            for(var i = 0; i< data.data.length;i++)
            {
                harcamaList.push(parseFloat(data.data[i].Tahsilat));
                butceList.push(parseFloat(data.data[i].Butce));
                Yillar.push(parseInt(data.data[i].Yil));
                
            }
            $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: butceList,
                    color: "#f3ac32"
                }, {
                    name: "Tahsilat",
                    data: harcamaList,
                    color: "#b8b8b8"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    categories: Yillar,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= series.name #: #= value #"
                }
            });
 
};
var RaporChart7 = function(ch)
{
    var data = [];
    var obj;
    for(var i =0;i<ch.data.data.length;i++)
    {
        obj = {
            category:ch.data.data[i].IslemTipiAdi,
            value:((parseFloat(ch.data.data[i].IslemTipiTahsilatTutari) * 100) / ch.data.toplam)
        };
        //console.log(obj);
        data.push(obj);
    }
    //console.log(data);
    $(ch.domId).kendoChart({
        title: {
            text: ch.title
        },
        legend: {
           position: "bottom"
        },
        seriesDefaults: {
            labels: {
                template: "#= category # - #= kendo.format('{0:P}', percentage)#",
                position: "outsideEnd",
                visible: false,
                background: "transparent"
            }
        },
        series: [{
            type: "pie",
            data: data}],
        tooltip: {
            visible: true,
            template: "#= category # - #= kendo.format('{0:P}', percentage) #"
        }
     });
};
var RaporChart8 = function(data)
{
    var kalemler = Array();
    var tutarlar = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        kalemler.push(data.data[i].GelirAdi);
        tutarlar.push(parseFloat(data.data[i].Tutar));
    }
    $(data.domId).kendoChart({
        title: {
            text: data.title
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "bar"
        },
        series: [{
            name: "Tutar",
            data: tutarlar,
            color: "#357EBD"
        }],
        valueAxis: {
            visible:false,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            visible:false,
            categories: kalemler,
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= category #: #= value #"
        }
    });
};

$(function () {
    $.ajaxSetup({
        beforeSend: function () { app.application.showLoading(); },
        complete: function () { app.application.hideLoading(); },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                navigator.notification.alert("Uygulama internet bağlantısı gerektirir.", function () {
                    navigator.app.exitApp();
                }, "Bağlantı Hatası", 'Tamam');
            } else if (jqXHR.status == 404) {
                //navigator.notification.alert("Servis noktası bulunamadı.",function () { }, "Bağlantı Hatası", 'Tamam');
                alert("Servis noktası bulunamadı.");
            } else if (jqXHR.status >= 500) {
                //navigator.notification.alert("Serviste sunucu hatası.",function () { }, "Sistem Hatası", 'Tamam');
                alert("Serviste sunucu hatası.");
            } else if (exception === 'parsererror') {
                //navigator.notification.alert("Servisten dönen kayıt hatalı.",function () { }, "Sistem Hatası", 'Tamam');
                alert("Servisten dönen kayıt hatalı.");
            } else if (exception === 'timeout') {
                //navigator.notification.alert("İstek zaman aşımına uğradı.",function () { }, "Zaman aşımı", 'Tamam');
                alert("İstek zaman aşımına uğradı.");
            } else if (exception === 'abort') {
                //navigator.notification.alert("İstek iptal edildi.",function () { }, "Sistem Hatası", 'Tamam');
                alert("İstek iptal edildi.");
            } else {
                //navigator.notification.alert("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",function () { }, "Bilinmeyen Hata", 'Tamam');
                alert("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
            }
        }
    });
    //console.log($("#tabstrip-randevulaaccessTokenible"));
    token = window.localStorage.getItem("accessToken");
    if (token === undefined || token === null || token === "")
        window.location = "index.html";
    scope = angular.element(document.getElementById("belediyeCTRL")).scope();


    // 16,09,2014 DateTimePicker -----------------------------------------------

    var now = new Date();
    /*var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    */
    var today = new Date();
    today = new Date(today);
    var nextDay = new Date();

    $(function () {
        kendo.culture('tr-TR');
    });

    $(document).ready(function () {

        $("#Tarih").kendoDatePicker({
            value: (today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear())
            //format: "dd/MM/yyyy",
        });

        $(document).on("click", "#Dun", function () {

            scope.$apply(function () {
                scope.Tarih = decreaseFromDate(tarihDuzenleFormataGore(scope.Tarih));
            });
            fetchData(token);
        });

        $(document).on("click", "#Bugun", function () {
            var t = tarihDuzenleFormataGore(today);
            scope.$apply(function () {
                scope.Tarih = t;
            });
            fetchData(token);
        });

        $(document).on("click", "#Yarin", function () {

            scope.$apply(function () {
                scope.Tarih = increaseFromDate(tarihDuzenleFormataGore(scope.Tarih));
            });
            fetchData(token);
        });

        //Tarih.value(today);
        //today.setDate(today.getDate() + 1);
    });


    //Sorgu Başlangıç-Bitiş yılları -5
    var yillar = Array();
    scope.$apply(function () {
        for (var i = now.getFullYear() - 8; i <= now.getFullYear() ; i++) {
            yillar.push(i);
        }
        scope.Yillar = yillar;
        scope.sorguBaslangicYil = yillar[0];
        scope.sorguBitisYil = yillar[yillar.length - 1];
    });

    scope.$apply(function () {
        scope.Tarih = today;
    });
    fetchData(token);
    $(document).on("change", "#Tarih", function () {
        fetchData(token);
    });
    //console.log(document);
});



function RandevuClick(value) {

    //console.log($("#tabstrip-randevulaaccessTokenible"));
    token = window.localStorage.getItem("accessToken");
    if (token === undefined || token === null || token === "")
        window.location = "index.html";
    scope = angular.element(document.getElementById("belediyeCTRL")).scope();

    console.log(value);
    RandevuId = $(value).find("#SecilenRandevuId")[0].innerHTML;
    //console.log(RandevuId);

    $.ajax({
        type: "POST",
        data: { 'accessToken': token, SecilenRandevuId: RandevuId },
        url: app.endpoints.randevuDetay,
        dataType: "json",
        crossDomain: true,
        success: function (result) {
            //console.log(result);
            if (result != null) {
                scope.$apply(function () {
                    scope.SecilenRandevu = result.SecilenRandevu;
                    window.location.href = "#RandevuDetay";
                });
            }
            else {
                window.localStorage.removeItem("accessToken");
                window.location = "index.html";
            }
        },
        error: function () {
            alert("Randevu seçilirken bir hata meydana geldi.");
        }
    });
};

function ArayanClick(value)
{
    //console.log($("#tabstrip-randevulaaccessTokenible"));
    token = window.localStorage.getItem("accessToken");
    if (token === undefined || token === null || token === "")
        window.location = "index.html";
    scope = angular.element(document.getElementById("belediyeCTRL")).scope();

    ArayanId = $(value).find("#SecilenArayanId")[0].innerHTML;
    //console.log(ArayanId);

    $.ajax({
        type: "POST",
        data: { 'accessToken': token, SecilenArayanId: ArayanId },
        url: app.endpoints.arayanDetay,
        dataType: "json",
        crossDomain: true,
        success: function (result) {
            //console.log(result);
            if (result != null) {
                scope.$apply(function () {
                    scope.SecilenArayan = result.SecilenArayan;
                    window.location.href = "#ArayanDetay";
                });
            }
            else {
                window.localStorage.removeItem("accessToken");
                window.location = "index.html";
            }
        },
        error: function () {
            alert("Arayan kişi seçilirken bir hata meydana geldi.");
        }
    });
};

function RandevuAciklamaEkle() {
    var BaskanAciklama = document.getElementById('AciklamaId').value;
    var RandevuAciklama = document.getElementById('RandevuAciklamaData').innerHTML;
    console.log(BaskanAciklama);
    //console.log(RandevuId);
    //console.log(RandevuAciklama);

    if (BaskanAciklama.toString() == "" || BaskanAciklama == null ) {
        /*navigator.notification.alert("Kaydet butonuna basmadan önce Açıklama Yazınız!",
                 function () { }, "Veri Ekleme Hatası", 'Tamam');*/
        alert("Kaydet butonuna basmadan önce Açıklama Yazınız!");
    }
    else {
        $.ajax({
            type: "POST",
            data: { 'accessToken': token, SecilenRandevuId: RandevuId, BaskanAciklamasi: BaskanAciklama, MevcutRandevuAciklama: RandevuAciklama },
            url: app.endpoints.randevuDetayAciklama,
            dataType: "json",
            crossDomain: true,
            success: function (result) {
                //console.log(result);
                if (result != null) {
                    scope.$apply(function () {
                        scope.SecilenRandevu = result.SecilenRandevu;
                        window.location.href = "#RandevuDetay";
                    });
                }
                else {
                    window.localStorage.removeItem("accessToken");
                    window.location = "index.html";
                }
            },
            error: function () {
                alert("Randevu açıklama eklenirken bir hata meydana geldi.");
            }
        });
    }

};

function ArayanSonucEkle()
{
    var BaskanSonuc = document.getElementById('SonucId').value;
    var ArayanSonuc = document.getElementById('ArayanSonucData').innerHTML;
    console.log(BaskanSonuc);
    //console.log(ArayanId);
    //console.log(ArayanSonuc);

    if (BaskanSonuc.toString() == "" || BaskanSonuc == null) {
        /*navigator.notification.alert("Kaydet butonuna basmadan önce Sonuç Yazınız!",
                 function () { }, "Veri Ekleme Hatası", 'Tamam');*/
        alert("Kaydet butonuna basmadan önce Sonuç Yazınız!");
    }
    else {
        $.ajax({
            type: "POST",
            data: { 'accessToken': token, SecilenArayanId: ArayanId, BaskanSonuc: BaskanSonuc, MevcutArayanSonuc: ArayanSonuc },
            url: app.endpoints.arayanDetayAciklama,
            dataType: "json",
            crossDomain: true,
            success: function (result) {
                //console.log(result);
                if (result != null) {
                    scope.$apply(function () {
                        scope.SecilenArayan = result.SecilenArayan;
                        window.location.href = "#ArayanDetay";
                    });
                }
                else {
                    window.localStorage.removeItem("accessToken");
                    window.location = "index.html";
                }
            },
            error: function () {
                alert("Arayan sonuç eklerken bir hata meydana geldi.");
            }
        });
    }
};



function tarihDuzenle(value) {
    var day;
    var month;
    var year = value.getFullYear(); 
    if ((value.getDate().toString().length > 1) && ((value.getMonth() + 1).toString().length > 1))
    {
        day = value.getDate();
        month = (value.getMonth() + 1);
    }
    else if ((!(value.getDate().toString().length > 1)) && ((value.getMonth() + 1).toString().length > 1))
    {
        day = "0" + value.getDate();
        month = (value.getMonth() + 1);
    }
    else if ((value.getDate().toString().length > 1) && (!((value.getMonth() + 1).toString().length > 1)))
    {
        day = value.getDate();
        month = "0" + (value.getMonth() + 1);
    }

    return (day + "." + month + "." + year);
    //var day = ("0" + value.getDate()).slice(-2);
    //var month = ("0" + (value.getMonth() + 1)).slice(-2);
    //var year = value.getFullYear();
};

function tarihDuzenleFormataGore(value){
    if (value.toString().length > 10) {
        return tarihDuzenle(value);
    }
    return value;
};

//Date decrease :
function decreaseFromDate(tar) {
    var dateString = (tar).split('.');
    var date = new Date(dateString[2], parseInt(dateString[1]) - 1, dateString[0]);
    return (formatDate(addDays(date, -1)));
}

//Date increase :
function increaseFromDate(tar) {
    var fromDateString = (tar).split('.');
    var fromDate = new Date(fromDateString[2], parseInt(fromDateString[1]) - 1, fromDateString[0]);
    return (formatDate(addDays(fromDate, 1)));
}

function formatDate(date) {
    return ("00" + date.getDate()).slice(-"00".length) + '.' + ("00" + (date.getMonth() + 1)).slice(-"00".length) + '.' + date.getFullYear();
}

function addDays(date, days) {
    var today = new Date(date);
    var tomorrow = new Date();
    tomorrow.setTime(today.getTime() + (days * 24 * 60 * 60 * 1000));
    return tomorrow;
}

/*function getDate() {
    return scope.Tarih.split("-").reverse().join(".");
};*/

function getTarih() {
    //console.log("FETCH : " + tarihDuzenleFormataGore(scope.Tarih));
    return tarihDuzenleFormataGore(scope.Tarih);
};

function fetchData(accessToken) {
        //var data = { accessToken: accessToken };
        $.ajax({
            type: "POST",
            data: { 'accessToken': accessToken, Tarih: getTarih() },
            url: app.endpoints.baskanView,
            dataType: "json",
            beforeSend: function () { app.application.showLoading(); },
            complete: function () {  app.application.hideLoading(); },
			crossDomain: true,
            success: function (result) {
                //console.log(result);
                if (result != null) {
                    scope.$apply(function () {
                        scope.Arayanlar = result.Arayanlar;
                        scope.Randevular = result.Randevular;
                    });
                }
                else {
                    window.localStorage.removeItem("accessToken");
                    window.location = "index.html";
                }
            },
            error: function () {
                alert("Veriler alınırken bir hata meydana geldi.");
            }
        });
    };

//tab select
function onSelect(e) {
    var item = $(e.item);
    //console.log(item);
    if (item.attr("id") === "arama") {
        $("#tarihList").prependTo("#tabstrip-aramalar");
        fetchData(token);
    }
    else if (item.attr("id") === "randevu") {
        $("#tarihList").prependTo("#tabstrip-randevular");
        fetchData(token);
    }
    else if (item.attr("id") === "cikis") {
        $.ajax({
            type: "POST",
            data: { '': token },
            url: app.endpoints.Cikis,
            dataType: "json",
            beforeSend: function () { app.application.showLoading(); },
            complete: function () {
                app.application.hideLoading();
                window.localStorage.removeItem("accessToken");
                window.location = "index.html";
            },
            crossDomain: true,
            success: function (result) {
            }
        });
    }
};