import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;