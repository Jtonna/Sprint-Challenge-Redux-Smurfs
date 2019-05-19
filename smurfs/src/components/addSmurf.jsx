import react from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/index';

class AddSmurf extends React.Component{
	constructor (props) {
		super(props)
		this.state = {
			age: '',
			height: '',
			name: '',
		}
	}

	inputHandler = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	submitHandler = e => {
		e.preventDefault()
		this.props.addSmurf(this.state);
		this.setState({
			age: '',
			height: '',
			name: '',
		})
	}

	render(){
		return(
			<form onSubmit={this.submitHandler}>
				<input name='name' placeholder='Smurf Name' value={this.state.name} onChange={this.inputHandler}/>
                <input name='age' placeholder='How old is the Smurf?' value={this.state.age} onChange={this.inputHandler}/>
                <input name='height' placeholder='How tall is it'  value={this.state.height} onChange={this.inputHandler}/>
                <button type='submit'>Add Smurf!</button>
            </form>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {addSmurf: addSmurf})(AddSmurf)
