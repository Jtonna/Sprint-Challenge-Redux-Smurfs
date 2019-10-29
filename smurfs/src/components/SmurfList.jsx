import React, {Component} from 'react';
import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';
import { connect } from 'react-redux';

class SmurfList extends Component{
	componentDidMount(){
		this.props.getSmurfs();
	}

	render(){
		return(
			<div className="SmurfListContainer">
			    {this.props.loading ? <h1>We sent someone to look for your things, this shouldnt take long.</h1> : null}
	            {this.props.error !== null ? <h1>{this.props.error}</h1> : null}
	            {this.props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id + smurf.name}/> )}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		smurfs: state.smurfs,
		error: state.error,
		loading: state.loading,
	}
}

export default connect(MapStateToProps, {getSmurfs})(SmurfList);
