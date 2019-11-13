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

1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

Answer: Post Order = [14, 15, 19, 25, 27, 79, 89, 90, 91, 35]

In Order = (Left, Root, Right)
Pre Order = (Root, Left, Right)
Post Order = (Left, Right, Root)

2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

Answer: Pre Order = [8, 5, 7, 6, 9, 11, 10]