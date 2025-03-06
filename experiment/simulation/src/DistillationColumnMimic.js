	 var startCount=0;
     var datasheetCount=0;
     var trendsCount=0;
	 var masterJson = [];
	 var sample = 90;
	 let  dataInterval;
	 var selectedValue=1000;
function DistillationColumnMimic(){
	
    timerMasterJson.squences=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	updateCounter();
	
$("#Header").html("	<center><span >SIMULATION</span></center>");
	
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#myModal1" disabled>Start</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="resetBtn" class="btn btn-danger" style="width:100%" disabled>Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheetBtn" class="btn btn-danger" style="width:100%;margin-top:10px;"  data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button  id="graph" type="button" class="btn btn-danger"  style="margin-top:10px;width:100%" data-toggle="modal" data-target="#modalTrends1" disabled>Trends </button>'
		+'</div>'
		+'</div>'
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
	
		+'<div class="row conf" >'
		+'<table class="table table-bordered">'
		+' <thead>'

		+'</thead>'
		+'<tbody>'
		+'  <tr>'
		+' <td><label><b>TT 1 </b></label></td>'
		+' <td><label class="PMCValue" id="tt1">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT 2 </b></label></td>'
		+' <td><label class="PMCValue" id="tt2">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT 3 </b></label></td>'
		+' <td><label class="PMCValue" id="tt3">0</label>°C</td>'
		+'  </tr>'
		+' <tr>'
		+'   <td><label><b>FT 1 </b></label></td>'
		+'   <td><label class="PMCValue" id="ft1">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FT 2  </b></label></td>'
		+' <td><label class="PMCValue" id="ft2">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FT 3 </b></label></td>'
		+' <td><label class="PMCValue" id="ft3">0</label>lph</td>'
		+'  </tr>'
		
//		+'  <tr>'
//		+' <td><label><b>CV-2</b></label></td>'
//		+' <td><label class="PMCValue" id="hf">0</label>%</td>'
//		+'  </tr>'
		
//		+'  <tr>'
//		+' <td><label><b>Motor 2</b></label></td>'
//		+' <td><label class="PMCValue" id="motor2">0</label>%</td>'
//		+'  </tr>'
//		+'  <tr>'
//		+' <td><label><b>Motor 3</b></label></td>'
//		+' <td><label class="PMCValue" id="motor3">0</label>%</td>'
//		+'  </tr>'
		
//		+'  <tr>'
//		+' <td><label><b>SCR </b></label></td>'
//		+' <td><label class="PMCValue" id="scr">0</label>%</td>'
//		+'  </tr>'

		+'  <tr>'
		+' <td><label><b>LT</b></label></td>'
		+' <td><label class="PMCValue" id="lt">0</label>mm</td>'
		+'  </tr>'
		
//		+'  <tr>'
//		+' <td><label><b>Valve 3 </b></label></td>'
//		+' <td><label class="PMCValue" id="v3">0</label>%</td>'
//		+'  </tr>'
		
//		+'  <tr>'
//		+' <td><label><b>Valve 5 </b></label></td>'
//		+' <td><label class="PMCValue" id="v5">0</label>%</td>'
//		+'  </tr>'
		
		+'  <tr>'
		+' <td><label><b>PT</b></label></td>'
		+' <td><label class="PMCValue" id="pt">0</label>Bar</td>'
		+'  </tr>'
		
		+'</tbody>'
		+'</table>'

		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled >Result</button>'
		+'</div>'
		
		+'<div class="modal fade " id="datasheetModel">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Datasheet</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="datasheetBody">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<!-- The Modal -->'  
   +'<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="modelTitle1" aria-hidden="true">'  
  +'<div class="modal-dialog" id="modelDialog1" role="document">'  
    +'<div class="modal-content">'  
     +' <!-- Modal Header -->'  
      +'<div class="modal-header"> ' 
       +' <h4 class="modal-title" id="modelTitle1"></h4>  '
        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'  
        +'  <span aria-hidden="true">&times;</span>'  
        +'</button>'  
      +'</div>  '
      +'<!-- Modal body -->  '
      +'<div class="modal-body" id="modelBody1"> ' 
       +' <!-- Content will be populated here -->'  
      +'</div> ' 
      +'<!-- Modal footer --> ' 
      +'<div class="modal-footer">  '
        +'<button type="button" class="btn btn-danger" data-dismiss="modal" id = "modalClose">OK</button>'  
      +'</div>'  
    +'</div>'  
 +' </div> ' 
+'</div>'  
+'<!-- End Modal -->'
		
		
+'<div class="modal fade " id="modalTrends1">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Graph</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="trends1">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		  
	
	$("#Selection").html(htm);
	
	DistillationColumnDiagram();
	$("#resetBtn").click(function(){
		
		$("#diagram").html("");
		 flg = 0;
		 sample = 0;
//		 console.log(dataArr.length);
//		 dataArr=[];
		 clearInterval(dataInterval);
		DistillationColumnDiagram();
		$("#resetBtn").prop("disabled",true);
			
		});
		
	$("#graph").click(function(){
		trendsCount++;
		$("#trends1").empty("");
		var htm=''
		
	for(var i=0;i<masterJson.length;i++){
		
		var rowStr='RowDiv'+(i+1);
		var strId='download'+i;
		var ButtonDiv='ButtonDiv'+i;	
		htm+='<div class="Container-fluid">'

			
		  htm+="<div class='row' id='"+rowStr+"'>"
			
			var GraphData='sensorGraphCold'+i;
			var CheckBoxData='CheckBox'+i;
		    htm+="<div class='col-sm-12' id="+CheckBoxData+">"
			+'</div>'
		    +"<div class='col-sm-12' id="+GraphData+">"
			+'</div>'
			 +"<div class='col-sm-12' id="+ButtonDiv+">"
			 
			+'</div>'		
		 	
		$("#trends1").append(htm);
		
			DistillationColumnGraph(masterJson[i],i);
//		tempratureSensorGraphHot(dataArr[i],i);
	
			
	}	
		});
		
	$("#datasheetBtn").click(function(){
	    datasheetCount++;
	    DistillationColumnDatasheet();
		});
		
	$("#btnResult").click(function(){
		resultJson.animationStart=startCount;
		resultJson.datasheet=datasheetCount;
		resultJson.trends=trendsCount;
		result();
	});

}
function DistillationColumnDiagram()
{
	
	var dataArr = [];
	//function mimic() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

//	$('#canvas-div').removeAttr('width');
//	$('#canvas-div').removeAttr('height');
//	dataArr=[];
	var w = 1500;
	var h = 1000;
$("#diagram").html("");
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
		x = 10;
		y = 10;
		
//		time = 1000;
        time = selectedValue;
		var bubbleInterval;	
		
		
	var phaseBox = 	paper.rect(x+40 , y + 30, 300, 200, 4).attr({
    'fill': '#fff', // Initial white fill
    'stroke': '#333', // Dark gray border
    'stroke-width': 3,
	});

	var startP1 = paper.image("images/green.png", x+60, y+50, 50, 50);
	var startP2 = paper.image("images/green.png", x+60, y+120, 50, 50);
	var startP3 = paper.image("images/green.png", x+60, y+180, 50, 50);
	
	var endP1 = paper.image("images/red.png", x+60, y+50, 50, 50);
	var endP2 = paper.image("images/red.png", x+60, y+120, 50, 50);
	var endP3 = paper.image("images/red.png", x+60, y+180, 50, 50);
	

	
	var wimg = paper.image("images/red.png", x+170, y+60, 50, 50);
	var eimg = paper.image("images/red.png", x+250, y+60, 50, 50);
	var aimg = paper.image("images/red.png", x+250, y+150, 50, 50);
	var simg = paper.image("images/red.png", x+170, y+150, 50, 50);	
	
	
	
		var txt = paper.text(x+82 , y + 40, "START UP").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +82, y + 110, "RUNNING").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x + 90, y + 172, "SHUT DOWN").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +200, y + 50, "Electricity").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +270, y + 50, "Air").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +190, y + 140, "Water").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		paper.text(x + 280, y + 140, "Steam demand").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		
	//Feed tank 
	tank(x+150, y+400); 
	// tank 4
	tank(x+1300, y+400); 
	tank(x+1300, y+100); 	
		// function to draw tank
	function tank(x, y) {
		paper.path('M' + (x ) + ' ' + (y ) + 'l 50 0 l 0 30 l 40 30 l 0 100 l -130 0 l 0 -100 l 40 -30 z').attr({ 'stroke': 'black', 'stroke-width': '3' });
	}
	
	var water = paper.path('M'+ (x + 240) + ' ' + (y + 540) + ' l  200 0 l 0 0 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" }); //feed tank to motor
	var valve1G = paper.image("images/svValveH2G.png", x+290, y+505, 50, 50);
	
	var valve1 = paper.image("images/redValve.png", x+290, y+505, 50, 50).toFront();
	var Lttnk1 = paper.image("images/llindicator.png", x+90, y+530, 45, 20).toFront();
	

	
	var motorImg1 = paper.image("images/pumpPeri.png", x+400, y+520, 70, 70).attr({ 'transform': 'r' + 180 });
	paper.circle(x + 435, y + 558, 40).attr({ 'stroke': '#6f8696', 'stroke-width': '5', 'fill': '' }).toFront();
	
	
	var motorImg3 = paper.image("images/motor.png", x+1050, y+200, 90, 90);
	var motor3 = paper.circle(x + 1095, y + 250, 15).attr({ 'stroke': '50-#fff-#000', 'stroke-width': '1', 'fill': '50-#a61226-#ed0c13' }).toFront();
	var motor1 = paper.circle(x + 434, y + 554, 10).attr({ 'stroke': '50-#fff-#000', 'stroke-width': '1', 'fill': '50-#a61226-#ed0c13' }).toFront();
	paper.image("images/pt.png", x+650, y+20, 50, 50);

	// motor to boiler
	var water = paper.path('M'+ (x + 405) + ' ' + (y + 587) + ' l  -50 0 l 0 30 l 150 0 l 0 -230 l 30 0 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	//boiler to heat exchanger
	var water = paper.path('M'+ (x + 600) + ' ' + (y + 70) + ' l  230 0 l 0 30 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// heat exchanger to tank2
	var water = paper.path('M'+ (x + 930) + ' ' + (y + 145) + ' l 0 160 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// tank2 to motor
	var water = paper.path('M'+ (x + 1000) + ' ' + (y + 300) + ' l 0 195  l  -57 0  M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// motor to tank4
	var water = paper.path('M'+ (x + 957) + ' ' + (y + 530) + ' l  220  0 l  0 -70  M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// control valve to boiler
	var water = paper.path('M'+ (x + 1080) + ' ' + (y + 550) + ' l  0  50  l -300  0 l 0 -450 l -150 0 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// control valve to product tank
	var water = paper.path('M'+ (x + 1178) + ' ' + (y + 420) + ' l  0  -50  l 140 0 l 0 30 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// water tank to motor
	var water = paper.path('M'+ (x + 1260) + ' ' + (y + 250) + ' l  -132 0   M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// motor to heat exchanger
	var water = paper.path('M'+ (x + 1061) + ' ' + (y + 250) + ' l  -40 0  l 0 -180 l  -50 0 l 0 30  M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// heat exchanger to out
	var water = paper.path('M'+ (x + 850) + ' ' + (y + 100) + ' l 0  -60 l 500 0  M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	// boiler to angle valve
	var water = paper.path('M'+ (x + 600) + ' ' + (y + 100) + ' l -100  0 l 0 -80  M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	
	var water = paper.path('M'+ (x + 930) + ' ' + (y + 290) + ' l  -30 0  l 0 -70 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	
	var water = paper.path('M'+ (x + 620) + ' ' + (y + 580) + ' l   0 120 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	var water = paper.path('M'+ (x + 1175) + ' ' + (y + 530) + ' l   0 120 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	var water = paper.path('M'+ (x + 1390) + ' ' + (y + 535) + ' l   90 0 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	var line = paper.path('M'+ (x + 20) + ' ' + (y + 385) + ' l  150 0 l 0 50 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	var line1 = paper.path('M'+ (x + 1480) + ' ' + (y + 80) + ' l  -150 0 l 0 50 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
	
	
	var connct = paper.path('M'+ (x + 680) + ' ' + (y + 380) + ' l  60 0 M ').attr({  "stroke": "#818080",  "stroke-width": 5 ,"stroke-linejoin": "round" });
	var connct = paper.path('M'+ (x + 680) + ' ' + (y + 485) + ' l  60 0 M ').attr({  "stroke": "#818080",  "stroke-width": 5 ,"stroke-linejoin": "round" });
	var connct = paper.path('M'+ (x + 840) + ' ' + (y + 360) + ' l  30 0 M ').attr({  "stroke": "#818080",  "stroke-width": 5 ,"stroke-linejoin": "round" });
	var valveMG = paper.image("images/svValve2G.png", x+80, y+350, 50, 50);
	var valveM  = paper.image("images/svValve2.png", x+80, y+350, 50, 50);
	var valveMG1 = paper.image("images/svValve2G.png", x+1380, y+45, 50, 50);
	var valveM1  = paper.image("images/svValve2.png", x+1380, y+45, 50, 50);
	paper.image("images/tankInit.png", (x + 20), (y + 350), 60, 70);
	paper.image("images/tankInit1.png", (x + 1420), (y + 40), 60, 70);
	paper.image("images/ttSensor.png", x+550, y+312, 30, 30);
	paper.image("images/ttSensor.png", x+960, y+270, 30, 30);
	paper.image("images/ttSensor.png", x+590, y+20, 30, 30);
	var controlImg = paper.image("images/way3_Control.png", x+1030, y+465, 100, 100);
	var ft2Img = paper.image("images/rotaFT.png", x+1120, y+380, 120, 120);
	var ft1Img = paper.image("images/rotaFT.png", x+720, y+200, 120, 120);
	var ft3Img = paper.image("images/rotaFT.png", x+965, y+100, 120, 120);
	var Lt2 = paper.image("images/llindicator.png", x+1240, y+230, 45, 20).attr({ 'transform': 'r' + 0 });
	var Lh = paper.image("images/lhindicator.png", x+1242, y+160,  45, 20).attr({ 'transform': 'r' + 0 }).toFront();
	
	
	var angleValveG = paper.image("images/angleValveOpen.png", x+488, y+30, 50, 50);
	var angleValveR = paper.image("images/angleValveClose.png", x+488, y+30, 50, 50);
	var angleValveR = paper.image("images/angleValveClose.png", x+890, y+230, 38, 50).attr({ 'transform': 'r' + 0 });;
	var motorImg2 = paper.image("images/pumpPeri.png", x+880, y+490, 70, 70);
	paper.circle(x + 915, y + 524, 39).attr({ 'stroke': '#6f8696', 'stroke-width': '5', 'fill': '' }).toFront();
	var motor2 = paper.circle(x + 918, y + 522, 10).attr({ 'stroke': '50-#fff-#000', 'stroke-width': '1', 'fill': '50-#a61226-#ed0c13' }).toFront();
	
	//motor to boiler
	var valve2G = paper.image("images/svValveH2G.png", x+680, y+115, 50, 50);
	
	var valve2 = paper.image("images/redValve.png", x+680, y+115, 50, 50).toFront();
	
	//tank to motor
	var valveM2G = paper.image("images/svValveH2G.png", x+985, y+400, 50, 50).attr({ 'transform': 'r' + 90 });
	var valveM2 = paper.image("images/redValve.png", x+985, y+400, 50, 50).attr({ 'transform': 'r' + 90 }).toFront();
	
	// motor to product tank
	var valve4G = paper.image("images/svValveH2G.png", x+1220, y+335, 50, 50);
	var valve4R = paper.image("images/redValve.png", x+1220, y+335, 50, 50).attr({ 'transform': 'r' + 0 }).toFront();
	
	//boiler drain
	var valve3G = paper.image("images/svValveH2G.png", x+605, y+620, 50, 50).attr({ 'transform': 'r' + 90 });
	var valve3R = paper.image("images/redValve.png", x+605, y+620, 50, 50).attr({ 'transform': 'r' + 90 }).toFront();
	
	//sample valve
	var valve6G = paper.image("images/svValveH2G.png", x+1160, y+580, 50, 50).attr({ 'transform': 'r' + 90 })
	var valve6R = paper.image("images/redValve.png", x+1160, y+580, 50, 50).attr({ 'transform': 'r' + 90 }).toFront();
	//product valve
	var valve7R = paper.image("images/redValve.png", x+1420, y+500, 50, 50).attr({ 'transform': 'r' + 0 }).toFront();
	

	// water feed tank
	var valve5G = paper.image("images/svValveH2G.png", x+1160, y+217, 50, 50);
	var valve5R = paper.image("images/redValve.png", x+1160, y+217, 50, 50).attr({ 'transform': 'r' + 0 }).toFront();
	
	paper.image("images/ltSensor.png", x+810, y+320, 50, 50);
	
	 
	 
	  const boilrect = paper.rect(x + 593, y + 50, 40, 300 ,20).attr({
           fill: "#6f8696", // Hot red color initially
//    	 	fill: "50-#fff-#000",
    		stroke: "#000",
   			 "stroke-width": 3,
	});
	
	// boiler rect top
	  const boilrect1 = paper.rect(x + 593, y + 80, 40, 250 ,5).attr({
           fill: "#fff", // Hot red color initially
//    	 	fill: "50-#fff-#000",
    		stroke: "#000",
   			 "stroke-width": 3,
	});
	
	var line = paper.path('M'+ (x + 593) + ' ' + (y + 80) + ' l  40 0 ').attr({  "stroke": "#000",  "stroke-width": 3 ,"stroke-linejoin": "round" });
        
        var x2 = 530, y2 = 440; // Top-left corner
        var width1 = 190, height1 = 200; // Width and height
        var curveHeight1 = 100; // Height of the curve for the bottom edge

        // Define the path for the rectangle
        var path1 = `
            M${x2},${y2} 
            L${x2 + width1},${y2} 
            L${x2 + width1},${y2 + height1 - curveHeight1} 
            Q${x2 + width1 / 2},${y2 + height1} ${x2},${y2 + height1 - curveHeight1} 
            Z`;

        // Draw the shape
        var rectWithCurvedBottom = paper.path(path1);

        // Style the shape
        rectWithCurvedBottom.attr({
            fill: "50-#214565-#66b3ff",
            stroke: "#000",
            "stroke-width": 2
        });
        
        
        // Define rectangle dimensions
       	var x1 = 550, y1= 300 ;
        var width = 150, height = 300; // Width and height
        var curveHeight = 80; // Height of the curve

        // Define the path for the rectangle with curved top and bottom
        var path = `
            M${x1},${y1 + curveHeight} 
            Q${x1 + width / 2},${y1} ${x1 + width},${y1 + curveHeight} 
            L${x1 + width},${y1 + height - curveHeight} 
            Q${x1 + width / 2},${y1 + height} ${x1},${y1 + height - curveHeight} 
            Z`;

        // Draw the shape
        var rectWithCurves = paper.path(path);

        // Style the shape
        rectWithCurves.attr({
            fill: "#214565",
            stroke: "#000",
            "stroke-width": 5
        });
     
     // boiler rectangle animation   
        const rect = paper.rect(x + 542, y + 367, 145, 140, 5).attr({

    	 	fill: "#fff",
    		stroke: "#000",
   			 "stroke-width": 1,
	}).toFront();
	
	
	

	// Function to generate random bubbles
function createBubble() {
    // Generate random x position within the box
    bubbleX = Math.random() * 145 + x + 542;
     bubbleY = y + 367 + 140; // Start at the bottom of the box

    

    // Create a small circle for the bubble
     bubble = paper.circle(bubbleX, bubbleY, 2).attr({
        fill: 'white', // White bubble
        stroke: 'none',
    });

    // Animate the bubble rising
    bubble.animate(
        { cy: y + 367, opacity: 0 }, // Move upward and fade out
        time,
        'ease-out',
        function () {
            bubble.remove(); // Remove the bubble after animation
        }
    );
}
	
	// Create bubbles at intervals
		
		
		
// Stop bubble creation after a certain time (e.g., 10 seconds)
//		setTimeout(function () {
//   		 clearInterval(bubbleInterval);
//		}, time);
	
	function boilAnim(x,y){
		var a = paper.path('M' + (x+615) + ' ' + (y+507) + 'l 0 0').attr({ 'stroke': '#ffe066', 'stroke-width': '144' });
		level1 = a.animate({
			path: "M" + (x+615) + " " + (y +507) + "  l 0  -120 ", 'stroke-width': '144', 'stroke': '#ffe066', 
		}, time);
		
	}
	
	// heat exchanger rectangle
	    const rectex = paper.rect(x + 800, y + 100, 200, 50, 22).attr({

    	 	fill: "#214565",
    		stroke: "#000",
   			 "stroke-width": 3,
	}).toFront();
	
//	 const rectexAnim = paper.rect(x + 820, y + 103, 160, 45).attr({
//
//    	 	fill: "#fff",
//    		stroke: "#000",
//   			 "stroke-width": 3,
//	}).toFront();
	
	
// tank 2 rectangle
	
		 const tank2rect = paper.rect(x + 860, y + 300, 200, 80, 40).attr({

    	 	fill: "#214565",
    		stroke: "#000",
   			 "stroke-width": 3,
	}).toFront();
	
	
		
	
	const tank2Anim = paper.rect(x + 887, y + 305, 140, 72 ,5).attr({

    	 	fill: "#fff",
   		stroke: "#000",
   			 "stroke-width": 3,
	}).toFront();
	
	paper.path('M'+ (x + 522) + ' ' + (y + 530) + ' l  0 70 l 130 0  M ').attr({  "stroke": "#000",  "stroke-width": 1,"stroke-linejoin": "round" });
	paper.path('M'+ (x + 695) + ' ' + (y + 520) + ' l  0 60 M ').attr({  "stroke": "#000",  "stroke-width": 1,"stroke-linejoin": "round" });
//	paper.path('M'+ (x + 695) + ' ' + (y + 610) + ' l  0 20 M ').attr({  "stroke": "#000",  "stroke-width": 1,"stroke-linejoin": "round" });
	var sp =	paper.image("images/spring1.png", x+517, y+430, 25, 100).toFront();
	var sp =	paper.image("images/spring1.png", x+688, y+430, 25, 100).attr({ 'transform': 'r' + 180 }).toFront();
	var heaterRect = paper.rect(x + 650, y + 580, 80, 30 ,5).attr({stroke: "#000","stroke-width": 3}).toFront();
	var scrRect = paper.rect(x + 660, y + 610, 60, 30 ,5).attr({stroke: "#000","stroke-width": 3}).toFront();
	
	setTimeout(function() {
	waterfill(x,y);
	$("#startBtn").prop("disabled",false);
	startP1.toFront();
	var wimg = paper.image("images/green.png", x+170, y+60, 50, 50);
	var eimg = paper.image("images/green.png", x+250, y+60, 50, 50);
	var aimg = paper.image("images/green.png", x+250, y+150, 50, 50);
	var simg = paper.image("images/green.png", x+170, y+150, 50, 50);
	},200);
	function waterfill(x,y){
		
			valveMG.toFront();
		w = [];
		w1 = [];
		w[0] = paper.path('M'  + (x +20) + ' ' + (y+385 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		valveMG.toFront();
		w[0].animate({path : 'M'  + (x +20) + ' ' + (y+385 ) + 'l 150 0 '}, (time/2),function(){
		w[1] = paper.path('M'  + (x +170) + ' ' + (y+385 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		w[1].animate({path : 'M'  + (x +170) + ' ' + (y+385 ) + 'l  0 50'}, (time/2),function(){
			
		var b = paper.path('M' + (x+175) + ' ' + (y+560) + 'l 0 0').attr({ 'stroke': '#ffe066', 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x+175 ) + " " + (y +560) + "  l 0  -100 ", 'stroke-width': '128', 'stroke': '#ffe066', 
		}, time)
		Lttnk1.toFront();
			setTimeout(function() {
				
				l1 = paper.path('M'+ (x + 20) + ' ' + (y + 385) + ' l 150 0 l 0 50  M ').attr({  "stroke": "#818080",  "stroke-width": 8,"stroke-linejoin": "round"  });
				valveM.toFront(); 
//			 valve3 = paper.image("images/svValve2.png", x+120, y+350, 50, 50);
			}, time+100);
			
			})
			
		})
		
		var line1 = paper.path('M'+ (x + 1480) + ' ' + (y + 80) + ' l  -150 0 l 0 50 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
		
		w1[0] = paper.path('M'  + (x +1480) + ' ' + (y+80 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		valveMG1.toFront();
		w1[0].animate({path : 'M'  + (x +1480) + ' ' + (y+80 ) + 'l -150 0 '}, (time/2),function(){
		w1[1] = paper.path('M'  + (x +1330) + ' ' + (y+80 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		w1[1].animate({path : 'M'  + (x +1330) + ' ' + (y+80 ) + 'l  0 50'}, (time/2),function(){
			
			var a = paper.path('M' + (x+1325) + ' ' + (y+258) + 'l 0 0').attr({ 'stroke': '#34deeb', 'stroke-width': '128' });
		level1 = a.animate({
			path: "M" + (x+1325) + " " + (y +258) + "  l 0  -100 ", 'stroke-width': '128', 'stroke': '#34deeb', 
		}, time)
		Lt2.toFront();
		Lh.toFront();
			setTimeout(function() {
				
			 line1 = paper.path('M'+ (x + 1480) + ' ' + (y + 80) + ' l  -150 0 l 0 50 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" });
				valveM1.toFront();
			}, time+100);
			
			})
			
		})
		
		
        
        }
        
//        tankProductf(x,y);
        function tankProductf(x,y){
			var a = paper.path('M' + (x+1325) + ' ' + (y+560) + 'l 0 0').attr({ 'stroke': '#fff5cc', 'stroke-width': '128' });
		level1 = a.animate({
			path: "M" + (x+1325) + " " + (y +560) + "  l 0  -70 ", 'stroke-width': '128', 'stroke': '#fff5cc', 
		}, time*50);
		}
        
        
     
        function boilFeed(x,y){
//			paper.path('M'+ (x + 405) + ' ' + (y + 587) + ' l  -50 0 l 0 30 l 150 0 l 0 -230 l 30 0 M '
			valve1G.toFront();
			motor1.attr("fill","Green");
			var b = paper.path('M' + (x+175) + ' ' + (y+460) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x+175 ) + " " + (y +460) + "  l 0  80 ", 'stroke-width': '128', 'stroke': '#fff', 
		}, time*4);
		Lttnk1.toFront();
			r = [];
			 r[0] = paper.path('M'  + (x +240) + ' ' + (y+540 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		  r[0].animate({path : 'M'  + (x +240) + ' ' + (y+540 ) + 'l 158 0  '}, (time/5),function(){
			  valve1G.toFront();
			   r[1] = paper.path('M'  + (x +405) + ' ' + (y+587 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		  r[1].animate({path : 'M'  + (x +405) + ' ' + (y+587 ) + 'l -52 0  '}, (time/2),function(){
		r[2] = paper.path('M'  + (x +355) + ' ' + (y+587 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		  r[2].animate({path : 'M'  + (x +355) + ' ' + (y+587 ) + 'l 0 32  '}, (time/2),function(){
		 r[3] = paper.path('M'  + (x +355) + ' ' + (y+617 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		  r[3].animate({path : 'M'  + (x +355) + ' ' + (y+617 ) + 'l 152 0  '}, (time/2),function(){
		 r[4] = paper.path('M'  + (x +505) + ' ' + (y+617 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		  r[4].animate({path : 'M'  + (x +505) + ' ' + (y+617 ) + 'l  0  -232'}, (time/2),function(){
		r[4] = paper.path('M'  + (x +505) + ' ' + (y+387 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		  r[4].animate({path : 'M'  + (x +505) + ' ' + (y+387 ) + 'l  30 0'}, (time/2),function(){
			  boilAnim(x,y);
		  })	  
			 
		  })
		  })
			  
			  
		  })
			  
		  })
		  })
		}
		
		
		function steam(x,y){
				s = [];

			var c = paper.path('M' + (x+612) + ' ' + (y+325) + 'l 0 0').attr({ 'stroke': '#fff5cc', 'stroke-width': '32' });
		level2 = c.animate({
			path: "M" + (x+612 ) + " " + (y +325) + "  l 0  -240 ", 'stroke-width': '32', 'stroke': '#fff5cc', 
		}, time*5);
		
		
//			setTimeout(function(){	
//		s[0]=  paper.path('M'  + (x +631) + ' ' + (y+70 ) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
//		  s[0].animate({path : 'M'  + (x +631) + ' ' + (y+70 ) + 'l 202 0  '}, (time/2),function(){
//		s[1]=  paper.path('M'  + (x +831) + ' ' + (y+70 ) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
//		  s[1].animate({path : 'M'  + (x +831) + ' ' + (y+70 ) + 'l  0 30 '}, (time/2),function(){
//		s[2]=  paper.path('M'  + (x +930) + ' ' + (y+147) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
//		  s[2].animate({path : 'M'  + (x +930) + ' ' + (y+147) + 'l  0 158 '}, (time/2)	)  
//			  
//		  })	  
//			  
//		  })
//			
//		},time*6)
			
		
		
		
		}
        
        
        
        
        sensorGreen(x+600,y);
//        
//        
        function sensorGreen(x,y){
		var lslRect  = paper.rect((x+147),(y+24),32 ,35).attr({"fill":"10-#5c6160-#000"});
		var lslSmallRect = paper.rect((x+151),(y+60),24 ,8).attr({"fill":"10-#5c6160-#000"});
//			
		var lslGreenRectBig = paper.rect((x+152),(y+30),22 ,10).attr({"fill":"#66de66"}); 
		var lslGreenRectSmall = paper.rect((x+152),(y+45),22 ,6).attr({"fill":"#66de66"}); 
	}
	
	
	 sensorRed(x+580,y+430);
	  sensorRed(x+580,y+320);
	 
	
	function sensorRed(x,y){
		var lslRect  = paper.rect((x+147),(y+18),32 ,35).attr({"fill":"10-#5c6160-#000"});
		var lslSmallRect = paper.rect((x+151),(y+54),24 ,8).attr({"fill":"10-#5c6160-#000"});
		
		var lslGreenRectBig = paper.rect((x+152),(y+24),22 ,10).attr({"fill":"#f54242"}); 
		var lslGreenRectSmall = paper.rect((x+152),(y+39),22 ,6).attr({"fill":"#f54242"}); 
	}
       
       function rectTextBoxes(x,y){
		paper.rect((x+130),(y+85),50,20,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":3});
	 } 
	 
	 function rectTextBoxes1(x,y){
		paper.rect((x+130),(y+88),50,20,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":3});
	 } 
	 
	 function rectTextBoxes2(x,y){
		paper.rect((x+130),(y+88),30,20,5).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":3});
	 }
	 
	
	 
	 
//	paper.path('M'+ (x + 1061) + ' ' + (y + 250) + ' l  -40 0  l 0 -180 l  -50 0 l 0 30  M ')
	
	
	 function waterCirculation(x,y){
		 valve5G.toFront();
		 
		 motor3.attr('fill','green');
		 v4_increment(x,y);
		 
		 var e = paper.path('M' + (x+1325) + ' ' + (y+158) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '128' });
		level4 = e.animate({
			path: "M" + (x+1325) + " " + (y +158) + "  l 0  40 ", 'stroke-width': '128', 'stroke': '#fff', 
		}, time*200);
		Lh.toFront();
		
	
		
		var s1 = [];
		s1[0]=  paper.path('M'  + (x +1260) + ' ' + (y+250) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
				 valve5G.toFront();
		 s1[0].animate({path : 'M'  + (x +1260) + ' ' + (y+250 ) + 'l -132 0  '}, (time/2),function(){
			
		s1[1]=  paper.path('M'  + (x +1061) + ' ' + (y+250) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		 s1[1].animate({path : 'M'  + (x +1061) + ' ' + (y+250 ) + 'l -42 0  '}, (time/2),function(){
		
		s1[2]=  paper.path('M'  + (x +1021) + ' ' + (y+250) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
					ft3Img.toFront();
		 s1[2].animate({path : 'M'  + (x +1021) + ' ' + (y+250 ) + 'l 0 -182  '}, (time/2),function(){
			 
		s1[3]=  paper.path('M'  + (x +1021) + ' ' + (y+70) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		 s1[3].animate({path : 'M'  + (x +1021) + ' ' + (y+70 ) + 'l -51 0'}, (time/2),function(){
		s1[4]=  paper.path('M'  + (x +971) + ' ' + (y+70) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		 s1[4].animate({path : 'M'  + (x +971) + ' ' + (y+70 ) + 'l 0 30'}, (time/2))
			 
		 }) 
			 
			 
		 }) 
		 })		 
			 
		 })
				
	 }
	 
		var ht ;var ht1;
		function tankFill(x,y){

			var d = paper.path('M' + (x+958) + ' ' + (y+375) + 'l 0 0').attr({ 'stroke': '#fff5cc', 'stroke-width': '135' });
		level3 = d.animate({
			path: "M" + (x+958) + " " + (y +375) + "  l 0  "+ht+" ", 'stroke-width': '135', 'stroke': '#fff5cc', 
		}, time*10)
		}
		
		function tankFill1(x,y){

			var d = paper.path('M' + (x+958) + ' ' + (y+355) + 'l 0 0').attr({ 'stroke': '#fff5cc', 'stroke-width': '135' });
		level3 = d.animate({
			path: "M" + (x+958) + " " + (y +355) + "  l 0  -25 ", 'stroke-width': '135', 'stroke': '#fff5cc', 
		}, time*5)
		}
		
		function tankEmpty(x,y){
			
				var d1 = paper.path('M' + (x+958) + ' ' + (y+330) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '135' });
		level4 = d1.animate({
			path: "M" + (x+958) + " " + (y +330) + "  l 0  "+ht1+" ", 'stroke-width': '135', 'stroke': '#fff', 
		}, time*8)
			
		}
		

		var sflg = 0;
		function SampleProduct(x,y){
			tankEmpty(x,y);
			 valveM2G.toFront();
			 motor2.attr('fill','green');
			 p2_txt.attr('text',"100");
			 p2_txt.attr('fill','#0af25f');
			 sflg = 1;
			 
			 s2 = [];
			 s2[0]=  paper.path('M'  + (x +1000) + ' ' + (y+380) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
						 valveM2G.toFront();
			 s2[0].animate({path : 'M'  + (x +1000) + ' ' + (y+380 ) + 'l 0 119'}, (time),function(){
				
			 s2[1]=  paper.path('M'  + (x +1000) + ' ' + (y+495) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			 s2[1].animate({path : 'M'  + (x +1000) + ' ' + (y+495 ) + 'l -57 0'}, (time),function(){
			s2[2]=  paper.path('M'  + (x +957) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
						controlImg.toFront();
			s2[2].animate({path : 'M'  + (x + 957) + ' ' + (y+ 530 ) + 'l 221 0'}, (time),function(){
				 
			s2[3]=  paper.path('M'  + (x +1176) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			 s2[3].animate({path : 'M'  + (x + 1176) + ' ' + (y+ 530 ) + 'l 0 50'}, (time))
			 
				
					valve6G.toFront();
				s_txt.attr('text','5');
				s_txt.attr('fill','#0af25f');
				 s1_txt.attr('text','95');	
				 f1_txt.attr('text','47.5');
			   f1_txt.attr('fill','#0af25f');		  
				 
			 })
				 
			 })	 
			 })
			 
		}
		
		
		function SampleProductempty(x,y){
			
			 valveM2G.toBack();
			 motor2.attr('fill','red');
			 p2_txt.attr('text',"0");
			 p2_txt.attr('fill','#0af25f');
			
			 
			 s2 = [];
			 s2[0]=  paper.path('M'  + (x +1000) + ' ' + (y+380) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 			valveM2.toFront();
			 s2[0].animate({path : 'M'  + (x +1000) + ' ' + (y+380 ) + 'l 0 119'}, (time),function(){
				 
			 s2[1]=  paper.path('M'  + (x +1000) + ' ' + (y+495) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 s2[1].animate({path : 'M'  + (x +1000) + ' ' + (y+495 ) + 'l -57 0'}, (time),function(){
			s2[2]=  paper.path('M'  + (x +957) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 s2[2].animate({path : 'M'  + (x + 957) + ' ' + (y+ 530 ) + 'l 221 0'}, (time),function(){
				 controlImg.toFront();
			s2[3]=  paper.path('M'  + (x +1176) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 s2[3].animate({path : 'M'  + (x + 1176) + ' ' + (y+ 530 ) + 'l 0 50'}, (time))
			 
					valveM2.toFront();
					valve6G.toBack();
				s_txt.attr('text','0');
				s_txt.attr('fill','#0af25f');
				f3_txt.attr('text','0');
				f3_txt.attr('fill','#0af25f');
				V5_txt.attr('text','0');
				V5_txt.attr('fill','#0af25f');
						  
				 
			 })
				 
			 })	 
			 })
			 
		}
		
		
		function reCirculation(x,y){
			s4 = [];
			valve2G.toFront(); 
			s1_txt.attr('text','100');
			s1_txt.attr('fill','#0af25f');
			f1_txt.attr('text','50');
			f1_txt.attr('fill','#0af25f');
			s_txt.attr('text','0');
			s_txt.attr('fill','#0af25f');
			
			
			 s4[3]=  paper.path('M'  + (x +1080) + ' ' + (y+550) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			 s4[3].animate({path : 'M'  + (x + 1080) + ' ' + (y+ 550 ) + 'l 0 50'}, (time),function(){
			s4[31]=  paper.path('M'  + (x +1080) + ' ' + (y+600) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			 s4[31].animate({path : 'M'  + (x + 1080) + ' ' + (y+ 600 ) + 'l -300 0'}, (time),function(){
			s4[32]=  paper.path('M'  + (x +780) + ' ' + (y+600) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
					 ft1Img.toFront();
			 s4[32].animate({path : 'M'  + (x + 780) + ' ' + (y+ 600 ) + 'l 0 -450'}, (time),function(){		 
			s4[33]=  paper.path('M'  + (x +780) + ' ' + (y+150) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			 s4[33].animate({path : 'M'  + (x + 780) + ' ' + (y+ 150 ) + 'l -150 0'}, (time))	
			 valve2G.toFront(); 
				 
			 })
			 })	 
				 
			 })	
			
		}
		
		//product collection
		
		function product(x,y){
			valve4G.toFront();
			var s3 = [];
			
			s3[0]=  paper.path('M'  + (x +1177) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			 ft2Img.toFront();
			 s3[0].animate({path : 'M'  + (x + 1177) + ' ' + (y+ 530 ) + 'l 0 -162'}, (time/2),function(){
				 
			s3[1]=  paper.path('M'  + (x +1177) + ' ' + (y+370) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
					valve4G.toFront();
			 s3[1].animate({path : 'M'  + (x + 1177) + ' ' + (y+ 370 ) + 'l 142 0'}, (time/2),function(){
				
			s3[1]=  paper.path('M'  + (x +1318) + ' ' + (y+370) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			 s3[1].animate({path : 'M'  + (x + 1318) + ' ' + (y+ 370 ) + 'l 0 35'}, (time/2))	
				 
			 })	 
				 
			 })
			
		}
		
			function productempty(x,y){
			valve4G.toBack();
			var s3 = [];
			
			s3[0]=  paper.path('M'  + (x +1177) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			ft2Img.toFront();
			 s3[0].animate({path : 'M'  + (x + 1177) + ' ' + (y+ 530 ) + 'l 0 -162'}, (time/2),function(){
				  
			s3[1]=  paper.path('M'  + (x +1177) + ' ' + (y+370) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			valve4G.toBack();
			 s3[1].animate({path : 'M'  + (x + 1177) + ' ' + (y+ 370 ) + 'l 142 0'}, (time/2),function(){
				
			s3[1]=  paper.path('M'  + (x +1318) + ' ' + (y+370) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 s3[1].animate({path : 'M'  + (x + 1318) + ' ' + (y+ 370 ) + 'l 0 35'}, (time/2))	
			 	valve4R.toFront();
				 
			 })	 
				 
			 })
			
		}
		
		
		function RecirculatingEmpty(x,y){
			g = []
			 valve2G.toFront(); 
			
			 g[3]=  paper.path('M'  + (x +1080) + ' ' + (y+550) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 g[3].animate({path : 'M'  + (x + 1080) + ' ' + (y+ 550 ) + 'l 0 50'}, (time/2),function(){
			g[31]=  paper.path('M'  + (x +1080) + ' ' + (y+600) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 g[31].animate({path : 'M'  + (x + 1080) + ' ' + (y+ 600 ) + 'l -300 0'}, (time/2),function(){
			g[32]=  paper.path('M'  + (x +780) + ' ' + (y+600) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 g[32].animate({path : 'M'  + (x + 780) + ' ' + (y+ 600 ) + 'l 0 -450'}, (time/2),function(){
				 ft1Img.toFront();
				 
			g[33]=  paper.path('M'  + (x +780) + ' ' + (y+150) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
			 g[33].animate({path : 'M'  + (x + 780) + ' ' + (y+ 150 ) + 'l -150 0'}, (time/2))	
			 valve2.toFront();
			 });
			 });
			 });
			 
		}
		
		
		 var tt3rect = rectTextBoxes1(x+360,y+240);
		 var scrrect = rectTextBoxes1(x+540,y+560);
		 var tt1rect = rectTextBoxes1(x+410,y-80);
		 var ptrect = rectTextBoxes1(x+510,y-5);
		 var tt2rect = rectTextBoxes1(x+820,y+160);
		 var ltrect = rectTextBoxes1(x+660,y+210);
		 var Samrect = rectTextBoxes1(x+1080,y+530);
		 var pumprect = rectTextBoxes1(x+760,y+350);
		 var v5rect = rectTextBoxes1(x+910,y+330);
		 var srect = rectTextBoxes1(x+970,y+410);
		 var s1rect = rectTextBoxes1(x+960,y+470);
		 var ft1rect = rectTextBoxes1(x+660,y+120);
		 var ft2rect = rectTextBoxes1(x+920,y+30);
		 var ft3rect = rectTextBoxes1(x+1070,y+320);
		 var p3rect = rectTextBoxes1(x+935,y+90);
		 var v4rect = rectTextBoxes1(x+1030,y+100);
		 
		 
		var txtcolor = "#F0BB78";
		var tt3_txt = paper.text((x+515), (y+337), "22").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var scr_txt = paper.text((x+692), (y+657), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var tt1_txt = paper.text((x+565), (y+17), "22").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var pt_txt = paper.text((x+662), (y+93), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var tt2_txt = paper.text((x+975), (y+258), "22").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var lt_txt = paper.text((x+812), (y+308), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var sample_txt = paper.text((x+1232), (y+627), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var V5_txt = paper.text((x+1061), (y+428), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var p2_txt = paper.text((x+918), (y+447), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var s_txt = paper.text((x+1125), (y+507), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var s1_txt = paper.text((x+1110), (y+565), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var f1_txt = paper.text((x+810), (y+217), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var f2_txt = paper.text((x+1070), (y+128), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var f3_txt = paper.text((x+1222), (y+416), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var v4_txt = paper.text((x+1190), (y+200), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
		var p3_txt = paper.text((x+1090), (y+187), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});		
		

		var tt3 = 22;
		var tt3_max = 120;
		var tt3_interval;
	function TT3_increment(x,y){
		
		tt3_interval = setInterval(function() {

			if (tt3 < tt3_max) {

				tt3 = tt3 + 2;

				tt3_txt.attr('text',tt3);
				tt3_txt.attr('fill','#0af25f');
				
				if(tt3 == 50){
				var a1 = paper.path('M' + (x+615) + ' ' + (y+507) + 'l 0 0').attr({ 'stroke': '#ff944d', 'stroke-width': '144' });
				level11 = a1.animate({
				path: "M" + (x+615) + " " + (y +507) + "  l 0  -120 ", 'stroke-width': '144', 'stroke': '#ff944d', 
				}, time*2);	
				}
				if(tt3 == 70){
//				createBubble();
			 	bubbleInterval = setInterval(createBubble, time/5);
			 	waterCirculation(x,y);
				}
				
				if(tt3 == 120){
					scr_decrement(x,y);
				}
		
			if(tt3 == 78){
				steam(x,y);
				tt1_increment(x,y); 
			}	
		
			}else
			   {
				clearInterval(tt3_interval);
			}
		}, time);		
	}
	
	var tt3_Dmax = 22
	var ttd3_interval;
	function TT3_decrement(x,y){
		
	ttd3_interval = setInterval(function() {

			if ( tt3 > tt3_Dmax) {

				tt3 = tt3 - 2;

				tt3_txt.attr('text',Math.round(tt3));
				tt3_txt.attr('fill','#0af25f');
				if(tt3 == 22){
					 endProcess(x,y);
					
				}
				
			}else
			   { 

				clearInterval(ttd3_interval);
				
			
				
			}
		}, time);		
	}		
	
	
	function endProcess(x,y){
					startP3.toBack(); 
					$("#resetBtn,#datasheetBtn,#graph,#btnResult").prop("disabled",false);
				 setTimeout(() => stopSavingValues(), time / 2);
				
				 flg = 0;

				$("#datasheetBtn,#graph,#btnResult").prop("disabled",false);
				$("#resetBtn").prop("disabled",false);
	}
	
	
		var scr = 20;
		var scr_max = 100;
		var scr_interval;
		function scr_increment(x,y){
		
		scr_interval = setInterval(function() {

			if (scr < scr_max) {

				scr = scr + 10;

				scr_txt.attr('text',scr);
				scr_txt.attr('fill','#0af25f');
			}else
			   {
				clearInterval(scr_interval);
			}
		}, time);		
	}
	
	
	
	
	var scr_Dmax = 80;
	var scrd_interval;
	function scr_decrement(x,y){
		
	scrd_interval = setInterval(function() {

			if ( scr > scr_Dmax) {

				scr = scr - 5;

				scr_txt.attr('text',scr);
				scr_txt.attr('fill','#0af25f');
			}else
			   {
				clearInterval(scrd_interval);
			}
		}, time);		
	}
	
		var scr_Dmax1 = 0;
		var scrd1_interval;
	function scr_decrement1(x,y){
		
	scrd1_interval = setInterval(function() {

			if ( scr > scr_Dmax1) {

				scr = scr - 10;

				scr_txt.attr('text',scr);
				scr_txt.attr('fill','#0af25f');
			}else
			   {
				clearInterval(scrd1_interval);
			}
		}, time);		
	}
	
	var tt1 = 22;
	var tt1_max = 78;
	var tt1_interval;
	function tt1_increment(x,y){
		
		tt1_interval = setInterval(function() {

			if (tt1 < tt1_max) {

				tt1 = tt1 + 2;

				tt1_txt.attr('text',tt1);
				tt1_txt.attr('fill','#0af25f');
				
				if(tt1 == 78){
						pt_increment(x,y);
			s[0]=  paper.path('M'  + (x +631) + ' ' + (y+70 ) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
		  	s[0].animate({path : 'M'  + (x +631) + ' ' + (y+70 ) + 'l 202 0  '}, (time/2),function(){
			s[1]=  paper.path('M'  + (x +831) + ' ' + (y+70 ) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			s[1].animate({path : 'M'  + (x +831) + ' ' + (y+70 ) + 'l  0 30 '}, (time/2),function(){
			s[2]=  paper.path('M'  + (x +930) + ' ' + (y+147) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
		 	s[2].animate({path : 'M'  + (x +930) + ' ' + (y+147) + 'l  0 158 '}, (time/2))  
			  
		  })	  
			  
		  }) 
		  
		  
		  setTimeout(function () {
			  	ht = -45;
   		 		 tankFill(x,y);
   		 		 tt2_increment(x,y);
   		 		 lt_increment(x,y);
   		  	}, time*2);
		  
		  
				}
			}else
			   {
				clearInterval(tt1_interval);
			}
		}, time);		
	}
	
	
	var tt1_Dmax = 22;
	var tt1d_interval;
	function tt1_decrement(x,y){
		
	tt1d_interval = setInterval(function() {

			if ( tt1 > tt1_Dmax) {
				tt1 = tt1 - 2;
				tt1_txt.attr('text',tt1);
				tt1_txt.attr('fill','#0af25f');

			
			}else
			   {
				clearInterval(tt1d_interval);
			}
		}, time);		
	}
	
	
		var pt = 0;
	var pt_max = 1;
	var pt_interval;
	
	function pt_increment(x,y){
		
		pt_interval = setInterval(function() {

			if (pt < pt_max) {

				pt = pt + 0.1;

				pt_txt.attr('text',pt.toFixed(1));
				pt_txt.attr('fill','#0af25f');
			}else
			   {
				    pt_txt.attr('text',1);
				pt_txt.attr('fill','#0af25f'); 
				clearInterval(pt_interval);
			}
		}, time*1.2);		
	}
	
	var pt_Dmax = 0;
	var ptd_interval;
	function pt_decrement(x,y){
		
	ptd_interval = setInterval(function() {

			if ( pt > pt_Dmax) {

				pt = pt - 0.1;

				pt_txt.attr('text',pt.toFixed(1));
				pt_txt.attr('fill','#0af25f');
			}else
			   {
				  pt_txt.attr('text',0);
				pt_txt.attr('fill','#0af25f'); 
				clearInterval(ptd_interval);
				
			}
		}, time);		
	}
	
	var tt2 = 22;
	var tt2_max = 29;
	var tt2_interval;
	function tt2_increment(x,y){
		
		tt2_interval = setInterval(function() {

			if (tt2 < tt2_max) {

				tt2 = tt2 + 0.5;

				tt2_txt.attr('text',tt2.toFixed(1));
				tt2_txt.attr('fill','#0af25f');
			}else
			   {
				clearInterval(tt2_interval);
			}
		}, time*2);		
	
	}
	
		var tt2_Dmax = 22;
		var tt2d_interval;
	function tt2_decrement(x,y){
		
	tt2d_interval = setInterval(function() {

			if ( tt2 > tt2_Dmax) {

				tt2 = tt2 - 1;

				tt2_txt.attr('text',tt2.toFixed(1));
				tt2_txt.attr('fill','#0af25f');
			}else
			   {
				clearInterval(	tt2d_interval);
			}
		}, time);		
	}	
	
	
	var lt = 0;
	var lt_max = 115;
	var lt_interval;var ltd_interval;
	
	function lt_increment(x,y){
		
		lt_interval = setInterval(function() {

			if (lt < lt_max) {

				lt = lt + 10;

				lt_txt.attr('text',lt);
				lt_txt.attr('fill','#0af25f');
				if(sflg == 1){
					V5_txt.attr('text','50');
				V5_txt.attr('fill','#0af25f');
				}
				
				
				if(lt == 120){
					 ht1 = 25;
   		 		 tankEmpty(x,y);
   		 		 SampleProduct(x,y);
   		 		 sample_increment(x,y);
   		 		 lt_decrement(x,y);
   		 		}
			}else
			   {
				clearInterval(lt_interval);
				
			}
		}, time);		
	
	}	
	
	var lt_Dmax = 100
	
	function lt_decrement(x,y){
		
	ltd_interval = setInterval(function() {

			if ( lt > lt_Dmax) {

				lt = lt - 10;

				lt_txt.attr('text',lt);
				lt_txt.attr('fill','#0af25f');
				V5_txt.attr('text','100');
				V5_txt.attr('fill','#0af25f');
				
//				if(lt == 100){
//					tankFill1(x,y);
//					lt_increment(x,y);
//					
//				}
			}else
			   {
				tankFill1(x,y);
					lt_increment(x,y);   
				clearInterval(ltd_interval);
			}
		}, time);		
	}
	
	
	var sample = 90;
	var sample_max = 98;
	var flg = 0;
	var flg1 = 0;
	let sample_interval;
	
	function sample_increment(x,y){
	

		sample_interval = setInterval(function() {
			rand = Math.random() * 1;
			

			if (sample < sample_max) {
				valve6G.toFront();
				
				if (flg == 0){
					flg1 = 1;
					sample = sample + 1;
					sample_txt.attr('text',sample.toFixed(1));
					sample_txt.attr('fill','#0af25f');
					flg1 = 0;
					
				}else if(flg == 1){
					flg1 = 1;
					sample = sample + rand;
					sample_txt.attr('text',sample.toFixed(1));
					sample_txt.attr('fill','#0af25f');
					flg1 = 0;
				}

				
				
				if(sample == 91){
					flg = 1;
					valve6G.toBack();
					reCirculation(x,y);
					var a1 = paper.path('M' + (x+615) + ' ' + (y+387) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '144' });
					level11 = a1.animate({path: "M" + (x+615) + " " + (y +387) + "  l 0  90 ", 'stroke-width': '144', 'stroke': '#fff', }, time*40);
				}
				

				
				if(flg1 == 0){
					valve6G.toBack();
					
				}else if(flg1 == 1){
					valve6G.toFront();
					
				}
				
				
			}else
			   {
				 
				clearInterval(sample_interval);
				
				clearInterval(lt_interval);
			
				clearInterval(ltd_interval);
				
				valve6G.toBack();
				pv_increment(x,y);
				
//					tankProductf(x,y);
//					product(x,y);
		
//					lt1_increment(x,y);
				
			}
		}, time*5);		
	
	}
	
	function Emptyfinal(x,y){
		
	
	var d2 = paper.path('M' + (x+958) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '135' });
	level5 = d2.animate({ path: "M" + (x+958) + " " + (y +310) + "  l 0  65 ", 'stroke-width': '135', 'stroke': '#fff', }, time*40);
	
	
	// shut down
			setTimeout(function(){
						startP3.toFront();
						startP2.toBack();
						SampleProductempty(x,y);
						productempty(x,y);
						TT3_decrement(x,y);
						tt1_decrement(x,y);
						tt2_decrement(x,y);
						pt_decrement(x,y);
				
				
						paper.image("images/svValveH2G.png", x+605, y+620, 50, 50).attr({ 'transform': 'r' + 90 });
						var a7 = paper.path('M' + (x+615) + ' ' + (y+477) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '144' });
					level117 = a7.animate({path: "M" + (x+615) + " " + (y +477) + "  l 0  30 ", 'stroke-width': '144', 'stroke': '#fff', }, time*2);
						 sensorRed(x+580,y+430);
						 motor3.attr('fill','red');
						 valve5R.toFront();
						 v4_txt.attr('text',0);
						v4_txt.attr('fill','#0af25f');
						p3_txt.attr('text',0);
						p3_txt.attr('fill','#0af25f');
				
						f2_txt.attr('text',0);
						f2_txt.attr('fill','#0af25f');
					
					setTimeout(function(){	 
						
						valve3R.toFront();
					},time*2);		
						
			},time*45);
	
	
	
	}
	
	function Fillfinal(x,y){
		var d = paper.path('M' + (x+958) + ' ' + (y+330) + 'l 0 0').attr({ 'stroke': '#fff5cc', 'stroke-width': '135' });
		level3 = d.animate({
			path: "M" + (x+958) + " " + (y +330) + "  l 0  -20 ", 'stroke-width': '135', 'stroke': '#fff5cc', 
		}, time*5)
	}
		
	
	var lt1_max = 140;
	var lt1_interval;
	function lt1_increment(x,y){
		
		lt1_interval = setInterval(function() {

			if (lt < lt1_max) {

				lt = lt + 10;

				lt_txt.attr('text',lt);
				lt_txt.attr('fill','#0af25f');
				
			
			}else
			   {
				clearInterval(lt1_interval);
				
			}
		}, time);		
	
	}
	
	var lt_Dmax1 = 0;
	var ltd1_interval;
	function lt1_decrement(x,y){
		
	ltd1_interval = setInterval(function() {

			if ( lt > lt_Dmax1) {

				lt = lt - 10;

				lt_txt.attr('text',lt);
				lt_txt.attr('fill','#0af25f');
				V5_txt.attr('text','100');
				V5_txt.attr('fill','#0af25f');
				

			}else
			   {
				   
				clearInterval(ltd1_interval);
			}
		}, time*3);		
	}	
	
	var pv = 10;
	var pv_max = 100;
	var pv1 = 90;
	var f1 = 0;
	var pv_interval;
		function pv_increment(x,y){
		
		pv_interval = setInterval(function() {

			if (pv < pv_max) {

				pv = pv + 10;
				pv1 = pv1 - 10;
				s_txt.attr('text',pv);
				s_txt.attr('fill','#0af25f');
				f3_txt.attr('text',pv);
				f3_txt.attr('fill','#0af25f');
				s1_txt.attr('text',pv1);
				s1_txt.attr('fill','#0af25f');
				f1 = (50 * pv1)/100;
				f1_txt.attr('text',f1);
				f1_txt.attr('fill','#0af25f');
				if (pv ==  50){
					product(x,y);
					scr_decrement1(x,y)
					
				}
				
				if (pv1 == 0 ){
					RecirculatingEmpty(x,y);
//					setTimeout(function () {
						console.log(bubbleInterval);
  		                clearInterval(bubbleInterval);
  		                console.log(bubbleInterval);
//		           }, 1);
//					clearInterval(bubbleInterval);
					tankProductf(x,y);
					lt1_increment(x,y);
					Fillfinal(x,y);
					
					setTimeout(function(){
						lt1_decrement(x,y);
						Emptyfinal(x,y);
						
					},time*10);
					
				}
			
			}else
			   {
				clearInterval(pv_interval);
				
			}
		}, time);		
	
	}	
	
	
	
		var v4 = 0;
		var v4_max = 100;
		var f2 = 0;
		var v4_interval;

		function v4_increment(x,y){
		
		v4_interval = setInterval(function() {

			if (v4 < v4_max) {

				v4 = v4 + 10;

				v4_txt.attr('text',v4);
				v4_txt.attr('fill','#0af25f');
				p3_txt.attr('text',v4);
				p3_txt.attr('fill','#0af25f');
				f2 = (500 * v4)/100;
				f2_txt.attr('text',f2);
				f2_txt.attr('fill','#0af25f');
			}else
			   {
				clearInterval(v4_interval);
			}
		}, time*2);		
	}
	
		
		
		
		//Start button click

		$("#startBtn").click(function() {
//			console.log(dataArr.length());
			dataArr=[];
			
			
			
		 startCount++;
		  $("#modelDialog1").addClass("modal-lg");
		  $("#modelTitle1").html("Check the Components");
		  var modelBody1=''
			  +'<b style="color:darkblue;">Before starting the plant check whether<br>- All valves are closed <br>' 
			  +'- All pumps are switched off<br>- The instrument air, electricity,water ,steam demand and other required utilities are available <br>'
			 +' - The production schedule mandates to produce  <br>'
			 $("#modelBody1").html(modelBody1);
		  console.log(" start time out "+time);
			  if(startCount>1){
			   time = selectedValue;
				 console.log(" start time in "+time);
			  modelBody1+=''
				  +' <div class="panel">'
					 +' <h5>Set Simulation Time</h5>'
					 +' <div class="form-check form-check-inline">'
					 +'   <input class="form-check-input" type="radio" name="plantTime" id="twoMinutes" value="600">'
					 +'   <label class="form-check-label radio-label" for="twoMinutes">2 min</label>'
					 +'  </div>'
				  +'  <div class="form-check form-check-inline">'
				  +'    <input class="form-check-input" type="radio" name="plantTime" id="threeMinutes" value="700">'
				  +'    <label class="form-check-label radio-label" for="threeMinutes">3 min</label>'
				  +'  </div>'
				  +'  <div class="form-check form-check-inline">'
				  +'    <input class="form-check-input" type="radio" name="plantTime" id="fourMinutes" value="800">'
				  +'    <label class="form-check-label radio-label" for="fourMinutes">4 min</label>'
				  +'  </div>'
				  +'  <div class="form-check form-check-inline">'
				  +'    <input class="form-check-input" type="radio" name="plantTime" id="fiveMinutes" value="1000">'
				  +'    <label class="form-check-label radio-label" for="threeMinutes">5 min</label>'
				  +'  </div>'
				  +'  <div class="form-check form-check-inline">'
				  +'    <input class="form-check-input" type="radio" name="plantTime" id="sixMinutes" value="1200">'
				  +'    <label class="form-check-label radio-label" for="fourMinutes">6 min</label>'
				  +'  </div>'
				  +'	</div>'
				  $("#modelBody1").append(modelBody1);
		  }

		 $("#reset").prop("disabled",true);
		  $("#modelBody1").css({
         'font-weight': '500',            // Add padding
         'font-family': 'math',       // Font style
         'font-size': '16px',          // Font size
         'color': '#0c55a3'               // Text color
     });

$("#reset").prop("disabled",false);
//$("#startBtn").prop("disabled",true);
$("#datasheet").prop("disabled",true);
// Stop any ongoing animations or timers
const radioButtons = document.querySelectorAll('input[name="plantTime"]');
const selectedTimeDiv = document.getElementById('selectedTime');

// Add event listeners to each radio button
radioButtons.forEach(radio => {
radio.addEventListener('change', () => {
//selectedTimeDiv.textContent = `Selected Time: ${radio.value}`;
//console.log(${radio.value});
selectedValue = $('input[name="plantTime"]:checked').val();
//console.log("on change event "+selectedValue);
time = selectedValue;
//	 console.log(" start time "+time);
//	 console.log("selectedValue after start "+selectedValue);
//$('#selectedTime').text(`Selected Time: ${selectedValue}`);

});
});    $("#modelBody1").css("color", "#f54545");

    // Show the modal
    $("#myModal1").modal("show");
			
			
			
		$("#datasheetBtn,#graph,#btnResult").prop("disabled",true);

});


$("#myModal1").on("hidden.bs.modal", function () {
	 console.log("Modal has been dismissed!");
	 
	 		startP1.toBack();
			startP2.toFront();
			
			
			$("#startBtn").prop("disabled",true);
			
			 boilFeed(x,y);	
			 
			 
			// feed tank fill again
		setTimeout(function () {
			
			valve1.toFront();
			motor1.attr("fill","red");
			
			w = [];
		w1 = [];
		w[0] = paper.path('M'  + (x +20) + ' ' + (y+385 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		valveMG.toFront();
		w[0].animate({path : 'M'  + (x +20) + ' ' + (y+385 ) + 'l 150 0 '}, (time/2),function(){
		w[1] = paper.path('M'  + (x +170) + ' ' + (y+385 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
		w[1].animate({path : 'M'  + (x +170) + ' ' + (y+385 ) + 'l  0 50'}, (time/2),function(){
			sensorGreen(x+580,y+430);
		var b = paper.path('M' + (x+175) + ' ' + (y+540) + 'l 0 0').attr({ 'stroke': '#ffe066', 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x+175 ) + " " + (y +540) + "  l 0  -80 ", 'stroke-width': '128', 'stroke': '#ffe066', 
		}, time)
		Lttnk1.toFront();
			setTimeout(function() {
				
				l1 = paper.path('M'+ (x + 20) + ' ' + (y + 385) + ' l 150 0 l 0 50  M ').attr({  "stroke": "#818080",  "stroke-width": 8,"stroke-linejoin": "round"  });
				valveM.toFront(); 
//			 valve3 = paper.image("images/svValve2.png", x+120, y+350, 50, 50);
			}, time+100);
			
			})
			
		})
			
		
		
		scr_increment(x,y);	
		
		
		}, time*4); 
		
		
		setTimeout(function () {
			TT3_increment(x,y);
			
		}, time*5); 		
			 
	  getValues();
	
	});
	
	// Optional: Add click event to the `#modalClose` button
$("#modalClose,#cross").click(function () {
    $("#myModal1").modal("hide");
    // Modal dismiss functionality is already handled by `data-dismiss="modal"`.
});


	  
	 
	  	function getValues() {
   // Array to store the JSON objects
   dataInterval = setInterval(() => {
    // Get the current text values
    const FT1 = parseInt(f1_txt.attr("text")) || 0;
    const FT2 = parseInt(f3_txt.attr("text")) || 0;
    const FT3 = parseInt(f2_txt.attr("text")) || 0;
    const valve4 = parseInt(v4_txt.attr("text")) || 0;
    const motor3 = parseInt(p3_txt.attr("text")) || 0;
    const motor2 = parseInt(p2_txt.attr("text")) || 0;
    const cv1 = parseInt(s_txt.attr("text")) || 0;
     const cv2 = parseInt(s1_txt.attr("text")) || 0;
     const product = (sample_txt.attr("text")) || 0;
     const valve5 = parseInt(V5_txt.attr("text")) || 0;
	  const LT = (lt_txt.attr("text")) || 0;
	  const tt2 = (tt2_txt.attr("text")) || 0;
	  const tt1 = parseInt(tt1_txt.attr("text")) || 0;
  	const tt3 = parseInt(tt3_txt.attr("text")) || 0;
 	 const PT = parseFloat(pt_txt.attr("text")) || 0;
    const SCR = parseInt(scr_txt.attr("text")) || 0;
    
    // Create a JSON object with the current values
    var dataObj = {};
     dataObj = {
	  perct : product,
      cv1: cv1,
      cv2: cv2,
      FT1: FT1,
      FT2: FT2,
      FT3 : FT3,
      valve3 :valve4,
      motor3 :motor3,
      motor2 :motor2,
      valve5 :valve5,
      lt : LT,
      pt :PT,
      scr : SCR,
      tt1 : tt1,
      tt2 : tt2,
      tt3 : tt3
    };	
    
       $("#ft1").text(dataObj.FT1);
       $("#ft2").text(dataObj.FT2);
       $("#ft3").text(dataObj.FT3);

       $("#tt1").text(dataObj.tt1);
       $("#tt2").text(dataObj.tt2);
       $("#tt3").text(dataObj.tt3);
       
      
       $("#motor2").text(dataObj.motor2);
       $("#motor3").text(dataObj.motor3);
       
     
       $("#cv2").text(dataObj.cv2);
       
       $("#v3").text(dataObj.valve3);
       $("#v5").text(dataObj.valve5);
       
       $("#pt").text(dataObj.pt);
       $("#lt").text(dataObj.lt);
       $("#scr").text(dataObj.scr);
//       console.log(totWtValue);
    // Store the object in the array
    dataArr.push(dataObj);
	
//    console.log("Data stored:", dataArr);

  }, (time)); // Interval of 5 seconds
}
 
	  
  
  stopSavingValues =  function () {
  					if (dataInterval) {
   					 clearInterval(dataInterval);
   					 masterJson.push(dataArr);
   					  console.log(masterJson);
  					  console.log("Saving values stopped.");
 				 } else {
    				console.log("No active interval to stop.");
                 }
          }
   
		
		
		
		  lables(x,y);
	function lables(x,y){
		 var tank = paper.text(x + 160, y + 580, "Tank-01").attr({ 'fond-weight': 'bold', 'font-size': 12 })
		 var tank = paper.text(x + 320, y + 560, "V1").attr({ 'fond-weight': 'bold', 'font-size': 12 })
		 var tank = paper.text(x + 440, y + 500, "P1").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 740, y + 520, "LSLL2").attr({ 'fond-weight': 'bold', 'font-size': 12 })
		 var tank = paper.text(x + 740, y + 400, "TSHH1").attr({ 'fond-weight': 'bold', 'font-size': 12 })
		 var tank = paper.text(x + 80, y + 570, "LSLL1").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 690, y + 595, "Heater").attr({ 'fond-weight': 'bold', 'font-size': 15 })
		 var tank = paper.text(x + 690, y + 625, "SCR").attr({ 'fond-weight': 'bold', 'font-size': 15 })
		 var tank = paper.text(x + 590, y + 630, "V3").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 680, y + 130, "V2").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 740, y + 270, "FT-01").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 550, y + 300, "TT-03").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 580, y + 50, "TT-01").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 530, y + 70, "PRV1").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		 var tank = paper.text(x + 650, y + 50, "PT").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		  var tank = paper.text(x + 720, y + 50, "PSHH-1").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		  var tank = paper.text(x + 840, y + 380, "LT").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		  var tank = paper.text(x + 1000, y + 290, "TT-02").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		   var tank = paper.text(x + 875, y + 250, "PRV2").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		  var tank = paper.text(x + 920, y + 400, "Tank-02").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		  var tank = paper.text(x + 920, y + 470, "P2").attr({ 'fond-weight': 'bold', 'font-size': 12 });  
		   var tank = paper.text(x + 1200, y + 280, "V4").attr({ 'fond-weight': 'bold', 'font-size': 12 });  
		  var tank = paper.text(x + 975, y + 430, "V5").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		   var tank = paper.text(x + 1090, y + 470, "CV1").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		 var tank = paper.text(x + 1150, y + 470, "FT-02").attr({ 'fond-weight': 'bold', 'font-size': 12 });  
		  var tank = paper.text(x + 1250, y + 400, "V6").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		 var tank = paper.text(x + 1130, y + 630, "Sample Tank").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		  var tank = paper.text(x + 1200, y + 630, "V7").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		  var tank = paper.text(x + 1100, y + 300, "P3").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		  var tank = paper.text(x + 1300, y + 280, "Tank-03").attr({ 'fond-weight': 'bold', 'font-size': 12 });    
		  var tank = paper.text(x + 1300, y + 580, "Tank-04").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		 var tank = paper.text(x + 1070, y + 150, "FT-03").attr({ 'fond-weight': 'bold', 'font-size': 12 }); 
		  var tank = paper.text(x + 1450, y + 560, "Product").attr({ 'fond-weight': 'bold', 'font-size': 15 }); 
		  var tank = paper.text(x + 1450, y + 490, "V8").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		  
		   var tank = paper.text(x + 900, y + 125, "Condenser").attr({ 'fond-weight': 'bold', 'font-size': 20 ,'fill':'#99ccff'}); 
		   
		    paper.text(x + 552, y + 335, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		    paper.text(x + 605, y + 12, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		    paper.text(x + 705, y + 95, "Bar").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		    paper.text(x + 1100, y + 430, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		     paper.text(x + 950, y + 450, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		      paper.text(x + 1160, y + 505, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' }); 
		     paper.text(x + 1150, y + 570, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });  
		      paper.text(x + 1270, y + 630, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });   
		    paper.text(x + 1005, y + 252, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		     paper.text(x + 855, y + 305, "mm").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		      paper.text(x + 855, y + 220, "lph").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		      paper.text(x + 1115, y + 130, "lph").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		     paper.text(x + 1125, y + 190, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
			   paper.text(x + 1220, y + 200, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		       paper.text(x + 1265, y + 420, "lph").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
	 }
	
	}