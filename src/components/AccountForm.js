import React from "react"

class AccountForm extends React.Component {
    state = {
        
                accountName:'',
                accountNumber:'',
                bankName:'',
                bankBranch:''
        
            }
    
      handleChange =(e) =>{
          this.setState({
          [e.target.name]:e.target.value
          });
      }
      handleSubmit=(e) => {
          e.preventDefault();
         /* const newAccount = {
              accountName:this.state.accountName,
              accountNumber:this.state.accountNumber,
              bankName:this.state.bankName,
              bankBranch:this.state.bankBranch
          }*/
         this.props.addAccount(this.state)
          this.setState({
            accountName:"",
            accountNumber:"",
            bankName:"",
            bankBranch:"" 

          })
    
      }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row"></div>
                <label htmlFor="accountName" className="col-sm-2 col-form-label">AccountName</label>
                <div className="col-sm-10">
                    <input
                    className="form-control" 
                    type="text" 
                    name="accountName" 
                    value={this.state.accountName}
                    onChange={this.handleChange}/>
                    

                </div>
                <div className="form-group row"></div>
                <label htmlFor="accountNumber" className="col-sm-2 col-form-label">AccountNumber</label>
                <div className="col-sm-10">
                    <input 
                    className="form-control" 
                    type="Number"
                    name="accountNumber" 
                    value={this.state.accountNumber}
                    onChange={this.handleChange}/>
                </div>

                <div className="form-group row"></div>
                <label htmlFor="bankName" className="col-sm-2 col-form-label">BankName</label>
                <div className="col-sm-10">
                    <input
                    className="form-control" 
                    type="text"  
                    name="bankName" 
                    value={this.state.bankName}
                    onChange={this.handleChange}/>

                </div>
                <div className="form-group row"></div>
                <label htmlFor="bankBranch"className="col-sm-2 col-form-label">BankBranch</label>
                <div className="col-sm-10">
                    <input
                    className="form-control"  
                    type="text" 
                    name="bankBranch" 
                    value={this.state.bankBranch}
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary btn-sm btn-block">SUBMIT</button>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default AccountForm