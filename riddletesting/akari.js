var table = document.getElementById("gameboard"); 
 
for (var i = 0, row; row = table.rows[i]; i++) {
  for (var j = 0, col; col = row.cells[j]; j++) {
    col.setAttribute("onclick", "toggle(this)");
    if(col.classList == "") {
    	col.classList = 'off';
    }
  }
}


function toggle(cell) {
	if(cell.innerHTML == ".") {
  	cell.innerHTML = "💡";
  } else if (cell.innerHTML == "💡") {
    cell.innerHTML = "❌";
  } else {
  	cell.innerHTML = ".";
  }
  
	redrawBoard();
  checkForVictory();
}

function redrawBoard() {
	for (var i = 0, row; row = table.rows[i]; i++) {
  	for (var j = 0, col; col = row.cells[j]; j++) {
    	if(col.innerHTML == "💡") {
      	col.classList = "on";
      } else if (col.classList != "black") {
      	col.classList = "off";   	
      }
 	 	}
	}
  
  for (var i = 0, row; row = table.rows[i]; i++) {
  	for (var j = 0, col; col = row.cells[j]; j++) {
    	//console.log("Checking Row " + i + ", Column " + j);
    	if(col.innerHTML == "💡") {
      	//console.log("I found a 💡")
      	
        //check to the left
        var blocked = false;
      	var k = j;
     		while (!blocked) {
        	var newCell = row.cells[k];
       		if(newCell.classList == "off") {
          	newCell.classList = "on";
          } else if (newCell.classList == "black") {
          	blocked = true;
          }
          k--;
          if(k < 0) {
          	blocked = true;
          }
       	}
        
        //check to the right
        blocked = false;
        k = j;
     		while (!blocked) {
        	var newCell = row.cells[k];
       		if(newCell.classList == "off") {
          	newCell.classList = "on";
          } else if (newCell.classList == "black") {
          	blocked = true;
          }
          k++;
          if(k == row.cells.length) {
          	blocked = true;
          }
       	}

        //check up
        blocked = false;
        k = i;
        while(!blocked) {
          var newCell = table.rows[k].cells[j];
          if(newCell.classList == "off") {
            newCell.classList = "on";
          } else if (newCell.classList == "black") {
            blocked = true;
          }
          k--;
          if(k < 0) {
            blocked = true;
          }

        }
        
        //check down
        blocked = false;
        k = i;
        while(!blocked) {
          var newCell = table.rows[k].cells[j];
          if(newCell.classList == "off") {
            newCell.classList = "on";
          } else if (newCell.classList == "black") {
            blocked = true;
          }
          k++;
          if(k == table.rows.length) {
            blocked = true;
          }
        }
      
      	      
      }
      
    }
  }
}

function checkForVictory() {
  var victoryCheck = true;
  for (var i = 0, row; row = table.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
      if(col.classList == "off") {
        victoryCheck = false;
        break;
      }
      if(col.innerHTML == "0" || col.innerHTML == "1" || col.innerHTML == "2" || col.innerHTML == "3" || col.innerHTML == "4") {
        var lightCheck = 0;
        //check to the left
        if(j > 0 && table.rows[i].cells[j-1].innerHTML == "💡") {console.log("There is a light to my left."); lightCheck++;}
        //check to the right
        if(j < row.cells.length-1 && table.rows[i].cells[j+1].innerHTML == "💡") {console.log("There is a light to my right."); lightCheck++;}
        //check above
        if(i > 0 && table.rows[i-1].cells[j].innerHTML == "💡") {console.log("There is a light above me."); lightCheck++;}
        //check below
        if(i < table.rows.length-1 && table.rows[i+1].cells[j].innerHTML == "💡") {console.log("There is a light below me."); lightCheck++;}
        console.log("THERE ARE " + lightCheck + " LIGHTS!");
        if(lightCheck != col.innerHTML) {
          victoryCheck = false;
          console.log("I ran.");
          break;
        }
      }
    }
  } //end iteration over the board
  console.log(victoryCheck);
  if(victoryCheck) {
    document.getElementById("result").innerHTML = "Congrats! You solved the riddle!";
  } else {
    document.getElementById("result").innerHTML = "";
  }

}