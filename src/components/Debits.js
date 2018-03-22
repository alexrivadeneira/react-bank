import React, {Component} from 'react';

class Debit extends Component{
	render(){
		return(
			<div key={this.props.id}>
				<li>$<strong>{this.props.amount}</strong> {this.props.date}</li>
			</div>
		);
	}
}

export default Debit;