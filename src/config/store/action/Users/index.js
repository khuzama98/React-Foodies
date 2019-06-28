import firebase from '../../../firebase'
import swal from 'sweetalert'

const signup_user = (data, toRedirect) => {
    console.log(data)
    console.log('redirect function ===>', toRedirect)
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((result) => {
                const uid = result.user.uid
                data.uid = uid
                data.type = 'user'
                const dataToSnd = {
                    uid,
                    name: data.name,
                    email: data.email,
                    type: data.type,
                }
                firebase.database().ref('users').child(uid).set(data)
                    .then(() => {

                        dispatch({
                            type: "SET_USER",
                            payload: dataToSnd
                        })
                        toRedirect()

                    })
                    .catch((e) => {
                        console.log(e)
                        swal({
                            icon: 'warning',
                            title: 'Oops',
                            text: e.message
                        })
                    })
            })
            .catch((e) => {
                console.log(e)
                swal({
                    icon: 'warning',
                    title: 'Oops',
                    text: e.message
                })
            })
    }
}

const signup_resturant = (data, toRedirect) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((result) => {
                const uid = result.user.uid
                data.uid = uid
                data.type = 'resturant'
                data.pic = 'https://firebasestorage.googleapis.com/v0/b/foodies-battle.appspot.com/o/itemPics%2Fmini-1.jpg?alt=media&token=a4153d6b-8e31-4bd6-9e03-58c09ba95458'
                const dataToSnd = {
                    uid,
                    name: data.resturantName,
                    email: data.email,
                    type: data.type,
                }
                firebase.database().ref('users').child(uid).set(data)
                    .then(() => {
                        dispatch({
                            type: "SET_USER",
                            payload: dataToSnd
                        })
                        toRedirect()
                    })
                    .catch((e) => {
                        console.log(e)
                        swal({
                            icon: 'warning',
                            title: 'Oops',
                            text: e.message
                        })
                    })
            })
            .catch((e) => {
                console.log(e)
                swal({
                    icon: 'warning',
                    title: 'Oops',
                    text: e.message
                })
            })
    }
}

const login = (data, toRedirect) => {
    console.log(data)
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((result) => {
                console.log('login result ===>', result)
                let uid = result.user.uid;
                console.log('uid ===>', uid)
                firebase.database().ref('users')
                    .once('value', data => {
                        let userData = data.val();
                        let user;
                        for (let key in userData) {
                            console.log('key ===>', key)
                            console.log('userData[key] ===>', userData[key])
                            if (key === uid) {
                                user = userData[key]
                            }
                        }
                            dispatch({
                                type: "SET_USER",
                                payload: user
                            })
                            toRedirect()
                    })
            })
            .catch((e) => {
                console.log(e)
                swal({
                    icon: 'warning',
                    title: 'Oops',
                    text: e.message
                })
            })

    }
}


const logout = (toRedirect) => {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(() => {
                toRedirect()
                dispatch({
                    type: 'REMOVE_USER'
                })
            })
            .catch((e) => {
                console.log(e)
                swal({
                    icon: 'warning',
                    title: 'Oops',
                    text: e.message
                })
            })
    }
}

export {
    signup_user,
    signup_resturant,
    login,
    logout
}