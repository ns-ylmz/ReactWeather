var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<h3 className="text-center">It's it {temp} for {location}.</h3>
		</div>	
	);
};

module.exports = WeatherMessage;