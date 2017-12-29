$.ajax({
  url: "https://raw.githubusercontent.com/akiet00/sell/master/resources/specs.csv",
  datatype: 'text',
}).done(parseData);

function parseData(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = "<table>"
  //Loop through each row of the table
  for (var i = 0; i < allRows.length; i++) {
    if (i === 0) { //First row
      table += "<thead>";
      table += "<tr>";
    } else {
      table += "<tr>";
    }
    //Loop through each cell in a row
    var rowCells = allRows[i].split(',');
    for (var j = 0; j < rowCells.length; j++) {
      if (i === 0) { //First row
        table += "<th>";
        table += rowCells[j];
        table += "</th>";
      } else { //Not first row
        if (j === 3 && rowCells[j].length != 0 && rowCells[j][0] === 'h' ) { //column with hyperlink
          table += "<td>";
          table += "<a href=\'" + rowCells[j] + "\' target='_blank'>Buy</a>";
          table += "</td>";
        } else { //column without hyperlink
          table += "<td>";
          table += rowCells[j];
          table += "</td>";
        }
      }
    }
    if (i === 0) { //End of the first row
      table += "</tr>";
      table += "</thead>";
      table += "<tbody>"
    } else {
      table += "</tr>";
    }
  }
  //Finishing table tags
  table += '</tbody>';
  table += '</table>';
  //Append to specs sheet
  $('#table-container').append(table);
}
