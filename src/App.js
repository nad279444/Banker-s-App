import React from 'react'
import AccountForm from "./components/AccountForm"
import { connect } from 'react-redux'
import AccountInfo from "./components/AccountInfo"
import { addAccount,deleteAccount } from "./store/userAction"
import "bootstrap/dist/css/bootstrap.css";


class App extends React.Component{
  addNewAccount =(newAccount) =>{
    this.props.addAccount(newAccount)

  }
  deleteAccount = (acc_id) => {
    this.props.deleteAccount(acc_id)

  }
  render(){
    return(
      <div className='container'>
        <div className='row'></div>
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
    )
  }
}

const mapStateToProps = (state) => ({
   account:state.account
});

const mapDispatchToProps = {
  addAccount,
  deleteAccount

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
