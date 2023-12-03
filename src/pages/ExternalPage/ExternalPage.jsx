// ExternalPage.js
import React, { useEffect } from 'react';

const ExternalPage = () => {
  useEffect(() => {
    // Carregue o HTML, CSS e JS externos aqui, se necessário
    const externalContainer = document.getElementById('external-page-container');

    // Carregue o HTML externo
    fetch('teste-aprendizado-master/index.html') // Substitua pelo caminho real do seu arquivo HTML externo
      .then(response => response.text())
      .then(html => {
        externalContainer.innerHTML = html;
      });

    // Carregue o CSS externo
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'teste-aprendizado-master/css/style.css'; // Substitua pelo caminho real do seu arquivo CSS externo
    document.head.appendChild(link);

    // Carregue o JS externo
    const script = document.createElement('script');
    script.src = 'teste-aprendizado-master/js/controller.js'; // Substitua pelo caminho real do seu arquivo JS externo
    document.body.appendChild(script);

    return () => {
      // Limpe os recursos, se necessário
    };
  }, []);

  return (
    <div id="external-page-container">
      {/* O conteúdo da página externa será renderizado aqui */}
    </div>
  );
};

export default ExternalPage;
