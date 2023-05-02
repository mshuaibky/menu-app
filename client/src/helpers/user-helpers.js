import axios from 'axios'
axios.defaults.withCredentials = true

export async function signUpDetails(credentials){
    console.log(credentials,'credn');
  return new Promise((resolve,reject)=>{
    axios.post('http://localhost:8000/sign-up',credentials).then((data)=>{
        resolve(data)
    }).catch((error)=>{
        reject(error)
    })
  })
}

export async function loginDetails(credentials){
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:8000/user-login',credentials).then((data)=>{
            resolve(data)
        }).catch((error)=>{
            reject(error)
        })
    })
}