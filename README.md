# Polui-o-causada-por-agrot-xicos-Agrinho-2026
Agrinho-2026
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poluição por Agrotóxicos</title>
    <link rel="stylesheet" href="style.ass">
</head>
<body>

    <header>
        <h1>Impacto dos Agrotóxicos no Meio Ambiente</h1>
        <p>Entenda como o uso excessivo de defensivos agrícolas afeta o nosso planeta.</p>
    </header>

    <main class="container">
        <section class="card">
            <h2>O Problema</h2>
            <p>Os agrotóxicos são extraídos para controlar pragas nas plantações, mas o seu uso massivo contamina o solo, os lençóis freáticos e o ar. Isso gera um desequilíbrio ecológico que afeta desde pequenos insetos polinizadores até a saúde humana.</p>
        </section>

        <section class="card">
            <h2>Principais Consequências</h2>
            <ul>
                <li><strong>Contaminação da Água:</strong> A chuva carrega os químicos para rios e lagos.</li>
                <li><strong>Degradação do Solo:</strong> Redução da fertilidade natural da terra.</li>
                <li><strong>Perda de Biodiversidade:</strong> Morte de abelhas e outros animais essenciais.</li>
            </ul>
        </section>

        <section class="card acao-interativa">
            <h2>O que podemos fazer?</h2>
            <p>Clique no botão abaixo para descobrir alternativas sustentáveis ao uso de agrotóxicos convencionais.</p>
            <button id="btn-alternativa">Descobrir Alternativa</button>
            <p id="texto-alternativa" class="escondido"></p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Conscientização Ambiental</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
}

/* Cabeçalho */
header {
    background-color: #2c3e50;
    color: #fff;
    text-align: center;
    padding: 3rem 1rem;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    color: #1abc9c;
    font-size: 1.1rem;
}

/* Corpo / Layout */
.container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.card {
    background: #fff;
    padding: 2rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    border-bottom: 2px solid #1abc9c;
    padding-bottom: 0.3rem;
}

ul {
    list-style-position: inside;
    margin-top: 0.5rem;
}

ul li {
    margin-bottom: 0.5rem;
}

/* Elementos Interativos e Botão */
button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 1rem;
}

button:hover {
    background-color: #16a085;
}

#texto-alternativa {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #e8f8f5;
    border-left: 4px solid #1abc9c;
    border-radius: 4px;
    font-weight: 500;
}

.escondido {
    display: none;
}

/* Rodapé */
footer {
    text-align: center;
    padding: 2rem;
    background-color: #2c3e50;
    color: #fff;
    margin-top: 3rem;
    font-size: 0.9rem;
}
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
