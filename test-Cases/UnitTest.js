/* 
 * Binary search algorithm Test Cases!
 * Class	Search algorithm
 * Data structure	Array
 * Worst-case performance    O(log n)
 * Best-case performance	O(1)
 * Average performance	O(log n)
 * Worst-case space complexity
 */

var rect = require('./binary-search-algorithms');

var arrin01 = [-20, -8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, -8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , -390 , -1000 ];
function solveSerch(arr,k) {
    var result = rect.binarySearch(arr, k);
    if (result==-1){
    console.log("Looking for "+k+" in array ["+arr.toString()+" ] and NOT FOUND . [ "
                + result + " ]" );
    } else {
    console.log("Looking for "+k+" in array ["+arr.toString()+" ] and found at index : [ "
                + result + " ]" );
    }
        
}

function solveSerchFirst(arr,k) {
    var result = rect.binarySearch.first(arr, k);
    if (result==-1){
    console.log("Looking for "+k+" in array ["+arr.toString()+" ] and NOT FOUND . [ "
                + result + " ]" );
    } else {
    console.log("Looking for "+k+" in array ["+arr.toString()+" ] and found at index : [ "
                + result + " ]" );
    }
        
}


function solveSort(arr) {
    var inArr = arr.toString();
    var result = rect.insertionSort(arr);
    if (result==-1){
    console.log("Array NOT FOUND . [ "
                + result + " ]" );
    } else {
    console.log("Sorting array ["+inArr+" ] with insertion Metod to [ "
                + result.toString() + " ]" );
    }
        
}


solveSerch(arrin01,120);
solveSerch(arrin01,125);
solveSerch(arrin02,120);
solveSerch(arrin03,120);
solveSerch(arrin03,-10);
solveSerchFirst(arrin01,120);
solveSerchFirst(arrin01,125);
solveSerchFirst(arrin02,120);
solveSerchFirst(arrin03,120);
solveSerchFirst(arrin03,-10);
solveSort(arrin03);
