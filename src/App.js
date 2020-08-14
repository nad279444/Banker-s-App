import React from 'react'
import AccountForm from "./components/AccountForm"
import { connect } from 'react-redux'
import AccountInfo from "./components/AccountInfo"
import { addAccount,deleteAccount,getAllAccounts } from "./store/userAction"
import {logOut} from "./store/authActions"
import "bootstrap/dist/css/bootstrap.css";


class App extends React.Component{
  addNewAccount =(newAccount) =>{
    this.props.addAccount(newAccount)

  }
  deleteAccount = (acc_id) => {
    this.props.deleteAccount(acc_id)

  }

  componentDidMount(){
    this.props.getAllAccounts()
  }
  render(){
    return(
      <div className='container'>
        <button onClick={this.props.logOut}>Logout</button>
        <div className='row'>
        <div className="col-md-6">
        <AccountForm addAccount={this.addNewAccount}/>
        </div>
        <div className="col-md-6">
          {this.props.account.map((item) => { 
            return(
              <AccountInfo
              key={item.id}
              id={item.id}
              accountName={item.accountName}
              accountNumber={item.accountNumber}
              bankName={item.bankName}
              bankBranch={item.bankBranch}
              removeAccount={this.deleteAccount}/>
            )
          })};
        </div>
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
   account:state.accountState.account
  }
};

const mapDispatchToProps = {
  addAccount,
  deleteAccount,
  getAllAccounts,
  logOut

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
