/**
 * This JS File Will Handle All Blog Articles 
 */

 const apiUrl = 'https://alexaxel-resume.herokuapp.com'


/**
* Fetching The Articles From The API
*/



const fetchArticles = () => {
    fetch(`${apiUrl}/admin/blog_articles`).then( res => {

        if (res.ok === true ) return res.json()
        console.log(`Error Happened...>> Status Code: ${res.status}`) 
        
    }).then(fetchedData => {
        console.log(fetchedData)
        // document.querySelector('.portfolio__title').innerHTML = fetchedData[0].title
    
        // Storing & Outputing Blog Articles Data
        let article=""
        fetchedData.map(values => {
            article+= `<div class="services__content" id="${values._id}">
            <div>
                <i class="uil uil-web-grid services__icon"></i>
                <h3 class="services__title">${values.title}</h3>
                <span class="button button--flex button--small button--link services__button">
                    Read More <i class="uil uil-arrow-right button__icon"></i>
                </span>
    
                <div class="services__modal">
                    <div class="services__modal-content blog__modal-content">
                        <h4 class="services__modal-title">${values.title}</h4>
                        <i class="uil uil-times services__modal-close"></i>
                        <p>${values.articleContent}</p>
                    </div>
                </div>
            </div>
        </div>`
        })
        document.getElementById('blogArticles').innerHTML = article
    }).catch(err => {
        console.error(err)
    })
}
fetchArticles()

/**
* Postings Articles To The API
*/

// const fetchArticles = () => {
//     fetch(`${apiUrl}/admin/blog_articles`).then( data => {
//         return data.json()
//     }).then(fetchedData => {
//         console.log(fetchedData)
//         // document.querySelector('.portfolio__title').innerHTML = fetchedData[0].title
    
//         // Storing & Outputing Blog Articles Data
//         let article=""
//         fetchedData.map(values => {
//             article+= `<div class="services__content">
//             <div>
//                 <i class="uil uil-web-grid services__icon"></i>
//                 <h3 class="services__title">${values.title}</h3>
//                 <span class="button button--flex button--small button--link services__button">
//                     Read More <i class="uil uil-arrow-right button__icon"></i>
//                 </span>
    
//                 <div class="services__modal">
//                     <div class="services__modal-content blog__modal-content">
//                         <h4 class="services__modal-title">${values.title}</h4>
//                         <i class="uil uil-times services__modal-close"></i>
//                         <p>${values.articleContent}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//         })
//         document.getElementById('blogArticles').innerHTML = article
//     }).catch(err => {
//         console.log(err)
//     })
// }
// fetchArticles()
