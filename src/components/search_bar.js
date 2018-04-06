import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {

    return (
      <div className="search-bar">

        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />

      </div>
    );

  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

};

export default SearchBar;

//
//
// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { term: 'Default' };
//   }
//   render() {
//
//     return (
//       <div>
//
//         <input
//           value={this.state.term}
//           onChange={event => this.setState({ term: event.target.value })} />
//
//       </div>
//     );
//
//   }
//
//
// };
//
// export default SearchBar;


//
// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { term: '' };
//   }
//   render() {
//
//     return <input onChange={event => console.log(event.target.value)} />;
//  // React.createElement
//
//   }
//
//
// };
//
// export default SearchBar;


// class SearchBar extends Component {
//
//   render() {
//
//     return <input onChange={this.onInputChange}/>; // React.createElement
//
//   }
//
//   // Event handler
//   onInputChange(event) {
//     console.log(event.target.value);
//
//   }
// };
//
// export default SearchBar;
