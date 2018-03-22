import React, {Component} from 'react';
import Debit from './Credit';

class DebitsList extends Component{

	render(){
	const debitsList = this.props.debitsList.map(debit => {
		return <Debit date={debit.date} amount={debit.amount} />
		});

		return(
			<div>
				<ul>
				{debitsList}
				</ul>
			</div>
		);
	}
}

export default DebitsList;