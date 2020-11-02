$(document).ready(function() {    
	
    loadItems();    
});    
    
  
function loadItems() {    
    var siteUrl = "..../_api/web/lists/getbytitle('TaskList')/items?$select=Title,JobNumber,Department,ProjectLead";
   // var oDataUrl = siteUrl;   
    $.ajax({    
        url: siteUrl,    
        type: "GET",    
        dataType: "json",    
        headers: {    
            "accept": "application/json;odata=verbose"    
        },    
        success: mySuccHandler,    
        error: myErrHandler    
    });    
}    
  
function mySuccHandler(data) 
{    
    try 
	{    
          
        $('#table_id').DataTable(
		{    
              
            "aaData": data.d.results,    
            "aoColumns": [  
            {    
                "mData": "Title"    
            },   
            {    
                "mData": "JobNumber"    
            },   
            {    
                "mData": "Department"    
            },
			{    
                "mData": "ProjectLead"    
            }   
                       
            ]    
        });    
    } catch (e) {    
        alert(e.message);    
    }    
}    
    
function myErrHandler(data, errMessage) {    
    alert("Error: " + errMessage);    
}  
