const jsonDataBlogPosts = './Data/blogs.json';
 
let blogTabCountClicks = 0;
function LoadBlogPosts() {
fetch(jsonDataBlogPosts)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                  GeBlogPosts(data,blogTabCountClicks++);
            })
            .catch(function (err) { 
                console.log('error: ' + err);
            });
}

function GeBlogPosts(data,blogTabCountClicks) {

    var demoBlogPostsContainer = document.getElementById("blogposts"); 

    if (blogTabCountClicks == 0) {
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.classList.add('col-md-4');
            div.classList.add('p-2');
            div.innerHTML += `<div  class='card'><img src='images/${data[i].BlogPostImage}' class='card-img'>               
        <div class='card-body'><p  class='bold-text '>${data[i].BlogPostTitle}</p><p class=' text-left'>${data[i].BlogPostDescription}</p>       
        <a href='${data[i].BlogPostUrl}' class='btn-default-colour p-2 ' target='_blank'>Click Here To Read This Blog Post</a></div></div></div>`
            demoBlogPostsContainer.appendChild(div);
        }
    }
   
}
