/*
 * Class Seraching algorithms
 * Category:Search algorithms
 *       Linear Search
 TODO ...   
   
 *          Binary Search
 *          Tree Search
 *          Genetic Algorithm

 *          Combinatorial optimization
 *          Hashing
 *          Internet search algorithms
 *          Metaheuristics
 *          String matching algorithms
 *          
 *          Linear Search
 *          Binary Search
 *          Jump Search
 *          Interpolation Search
 *          Exponential Search
 *          Sublist Search (Search a linked list in another list)
 *          Fibonacci Search
 *          The Ubiquitous Binary Search
 *          Recursive program to linearly search an element in a given array
 *          Recursive function to do substring search
 *          Unbounded Binary Search Example (Find the point where a monotonically increasing function becomes positive first time)
 *      
 *      
 * Author: Amir Hatami
 */
 
var displaymode = "No"; // by defualt No details display 
var code = new Array();
 
module.exports = function(inputArray,lookingfor,serachOptions,displayStatus,callback) {
  displaymode = displayStatus;
  try {
    code = getArrayInfo(inputArray);   // code[0]:max element   Code[1]:bucket size square of lenght    code[2] array lenght  code[3] min element 
    if (displaymode=="Yes") console.log("max",code[0],"lenght square",code[1],"array lenght",code[2],"min",code[3]);
    if (!inputArray || inputArray.length === undefined) {
        throw new Error("Input array is not valid !");
    // } else if (code[3] < 0 ) {
    //     throw new Error("negative element not accepted ! ");
    } else 
       callback(null, {
			      linearSearch:function () {
              if (lookingfor=="" ) throw new Error("There is nothing to serach for !");
              if (displaymode=="Yes") console.log("Searching in Array",inputArray,"with Linear Search");
        		  return linearSearchLocal(inputArray,code['length'],lookingfor,serachOptions);
			},
			      binarySearch:function () {
              if (lookingfor=="" ) throw new Error("There is nothing to serach for !");
              if (displaymode=="Yes") console.log("Searching in Array",inputArray,"with Binary Search");
        		  return lbinarySearchLocal(inputArray,code['length'],lookingfor,serachOptions);
			},
			      defaultSearch:function () {
              if (lookingfor=="" ) throw new Error("There is nothing to serach for !");
              if (displaymode=="Yes") console.log("Searching in Array",inputArray,"with default Javascript Searching!");
        		  return defaultSearchLocal(inputArray,code['length'],lookingfor,serachOptions);
			}
    });
  }
  catch (error) {
        callback(error,null);
  }
}


/*
 * General Functions : 
 *      to be used by most of algoritmss
 *        
 *        getArrayInfo    
 *        sortNumber
 *        
 *        
 *        
 *
 * Author: Pooya Hatami
 */

// Function to : 
//   find bigest element
//   creat bucket size
//   find Array lenght  
// *******  original for Bead Sort but used by most of algoritms
getArrayInfo = function(input)
{
  var output = new Array();
  var arrlen = input.length;
  var max = input[0];
  var min = input[0];
  for (i = 1; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
    }
    if (min > input[i]) {
      min = input[i];
    }
  }
  output[0] = Math.floor(max);
  output[1] = Math.floor(Math.sqrt(input.length));
  output[2] = arrlen;
  output[3] = Math.floor(min);
  output['max'] = Math.floor(max);
  output['bucketsizeoffer'] = Math.floor(Math.sqrt(input.length));
  output['length'] = arrlen;
  output['min'] = Math.floor(min);
  
  //console.log(output);
  return output;
}


// Function to : 
//   find bigest element
//   creat bucket size
//   find Array lenght  
// *******  original for Bead Sort but used by most of algoritms
serachArrayOptions = function(serachOption,arrlen)
{ 
    serachOption = typeof serachOption !== 'undefined' ? serachOption : "";
    serachOption=serachOption.toLowerCase();
    serachOption=removeOrdinalNumberSuffix(serachOption);

    //if (displaymode=="Yes") console.log(serachOption);
    var isRange = /^\d{1,10}-\d{1,10}$/;
    var isCases = /^\d{1,10}&\d{1,10}/;
    var isNum = /^\d{1,10}$/;

    if (isRange.test(serachOption)) {
        pulledOutNum = serachOption.split("-");
        optionResult = [parseInt(pulledOutNum[0]),parseInt(pulledOutNum[1])];
        optionMessage = "return range of ";
        optionMessage += addOrdinalNumberSuffix(parseInt(pulledOutNum[0])); 
        optionMessage += " to ";
        optionMessage += addOrdinalNumberSuffix(parseInt(pulledOutNum[1])); 
        optionMessage += " matche elemets";
        if (displaymode=="Yes") console.log("Yes this is a range : "+optionMessage);
            return [optionResult,optionMessage,'range'];
    } else if (isCases.test(serachOption)) {
        pulledOutNum = serachOption.split("&");
        optionResult = [];
        optionMessage = "return ";
        perimeterStr = "";
        for(i=0 ; i<pulledOutNum.length ; i++){
            optionMessage += perimeterStr + addOrdinalNumberSuffix(parseInt(pulledOutNum[i]));  
            optionResult.push(parseInt(pulledOutNum[i])); 
            perimeterStr = " and ";
          }
        optionMessage += " match elemets";
        if (displaymode=="Yes") console.log("Yes these are Cases : "+optionMessage);
            return [optionResult,optionMessage,'cases'];
    } else if (isNum.test(serachOption)) {
        pulledOutNum = parseInt(serachOption);
        optionMessage = " return ";
        optionMessage += addOrdinalNumberSuffix(parseInt(pulledOutNum)); 
        optionMessage += " match elemet";
        optionResult = [pulledOutNum,pulledOutNum];
        if (displaymode=="Yes") console.log("Yes this is a number : "+optionMessage);
          return [optionResult,optionMessage,'one'];
    }        

	  switch(serachOption) {
		case "first":
		case "1st":
		case "1":
		  var typeOption = 'one';
			var optionResult = [1,1];
			optionMessage = "Only return first element matching ";
			break;
		case "second":
		case "2nd":
		case "2":
		  var typeOption = 'one';
			var optionResult = [2,2];
			optionMessage = "return Second match element ";
			break;
		case "third":
		case "3rd":
		case "3":
		  var typeOption = 'one';
			var optionResult = [3,3];
			optionMessage = "Only return Third match element ";
			break;
		case "last":
		  var typeOption = 'one';
			var optionResult = [arrlen,arrlen];
			optionMessage = "return last match element ";
			break;
		case "all":
		  var typeOption = 'range';
			var optionResult = [0,arrlen];
			optionMessage = "return all match elements ";
			break;
		default:
		  var typeOption = 'defualt';
			var optionResult = [0,0];
			optionMessage = "return first match element as default ! ";
	}
  
  return [optionResult,optionMessage,typeOption];
  
}


// Function to : 
//   Add Ordinal Suffix to numbers
function addOrdinalNumberSuffix(num) {
    var j = num % 10,
        k = num % 100;
    if (j == 1 && k != 11) {
        return num + "st";
    }
    if (j == 2 && k != 12) {
        return num + "nd";
    }
    if (j == 3 && k != 13) {
        return num + "rd";
    }
    return num + "th";
}

// Function to : 
//   Remove Ordinal Suffix from numbers
function removeOrdinalNumberSuffix(numStr) {
    var outputStr = numStr.replace(/(\d+)(st|nd|rd|th)/g, "$1");  
  
    return outputStr;
}



// Function to : 
//   for defualt javascript sorting numbers
sortNumber = function(a,b)
{
    return a - b;
}

// Function to : 
//   for defualt javascript seraching 
defaultSearchLocal = function(inputArray,arrLen,lookingFor,serachOptions) 
{ 
  if (displaymode == "Yes") console.log(arrLen, lookingFor,serachOptions);
  serachGuidance = serachArrayOptions(serachOptions,arrLen);
  if (displaymode == "Yes") console.log(serachGuidance[2],serachGuidance);

  switch(serachGuidance[2]) {
		case "one":
  		  if (serachGuidance[0][0]==1) {
  		       return inputArray.indexOf(lookingFor);
  		  } else if (serachGuidance[0][0]==arrLen) {
  		      return inputArray.lastIndexOf(lookingFor);
  		  }
			break;
		// case "range":
		//     strInfo = getArrayInfo(serachGuidance[0]);
		//     start = strInfo['min'];
		//     end = strInfo['max'];
		// 	break;
		// case "cases":
		//     strInfo = getArrayInfo(serachGuidance[0]);
		//     start = strInfo['min'];
		//     end = strInfo['max'];
		// 	break;
		default:
       return inputArray.indexOf(lookingFor);
	}
}


// A utility function to swap two elements
// *******  original for Quick Sort but used by Slection Sort as well
swap = function(a, b)
{
  return [b,a];
}



/*
 * Linear Search algorithm (or Sequential search) !
 * Class	Search algorithm
 * Data structure	Array
 * Category : Linear Search.
 * Worst-case performance	O(n) 
 * Best-case performance	O(1) 
 * Average performance	O(n)
 * Worst-case space complexity O(1) iterative
 *   where n is the size of the input array.
 *   Note: linear search or sequential search is a method for finding a target value
 *         within a list. It sequentially checks each element of the list for the target
 *         value until a match is found or until all the elements have been searched
 *
 * Author: Amir Hatami
 */


// This function returns index of element lookingFor in input[]
linearSearchLocal = function(input, arrLen, lookingFor,serachOptions)
    {
      
        if (displaymode == "Yes") console.log(arrLen, lookingFor,serachOptions);

        serachGuidance = serachArrayOptions(serachOptions,arrLen);

        if (displaymode == "Yes") console.log(serachGuidance[2],serachGuidance);
        
			  switch(serachGuidance[2]) {
					case "one":
					    strInfo = getArrayInfo(serachGuidance[0]);
					    start = serachGuidance[0][0];
					    end = serachGuidance[0][1];
						break;
					case "range":
					    strInfo = getArrayInfo(serachGuidance[0]);
					    start = strInfo['min'];
					    end = strInfo['max'];
						break;
					case "cases":
					    strInfo = getArrayInfo(serachGuidance[0]);
					    start = strInfo['min'];
					    end = strInfo['max'];
						break;
					default:
					    start = 1 ;
					    end = 1 ;
				}

        message = serachGuidance[1];

        if (displaymode == "Yes") console.log("start: ",start," end: ",end," Message:",message," arrLen:",arrLen);
        
        foundCounter = 1;
        foundTag = false;
        foundBuff = "";
        var findings = new Array();
        for (i = 0; i < arrLen; i++)
        {
            // Return the index of the element if the element
            // is found
            if (input[i] == lookingFor){
                foundBuff = i;
                foundTag = true;
                if (start<=foundCounter && foundCounter<=end && serachGuidance[2]=='cases') {
                      for(j=0; j<serachGuidance[0].length ; j++) {
                        if (serachGuidance[0][j]==foundCounter) findings[addOrdinalNumberSuffix(foundCounter)] = i ;
                      }
                } else if (start<=foundCounter && foundCounter<=end ){
                      findings[addOrdinalNumberSuffix(foundCounter)] = i ;
                }
                if (displaymode=="Yes") console.log("found at index [",foundCounter,"] ",findings,start,end,foundCounter,i);
                if (serachGuidance[2]=="one" && foundCounter==start) {
                      if (displaymode=="Yes") console.log("catch one at index[",foundCounter,"] ",start,end,foundCounter,i);
                      findings['type'] = serachGuidance[2];
                      findings['options'] = serachOptions;
                      findings['message'] = serachGuidance[1];
                     return findings;
                } 
                foundCounter++;
            }
        }
  
        if (start==arrLen && foundTag ) {
                  if (displaymode=="Yes") console.log("catch last at index[",foundCounter-1,"] ",start,end,foundCounter,i);
                  findings[addOrdinalNumberSuffix(--foundCounter)] = i-1 ;
                }
        // return -1 if the element is not found
        if (findings.lenght == 0 ) return -1;

        findings['type'] = serachGuidance[2];
        findings['options'] = serachOptions;
        findings['message'] = serachGuidance[1];
        return findings;
    }


