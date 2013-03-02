
function extraButtonClick(){
	if($("#masthead-search-term").val() != ""){
		console.log("The current content is..." + $("#search-results-holder").innerHTML);
		$("#search-results-holder").empty();
		var qlink = "https://gdata.youtube.com/feeds/api/videos?q=" + encodeURIComponent($("#masthead-search-term").val());
		qlink = qlink+"&alt=json";
		$.get(qlink, function(data) {
				var jdata = (data.feed).entry;
				var jlen = jdata.length;
				console.log(jdata);
				var innerdiv = document.createElement('div');
				innerdiv.setAttribute("class", "holder-class");
				var inlink;
				var inimg;
				var intitle;
				for(i=0;i<jlen;i++){
					intitle = jdata[i].title.$t;
					inimg = (jdata[i].media$group.media$thumbnail)[3].url;
					inlink = (jdata[i].link)[0].href;
					console.log(intitle+ " - "+inlink+" - "+inimg);
					var resultdiv = document.createElement('div');
					resultdiv.setAttribute("class", "result-class");
					var imgdiv = document.createElement('div');
					imgdiv.setAttribute("class", "img-class");
					var resultimg = document.createElement('img');
					resultimg.setAttribute("class", "result-image-class");
					resultimg.setAttribute("src", inimg);
					imgdiv.appendChild(resultimg);
					var linkdiv = document.createElement('div');
					linkdiv.setAttribute("class", "link-class");
					var resultlink = document.createElement('a');
					resultlink.setAttribute("href", inlink);
					resultlink.setAttribute("title", intitle);
					resultlink.appendChild(document.createTextNode(intitle.substring(0,38)));
					linkdiv.appendChild(resultlink);
					resultdiv.appendChild(imgdiv);
					resultdiv.appendChild(linkdiv);
					innerdiv.appendChild(resultdiv);
				}
				$("#masthead-search-term").html("");
				if(jlen == 0){
					var resultdiv = document.createElement('div');
					resultdiv.setAttribute("class", "result-class");
					resultdiv.appendChild(document.createTextNode("No results found.. :("));
					innerdiv.appendChild(resultdiv);
				}
				console.log("The current content is..." + $("#search-results-holder").val());
				$("#search-results-holder").append(innerdiv);
		});
	}
	return false;
}


/* Designing the extra search button... */
var extrabutton = document.createElement('button');
extrabutton.setAttribute("id","easy-search-btn");
extrabutton.setAttribute("tabindex", "3");
extrabutton.setAttribute("class", "search-btn-component search-button yt-uix-button yt-uix-button-default");
extrabutton.setAttribute("role", "button");
extrabutton.onclick=extraButtonClick;
var extraspan = document.createElement('img');
extraspan.src="https://github.com/prajwal-aithal/youtube-search-bar/raw/master/search.png";
//extraspan.appendChild(document.createTextNode("Search"));
extrabutton.appendChild(extraspan);

/* Adding the extra search button... */
$('#search-btn').after(extrabutton);

/* Designing the extra division to display video results... */
var extradiv= document.createElement('div');
extradiv.setAttribute("id", "search-results-holder");

/* Adding the extra division to display video results... */
$('#masthead-expanded').after(extradiv);