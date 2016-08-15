import React from 'react';
import ReactDOM from 'react-dom';
var Dropdown = require('./dropdown');

var Main = React.createClass({
    getInitialState: function () {
        return {city: "No City Chosen"};
    },
    changeCity: function (newCity) {
      this.setState({city: newCity});
    },
    render: function () {
        return (
            <Dropdown city={this.state.city} onChange={this.changeCity}/>
        );
    }
});

ReactDOM.render(<Main/>, document.getElementById('root'));