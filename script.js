window.onload = function() {
    function buscar(url) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var xmlDoc = this.responseXML;

                var descricao = xmlDoc.querySelector('descricao').textContent;
                document.querySelector('#descricao p').textContent = descricao;

                var origem = xmlDoc.querySelector('origem').textContent;
                document.querySelector('#origem p').textContent = origem;

                var comidas = xmlDoc.querySelectorAll('comida');
                var comidasContainer = document.querySelector('.comidas-container');

                comidas.forEach(function(comida) {
                    var nome = comida.querySelector('nome').textContent;
                    var imagem = comida.querySelector('imagem').textContent;
                    var receita = comida.querySelector('receita').textContent;

                    var comidaDiv = document.createElement('div');
                    comidaDiv.classList.add('comida');

                    var comidaNome = document.createElement('h3');
                    comidaNome.textContent = nome;

                    var comidaImg = document.createElement('img');
                    comidaImg.src = imagem;
                    comidaImg.alt = nome;

                    var comidaReceita = document.createElement('p');
                    comidaReceita.textContent = receita;

                    comidaDiv.appendChild(comidaImg);
                    comidaDiv.appendChild(comidaNome);
                    comidaDiv.appendChild(comidaReceita);
                    comidasContainer.appendChild(comidaDiv);
                });
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    buscar('dados.xml');
};
