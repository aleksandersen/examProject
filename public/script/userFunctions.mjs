
async function sendDataToServer(url, data) {
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
async function loginUser() {

  const email = document.getElementById("loginEMail").value;
  const password = document.getElementById("loginPassword").value;

  const response = await sendDataToServer("/user/login", { email, password });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    //localStorage.setItem("userID", data.userID);
    loginPage();
  } else {
    const error = await response.json();
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

    const response = await sendDataToServer("/user/create", user);

     //loginUser();
  });
}
