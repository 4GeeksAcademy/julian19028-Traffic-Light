import React, { useState } from "react";
import react from "react";

//include images into your bundle


//create your first component
const Home = () => {
		const [oneColor, setOneColor] = useState("red")
		// const [yellow, setYellow] = useState("gray")
		// const [green, setGreen] = useState("gray")

		function red () {
			if (oneColor == 'gray') {
				setOneColor ('red')
			} else { setOneColor = ('gray')}
			 
		};	
		
		// function yellow () {
		// 	if(yellow == 'gray'){
		// 		setYellow = ('gray')
		// 	} else {setYellow = ('gray')}

		// };

		// function green () {
		// 	if ( green == 'gray'){
		// 		setGreen = ('gray')
		// 	} else { setGreen}
		// }	
};
return (
	Hello
);
// return (
// 	<div className="container">
// 		Hello
// 	</div>
// )

export default Home;
