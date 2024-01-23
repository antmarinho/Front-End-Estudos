// instalacao

console.log(axios);

const getData = async() => {

    try {

        //const response = await axios.get(
        const response = await postsFetch.get( //custom instance
            //"https://jsonplaceholder.typicode.com/users", 
                "/users", 
            // definindo heades
            {
                Headers: {
                    "Content-Type": "application/json",
                    custom: "header",
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

// primeiro request
const container = document.querySelector("#user-container");

const printData = async() => {
    const data = await getData();

    data.forEach((user) => {

        const div = document.createElement("div");

        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);


        container.appendChild(div);

    })
}

printData();

// post 


const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //postsFetch.post("https://jsonplaceholder.typicode.com/posts", {
    postsFetch.post("/posts", {
    //axios.post("https://jsonplaceholder.typicode.com/posts", {
       
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1

    });

});



