var myRecipe = {
    title: "Pizza",
    servings: 2,
    ingredients: ["Cheese", "Tomato"]
};

console.log(myRecipe.title);
console.log("Serves: " + myRecipe.servings);
console.log("Ingredients");
for (var i = 0; i < myRecipe.ingredients.length; i++) {
    console.log(myRecipe.ingredients[i]);
}

var myBooks = [
    
    {title: "To Kill a Mockingbird", 
    author: "Harper Lee",
    read: true},
    {title: "Da Vinci Code", 
    author: "Dan Browne",
    read: false},
    {title: "Blah", 
    author: "Blah Blah",
    read: true}
];

for (var i = 0; i < myBooks.length; i++) {
  var myBook = myBooks[i];
  console.log(myBook.title + ' by ' + myBook.author);
}

for (var i = 0; i < myBooks.length; i++) {
  var myBook = myBooks[i];
  
  if(myBook.read = true) {
      
      console.log("You have already read " + myBook.title + ' by ' + myBook.author);
      
  } else if (myBook.read = false) {
      
      console.log("You need to read " + myBook.title + ' by ' + myBook.author);
      
  }
  
}

var favMovie = {
    title: "Resevoir Dogs",
    duration: 130,
    stars: ["Tim Roth", "Harvey Keitel", "Steve Buscemi"]
};

function printMovie(movie) {
    
    console.log(movie.title + "lasts for " + movie.duration + " minutes.");
    
}

printMovie(favMovie);