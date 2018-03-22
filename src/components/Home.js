import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import TransactionsList from './TransactionsList';

class Home extends Component{
	render(){
		return(
			<div>
				<TransactionsList transactionsList={this.props.transactionsList} />
				<Link to="/userProfile">User Profile</Link>

				<img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
				<h1>Bank of React</h1>
				<AccountBalance accountBalance={this.props.accountBalance} />
				<br/>
				<Link to="/credits">Deposits</Link>
				<br/>
				<Link to="/debits">Withdraws</Link>

			</div>
		);
	}
}

export default Home;