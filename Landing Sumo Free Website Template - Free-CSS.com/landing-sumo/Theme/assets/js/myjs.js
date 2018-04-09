window.onload = function () {
    compareChart = new CanvasJS.Chart("compareChart", {
        animationEnabled: true,
        title:{
            text: "So sánh score của 2 mô hình",
            fontFamily: 'Roboto'
        },
        axisY: {
            title: null
        },
        legend: {
            cursor:"pointer",
            itemclick : toggleDataSeries
        },
        toolTip: {
            shared: true,
            content: toolTipFormatter
        },
        data: [{
            type: "bar",
            showInLegend: true,
            name: "SVM",
            color: "gold",
            dataPoints: [
                { y: 89.4, label: "F1 Score" },
                { y: 91.7, label: "Score" }
            ]
        },
            {
                type: "bar",
                showInLegend: true,
                name: "Naive Bayes",
                color: "silver",
                dataPoints: [
                    { y: 87.7, label: "F1 Score" },
                    { y: 89.8, label: "Score" }
                ]
            }]
    });
    compareChart.render();

    function toolTipFormatter(e) {
        var str = "";
        var total = 0 ;
        var str3;
        var str2 ;
        for (var i = 0; i < e.entries.length; i++){
            var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
        }
        str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
        return (str2.concat(str));
    }

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        compareChart.render();
    }

    topicTrainChart = new CanvasJS.Chart("topicTrainChart", {
        animationEnabled: true,
        title: {
            text: "Biểu đồ phần trăm chủ đề của dữ liệu training",
            fontFamily: 'Roboto'
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 15.5, label: "Chính Trị"},
                {y: 9.4, label: "Đời Sống"},
                {y: 5.4, label: "Khoa Học"},
                {y: 7.6, label: "Kinh Doanh"},
                {y: 11.5, label: "Pháp Luật"},
                {y: 10, label: "Sức Khỏe"},
                {y: 8.6, label: "Thế Giới"},
                {y: 15.7, label: "Thể Thao"},
                {y: 9.1, label: "Văn Hóa"},
                {y: 7.8, label: "Vi Tính"}
            ]
        }]
    });
    topicTrainChart.render();

    topicTestChart = new CanvasJS.Chart("topicTestChart", {
        animationEnabled: true,
        title: {
            text: "Biểu đồ phần trăm chủ đề của dữ liệu testing",
            fontFamily: 'Roboto'
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 15, label: "Chính Trị"},
                {y: 4.1, label: "Đời Sống"},
                {y: 4.2, label: "Khoa Học"},
                {y: 10.5, label: "Kinh Doanh"},
                {y: 7.5, label: "Pháp Luật"},
                {y: 10.8, label: "Sức Khỏe"},
                {y: 13.4, label: "Thế Giới"},
                {y: 13.3, label: "Thể Thao"},
                {y: 12.4, label: "Văn Hóa"},
                {y: 8.8, label: "Vi Tính"}
            ]
        }]
    });
    topicTestChart.render();

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
                {y: 28613, label: "Công chính"},
                {y: 28619, label: "Công chức"},
                {y: 29529, label: "Cướp"},
                {y: 33173, label: "Di tích"},
                {y: 35446, label: "Dân"},
                {y: 84951, label: "Nghiên cứu"},
                {y: 105807, label: "Quan chức"},
                {y: 106185, label: "Qui hoạch"},
                {y: 129229, label: "Toàn quốc"},
                {y: 138098, label: "Tấn công"}
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
                {y: 29411, label: "Cơ thể"},
                {y: 34870, label: "Du khách"},
                {y: 81353, label: "Món"},
                {y: 85307, label: "Ngon"},
                {y: 85697, label: "Nguyên liệu"},
                {y: 103312, label: "Phẫu thuật"},
                {y: 118485, label: "Sáng tác"},
                {y: 120648, label: "Tâm sự"},
                {y: 152139, label: "Âm nhạc"},
                {y: 159445, label: "Ẩm thực"},
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
                {y: 17751, label: "Bệnh nhân"},
                {y: 28828, label: "Công nguyên"},
                {y: 77910, label: "Microsoft"},
                {y: 81058, label: "Máy tính"},
                {y: 93074, label: "Nhận định"},
                {y: 107583, label: "Ra đời"},
                {y: 109647, label: "Robot"},
                {y: 126490, label: "Thị trường"},
                {y: 130987, label: "Trái đất"},
                {y: 155745, label: "Đường"}
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
                {y: 21642, label: "Chiếm đoạt"},
                {y: 29838, label: "Cảnh sát"},
                {y: 91867, label: "Nhà máy"},
                {y: 93090, label: "Nhập khẩu"},
                {y: 126490, label: "Thị trường"},
                {y: 129293, label: "Thành phố"},
                {y: 148119, label: "WTO"},
                {y: 153672, label: "Điều tra"},
                {y: 156469, label: "Đầu tư"},
                {y: 159345, label: "Ảo"}
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
                {y: 17815, label: "Bị cáo"},
                {y: 21642, label: "Chiếm đoạt"},
                {y: 74046, label: "Lừa đảo"},
                {y: 101005, label: "Pháp luật"},
                {y: 101075, label: "Phát hiện"},
                {y: 106289, label: "Quy chế"},
                {y: 120690, label: "Tòa án nhân dân"},
                {y: 122049, label: "Thanh tra"},
                {y: 137623, label: "Tư pháp"},
                {y: 153672, label: "Điều tra"}
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
                {y: 17714, label: "Bệnh"},
                {y: 24614, label: "Chợ Rẫy"},
                {y: 28712, label: "Công nghệ"},
                {y: 41592, label: "Gan"},
                {y: 48092, label: "HIV"},
                {y: 85697, label: "Nguyên liệu"},
                {y: 123990, label: "Thuốc"},
                {y: 125185, label: "Thú y"},
                {y: 150265, label: "Y tế"},
                {y: 153682, label: "Điều trị"}
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
                {y: 43973, label: "Giới chức"},
                {y: 54843, label: "Hồi giáo"},
                {y: 57017, label: "Iraq"},
                {y: 67508, label: "Liên Hợp Quốc"},
                {y: 76606, label: "Matxcơva"},
                {y: 100511, label: "Phiên"},
                {y: 123272, label: "Thiệt mạng"},
                {y: 129334, label: "Trung Quốc"},
                {y: 139078, label: "Tổng thống"},
                {y: 146148, label: "Vận hội"}
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
                {y: 25299, label: "Câu lạc bộ"},
                {y: 72505, label: "Liên đoàn bóng đá"},
                {y: 123779, label: "Thuyền"},
                {y: 124952, label: "Thí sinh"},
                {y: 133862, label: "Trận đấu"},
                {y: 144213, label: "Vô địch"},
                {y: 145091, label: "Vận động viên"},
                {y: 148022, label: "World Cup"},
                {y: 148474, label: "Xe"},
                {y: 154860, label: "Đánh đầu"},
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
                {y: 18515, label: "Ca khúc"},
                {y: 23371, label: "Chính thức"},
                {y: 29367, label: "Cơ quan"},
                {y: 30161, label: "Cầu thủ"},
                {y: 33847, label: "Diễn viên"},
                {y: 62024, label: "Khán giả"},
                {y: 85174, label: "Nghệ sĩ"},
                {y: 125104, label: "Thông tin"},
                {y: 135771, label: "Tác phẩm"},
                {y: 156134, label: "Đạo diễn"}
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
                {y: 21640, label: "Chiếm thị phần"},
                {y: 25562, label: "Công nghệ thông tin"},
                {y: 39907, label: "File"},
                {y: 41547, label: "Game"},
                {y: 54674, label: "Hồ sơ"},
                {y: 56726, label: "Internet"},
                {y: 81058, label: "Máy tính"},
                {y: 103232, label: "Phần mềm"},
                {y: 129564, label: "Trang web"},
                {y: 134620, label: "Trực tuyến"}
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
            document.getElementById('txtUnder').classList.remove("animated");
            document.getElementById('txtUnder').classList.remove("zoomIn");
            void document.getElementById('txtUnder').offsetWidth;
            document.getElementById('txtUnder').classList.add("animated");
            document.getElementById('txtUnder').classList.add("zoomIn");
            document.getElementById('txtUnder').innerHTML = response.data.output;
            document.getElementById('txtUnder').style.color = "black";
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
    compareChart.render();
    $('compare').off();
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