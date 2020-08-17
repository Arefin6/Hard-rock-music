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
function fetchData(query){
 fetch(`${api.base}/${query}`)
.then(res => res.json())
.then(data => {
    albumTitle.innerText = data.data[0].title;    
    albumAuthor.innerText = data.data[0].artist.name;
    console.log(); 
}).catch(e => console.log(e));
}

const lyricBtn = document.getElementById("lyricBtn");
lyricBtn.addEventListener("click",setParams =>{
    const title = albumTitle.innerText;
    const author = albumAuthor.innerText;
     fetchLyric(title,author);
 });

function fetchLyric(title,author){
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
 

