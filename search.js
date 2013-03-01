
function extraButtonClick(){
	if($("#masthead-search-term").val() != ""){
		alert($("input#masthead-search-term").val());
	}
	else{
		alert("Enter something!!!");
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
extradiv.appendChild(document.createTextNode("Hello... Here I am!!!"));

/* Adding the extra division to display video results... */
$('#masthead-expanded').after(extradiv);