import { uuid } from "uuidv4";

const initialState = {
    account:[]
}


const userReducer = (state = initialState,action) =>{
    switch (action.type) {
        case'ADD_ACCOUNT':
            const newAccount = {
                id:uuid(),
                accountName:action.payload.accountName,
                accountNumber:Math.floor(Math.random()*11000000000000),
                bankName:action.payload.bankName,
                bankBranch:action.payload.bankBranch,
                
            }
        return {...state,account:[...state.account,newAccount]}
        case 'DELETE_ACCOUNT':
            const filteredAcct = state.account.filter(person => person.id !== action.payload);
            return {...state, account : filteredAcct} 
        case 'EDIT_ACCOUNT':
            const updated_Acct = state.account.map(person => {
                if(person.id === action.acct_id){
                    return{...person,...action.updatedAcct}
                }else{
                    return person;
                }
            })
            return {...state, account: updated_Acct}  
        case 'SET_ALL_BANKERS':
           return { account: action.payload }    
        default:
            return state;
    }

}

export default userReducer