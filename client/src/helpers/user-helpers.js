import axios from 'axios'
axios.defaults.withCredentials = true

export async function signUpDetails(credentials){
    console.log(credentials,'credn');
  return new Promise((resolve,reject)=>{
    axios.post('http://localhost:8000/sign-up',credentials).then((data)=>{
        console.log(data,'namma data');
        resolve(data)
    }).catch((error)=>{
        reject(error)
    })
  })
}

export async function loginDetails(credentials){
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:8000/user-login',credentials).then((data)=>{
            // console.log(data,'namma data');
            resolve(data)
        }).catch((error)=>{
            reject(error)
        })
    })
}

//logout
export async function userLogout(){
    return new Promise((resolve,reject)=>{
        axios.get('http://localhost:8000/user-logout').then((data)=>{
            resolve(data)
        }).catch((error)=>{
            reject(error)
        })
    })
}