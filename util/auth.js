import axios from "axios";

const API_KEY = 'AIzaSyBr0HF16Q2xZ403feog_lGHjCvJsw1jQ5g';


async function authenticate(mode, email,password) 
{

    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
        email:email,
        password:password,
        returnSecureToken:true,

    }
    );

//console.log(response.data);
const token = response.data.idToken;
return token;
    
}

export  function createUser(email,password){
return authenticate('signUp', email,password);
}

export  function login(email,password){
    return authenticate('signInWithPassword', email,password);
    }