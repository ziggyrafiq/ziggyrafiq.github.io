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

const jsonDataProjects = './Data/projects.json';
let demoProjectTabCountClicks = 0;
function LoadDemoProjects() {
fetch(jsonDataProjects)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                  GetDemoProjects(data,demoProjectTabCountClicks++);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
}

function GetDemoProjects(data,demoProjectTabCountClicks) {

    var demoProjectContainer = document.getElementById("demoProjects");
    
    if (demoProjectTabCountClicks == 0) {
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.classList.add('col-md-4');
            div.classList.add('p-2');
            div.innerHTML += `<div  class='card shadow-sm'><img src='Images/${data[i].ProjectImage}' class='card-img'>               
        <div class='card-body'><p  class='bold-text'>${data[i].ProjectName}</p><p  class=' text-left'>${data[i].ProjectDescription}</p>
        <a href='${data[i].ProjectGitRepo}' class='btn-default-colour p-2' target='_blank'>Click Here To Access GitHub Repo</a> 
        
        </div></div></div>`;
            demoProjectContainer.appendChild(div);
        }
    }
}
document.getElementById("defaultOpen").click();

function openTab(evt, tabSectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabSectionName).style.display = "block";
  evt.currentTarget.className += " active";
}