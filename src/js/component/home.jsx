import React from "react";
import Display from "./Display";




//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ hundredThousands,tenThousands,thousands,hundreds,tens,ones }) => {


	return (
		<div className="container">
			<div className="row justify-conten-center">
			<Display seconds={hundredThousands}/>
			<Display seconds={tenThousands}/>
			<Display seconds={thousands}/>
			<Display seconds={hundreds}/>
			<Display seconds={tens}/>
			<Display seconds={ones}/>
			</div>
		</div>
	);
};

export default Home;
