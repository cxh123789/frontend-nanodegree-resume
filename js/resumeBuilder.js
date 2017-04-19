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
 var work = {
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
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic );
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

		$('#topContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
	};
};

/*if (bio.skills.length>0) {
  $("#header").append(HTMLskillsStart);

  for(skill in bio.skills)) {
    var formattedskills = HLMLskills.replace("%data%",bio.skill[skill]);
    $("#skills").append(formattedskills);
  };

};*/
work.display = function() {
    for(job in work.jobs){
      $("#workExperence").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%,work.jobs[job].employer");
      var formattedTitle = HTMLworkTitle.replace("%data%,work.jobs[job].title");
      var formattedDates = HTMLworkDates.replace("%data%,work.jobs[job].dates");
      var formattedDescription = HTMLworkDescription.replace("%data%,work.jobss[job].description");

      $(".work-entry:last").append(formattedEmployer,formattedTitle,formattedDates,formattedDescription);

    }
};

projects.display = function(){
  for(itme in projects.projects){
    $("#workExperience").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[itme].title);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[itme].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[itme].description);

    $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
    for (image in projects.projects[item].images) {
      var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);
      $(".project-entry:last").append(formattedImage);
    };
  }
};
education.display = function(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);

    $(".education-entry:last").prepend(formattedName,formattedMajor,formattedDates,formattedLocation,formattedMajor);
  };
  for(course in onlineCourses){
    $("#education").append(HTMLonlineClasses);

    var formattedTitle = HTMLonlineTitle.replace("%data%",onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%",onlineCourses[course].dates);

    $(".education-entry:last").append(formattedTitle,formattedSchool,formattedDates);
  }
}
bio.display();
work.display();
projects.display();
education.display();
$("#main").append(internationalizeButton);
$("#main").append(googleMap);
