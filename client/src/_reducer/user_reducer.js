export default function (state = {}, action){
    switch(action.type){
        case "REGISTER_USER":
            return {...state, register: action.payload}
            break;
        case "LOGIN_USER":
            return {...state, loginUser: action.payload}
            break;
        case "AUTH_USER": 
            return {...state, userData: action.payload}
            break;
        default:
            return state;
    }
}