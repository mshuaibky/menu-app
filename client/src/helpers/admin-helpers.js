import axios from 'axios'
axios.defaults.withCredentials = true


export async function AdminsignUpDetails(credentials){
  return new Promise((resolve,reject)=>{
    axios.post('http://localhost:8000/admin/sign-up',credentials).then((data)=>{
        resolve(data)
    }).catch((error)=>{
        reject(error)
    })
  })
}


export async function AdminLoginDetails(credentials){
    return new Promise((resolve,reject)=>{
      axios.post('http://localhost:8000/admin/login',credentials).then((data)=>{
          resolve(data)
      }).catch((error)=>{
          reject(error)
      })
    })
  }
  //adding menu
  export async function menuDetails(details){
    return new Promise((resolve,reject)=>{
      axios.post('http://localhost:8000/admin/menu-details',details).then((data)=>{
          resolve(data)
      }).catch((error)=>{
          reject(error)
      })
    })
  }
  
//get all menu

export async function getMenu(){
    return new Promise((resolve,reject)=>{
        axios.get('http://localhost:8000/admin/get-menu').then((data)=>{
            resolve(data)
        }).catch((error)=>{
            reject(error)
        })
    })
}
//get users

export async function getUsers(){
    return new Promise((resolve,reject)=>{
      axios.get('http://localhost:8000/admin/get-users').then((data)=>{
        resolve(data)
      }).catch((error)=>{
        reject(error)
      })
    })
}

export async function makeAdmin(id){
  return new Promise((resolve,reject)=>{
    axios.get(`http://localhost:8000/admin/make-admin${id}`).then((data)=>{
      resolve(data)
    }).catch((error)=>{
      reject(error)
    })
  })
}