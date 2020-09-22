export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            )
            .then(response => {
                dispatch({ type: "LOGIN_SUCCESS" });
            })
            .catch(err => {
                dispatch({ type: "LOGIN_ERROR", err });
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: "SIGN_OUT_SUCCESS" });
            })
            .catch(err => {
                console.error(err);
            })
    };
};

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
    };
};