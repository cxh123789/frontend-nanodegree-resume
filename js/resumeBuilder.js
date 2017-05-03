//uncomment below for log-clicks.
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


var bio = {
  "name": "褚翔鸿",
  "role": "Web Developer",
  "contacts": {
    "location": "Jinan, ShanDong",
    "email": "cxh2921@gmail.com",
    "github": "cxh123789",
    "mobile": "13969169232",
  },
  "welcomeMessage": "Thanks for stopping by. Bear with me as I build some chops in front end development.",
  "skills": [
  "Java", "CSS", "HTML", "javascript"
  ],
  "biopic": "images/fry.jpg",

};

// education section

var education = {
  "schools": [
  {
    "name": "齐鲁工业大学",
    "location": "Jinan, ShanDong",
    "degree": "BS",
    "major": "computer sceince",
    "dates": 2014,
    "url": "http://www.sdili.edu.cn/"
  }
  ],
  "online" : {
    "title" : "Front-end Web Developer Nanodegree",
    "school" : "Udacity",
    "dates" : "2016-2017",
    "url" : "http://www.udacity.com"
  }
};

var work = {
  "jobs": [
  {
    "employer": "网易",
    "title": "实习",
    "location": "Hangzhou, Zhejiang",
    "dates": "2017-2018",
    "description": "都是假的做梦呢"
  },

  ]
};

var projects = {
  "projects": [
  {
		"title" : "Build a Portfolio Site",
		"dates" : "2017",
		"description" : "HTML creating web pages and web application",
		"images" : ["images/p3作品集.png"]
	}
  ]
};

$("#mapDiv").append(googleMap);

$('#main').append(internationalizeButton);

// show the schools section
showSchools = function() {

  $('#education').append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);


  // combines the Employer and Title
  var formattedEmployerTitle = formattedSchoolName + formattedSchoolDegree;
  $('#education').children().next().append(formattedSchoolName + formattedSchoolDegree);

  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
  $('#education').children().next().append(formattedSchoolLocation);

  var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[0].dates);
  $('#education').children().next().append(formattedSchoolDate);

  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);
  $('#education').children().next().append(formattedSchoolMajor);

    $("#education").append(HTMLonlineClasses);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online.title);
    $('#education').children().next().append(formattedOnlineTitle);


    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online.school);
    $('#education').children().next().append(formattedOnlineSchool);

    var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.online.dates);
    $('#education').children().next().append(formattedOnlineDate);


  };

  showSchools();

  showWork = function() {

    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('#workExperience').children().next().append(formattedEmployer + formattedTitle);


    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
    $('#workExperience').children().next().append(formattedDates);

    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[0].description);
    $('#workExperience').children().next().append(formattedWorkDesc);

  };

  showWork();
showBio = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);


  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);




  var profilePic = HTMLbioPic.replace("%data%", bio.biopic);
  $('#header').append(profilePic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedLocation);

$('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
$('#header').append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$('#skills').append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$('#skills').append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$('#skills').append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$('#skills').append(formattedSkills);};
showBio () ;



showProjects = function() {

  $('#projects').append(HTMLprojectStart);

  var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
  $('#projects').children().next().append(formattedProjectTitle);

  var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
  $('#projects').children().next().append(formattedProjectDates);

  var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
  $('#projects').children().next().append(formattedProjectDesc);

  var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[0].images);
  $('#projects').children().next().append(formattedProjectImage);

};

showProjects();
