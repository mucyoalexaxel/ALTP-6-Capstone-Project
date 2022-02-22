/**
 * This JS File Will Handle All Blog Articles 
 */

/**
 * Fetching The API
 */

const apiUrl = 'https://alexaxel-resume.herokuapp.com'


let accessToken = ('; '+document.cookie).split(`; accessToken=`).pop().split(';')[0];
const bearer = `Bearer ${accessToken}` 

let totQuerries
let totArticles


/**
 * Fetching All Querries
 */


 const fetchQuerries = () => {
    fetch(`${apiUrl}/admin/messages`, { method: 'GET', 
        headers: { 'Authorization': bearer }
        }).then(res => {
            if (res.ok === true ) return res.json()
            console.log(`Error Happened...>> Status Code: ${res.status}`)
        }).then(data => {
            let message=""
            let count = 1
            data.map(values => {
                message+= `
                <div class="msg-details" id="${values._id}">
                <div class="msg-content">
                    <div class="querry-counter">Message: ${count}</div>
                        <span class="msg-querry"><span class="querry-title">From:</span>${values.fullNames}</span>
                        <span class="msg-querry"><span class="querry-title">Email:</span>${values.email}</span>
                        <span class="msg-querry"><span class="querry-title">Project:</span>${values.project}</span>
                        <span class="msg-querry-msg msg-querry"><span class="querry-title">Message:</span>${values.message}</span>
                </div>
                <p class="article-action-btns">
                    <p class="article-action-btns">
                        <button class="article-action-btn" onclick="fetchQuerryById('${values._id}')">View</button>
                        <button class="article-action-btn" onclick="deleteQuerryById('${values._id}')">Delete</button>
                    </p>
                </p>
            </div>`
            count++
        })
        totQuerries = count - 1
        localStorage.setItem('Total Querries', totQuerries)
        document.getElementById('adminQuerries').innerHTML = message
            
     }).catch(err => {
         console.log(err)
     })
    

}
fetchQuerries()

/**
 * Fetching Querry By Id
 */

const fetchQuerryById = (querryId) => {

    fetch(`${apiUrl}/admin/messages/${querryId}` , { method: 'GET', 
    headers: { 'Authorization': bearer }
    }).then( res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
    }).then(fetchedMsg => {        
        console.log(fetchedMsg)
        alert(`Message: ${fetchedMsg.message}`)
    }).catch(err => {
        console.error(err)
    })

}


/**
 * Fetching Delete Querry By Id
 */

 const deleteQuerryById = (postId) => {
    fetch(`${apiUrl}/admin/messages/${postId}` , { method: 'DELETE', 
    headers: { 'Authorization': bearer }
    }).then( res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
    }).then(fetchedRes => {  
              alert('Message Deleted')
              location.reload()
    }).catch(err => {
        console.error(err)
    })
}




/**
 * Fecting All Blog Articles 
 */


const fetchArticles = () => {
    fetch(`${apiUrl}/admin/blog_articles`).then( res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
    }).then(fetchedData => {        
        let article=""
        let totArticles=""
        let count = 1
        fetchedData.map(values => {
            article+= `
            <div class="article-counter">Article: ${count}</div>
            <div class="article-details" id="${values._id}">
            <div class="article-content">
                <h3 class="article-title">${values.title}</h3>
                <p class="article-description">${values.articleContent}</p>
            </div>
            <p class="article-action-btns">
                <button class="article-action-btn" onclick="adminArticleView('${values._id}')">View</button>
                <button class="article-action-btn" onclick="adminEditArticle('${values._id}')">Edit</button>
                <button class="article-action-btn" onclick="adminDeleteArticle('${values._id}')">Delete</button>
            </p>
        </div>`
        count++
        })
        document.getElementById('adminArticles').innerHTML = article  
        totArticles = count - 1
        localStorage.setItem('Total Articles', totArticles)

    }).catch(err => {
        console.error(err)
    })
}

fetchArticles()


/**
 * Fecthing An Aricle By Id
 */

const adminArticleView = (postId) => {

    fetch(`${apiUrl}/admin/blog_articles/${postId}` , { method: 'GET', 
    headers: { 'Authorization': bearer }
    }).then( res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
    }).then(fetchedArticle => {        
        let articleById=`<div class="article-view-details" id="${fetchedArticle._id}">
        <div class="article-view-content">
            <h3 class="article-title">${fetchedArticle.title}</h3>
            <p class="article-description">${fetchedArticle.articleContent}</p>
        </div>
        <p class="article-action-btns">
            <button class="article-action-btn" onclick="adminEditArticle('${fetchedArticle._id}')">Edit</button>
            <button class="article-action-btn" onclick="adminDeleteArticle('${fetchedArticle._id}')">Delete</button>
        </p>
    </div>`
        document.getElementById('ArticleById').innerHTML = articleById
    }).catch(err => {
        console.error(err)
    })

}


/**
 * Fecthing & Editing An Aricle By Id
 */

/**
 * Loading Editing Article View
 */

const adminEditArticle = (postId) => {
    fetch(`${apiUrl}/admin/blog_articles/${postId}` , { method: 'GET', 
    headers: { 'Authorization': bearer }
    }).then( res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
    }).then(fetchedArticle => {        
        let articleById=`
        <form action="" method="POST">
            <div class="article-view-details" id="${fetchedArticle._id}">
                <div class="article-view-content">
                    <input class="article-title edit-article-title" type="text" name="articleTitle" id="editTitleId" value="${fetchedArticle.title}">
                    <textarea class="article-description edit-article-content" name="articleContent" id="editContentId" cols="1" rows="1">${fetchedArticle.articleContent}</textarea>
                </div>
                <p class="article-action-btns">
                    <a class="article-action-btn" id="callUpdateArticle" onclick="updateArticleCaller('${fetchedArticle._id}')">Save</a>
                    <a class="article-action-btn" id="callArticleView" onclick="adminArticleView('${fetchedArticle._id}')">Cancel</a>
                </p>
            </div>
        </form>`
        document.getElementById('ArticleById').innerHTML = articleById
    }).catch(err => {
        console.error(err)
    })
}


/**
 * Updating Article
 */

const updateArticleCaller = (postId) => {
    const callUpdateArticle = document.getElementById('callUpdateArticle')
    callUpdateArticle.addEventListener('click', (e) => {
        // e.preventDefault()
        loadUpdateArticle(postId)
    })

}

const loadUpdateArticle = (postId) => {
    // Article Data
    const singleArticleData = () => {
        const title = document.getElementById('editTitleId').value
        const articleContent = document.getElementById('editContentId').value
        return {title, articleContent}
    }

    const updateArticle = () => {
        fetch(`${apiUrl}/admin/blog_articles/${postId}` , { method: 'PATCH', 
            headers: { 
                'Authorization': bearer,
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                title: singleArticleData().title,
                articleContent: singleArticleData().articleContent
            })
            }).then( res => {
                if (res.ok === true ) return res.json()
                console.log(`Error Happened...>> Status Code: ${res.status}`) 
            }).then(fetchedArticle => {  
                    alert('Article Updated')
                    location.reload()
            }).catch(err => {
                console.log(err)
            })
    }

    return updateArticle()
}



/**
 * Fecthing & Deleting An Aricle By Id
 */

const adminDeleteArticle = (postId) => {
    fetch(`${apiUrl}/admin/blog_articles/${postId}` , { method: 'DELETE', 
    headers: { 'Authorization': bearer }
    }).then( res => {
        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
    }).then(fetchedArticle => {  
              alert('Article Deleted')
              location.reload()
    }).catch(err => {
        console.error(err)
    })
}



/**
 * Logout Fetch
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
            // return window.location.href = '../../../index.html#home'
     })
}