const formulario = document.getElementById("formulario")

const email = document.getElementById("email")
const fullname = document.getElementById("name")
const phone = document.getElementById("phone")
const mensaje = document.getElementById("message")
const ruta = window.location.href

formulario.onsubmit = (evento) => {
  evento.preventDefault()

  const datos = {
    name: fullname.value,
    email: email.value, 
    phone: phone.value,
    message: mensaje.value,
    ruta
  }
  fetch("https://bahiabackend.herokuapp.com/contactos/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos)
  })
    .then(() => {
      limpiarCampos()
      alert("Thank you for reaching us. We'll be in contact soon")
    })
    .catch(() => {
      limpiarCampos()
      alert("Something went wrong :(. Try again later")
    })
    
}

const limpiarCampos = () => {
  email.value = ""
  fullname.value = ""
  phone.value = ""
  mensaje.value = ""
}
