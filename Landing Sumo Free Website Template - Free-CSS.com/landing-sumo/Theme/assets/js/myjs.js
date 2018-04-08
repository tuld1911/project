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
                {y: -1.6061, label: "Cướp"},
                {y: -1.5988, label: "Toàn quốc"},
                {y: -1.5988, label: "Quan chức"},
                {y: -1.5736, label: "Nghiên cứu"},
                {y: -1.5369, label: "Tấn công"},
                {y: 1.8365, label: "Di tích"},
                {y: 1.8416, label: "Công chính"},
                {y: 1.9812, label: "Công chức"},
                {y: 2.1420, label: "Qui hoạch"},
                {y: 2.1910, label: "Dân"}
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
                {y: -1.3178, label: "Âm nhạc"},
                {y: -1.2616, label: "Phẫu thuật"},
                {y: -1.2148, label: "Cơ thể"},
                {y: -1.1951, label: "Sáng tác"},
                {y: -1.1965, label: "Du khách"},
                {y: 1.6969, label: "Nguyên liệu"},
                {y: 1.8845, label: "Ẩm thực"},
                {y: 2.3266, label: "Ngon"},
                {y: 2.1529, label: "Món"},
                {y: 2.1175, label: "Tâm sự"}
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
                {y: -1.1056, label: "Microsoft"},
                {y: -1.0726, label: "Bệnh nhân"},
                {y: -0.9713, label: "Máy tính"},
                {y: -0.9678, label: "Thị trường"},
                {y: -0.9567, label: "Đường"},
                {y: 1.7890, label: "Trái đất"},
                {y: 1.8542, label: "Nhận định"},
                {y: 1.9652, label: "Robot"},
                {y: 2.0737, label: "Công nguyên"},
                {y: 2.2449, label: "Ra đời"}
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
                {y: -1.4766, label: "Điều tra"},
                {y: -1.3671, label: "Ảo"},
                {y: -1.3593, label: "Thành phố"},
                {y: -1.3132, label: "Cảnh sát"},
                {y: -1.2774, label: "Chiếm đoạt"},
                {y: 1.6128, label: "Nhập khẩu"},
                {y: 1.7288, label: "WTO"},
                {y: 1.7385, label: "Thị trường"},
                {y: 1.7486, label: "Nhà máy"},
                {y: 1.8182, label: "Đầu tư"}
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
                {y: -1.1795, label: "Trung tá"},
                {y: -1.1721, label: "Định kỳ"},
                {y: -1.1715, label: "Quy chế"},
                {y: -1.1588, label: "Phê chuẩn"},
                {y: -1.1603, label: "chống"},
                {y: 1.7362, label: "Điều tra"},
                {y: 1.7416, label: "Phát hiện"},
                {y: 1.8999, label: "Tư pháp"},
                {y: 2.7925, label: "Tòa án nhân dân"},
                {y: 2.1135, label: "Bị cáo"}
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
                {y: -1.1517, label: "Thú y"},
                {y: -1.1269, label: "Nghề"},
                {y: -1.1257, label: "Sở"},
                {y: -1.1139, label: "Công nghệ"},
                {y: -1.0505, label: "Nguyên liệu"},
                {y: 1.5362, label: "Gan"},
                {y: 1.5802, label: "Chợ Rẫy"},
                {y: 1.6301, label: "HIV"},
                {y: 1.6413, label: "Y tế"},
                {y: 1.7093, label: "Thuốc"}
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
                {y: -1.2509, label: "Vận hội"},
                {y: -1.2471, label: "Thi đấu"},
                {y: -1.1590, label: "Tổng thống"},
                {y: -1.1783, label: "Tỷ lệ"},
                {y: -1.1370, label: "Phiên"},
                {y: 1.6738, label: "Iraq"},
                {y: 1.7712, label: "Hồi giáo"},
                {y: 1.9144, label: "Liên Hợp Quốc"},
                {y: 2.2294, label: "Thiệt mạng"},
                {y: 2.0547, label: "Tổng thống"}
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
                {y: -0.7685, label: "Thuyền"},
                {y: -0.7093, label: "Đánh đầu"},
                {y: -0.7093, label: "Vô địch"},
                {y: -0.7207, label: "Xe"},
                {y: -0.7442, label: "Thí sinh"},
                {y: 2.0835, label: "Liên đoàn bóng đá"},
                {y: 2.2246, label: "Trận đấu"},
                {y: 2.2749, label: "Vận động viên"},
                {y: 2.3971, label: "Câu lạc bộ"},
                {y: 2.5098, label: "World Cup"}
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
                {y: -1.0460, label: "Đạo diễn"},
                {y: -1.0460, label: "Cơ quan"},
                {y: -1.0229, label: "Cầu thủ"},
                {y: -1.0076, label: "Chính thức"},
                {y: -0.9582, label: "Thông tin"},
                {y: 2.1618, label: "Ca khúc"},
                {y: 2.2186, label: "Tác phẩm"},
                {y: 2.3117, label: "Hoa hậu"},
                {y: 2.4870, label: "Nghệ sĩ"},
                {y: 2.6299, label: "Khán giả"}
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
                {y: -1.0509, label: "Công an"},
                {y: -0.9385, label: "Chiếm thị phần"},
                {y: -0.9312, label: "Hồ sơ"},
                {y: -0.9406, label: "Du học"},
                {y: -0.9674, label: "Chứa"},
                {y: 2.2415, label: "Công nghệ thông tin"},
                {y: 1.8921, label: "Trang web"},
                {y: 2.0962, label: "Internet"},
                {y: 2.1115, label: "File"},
                {y: 2.1746, label: "Máy tính"}
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