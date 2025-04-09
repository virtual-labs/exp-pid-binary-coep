function DistillationColumnGraph(masterJson, i) {
	console.log(masterJson);
    let currentIndex = 0;
		var CheckBoxData='CheckBox'+i;
		var  ButtonDiv='ButtonDiv'+i;
		var strId='download'+i;
  	var htm=''
//       +' <h2 class="text-center text-light mb-4">Batch Process Graph</h2>'
//       +' <div class="row" id="graphDiv">'
//       +'     <div class="col-md-12 text-center" id='+CheckBoxData+'>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="0" checked> <b>TT1</b></label>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="1" checked><b>TT2</b></label>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b>TT3</b></label>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b>PT</b></label>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b>LT</b></label>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b>FT1</b></label>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b>FT2</b></label>'
//       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b>FT3</b></label>'
//       +'     </div>'
//       +' </div>';
  
$("#"+CheckBoxData).html(htm);
	var htm=''
	+'<button type="button" class="btn btn-danger"  id="'+strId+'" style="margin-top:10px;float:right;" >Graph Download (Test Cycle-'+(i+1)+')</button>'
	$("#"+ButtonDiv).html(htm);
    const GraphData = 'sensorGraphCold'+i;

    // Extract all values for min calculation
    const allValues = masterJson.flatMap(obj => [obj.tt1, obj.tt2, obj.tt3, obj.pt, obj.lt, obj.FT1, obj.FT2, obj.FT3])
        .filter(value => value !== undefined && value !== null);

    const minValueY = Math.min(...allValues);
    
    // Initialize Highcharts
  
    var chart = Highcharts.chart(GraphData, {
        chart: {
            type: 'line',
            backgroundColor: '#222222',
            animation: true,
            marginRight: 10
        },
        title: {
            text: 'DISTILLATION COLUMN GRAPH',
            style: { color: '#ffffff', fontSize: '20px' }
        },
        xAxis: {
            type: 'linear',
            title: { text: 'TIME', style: { color: '#ffffff' } },
            gridLineColor: '#444444',
            labels: { style: { color: '#ffffff' } }
        },
        yAxis: {
            title: { text: 'READINGS', style: { color: '#ffffff' } },
            min: minValueY,
            gridLineColor: '#444444',
            labels: { style: { color: '#ffffff' } }
        },
        legend: {
            enabled: true,
            itemStyle: { color: '#ffffff' },
            itemHoverStyle: { color: '#dddddd' }
        },
        tooltip: {
            shared: true,
            backgroundColor: 'rgba(0,0,0,0.75)',
            style: { color: '#ffffff' },
            valueDecimals: 3
        },
        series: [
           { name: 'TT1', data: [], color: '#FF5733' },  // Red-Orange
           { name: 'TT2', data: [], color: '#33FF57' },  // Green
           { name: 'TT3', data: [], color: '#3357FF' },  // Blue
           { name: 'PT', data: [], color: '#FF33A8' },   // Pink
           { name: 'LT', data: [], color: '#FFC300' },   // Yellow
           { name: 'FT1', data: [], color: '#8D33FF' },  // Purple
           { name: 'FT2', data: [], color: '#33FFF3' },  // Cyan
           { name: 'FT3', data: [], color: '#A833FF' }   // Orange-Red
        ],
        credits: { enabled: false }
    });

    // Dynamically update chart with data
    let interval = setInterval(() => {
        if (currentIndex < masterJson.length) {
            let currentTime = masterJson[currentIndex].time;
            let tt1 = masterJson[currentIndex].tt1;
            let tt2 = masterJson[currentIndex].tt2;
            let tt3 = masterJson[currentIndex].tt3;
            let pt = masterJson[currentIndex].pt;
            let lt = masterJson[currentIndex].lt;
            let FT1 = masterJson[currentIndex].FT1;
            let FT2 = masterJson[currentIndex].FT2;
            let FT3 = masterJson[currentIndex].FT3;

            chart.series[0].addPoint([currentTime, tt1], true, false);
            chart.series[1].addPoint([currentTime, tt2], true, false);
            chart.series[2].addPoint([currentTime, tt3], true, false);
            chart.series[3].addPoint([currentTime, pt], true, false);
            chart.series[4].addPoint([currentTime, lt], true, false);
            chart.series[5].addPoint([currentTime, FT1], true, false);
            chart.series[6].addPoint([currentTime, FT2], true, false);
            chart.series[7].addPoint([currentTime, FT3], true, false);

            currentIndex++;
        } else {
            clearInterval(interval);
            $("#download,#checkDiv").prop("hidden", false);
        }
    }, 1000);

    // Toggle series visibility
    document.querySelectorAll('.series-toggle').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const seriesIndex = parseInt(this.dataset.series);
            const series = chart.series[seriesIndex];
            this.checked ? series.show() : series.hide();
        });
    });

    // Screenshot functionality
   $('#'+strId).on('click', function() {
			$('#report').prop("hidden",true);
		    html2canvas(document.querySelector("#"+GraphData)).then(canvas => {
		        // Append the screenshot canvas to the body
		        document.body.appendChild(canvas);
		        $("canvas").css("display","none");
		        // Optionally save the screenshot as an image
		        var link = document.createElement('a');
		        link.download = 'DistillationColumn_Graph_TestCycle - '+(i+1)+'.png';
		        link.href = canvas.toDataURL();
		        link.click();
		    });
		});
}
