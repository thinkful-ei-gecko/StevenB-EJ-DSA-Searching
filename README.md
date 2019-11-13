This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Creating search algorithms for Thinkful's Immersive Bootcamp with my best friend EJ.

Question #1:
3, 5, 6, 8, 11, 12, 14, 15, 17, 18
3, 5, 6, 8
6, 8
8

Question #1.2:
3, 5, 6, 8, 11, 12, 14, 15, 17, 18
12, 14, 15, 17, 18
15, 17, 18
17, 18
start > end = does not exist

Question #3:
Dewey Decimal index is structured in a sorted numerical sense. I would first search for the index, then search by alphabetical. 

// find all books with the deweyDec
// then loop over to find our title

function locateBook(arr, book) {
  let deweyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === book.deweyDec)
      deweyArr.push(arr[i]);
  }
  for ( let i = 0; i < book.title.length; i++) {
    if (deweyArr[i].title === book.title)
      return i;
  }
}

Question #4: