export const addAccount = (account) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("bankers")
      .add(account)
      .then((doc) => {});
  };
};

export const deleteAccount = (acc_id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
    .collection("bankers")
    .doc(acc_id)
    .delete()
  };
};

export const editAccount = (acc_id, updatedAcct) => {
  return (dispatch,state,{getFirestore}) => {
    getFirestore().collection('bankers').doc(acc_id).set(updatedAcct)

  }
};

export const getAllAccounts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("bankers")
      .onSnapshot(
        (snapshot) => {
          let bankers = [];
          snapshot.forEach((doc) => {
            bankers.push({ ...doc.data(), id: doc.id });
          });
          console.log(bankers);
          dispatch({
            type: "SET_ALL_BANKERS",
            payload: bankers,
          });
        },
        (err) => {}
      );
  };
};
