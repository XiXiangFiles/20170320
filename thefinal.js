
	var data;

	var Ruins=[];
	var His_Building=[];
	var Tra_Art=[];
	var Folk=[];
	var Monuments=[];
	var Antiquities=[];
	var landscape=[];

	var object=[Ruins,His_Building,Tra_Art,Folk,Monuments,Antiquities,landscape];
	
	function sort( num_array,  count ){
		switch(num_array){
			case 0 :
			object[0].push(count);
			break;
			case 1 :
			object[1].push(count);
			break;
			case 2 :
			object[2].push(count);
			break;
			case 3 :
			object[3].push(count);
			break;
			case 4 :
			object[4].push(count);
			break;
			case 5 :
			object[5].push(count);
			break;
			case 6 :
			object[6].push(count);
			break;
			case 7 :
			object[7].push(count);
			break;
		}
	}
	function getpicnum(array1){
		var items=Array.from(array1);
		var piclocation="null";
		var num=items[Math.ceil(Math.random()*items.length)-1];//第幾個
		piclocation=data[num].Heritage_Image[0];
		piclocation += "?"+num;
		return piclocation;//回傳圖片位址 以及  第幾筆資料
	}
	function contentselect(array2){
		var items=Array.from(array2);
		var sortofitems=[2];
		var num1=items[Math.ceil(Math.random()*items.length)-1];//第幾個
		var num2=items[Math.ceil(Math.random()*items.length)-1];
		var tag=true;
		while(tag){
			if (num1==num2){
				num2=items[Math.ceil(Math.random()*items.length)-1];
			}else{
				tag=false;
			}
		}
		sortofitems.push(num1);
		sortofitems.push(num2);

		return sortofitems;
	}

	$.getJSON("http://opendata.khcc.gov.tw/public/OD_Heritage.ashx",function(result){
		data=result;
		var array=[];
		array[0]=result[0].Heritage_class;
		var tag;
		for (var i = 0; i < result.length ; i++) {
			for (var j = 0; j < array.length ; j++) {
					if(array[j]==result[i].Heritage_class){
						tag=false;
					}else{
						tag=true;
				}
			}
			if (tag) {
					array.push(result[i].Heritage_class);
			}
			tag=false;
		}
		for (var i = 0; i < result.length ; i++) { //分類
			for (var j = 0; j < array.length ; j++) {
				if(array[j]==result[i].Heritage_class){
					sort(j,i);
				}
			}
		}
		for (var i = array.length - 1; i >= 0; i--) {//title
			$("<li/>", {"class":i}).appendTo(".title ");
			$("<a/>",{"href":"#","text":array[i]}).appendTo("."+i);
		}
		for (var i = 0 ;i < 7; i++) {//slide
			var array=[];
			array=object[i];
			var url=getpicnum(array);
			var split=url.split("?");
			// --------------------------------------------------
			$("<li/>", {"class":"pic"+i}).appendTo(".slidepic ");
			$("<a/>",{"href":"items.html?"+split[1],"class":"pic"+i+"_"}).appendTo(".pic"+i);
			$("<img>",{"src":url}).appendTo(".pic"+i+"_");
// ------------------------------------------------------------------slode
			var getnumofdata=contentselect(array);
			console.log(getnumofdata);
			for (var j = 1; j < 3; j++) {
				switch(i){
					case 0:
						$("<li/>", {"class":"head"+j}).appendTo(".Ruins ");
						$("<a/>",{"href":"#","text":result[getnumofdata[j]].Heritage_title}).appendTo(".head"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Ruins ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"txt"+j ,"text":result[getnumofdata[j]].Heritage_desc}).appendTo(".Ruins ");
					break;
					case 1:
						$("<li/>", {"class":"head"+j}).appendTo(".His_Building ");
						$("<a/>",{"href":"#","text":result[getnumofdata[j]].Heritage_title}).appendTo(".head"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".His_Building ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"txt"+j ,"text":result[getnumofdata[j]].Heritage_desc}).appendTo(".His_Building ");

					break;
					case 2:
						$("<li/>", {"class":"head"+j}).appendTo(".Tra_Art ");
						$("<a/>",{"href":"#","text":result[getnumofdata[j]].Heritage_title}).appendTo(".head"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Tra_Art ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"txt"+j ,"text":result[getnumofdata[j]].Heritage_desc}).appendTo(".Tra_Art ");
					break;
					case 3:
						$("<li/>", {"class":"head"+j}).appendTo(".Folk ");
						$("<a/>",{"href":"#","text":result[getnumofdata[j]].Heritage_title}).appendTo(".head"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Folk ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"txt"+j ,"text":result[getnumofdata[j]].Heritage_desc}).appendTo(".Folk ");
					break;
					case 4:
						$("<li/>", {"class":"head"+j}).appendTo(".Monuments ");
						$("<a/>",{"href":"#","text":result[getnumofdata[j]].Heritage_title}).appendTo(".head"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Monuments ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"txt"+j ,"text":result[getnumofdata[j]].Heritage_desc}).appendTo(".Monuments ");
					break;
					case 5:
						$("<li/>", {"class":"head"+j}).appendTo(".Antiquities ");
						$("<a/>",{"href":"#","text":result[getnumofdata[j]].Heritage_title}).appendTo(".head"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Antiquities ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"txt"+j ,"text":result[getnumofdata[j]].Heritage_desc}).appendTo(".Antiquities ");
					break;
					case 6:
						$("<li/>", {"class":"head"+j}).appendTo(".landscape ");
						$("<a/>",{"href":"#","text":result[getnumofdata[j]].Heritage_title}).appendTo(".head"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".landscape ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"txt"+j ,"text":result[getnumofdata[j]].Heritage_desc}).appendTo(".landscape ");
					break;

				}
			}
			// -------------------------------------------------------------------------------------------------------------------------
		}
		var url = window.location.toString();
		var getnum=url.split('?');
		for (var i = 0 ;i<result[getnum[1]].Heritage_Image.length; i++) {
			$("<li/>", {"class":"pic"+i}).appendTo(".item-pic ");
			$("<img>",{"src":result[getnum[1]].Heritage_Image[i]}).appendTo(".pic"+i);
		}
		$("<li/>", {"class":"Heritage_title","text":result[getnum[1]].Heritage_title}).appendTo(".content");
		$("<li/>", {"class":"Heritage_class","text":result[getnum[1]].Heritage_class}).appendTo(".content");
		$("<li/>", {"class":"Heritage_desc","text":result[getnum[1]].Heritage_desc}).appendTo(".content");

	});
	// $.cookie('favorite', 'myValue', { path:'/', expires:120000  });
	$( document ).ready(function() {
		var url = window.location.toString();
		var num=url.split("?");
		var x=$.cookie('name', 'value', { expires: 1, path: '/' });
		console.log($.cookie('name'));
		;

});
	
	

