import React, { useState } from 'react';


const Quiz = () => {
  const questoes = [
    'O que é Front-End ?',
    'O CSS é usado para?',
    'O que é JavaScript?',
    'O que é React?',
    'O que são props em React?',
    'Gostou do nosso quiz ?',
  ];

  const alternativas = [
    ['(A) Uma linguagem de programação', '(B) E a parte visual de um site', '(C) Um banco de dados', '(D) Uma linguagem de script'],
    ['(A) Estilizar páginas da web', '(B) Manipular bancos de dados', '(C) Criar elementos HTML', '(D) Lidar com lógica do servidor'],
    ['(A) JavaScript e um framework', '(B) JavaScript e uma linguagem de marcação', '(C) JavaScript e uma linguagem de programação', '(D) JavaScript e uma linguagem de banco de dados'],
    ['(A) React e um banco de dados', '(B) React é uma biblioteca JavaScript', '(C) React e uma linguagem de marcação', '(D) React e a Reação do Clientes'],
    ['(A) Props e uma linguagem de programação', '(B) Props e um framework', '(C) Props são as propriedades dos componentes', '(D) Props e um sistema operacional'],
    ['Sim', 'Não'],
  ];

  const respostasCorretas = [
    [1],
    [0],
    [2],
    [1],
    [2],
    [0, 1],
  ];

  const [indiceQuestaoAtual, setIndiceQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [indiceRespostaSelecionada, setIndiceRespostaSelecionada] = useState(null);
  const [respostasSelecionadas, setRespostasSelecionadas] = useState([]);

  const questaoAtual = questoes[indiceQuestaoAtual];
  const opcoesRespostaAtual = alternativas[indiceQuestaoAtual];

  const mudancaResposta = (respostas) => {
    if (indiceRespostaSelecionada === null) {
      setIndiceRespostaSelecionada(respostas);
    } else {
      alert('Você só pode selecionar uma resposta.');
    }
  };

  const limparResposta = () => {
    setIndiceRespostaSelecionada(null);
  };

  
  const [quizEncerrado, setQuizEncerrado] = useState(false);
  const proximaQuestao = () => {
    if (quizEncerrado) {
      return;
    }
    
    const corretas = respostasCorretas[indiceQuestaoAtual];
  
    if (indiceRespostaSelecionada !== null) {
      setRespostasSelecionadas([...respostasSelecionadas, opcoesRespostaAtual[indiceRespostaSelecionada]]);
      if (corretas.includes(indiceRespostaSelecionada)) {
        setPontuacao(pontuacao + 1);
      }
    } else {
      return;
    }
  
    if (indiceQuestaoAtual < questoes.length - 1) {
      setIndiceQuestaoAtual(indiceQuestaoAtual + 1);
      setIndiceRespostaSelecionada(null);
    } else {
      alert('Fim do quiz. Sua pontuação final: ' + pontuacao);
      setRespostasSelecionadas([...respostasSelecionadas, 'Pontuação Final: ' + pontuacao]);
      setQuizEncerrado(true); 
    }
  };

  return (
    <div className="quiz-container">
      <h1>{questaoAtual}</h1>
    
      <div className="respostas">
        {opcoesRespostaAtual.map((opcaoResposta, resposta) => (
          <label key={resposta}>
            <input
               type="checkbox"
               checked={indiceRespostaSelecionada === resposta}
               onChange={() => mudancaResposta(resposta)}
               
            />
            {opcaoResposta}
          </label>
        ))}
      </div>
      <button
        className="limpar-button"
        onClick={limparResposta}
        disabled={indiceRespostaSelecionada === null}
      >
        Limpar Resposta
      </button>
      <button
        className="proximo-button"
        onClick={proximaQuestao}
        disabled={indiceRespostaSelecionada === null}
      >
        {indiceQuestaoAtual < questoes.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
      </button>
      <div className='Resposta'>
        <h4>Respostas Selecionadas:</h4>
        <ul>
          {respostasSelecionadas.map((resposta, index) => (
            <li key={index}>{resposta}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;

