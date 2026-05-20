// content.js
// Código que será injetado na página do YouTube

setInterval(() => {
  const imagens = document.querySelectorAll('img');
  imagens.forEach(imagem => {
    imagem.src = 'https://i.ytimg.com';
  });
}, 130);

