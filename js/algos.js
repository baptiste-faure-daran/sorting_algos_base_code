// Converts from degrees to radians.
Number.prototype.toRadians = function () {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
  console.log(city);


  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  const lat1 = (GrenobleLat / 180) * Math.PI;
  const long1 = (GrenobleLong / 180) * Math.PI;
  const lat2 = (parseFloat(city.latitude) / 180) * Math.PI;
  const long2 = (parseFloat(city.longitude) / 180) * Math.PI;

  const R = 6371;
  const x = (long2 - long1) * Math.cos((lat1 + lat2) / 2);
  const y = (lat2 - lat1);
  const d = Math.sqrt(x * x + y * y) * R;


  console.log('distance de grenoble :', d);
  return d;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {


  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  console.log("swap - implement me !");
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j) {

  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  console.log("isLess - implement me !");

  if (distanceFromGrenoble(csvData[i]) < distanceFromGrenoble(csvData[j])) {
    return true;
  }
  return false;

}


function insertsort() {
  console.log("insertsort - implement me !");
}

function selectionsort() {
  console.log("selectionsort - implement me !");
}

function bubblesort() {
  var changed = true, passage = 0;
  while (changed) {
    changed = false;
    for (var i = 0; i < csvData.length - passage - 1; i++) {
      if (!isLess(i, i + 1)) {
        swap(i + 1, i)
        changed = true;
      }
    }
    passage++
  }

  console.log("bubblesort - implement me !");
}

function shellsort() {
  console.log("shellsort - implement me !");
}

function mergesort() {
  console.log("mergesort - implement me !");
}

function heapsort() {
  console.log("heapsort - implement me !");
}

function quicksort() {
  console.log("quicksort - implement me !");
}
function quick3sort() {
  console.log("quick3sort - implement me !");
}


function sort(algo) {
  switch (algo) {
    case 'insert': insertsort(); break;
    case 'select': selectionsort(); break;
    case 'bubble': bubblesort(); break;
    case 'shell': shellsort(); break;
    case 'merge': mergesort(); break;
    case 'heap': heapsort(); break;
    case 'quick': quicksort(); break;
    case 'quick3': quick3sort(); break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
