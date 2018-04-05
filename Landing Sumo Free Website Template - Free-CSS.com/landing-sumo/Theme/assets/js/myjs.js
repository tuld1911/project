window.onload = function () {

    svmChart = new CanvasJS.Chart("svmChart", {
        animationEnabled: true,
        title: {
            text: "Biểu đồ phân loại nhóm",
            fontFamily: 'Roboto'
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: null, label: "Chính Trị"},
                {y: null, label: "Đời Sống"},
                {y: null, label: "Khoa Học"},
                {y: null, label: "Kinh Doanh"},
                {y: null, label: "Pháp Luật"},
                {y: null, label: "Sức Khỏe"},
                {y: null, label: "Thế Giới"},
                {y: null, label: "Thể Thao"},
                {y: null, label: "Văn Hóa"},
                {y: null, label: "Vi Tính"}
            ]
        }]
    });
    svmChart.render();

    naiveChart = new CanvasJS.Chart("naiveChart", {
        animationEnabled: true,
        title: {
            text: "Biểu đồ phân loại nhóm",
            fontFamily: 'Roboto'
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: null, label: "Chính Trị"},
                {y: null, label: "Đời Sống"},
                {y: null, label: "Khoa Học"},
                {y: null, label: "Kinh Doanh"},
                {y: null, label: "Pháp Luật"},
                {y: null, label: "Sức Khỏe"},
                {y: null, label: "Thế Giới"},
                {y: null, label: "Thể Thao"},
                {y: null, label: "Văn Hóa"},
                {y: null, label: "Vi Tính"}
            ]
        }]
    });
    naiveChart.render();
    /*1*/
    chinhtriChart = new CanvasJS.Chart("chinhtriChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    chinhtriChart.render();
    /*2*/
    doisongChart = new CanvasJS.Chart("doisongChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    doisongChart.render();
    /*3*/
    khoahocChart = new CanvasJS.Chart("khoahocChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    khoahocChart.render();
    /*4*/
    kinhdoanhChart = new CanvasJS.Chart("kinhdoanhChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    kinhdoanhChart.render();
    /*5*/
    phapluatChart = new CanvasJS.Chart("phapluatChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    phapluatChart.render();
    /*6*/
    suckhoeChart = new CanvasJS.Chart("suckhoeChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    suckhoeChart.render();
    /*7*/
    thegioiChart = new CanvasJS.Chart("thegioiChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    thegioiChart.render();
    /*8*/
    thethaoChart = new CanvasJS.Chart("thethaoChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    thethaoChart.render();
    /*9*/
    vanhoaChart = new CanvasJS.Chart("vanhoaChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    vanhoaChart.render();
    /*10*/
    vitinhChart = new CanvasJS.Chart("vitinhChart", {
        animationEnabled: true,

        title: {
            text: null
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: null
        },
        data: [{
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                {y: 3, label: "Sweden"},
                {y: 7, label: "Taiwan"},
                {y: 5, label: "Russia"},
                {y: 9, label: "Spain"},
                {y: 7, label: "Brazil"},
                {y: 7, label: "India"},
                {y: 9, label: "Italy"},
                {y: 8, label: "Australia"},
                {y: 11, label: "Canada"},
                {y: 15, label: "South Korea"}
            ]
        }]
    });
    vitinhChart.render();
}

function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
}


var app = angular.module('myApp', []);
app.controller('formCtrl', function ($scope, $http) {
    $scope.submitText = function () {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:5000/predict?value=' + document.getElementById("inputTextToSave").value
        }).then(function successCallback(response) {
            document.getElementById('txtSVMType').classList.remove("animated");
            document.getElementById('txtSVMType').classList.remove("zoomIn");
            void document.getElementById('txtSVMType').offsetWidth;
            document.getElementById('txtSVMType').classList.add("animated");
            document.getElementById('txtSVMType').classList.add("zoomIn");
            document.getElementById('txtSVMType').innerHTML = response.data.result;
            document.getElementById('txtSVMType').style.color = "black";
            var proba = response.data.proba;
            for (i = 0; i < 10; i++) {
                svmChart.options.data[0].dataPoints[i].y = proba[i] * 100;
            }
            svmChart.render();
        }, function errorCallback(response) {
            alert('server is not response !')
        });

        $http({
            method: 'GET',
            url: 'http://127.0.0.1:5000/predict_naive?value=' + document.getElementById("inputTextToSave").value
        }).then(function successCallback(response) {
            document.getElementById('txtNaiveType').classList.remove("animated");
            document.getElementById('txtNaiveType').classList.remove("zoomIn");
            void document.getElementById('txtNaiveType').offsetWidth;
            document.getElementById('txtNaiveType').classList.add("animated");
            document.getElementById('txtNaiveType').classList.add("zoomIn");
            document.getElementById('txtNaiveType').innerHTML = response.data.result;
            document.getElementById('txtNaiveType').style.color = "black";
            var proba = response.data.proba;
            for (i = 0; i < 10; i++) {
                naiveChart.options.data[0].dataPoints[i].y = proba[i] * 100;
            }
            naiveChart.render();
        }, function errorCallback(response) {
            alert('server is not response !');
        });

        $http({
            method: 'POST',
            url: 'https://cors-anywhere.herokuapp.com/' + 'http://magizbox.com:9386/classification',
            header: {
                "Content-Type": "application/json"
            },
            data: {
                'text': document.getElementById("inputTextToSave").value,
                'domain': "general"
            }
        }).then(function successCallback(response) {
            alert(response.data.output)
        }, function errorCallback(response) {
            alert('server is not response !');
        });
    };
});

/*pie shows center when switching tabs*/
$('#myTab').on('shown.bs.tab', function () {
    naiveChart.render();
    $('#naiveTab').off();
    svmChart.render();
    $('#svmTab').off();
})

/*chart shows right layout when switching tabs*/
$('#coefTab').on('shown.bs.tab', function () {
    chinhtriChart.render();
    $('#chinhtri').off();
    doisongChart.render();
    $('#doisong').off();
    khoahocChart.render();
    $('#khoahoc').off();
    kinhdoanhChart.render();
    $('#kinhdoanh').off();
    phapluatChart.render();
    $('#phapluat').off();
    suckhoeChart.render();
    $('#suckhoe').off();
    thegioiChart.render();
    $('#thegioi').off();
    thethaoChart.render();
    $('#thethao').off();
    vanhoaChart.render();
    $('#vanhoa').off();
    vitinhChart.render();
    $('#vitinh').off();
})