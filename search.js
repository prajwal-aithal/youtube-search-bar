var begin=0;
var jdata;
var jlen=0;
var advance=5;
function extraButtonClick(){
	if($("#masthead-search-term").val() != ""){
		console.log("The current content is..." + $("#search-results-holder").innerHTML);
		$("#search-results-holder").empty();
		var qlink = "https://gdata.youtube.com/feeds/api/videos?q=" + encodeURIComponent($("#masthead-search-term").val());
		qlink = qlink+"&alt=json";
		begin = 0;
		$.get(qlink, function(data) {
				jdata = (data.feed).entry;
				jlen = jdata.length;
				console.log(jdata);
				var innerdiv = document.createElement('div');
				innerdiv.setAttribute("class", "holder-class");
				var nextdiv = document.createElement('div');
				nextdiv.setAttribute("class", "next-button-class");
				var nextbutton = document.createElement('button');
				nextbutton.setAttribute("id","next-btn");
				nextbutton.setAttribute("role", "button");
				nextbutton.setAttribute("class", "display-button");
				nextbutton.appendChild(document.createTextNode(">>"));
				nextbutton.onclick=displayFront;
				nextdiv.appendChild(nextbutton);
				var previousdiv = document.createElement('div');
				previousdiv.setAttribute("class", "previous-button-class");
				var previousbutton = document.createElement('button');
				previousbutton.setAttribute("id","previous-btn");
				previousbutton.setAttribute("role", "button");
				previousbutton.setAttribute("class", "display-button");
				previousbutton.appendChild(document.createTextNode("<<"));
				previousbutton.onclick=displayBack;
				previousdiv.appendChild(previousbutton);
				$("#search-results-holder").append(previousdiv);
				var inlink;
				var inimg;
				var intitle;
				for(i=begin;i<begin+advance&&i<jlen;i++){
					intitle = jdata[i].title.$t;
					inimg = (jdata[i].media$group.media$thumbnail)[3].url;
					inlink = (jdata[i].link)[0].href;
					console.log(intitle+ " - "+inlink+" - "+inimg);
					var resultdiv = document.createElement('div');
					resultdiv.setAttribute("class", "result-class");
					var imgdiv = document.createElement('div');
					imgdiv.setAttribute("class", "img-class");
					var imglink = document.createElement('a');
					imglink.href = inlink;
					imglink.setAttribute("title", intitle);
					var resultimg = document.createElement('img');
					resultimg.setAttribute("class", "result-image-class");
					resultimg.setAttribute("src", inimg);
					imglink.appendChild(resultimg);
					imgdiv.appendChild(imglink);
					var linkdiv = document.createElement('div');
					linkdiv.setAttribute("class", "link-class");
					var resultlink = document.createElement('a');
					resultlink.href = inlink;
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
				begin = begin+advance;
				console.log("The current content is..." + $("#search-results-holder").val());
				$("#search-results-holder").append(innerdiv);
				$("#search-results-holder").append(nextdiv);
		});
	}
	return false;
}


function displayFront(){
	if(begin < jlen){
		$("#search-results-holder").empty();
		var innerdiv = document.createElement('div');
		innerdiv.setAttribute("class", "holder-class");
		var nextdiv = document.createElement('div');
		nextdiv.setAttribute("class", "next-button-class");
		var nextbutton = document.createElement('button');
		nextbutton.setAttribute("id","next-btn");
		nextbutton.setAttribute("role", "button");
		nextbutton.setAttribute("class", "display-button");
		nextbutton.appendChild(document.createTextNode(">>"));
		nextbutton.onclick=displayFront;
		nextdiv.appendChild(nextbutton);
		var previousdiv = document.createElement('div');
		previousdiv.setAttribute("class", "previous-button-class");
		var previousbutton = document.createElement('button');
		previousbutton.setAttribute("id","previous-btn");
		previousbutton.setAttribute("role", "button");
		previousbutton.setAttribute("class", "display-button");
		previousbutton.appendChild(document.createTextNode("<<"));
		previousbutton.onclick=displayBack;
		previousdiv.appendChild(previousbutton);
		$("#search-results-holder").append(previousdiv);
		var inlink;
		var inimg;
		var intitle;
		if(begin+advance < jlen){
			begin = begin+advance;
		}
		for(i=begin;i<begin+advance&&i<jlen;i++){
			intitle = jdata[i].title.$t;
			inimg = (jdata[i].media$group.media$thumbnail)[3].url;
			inlink = (jdata[i].link)[0].href;
			console.log(intitle+ " - "+inlink+" - "+inimg);
			var resultdiv = document.createElement('div');
			resultdiv.setAttribute("class", "result-class");
			var imgdiv = document.createElement('div');
			imgdiv.setAttribute("class", "img-class");
			var imglink = document.createElement('a');
			imglink.href = inlink;
			imglink.setAttribute("title", intitle);
			var resultimg = document.createElement('img');
			resultimg.setAttribute("class", "result-image-class");
			resultimg.setAttribute("src", inimg);
			imglink.appendChild(resultimg);
			imgdiv.appendChild(imglink);
			var linkdiv = document.createElement('div');
			linkdiv.setAttribute("class", "link-class");
			var resultlink = document.createElement('a');
			resultlink.href = inlink;
			resultlink.setAttribute("title", intitle);
			resultlink.appendChild(document.createTextNode(intitle.substring(0,38)));
			linkdiv.appendChild(resultlink);
			resultdiv.appendChild(imgdiv);
			resultdiv.appendChild(linkdiv);
			innerdiv.appendChild(resultdiv);
		}
		if(jlen == 0){
			var resultdiv = document.createElement('div');
			resultdiv.setAttribute("class", "result-class");
			resultdiv.appendChild(document.createTextNode("No results found.. :("));
			innerdiv.appendChild(resultdiv);
		}
		$("#search-results-holder").append(innerdiv);
		$("#search-results-holder").append(nextdiv);
	}
}


function displayBack(){
	if(begin < jlen){
		$("#search-results-holder").empty();
		var innerdiv = document.createElement('div');
		innerdiv.setAttribute("class", "holder-class");
		var nextdiv = document.createElement('div');
		nextdiv.setAttribute("class", "next-button-class");
		var nextbutton = document.createElement('button');
		nextbutton.setAttribute("id","next-btn");
		nextbutton.setAttribute("role", "button");
		nextbutton.setAttribute("class", "display-button");
		nextbutton.appendChild(document.createTextNode(">>"));
		nextbutton.onclick=displayFront;
		nextdiv.appendChild(nextbutton);
		var previousdiv = document.createElement('div');
		previousdiv.setAttribute("class", "previous-button-class");
		var previousbutton = document.createElement('button');
		previousbutton.setAttribute("id","previous-btn");
		previousbutton.setAttribute("role", "button");
		previousbutton.setAttribute("class", "display-button");
		previousbutton.appendChild(document.createTextNode("<<"));
		previousbutton.onclick=displayBack;
		previousdiv.appendChild(previousbutton);
		$("#search-results-holder").append(previousdiv);
		var inlink;
		var inimg;
		var intitle;
		if(begin-advance >= 0){
			begin = begin-advance;
		}
		for(i=begin;i<begin+advance&&i<jlen;i++){
			intitle = jdata[i].title.$t;
			inimg = (jdata[i].media$group.media$thumbnail)[3].url;
			inlink = (jdata[i].link)[0].href;
			console.log(intitle+ " - "+inlink+" - "+inimg);
			var resultdiv = document.createElement('div');
			resultdiv.setAttribute("class", "result-class");
			var imgdiv = document.createElement('div');
			imgdiv.setAttribute("class", "img-class");
			var imglink = document.createElement('a');
			imglink.href = inlink;
			imglink.setAttribute("title", intitle);
			var resultimg = document.createElement('img');
			resultimg.setAttribute("class", "result-image-class");
			resultimg.setAttribute("src", inimg);
			imglink.appendChild(resultimg);
			imgdiv.appendChild(imglink);
			var linkdiv = document.createElement('div');
			linkdiv.setAttribute("class", "link-class");
			var resultlink = document.createElement('a');
			resultlink.href = inlink;
			resultlink.setAttribute("title", intitle);
			resultlink.appendChild(document.createTextNode(intitle.substring(0,38)));
			linkdiv.appendChild(resultlink);
			resultdiv.appendChild(imgdiv);
			resultdiv.appendChild(linkdiv);
			innerdiv.appendChild(resultdiv);
		}
		if(jlen == 0){
			var resultdiv = document.createElement('div');
			resultdiv.setAttribute("class", "result-class");
			resultdiv.appendChild(document.createTextNode("No results found.. :("));
			innerdiv.appendChild(resultdiv);
		}
		$("#search-results-holder").append(innerdiv);
		$("#search-results-holder").append(nextdiv);
	}
}

/* Designing the extra search button... */
var extrabutton = document.createElement('button');
extrabutton.setAttribute("id","easy-search-btn");
extrabutton.setAttribute("tabindex", "2");
extrabutton.setAttribute("class", "search-btn-component search-button yt-uix-button yt-uix-button-default");
extrabutton.setAttribute("role", "button");
extrabutton.onclick=extraButtonClick;
var extraspan = document.createElement('img');
extraspan.src="https://github.com/prajwal-aithal/youtube-search-bar/raw/master/search.png";
//extraspan.appendChild(document.createTextNode("Search"));
extrabutton.appendChild(extraspan);
$('#search-btn').attr("tabindex", "3");
/* Adding the extra search button... */
$('#search-btn').after(extrabutton);

/* Designing the extra division to display video results... */
var extradiv= document.createElement('div');
extradiv.setAttribute("id", "search-results-holder");
extradiv.setAttribute("class", "search-result-holder-class");

/* Adding the extra division to display video results... */
$('#yt-masthead-container').after(extradiv);