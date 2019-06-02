

function business() {
   var dt = new Date();
   let url= 'https://newsapi.org/v2/everything?' +
        'q=business&' +
        'from=' + dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() +'&' +
        'sortBy=popularity&' +
        'apiKey=70a0a2654735452192ca8fefd6c44f9a';
    var req = new Request(url);
    fetch(req)
        .then(function(response){
            return response.json();
        })
        .then(res => res.articles)
        .then(function (res) {

            let object = document.getElementById("list");
            object.innerHTML=``;
            for (let i = 0; i < 40; i++) {
                outInf=res[i];
                object.innerHTML += `  <div class="card middle">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${outInf.urlToImage}">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${outInf.author}<i class="material-icons right">News</i></span>
                  <p><a href="${outInf.url}">link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <p>${outInf.content}</p>
                </div>
              </div>`
            }
        })
}
function  sport()
{   
    var dt = new Date();
    let url= 'https://newsapi.org/v2/everything?' +
        'q=sports&' +
        'from=' + dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() +'&' +
        'sortBy=popularity&' +
        'apiKey=70a0a2654735452192ca8fefd6c44f9a';
    var req = new Request(url);
    fetch(req)
        .then(function(response){
            return response.json();
        })
        .then(res => res.articles)
        .then(function (res) {
            let object = document.getElementById("list");
            object.innerHTML=``;
            for (let i = 0; i < 40; i++) {
                outInf=res[i];
                object.innerHTML += `  <div class="card middle">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${outInf.urlToImage}">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${outInf.author}<i class="material-icons right">News</i></span>
                  <p><a href="${outInf.url}">link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <p>${outInf.content}</p>
                </div>
              </div>`
            }
        })
}
function  technology()
{
	var dt = new Date();
    let url= 'https://newsapi.org/v2/everything?' +
        'q=technology&' +
        'from=' + dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() +'&' +
        'sortBy=popularity&' +
        'apiKey=70a0a2654735452192ca8fefd6c44f9a';
    var req = new Request(url);
    fetch(req)
        .then(function(response){
            return response.json();
        })
        .then(res => res.articles)
        .then(function (res) {
            let object = document.getElementById("list");
            object.innerHTML=``;
            for (let i = 0; i < 40; i++) {
                outInf=res[i];
                object.innerHTML += `  <div class="card middle">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${outInf.urlToImage}">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${outInf.author}<i class="material-icons right">News</i></span>
                  <p><a href="${outInf.url}">link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <p>${outInf.content}</p>
                </div>
              </div>`
            }
        })
}
function  health(){
	var dt = new Date();
    let url= 'https://newsapi.org/v2/everything?' +
        'q=health&' +
        'from=' + dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() +'&' +
        'sortBy=popularity&' +
        'apiKey=70a0a2654735452192ca8fefd6c44f9a';
    var req = new Request(url);
    fetch(req)
        .then(function(response){
            return response.json();
        })
        .then(res => res.articles)
        .then(function (res) {
            let object = document.getElementById("list");
            object.innerHTML=``;
            for (let i = 0; i < 40; i++) {
                outInf=res[i];
                object.innerHTML += `  <div class="card middle">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${outInf.urlToImage}">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${outInf.author}<i class="material-icons right">News</i></span>
                  <p><a href="${outInf.url}">link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <p>${outInf.content}</p>
                </div>
              </div>`
            }
        })

}
function  science(){
	var dt = new Date();
    let url= 'https://newsapi.org/v2/everything?' +
        'q=science&' +
        'from=' + dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() +'&' +
        'sortBy=popularity&' +
        'apiKey=70a0a2654735452192ca8fefd6c44f9a';
    var req = new Request(url);
    fetch(req)
        .then(function(response){
            return response.json();
        })
        .then(res => res.articles)
        .then(function (res) {
            let object = document.getElementById("list");
            object.innerHTML=``;
            for (let i = 0; i < 40; i++) {
                outInf=res[i];
                object.innerHTML += `  <div class="card middle">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${outInf.urlToImage}">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${outInf.author}<i class="material-icons right">News</i></span>
                  <p><a href="${outInf.url}">link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <p>${outInf.content}</p>
                </div>
              </div>`
            }
        })
}
function  entertainment(){
	var dt = new Date();
    let url= 'https://newsapi.org/v2/everything?' +
        'q=entertainment&' +
        'from=' + dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() +'&' +
        'sortBy=popularity&' +
        'apiKey=70a0a2654735452192ca8fefd6c44f9a';
    var req = new Request(url);
    fetch(req)
        .then(function(response){
            return response.json();
        })
        .then(res => res.articles)
        .then(function (res) {
            let object = document.getElementById("list");
            object.innerHTML=``;
            for (let i = 0; i < 40; i++) {
                outInf=res[i];
                object.innerHTML += `  <div class="card middle">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${outInf.urlToImage}">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${outInf.author}<i class="material-icons right">News</i></span>
                  <p><a href="${outInf.url}">link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <p>${outInf.content}</p>
                </div>
              </div>`
            }
        })
}





