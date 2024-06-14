window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const urlSignUp = "https://todo-api.digitalhouse.com/v1/users";
  const form = document.forms[0];
  const firstName = document.querySelector("#inputNombre");
  const lastName = document.querySelector("#inputApellido");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
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
    realizarRegister(settings);
  });

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    console.log("settings", settings);
    fetch(urlSignUp, settings)
      .then((response) => {
        
       return response.json()
      })
      .then((data) => {

        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
        }
      });
  }
});
