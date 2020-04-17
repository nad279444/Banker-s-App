 export const addAccount = (account) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: account
    }
}


export const deleteAccount = (acc_id) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: acc_id
    }
}

export const editAccount = (acc_id,updatedAcct) => {
    return {
        type: 'EDIT_ACCOUNT',
        acc_id,
        updatedAcct
    }
}