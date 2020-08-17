const api ={
    base:"https://api.lyrics.ovh/suggest",

    lyrics:"https://api.lyrics.ovh/v1"
}
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",setQuery =>{

    const searchBox = document.getElementById("search-input").value;

    fetchData(searchBox);
});
const albumTitle = document.getElementById("title");
const albumAuthor = document.getElementById("author");
const mainArea = document.getElementById("single-result");
const lyricBtn = document.getElementById("lyricBtn");

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
            onclick="fetchLyric(${title} ${author})" id="lyricBtn">Get Lyrics</button>
        </div>
    </div>`;

     }

    // albumTitle.innerText = data.data[0].title;    
    // albumAuthor.innerText = data.data[0].artist.name;
    // console.log(); 
 });//.catch(e => console.log(e));

}


//    function  setParams(){ 
//     const title = albumTitle.innerText;
//     const author = albumAuthor.innerText;
//      fetchLyric(title,author);
//    }

const fetchLyric = (title,author) =>{
    console.log(title,author);
    fetch(`${api.lyrics}/${author}/${title}`)
    .then(res => res.json())
    .then(data => {
      const lyric = document.getElementById("lyric");
      const single = document.getElementById("single");
      lyric.innerText = data.lyrics;
      single.style.display = "block";
      lyric.style.display ="block";

    });
}

 

