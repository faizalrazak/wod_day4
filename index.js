function timeConvert(inputTime){
  var split = inputTime.split(":");
  var first = parseInt(split[0]);
  var ampm = inputTime.substring(8,10);
 
  if(ampm == "PM"){
	first = first + 12;
   document.write(first + ":" + split[1] + ":" + inputTime[6]+inputTime[7]);
  }
  else{
    first = "00";
    document.write(first+":"+split[1]+":"+inputTime[6]+inputTime[7]);
  } 
}
timeConvert("12:30:34PM");