var pass = document.getElementById('password')
var msg = document.getElementById('message')

pass.addEventListener('input', () => {
  var strength = ''

  if (pass.value.length > 0) {
    msg.style.display = "block"
  } else {
    msg.style.display = "none"
  }

  if (pass.value.length < 4) {
    strength = "zayıf"
    pass.style.borderColor = "#ff5925"
    msg.style.color = "#ff5925"
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    strength = "orta"
    pass.style.borderColor = "yellow"
    msg.style.color = "yellow"
  } else if (pass.value.length >= 8) {
    strength = "güçlü"
    pass.style.borderColor = "#26d730"
    msg.style.color = "#26d730"
  }

  // Mesaj metnini "Şifre " + strength olarak ayarla
  msg.innerHTML = "Şifre " + strength
})
