import React, {Component} from 'react';

class Credit extends Component{
	render(){
		return(
			<div>
				<li key={this.props.id}>$<strong>{this.props.amount}</strong> {this.props.date}</li>
			</div>
		);
	}
}

export default Credit;