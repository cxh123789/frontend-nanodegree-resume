//项目的第二张图片不显示不知道什么原因
// 地图不和google一样标出来 不知道为什么？
 var bio = {
 	"name" : "褚翔鸿",
 	"role" : "Web Developer",
 	"contacts" : {
 		"mobile" : "13969169232",
 		"email" : "cxh2921@gmail.com",
 		"github" : "cxh123789",
 		"location" : "山东 济南"
 	},
 	"welcomeMessage" : "Hello.",
 	"skills" : [
 	"Good leader", "soft skills", "Adaptability", "Collaboration", "Time management"
 	],
 	"biopic" : "images/褚翔鸿_conew1.jpg"
 };
 var work = {
 	"jobs" :[{
 	"employer" : "myself",
 	"title" : "student",
 	"dates" : "2018.06",
  "location" : "Jinan ShanDong",
 	"description" : "Learn to enrich yourself."
     }]
 };

var projects = {
	"projects" : [{
		"title" : "Animal Trading Card",
		"dates" : "2017",
		"description" : "HTML creating web pages and web application",
		"images" : ["images/197x148.gif"]
	},
	{
		"title" : "Build a Portfolio Site",
		"dates" : "2017",
		"description" : "HTML creating web pages and web application",
		"images" : ["images/QQ截图20170417085847.png"]
	}]
};

var education = {
	"schools" : [{
		"name" : "齐鲁工业大学¦",
		"city" : "Jinan, CN, Shandong",
    "url" : "http://www.sdili.edu.cn/",

		"degree" : "Bachelor's Degree",
		"majors" : ["CST"],
		"dates" : "2014-2018"
	}],
	"onlineCourses" : [{
		"title" : "Front-end Web Developer Nanodegree",
		"school" : "Udacity",
    "url" : "https://cn.udacity.com/",
		"dates" : "2016-2017"

	}]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

  $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
  $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

  for(var index = 0; index < bio.skills.length; index++){

      var formattedSkills = HTMLskills.replace("%data%",bio.skills[index]);
      $("#skills").append(formattedSkills);
  }

};
work.display = function() {
  for(var a = 0; a< work.jobs.length; a++){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[a].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[a].title);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[a].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[a].description);

    $(".work-entry:last").append(formattedEmployer,formattedTitle,formattedDates,formattedDescription);


  }
};
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
projects.display = function(){
	for(var i = 0; i<projects.projects.length; i++){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);


		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
    for(var z = 0;z<projects.projects[i].images.length; z++){
    
       var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[z]);
       $(".project-entry:last").append(formattedImage);


     }

	}


};
education.display = function() {
	for(var c =0; c<education.schools.length; c++) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[c].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[c].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[c].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[c].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[c].majors);

		$(".education-entry:last").prepend(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	};

	for(var d = 0;d<education.onlineCourses.length; d++) {
		$("#education").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[d].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[d].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[d].dates);

		$(".education-entry:last").append(formattedTitle + formattedSchool,formattedDates);
	}
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(gaodeMap);
$('#main').append(internationalizeButton);
