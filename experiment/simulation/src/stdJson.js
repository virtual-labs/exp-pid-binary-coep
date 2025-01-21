compMasterJson = {};
instrMasterJson={};
var masterJsonArr = [];

tempMasterJsonComp = {};

tempMasterJsonComp = {
"VesselsComp": "4",
"VesselsPer": "50",	
};
masterJsonArr.push(tempMasterJsonComp);
compMasterJson.Component=masterJsonArr;

tempMasterJsonComp = {
		"pumpComp": "1",
		"pumpPer": "12.5",	
		};
masterJsonArr.push(tempMasterJsonComp);
compMasterJson.Component=masterJsonArr;

tempMasterJsonComp = {
		"heaterComp": "1",
		"heaterPer": "12.5",		
		};
masterJsonArr.push(tempMasterJsonComp);
compMasterJson.Component=masterJsonArr;

tempMasterJsonComp = {
		"fansComp": "2",
		"fansPer": "30",		
		};
masterJsonArr.push(tempMasterJsonComp);
compMasterJson.Component=masterJsonArr;

console.log(compMasterJson);
var masterJsonArr1 = [];
tempMasterJsonInstr = {};

instrMasterJson={};

tempMasterJsonInstr = {
		"TSHH": "1",
		"TSHHPer": "7.14",	
};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"PSHH": "2",
		"PSHHPer": "14.28",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"PSLL": "2",
		"PSLLPer": "14.28",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"PLC": "1",
		"PLCPer": "7.14",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"VFD": "2",
		"VFDPer": "14.28",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"AFR": "1",
		"AFRPer": "7.14",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"VI": "1",
		"VIPer": "7.14",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"PI": "1",
		"PIPer": "7.14",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"TT": "2",
		"TTPer": "14.28",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;

tempMasterJsonInstr = {
		"FT": "1",
		"FTPer": "7.14",	
		};
masterJsonArr1.push(tempMasterJsonInstr);
instrMasterJson.Instr=masterJsonArr1;
console.log(instrMasterJson);






