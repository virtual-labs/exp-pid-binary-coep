function DistillationColumnDatasheet(){
console.log(masterJson);
	var htm=''
	 +' <div class="row">'

	 +' <!-- Tabs and Content Container -->'
	 +'  <ul class="nav nav-tabs" id="dynamicTabs" role="tablist"></ul>'
	 +'  <div class="tab-content" id="dynamicTabContent"></div>'
	 +'</div>'
	 +' <button id="generatePdf" class="btn btn-danger" style=" float: right; margin-top: 10px;">Download</button>'
	 
$("#datasheetBody").html(htm);


      // Clear existing tabs and content
      $('#dynamicTabs').empty();
      $('#dynamicTabContent').empty();

      for (let i = 0; i < masterJson.length; i++) {
    	  // Add tab
    	  const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    	  const tabItem = `
    	    <li class="nav-item" role="presentation">
    	      <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab">
    	        Test cycle - ${i + 1}
    	      </button>
    	    </li>`;
    	  $('#dynamicTabs').append(tabItem);
    	  let p=0;
    	  // Generate table rows dynamically
    	  let rows = ` `;
    	  for (let j = 0; j < masterJson[i].length; j++) {
			  
//			  if(j%2==0){
				   rows += `
    	      <tr>
    	        <td>${p++}</td>
    	        <td>${masterJson[i][j].tt1}</td>
    	        <td>${masterJson[i][j].tt2}</td>
    	        <td>${masterJson[i][j].tt3}</td>
   	       		 <td>${masterJson[i][j].lt}</td>
   	       		 <td>${masterJson[i][j].pt}</td> 
   	       		  <td>${masterJson[i][j].FT1}</td> 
   	       		   <td>${masterJson[i][j].FT2}</td> 
   	       		    <td>${masterJson[i][j].FT3}</td> 
    	      </tr>`;
//			  }
    	   
    	  }
    	  

    	  // Add tab content
    	  const tabContent = `
    	    <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel">
 
    	      <table class="table table-bordered mt-3"  style="overflow-y: auto; overflow-x: auto;">
    	        <thead>
    	          <tr>
    	            <th>Sr no</th>
    	              <th>TT1</th>
    	               <th>TT2</th>
    	                <th>TT3</th>
    	             <th>LT</th>
    	             <th>PT</th>
    	             <th>FT1</th>
    	           <th>FT2</th>
    	           <th>FT3</th>
    	 
    	        </tr>
    	        </thead>
    	        <tbody>
    	          ${rows}
    	        </tbody>
    	      </table>
    	    </div>`;
    	  $('#dynamicTabContent').append(tabContent);
    	}
      
      document.getElementById('generatePdf').addEventListener('click', function () {
    	    const { jsPDF } = window.jspdf; // Access jsPDF library
    	    const doc = new jsPDF();

    	    const tables = document.querySelectorAll('#dynamicTabContent .table'); // Select all tables
    	    tables.forEach((table, index) => {
    	      if (index > 0) {
    	        doc.addPage(); // Add a new page for each table after the first
    	      }
    	      doc.autoTable({
    	        html: table, // Generate PDF table from HTML table
    	        theme: 'grid', // Optional: Table styling (striped, grid, plain)
    	        startY: 10, // Starting Y position
    	        margin: { top: 10, bottom: 10 }, // Optional margins
    	      });
    	    });

    	    doc.save('DistillationColumn_Datasheet.pdf'); // Download the generated PDF
    	  });
}
	
