// ---- Curiosidades do Coração ----

function revelarResposta(idResposta) {
    // Pega o elemento da resposta pelo ID
    const resposta = document.getElementById(idResposta);

    // Mostra ou esconde a resposta
    if (resposta.style.display === 'block') {
        resposta.style.display = 'none'; // Se estiver visível, esconde
    } else {
        resposta.style.display = 'block'; // Se estiver escondida, mostra
    }
}

// ---- Galeria de Ferramentas ----

// Esconde todas as descrições primeiro
const todasDescricoes = document.querySelectorAll('#descricoes-ferramentas .descricao');

function esconderTodasDescricoes() {
    todasDescricoes.forEach(desc => {
        desc.classList.remove('visivel'); // Usa a classe CSS para mostrar/esconder
    });
}

function mostrarDescricao(idDescricao) {
    esconderTodasDescricoes(); // Garante que só uma esteja visível

    const descricao = document.getElementById(idDescricao);
    if (descricao) {
        descricao.classList.add('visivel'); // Adiciona a classe para mostrar
    }
}

// Esconde as descrições ao carregar a página
document.addEventListener('DOMContentLoaded', esconderTodasDescricoes);


// ---- Simulação Simples ----

function mostrarIndicacao(sintoma) {
    const elementoIndicacao = document.getElementById('indicacao');
    let textoIndicacao = "";

    switch (sintoma) {
        case 'cansaço':
            textoIndicacao = "Hmm, talvez seja bom <strong>descansar um pouquinho</strong> e brincar de forma mais calma por uns dias. 🧘‍♀️ Se continuar, tem que avisar um adulto!";
            break;
        case 'dorzinha':
            textoIndicacao = "Opa! Dorzinha no peito é importante! O médico poderia pedir um <strong>exame do coração</strong> (aquele desenho!) para ver se está tudo certo. 🗺️ E avisar os pais sempre!";
            break;
        case 'checkup':
            textoIndicacao = "Que legal! Cuidar da saúde é importante! O médico vai ouvir seu coração ❤️, fazer perguntas e dizer para continuar <strong>comendo frutas e verduras</strong> e brincando bastante! 🤸‍♂️";
            break;
        default:
            textoIndicacao = "Escolha um sintoma acima!";
    }

    // Coloca o texto no lugar certo na página
    elementoIndicacao.innerHTML = textoIndicacao;
}