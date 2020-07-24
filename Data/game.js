    
    var user = 1;
    var P1 = "<img border=0 width=100 height=100 src='../dist/assets/x.svg'/>";
    var P2 = "<img border=0 width=100 height=100 src='../dist/assets/o.svg'/>";   
    var clicks = 0;

    var Result = new Array();
    Result[0] = new Array(0,0,0);
    Result[1] = new Array(0,0,0);
    Result[2] = new Array(0,0,0);    
    var complete = 0;
    
    function play(cell) {
      if (complete==1) {
        return 0;
      }
      var row = cell.id[0];
      var col = cell.id[1];
      if (cell.innerHTML.search("blank.png") < 0) {
        alert("Sorry not allowed!");
        return 0;
      }
      clicks++;
      if (user == 1) {
        cell.innerHTML = P1;
        user = 2;
        Result[row][col] = 1;
		document.getElementById("turn").innerHTML = "<font color=White size=5><B>Player 2 to play</B></font>";
      } else {
        cell.innerHTML = P2;
        user = 1;
        Result[row][col] = 2;
		document.getElementById("turn").innerHTML = "<font color=White size=5><B>Player 1 to play</B></font>";
      }
      var finish = checkForWin();
      if (finish != 0) {
        alert("Player " +finish+" won!");
		document.getElementById("turn").innerHTML = "<font color=white size=5><B>Player "+finish+" won!</B></font>";
        complete = 1;
      } else if (clicks==9) {
        alert("It's a TIE !!!");
		document.getElementById("turn").innerHTML = "<font color=White size=5><B>It's a Tie !!! Please Play once more</B></font>";
        complete = 1;
      }
    }
    
    function checkForWin() {
      var winner = 0;
      if (Result[0][0]!=0 && Result[0][0]==Result[0][1] && Result[0][1]==Result[0][2])
        winner = Result[0][0];
      else if (Result[2][0] !=0 && Result[2][0]==Result[2][1] && Result[2][1]==Result[2][2])
        winner = Result[2][0];
      else if (Result[1][0] !=0 && Result[1][0]==Result[1][1] && Result[1][1]==Result[1][2])
        winner = Result[1][0];
      else if (Result[0][2] !=0 && Result[0][2]==Result[1][1] && Result[1][1]==Result[2][0])
        winner = Result[0][2];
      else if (Result[0][0] !=0 && Result[0][0]==Result[1][0] && Result[1][0]==Result[2][0])
        winner = Result[0][0];
      else if (Result[0][1] !=0 && Result[0][1]==Result[1][1] && Result[1][1]==Result[2][1])
        winner = Result[0][1];
      else if (Result[0][2] !=0 && Result[0][2]==Result[1][2] && Result[1][2]==Result[2][2])
        winner = Result[0][2];
      else if (Result[0][0] !=0 && Result[0][0]==Result[1][1] && Result[1][1]==Result[2][2])
        winner = Result[0][0];
      
      return winner;
    }
    