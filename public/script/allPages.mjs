let divHeader = null;
let divContent = null;
let divFooter = null;

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  divContent = document.getElementById("divContent");
  const userID = localStorage.getItem("userID");
  console.log("Checking this");
  if (userID) {
    landingPage();
  } else {
    loginPage();
  }
}

// ---------------------------------------------------------


async function landingPage() {
  loadTemplate("tlLandingPage", divContent, true);

  const toLoginPageBtn = document.getElementById("toLoginPageBtn");
  toLoginPageBtn.addEventListener("click", loginPage);
}

// ---------------------------------------------------------

async function loginPage() {
  loadTemplate("tlLoginPage", divContent, true);
  
  const loginForm = document.getElementById("loginForm");

  const logInBtn = document.getElementById("logInBtn");
  logInBtn.addEventListener("click", function(evt){
    loginUser()
  });

  
  const newUserBtn = document.getElementById("newUserBtn");
  newUserBtn.addEventListener("click", function (evt) {
    loadTemplate("tlCreateNewUser", divContent, true);
    createUser();
  });




}
