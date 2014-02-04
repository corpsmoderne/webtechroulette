"use strict"

var frontEnds = [
  "JavaScript",
  "JS with jQuery",
  "JS with React.js",
  "static HTML/CSS"
];

var backEnds = [
  "PHP",
  "Python",
  "Ruby",
  "Java",
  "C#",
  "Node.JS",
  "ASP.Net"
];

var db = [
  "MySQL",
  "Postgres",
  "MongoDB",
  "Oracle",
  "SqlServer",
  "CouchDB",
  "Sqlite",
  "CSV"
];

var os = [
  "Linux",
  "FreeBSD",
  "Windows",
  "NetBSD",
  "Solaris",
  "OpenBSD",
  "Mac OS X",
  "AS400",
  "HaikuOS",
  "GNU/Hurd"
];

function roll(id, tbl, t, cb) {
  $(id).parent().addClass("selected");
  var c;
  do {
    c = tbl[Math.floor(Math.random()*tbl.length)];
  } while(c == $(id).html());
  $(id).html(c);

  if (t < 750) {
    setTimeout(function() {
      roll(id, tbl, t+(t/2), cb);
    }, t);
  } else { 
    setTimeout(function() {
      $(id).parent().removeClass("selected");
      if (cb !== undefined) {
        cb();
      }
    }, 1000);
  }
}

$(document).ready(function() {
  setTimeout(function() {
    roll("#frontEnd", frontEnds, 10, function() {
      roll("#backEnd", backEnds, 10, function() {
        roll("#db", db, 10, function() {
          roll("#os", os, 10, function() {
            $("#advice").fadeIn(500);
          });
        });
      });
    });
  }, 500);
});
