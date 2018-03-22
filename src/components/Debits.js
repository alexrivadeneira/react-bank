import React, {Component} from 'react';

class Debit extends Component{
	render(){
		return(
			<div>
				<li>$<strong>{this.props.amount}</strong> {this.props.date}</li>
			</div>
		);
	}
}

export default Debit;