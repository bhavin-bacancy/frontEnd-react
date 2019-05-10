import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch('http://localhost:5000/api/getList')
		.then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h3>List of Items</h3>
        {list.length ? (
          <div>
            {list.map((item, index) => {
              return(
                <div key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h4>No List Items Found</h4>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;