function contacts(element) {
  const newComponente = document.createElement("div");
  newComponente.innerHTML = `
  <div class="container-contact">
  <div class="container-contact__title">
    <h2 class="title__contact">Contacto</h2>
  </div>

  <form action="" class="container-contact__form">
    <div class="field">
      <label class="label">Nombre</label>
      <div class="control">
        <input class="campos" type="text" placeholder="" />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="campos" type="text" placeholder="" />
      </div>
    </div>

    <div class="field">
      <label class="label">Mensaje</label>
      <div class="control">
        <textarea class="campos textarea" placeholder=""></textarea>
      </div>
    </div>
    <div class="container-button">
      <button class="button">Enviar</button>
    </div>
  </form>
</div>`;

  const form = newComponente.querySelector(".container-contact__form");
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("el form se envio");
  });

  element.appendChild(newComponente);
}
