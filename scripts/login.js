window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const urlLogin = "https://todo-api.digitalhouse.com/v1/users/login";
  const form = document.forms[0];
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = {
      email: email.value,
      password: password.value,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };
    realizarLogin(settings);
  });

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 2: Realizar el login [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarLogin(settings) {
    fetch(urlLogin, settings)
      .then((response) => response.json())
      .then((data) => {
        console.log("data ****", data);
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          location.replace("./mis-tareas.html");
        }
      })
      .catch((error) => console.error(error));
  }
});
