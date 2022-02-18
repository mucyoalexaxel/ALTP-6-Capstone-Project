/**
 * This JS File Will Handle All Blog Articles 
 */

 const apiUrl = 'https://alexaxel-resume.herokuapp.com'
 
//  let accessToken = ('; '+document.cookie).split(`; accessToken=`).pop().split(';')[0];
let accessToken, refreshToken;

const bearer = `Bearer ${accessToken}` 

 /**
 * Fetching & Posting Credentials From The API
 */
 
 /**
 * Posting New Users To The API
 */
const regFormData = () => {
    const fName = document.getElementById('fNameId').value
    const lName = document.getElementById('lNameId').value
    const email = document.getElementById('regEmailId').value
    const password = document.getElementById('regPasswordId').value
    
    const formData = {fName, lName, email, password}
    return formData
}

 const postNewUser = () => {
     fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json; charset=UTF-8'
         },
         body: JSON.stringify({
            fName: regFormData().fName,
            lName: regFormData().lName,
            email: regFormData().email,
            password: regFormData().password
         })
     }).then(res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
        }).then(data => {
            accessToken = data.accessToken
            refreshToken = data.refreshToken
            document.cookie =  `accessToken=${accessToken}; path=/; expires=1000*60*60*3; sameSite=Lax;`;
            return window.location.href = './adminDash.html'
     })
 }

 const loginFormData = () => {
    const email = document.getElementById('logEmailId').value
    const password = document.getElementById('logPasswordId').value
    
    const lformData = {email, password}
    return lformData
}

const loginUser = () => {
    fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
           email: loginFormData().email,
           password: loginFormData().password
        })
    }).then(res => {
        if (res.status === 200) return res.json()
       }).then( data => {
            const accessToken = data.accessToken
            const refreshToken = data.refreshToken
            document.cookie =  `accessToken=${accessToken};path=/; max-age=${1000*60*60*3}; sameSite=Lax;`;
            return window.location.href = './adminDash.html'
    })
}



