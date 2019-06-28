import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB5cq56tBzjW1yny28F6V4OAZNCR0zBDGg",
    authDomain: "foodies-battle.firebaseapp.com",
    databaseURL: "https://foodies-battle.firebaseio.com",
    projectId: "foodies-battle",
    storageBucket: "foodies-battle.appspot.com",
    messagingSenderId: "806849034741",
    appId: "1:806849034741:web:514d48965929ea15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const getResturants = () => {
    return new Promise((resolve, reject) => {
        firebase.database().ref('users')
            .once('value', data => {
                let userData = data.val();
                let user = [];
                for (let key in userData) {
                    console.log('key ===>', key)
                    console.log('userData[key] ===>', userData[key])
                    if (userData[key].type === 'resturant') {
                        user.push(userData[key])
                    }
                }
                console.log('resturants ===> ', user)
                resolve(user)
            })
            .catch((e) => {
                reject({ message: e.message })
            })
    })

}

const addFoodItem = (uid, obj) => {
    return new Promise((resolve, reject) => {
        firebase.storage().ref('items/' + obj.pic.name).put(obj.pic)
            .then(() => {
                firebase.storage().ref('items/' + obj.pic.name).getDownloadURL()
                    .then((url) => {
                        obj.pic = url;
                        firebase.database().ref('returantMenu').child(uid).push(obj)
                            .then((result) => {
                                resolve(result)
                            })
                            .catch((e) => {
                                reject({ message: e.message })
                            })
                    })
                    .catch((e) => {
                        reject({ message: e.message })
                    })
            })
            .catch((e) => {
                reject({ message: e.message })
            })
    })
}

const resturantInfo = (uid) => {
    return new Promise((resolve, reject) => {
        firebase.database().ref('users').child(uid)
            .once('value', data => {
                const userData = data.val();
                resolve(userData)
            })
            .catch((e) => {
                reject({ message: e.message })
            })
    })
}

const requestItem = (userUid, resturantUid, item) => {
    return new Promise((resolve, reject) => {
        item.status = 'pending'
        item.uid = userUid;
        item.resturantUid = resturantUid
        firebase.database().ref('progress').push(item)
            .then((result) => {
                let orderKey = result.key
                firebase.database().ref('progress').child(orderKey)
                    .once('value', data => {
                        const userData = data.val()
                        userData.orderKey = orderKey
                        firebase.database().ref('progress').child(orderKey).set(userData)
                            .then((success) => {
                                resolve(success)
                            })
                            .catch((e) => {
                                reject({ message: e.message })
                            })
                    })
                    .catch((e) => {
                        reject({ message: e.message })
                    })
            })
            .catch((e) => {
                reject({ message: e.message })
            })
    })
}

const getUserRequests = (uid) => {
    return new Promise((resolve, reject) => {
        firebase.database().ref('progress')
            .once('value', data => {
                const userData = data.val()
                console.log('requests==>', userData)
                let requestData = [];
                for (let key in userData) {
                    if (userData[key].uid === uid) {
                        requestData.push(userData[key])
                    }
                }
                resolve(requestData)
            })
            .catch((e) => {
                reject({ message: e.message })
            })
    })
}

const transferToProgress = (key) => {
    return new Promise((resolve,reject)=>{
        console.log(key)
        firebase.database().ref('progress').child(key)
        .once('value',data=>{
            let userData = data.val()
            userData.status = 'inprogress'
            firebase.database().ref('progress').child(key).set(userData)
            .then((result)=>{
                resolve(result)
            })
            .catch((e) => {
                reject({ message: e.message })
            })
        })
            .catch((e) => {
                reject({ message: e.message })
            })
    })
}

const transferToDelivered = (key) => {
    return new Promise((resolve, reject) => {
        console.log(key)
        firebase.database().ref('progress').child(key)
            .once('value', data => {
                let userData = data.val()
                userData.status = 'delivered'
                firebase.database().ref('progress').child(key).set(userData)
                    .then((result) => {
                        resolve(result)
                    })
                    .catch((e) => {
                        reject({ message: e.message })
                    })
            })
            .catch((e) => {
                reject({ message: e.message })
            })
    })
}


export default firebase
export {
    getResturants,
    addFoodItem,
    requestItem,
    getUserRequests,
    transferToProgress,
    transferToDelivered,
    resturantInfo
}