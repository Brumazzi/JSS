/* JSS - JavaScript Style */
/*
 * Autor: Daniel B. Brumazzi
 * Email: brumazzi_daniel@yahoo.com.br
 * GitHub: http://www.github.com/Brumazzi
 * Versão: 0.1 sem JQuery.
 * 
 */

var xmlr = new XMLHttpRequest();
var load = window.onload;

var jss = false;

var step = setInterval(function(){
	if(!jss)
		return;
	var j = jss;
	jss = false;

	forge_style(j);
},100);

var count_tabs = function(line){
	var count = 0;
	for(var x=0; x<line.length; x+=1){
		if(line[x] != '	')
			break;
		count += 1;
	}

	return count;
}

var down_file = function(src){
	var jss_file = false;
	xmlr.open("GET", src, true);
	xmlr.onreadystatechange = function(){
		if(xmlr.readyState == 4){
			jss_file = xmlr.responseText;
			var obj = obj_gem(jss_file);
			if(obj)
				forge_style(obj);
		}
	}
	xmlr.send();
}

var obj_gem = function(content){
	var lines = content.split('\n');
	var stl_obj = new Object();
	var stack = new Array();
	var vars = new Object();
	var len = -1;
	var evt = null;
	for(var x=0; x<lines.length; x+=1){
		line = lines[x].trim();
		if(line != '' && line[0] != ';'){
			if(line.search(';') != -1){
				console.log("Syntax error: line "+x+" character ';' between text");
				return null;
			}else if(line[line.length-1] == ':'){
				if(stack.length > 0)
					stack.push(stack[len]+" "+line.replace(':',''));
				else
					stack.push(line.replace(':',''));
				len+=1
				stl_obj[stack[len]] = new Object();
			}else if(line == 'end'){
				stack.pop();
				len-=1;
			}else if(line[0] == '@'){
				if(len >= 0){
					console.log("Syntax error: line "+x+" can not declar variables here");
					return null;
				}
				var l = line.slice(1);
				if(l.search('@') != -1){
					console.log("Syntax error: line "+x+" character '@' between text");
					return null;
				}
				l = l.split('=');
				if(l.length != 2){
					console.log("Syntax error: line "+x+" invalide declaration");
					return null;
				}
				vars[l[0].trim()] = l[1].trim();
			}else if(line.search('=') != -1){
				if(line.search('@') != -1){
					$.each(vars,function(key, val){
						while(line.search('@'+key) != -1)
							line = line.replace('@'+key,val);
					});
				}
				line = line.split('=');
				if(line.length != 2){
					console.log("Syntax error: line "+x);
					return null;
				}
				stl_obj[stack[len]][line[0].trim()] = line[1].trim();
			}
		}
	}
	if(stack.length > 0){
		console.log("Syntax error: "+stack[stack.length-1]+" is open.");
		return null;
	}
	return stl_obj;
}

var properts = function(prop){
	prop = prop.replace(' ','');
	switch(prop){
		case 'bg': return 'background';
	}
	return prop;
}

var forge_style = function(obj, obj_key=''){
	//console.log(obj_key);
	$.each(obj,function(key, val){
		if(typeof(val) == "object")
			if(key.search('!') != -1){
				forge_style(val, (!obj_key ? '':obj_key)+key);
			}else
				forge_style(val, key);
		else
			if(obj_key && obj_key.search('!') != -1){
				ks = obj_key.split('!');
				if(val.search('|') != -1)
					val = val.split('|');
				console.log(ks);
				console.log(key);
				console.log(val);
				$(ks[0])[properts(ks[1])](function(){
					$(this).css(properts(key),val[0].trim());
				},function(){
					try{$(this).css(properts(key),val[1].trim());}
					catch(err){}
				});
			}else{
				$((obj_key ? obj_key : key)).css(properts(key),val);
			}
	});
}

$(window).load(function(){
	var tags = $("jss");
	tags.css('display','none');
	for(var x=0; x<tags.length; x+=1){
		down_file(tags[x].innerHTML);
	}
});
