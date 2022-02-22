/**
 * This JS File Will Handle All Blog Articles 
 */

/**
 * Fetching The API
 */

const apiUrl = 'https://alexaxel-resume.herokuapp.com'


let accessToken = ('; '+document.cookie).split(`; accessToken=`).pop().split(';')[0];
const bearer = `Bearer ${accessToken}` 





/**
 * Updating Article
 */

//  const updateArticle = (postId) => {

//     const singleArticleData = () => {
//         const title = document.getElementById('editTitleId').value
//         const articleContent = document.getElementById('editContentId').value
//         return {title, articleContent}
//     }

//     alert(`I will Update Article: ${postId}`)
//     fetch(`${apiUrl}/admin/blog_articles/${postId}` , { method: 'POST', 
//     headers: { 
//         'Authorization': bearer,
//         'Content-Type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify({
//         title: singleArticleData().title,
//         articleContent: singleArticleData().articleContent
//      })
//     }).then( res => {
//         if (res.ok === true ) return res.json()
//         console.log(`Error Happened...>> Status Code: ${res.status}`) 
//     }).then(fetchedArticle => {  
//               alert('Article Updated')
//               location.reload()
//     }).catch(err => {
//         console.error(err)
//     })
// }








/**
 * Creating A Blog Article
 */

const createArticleForm = () => {
    const title = document.getElementById('articleTitle').value
    const articleContent = document.getElementById('articleContent').value
    return {title, articleContent}
}

const createArticle = document.getElementById('createArticleBut')


createArticle.addEventListener('click', e => {
    e.preventDefault()
    newArticle()
})

const newArticle= async () => {
    console.log(createArticleForm().title)
    console.log(createArticleForm().articleContent)
    try {
        fetch(`${apiUrl}/admin/blog_articles`, {
            method: 'POST',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                title: createArticleForm().title,
                articleContent: createArticleForm().articleContent
             })
         }).then(res => {
            if (res.ok === true ) return res.json()
            console.log(`Error Happened...>> Status Code: ${res.status}`) 
            }).then(data => {
                alert('Article Created Successfully')
                clearArticleForm()
         })
    } catch (error) {
        console.log(error)
    }
}

const clearArticleForm = () => {
    const articleForm = document.getElementById('articleForm')
    articleForm.reset()
    return false
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
            // return window.location.href = '../../../ALTP-6-Capstone-Project/index.html#home'
            return window.location.replace = './index.html#home'
     })
}