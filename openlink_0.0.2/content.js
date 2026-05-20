// Função para abrir os próximos 5 links em uma nova aba
function openNextFiveLinksInNewTab() {
  // Obter os links e os links já abertos do armazenamento local
  const links = document.querySelectorAll('.sc-c2a62e5a-7.kmpSJb a[href]');
  chrome.storage.local.get('openedLinks', function(data) {
    const openedLinks = data.openedLinks || [];
    let counter = 0;

    // Loop pelos links e abrir os próximos 5 links que ainda não foram abertos
    for (let i = 0; i < links.length; i++) {
      const link = links[i].href;
      if (!openedLinks.includes(link) && counter < 5) {
        window.open(link, '_blank');
        openedLinks.push(link); // Adicionar o link aos links abertos
        counter++;
      }
    }

    // Armazenar os links abertos atualizados no armazenamento local
    chrome.storage.local.set({ 'openedLinks': openedLinks });
  });
}

// Executa a função quando a página é carregada
openNextFiveLinksInNewTab();
