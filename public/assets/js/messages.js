/**
 * This JS File Will Handle All Message Queriies 
 */

/**
 * Storing Form Data
 */

const apiUrl = 'https://alexaxel-resume.herokuapp.com'

const messageFormData = () => {
    const fullNames = document.getElementById('nameId').value
    const email = document.getElementById('emailId').value
    const project = document.getElementById('projectId').value
    const message = document.getElementById('messageId').value

    const messageData = {fullNames, email, project, message}
    return messageData
}

 const postNewQuerry = () => {
     fetch(`${apiUrl}/admin/messages`, {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json; charset=UTF-8'
         },
         body: JSON.stringify({
            fullNames: messageFormData().fullNames,
            email: messageFormData().email,
            project: messageFormData().project,
            message: messageFormData().message
         })
     }).then(res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
        }).then(data => {
            const sentMessage = data.newMessage
            console.log(data.newMessage)
            alert('>>>   Message Sent Successfully.  Thank You For Reaching Out!   <<<')
     })
 }

const sendQuerry = document.getElementById('sendQuerry')

sendQuerry.addEventListener('click', () => {
    postNewQuerry()
})