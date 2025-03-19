
function DistillationColumnInstrument()
{
	
	
	var InstrMasterJson = {};
	var StdCompInstruCount=17;
	
	var StdFTCount=3;
	var StdTTCount=3;
	var StdAFRCount=1;
	var StdLSHHCount=2;
	var StdLSLLCount=3;
	var StdTSHHCount=1;
	var StdPSHHCount=1;
	var StdPTCount=1;
	var StdPRVCount=2;

	
	var perFTCount;
	var perTTCount;
	var perAFRCount;
	var perLSHHCount;
	var perLSLLCount;
	var perTSHHCount;
	var perPSHHCount;
	var perPTCount;
	var perPRVCount;
	
	var ft;
	var tt;
	var afr;
	var lsll;
	var lshh;
	var tshh;
	var pshh;
	var pt;
	var prv;
	
	var totalComp1;
	
	var instrActualCount=0;
	
	$("#Header").html("	<center><span >DISTILLATION COLUMN - INSTRUMENT DIAGRAM</span></center>");
	$("#Selection").css({"overflow": "auto","height":" 837px"});
	htm=''
		+'<div class="row titlePart" style="    border-style: unset;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
		
     	+'<div class="row conf" >'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Flow Transmitter(FT)</b></label>'
		+' <input class="form-select" id="ft" type="number" min="0" max="5" value="0" tabindex="1"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Temperature Transmitter(TT)</b></label>'
		+' <input class="form-select" id="tt" type="number" min="0" max="5" value="0" tabindex="2"></input>'
		+'</div>'

		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Air Filter Regulator(AFR)</b></label>'
		+' <input class="form-select" id="afr" type="number" min="0" max="5" value="0" tabindex="3"></input>'
		+'</div>'
		 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Level Switch Low Low (LSLL)</b></label>'
		+' <input class="form-select" id="lsll" type="number" min="0" max="5" value="0" tabindex="4"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Level Switch High High(LSHH)</b></label>'
		+' <input class="form-select" id="lshh" type="number" min="0" max="5" value="0" tabindex="5"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Pressure Switch High High(PSHH)</b></label>'
		+' <input class="form-select" id="pshh" type="number" min="0" max="5" value="0" tabindex="6"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Temperature Switch High High(TSHH)</b></label>'
		+' <input class="form-select" id="tshh" type="number" min="0" max="5" value="0" tabindex="6"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Pressure Transmitter(PT)</b></label>'
		+' <input class="form-select" id="pt" type="number" min="0" max="5" value="0" tabindex="7"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Pressure Relief Valve(PRV)</b></label>'
		+' <input class="form-select" id="prv" type="number" min="0" max="5" value="0" tabindex="8"></input>'
		+'</div>'
		
		
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyInstr" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#myModal1" tabindex="9">Verify Instrument </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal1">'
		+'    <div class="modal-dialog " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody1">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="nextLevel2" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="10" hidden>Next level</button>'
		+'</div>'
		
		+'</div>'
		
	$("#Selection").html(htm);
	
       var temp=0;
	  
	   var flag=0;
	$("#verifyInstr").click(function(){
		instrActualCount++;
		
		 ft=parseInt($("#ft").val());
		 tt=parseInt($("#tt").val());
		 afr=parseInt($("#afr").val());
		 lshh=parseInt($("#lshh").val());
		 lsll=parseInt($("#lsll").val());
		 tshh=parseInt($("#tshh").val());
		 pshh=parseInt($("#pshh").val());
		 pt=parseInt($("#pt").val());
		 prv=parseInt($("#prv").val());
		
		 CountComp1();
         console.log(" ft "+ft);
         console.log(" tt "+tt);
         console.log("afr "+afr);
         console.log(" lshh "+lshh);
         console.log(" lsll "+lsll);
         console.log(" tshh "+tshh);
         console.log("pshh "+pshh);
         console.log("pt "+pt);
         console.log(" prv "+prv);
        
         
		  if(totalComp1==0){
				$("#modelDialog1").addClass("modal-md");
				$("#modelTitle1").html("Error box");
				  $("#modelBody1").html("<b>Select Components</b> ");
				  $("#modelBody1").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp1();
			  }else {
				  if(flag==0){
					  $("#modelDialog1").addClass("modal-xl");
					  $("#modelTitle1").html("Required configuration ");
						htm=''
					  
						+'<div class="col-sm-12" >'
						+'<center>REQUIRED COMPONENTS</center>'
						+'</div>'
					  +'<div class="col-sm-12" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td><center>FT</center></td>'
						+'     <td><center>TT</center></td>'
						+'     <td><center>AFR</center></td>'
						+'     <td><center>LSHH</center></td>'
						+'     <td><center>LSLL</center></td>'
						+'     <td><center>TSHH</center></td>'
						+'     <td><center>PSHH</center></td>'
						+'     <td><center>PT</center></td>'
						+'     <td><center>PRV</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>3</center></td>'
						+'     <td><center>3</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>3</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+"<img src='images/Destillation_withSensor.png' class='img-fluid' style='border-style: double;border-color: black;'>"
						 $("#modelBody1").html(htm);
						  $("#modelBody1").css("color","red"); 
				  }
				  else
					  {
					  CountComp1();
					  }
				
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp1(){
		
		if((ft==StdFTCount) && (tt==StdTTCount) && (afr==StdAFRCount) && (lshh==StdLSHHCount) && (lsll==StdLSLLCount)
				&&(tshh==StdTSHHCount)&&(pshh==StdPSHHCount) && (pt==StdPTCount) &&(prv==StdPRVCount)){
			$("#modelDialog1").removeClass("modal-xl");
			 $("#modelDialog1").addClass("modal-md");
			 $("#modelTitle1").html("Message box");
			 $("#modelBody1").html("<b>Click on 'Next level' button.</b>");
			$("#modelBody1").css("color","green");
			$("#tt,#ft,#pt,#lt,#lsl,#lsh,#tsh,#tsl,#vfd,#psh,#plc,#scr,#verifyInstr,#prv,#tshh,#pshh,#lshh,#lsll,#afr").prop("disabled",true);
			addToMasterJson();
		
			flag=1;
			htm=''
				+'<div class="col-sm-12" >'
				+"<img src='images/Destillation_withSensor.png' class='img-fluid' id='partB1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
				+'</div>'
			  $("#diagram").html(htm);
			  $("#partB1").animate(
			          {
			            width: "100%",
			            height: "100%",
			            left: "+=10px",
			          },
			          1000,
			          
			        );
				$("#nextLevel2").prop("hidden",false);
		}
		else{
			
			
			perFTCount=parseFloat((ft*100)/StdFTCount);
			perTTCount=parseFloat((tt*100)/StdTTCount);
			perAFRCount=parseFloat((afr*100)/StdAFRCount);
			
			perLSLLCount=parseFloat((lsll*100)/StdLSLLCount);
			perLSHHCount=parseFloat((lshh*100)/StdLSHHCount);
			perTSHHCount=parseFloat((tshh*100)/StdTSHHCount);
			perPSHHCount=parseFloat((pshh*100)/StdPSHHCount);
			perPTCount=parseFloat((pt*100)/StdPTCount);
			perPRVCount=parseFloat((prv*100)/StdPRVCount);
			
			
			totalComp1=perFTCount+perTTCount+perAFRCount+perLSLLCount+perLSHHCount+perTSHHCount+perPSHHCount+perPTCount+perPRVCount ;
			  avg=parseInt(totalComp1/9);
			  
			  console.log(" avg "+avg);
			
				 $("#modelDialog1").removeClass("modal-xl");
				$("#modelDialog1").addClass("modal-md");
				
				if((StdFTCount<ft)||(StdTTCount<tt)||(StdAFRCount<afr)||(StdLSHHCount<lshh)||(StdLSLLCount<lsll)||(StdTSHHCount<tshh)
						||(StdPSHHCount<pshh)||(StdPTCount<pt)|| (StdPRVCount<prv)){
					
					$("#modelBody1").css("color","red"); 
					$("#modelTitle1").html("Error box");
					$("#modelBody1").html("<b>More components than expected.</b>");
				}else
					{
						if(avg<100){
							$("#modelTitle1").html("Message box");
							$("#modelBody1").css("color","red");
							 $("#modelBody1").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody1").css("color","red");
							$("#modelTitle1").html("Error box");
							 $("#modelBody1").html("<b>More components than expected. </b>");
						}
					}
				
		}
		
	}
	function addToMasterJson()
	{
		tempMasterJsonInstr = {
				
		"StdFTCount":"3",
		"StdTTCount":"3",
		"StdAFRCount":"1",
		"StdLSHHCount":"2",
		"StdLSLLCount":"3",
		"StdTSHHCount":"1",
		"StdPSHHCount":"1",
		"StdPTCount":"1",
		"StdPRVCount":"2",
				};
				
		InstrMasterJson.Instrument=tempMasterJsonInstr;
		console.log(InstrMasterJson);
		resultJson.instrument=instrActualCount;
		console.log(resultJson);
	}
	$("#nextLevel2").click(function(){
		if(flag==1){
			DistillationColumnSquActivities();
		}
	
	});
	
	
	
}

