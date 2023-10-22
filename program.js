fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  }).then((completedata) => {
    console.log(completedata)

    let data1 ="";
    completedata.map((values)=>{
      data1 +=
     `<div class="products">
        <p class="id">${values.id})</p>
        <h3>${values.title}</h3>
        <img src="${values.image}" alt="img"> 
        <details>
        <p>${values.description}</p>
        </details>
        <p class="price">Price : ${values.price}</p>
      </div>`
    })
    document.getElementById("card").innerHTML=data1
  })
  .catch((error) => {
   console.log(error);
})

  // const wrapper = document.querySelector('.wrapper');
  // const registerLink = document.querySelector('.register-link');
  // const loginLink = document.querySelector('.login-link');
  // registerLink.onclick = () => {
  //   wrapper.classList.add("active");
  // }

  // loginLink.onclick = () => {
  //   wrapper.classList.remove("active");
  // }
  
  icon = document.querySelector(".icon");
  icon.onclick = function() {
    navItems = document.querySelector(".nav_items");
    navItems.classList.toggle("active");
  }
  