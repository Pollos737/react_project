import React from 'react';
import ReactDOM from 'react-dom';

var MainContainer = React.createClass({
    render: function () {
        return <h1>hi</h1>;
    }
});

ReactDOM.render(
    <MainContainer/>,
    document.getElementById('root')
);