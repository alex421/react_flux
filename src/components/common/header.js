"use strict";

var React = require('react');

var Header = React.createClass({

	render: function() {



		var divStyle = {
			width: 'auto',
			height: "100%"
		};


		return (

		< nav className="navbar navbar-default" >
			< div className="container-fluid">
				<a href="/" className="navbar-brand" >
					<img src="images/pluralsight-logo.jpg" style={divStyle}/>
				 </a>
			 	<ul className="nav navbar-nav">
		 			<li><a href="/" >Home</a></li>
		 			<li><a href="/#authors" >Authors</a></li>
		 			<li><a href="/#about" >About</a></li>
			 	</ul>

			 < /div> 

		< /nav>


		);

	}


});

module.exports = Header;