function showHint(whichPuzzle) {

	var hintSection = document.getElementById("hints");

	var hintPuzzles = document.getElementsByClassName("puzzleli");
	var puzzleLi = null;
	for(var i = 0; i < hintPuzzles.length; i++){
		if(hintPuzzles[i].id == whichPuzzle){
			puzzleLi = hintPuzzles[i]
		}
	};
	
	var hintsOl = puzzleLi.getElementsByClassName('hints')[0];
	var hintsArray = hintsOl.getElementsByClassName("hint");
	var topicsLi = hintsOl.getElementsByClassName("reveal")[0];
	var topicsArray = topicsLi.getElementsByClassName("topic");

	for(i = 0; i < hintsArray.length; i++){
		if(getComputedStyle(hintsArray[i]).display=='none'){
			hintsArray[i].style.display="list-item";
			topicsArray[i].style.display="none";
			var hintCount = puzzleLi.getElementsByClassName("hintcount")[0];
			var hintCountContent = hintCount.innerHTML;
			var indexOfHintsAvailable = hintCountContent.search("hints available");
			var countStart = hintCountContent.lastIndexOf("(",indexOfHintsAvailable);
			var countEnd = hintCountContent.indexOf(")",indexOfHintsAvailable);
			var countString = hintCountContent.substring(countStart+1,countEnd);
			if(i == hintsArray.length - 1){
				// there are no more hints
				hintCount.innerHTML=
					hintCountContent.replace(countString,"no more hints");
				hintCount.style.fontWeight="normal";
				topicsLi.style.display="none";
			}else{
				hintCount.innerHTML=
					hintCountContent.replace(countString,(hintsArray.length - i - 1)+" hints available");
				topicsArray[i+1].style.display="inline";
			}	
			break;
		}
		if(i == hintsArray.length - 1){
			// there are no more hints
			hintCount.style.fontWeight="normal";
		}

	}

};

function openAnswerChecker(whichPuzzle){
	var answerChecker = document.getElementById("answerchecker");
	var whichPuzzleDiv = answerChecker.getElementsByClassName("whichpuzzle")[0];
	whichPuzzleDiv.innerHTML=whichPuzzle;
	answerChecker.style.display="block";
	
	switch(whichPuzzle){
		case "baphlships":
			document.getElementById("checkertitle").innerHTML="Introduction to BAPHLships";
		break;
	}
};

function closeAnswerChecker(){
	var answerChecker = document.getElementById("answerchecker");
	answerChecker.style.display="none";
				
	var responseDiv = answerChecker.getElementsByClassName("response")[0];
	responseDiv.style.display = "none";


};

function checkAnswer(){
	var answerChecker = document.getElementById("answerchecker");
	var whichPuzzleDiv = answerChecker.getElementsByClassName("whichpuzzle")[0];
	var whichPuzzle = whichPuzzleDiv.innerHTML;
	var answerField = document.getElementById("checkerentry");
	var answer = answerField.value;
	
	var answerizedAnswer = answer.toUpperCase().replace(/[^A-Z]/g,"");
	var saltedAnswer = "baphl" + answerizedAnswer + whichPuzzle.toUpperCase() + "22";
	var correct = false;
	var clue = "";
	switch(whichPuzzle){
		case "baphlships":
			correct =  Boolean(
				md5(saltedAnswer)==="2b4b36a1533cb630fd6a67c18e3bc928"
			);
			if(
				Boolean(
					md5(saltedAnswer)==="253e45fe91e26356a818512bb34b3ef5"
				)
			){
				clue="Spell out your entire answer."
			}
			break;
		default:
			correct = false;
	}
	
	var responseDiv = answerChecker.getElementsByClassName("response")[0];
	responseDiv.style.display = "inline";
	var answerDiv = responseDiv.getElementsByClassName("responseanswer")[0];
	var resprespDiv = responseDiv.getElementsByClassName("responseresponse")[0];
	var respclueDiv = responseDiv.getElementsByClassName("responseclue")[0];
	answerDiv.innerHTML = answer.toUpperCase();
	if(correct){
		resprespDiv.innerHTML = " is correct!";
		resprespDiv.style.color = "#48b703";

	}else{
		resprespDiv.innerHTML = " is incorrect.";
		resprespDiv.style.color = "#b74803";

	}
	if(clue==""){
		respclueDiv.style.display = "none";
	}else{
		respclueDiv.innerHTML = clue;
		respclueDiv.style.display="block";
	}
	answerField.value=null;
}
