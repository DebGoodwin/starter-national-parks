// View the HTML document
console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const val = document.querySelector(".value");
console.log(val);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area-display");
console.log(area);

// Find a div that is a descendant of the class stat
const desc = document.querySelector(".stat div")

const hello = document.querySelector(".hello");
console.log(hello);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
}

// Find all divs containing ratings
const ratings = document.querySelectorAll(".rating-display .value");

for (let element of ratings.values()) {
    console.log(element);
}

// Find all divs containing areas
const areas = document.querySelectorAll(".area-display .value");

for (let i = 0; i < areas.length; i++) {
    const element = areas[i];
    console.log(element);
}

/////////////////////////////////////////////////

// The innerText property
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }

  // Truncate the description property to 250 characters and add 3 dots to the end
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
    console.log(content);
  }

  // Changing the style
  
  // Start by selecting all of the rating values
  const ratingVals = document.querySelectorAll(".rating-display .value");

  // Iterate through the list to check the rating value (will return a string)
  for (let rating of ratingVals) {
    let ratingValue = parseFloat(rating.innerText);

    if (ratingValue > 4.7) {
        //rating.style.fontWeight = "bold";
        //rating.style.color = "#3ba17c";
        rating.classList.add("high-rating");
        rating.classList.remove("value");
      }
  }

  // Create a new element with text
  // First get all of the parks then get the number or parks using length
  const parks = document.querySelectorAll(".park-display");
  const numberParks = parks.length;

  // Create a new element
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;

  // Add styles to the new element
  newElement.classList.add("header-statement");

  // Add the element to the page
  const header = document.querySelector("header");
  header.appendChild(newElement);


  // Removing an element
  // Get the parent element of all parks
  const main = document.querySelector("main");

  // Select a single park
  const park = main.querySelector(".park-display");

  // Remove that park
  //main.removeChild(park);

///////////////////////////////////////////
// Event Listeners

 const firstBtn = document.querySelector("button");

 firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event.target);
});

// Attach event handler to all buttons for the parks
// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});

// Changes the background color
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
    park.style.backgroundColor = "#c8e6c9";
  });
});

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("You clicked the name sorter");
});

/* Get the <main> element that contains all the parks.
Get a NodeList of all the parks.
Empty the <main> element.
Convert the NodeList to an array for convenience of sorting.
Sort the array using techniques that you learned previously.
Iterate through the sorted array and append each park to <main>. */

// Select the `nameSorter` link
//const nameSorter = document.querySelector("#name-sorter");

nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });

});

///////////
// Add event to sort parks by rating
// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector(".rating-display > .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector(".rating-display > .value").innerText
  );
  return parkBRating - parkARating;
};

// Select the `nameSorter` link
//const ratingSorter = document.querySelector("#rating-sorter");
const ratingSorterClickerHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });

};

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
