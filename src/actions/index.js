export const LOGIN = 'LOGIN';

export function login_action(props) {
    console.log(props)
    return{
        type: LOGIN,
        payload: props
    };
}