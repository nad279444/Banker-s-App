import React from 'react'
import { Link } from 'react-router-dom'

const AccountInfo = ({accountName,accountNumber,bankName,bankBranch,id,removeAccount}) => {
    const handleClick = () => {
        removeAccount(id)
    }
    return(
        <div>
           <h3> AccountName:{accountName}</h3>
           <h3> AccountNumber:{accountNumber}</h3>
           <h3>BankName:{bankName}</h3>
           <h3>BankBranch:{bankBranch}</h3>
           <button className="btn btn-danger" onClick={handleClick}> DELETE </button>
           <Link to={`/edit/${id}`}> EDIT </Link>
        </div>
    )
}

export default AccountInfo