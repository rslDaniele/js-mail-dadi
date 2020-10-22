var bottone = document.getElementById('dado')

bottone.addEventListener('click', function() {
  risultatoai.innerHTML = Math.floor(Math.random() *  6);
  risultatouser.innerHTML = Matf.floor(Math.random() * 6);
}
