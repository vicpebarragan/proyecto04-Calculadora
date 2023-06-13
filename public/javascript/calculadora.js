let calculo = () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value);
        let interfazHoras = parseFloat(document.getElementById('interfazHoras').value);
        let estructuraHTML = parseFloat(document.getElementById('estructuraHTML').value);
        let estiloCSS = parseFloat(document.getElementById('estiloCSS').value);
        let logicaJS = parseFloat(document.getElementById('logicaJS').value);

        let valorTotal = valorPorHora * (interfazHoras + estructuraHTML + estiloCSS + logicaJS);

        document.getElementById('valorTotal').value = '$ '+valorTotal;
      })
}


calculo();