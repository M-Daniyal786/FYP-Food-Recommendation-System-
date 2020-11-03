
import createDataContext from './createDataContext'
import foodserver from '../api/foodrecsv'

import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin_error':
            return { ...state, errorsMessage: action.payload }
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'signin':
            return { errorsMessage:'', token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch => {
    return async ({ name, email, password }) => {
        //make api request
        try {
            const response = await foodserver.post('/signup', { name, email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({
                type: 'signup',
                payload: response.data.token
            });
            navigate('Category');
        

        }
        //if signup then change current state

        //else if something wrong give an error message
        catch (err) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong!'
            });
        }
    };
});

const signin = (dispatch => {
    return async ({ email, password }) => {
        //make api request
        try {
            const response = await foodserver.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            navigate('Category')
            dispatch({
                type: 'signin',
                payload: response.data.token
            });
            console.log(response.data.token);
            
           // console.log(response.data.token);
        }
        //if signin then change current state

        //else if something wrong give an error message
        catch (err) {
            console.log(err);
            dispatch({
                type: 'signin_error',
                payload: 'Incorrect Login!'
            });
        }
    };
});

const signout = (dispatch => {
    return () => {

    };
});
export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null , errorMessage: '', errorsMessage: '' }
);
