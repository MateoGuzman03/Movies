const API = "https://api.themoviedb.org/3"


export function get(path){
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzY0YjQ2OTA4NjVkMDkxZGE2NTUzNmEyNTg5MmE3ZCIsInN1YiI6IjYwYjU2YjIwYzU4YWNkMDAyYjJlMTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-iv9zozXLeE4YDaXVjRqc7pIHL48Jmha9PaT1vZiY0",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}