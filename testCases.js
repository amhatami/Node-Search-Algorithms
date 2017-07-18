/*
 * Class Seraching algorithms
 * Category:Search algorithms
 *       Linear Search
 TODO ...   
   
 *       Binary Search
 *       Tree Search
 *       Genetic Algorithm

 *       Combinatorial optimization
 *       Hashing
 *       Internet search algorithms
 *       Metaheuristics
 *       String matching algorithms
 *          
 *       Linear Search
 *       Binary Search
 *       Jump Search
 *       Interpolation Search
 *       Exponential Search
 *       Sublist Search (Search a linked list in another list)
 *       Fibonacci Search
 *       The Ubiquitous Binary Search
 *       Recursive program to linearly search an element in a given array
 *       Recursive function to do substring search
 *       Unbounded Binary Search Example (Find the point where a monotonically increasing function becomes positive first time)
 *      
 * Author: Amir Hatami
 */

var nodesearch = require('./node-search-Algorithms');
var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 
var base = 2;
var RUN = 32;

var arrin00 = [20, 8 , -11, 12, 22 , 9 , 10 ];
var arrin01 = [20, 8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, 8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , 390 , 1000 ];
var arrin04 = ['g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'];
var arrin05 = [1, 3, 7, 25, 12, 9, 8,
                      121, 221, 10, 18, 29, 49];
var arrin06 = [1, 3, -7, 25, 12, 9, 8,
                      121, 221, -10, 18, 29, 49];
var arrin07 = [1, 3, 7000000000000000000, 25, 12, 9, 8,
                      121, 221, 100000000000000000000000000 , 18, 290000000000000000000, 49];
var arrin08 = [1, 3, 75432, 25, 12, 9, 8,
                      121, 221, 976562 , 18, 299999, 49];
var arrin09 = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin10 = [1,342, 14,293 , 0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin11 = [5, 8 , 11, 12, 2 , 9 , 10 , 4 , 11, 10, 12, 7, 9 ];
var arrin12 = "";
//var arrin13 = [A7,02,22,77,37,15,00,40,B00,75,04,05,07,75,52,12,50,77,71,D07];    //base16
var arrin14 = [1001,101010,11,10,01,111,100,1000,11100,10110,101,100010,0111,101,11111,1000001,1,0,111,11010];   //base 2
var arrin15 = [7,2,22,77,37,15,10770,740,70,75,04,5,107,75,52,12,50,177,71,207];   //base 8
var arrin16 = [7,2,3,15,19,12,10,4,8,11,007,5,00017,6,9,12,1,13,18,20];   // smal numbers for bead sort
var arrin17 = [45, -2, -45, 78, 30, -42, 10, 19, 73, 93];
var arrin18 = [12, 34, 54, 2, 3];
var arrin19 = [7,2,3,15,19,12,10,4,8,11,007,5,00017,6,9,12,1,13,18,20,5,8,11,15,12,2,9,10,4,11,10,12,7,9,15];   // smal numbers for bead sort


function solveSearching(inputArray,searchElement,fromIndex,searchFar,outputOptions,searchingMethod) {
    var arr_original = inputArray.toString() ;
    var sortedArray = inputArray;
    var serachResult ;

    nodesearch(inputArray, searchElement, fromIndex, searchFar, outputOptions, displaymode,  function(err,searchRef) {
        if (err) {
	         console.log(err);
	                }
	      else {
			  switch(searchingMethod) {
					case "linearSearch":
						var result = searchRef.linearSearch(inputArray,searchElement,fromIndex,searchFar,outputOptions);
						searchMehodmessage = "Linear Search";
						break;
					case "binarySearch":
						var result = searchRef.binarySearch(inputArray,searchElement,fromIndex,searchFar,outputOptions);
						searchMehodmessage = "Binary Search";
						break;
					default:
						var result = searchRef.defaultSearch(inputArray,searchElement,fromIndex,searchFar,outputOptions);  
						searchMehodmessage = "defualt javascript Search";
				}
	         console.log("Success attempt to search for "+searchElement+" in below array by "+searchMehodmessage+" : \r\n \t ["+arr_original+" ] \r\n and result info is : ");
           console.log( result );
  
	      serachResult = result;
	            }
	      console.log("----------------------------------------------------------"); 
    });
    
    return serachResult;
};

solveSearching(arrin19,15,"","",'3&1','linearSearch');
solveSearching(arrin19,15,4,"",'1-3','linearSearch');
solveSearching(arrin19,15,4,"",'ALL','linearSearch');
solveSearching(arrin19,15,4,20,'1&4','linearSearch');
solveSearching(arrin19,15,4,30,'Last','linearSearch');
solveSearching(arrin19,15,4,15,'First','linearSearch');
solveSearching(arrin19,15,4,10,'Second','linearSearch');
solveSearching(arrin19,15,4,10,'1ST','linearSearch');
solveSearching(arrin19,15,4,10,'1','linearSearch');
solveSearching(arrin19,15,4,10,'3&1&4&2','linearSearch');
solveSearching(arrin19,15,5,10,'Last');
solveSearching(arrin19,15,8,10);


