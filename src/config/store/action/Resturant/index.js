import firebase from '../../../firebase'
import swal from 'sweetalert'

const resturant_menu = (uid) =>{
    return (dispatch) => {
        firebase.database().ref('returantMenu').child(uid)
        .on('value',data=>{
            const userData = data.val();
            const menu=[]
            console.log('menu data',userData)
            for(let key in userData){
                menu.push(userData[key])
            }
            dispatch({
                type: "SET_MENU",
                payload: menu
            })
        })
    }
}

const resturant_orders = (uid) => {
    return (dispatch) => {
        firebase.database().ref('progress')
        .on('value',data=>{
            const userData = data.val();
            const orders = [];
            console.log('uid ===>',uid)
            console.log('orders ===>',userData)
            for(let key in userData){
                if (userData[key].resturantUid===uid){
                    orders.push(userData[key])
                }
            }
            console.log('before dispatch ===>',orders)
            dispatch({
                type:"SET_ORDERS",
                payload: orders
            })
        })
    }
}

export {
    resturant_menu,
    resturant_orders
}