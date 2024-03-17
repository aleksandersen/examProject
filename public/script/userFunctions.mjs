export async function loginUser() {
  console.log("Does it run?");
  const email = document.getElementById("loginEMail").value;
  const password = document.getElementById("loginPassword").value;
  console.log(email);

  const data = { email, password };

  try{
    const response = await sendDataToServer("/login", data);    

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //localStorage.setItem("userID", data.userID);
      loginPage();
    } else {
      console.log(response.statusText);
    }

}catch(error){
      console.error(error.message);
}
}

export async function createUser() {
  divContent.innerHTML = document.getElementById("tlCreateNewUser").innerHTML;

  const createNewUserBtn = document.getElementById("createNewUserBtn");
  createNewUserBtn.addEventListener("click", async function (evt) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { name, email, password };
    const response = await sendDataToServer("/create", user);
    if(response.ok){
      const responseData = await response.json();
      console.log(responseData.message);
    } else {
      console.error("Create user fail")
    }

    //  loginUser();
  });
}

async function sendDataToServer(url, data) {
  console.log("Is data sent?", sendDataToServer, url, data);
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  console.log(header.body);

  const response = await fetch(url, header);
  return response;
}
