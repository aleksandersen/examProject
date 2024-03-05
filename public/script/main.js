"use strict";

let divHeader = null;
let divContent = null;
let divFooter = null;

document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  divContent = document.getElementById("divContent");

  loadTemplate("templateLogin", divContent, true);
}

function loginUser(){
    const domLoginEmail = document.getElementById("domLoginEmail")
    const domLoginPassword = document.getElementById('domLoginPassword');
    const data = {

userEmail: domLoginEmail.value,
userPassword:domLoginPassword.value
    };
    
    const server = new ServerFetch("POST", "/login");
    server.fetchData(res) => {
        console.log(res.data)
    }
}

