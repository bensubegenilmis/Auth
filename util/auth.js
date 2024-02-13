import axios from "axios";

const API_KEY = 'AIzaSyBr0HF16Q2xZ403feog_lGHjCvJsw1jQ5g';

export async function createUser(email,password){
 const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+API_KEY,
    {
        email:email,
        password:password,
        returnSecureToken:true,

    }
    );
}