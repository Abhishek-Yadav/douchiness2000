 var lastday = (new Date).getTime() - (1000 * 60 * 60 * 24 * 7);
  chrome.history.search({
      'text': '',              // Return every history item....
      'startTime': lastday,  // that was accessed less than one week ago.
	  'maxResults': 999
    },
    function(historyItems) {
      // For each history item, get details on all visits.
	  if(historyItems.length == 0)
	  {
		document.getElementById("msg").innerHTML = "YOU AIN'T A DOUCHE YOU'RE A SAINT AND I LIKE NO SAINT!";
	  }
	  var url=[];
	  var fb_count=0,twit_count=0,utube_count=0;
	  for (var i = 0; i < historyItems.length; i++) {
        url[i] = historyItems[i].url;
		if((url[i].search("facebook")) > 0) {fb_count++;}
		if((url[i].search("twitter")) > 0) {twit_count++;}
		if((url[i].search("youtube")) > 0) {utube_count++;}
		//alert(url[i]);
	  }
	  if(fb_count>twit_count && fb_count>utube_count){ document.getElementById("msg").innerHTML = "THOU THE DOUCHIEST DOUCHEST AROUND FACEBOOK HOME OF THE HIGHLY DOUCHES!"; }
 	  else if(twit_count>fb_count && twit_count>utube_count){ document.getElementById("msg").innerHTML = "THOU, THE PRETENTIOUS INTELLECTUAL DOUCHE DOUCHEST AROUND TWITTER! BIRDLY DOUCHE!"; }
	  else if(utube_count>twit_count && utube_count>fb_count){ document.getElementById("msg").innerHTML = "THOU MASTER'O ALL HIGH DOUCHES, PROCRASTINATION KING CAT VIDEO WATCHING DOUCHE!"; }
	  else{document.getElementById("msg").innerHTML = "YOU AIN'T A DOUCHE YOU'RE A SAINT AND I LIKE NO SAINT!";}
    });


