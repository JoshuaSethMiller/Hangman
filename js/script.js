var words=['juicy','elevators','scenario','poison','regulate','cream'];

var letters='abcdefghijklmnopqrstuvwxyz';

var myWord="";
var wordDisplay="";
var faults=7;
var mySound;

function press(c)
{
	if(faults <= 0)
		return;

	document.getElementById('btn_'+c).disabled=true;

	if(myWord.indexOf(c) != -1)
	{
		var t="";
		var found=true;
		for(var i=0;i < myWord.length;i++)
		{
			if(t != "")
				t+="&nbsp;";
			if(myWord.charAt(i) == c)
				t+=c.toUpperCase();
			else
			{
				if(wordDisplay.charAt(i*7) == '_')
					found=false;
				t+=wordDisplay.charAt(i*7);
			}
		}
		wordDisplay=t;
		document.getElementById('word').innerHTML=wordDisplay;
		if(found)
		{
			alert('YOU*R ALL THAT AND A BAG OF CHIPS');
			for(var i=0;i < letters.length;i++)
				document.getElementById('btn_'+letters.charAt(i)).disabled=true;
		}
	}
	else
	{
		faults--;
		document.getElementById('faults').innerHTML=faults;
		if(faults <= 0)
			alert('YA PLAYED YASELF!' +myWord);
	}
}

function init()
{
	var w=Math.floor(Math.random()*words.length);
	myWord=words[w];
	wordDisplay="";
	faults=7;
	for(var i=0;i < myWord.length;i++)
	{
		if(wordDisplay != "")
			wordDisplay+="&nbsp;";
		wordDisplay+="_";
	}
	document.getElementById('word').innerHTML=wordDisplay;
	document.getElementById('faults').innerHTML=faults;

	for(var i=0;i < letters.length;i++)
		document.getElementById('btn_'+letters.charAt(i)).disabled=false;
}

init();
