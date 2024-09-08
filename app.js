// Função de pesquisa
function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    const termoBusca = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Se termoBusca for uma string vazia
    if (!termoBusca) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do anime</p>";
        return;
    }
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Se titulo, descricao ou tags incluem termoBusca
        if (titulo.includes(termoBusca) || descricao.includes(termoBusca) || tags.includes(termoBusca)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.linkVideo}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="ano-meta">${dado.ano}</p>
                <p class="genero-meta">${dado.genero}</p>
                <p class="estudio-meta">${dado.estudio}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui a string de resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}