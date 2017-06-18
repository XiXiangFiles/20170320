
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
			// $("<button/>", {"class":i,'text':array[i]}).appendTo(".title ");
			// $("<a/>",{"text":array[i]}).appendTo("."+i);
			if (i==0) {
				$("<li/>", {"class":"-1"}).appendTo(".title ");
				$("<a/>",{"href":"detail.html","text":"查看我的最愛"}).appendTo(".-1");
				$("<li/>", {"class":"clear"}).appendTo(".title ");
			}
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
						
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Ruins ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"Ruins"+j}).appendTo(".Ruins ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Ruins"+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							if (text_h.match("地址：")!=null) {
								 $("<li/>", {"class":"txt"+j ,"text":text_h}).appendTo(".Ruins ");

							}
						}
					break;
					case 1:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						
						$("<li/>", {"class":"pic"+i+j}).appendTo(".His_Building ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"His_Building"+j}).appendTo(".His_Building ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".His_Building"+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							if (text_h.match("地址：")!=null) {
								 $("<li/>", {"class":"txt"+j ,"text":text_h}).appendTo(".His_Building ");

							}
						}
					break;
					case 2:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						
					
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Tra_Art ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"Tra_Art"+j}).appendTo(".Tra_Art ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Tra_Art"+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							if (text_h.match("地址：")!=null) {
								 $("<li/>", {"class":"txt"+j ,"text":text_h}).appendTo(".Tra_Art ");

							}
						}
					break;
					case 3:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						
						
						
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Folk ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"Folk"+j}).appendTo(".Folk ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Folk"+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							if (text_h.match("地址：")!=null) {
								 $("<li/>", {"class":"txt"+j ,"text":text_h}).appendTo(".Folk ");

							}
						}
					break;
					case 4:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						
			
						
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Monuments ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"Monuments"+j}).appendTo(".Monuments ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Monuments"+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							if (text_h.match("地址：")!=null) {
								 $("<li/>", {"class":"txt"+j ,"text":text_h}).appendTo(".Monuments ");

							}
						}
					break;
					case 5:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						
				
						
						$("<li/>", {"class":"pic"+i+j}).appendTo(".Antiquities ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"Antiquities"+j}).appendTo(".Antiquities ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".Antiquities"+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							if (text_h.match("地址：")!=null) {
								 $("<li/>", {"class":"txt"+j ,"text":text_h}).appendTo(".Antiquities ");

							}
						}
					break;
					case 6:
						var text=result[getnumofdata[j]].Heritage_desc;
						text=text.split('\r\n');
						
						$("<li/>", {"class":"pic"+i+j}).appendTo(".landscape ");
						$("<img>",{"src":result[getnumofdata[j]].Heritage_Image[0]}).appendTo(".pic"+i+j);
						$("<li/>", {"class":"landscape"+j}).appendTo(".landscape ");
						$("<a/>",{"href":"items.html?"+getnumofdata[j],"text":result[getnumofdata[j]].Heritage_title}).appendTo(".landscape"+j);
						for(var k=0;k<text.length-1;k++){
							var text_h=text[k];
							if (text_h.match("地址：")!=null) {
								 $("<li/>", {"class":"txt"+j ,"text":text_h}).appendTo(".landscape ");

							}
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
			var select=$.cookie('favorite');
			// console.log("favorite= "+select);
			select=select.split(';');

			for(var x=0; x<select.length-1 ; x++){
				$("<input/>", {"id":x,'type':"checkbox",'name':x}).appendTo(".myfavorite ");
				$("<br>").appendTo(".myfavorite");
				$("<li/>", {"class":"pic"+x}).appendTo(".myfavorite ");
				$("<img>",{"src":result[select[x]].Heritage_Image[0]}).appendTo(".pic"+x);
				$("<li/>", {"class":"content"+x}).appendTo(".myfavorite");
				$("<a/>",{"href":"items.html?"+select[x],"text":result[select[x]].Heritage_title}).appendTo("."+"content"+x);
			}
		}catch(e){}
		// try{
			$( document ).ready(function() {
			var url = window.location.toString();
			var num=url.split("?");
			var cookie=$.cookie('favorite');
			$('.add').click(function(){
				if (cookie == null) {
				$.cookie('favorite',num[1]+";" , { expires: 3600, path: '/' });
				}else{
					var tag=false;
					var str=cookie.split(';');
					for(var x=0 ; x<str.length; x++ ){
						// console.log(str[x]);
						if(str[x]==num[1]) {tag=false;break;}
						else tag=true; 
					}
					if(tag){
						cookie+=num[1]+";";
						$.cookie('favorite',cookie , { expires: 3600, path: '/' });
					}
				}

			});	
	});
// ----------------------------------------------------------------- 刪除cookie
			function check(test){
				var obj=document.getElementById(test);
				if (obj.checked) {
					return false;
				}else{
					return true;
				}
			}
			// $( document ).ready(function() {
			var cookie=$.cookie('favorite');
			$('.del').click(function(){
				var select=$.cookie('favorite');
				select=select.split(';');
				var newcookie="";
				for(var x=0; x<select.length-1 ; x++){
					if(check(x)){
						newcookie+=select[x]+";";
					}
				}
			$.cookie('favorite',newcookie , { expires: 3600, path: '/' });	
			window.location.reload();

	});

		// ----------------------------------------------------------------------------------------------------動畫
		var winWidth=0;
 		winWidth=window.innerWidth;
 		if(winWidth>1200){
 				$('.select').css({'display':'none'});
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
 		}else{
 			var tag=0;
 			var Ruins = document.getElementById("Ruins").Ruins;
 			var His_Building = document.getElementById("His_Building").His_Building;
 			var Tra_Art = document.getElementById("Tra_Art").Tra_Art;
 			var Folk = document.getElementById("Folk").Folk;
 			var Monuments = document.getElementById("Monuments").Monuments;
 			var Antiquities = document.getElementById("Antiquities").Antiquities;
 			var landscape = document.getElementById("landscape").landscape;
 			function reset(){
 				Ruins=-1;
 				His_Building=-1;
 				Tra_Art=-1;
 				Folk=-1;
 				Monuments=-1;
 				Antiquities=-1;
 				landscape=-1;
 				$('#Ruins').css({'display':'none'});
				$('#His_Building').css({'display':'none'});
				$('#Tra_Art').css({'display':'none'});
	 			$('#Folk').css({'display':'none'});
				$('#Monuments').css({'display':'none'});
				$('#Antiquities').css({'display':'none'});
				$('#landscape').css({'display':'none'});
 			}
 			for(var k=0 ; k<7;k++){
 				array=object[k];
 				for(var l=0;l<array.length ; l++){
 					if(k==0){
 						$("<option />", {"value":array[l],'text':result[array[l]].Heritage_title}).appendTo("#Ruins ");
 					}else if(k==1){
 						$("<option />", {"value":array[l],'text':result[array[l]].Heritage_title}).appendTo("#His_Building ");
 					}else if(k==2){
 						$("<option />", {"value":array[l],'text':result[array[l]].Heritage_title}).appendTo("#Tra_Art ");
 					}else if(k==3){
 						$("<option />", {"value":array[l],'text':result[array[l]].Heritage_title}).appendTo("#Folk ");
 					}else if(k==4){
 						$("<option />", {"value":array[l],'text':result[array[l]].Heritage_title}).appendTo("#Monuments ");
 					}else if(k==5){
 						$("<option />", {"value":array[l],'text':result[array[l]].Heritage_title}).appendTo("#Antiquities ");
 					}else if(k==6){
 						$("<option />", {"value":array[l],'text':result[array[l]].Heritage_title}).appendTo("#landscape ");
 					}
 				}
 			}
 			$("<button/>", {"class":'search','text':'搜尋'}).appendTo(".select ");

 			$('.0').click(function(){
 					reset();
 				tag++;
 				if((tag%2)==0){
 					$('#Ruins').css({'display':'none'});
 					
 				}else{
 					$('#Ruins').css({'display':'block'});
 					
 				}
			});
			$('.1').click(function(){
				reset();

				tag++;
 				if((tag%2)==0){
 					$('#His_Building').css({'display':'none'});
 				}else{
 					$('#His_Building').css({'display':'block'});
 					
 				}
			});
			$('.2').click(function(){
				reset();
				tag++;


 				if((tag%2)==0){
 					$('#Tra_Art').css({'display':'none'});
 					
 				}else{
 					$('#Tra_Art').css({'display':'block'});
 					
 				}
			});
			$('.3').click(function(){
				reset();
 				tag++;


 				if((tag%2)==0){
 					reset();
 					$('#Folk').css({'display':'none'});
 					
 				}else{
 					$('#Folk').css({'display':'block'});
 					
 				}
			});
			$('.4').click(function(){
 				tag++;
 				reset();


 				if((tag%2)==0){
 					$('#Monuments').css({'display':'none'});
 					
 				}else{
 					$('#Monuments').css({'display':'block'});

 					
 				}
			});
			$('.5').click(function(){
				reset();
 				tag++;


 				if((tag%2)==0){
 					$('#Antiquities').css({'display':'none'});
 					
 				}else{
 					$('#Antiquities').css({'display':'block'});
 				}
			});
			$('.6').click(function(){
				reset();
 				tag++;

 				if((tag%2)==0){
 					$('#landscape').css({'display':'none'});
 					
 				}else{
 					$('#landscape').css({'display':'block'});
 					
 				}
			});
			$('.search').click(function(){
 			Ruins = document.getElementById("Ruins").value;
 			His_Building = document.getElementById("His_Building").value;
 			Tra_Art = document.getElementById("Tra_Art").value;
 			Folk = document.getElementById("Folk").value;
 			Monuments = document.getElementById("Monuments").value;
 			Antiquities = document.getElementById("Antiquities").value;
 			landscape = document.getElementById("landscape").value;
	 			if(Ruins!=-1){
	 				document.location.href="items.html?"+Ruins;
	 			}
	 			if(His_Building!=-1){
	 				document.location.href="items.html?"+His_Building;
	 			}
	 			if(Tra_Art!=-1){
	 				document.location.href="items.html?"+Tra_Art;
	 			}
	 			if(Folk!=-1){
	 				document.location.href="items.html?"+Folk;
	 			}
	 			if(Monuments!=-1){
	 				document.location.href="items.html?"+Monuments;
	 			}
	 			if(Antiquities!=-1){
	 				document.location.href="items.html?"+Antiquities;
	 			}
	 			if(landscape!=-1){
	 				document.location.href="items.html?"+landscape;
	 			}
			});
 		}


		$(function(){
		var $showImage = $('#show-image');
		$('#showbox-list img').mouseover(function(){
			$showImage.attr('src', $(this).attr('href'));
			var url=$(this).attr('href');
			url=url.split("?");
			$('.showbox a').attr('href',"items.html?"+url[1]);
			
		}).click(function(){
			return false;
		});
		});
	});

	
