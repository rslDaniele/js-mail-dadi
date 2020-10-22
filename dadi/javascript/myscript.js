var bottone = document.getElementById('dado')

bottone.addEventListener('click', function() {
  risultatoai.innerHTML = Math.floor(Math.random() *  6);
  risultatouser.innerHTML = Matf.floor(Math.random() * 6);
}

if (risultatoai > risultatouser) {
  document.getElementById('vincitore').innerHTML = "Ho vinto io!"
} else if (risultatouser > risultatoai) {
  document.getElementById('vincitore').innerHTML = "Hai vinto tu!"
} else {
  document.getElementById('vincitore').innerHTML = "Pari! Tiriamo ancora!"
}
