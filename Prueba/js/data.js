let data = (data = "https://api.thedogapi.com/v1/breeds") => {
  axios
    .get(data, {
      responseType: "json",
    })

    .then(function (res) {
      console.log(res.data);
      let data = res.data;
      if (Array.isArray(data)) {
        for (let index = 0; index < res.data.length + 1; index++) {
          var itemTr = document.createElement("tr");
          var id = document.createElement("td");
          var firstName = document.createElement("td");
          var lastName = document.createElement("td");
          var email = document.createElement("td");
          var linkInfo = document.createElement("a");
          id.innerText = res.data[index].id;
          firstName.innerText = res.data[index].name;
          lastName.innerText = res.data[index].origin;
          email.innerText = res.data[index].life_span;

          linkInfo.innerText = "Link";

          linkInfo.className = "botonLink";
          linkInfo.addEventListener("click", function () {
            MiNombreFuncion(res.data[index].name);
            window.modal.showModal();
          });

          itemTr.appendChild(id);
          itemTr.appendChild(firstName);
          itemTr.appendChild(lastName);
          itemTr.appendChild(email);
          itemTr.appendChild(linkInfo);
          document.getElementById("table").appendChild(itemTr);
        }
      } else if (res.data.name) {
        var itemTr = document.createElement("tr");
        var id = document.createElement("td");
        var firstName = document.createElement("td");
        var lastName = document.createElement("td");
        var email = document.createElement("td");
        var linkInfo = document.createElement("a");
        id.innerText = res.data.id;
        firstName.innerText = res.data.name;
        lastName.innerText = res.data.origin;
        email.innerText = res.data.life_span;
        linkInfo.innerText = "Link";

        linkInfo.className = "botonLink";
        linkInfo.addEventListener("click", function () {
          MiNombreFuncion(res.data[index].name);
          window.modal.showModal();
        });

        itemTr.appendChild(id);
        itemTr.appendChild(firstName);
        itemTr.appendChild(lastName);
        itemTr.appendChild(email);
        itemTr.appendChild(linkInfo);
        document.getElementById("table").appendChild(itemTr);
        console.log("solo hay uno");
      }
    })

    .catch(function (err) {
      console.log(err);
    });
};
const MiNombreFuncion = (name) => {
  var tituloModal = document.createElement("h2");
  tituloModal.innerText = name;
  tituloModal.id = "textoModal";
  const modal = document.getElementById("modal");

  const textoModal = document.getElementById("textoModal");
  modal.replaceChild(tituloModal, textoModal);

  /*  modal.appendChild("<h2>ventana modal  " + name + "</h2>");
  document.writeln("<p>Esto es un ejemplo de contenido</p>");
  document.writeln(' <button onclick="window.modal.close();">Cerrar</button>');
  document.writeln(" </dialog>"); */
};
