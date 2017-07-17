/* 
 * Binary search algorithm !
 * Class	Search algorithm
 * Data structure	Array
 * Worst-case performance    O(log n)
 * Best-case performance	O(1)
 * Average performance	O(log n)
 * Worst-case space complexity
 */

exports.insertionSort = function(inputArray) {
  if(!inputArray) return -1;
  if(inputArray.length === undefined) return -1;

  return exports.is(inputArray);
}


exports.binarySearch = function(inputArray,search,comparitor) {
  if(!inputArray) return -1;
  if(inputArray.length === undefined) return -1;
  if(!comparitor) comparitor = exports.binarySearch._defaultComparitor();

  return exports.bs(inputArray,search);
}

exports.is = function(inputArray) {
   var holePosition
   var valueToInsert
   
   for (i=0; i<inputArray.length; i++ ){
        /* select value to be inserted */
        valueToInsert = inputArray[i];
        holePosition = i ;
   
        /*locate hole position for the element to be inserted */
		
        while ( holePosition > 0 && inputArray[holePosition-1] > valueToInsert ) {
            inputArray[holePosition] = inputArray[holePosition-1]
            holePosition = holePosition -1
        }
		
      /* insert the number at hole position */
      inputArray[holePosition] = valueToInsert
   }
   
    return inputArray;
   };



exports.bs = function(inputArray,key) {
        var size = inputArray.length;
         var low = 0;
         var high = size - 1;
         var middle=1;
          
         while(high >= low) {
            middle = (low + high) / 2;
             if(inputArray[middle] === key) {
                 return middle;
             }
             if(inputArray[middle] < key) {
                 var low = middle + 1;
             }
             if(inputArray[middle] > key) {
                 high = middle - 1;
             }
        }
        return -1;
   };

exports.binarySearch.first = function(inputArray,key) {
        var size = inputArray.length;
         var low = 0;
         var high = size - 1;
         var middle=1;
          
         while(high >= low) {
            middle = (low + high) / 2;
             if(inputArray[middle] === key) {
                 return middle+1;
             }
             if(inputArray[middle] < key) {
                 var low = middle + 1;
             }
             if(inputArray[middle] > key) {
                 high = middle - 1;
             }
        }
        return -1;
   };



exports.binarySearch._defaultComparitor = function() {
  var indexMode,indexModeSearch;
  var stringMode;
  return function(v,search){
    // support the object format of generated indexes
    if(indexMode === undefined){
      if(typeof v === 'object' && v.hasOwnProperty('v')) indexMode = true;
      if(typeof search === 'object' && search.hasOwnProperty('v')) indexModeSearch = true
    }

    if(indexMode) v = v.v;
    if(indexModeSearch) search = search.v;

    if(stringMode === undefined){
      stringMode = false
      if(typeof search === 'string' || typeof v === "string"){
        stringMode = true
      }
    }

    if(stringMode) v = v+''

    return v > search ? 1 : v < search ? -1 : 0
  };
};


