var scope, token;
var RandevuId;
var ArayanId;
var dataSource1;
app = window.app = window.app || {};

angular.module('belediyeModul', []).controller('belediyeCTRL', ['$scope', function ($scope) {
    //Arayan + Randevu
    $scope.Tarih = "03.02.2014";
    $scope.Arayanlar = [];
    $scope.Randevular = [];
    $scope.SecilenRandevu = [];
    $scope.SecilenArayan = [];
    $scope.AjandaRandevular = [];

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

   
    AjandaRandevuFetchData(token, today);
    //----------------------------------------------------------------
    $(document).ready(function () {
        kendo.culture('tr-TR');

        $("#scheduler").kendoScheduler({
            date: new Date(today),/*new Date("2014/01/16"),*/
            startTime: new Date("2013/6/13 8:00"),
            endTime: new Date("2013/6/13 22:00"),
            //selectable:true,
            //height: 400,
            views: [
                { type: "day"},
                { type: "week", selected:true, selectedDateFormat: "{0:dd.MM.yyyy} - {1:dd.MM.yyyy}" },
                //"month",
                { type: "agenda", selectedDateFormat: "{0:dd.MM.yyyy} - {1:dd.MM.yyyy}" },
            ],
            editable: false,
            eventTemplate: $("#event-template").html(),
            timezone: "Etc/UTC",
            dataSource: dataSource1
        });

        //console.log($(".k-state-default.k-nav-current")[0].childNodes[0].childNodes[1].firstChild.data);

        // Scheduler in tarihi her değiştiğinde tabstript-aramalar ve tabstript-randevular kısmında bulunan kendodatepicker içeriği de schedulerden seçilen tarihe göre güncellenir.
        $(document).on("click", ".k-link", function () {        /* class adı : ".k-link" , "#scheduler"  .k-scheduler-toolbar*/

            var scheduler2 = $("#scheduler").data("kendoScheduler");

            var AjandaTarih = scheduler2.date();
            //console.log("AjandaTarih : " + scheduler2.date());

            //var t = $(".k-state-default.k-nav-current")[0].childNodes[0].childNodes[1].firstChild.data;
            //var trh = new Date(AjandaTarihDuzenle(t));
            var trh = AjandaTarih;
            //console.log("AA : " + (trh.getDate().toString().length > 1 ? trh.getDate() : ("0" + trh.getDate())) + "." + ((trh.getMonth() + 1).toString().length > 1 ? (trh.getMonth() + 1) : ("0" + (trh.getMonth() + 1))) + "." + trh.getFullYear());

            scope.$apply(function () {
                scope.Tarih = (trh.getDate().toString().length > 1 ? trh.getDate() : ("0" + trh.getDate())) + "." + ((trh.getMonth() + 1).toString().length > 1 ? (trh.getMonth() + 1) : ("0" + (trh.getMonth() + 1))) + "." + trh.getFullYear();
            });
        });

        
        function AjandaTarihDuzenle(tar) {
            var temp;
            var tarih;
            if (tar.indexOf("-") != "-1") {
                //console.log("- li Tarih");
                temp = tar.split("-");
                var k = temp[0].split(".");
                //console.log(k[0] + "   " + (k[1] - 1) + "   " + k[2]);
                tarih = new Date(k[2], k[1], k[0]);
            }
            else {
                //console.log("Normal Tarih");
                temp = tar.split(" ");
                var ay;
                if (temp[1] == "Ocak")    ay = 01;
                if (temp[1] == "Şubat")   ay = 02;
                if (temp[1] == "Mart")    ay = 03;
                if (temp[1] == "Nisan")   ay = 04;
                if (temp[1] == "Mayıs")   ay = 05;
                if (temp[1] == "Haziran") ay = 06;
                if (temp[1] == "Temmuz")  ay = 07;
                if (temp[1] == "Ağustos") ay = 08;
                if (temp[1] == "Eylül")   ay = 09;
                if (temp[1] == "Ekim")    ay = 10;
                if (temp[1] == "Kasım")   ay = 11;
                if (temp[1] == "Aralık")  ay = 12;

                tarih = new Date(temp[2], ay, temp[0]);
                //console.log(temp[0] + "    " + temp[1] + " - " + (ay - 1) + "    " + temp[2]);
            }
            return tarih;
        };
        
    });

    //-------------------------------------------------------------
    scope.$apply(function () {
        scope.Tarih = today;
    });

    $(document).ready(function () {

        var scheduler = $("#scheduler").data("kendoScheduler");

        $("#Tarih").kendoDatePicker({
            value: (today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear()),
            change: function () {
                //console.log("This.Value : " + this.value());
                scheduler.date(this.value());
            }
            //format: "dd/MM/yyyy",
        });

        $(document).on("click", "#Dun", function () {
            scope.$apply(function () {
                scope.Tarih = decreaseFromDate(tarihDuzenleFormataGore(scope.Tarih));
            });
            AjandaTarihDegistir(scope.Tarih);
            fetchData(token);
        });

        $(document).on("click", "#Bugun", function () {
            var t = tarihDuzenleFormataGore(today);
            scope.$apply(function () {
                scope.Tarih = t;
            });
            AjandaTarihDegistir(scope.Tarih);
            fetchData(token);
        });

        $(document).on("click", "#Yarin", function () {

            scope.$apply(function () {
                scope.Tarih = increaseFromDate(tarihDuzenleFormataGore(scope.Tarih));
            });
            AjandaTarihDegistir(scope.Tarih);
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

    fetchData(token);
    $(document).on("change", "#Tarih", function () {
        AjandaTarihDegistir(scope.Tarih);
        fetchData(token);
    });

    //console.log("VALUE : " + $("k-state-default k-nav-current").innerHTML);
    //console.log(document);
});

function AjandaTarihDegistir(tar) {
    var scheduler = $("#scheduler").data("kendoScheduler");
    var dizi = tar.split(".");
    var tarih = new Date(dizi[2], (dizi[1] - 1), dizi[0]);
    //console.log("TAR : " + tarih);
    scheduler.date(tarih);
};

function AjandaRandevuFetchData(accessToken, bugun){
    var dataal;
    //------------------------------------------------------------
    dataSource1 = new kendo.data.SchedulerDataSource({
        batch: true,
        data: dataal,
        transport: {
            read: function (options) {
                $.ajax({
                    type: "POST",
                    data: { 'accessToken': accessToken, Tarih: tarihDuzenleFormataGore(bugun)/*Tarih: "16.01.2011"*/ },
                    url: app.endpoints.ajandaRandevuDetay,
                    dataType: "json",
                    beforeSend: function () { app.application.showLoading(); },
                    complete: function () { app.application.hideLoading(); },
                    crossDomain: true,
                    success: function (result) {
                        if (result != null) {
                            if (scope.AjandaRandevular.length != null){
                                scope.$apply(function () {
                                    scope.AjandaRandevular = result.Randevular;

                                    for (var i = 0; i < scope.AjandaRandevular.length; i++)
                                    {
                                        scope.AjandaRandevular[i].BaslamaTarihi = new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati)));
                                        //DB de her ihtimale karşı bitiş saati girilmediyse başlangıç saatinden 1 saat sonraya bitiş tarihi atanır.
                                        scope.AjandaRandevular[i].BitisTarihi = new Date((new Date(scope.AjandaRandevular[i].BitisTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BitisSaati) == "" ? parseInt(getSaat(scope.AjandaRandevular[i].BaslamaSaati)) + 1 : getSaat(scope.AjandaRandevular[i].BitisSaati), getDakika(scope.AjandaRandevular[i].BitisSaati) == "" ? getDakika(scope.AjandaRandevular[i].BaslamaSaati) : getDakika(scope.AjandaRandevular[i].BitisSaati)));
                                        //console.log("TARIH : " + tarihDuzenle(new Date(scope.AjandaRandevular[i].BaslamaTarihi)));
                                        //console.log("TARIH : " + (new Date(scope.AjandaRandevular[i].BaslamaTarihi)).toString() + " --- " + scope.AjandaRandevular[i].BaslamaSaati);
                                        //console.log("SAAT : " + getSaat(scope.AjandaRandevular[i].BaslamaSaati) + "////" + getDakika(scope.AjandaRandevular[i].BaslamaSaati));
                                        //console.log("SAAT : " + new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati))));

                                        //console.log(scope.AjandaRandevular[i].Id
                                        //+ "    " + scope.AjandaRandevular[i].BaslamaSaati
                                        //+ "    " + scope.AjandaRandevular[i].BitisSaati
                                        //+ " " + scope.AjandaRandevular[i].Konu
                                        //+ " " + scope.AjandaRandevular[i].Hatirlatma
                                        //+ " " + scope.AjandaRandevular[i].Yeri
                                        //+ " " + scope.AjandaRandevular[i].Aciklama
                                        //+ "    " + scope.AjandaRandevular[i].BaslamaTarihi
                                        //+ "    " + scope.AjandaRandevular[i].BitisTarihi
                                        //+ "    " + new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati)))
                                        //+ "    " + new Date((new Date(scope.AjandaRandevular[i].BitisTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BitisSaati), getDakika(scope.AjandaRandevular[i].BitisSaati)))
                                        //);
                                    }
                                });
                                options.success(result.Randevular);
                            }
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
            }
        },
        schema: {
            model: {
                id: "taskId",
                fields: {
                    taskId: { from: "Id", type: "number" },
                    title: { from: "Yeri", defaultValue: "No title", validation: { required: true } },
                    start: { from: "BaslamaTarihi", type: "date" },
                    end: { from: "BitisTarihi", type: "date" },
                    //startTimezone: { from: "BaslamaSaati" },
                    //endTimezone: { from: "BitisSaati" },
                    description: { from: "Konu" }//,
                    //recurrenceId: { from: "RecurrenceID" },
                    //recurrenceRule: { from: "RecurrenceRule" },
                    //recurrenceException: { from: "RecurrenceException" },
                    //ownerId: { from: "projectid", defaultValue: 1 },
                    //isAllDay: { from: "IsAllDay", type: "boolean" }
                }
            }
        }
    });
};

function RandevuClick(value) {

    //console.log($("#tabstrip-randevulaaccessTokenible"));
    token = window.localStorage.getItem("accessToken");
    if (token === undefined || token === null || token === "")
        window.location = "index.html";
    scope = angular.element(document.getElementById("belediyeCTRL")).scope();

    //console.log(value);
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
    //console.log(BaskanAciklama);
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
    //console.log(BaskanSonuc);
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

function getSaat(value) {
    return (value.split(":"))[0];
};

function getDakika(value) {
    return (value.split(":"))[1];
};

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
    else if (item.attr("id") === "ajanda") {
       // $("#tarihList").prependTo("#tabstrip-ajanda");
        //fetchData(token);
        //ajandaRandevuFetchData(token);
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