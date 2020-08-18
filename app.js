//Api base urls
const api ={
    base:"https://api.lyrics.ovh/suggest",

    lyrics:"https://api.lyrics.ovh/v1"
}
//Search Btn
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", setQuery => {

    const searchBox = document.getElementById("search-input").value;

    fetchData(searchBox);
})

//necessary dom elements
const mainArea = document.getElementById("single-result");
const lyricBtn = document.getElementById("lyricBtn");
const lyric = document.getElementById("lyric");
const single = document.getElementById("single");

//Fetching Data
function fetchData(query){
 fetch(`${api.base}/${query}`)
.then(res => res.json())
.then(data => {
     mainArea.innerHTML = '';
     for(let i = 0; i < 10; i++){

        const title = data.data[i].title;
       

        const author = data.data[i].artist.name;

        mainArea.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name" id="title">${title}</h3>
            <p class="author lead">Album by <span id="author">${author}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success" 
            onclick="fetchLyric('${title}','${author}')" id="lyricBtn">Get Lyrics</button>
        </div>
      </div>`;
     }

 }).catch(e => console.log(e));

}

//feting Lyric
const fetchLyric = (title,author) =>{
    console.log(title,author);
    fetch(`${api.lyrics}/${author}/${title}`)
    .then(res => res.json())
    .then(data => {
        
        lyric.innerText = data.lyrics;
            if(lyric.innerText === "undefined"){
                 lyric.innerText = "Sorry Not Found! ";
                single.style.display = "block";
                lyric.style.display ="block";
            } 
            single.style.display = "block";
            lyric.style.display ="block";
        
        
    });
}

 

