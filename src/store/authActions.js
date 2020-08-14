export const registerWithEmail = (email,password) => {
    return (dispatch,state,{getFirebase}) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }
}

export const loginWithEmail = (email,password) => {
    return (dispatch,state,{getFirebase}) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }
}

export const loginWithGoogle = () => {
    return (dispatch,state,{getFirebase}) => {
        let firebase = getFirebase()
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }

}

export const logOut = () => {
    return (dispatch,state,{getFirebase}) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .signOut()
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })  
    }
}