// ---------------------------------------------
// When the document loads
// ---------------------------------------------

const arrPlants = [
  {
    name: "Ficus Tree",
    price: "350",
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
    image: "plant1.png",
    lightAmount: "low",
    addedDate: "2023-04-21",
    onSale: "true"
  },
  {
    name: "White Sprite Succulent",
    price: "200",
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
    image: "plant2.png",
    lightAmount: "bright",
    addedDate: "2023-03-19",
    onSale: "false"
  },
  {
    name: "Snake Plant",
    price: "280",
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
    image: "plant3.png",
    lightAmount: "bright",
    addedDate: "2023-07-21",
    onSale: "true"
  },
  {
    name: "Parlour Palm",
    price: "320",
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
    image: "plant4.png",
    lightAmount: "low",
    addedDate: "2023-02-21",
    onSale: "true"
  },
  {
    name: "Japans Maple",
    price: "300",
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
    image: "plant5.png",
    lightAmount: "low",
    addedDate: "2023-07-04",
    onSale: "false"
  },
];

let appliedFilter = "";
let appliedSort = "date added";


// ---------------------------------------------
// When the document loads
// ---------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    filterSortPlants();
  }); 


// ---------------------------------------------
// Load all Plants
// ---------------------------------------------

function loadPlants(plantsToShow) {

  console.log(plantsToShow);

  // Clear all elements in plant Container
  $("#plantsContainer").empty();

  // Loop Through plants
  for (let i = 0; i < plantsToShow.length; i++) {
    const plant = plantsToShow[i];

    console.log(plant);

    // 1: Select the plants container and add the current array plant to it
    $("#plantsContainer").append($("#plantCardTemplate").html());

    // 2: Create a variable that container the most recently added plant card
    let currentChild = $("#plantsContainer").children().eq(i);

    // 3: Set the content for the current plant card from the plants array
    $(currentChild).find("#nameText").text(plant.name);
    $(currentChild).find("#priceText").text(plant.price);
    $(currentChild).find("#descriptionText").text(plant.description);
    $(currentChild).find(".card-img-top").attr('src', '../assets/' + plant.image)

    // 4: Hide the description text from the current card item
    $(currentChild).find("#descriptionText").hide();
    
  }
};




  // ---------------------------------------------
  // When a filter or sort is clicked
  // ---------------------------------------------

  $("input[name='filterRadio']").click(function(){
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter);
    filterSortPlants();
  });

  $("input[name='sortRadio']").click(function(){
    appliedSort = $(this).attr('value');

    console.log(appliedSort);
    filterSortPlants();
  });

  function filterSortPlants() {

    let filteredSortedArrPlants = [];

    // Filter Plants
    if (appliedFilter) {
      if (appliedFilter === "onSale") {
        // Filter plants that are on sale
        filteredSortedArrPlants = arrPlants.filter(plant => plant.onSale);
      } else {
        filteredSortedArrPlants = arrPlants.filter(plant => plant.lightAmount == appliedFilter);
      }
    } else {
      filteredSortedArrPlants = arrPlants;
    }
  

  // Sort Plants
  if (appliedSort == "low to high") {
    // ... (previous sorting code remains the same)
  } else if (appliedSort == "date added") {
    // ... (previous sorting code remains the same)
  } else if (appliedSort == "alphabetically") {
    // Sort plants alphabetically by name
    filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  loadPlants(filteredSortedArrPlants);
};







  
  // ---------------------------------------------
  // When the card is clicked
  // ---------------------------------------------

  $("#plantsContainer").on('click','.card', function(){

    // Toggle the price and description text
    $(this).find("#descriptionText").toggle();
    $(this).find("#priceText").toggle();

    // Resize the plant image to fit additional content
    $(this).find(".card-img-top").toggleClass("small");
  });


  // --------------------------------------------------
  // Remove Button
  // --------------------------------------------------

  $(document).ready(function() {
    // Handle click event on the remove icons
    $(".remove-icon").on("click", function() {
      // Find the closest parent <tr> element and remove it
      $(this).closest("tr").remove();
    });
  });