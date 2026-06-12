// Lista de alternativas sustentáveis
const alternativas = [
    "Análise de Controle Biológico: Usar predadores naturais para combater as pragas em vez de veneno químicos.",
    "Agricultura Orgânica: Cultivar alimentos respeitando os ciclos naturais, sem o uso de pesticidas sintéticos.",
    "Rotação de Culturas: Alternar as espécies plantadas na mesma área para quebrar o ciclo de desenvolvimento de pragas.",
    "Uso de Bioinsumos: Defensivos feitos a partir de microrganismos, plantas ou minerais que não agridem a natureza."
];

// Seleção dos elementos do HTML
const botao = document.getElementById('btn-alternativa');
const texto = document.getElementById('texto-alternativa');

let indice = 0;

// Função para mudar a dica ao clicar no botão
botao.addEventListener('click', () => {
    // Remove a classe que esconde o texto caso seja o primeiro clique
    if (texto.classList.contains('escondido')) {
        texto.classList.remove('escondido');
    }
    
    // Mostra a alternativa atual
    texto.textContent = alternativas[indice];
    
    // Avança para a próxima alternativa da lista
    indice = (indice + 1) % alternativas.length;
});
