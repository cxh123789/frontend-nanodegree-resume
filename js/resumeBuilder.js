
 var bio = {
 	"name" : "褚翔鸿",
 	"role" : "Web Developer",
 	"contacts" : [{
 		"mobile" : "13969169232",
 		"email" : "cxh2921@gmail.com",
 		"github" : "cxh123789",
 		"location" : "山东济南"
 	}],
 	"welcomeMessage" : "Hello.",
 	"skills" : [
 	"Good leader", "soft skills", "Adaptability", "Collaboration", "Time management"
 	],
 	"bioPic" : "images/褚翔鸿_conew1.jpg"
 };
 var work = {
 	"jobs" :[{
 	"employer" : "myself",
 	"title" : "student",
 	"dates" : "2018.06",
 	"description" : "Learn to enrich yourself."
     }]
 };
 /*
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
/*if(bio.skills.length >0){
  $("#header").append(HTMLskillsStart);
     bio["skills"].forEach(function(skill) {
         var formattedSkill = HTMLskills.replace("%data%", skill);
         $("#skills").append(formattedSkill);
     });

}
*/
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[contact].github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);

		$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
	};
};
work.display = function() {
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $("#workExperience").append(formattedEmployer,formattedTitle,formattedDates,formattedDescription);


  }
};
bio.display();
work.display();
