// let url = "https://catfact.ninja/fact";
// //axios library to make http request
// //axios is a promise based library
// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//    let fact = await getfacts();
//    console.log(fact);
//    let p = document.querySelector("p");
//    p.textContent = fact;
// })
// async function getfacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
//         console.log("Error - ",err);
//         return "No fact founc";
// }
// }

// //axios sending headers
// let ur = "https://icanhazdadjoke.com/";
// async function getjokes() {
//     try{
//         const config = {headers:{Accept:"application/json"}};
//         let res = await axios.get(ur,config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log("Error - ",err);
//     }
// }


//axios updatting query strings
let url = "http://universities.hipolabs.com/search?name=";
        let btn = document.querySelector("button");

        btn.addEventListener("click", async () => {
            let country = document.querySelector("input").value;
            console.log(country);
            let colleges = await getcollege(country);
            // console.log(colleges);
            show(colleges);
            
        });
        function show(colleges){
            let ul = document.querySelector("ul");
            ul.innerText="";
         for(col of colleges)   {
            // console.log(col.name);
            let li = document.createElement("li");
            li.textContent = col.name;
            // li.textContent = col.state-province;
            ul.appendChild(li);
         }

        }

        async function getcollege(country) {
            try {
                let res = await axios.get(url + country);
                return res.data;
            } catch (e) {
                console.log("Error - ", e);
            }
        }