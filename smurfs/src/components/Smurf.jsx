import React from "react";
import {connect} from 'react-redux'
import {deleteSmurf} from '../actions/index'
import {Link } from 'react-router-dom'

const Smurf = ({ smurf, deleteSmurf }) => {

	const clickHandler = () => {
		deleteSmurf (smurf.id)
	}

	return (
		<div key={smurf.id}>
			<h3> {smurf.name} </h3>
			<p>Smurf's Age:{smurf.age}</p>
			<p>Add Smurf's Height:{smurf.height}</p>
			<button onClick={clickHandler}> button </button>
			<Link to={`/update/${smurf.id}`}> </Link>
		</div>
	   );
};

const mapStateToProps = () => ({
	
})

export default connect(mapStateToProps, {deleteSmurf})(Smurf);
