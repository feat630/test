module.exports = {
  HTML:function(kakao){
    return `
    <!DOCTYPE html>
<html>
<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<title>Insert title here</title>
	</head>

<body>
<div>title</div>
<div id="map" style="width:70%;height:450px;margin-left:15%;"></div>
<form action="page" method=post>
<button type="submit" class="btn btn-lg btn-primary">선택</button>
</form>



<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=118dc8f47a314476ad1ed9957acc4ee5"></script>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.520057, 126.889753), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 



  var positions =[
    ${kakao}
  ]


for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
</script>
</body>
</html>
    `;
  },  
  
  
  
  
  
  
  ONE:function(one, latlng, name, list){
    return `
    <!DOCTYPE html>
<html>
<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<title>Insert title here</title>
	</head>
<body>
<h3>마크 클릭</h3>
<hr>
<div id="map" style="width:70%;height:450px;margin-left:15%;"></div>
<form action="page" method=post>
<button type="submit" class="btn btn-lg btn-primary">선택</button>
</form>
${list}



<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=118dc8f47a314476ad1ed9957acc4ee5"></script>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(${latlng}), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
    };
    

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 



  var positions =[  
    {content: '<div>출발점</div>', 
    latlng: new kakao.maps.LatLng(37.5201683, 126.8901534)},
    ${one}
  ]


for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    if(i===1){
      kakao.maps.event.addListener(marker, 'click', search(infowindow));
    }else{
      kakao.maps.event.addListener(marker, 'click', made(infowindow));
    }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

function search(infowindow) {
  return function() {
      window.open('https://search.naver.com/search.naver?ie=utf8&where=nexearch&query=문래동 ${name}');
  };
}

function made(infowindow) {
  return function() {
      window.open('https://search.naver.com/search.naver?ie=utf8&where=nexearch&query=630');
  };
}








</script>
</body>
</html>
    `;
  },list:function(menu, cnt){

      var list = `
      <div>상호   :  ${menu[0].name}</div>
      <div>종류   : ${menu[0].category}</div>
      <div>연휴   :  ${menu[0].day_off} </div>
      <div>주소   :  ${menu[0].addr_road}</div>
      `;


    return list;
  },kakao:function(menu){
    var list = '';
    var i = 0;
    while(i < menu.length){
        list = list + `{content: '<div>${menu[i].name}<br>${menu[i].category}</div>', 
          latlng: new kakao.maps.LatLng(${menu[i].lat}, ${menu[i].lng})},`;
        i = i + 1;
      
    }
    return list;
  },one:function(selone){
    var list = `{content: '<div>${selone[0].name}<br>${selone[0].category}</div>', 
    latlng: new kakao.maps.LatLng(${selone[0].lat}, ${selone[0].lng})}`;
    return list;
  },latlng:function(selone){
    var latlng = `${selone[0].lat}, ${selone[0].lng}`;
    return latlng
  },detaile:function(selone){
    var detaile = `${selone[0]}`;
    console.log(detaile[0].name);
    return detaile
  }
}
