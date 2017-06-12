
	var  data;

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
			if (i==0) {
				$("<li/>", {"class":"-1"}).appendTo(".title ");
				$("<a/>",{"href":"detail.html","text":"查看我的最愛"}).appendTo(".-1");
				$("<li/>", {"class":"clear"}).appendTo(".title ");
			}
			// console.log("i="+i+"\n");
		}


		for (var i = 0 ;i < 7; i++) {//slide
			var array=[];
			array=object[i];
			var url=getpicnum(array);
			var split=url.split("?");
			// --------------------------------------------------slide
			// $("<li/>", {"class":"pic"+i}).appendTo(".slidepic ");
			$("<a/>",{"href":"items.html?"+split[1],"class":"pic"+i+"_"}).appendTo("#showbox-list");
			$("<img>",{"src":url,"href":url}).appendTo(".pic"+i+"_");
// ------------------------------------------------------------------slide
			var getnumofdata=contentselect(array);

			for (var j = 1; j < 3; j++) {
				switch(i){
					case 0:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						$("<li/>", {"class":"Ruins"+j}).appendTo(".Ruins ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Ruins"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Ruins ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							text_h=text_h.split('：');
							$("<li/>", {"class":"txt"+j ,"text":text_h[0]}).appendTo(".Ruins ");
							$("<br/>").appendTo(".Ruins ");
							$("<span/>", {"class":"txtspan"+j ,"text":text_h[1]}).appendTo(".Ruins" );
							$("<br/>").appendTo(".Ruins ");
						}
					break;
					case 1:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						$("<li/>", {"class":"His_Building"+j}).appendTo(".His_Building ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".His_Building"+j);
						// console.log("result[getnumofdata[j]].Heritage_title=  "+result[getnumofdata[j]].Heritage_title);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".His_Building ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							text_h=text_h.split('：');
							$("<li/>", {"class":"txt"+j ,"text":text_h[0]}).appendTo(".His_Building ");
							$("<br/>").appendTo(".His_Building ");
							$("<span/>", {"class":"txtspan"+j ,"text":text_h[1]}).appendTo(".His_Building" );
							$("<br/>").appendTo(".His_Building ");
						}
					break;
					case 2:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						$("<li/>", {"class":"Tra_Art"+j}).appendTo(".Tra_Art ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Tra_Art"+j);
						// console.log("result[getnumofdata[j]].Heritage_title=  "+result[getnumofdata[j]].Heritage_title);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Tra_Art ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							text_h=text_h.split('：');
							$("<li/>", {"class":"txt"+j ,"text":text_h[0]}).appendTo(".Tra_Art ");
							$("<br/>").appendTo(".Tra_Art ");
							$("<span/>", {"class":"txtspan"+j ,"text":text_h[1]}).appendTo(".Tra_Art" );
							$("<br/>").appendTo(".Tra_Art ");
						}
					break;
					case 3:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						$("<li/>", {"class":"Folk"+j}).appendTo(".Folk ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Folk"+j);
						// console.log("result[getnumofdata[j]].Heritage_title=  "+result[getnumofdata[j]].Heritage_title);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Folk ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							text_h=text_h.split('：');
							$("<li/>", {"class":"txt"+j ,"text":text_h[0]}).appendTo(".Folk ");
							$("<br/>").appendTo(".Folk ");
							$("<span/>", {"class":"txtspan"+j ,"text":text_h[1]}).appendTo(".Folk" );
							$("<br/>").appendTo(".Folk ");
						}
					break;
					case 4:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						$("<li/>", {"class":"Monuments"+j}).appendTo(".Monuments ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Monuments"+j);
						// console.log("result[getnumofdata[j]].Heritage_title=  "+result[getnumofdata[j]].Heritage_title);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Monuments ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							text_h=text_h.split('：');
							$("<li/>", {"class":"txt"+j ,"text":text_h[0]}).appendTo(".Monuments ");
							$("<br/>").appendTo(".Monuments ");
							$("<span/>", {"class":"txtspan"+j ,"text":text_h[1]}).appendTo(".Monuments" );
							$("<br/>").appendTo(".Monuments ");
						}
					break;
					case 5:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						$("<li/>", {"class":"Antiquities"+j}).appendTo(".Antiquities ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Antiquities"+j);
						// console.log("result[getnumofdata[j]].Heritage_title=  "+result[getnumofdata[j]].Heritage_title);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Antiquities ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							text_h=text_h.split('：');
							$("<li/>", {"class":"txt"+j ,"text":text_h[0]}).appendTo(".Antiquities ");
							$("<br/>").appendTo(".Antiquities ");
							$("<span/>", {"class":"txtspan"+j ,"text":text_h[1]}).appendTo(".Antiquities" );
							$("<br/>").appendTo(".Antiquities ");
						}
					break;
					case 6:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						$("<li/>", {"class":"landscape"+j}).appendTo(".landscape ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".landscape"+j);
						$("<li/>", {"class":"pic"+i+j}).appendTo(".landscape ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							text_h=text_h.split('：');
							$("<li/>", {"class":"txt"+j ,"text":text_h[0]}).appendTo(".landscape ");
							$("<br/>").appendTo(".landscape ");
							$("<span/>", {"class":"txtspan"+j ,"text":text_h[1]}).appendTo(".landscape" );
							$("<br/>").appendTo(".landscape ");
						}
					break;
					
				}
			}
// -------------------------------------------------------------------------------------------------------------------------內容
		}


		try{
		var url = window.location.toString();
		var getnum=url.split('?');
		for (var i = 0 ;i<result[getnum[1]].Heritage_Image.length-1; i++) {
			$("<li/>", {"class":"pic"+i}).appendTo(".item-pic ");
			$("<img>",{"src":result[getnum[1]].Heritage_Image[i]}).appendTo(".pic"+i);
		}
		$("<li/>", {"class":"Heritage_title","text":result[getnum[1]].Heritage_title}).appendTo(".content");
		$("<li/>", {"class":"Heritage_class","text":result[getnum[1]].Heritage_class}).appendTo(".content");
		var str=result[getnum[1]].Heritage_desc;
		str=str.split('\r\n');
		console.log("getnum[1]=  "+getnum[1]);
		for(var k=0;k<str.length-1;k++){
			var text_h=result[getnum[1]].Heritage_desc;
			text_h=text_h.split('：');
			$("<li/>", {"class":"Heritage_desc" ,"text":text_h[k++]}).appendTo(".content ");
			$("<br/>").appendTo(".content ");
			$("<span/>", {"class":"Heritage_desc" ,"text":text_h[k++]}).appendTo(".content" );
			$("<br/>").appendTo(".content ");
		}
		
		}catch(e){

		}

		for (var i = 0 ;i < 7; i++) {// 顯示所有的細項
			var array=[];
			array=object[i];
			$("<ul/>", {"class":"pull"+i}).appendTo(".pullselect");
			for (var j = 0 ; j <array.length ; j++) {
				$("<li/>", {"class":"sec-story"+array[j]}).appendTo(".pull"+i);
				$("<a/>",{"href":"items.html?"+array[j],"text":result[array[j]].Heritage_title}).appendTo("."+"sec-story"+array[j]);
			}
			
		}

		try{
			$( document ).ready(function() {
			var url = window.location.toString();
			var num=url.split("?");
			var cookie=$.cookie('favorite');
			$('.add').click(function(){
				if (cookie == null) {
				$.cookie('favorite',num[1]+";" , { expires: 1, path: '/' });
				}else{
					cookie+=num[1]+";";
					$.cookie('favorite',cookie , { expires: 1, path: '/' });
				}
				console.log($.cookie('favorite'));
			});
				
			var select =$.cookie('favorite');
			
			var s_str=select.split(";");
			// console.log("s_str="+s_str);
			for (var i = 0; i < s_str.length-1; i++) {
				// console.log("s_str="+s_str[i]);
			$("<ul/>", {"class":i}).appendTo(".myfavorite ");
			$("<li/>", {"class":"Heritage_class","text":data[s_str[i]].Heritage_class}).appendTo(".i");
			$("<li/>", {"class":"Heritage_class","text":data[s_str[i]].Heritage_class}).appendTo(".i");
			$("<li/>", {"class":"Heritage_desc","text":data[s_str[i]].Heritage_desc}).appendTo(".i");
		}
	});
		}catch(e){}

		// ----------------------------------------------------------------------------------------------------動畫

		$('.0 , .pull0').hover(function(){
			$('.pullselect').css({'display':'block'});
			$('.pull0').css({'display':'block','height':'100%'});
		},function(){
			$('.pullselect').css({'display':'none'});
			$('.pull0').css({'display':'none'});
		});
		$('.1 , .pull1').hover(function(){
			$('.pullselect').css({'display':'block'});
			$('.pull1').css({'display':'block','height':'100%'});
		},function(){
			$('.pullselect').css({'display':'none'});
			$('.pull1').css({'display':'none'});
		});
		$('.2 , .pull2').hover(function(){
			$('.pullselect').css({'display':'block'});
			$('.pull2').css({'display':'block','height':'100%'});
		},function(){
			$('.pullselect').css({'display':'none'});
			$('.pull2').css({'display':'none'});
		});

		$('.3 , .pull3').hover(function(){
			$('.pullselect').css({'display':'block'});
			$('.pull3').css({'display':'block','height':'100%'});
		},function(){
			$('.pullselect').css({'display':'none'});
			$('.pull3').css({'display':'none'});
		});
		$('.4 , .pull4').hover(function(){
			$('.pullselect').css({'display':'block'});
			$('.pull4').css({'display':'block','height':'100%'});
		},function(){
			$('.pullselect').css({'display':'none'});
			$('.pull4').css({'display':'none'});
		});
		$('.5 , .pull5').hover(function(){
			$('.pullselect').css({'display':'block'});
			$('.pull5').css({'display':'block','height':'100%'});
		},function(){
			$('.pullselect').css({'display':'none'});
			$('.pull5').css({'display':'none'});
		});
		$('.6 , .pull6').hover(function(){
			$('.pullselect').css({'display':'block'});
			$('.pull6').css({'display':'block','height':'100%'});
		},function(){
			$('.pullselect').css({'display':'none'});
			$('.pull6').css({'display':'none'});
		});

		$(function(){
		var $showImage = $('#show-image');
		$('#showbox-list img').mouseover(function(){
			$showImage.attr('src', $(this).attr('href'));
			var url=$(this).attr('href');
			url=url.split("?");
			$('.showbox a').attr('href',"items.html?"+url[1]);
			// console.log($(this).attr('href'));
		}).click(function(){
			return false;
		});
		});
	});
// ----------------------------------------------------------------------------------------cookie
	
