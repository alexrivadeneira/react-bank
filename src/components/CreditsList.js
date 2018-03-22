import React, {Component} from 'react';
import Credit from './Credit';

class CreditsList extends Component{

	render(){
	const creditsList = this.props.creditsList.map(credit => {
		return <Credit date={credit.date} amount={credit.amount} />
		});

		return(
			<div>
				<ul>
				{creditsList}
				</ul>
			</div>
		);
	}
}

export default CreditsList;