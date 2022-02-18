/**
 * This JS File Will Handle All Blog Articles 
 */

/**
 * Fetching The API
 */

const apiUrl = 'https://alexaxel-resume.herokuapp.com'

let accessToken = ('; '+document.cookie).split(`; accessToken=`).pop().split(';')[0];

const bearer = `Bearer ${accessToken}` 

const fetchArticles = () => {
    fetch(`${apiUrl}/admin/blog_articles`).then( res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
    }).then(fetchedData => {
        
        let article=""
        fetchedData.map(values => {
            article+= `<div class="article-details" id="${values._id}">
            <div class="article-content">
                <h3 class="article-title">${values.title}</h3>
                <p class="article-description">${values.articleContent}</p>
            </div>
            <p class="article-action-btns">
                <button class="article-action-btn" onclick="click()">View</button>
                <button class="article-action-btn" onclick="click()">Edit</button>
                <button class="article-action-btn" onclick="click()">Delete</button>
            </p>
        </div>`
        })
        document.getElementById('adminArticles').innerHTML = article

    }).catch(err => {
        console.error(err)
    })
}
fetchArticles()

const fetchQuerries = () => {
    fetch(`${apiUrl}/admin/messages`, { method: 'GET', 
        headers: { 'Authorization': bearer }
        }).then(res => {
            if (res.ok === true ) return res.json()
            console.log(`Error Happened...>> Status Code: ${res.status}`)
        }).then(data => {
            console.log(data)
            let message=""
            data.map(values => {
                message+= `<div class="msg-details" id="${values._id}">
            <div class="msg-content">
                <span class="msg-querry"></span>
                    <span class="msg-querry">Names:  ${values.fullNames}</span>
                    <span class="msg-querry">Email:  ${values.email}</span>
                    <span class="msg-querry">Project:  ${values.project}</span>
                    <span class="msg-querry">Message: <br>${values.message}</span>
            </div>
            <p class="article-action-btns">
                <p class="article-action-btns">
                    <button class="article-action-btn" onclick="click()">View</button>
                    <button class="article-action-btn" onclick="click()">Delete</button>
                </p>
            </p>
        </div>`
        })
        document.getElementById('adminQuerries').innerHTML = message
            
     }).catch(err => {
         console.log(err)
     })
    

}
fetchQuerries()

const createArticleForm = () => {
    const title = document.getElementById('articleTitle').value
    const articleContent = document.getElementById('articleContent').value
    return newArticle = {title, articleContent}
}

const createArticle= () => {
    fetch(`${apiUrl}/admin/blog_articles`, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
             'Content-Type': 'application/json; charset=UTF-8'
         },
         body: JSON.stringify({
            title: createArticleForm().title,
            articleContent: createArticleForm().articleContent
         })
     }).then(res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
        }).then(data => {
            console.log(data)
            alert('Article Created Successfully')
     })
}



/**
 * Logout
 */

 const logout = () => {
    fetch(`${apiUrl}/auth/logout`, { method: 'DELETE', 
        headers: { 'Authorization': bearer }
        }).then(res => {
            if (res.ok === true ) return res.json()
            console.log(`Error Happened...>> Status Code: ${res.status}`)
        }).then(data => {
            document.cookie =  `accessToken=${accessToken};path=/; max-age=0; sameSite=Lax;`;
            return window.location.href = '../../../ALTP-6-Capstone-Project/index.html#home'
     })
}