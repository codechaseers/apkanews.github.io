let apikey="e0afc93feba64fbaa041d5d53f687985";
// e0afc93feba64fbaa041d5d53f687985
let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=e0afc93feba64fbaa041d5d53f687985`;
// let url= `https://brown-dibbler-cuff.cyclic.app/`;
let newscard= document.getElementById("newscard");
 
console.log(" its a news side ");
 
fetch(url).then((response)=>{
    console.log(" its responsing");
    return response.json();
   
})
 .then((data)=>{
     console.log("data articles"+data.articles);
     console.log(data);
     let newshtml="";
      for (element in data.articles){
          let news=
          `<div class="card col-md-4" style="width: 18rem;">
        <img src="${data.articles[element].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          
          <p class="card-text">${data.articles[element].title}</p>
          <a href="${data.articles[element].url}" class="btn btn-primary"> Read more</a>
        </div>
      </div>
      
      `;
        newshtml += news;
        newscard.innerHTML=newshtml
      }
 })
 
// url = " https://api.newscatcherapi.com/v2/search?q=Tesla -H x-api-key: 9qKVdmPxNEIe8IFaKAaYH4LGg5E3H-6eYH30TqXrNlk";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
