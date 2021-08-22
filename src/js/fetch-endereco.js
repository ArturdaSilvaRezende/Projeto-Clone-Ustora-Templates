"use strict";

((doc) => {
  const cep = doc.querySelector("#cep");
  const btnCep = doc.querySelector(".btn-cep");

  const showData = (result) => {
    for (const campo in result) {
      if (doc.querySelector("#" + campo)) {
        doc.querySelector("#" + campo).value = result[campo];
      }
    }
  };

  //Onde o if abaixo vai verificar se o evento addEventListener não está vazio.
  if (btnCep) {
    btnCep.addEventListener("click", searchCep);
  }

  function searchCep(e) {
    let search = cep.value.replace("-", "");

    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
      .then((response) => {
        response.json().then((data) => {
          showData(data);
        });
      })
      .catch((e) => {
        console.log("Erros: " + e, message);
      });
  }
})(document);
