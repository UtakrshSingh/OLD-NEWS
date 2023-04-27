const input = document.getElementById("input");
const box3 = document.getElementById("box-3");
const con = document.getElementsByClassName("con");
const search = document.getElementById("search");
const con1 = document.getElementById("con1");
const con2 = document.getElementById("con2");
const con3 = document.getElementById("con3");
const con4 = document.getElementById("con4");
const con5 = document.getElementById("con5");
const con6 = document.getElementById("con6");
const con7 = document.getElementById("con7");
const con8 = document.getElementById("con8");
const con9 = document.getElementById("con9");
const con10 = document.getElementById("con10");

document.getElementById("box-2").style.display = "none";
search.addEventListener("click", () => {
  document.getElementById("loader").style.display = "block";
  document.getElementById("box-2").style.display = "none";

  const featchweather = async function () {
    const response = await fetch(
      `https://inshorts.deta.dev/news?category=${input.value}`
    );
    const responsejson = await response.json();
    return responsejson;
  };
  const newsapi = featchweather();
  console.log(newsapi);

  newsapi.then(
    (data) => (
      (document.getElementById("loader").style.display = "none"),
      ((document.getElementById("box-2").style.display = "block"),
      (con1.innerHTML = `
      <div class="part1"><img src="${data.data[0].imageUrl}" alt="imag"></div> 
      <div class="part2"><h2>${data.data[0].title}</h2>
      <p>short by ${data.data[0].author} ${data.data[0].date}</p>
            <p>${data.data[0].content}</p>
            <a href="${data.data[0].readMoreUrl}">Full coverage</a>   </div> 
           `)),
      (con2.innerHTML = `
            <div class="part1"><img src="${data.data[1].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[1].title}</h2>
            <p>short by ${data.data[1].author} ${data.data[1].date}</p>
            <p>${data.data[1].content}</p>
            <a href="${data.data[1].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (con3.innerHTML = `

            <div class="part1"><img src="${data.data[2].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[2].title}</h2>
            <p>short by ${data.data[2].author} ${data.data[2].date}</p>
            <p>${data.data[2].content}</p>
            <a href="${data.data[2].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (con4.innerHTML = `
            <div class="part1"><img src="${data.data[3].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[3].title}</h2>
            <p>short by ${data.data[3].author} ${data.data[3].date}</p>
            <p>${data.data[3].content}</p>
            <a href="${data.data[3].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (con5.innerHTML = `
            <div class="part1"><img src="${data.data[4].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[4].title}</h2>
            <p>short by ${data.data[4].author} ${data.data[4].date}</p>
            <p>${data.data[4].content}</p>
            <a href="${data.data[4].readMoreUrl}">read mor4</a>   </div> 
            `),
      (con6.innerHTML = `
            <div class="part1"><img src="${data.data[5].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[5].title}</h2>
            <p>short by ${data.data[5].author} ${data.data[5].date}</p>
            <p>${data.data[5].content}</p>
            <a href="${data.data[5].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (con7.innerHTML = `
            <div class="part1"><img src="${data.data[6].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[6].title}</h2>
            <p>short by ${data.data[6].author} ${data.data[6].date}</p>
            <p>${data.data[6].content}</p>
            <a href="${data.data[6].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (con8.innerHTML = `
            <div class="part1"><img src="${data.data[7].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[7].title}</h2>
            <p>short by ${data.data[7].author} ${data.data[7].date}</p>
            <p>${data.data[7].content}</p>
            <a href="${data.data[7].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (con9.innerHTML = `
            <div class="part1"><img src="${data.data[8].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[8].title}</h2>
            <p>short by ${data.data[8].author} ${data.data[8].date}</p>
            <p>${data.data[8].content}</p>
            <a href="${data.data[8].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (con10.innerHTML = `
            <div class="part1"><img src="${data.data[9].imageUrl}" alt="imag"></div> 
            <div class="part2"><h2>${data.data[9].title}</h2>
            <p>short by ${data.data[9].author} ${data.data[9].date}</p>
            <p>${data.data[9].content}</p>
            <a href="${data.data[9].readMoreUrl}">Full coverage</a>   </div> 
            `),
      (input.value = "")
    )
  );
});
