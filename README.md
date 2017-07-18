[![Build Status](https://raw.githubusercontent.com/amhatami/Node-Sort-Algorithms/master/img/passing.png)](https://github.com/amhatami/Node-Sort-Algorithms)

# Node-Search-Algorithms
A searching library for Node.js &amp; javascript made based on well known algorithmes included : Linear Search , Binary Search , Jump Search , etc..

Search algorithm is an algorithm that retrieves information stored within some data structure, or calculated in the search space of a problem domain. Data structures can include linked lists, arrays, search trees, hash tables, or various other storage methods. The appropriate search algorithm often depends on the data structure being searched. Searching also encompasses algorithms that query the data structure, such as the SQL SELECT command.

The output is in nondecreasing order (each element is no smaller than the previous element according to the desired total order);
The output is a permutation (reordering) of the input.

    Class Seraching algorithms
    Category:Search algorithms
         Linear Search
    TODO ...   
   
         Binary Search
         Tree Search
         Genetic Algorithm

         Combinatorial optimization
         Hashing
         Internet search algorithms
         Metaheuristics
         String matching algorithms
          
         Linear Search
         Binary Search
         Jump Search
         Interpolation Search
         Exponential Search
         Sublist Search (Search a linked list in another list)
         Fibonacci Search
         The Ubiquitous Binary Search
         Recursive program to linearly search an element in a given array
         Recursive function to do substring search
         Unbounded Binary Search Example (Find the point where a monotonically increasing function becomes positive first time)
      
      Note: There are also search methods designed for quantum computers, like 
            Grover's algorithm, that are theoretically faster than linear or brute-force 
            search even without the help of data structures or heuristics. 	
       
    Author: Amir Hatami


## Installation

  Install using the node.js package manager [npm](http://npmjs.org/):

      $ npm install node-search-algorithms
      
  Install via git clone:

      $ git clone https://github.com/amhatami/Node-Search-Algorithms node-search-algorithms
      $ cd node-search-algorithms
      $ npm install
 
  Using directly via a browser, You can download **node-search-algorithms.js** from GitHub or just bellow hotlink to it:

      <script src="https://raw.githubusercontent.com/amhatami/Node-Search-Algorithms/master/node-search-algorithms.js"></script>


## Requirements

  You can install node-search-algorithms and its dependencies with npm: 
    
      $ npm install node-sort-algorithms
  
  Dependencies
  
  * [Node.js](http://nodejs.org/) v0.6+



## Usage :
```js
var nodesearch = require('./node-algorithms-algorithms');
var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 
...
nodesearch(inputArray, lookingfor, searchFromTo, outputOptions, displaymode,  function(err,searchRef) {
        if (err) {
            // TODO error handeling 
            }
	      else {
           var result = searchRef.linearSearch(inputArray,lookingfor,outputOptions);   
           // TODO output 
	            }
    });
```

## Ruls :
 * Depended on the Sort algorithms, input Array could be integers, float, decima, ocat, hex or binary.
 * Array's element could be negative for only these Algorithms; Insertion Sort , Merge Sort , 3 Way Merge Sort , Quick Sort , 3 Way Quick Sort and etc.
 * Returns error mesage if not found valid input.
 * Turn On details of Algorithms progress useing : displaymode = "Yes"  
 ```js
 var displaymode = "No"; //"Yes";
 ```

## Example

  Demos of the node-sort module are located in: [./test-Cases](https://github.com/amhatami/Node-Sort-Algorithms/tree/master/test-Cases)

```js
var nodesearch = require('./node-search-algorithms');
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


function solveSearching(inputArray,lookingfor,outputOptions,searchingMethod) {
    var arr_original = inputArray.toString() ;
    var sortedArray = inputArray;
    var serachResult ;

    nodesearch(inputArray, lookingfor, searchFromTo, outputOptions, displaymode,  function(err,searchRef) {
        if (err) {
	         console.log(err);
	                }
	      else {
			  switch(searchingMethod) {
					case "linearSearch":
						var result = searchRef.linearSearch(inputArray,lookingfor,outputOptions);
						searchMehodmessage = "Linear Search";
						break;
					case "binarySearch":
						var result = searchRef.binarySearch(inputArray,lookingfor,outputOptions);
						searchMehodmessage = "Binary Search";
						break;
					default:
						var result = searchRef.defaultSearch(inputArray,lookingfor,outputOptions);  
						searchMehodmessage = "defualt javascript Search";
				}
	         console.log("Success attempt to search for "+lookingfor+" in below array by "+searchMehodmessage+" : \r\n \t ["+arr_original+" ] \r\n and result info is : ");
           console.log( result );
  
	      serachResult = result;
	            }
	      console.log("----------------------------------------------------------"); 
    });
    
    return serachResult;
};

solveSearching(arrin19,15,'3&1','linearSearch');
solveSearching(arrin19,15,'1-3','linearSearch');
solveSearching(arrin19,15,'ALL','linearSearch');
solveSearching(arrin19,15,'1&4','linearSearch');
solveSearching(arrin19,15,'Last','linearSearch');
solveSearching(arrin19,15,'First','linearSearch');
solveSearching(arrin19,15,'Second','linearSearch');
solveSearching(arrin19,15,'1ST','linearSearch');
solveSearching(arrin19,15,'1','linearSearch');
solveSearching(arrin19,15,'3&1&4&2','linearSearch');
//solveSearching(arrin19,15,'Last');
//solveSearching(arrin19,15);

```


## API Documentation

**Parameters**

  * **array** - array to be sorted
  * **displaymode** - for more details of algorithm progress 
  * **base** - for positional numeral system with a radix, or base  e.g.(2 Binary - 8 Octal - 10 Decimal - 16 Hexadecimal - 60 	Sexagesimal etc. ) [List of numeral systems](https://en.wikipedia.org/wiki/List_of_numeral_systems) 


**Functions**

  * **Merge Sort - .mergeSort( array )**

  * **Insertion Sort - .insertionSort( array )**

  * **Radix Sort - .radixSort( array , base )**

  * **Counting Sort - .countingSort( array )**

  * **Bucket Sort - .bucketSort( array )**

  * **Bin Sort - .binSort( array )**

  * **Bead Sort - .beadSort( array )**

  * **Gravity Sort - .gravitySort( array )**


Coming soon :) !

  * **Selection Sort - .selectionSort( array )**

  * **Quick Sort - .quickSort( array, [comparator] )**


## Testing

  Issue the following node command in the same directory to run the UnitTest.js test cases:
  
      $ node UnitTest

## LICENSE

  node-sort-algorithms: Copyright (c) 2016 Amir Hatami
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## References

 * https://en.wikipedia.org/wiki/Search_algorithm
 * http://algs4.cs.princeton.edu/30searching/
 
