/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="white-text">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="https://www.baidu.com/">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="https://www.baidu.com/"><span class="white-text"> %data%</span></a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br><span class="yellow-text">%data%</span></p>';
var HTMLprojectImage = '<img class="project-image" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="http://www.sdili.edu.cn/">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3></h3>';
var HTMLonlineTitle = '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href=">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var gaodeMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.pageX,loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
  // 创建地图对象
  map = new AMap.Map('map', {
    resizeEnable: true,
    center: [105.30, 36.030],
    zoom: 4
  });

  map.plugin(["AMap.ToolBar"], function() {
    // 添加 工具条
    map.addControl(new AMap.ToolBar());
  });

  var locations = locationFinder();
  locations.forEach(function(place) {
    searchLocation(place);
  });

  map.setFitView();
}

function locationFinder() {

  // 初始化一个空的数组，用来存储地点
  var locations = [];

  //将 bio 的 contacts 数据里的地址添加到 locations 数组里
  locations.push(bio.contacts.location);


  //迭代 education 的 schools 数据里的地址，并将地址添加到 locations 数组里
  education.schools.forEach(function(school) {
    locations.push(school.location);
  });


  // 迭代 work 的 jobs 数据里的地址，并将地址添加到 locations 数组里
  work.jobs.forEach(function(job) {
    locations.push(job.location);
  });

  return locations;
}


function searchLocation(name) {
  AMap.service('AMap.PlaceSearch', function() { //回调函数
    //实例化PlaceSearch
    placeSearch = new AMap.PlaceSearch();

    //使用placeSearch对象调用关键字搜索的功能
    var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
      pageSize: 1,
      pageIndex: 1,
      city: "010" //城市，默认：全国
    });

    //关键字查询地点坐标
    placeSearch.search(name, function(status, result) {
      //使用 result 在地图上创建标记
      var position = extraPositionFromJson(result);
      placeMarker(position.lng, position.lat, map);
    });
  })
}

//解析 JSON 并返回地图的坐标
function extraPositionFromJson(json) {
  var poiList = json.poiList;
  var pois = poiList.pois;
  var location = pois[0].location;

  return location;
}


//在相应的坐标中添加标记
function placeMarker(lng, lat, map) {
  marker = new AMap.Marker({
    position: [lng, lat],
    icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
    map: map
  });
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
  map.setFitView();
})
