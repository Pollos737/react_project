import React from 'react';

var Dropdown = React.createClass({
    handleChange: function (e) {
      var city = e.target.value;
      this.props.onChange(city);
    },
    render: function () {
        return(
            <div>
                <h1>City I want to go to: {this.props.city}</h1>
                <select id="cities" onChange={this.handleChange}>
                    <option value="New York">New York</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Dallas">Dallas</option>
                </select>

            </div>
        );
    }
});

module.exports = Dropdown;