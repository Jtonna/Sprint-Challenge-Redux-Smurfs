import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions/index';

class updateSmurf extends Component {
	constructor(props){
		super(props)
		this.state = {
			age: '',
			height: '',
			name: '',
		}
	}

	componentDidMount(){
		const {smurfs, match } = this.props;
		const smurf = smurf.find(smurf => smurf.id === Number(match.params.id))
		this.setState(smurf)
	}

	inputHandler = e => {
		this.setState({
			[e.target.name]: e.target.valuee
		})
	}

	submitHandler = e => {
		e.preventDefaault()
		this.props.updateSmurf(this.state)
	}

	render(){
		return(
			<form onSubmit={this.submitHandler}>
			    <input value={this.state.name} onChange={this.inputHandler} placeholder='change their name' />
                <input value={this.state.age} onChange={this.inputHandler} placeholder='change their age' />
                <input value={this.state.height} onChange={this.inputHandler} placeholder='change their height' />
                <button type='submit'>Submit</button>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs
	}
}

export default connect(mapStateToProps, {updateSmurf: updateSmurf})(updateSmurf)
