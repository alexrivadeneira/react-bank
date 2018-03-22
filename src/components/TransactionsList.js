import React, {Component} from 'react';
import Credit from './Credit';

class TransactionsList extends Component{

	render(){
	const transactionsList = this.props.transactionsList.map(trans => {
		return <Credit date={trans.date} amount={trans.amount} />
		});

		return(
			<div>
				<ul>
				{transactionsList}
				</ul>
			</div>
		);
	}
}

export default TransactionsList;