//auth
const registerForm = document.querySelector("#register");
registerForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = registerForm.querySelector(".email").value;
  const username = registerForm.querySelector(".username").value;
  const password = registerForm.querySelector(".password").value;
  const firstname = registerForm.querySelector(".firstname").value;
  const lastname = registerForm.querySelector(".lastname").value;
  post("/register", { email, username, password, firstname, lastname });
});

const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const username = loginForm.querySelector(".username").value;
  const password = loginForm.querySelector(".password").value;
  post("/login", { username, password }).then(({ status }) => {
    if (status === 200) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  });
});

function post(path, data) {
  return window.fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
//auth
