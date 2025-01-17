
let trailsArray = [];

let trailsObject = function (pTrail, pCity, pComment, pRating) {
    this.Trail = pTrail;
    this.City = pCity;
    this.Comment = pComment;
    this.Rating = pRating;
}

//---------- wait until document load event --------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
      trailsArray.push(new trailsObject(document.getElementById("trailname").value, 
      document.getElementById("closestcity").value, document.getElementById("generalcomments").value,document.getElementById("colors").value ));
    });

    document.getElementById("buttonClear").addEventListener("click", function () {
      document.getElementById("trailname").value = "";
      document.getElementById("closestcity").value = "";
      document.getElementById("generalcomments").value = "";
      document.getElementById("ratings").value = "";
    });

    document.getElementById("buttonSortTrail").addEventListener("click", function () {
      trailsArray.sort(dynamicSort("Trail"));
      createList();
  });

    document.getElementById("buttonSortCity").addEventListener("click", function () {
      trailsArray.sort(dynamicSort("City"));
      createList();
  });
    document.getElementById("buttonSortComment").addEventListener("click", function () {
      trailsArray.sort(dynamicSort("Comment"));
      createList();
  });
    document.getElementById("buttonSortRating").addEventListener("click", function () {
      trailsArray.sort(dynamicSort("Rating"));
      createList();
  });

//---------- page before show ------------------------------------------------------------

  $(document).on("pagebeforeshow", "#list", function (event) { 
  createList();
  });

});

function createList() {
    // clear list
    var theList = document.getElementById("myul");
    theList.innerHTML = "";

    trailsArray.forEach(function (element,) {   
        var li = document.createElement('li');
        li.innerHTML =  element.Trail + ":  " + element.City+ ":  " + element.Comment+ ":  " + element.Rating;
        theList.appendChild(li);
    });

};
  
function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}
