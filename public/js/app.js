// alert('Hola mundo desde mi server');
const btn = document.querySelector("#btn");
const img = document.querySelector("#photo");

btn.addEventListener('click', function () {
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      // La diferencia entre json y una cadena
      console.log(XHR.responseText);
      // Para asegurarnos que es json lo parseamos 
      const data = JSON.parse(XHR.responseText);
      console.log(data.message);
      img.src = data.message;
    }
  }

  XHR.open('GET', "https://dog.ceo/api/breeds/image/random");
  XHR.send();
})