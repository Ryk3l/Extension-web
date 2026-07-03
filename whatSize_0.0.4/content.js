//deixa somente em destaque os icones de perfil 

function ajustarMaxWidth() {
  const elementos = document.querySelectorAll('.x10fiusa.x10fiusa');

  elementos.forEach(elemento => {
    elemento.style.maxWidth = '75px';
  });

}
//sistema de repetição
ajustarMaxWidth();

setInterval(ajustarMaxWidth, 2500);

//aumenta o tamanho do chat

function aumentarTamnhoDoBalaoDeConversa() {
  const elementos = document.querySelectorAll('._3Uu1_ ');

  elementos.forEach(elemento => {

    elemento.style.minHeight = '120px';

    });
  }

//sistema de repetição
aumentarTamnhoDoBalaoDeConversa();
setInterval(aumentarTamnhoDoBalaoDeConversa, 3000);