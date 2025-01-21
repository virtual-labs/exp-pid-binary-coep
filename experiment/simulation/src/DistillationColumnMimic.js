function DistillationColumnMimic(){

$("#Header").html("	<center><span >SIMULATION</span></center>");
	
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#myModal1">Start</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="reset" class="btn btn-danger" style="width:100%" disabled>Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheet" class="btn btn-danger" style="width:100%;margin-top:10px;" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button type="button" class="btn btn-danger"  id="graph" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#modalTrends" disabled>Trends </button>'
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
		+' <tr>'
		+'   <td><label><b>Flow Transmitter (FT) :</b></label></td>'
		+'   <td><label class="PMCValue" id="ft">0</label>m/s</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Hot Air Temperature (TT01) : </b></label></td>'
		+' <td><label class="PMCValue" id="tt1">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Product Temperature (TT02) :</b></label></td>'
		+' <td><label class="PMCValue" id="tt2">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Vacuum Transmitter (NT): </b></label></td>'
		+' <td><label class="PMCValue" id="nt">0</label>mBar</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Heater firing:  </b></label></td>'
		+' <td><label class="PMCValue" id="hf">0</label>mBar</td>'
		+'  </tr>'
		
		+'  <tr>'
		+' <td><label><b>Peristaltic Pump :</b></label></td>'
		+' <td><label class="PMCValue" id="pump">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FD Fan :</b></label></td>'
		+' <td><label class="PMCValue" id="fdfan">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>ID Fan :</b></label></td>'
		+' <td><label class="PMCValue" id="idfan">0</label>%</td>'
		+'  </tr>'
		+'</tbody>'
		+'</table>'

		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled >Result</button>'
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
		
		//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="modalTrends">'
		+'    <div class="modal-dialog modal-xl " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="bodyTrends">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'       <button type="button" class="btn btn-danger"  id="download" style="margin-top:10px;float: right;" hidden>Download </button>'
//		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
	
	$("#Selection").html(htm);
	
	DistillationColumnDiagram();
	$("#DistillationColumnPost").click(function(){
		
		DistillationColumnPostQuestion();
		
	});

}
function DistillationColumnDiagram()
{
	   
	//function mimic() {
		//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

//		$('#canvas-div').removeAttr('width');
//		$('#canvas-div').removeAttr('height');
		var w = 1600;
		var h = 800;
	$("#diagram").empty();
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
			
			time = 2500;
			
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
		

		
		var motorImg1 = paper.image("images/PumpPeri.png", x+400, y+520, 70, 70).attr({ 'transform': 'r' + 180 });
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
		var motorImg2 = paper.image("images/PumpPeri.png", x+880, y+490, 70, 70);
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
		var valve5G = paper.image("images/svValveH2G.png", x+605, y+620, 50, 50).attr({ 'transform': 'r' + 90 });
		var valve5R = paper.image("images/redValve.png", x+605, y+620, 50, 50).attr({ 'transform': 'r' + 90 }).toFront();
		
		//sample valve
		var valve6R = paper.image("images/redValve.png", x+1160, y+580, 50, 50).attr({ 'transform': 'r' + 90 }).toFront();
		//product valve
		var valve7R = paper.image("images/redValve.png", x+1420, y+500, 50, 50).attr({ 'transform': 'r' + 0 }).toFront();
		

		// water feed tank
		var valve5G = paper.image("images/svValveH2G.png", x+1160, y+217, 50, 50);
		var valve5R = paper.image("images/redValve.png", x+1160, y+217, 50, 50).attr({ 'transform': 'r' + 0 }).toFront();
		
		paper.image("images/ltSensor.png", x+810, y+320, 50, 50);
		
		 
		 
		  const boilrect = paper.rect(x + 593, y + 50, 40, 300 ,20).attr({
	           fill: "#6f8696", // Hot red color initially
//	    	 	fill: "50-#fff-#000",
	    		stroke: "#000",
	   			 "stroke-width": 3,
		});
		
		// boiler rect top
		  const boilrect1 = paper.rect(x + 593, y + 80, 40, 250 ,5).attr({
	           fill: "#fff", // Hot red color initially
//	    	 	fill: "50-#fff-#000",
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
	    var bubbleX = Math.random() * 145 + x + 542;
	    var bubbleY = y + 367 + 140; // Start at the bottom of the box

	    // Create a small circle for the bubble
	    var bubble = paper.circle(bubbleX, bubbleY, 2).attr({
	        fill: 'red', // White bubble
	        stroke: 'none',
	    });

	    // Animate the bubble rising
	    bubble.animate(
	        { cy: y + 367, opacity: 0 }, // Move upward and fade out
	        1500,
	        'ease-out',
	        function () {
	            bubble.remove(); // Remove the bubble after animation
	        }
	    );
	}
		
		// Create bubbles at intervals
//			var bubbleInterval = setInterval(createBubble, 200);
			
			
	// Stop bubble creation after a certain time (e.g., 10 seconds)
//			setTimeout(function () {
//	   		 clearInterval(bubbleInterval);
//			}, time);
		
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
		
//		 const rectexAnim = paper.rect(x + 820, y + 103, 160, 45).attr({
	//
//	    	 	fill: "#fff",
//	    		stroke: "#000",
//	   			 "stroke-width": 3,
//		}).toFront();
		
		
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
//		paper.path('M'+ (x + 695) + ' ' + (y + 610) + ' l  0 20 M ').attr({  "stroke": "#000",  "stroke-width": 1,"stroke-linejoin": "round" });
		var sp =	paper.image("images/spring1.png", x+517, y+430, 25, 100).toFront();
		var sp =	paper.image("images/spring1.png", x+688, y+430, 25, 100).attr({ 'transform': 'r' + 180 }).toFront();
		var heaterRect = paper.rect(x + 650, y + 580, 80, 30 ,5).attr({stroke: "#000","stroke-width": 3}).toFront();
		var scrRect = paper.rect(x + 660, y + 610, 60, 30 ,5).attr({stroke: "#000","stroke-width": 3}).toFront();
		
		
		waterfill(x,y);
		
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
//				 valve3 = paper.image("images/svValve2.png", x+120, y+350, 50, 50);
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
	        
//	        tankProductf(x,y);
	        function tankProductf(x,y){
				var a = paper.path('M' + (x+1325) + ' ' + (y+560) + 'l 0 0').attr({ 'stroke': '#fff5cc', 'stroke-width': '128' });
			level1 = a.animate({
				path: "M" + (x+1325) + " " + (y +560) + "  l 0  -70 ", 'stroke-width': '128', 'stroke': '#fff5cc', 
			}, time);
			}
	        
	        
	     
	        function boilFeed(x,y){
//				paper.path('M'+ (x + 405) + ' ' + (y + 587) + ' l  -50 0 l 0 30 l 150 0 l 0 -230 l 30 0 M '
				valve1G.toFront();
				motor1.attr("fill","Green");
				var b = paper.path('M' + (x+175) + ' ' + (y+460) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '128' });
			level = b.animate({
				path: "M" + (x+175 ) + " " + (y +460) + "  l 0  80 ", 'stroke-width': '128', 'stroke': '#fff', 
			}, time);
			Lttnk1.toFront();
				r = [];
				 r[0] = paper.path('M'  + (x +240) + ' ' + (y+540 ) + 'l 0 0 ').attr({'stroke':'#ffe066','stroke-width':'6',"stroke-linejoin": "round" })
			  r[0].animate({path : 'M'  + (x +240) + ' ' + (y+540 ) + 'l 158 0  '}, (time/2),function(){
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
			}, time)
				
			
			s[0]=  paper.path('M'  + (x +631) + ' ' + (y+70 ) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			  s[0].animate({path : 'M'  + (x +631) + ' ' + (y+70 ) + 'l 202 0  '}, (time/2),function(){
			s[1]=  paper.path('M'  + (x +831) + ' ' + (y+70 ) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			  s[1].animate({path : 'M'  + (x +831) + ' ' + (y+70 ) + 'l  0 30 '}, (time/2),function(){
			s[2]=  paper.path('M'  + (x +930) + ' ' + (y+147) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
			  s[2].animate({path : 'M'  + (x +930) + ' ' + (y+147) + 'l  0 158 '}, (time/2)	)  
				  
			  })	  
				  
			  })
			
			
			}
	        
	        
	        
	        
	        sensorGreen(x+600,y);
//	        sensorGreen(x+580,y+430);
//	        sensorGreen(x+580,y+320);
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
		 
		 var tt3rect = rectTextBoxes1(x+360,y+240);
		 var scrrect = rectTextBoxes1(x+540,y+560);
		 
		 
//		paper.path('M'+ (x + 1061) + ' ' + (y + 250) + ' l  -40 0  l 0 -180 l  -50 0 l 0 30  M ')
		
		
		 function waterCirculation(x,y){
			 valve5G.toFront();
			 
			 motor3.attr('fill','green');
			 
			 var e = paper.path('M' + (x+1325) + ' ' + (y+158) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '128' });
			level4 = e.animate({
				path: "M" + (x+1325) + " " + (y +158) + "  l 0  70 ", 'stroke-width': '128', 'stroke': '#fff', 
			}, time);
			Lh.toFront();
			
			var s1 = [];
			s1[0]=  paper.path('M'  + (x +1260) + ' ' + (y+250) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
			 s1[0].animate({path : 'M'  + (x +1260) + ' ' + (y+250 ) + 'l -132 0  '}, (time/2),function(){
				 valve5G.toFront();
			s1[1]=  paper.path('M'  + (x +1061) + ' ' + (y+250) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
			 s1[1].animate({path : 'M'  + (x +1061) + ' ' + (y+250 ) + 'l -42 0  '}, (time/2),function(){
			
			s1[2]=  paper.path('M'  + (x +1021) + ' ' + (y+250) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
			 s1[2].animate({path : 'M'  + (x +1021) + ' ' + (y+250 ) + 'l 0 -182  '}, (time/2),function(){
				 ft3Img.toFront();
			s1[3]=  paper.path('M'  + (x +1021) + ' ' + (y+70) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
			 s1[3].animate({path : 'M'  + (x +1021) + ' ' + (y+70 ) + 'l -51 0'}, (time/2),function(){
			s1[4]=  paper.path('M'  + (x +971) + ' ' + (y+70) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
			 s1[4].animate({path : 'M'  + (x +971) + ' ' + (y+70 ) + 'l 0 30'}, (time/2))
				 
			 }) 
				 
				 
			 }) 
			 })		 
				 
			 })
					
		 }
		 
			
			function tankFill(x,y){

				var d = paper.path('M' + (x+958) + ' ' + (y+375) + 'l 0 0').attr({ 'stroke': '#fff5cc', 'stroke-width': '135' });
			level3 = d.animate({
				path: "M" + (x+958) + " " + (y +375) + "  l 0  -65 ", 'stroke-width': '135', 'stroke': '#fff5cc', 
			}, time)
			}
			
			function tankEmpty(x,y){
				
					var d1 = paper.path('M' + (x+958) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '135' });
			level4 = d1.animate({
				path: "M" + (x+958) + " " + (y +310) + "  l 0  35 ", 'stroke-width': '135', 'stroke': '#fff', 
			}, time)
				
			}
			

			
			function SampleProduct(x,y){
				tankEmpty(x,y);
				 valveM2G.toFront();
				 motor2.attr('fill','green');
				 s2 = [];
				 s2[0]=  paper.path('M'  + (x +1000) + ' ' + (y+380) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[0].animate({path : 'M'  + (x +1000) + ' ' + (y+380 ) + 'l 0 119'}, (time/2),function(){
					 valveM2G.toFront();
				 s2[1]=  paper.path('M'  + (x +1000) + ' ' + (y+495) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[1].animate({path : 'M'  + (x +1000) + ' ' + (y+495 ) + 'l -57 0'}, (time/2),function(){
				s2[2]=  paper.path('M'  + (x +957) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[2].animate({path : 'M'  + (x + 957) + ' ' + (y+ 530 ) + 'l 221 0'}, (time/2),function(){
					 controlImg.toFront();
				s2[3]=  paper.path('M'  + (x +1177) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[3].animate({path : 'M'  + (x + 1177) + ' ' + (y+ 530 ) + 'l 0 50'}, (time/2))
				 //Recirculation animataion
				 
				 valve2G.toFront(); 
				 s2[3]=  paper.path('M'  + (x +1080) + ' ' + (y+550) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[3].animate({path : 'M'  + (x + 1080) + ' ' + (y+ 550 ) + 'l 0 50'}, (time/2),function(){
				s2[31]=  paper.path('M'  + (x +1080) + ' ' + (y+600) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[31].animate({path : 'M'  + (x + 1080) + ' ' + (y+ 600 ) + 'l -300 0'}, (time/2),function(){
				s2[32]=  paper.path('M'  + (x +780) + ' ' + (y+600) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[32].animate({path : 'M'  + (x + 780) + ' ' + (y+ 600 ) + 'l 0 -450'}, (time/2),function(){
					 ft1Img.toFront();
					 
				s2[33]=  paper.path('M'  + (x +780) + ' ' + (y+150) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s2[33].animate({path : 'M'  + (x + 780) + ' ' + (y+ 150 ) + 'l -150 0'}, (time/2))	
				 valve2G.toFront(); 
				 
				 
					 
					 
				 })
				 })	 
					 
				 })	
				  
					 
				 })
					 
				 })	 
				 })
				 
			}
			
			
			//product collection
//			 product(x,y);
			function product(x,y){
				valve4G.toFront();
				var s3 = [];
				s3[0]=  paper.path('M'  + (x +1177) + ' ' + (y+530) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s3[0].animate({path : 'M'  + (x + 1177) + ' ' + (y+ 530 ) + 'l 0 -162'}, (time/2),function(){
					  ft2Img.toFront();
				s3[1]=  paper.path('M'  + (x +1177) + ' ' + (y+370) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s3[1].animate({path : 'M'  + (x + 1177) + ' ' + (y+ 370 ) + 'l 142 0'}, (time/2),function(){
					valve4G.toFront();
				s3[1]=  paper.path('M'  + (x +1318) + ' ' + (y+370) + 'l 0 0 ').attr({'stroke':'#fff5cc','stroke-width':'6',"stroke-linejoin": "round" })
				 s3[1].animate({path : 'M'  + (x + 1318) + ' ' + (y+ 370 ) + 'l 0 35'}, (time/2))	
					 
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
				 valve2G.toFront();
				 });
				 });
				 });
				 
			}
			var txtcolor = "#F0BB78";
			var tt3_txt = paper.text((x+515), (y+337), "22").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
			var scr_txt = paper.text((x+692), (y+657), "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtcolor,"font-weight":"bold"});
			
			var tt3 = 22;
			var tt3_max = 120;
			function TT3_increment(x,y){
			
			tt3_interval = setInterval(function() {

				if (tt3 < tt3_max) {

					tt3 = tt3 + 2;

					tt3_txt.attr('text',tt3);
					tt3_txt.attr('fill','#0af25f');
				}else
				   {
					clearInterval(tt3_interval);
				}
			}, 1000);		
		}
		
		var tt3_Dmax = 60
		
		function TT3_decrement(x,y){
			
		ttd3_interval = setInterval(function() {

				if ( tt3 > tt3_Dmax) {

					tt3 = tt3 - 2;

					tt3_txt.attr('text',Math.round(tt3));
					tt3_txt.attr('fill','#0af25f');
				}else
				   {
					clearInterval(ttd3_interval);
				}
			}, 1000);		
		}		
			
			var scr = 20;
			var scr_max = 100;
//			scr_increment(x,y);
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
			}, 1000);		
		}
			
			
			
			
			//Start button click

			$("#startBtn").click(function() {
				
				 boilFeed(x,y);	

				 
				// feed tank fill again
			setTimeout(function () {
				
				valve1.toFront();
				motor1.attr("fill","red");
				
			var b = paper.path('M' + (x+175) + ' ' + (y+540) + 'l 0 0').attr({ 'stroke': '#ffe066', 'stroke-width': '128' });
			level = b.animate({
				path: "M" + (x+175 ) + " " + (y +540) + "  l 0  -80 ", 'stroke-width': '128', 'stroke': '#ffe066', 
			}, time)
			
//			scr_increment(x,y);	
			
			
			}, time*4); 
			
			
			setTimeout(function () {
//				TT3_increment(x,y);
				
			}, time*5); 		
				 
			
				 
				 
			
			// cold water circulation	 
			setTimeout(function () {
			waterCirculation(x,y);
			
			}, time*8);		 
				 
		 var bubbleInterval ;		
		// heating steam formation		 
		setTimeout(function () {
			
			var a1 = paper.path('M' + (x+615) + ' ' + (y+507) + 'l 0 0').attr({ 'stroke': '#ff944d', 'stroke-width': '144' });
			level11 = a1.animate({
				path: "M" + (x+615) + " " + (y +507) + "  l 0  -120 ", 'stroke-width': '144', 'stroke': '#ff944d', 
			}, time);
			 	createBubble();
				 bubbleInterval = setInterval(createBubble, 200);
			
	   		  steam(x,y);
	   		  setTimeout(function () {
	   		  tankFill(x,y);
	   		  }, time);
	   		  
			}, time*10);
			
			
			setTimeout(function () {
			tankEmpty(x,y);	
			SampleProduct(x,y);
			
			}, time*15);
			
			setTimeout(function () {
				
			
	   		 clearInterval(bubbleInterval);
	   		 
	   		 
			RecirculatingEmpty(x,y);
			
			
			var a1 = paper.path('M' + (x+615) + ' ' + (y+387) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '144' });
			level11 = a1.animate({
				path: "M" + (x+615) + " " + (y +387) + "  l 0  100 ", 'stroke-width': '144', 'stroke': '#fff', 
			}, time);
			
			setTimeout(function () {
				var d2 = paper.path('M' + (x+958) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '135' });
			level5 = d2.animate({
				path: "M" + (x+958) + " " + (y +310) + "  l 0  65 ", 'stroke-width': '135', 'stroke': '#fff', 
			}, time*1.1);},time);
			
			
			tankProductf(x,y);	
			product(x,y);
			
			}, time*20);
			
		
			
			
			
				
				
			});
			
			
			
			  lables(x,y);
		function lables(x,y){
			 var tank = paper.text(x + 160, y + 580, "Tank-01").attr({ 'fond-weight': 'bold', 'font-size': 12 })
			 var tank = paper.text(x + 320, y + 560, "V1").attr({ 'fond-weight': 'bold', 'font-size': 12 })
			 var tank = paper.text(x + 440, y + 500, "P1").attr({ 'fond-weight': 'bold', 'font-size': 12 });
			 var tank = paper.text(x + 740, y + 500, "LSLL2").attr({ 'fond-weight': 'bold', 'font-size': 12 })
			 var tank = paper.text(x + 740, y + 400, "TSHH1").attr({ 'fond-weight': 'bold', 'font-size': 12 })
			 var tank = paper.text(x + 80, y + 580, "LSLL1").attr({ 'fond-weight': 'bold', 'font-size': 12 });
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
			  
			
			     
		 }




	   
}