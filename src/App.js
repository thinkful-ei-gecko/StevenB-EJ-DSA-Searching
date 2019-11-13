import React, { Component } from 'react';
import './App.css';
import {BinarySearchTree as BinaryTree, Node, Tree, Queue, queueHelpers} from './BST'
const JSON = require('circular-json')

class App extends Component {
  state = {
    inputValue: '',
    resultMessage: null
  }

  searchArr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]

  handleLinearSearch = (ev) => {
    ev.preventDefault();

    for (let i = 0; i < this.searchArr.length; i++) {
      if (this.searchArr[i] == this.state.inputValue) {
        return this.setState({ resultMessage: `Found the value ${this.state.inputValue} in ${i +1} searches.` })
      }
    }
    return this.setState({ resultMessage: `Did not find the value ${this.state.inputValue} in ${this.searchArr.length} searches` });
  };

  sortedArr = this.searchArr.sort();

  binarySearch = (value = this.state.inputValue, arr = this.sortedArr, start = 0, end = this.sortedArr.length - 1, counter = 1) => {
    let index = Math.floor((start + end) / 2);
    let currValue = arr[index];

    if (start > end)
      return this.setState({ resultMessage: `Did not find the value ${this.state.inputValue} in ${Math.floor(Math.log(arr.length))} searches`});

    if (value == currValue) {
      return this.setState({ resultMessage: `Found the value ${this.state.inputValue} in ${counter} searches`});
    } else if ( value > currValue) {
      return this.binarySearch(value, arr, index + 1, end, counter + 1)
    } else if ( value < currValue) {
      return this.binarySearch(value, arr, start, index, counter + 1)
    }
  };

  handleBinarySearch = (ev) => {
    ev.preventDefault();
    this.binarySearch();
  }


  // Q5 IMPLEMENT TREE TRANSVERSALS 
  binaryArray = [25,15,50,10,24,35,70,4,12,18,31,44,66,90,22];
  inOrderBinary = (array) => {

    //Pre Order = (Root, Left, Right)

    // Initiate the tree

    let tree = new BinaryTree()

    // Push values into tree
    for(let i = 0; i < array.length; i++){
      tree.insert(array[i])
    }

    // Put it in order

    return tree.inOrder();
  }

  preOrderBinary = (array) => {

    //Pre Order = (Root, Left, Right)

    // Initiate the tree

    let tree = new BinaryTree()

    // Push values into tree
    for(let i = 0; i < array.length; i++){
      tree.insert(array[i])
    }

    // Put it in pre order

    return tree.preOrder();
  }

  postOrderBinary = (array) => {

    //Pre Order = (Root, Left, Right)

    // Initiate the tree

    let tree = new BinaryTree()

    // Push values into tree
    for(let i = 0; i < array.length; i++){
      tree.insert(array[i])
    }

    // Put it in post order

    return tree.postOrder();
  }

  bfs = (tree, values = []) => {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    console.log(queue)
    while (queue.first) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.data); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }


    }

    return values;
}


  main = () => {

    const steven = new Tree()

    const captain = new Node('Captain Picard')
    steven.root = captain;
    captain.left = new Node('Commnader Riker')
    captain.left.left = new Node('Lt. Cmdr. Worf')
    captain.left.left.left = new Node('Lieutenant security-officer')
    captain.right = new Node('Commander Data')
    captain.right.right = new Node('Lt. Cmdr. Crusher')
    captain.left.right = new Node('Lt. Cmdr. LaForge')
    captain.right.right.left = new Node('Lieutenant Selar')

    return this.bfs(steven)
  }

  ballers = [128, 97, 121, 123, 98, 97, 105];

  makeMeRich = (array) => {
    let buyingDay;
    let sellingDay;

    // buy at cheapest && sell at the highest

    for (let i = 1; i < array.length; i++){
      sellingDay = array[i]
      for (let j = 1; j < array.length; j++){
        if(sellingDay < array[j]){
          sellingDay = array[j]
        }
      }
    }

    for (let i = 0; i < array.length - 1; i++){
      buyingDay = array[i]
        for(let j = 0; j < array.length - 1; j++){
          if(buyingDay > array[j]){
            buyingDay = array[j]
          }
        }
    }

    let dates = `Best buying day is at ${buyingDay} and best selling is ${sellingDay}`

    return dates

  }


  render() {
    return (
      <div className="App">
        <form type='submit'>
          <label className='search'>Search: </label>
          <input type='text' className='search' onChange={e => this.setState({ inputValue: e.target.value })}></input>
          <br />
          <button onClick={this.handleLinearSearch}>Linear Search</button>
          <button onClick={this.handleBinarySearch}>Binary Search</button>
        </form>
        {this.state.resultMessage ? <p>{this.state.resultMessage}</p> : <p>{'Pending...'}</p>}
        <p>In Order Binary: {this.inOrderBinary(this.binaryArray)}</p>
        <p>In Pre Binary: {this.preOrderBinary(this.binaryArray)}</p>
        <p>In Post Binary: {this.postOrderBinary(this.binaryArray)}</p>
        <p>MARINES: {this.main()}</p>
        <p>MAKE ME RICH: {this.makeMeRich(this.ballers)}</p>
      </div>
    );
  }
}

export default App;