ComponentMasterJson = {};
timerMasterJson = {};
resultJson={};
function DistillationColumnPiping()
{
	ComponentMasterJson = {};
	
	var StdCompPipingCount=13;
	var StdCVCCount=1;
	var StdHeaterCount=1;
	var StdTankCount=4;
	var StdMotorCount=1;
	var StdConCount=1;
	var StdThreeWayControlValveCount=1;
	var StdSolinoidValvesCount=2;
	var StdPumpCount=2;
	
	
	var perCVCCount=1;
	var perHeaterCount=1;
	var perTankCount=4;
	var perMotorCount=1;
	var perConCount=1;
	var perThreeWayControlValveCount=1;
	var perSolinoidValves=2;
	var perPumpCount=2;

	var CVC;
	var Heater;
	var Tank;
	var Motor;
	var Con;
	var ThreeWayControlValve;
	var SolinoidValve;
	var Pump;
	
	var TotalComp;
	var pipingActualCount=0;
	
	$("#Header").html("	<center><span>DISTILLATION COLUMN - PIPING DIAGRAM</span></center>");
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
	
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of cylindrical vessels with column</b></label>'
		+' <input class="form-select" id="CVC" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of heaters</b></label>'
		+' <input class="form-select" id="heater" type="number" min="0" max="5" value="0" tabindex="2" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of tanks</b></label>'
		+' <input class="form-select" id="tank" type="number" min="0" max="5" value="0" tabindex="3" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of motors</b></label>'
		+' <input class="form-select" id="motor" type="number" min="0" max="5" value="0" tabindex="4" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of condensor</b></label>'
		+' <input class="form-select" id="condensor" type="number" min="0" max="5" value="0" tabindex="5" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of 3 way control valves</b></label>'
		+' <input class="form-select" id="controlValves" type="number" min="0" max="5" value="0" tabindex="6" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of solinoid valves</b></label>'
		+' <input class="form-select" id="solinoidValves" type="number" min="0" max="5" value="0" tabindex="7" ></input>'
		+'</div>' 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of pumps</b></label>'
		+' <input class="form-select" id="pumps" type="number" min="0" max="5" value="0" tabindex="8" ></input>'
		+'</div>' 
		
		
		
		+'<div class="col-sm-12">'
		+'<label><b>Utilities</b></label>'
		+'<select class="form-select" id="Utilities" multiple="multiple" tabindex="15">'
		+'  <option value="Water">Water</option>'
		+'  <option value="Air">Air</option>'
		+'  <option value="Steam">Steam </option>'
		+'  <option value="Electricity">Electricity</option>'
		+'  <option value="Sterile_Water">Sterile Water </option>'
		+'  <option value="Heating_Ventilation_Air_Conditioning(HVAC)"> Heating Ventilation Air Conditioning(HVAC)</option>'
		+'  <option value="CCTV_Surveillance">CCTV - Surveillance</option>'
		+'  <option value="Access_Control"> Access Control</option>'
		
	
		+'</select>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyComponents" style="margin-top:10px;margin-bottom:10px;width:100%" data-toggle="modal" data-target="#myModal" tabindex="16">Verify Components </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal">'
		+'    <div class="modal-dialog " id="modelDialog">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody">'
		
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
		+'<button type="button" class="btn btn-danger"  id="nextLevel1" style="margin-top:10px;margin-bottom:10px;width:100%" hidden>Next Level</button>'
		+'</div>'
		
		+'</div>'
	$("#Selection").html(htm);
	var htm=''
		
		+'<div class="row statement" ><p>A problem statement is a crucial element in designing and developing a pilot plant. '
		+'It defines the problem or opportunity that the pilot plant aims to address, and it serves as a guiding force throughout the project.'
		+' Here is a general outline to help you define a problem statement for designing and developing a pilot plant.'
		+'<br><br>Problem Statement: You are given the responsibility as an Instrumentation and Control Engineer to design and commission a pilot plant of '
		+'a distillation column with a capacity of 5 Liters.'
		+'<br><p><b>Background :</b> <br>The pilot plant will be used to test the new “control and automation” technologies.'
		+'<br><br><b>Key Performance Indicators (KPIs) :</b><br> You will be judged based on the accuracy of design, proper'
		+' selection of field and panel instruments, and successful commissioning of the plant in a stipulated time frame.'
		+'<br><br><b>Constraints and Assumptions :</b><br> As you are an Instrumentation and Control Engineer process related details are'
		+' not expected from you. You will receive the same from a process expert.</b></div>'
		+'<div class="row"><img src="images/DesCol.png" class="img img-responsive"></img></div>'
		$("#diagram").html(htm);
       var temp=0;
	  
	   var totalComp;
	   var flag=0;
	   var selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		pipingActualCount++;
		
		 CVC=parseInt($("#CVC").val());
		 Heater=parseInt($("#heater").val());
		 Tank=parseInt($("#tank").val());
		 Motor=parseInt($("#motor").val());
		 Con=parseInt($("#condensor").val());
		 controlValves=parseInt($("#controlValves").val());
		 SolinoidValves=parseInt($("#solinoidValves").val());
		 Pump=parseInt($("#pumps").val());
	
		console.log("CVC "+CVC);
		console.log("Heater "+Heater);
		console.log("Tank "+Tank);
		console.log("Motor "+Motor);
		console.log("Con "+Con);
		console.log("controlValves "+controlValves);
		console.log("SolinoidValves "+SolinoidValves);
		console.log("Pump "+Pump);
		
		
		
		const selectedValues = $("#Utilities").val();
		 
		 if (selectedValues) {
	          selectedValues.forEach(value => {
	            if (!selectedArray.includes(value)) {
	              selectedArray.push(value);
	            }
	          });

//	          $("#output").text("Values in Array: " + selectedArray.join(", "));
	        } 
		 
		 CountComp();
		 
		  if(totalComp==0 ||CVC === "" || Heater === "" || Tank === "" ||Motor === "" || Con === "" || controlValves === ""||SolinoidValves === ""||Pump ==="" ){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box ");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp();
			  }else{
				  if(flag==0){
					  $("#modelDialog").removeClass("modal-md");
					  $("#modelDialog").addClass("modal-xl");
//					  $("#modelTitle").html("Required configuration ");
					  htm=''
						  +'<div class="row">'
						  +'<div class="col-sm-6" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="4"><center>REQUIRED COMPONENTS</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Cylindrical vessels with column</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>Heater</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Tank</center></td>'
						+'     <td><center>4</center></td>'
						+'     <td><center>Motor</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Condensor</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>3-Way control valves</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Solinoid Valves</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>Pump</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						
					    +' </tbody>'
						+'</table>'
						+'</div>'
						 +'<div class="col-sm-6" >'
							+'<table class="table table-striped table-bordered">'
							+' <tbody>'
							+'    <tr class="table-dark text-dark">'
							+'     <td colspan="2"><center> REQUIRED UTILITIES</center></td>'
							+'   </tr>'
							+'    <tr>'
							+'     <td><center>AIR</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" style=""></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>ELECTRICITY</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>COMMUNICATION NETWORK</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>ACCESS CONTROL</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>CCTV</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							
							+'   </tr>'
						    +' </tbody>'
							+'</table>'
							+'</div>'
							+'</div>'

						+"<img src='images/Destillation_WithoutSensor.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
						 $("#modelBody").html(htm);
						  $("#modelBody").css("color","red");   
				  }
				  else
					  {
					  CountComp();
					  }
				  
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp(){
		
		 if(totalComp==0 ||CVC === "" || Heater === "" || Tank === "" ||Motor === "" || Con === "" || controlValves === ""||SolinoidValves === ""||Pump ==="" ){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		
	else{
		  
		if((CVC==StdCVCCount) && (Heater==StdHeaterCount)&&(Tank==StdTankCount)&&(Motor==StdMotorCount)
				&&(Con==StdConCount)&&(controlValves==StdThreeWayControlValveCount)&&(SolinoidValves==StdSolinoidValvesCount)&&(Pump==StdPumpCount) ){
			
			if(selectedArray.length==0){
				
				 $("#modelDialog").removeClass("modal-xl");
					$("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Error box");
					  $("#modelBody").html("<b>Select utilities.</b> ");                                                                                                
					  $("#modelBody").css("color","red");
			}
			else
				{ 
					 $("#modelDialog").removeClass("modal-xl");
					 $("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Message box ");
					 $("#modelBody").html("<b>Click on 'Next level' button.</b>");
					$("#modelBody").css("color","green");
					$("#jacketVessels,#vessel1,#vessel1half,#vessel3,#solenoidValve,#controlValves,#angleValves,#tanks,#pumps,#racks,#belts,#arams,#motors,#rotaryTable,#verifyComponents,#Utilities,#verifyComponents,#Utilities,#heater,#tank,#motor,#condensor,#controlValves,#solinoidValves,#CVC").prop("disabled",true);
					
					flag=1;
					addToMasterJson();
					htm=''
						+'<div class="col-sm-12" >'
						+"<img src='images/Destillation_WithoutSensor.png' class='img-fluid' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
						+'</div>'
						
					$("#diagram").html(htm);
					 $("#partA1").animate(
					          {
					            width: "100%",
					            height: "100%",
					           left: "+=10px",
		//			            background-color:"red"
					            
					          },
					          1000,
					          
					        );
						$("#nextLevel1").prop("hidden",false);
				}	
		}
		else{
			
			
			perCVCCount=parseFloat((CVC*100)/StdCVCCount);
			perTankCount=parseFloat((Tank*100)/StdTankCount);
			perHeaterCount=parseFloat((Heater*100)/StdHeaterCount);
			perMotorCount=parseFloat((Motor*100)/StdMotorCount);
			perConCount=parseFloat((Con*100)/StdConCount);
			perThreeWayControlValveCount=parseFloat((controlValves*100)/StdThreeWayControlValveCount);
			perSolinoidValves=parseFloat((SolinoidValves*100)/StdSolinoidValvesCount);
			perPumpCount=parseFloat((Pump*100)/StdPumpCount);
		
			 
			 console.log(" perCVCCount "+perCVCCount);
			 console.log(" perTankCount "+perTankCount);
			 console.log(" perHeaterCount "+perHeaterCount);
			 console.log(" perMotorCount "+perMotorCount);
			 console.log(" perConCount "+perConCount);
			 console.log(" perThreeWayControlValveCount "+perThreeWayControlValveCount);
			 console.log(" perSolinoidValves "+perSolinoidValves);
			 console.log(" perPumpCount "+perPumpCount);
			 
				totalComp=perCVCCount+perTankCount+perHeaterCount+perMotorCount+perConCount+perThreeWayControlValveCount+perSolinoidValves+perPumpCount;
			  avg=parseInt(totalComp/8);
			  
			  console.log(" avg "+avg);
			
				 $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
			
				if((CVC>StdCVCCount) || (Tank>StdTankCount) || (Heater>StdHeaterCount) || (Motor>StdMotorCount) ||(Con>StdConCount)
						||(controlValves>StdThreeWayControlValveCount) || (SolinoidValves>StdSolinoidValvesCount) || (Pump>StdPumpCount)){
					
					$("#modelBody").css("color","red"); 
					 $("#modelTitle").html("Error box");
					$("#modelBody").html("<b>More components than expected. </b>");
				}else
					{
						if(avg<100){
							$("#modelBody").css("color","red");
							$("#modelTitle").html("Message box");
							 $("#modelBody").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody").css("color","red");
							 $("#modelTitle").html("Error box");
							 $("#modelBody").html("<b>More components than expected.</b>");
						}
					}
		}
	}
		
	}
	function addToMasterJson()
	{
		
		tempMasterJsonComp = {
		"totalComponent":"13",
		"CVC":"1",
		"tank":"4",
		"Heater":"1",
		"Condensor":"1",
		"3WayValves":"1",
		"Solinoid Valves":"2",
		"Pump":"2",
		"Motor":"1"
		
//		"Utilities":selectedArray,
		};
		
		ComponentMasterJson.Component=tempMasterJsonComp;
		ComponentMasterJson.Component.Utilities=selectedArray;
		console.log(ComponentMasterJson);
		resultJson.piping=pipingActualCount;
		console.log(resultJson);
	}
	
	$("#nextLevel1").click(function(){
		DistillationColumnInstrument();
	});
	
	
	
}

