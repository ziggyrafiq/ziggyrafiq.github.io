const feedUrl = "http://blog.ziggyrafiq.com/feeds/posts/default?alt=rss";

//window.addEventListener("load", function () { GetBlogPosts(feedUrl); });

 function LoadBlogPosts()
{
   fetch(feedUrl, {
    //  method: 'POST',
      mode: 'cors',
     headers: {
       'Access-Control-Allow-Origin':'*'
     }
   })
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
      let blogPostContainer = document.getElementById("blogposts");
  
    items.forEach(el => {
      var div = document.createElement("div");
       div.classList.add('col-md-4');
        div.classList.add('p-2');
        div.innerHTML+=`<div  class='card shadow-sm'><img src='${el.querySelector("link").innerHTML}/image/large.png}' class='bd-placeholder-img card-img-top'>               
        <div class='card-body'><p  class='fw-bold'>${el.querySelector("title").innerHTML}</p><p></p>
        <a href='${el.querySelector("link").innerHTML}' class='btn btn-default-colour p-2' target='_blank'>Click Here To Read This Blog Post</a> 
        </div></div></div>`;       
         blogPostContainer.appendChild(div);
      console.log(el.querySelector("title").innerHTML);
      
    });
    //document.body.insertAdjacentHTML("beforeend", html);
  });
  
 }



function GetBlogPosts(urlAddress) {
  
  let blogPostContainer = document.getElementById("blogposts");
  
  var x = new XMLHttpRequest();
  x.open("GET", urlAddress, true);
  x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200)
    {
      var doc = x.responseXML;
      var xmlData = doc.getElementsByTagName("channel")[0].getElementsByTagName("title");

      for (var i = 1; i < xmlData.length; i++) { 
            
        var blogPostTitle = doc.getElementsByTagName("channel")[0].getElementsByTagName("title")[i].textContent;
        var blogPostUrl = doc.getElementsByTagName("channel")[0].getElementsByTagName("link")[i].textContent;
        var blogPostImg = doc.getElementsByTagName("channel")[0].getElementsByTagName("media:thumbnail")[i].getAttributeNode("url").nodeValue;  
        var div = document.createElement("div");
        
        div.classList.add('col-md-4');
        div.classList.add('p-2');
        div.innerHTML+=`<div  class='card shadow-sm'><img src='${blogPostImg}' class='bd-placeholder-img card-img-top'>               
        <div class='card-body'><p  class='fw-bold'>${blogPostTitle}</p><p></p>
        <a href='${blogPostUrl}' class='btn btn-default-colour p-2' target='_blank'>Click Here To Read This Blog Post</a> 
        </div></div></div>`;       
         blogPostContainer.appendChild(div);
      }
    }   
  };
  x.send(null);
}

const jsonData = './Data/projects.json';
function LoadDemoProjects() {
fetch(jsonData)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                  GetDemoProjects(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
    

}

function GetDemoProjects(data) {

    var demoProjectContainer = document.getElementById("demoProjects");

    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.classList.add('col-md-4');
        div.classList.add('p-2');
        div.innerHTML+=`<div  class='card shadow-sm'><img src='${data[i].ProjectImage}' class='bd-placeholder-img card-img-top'>               
        <div class='card-body'><p  class='fw-bold'>${data[i].ProjectName}</p><p>${data[i].ProjectDescription}</p>
        <a href='${data[i].ProjectGitRepo}' class='btn btn-default-colour p-2' target='_blank'>Click Here To Know More</a> 
        <a href='${data[i].ProjectLiveUrl}' class='btn btn-default-colour p-2 ' target='_blank'>View Project Live</a> 
        </div></div></div>`;       
        demoProjectContainer.appendChild(div);
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
console.log("testing gulp complie js files");

 