$.ajax({
  url:"resources/specs.csv",
  datatype: 'text',
}).done(parseData);

function parseData(data){
  var allRows = data.split(/\r?\n|\r/);
  var table = "<table>"
  //Loop through each row of the table
  for(var i=0; i<allRows.length; i++){
    if(i === 0){  //Head row
      table += "<thead>";
      table += "<tr>";
    } else{
      table += "<tr>";
    }
    //Loop through each cell in a row
    var rowCells = allRows[i].split(',');
    for(var j=0; j<rowCells.length; j++){
      if(i === 0){
        table += "<th>";
        table += rowCells[j];
        table += "</th>";
      }else{
        table += "<td>";
        table += rowCells[j];
        table += "</td>";
      }
    }
    if(i === 0){ //End of the first row
      table += "</tr>";
      table += "</thead>";
      table += "<tbody>"
    }else{
      table += "</tr>";
    }
  }
  //Finishing table tags
  table += '</tbody>';
  table += '</table>';
  //Append to spec sheet
  $('.table-container').append(table);
}
