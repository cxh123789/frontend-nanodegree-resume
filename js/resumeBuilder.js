var bio ={
 	"name" : "褚翔鸿",
 	"role" : "Web Developer",
 	"contacts" : [{
 		"mobile" : "13969169232",
 		"email" : "cxh2921@gmail.com",
 		"github" : "cxh123789",
 		"location" : "山东济南"
 	}],
 	"welcomeMessage" : "Hello.",
 	"skills" : ["adaptability","Time management","Collaboration"],
 	"bioPic" : "images/褚翔鸿_conew1.jpg"
 };
 /*var work = {
 	"jobs" :[{
 	"employer" : "myself",
 	"title" : "student",
 	"dates" : "2018.06",
 	"description" : "Learn to enrich yourself."
     }]
 };
var projects = {
	"projects" : [{
		"title" : "Animal Trading Card",
		"datas" : "2017",
		"description" : "HTML creating web pages and web application",
		"images" : ["images/197x148.gif"]
	},
	{
		"title" : "Build a Portfolio Site",
		"data" : "2017",
		"description" : "HTML creating web pages and web application",
		"images" : ["images/QQ截图20170417085847.png"]
	}]
};
var education = {
	"school" : [{
		"name" : "齐鲁工业大学",
		"city" : "山东济南",
		"degree" : "Bachelor's Degree",
		"majors" : "CST",
		"dates" : "2014-2018"
	}],
	"onlineCourses" : [{
		"title" : "Front-end Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2016-2017"
	}]
};*/
if(bio.skills.length >0){
  $("#header").append(HTMLskillsStart);
     bio["skills"].forEach(function(skill) {
         var formattedSkill = HTMLskills.replace("%data%", skill);
         $("#skills").append(formattedSkill);
     });

}
