interface IChapther {
  title: string;
  path: string;
  content: string;
}

const Chapthers: IChapther[] = [
  {
    title: 'Introdução',
    path: 'videos/introducao.mp4',
    content: '<p>BlaBla…</p>',
  },
  {
    title: 'Breve História da IA',
    path: 'videos/capitulo01.mp4',
    content: `
    <p>Podemos dizer que a inteligência artificial iniciou em 1956, quando um grupo de matemáticos, cientistas e linguistas dos Estados Unidos criaram um projeto de pesquisa. Esse projeto tinha a visão de desenvolver um sistema que aprende sozinho a fazer tarefas que requerem inteligência humana. </p>
    <p>A primeira inteligência artificial criada nessa época, foi capaz de provar teoremas matemáticos. Logo após, também foi criada uma linguagem de programação que servia para processar estruturas simbólicas.</p>
    <p>Na década de 60, os pioneiros em IA estavam pensando em fazer uma máquina que servisse para resolver qualquer problema, eles fizeram uma pesquisa em tradução de códigos de máquina e desenvolveram o primeiro robô autônomo, ele se movia um pouco e era capaz de realizar tarefas simples dentro do escritório.</p>
    <p>Uma outra IA criada durante essa época é a Eliza, uma IA de chat que simulava uma conversa com um terapista. Muitos falavam na época, que ela era muito realista de forma que chegava a enganar algumas pessoas.</p>
    <p>Nessa época, os pesquisadores concluíram que o mundo real era muito mais complicado do que os problemas que a ia conseguia resolver, então, as pesquisas foram desacelerando.</p>
    <p>O foco no desenvolvimento de inteligências artificiais só voltou nos anos 80, quando foram desenvolvidos sistemas especialistas, capazes de combinar dados  para, por exemplo, diagnosticar condições médicas, ou dar dicas para o público através de chat por telefone. Nessa época, também houve muitos avanços em robótica, reconhecimento de fala e reconhecimento de imagens.</p>
    <p>Em 1997, a IA “Deep Blue” conseguiu vencer de Garry Kasparov(Campeão mundial de xadrez da época) em xadrez e pela primeira vez na história, uma IA demonstrou superioridade sobre um ser humano.</p>
    <p>Desde 2010, IA está crescendo exponencialmente, com a introdução de Deep learning e big data que estão em tendência no momento.</p>
    `,
  },
  {
    title: 'O’que é a IA - Definição dos Dias Atuais',
    path: 'videos/capitulo02.mp4',
    content: `
    <p>“Uma IA é um sistema que tem a habilidade de analisar e interpretar o ambiente em que se encontra e usar os dados obtidos para conseguir maximizar suas chances de obter sucesso em seus objetivos.”</p>
    <p>Isto é, um programa que preenche planilhas pra você não é uma IA. Uma IA consegue se adaptar ao seu ambiente e mudanças nele, sempre visando completar seu objetivo.</p>
    <p>Por incrível que pareça, a IA está cada vez mais presente em nosso cotidiano, mesmo que isso não seja muito aparente.</p>
    <p>Por exemplo em video-games onde entramos em contato com IAs com frequência. Jogos que apresentam o modo para um jogador normalmente apresentam inimigos que servem como “obstáculos” no jogo.</p>
    <p>Esses inimigos não são controlados por pessoas, mas sim pelo próprio programa, e são desenvolvidos para se aproximarem o máximo possível do comportamento de uma pessoa, dentro das limitações técnicas do computador e do nível de dificuldade selecionado. Com isso, em jogos de tiro, os inimigos apresentam táticas de grupo, como dar cobertura a aliados e balancear suas funções. Em jogos de estratégia, o computador desenvolve a economia, as tropas e as defesas. Diferentes gêneros de jogos apresentam IAs com diferentes abordagens, focos e métodos.</p>
    <p>Se você usa programas ou dispositivos como o Google Assistant, a Siri da Apple ou a Alexa da Amazon, você também está em constante contato com IAs: as áreas de reconhecimento de voz e interpretação do conteúdo de mensagens (seguida pela atuação com base na mensagem) também são áreas de estudo no campo da Inteligência Artificial</p>
    `,
  },
  {
    title: 'Onde a IA está Presente - Aplicações',
    path: 'videos/capitulo03.mp4',
    content: `
    <p>As aplicações de inteligência artificial, como automação, controle de qualidade e segurança cibernética estão entre os usos mais populares da tecnologia. Dentre várias aplicações dessa tecnologia se incluem:</p>
    <li>Automação da TI</li>
    <p>No Brasil, uma indústria alimentícia de grande porte investiu recentemente na tecnologia e já mensurou diversos resultados positivos em poucos meses. O tempo de espera caiu de 30 para 3 segundos e o de atendimento prestado aos funcionários pelo departamento de TI foi de 15 para 5 minutos, em média. Por meio da tecnologia, as perguntas mais comuns estão registradas em sistema e são facilmente acessadas por todos. O ganho de produtividade a longo prazo é gigantesco. De acordo com o relatório The CIO’s Guide To Automation, AI, And Robotics, publicado pela consultoria Forrester, as empresas que quiserem seguir inovando precisam se dedicar à automação, sendo que os impactos ao aderir à tecnologia serão: processos robóticos aprimorados com Inteligência Artificial, infraestrutura definida por software, automação de marketing, visão computacional e robótica física (robôs).</p>
    <li>Segurança cibernética</li>
    <p>A inteligência artificial provavelmente não irá tornar os especialistas em cibersegurança 100% precisos e sem erros, porém irá reduzir drasticamente a necessidade de ter tantos funcionários e aumentar imensamente a eficácia. Outra maneira pela qual os sistemas de IA podem ajudar, é categorizando os ataques com base no nível de ameaça. Muitos profissionais cibernéticos dizem que os sistemas não são precisos o suficiente, porém quando as ferramentas forem implementadas, eles podem aumentar a eficácia com o tempo, dando a uma vantagem dinâmica sobre os terroristas cibernéticos. Outra grande questão da cibersegurança que temos enfrentado têm sido a falta de profissionais com as habilidades necessárias. As organizações não conseguiram encontrar profissionais com as habilidades fundamentais para resolução dos problemas e com as ferramentas de IA essas lacunas serão preenchidas.</p>
    <li>Análise preditiva</li>
    <p>A análise preditiva consiste em compreender a partir de um grande volume de dados e auferir uma análise sobre eles.</p>
    <p>Apesar de estarmos todos conectados e imputando dados a todo momento, através do nosso celular, redes sociais e computadores, no caso em questão, o Google também leva em consideração para fazer essa sugestão o volume de buscas que foram feitas em sua plataforma se iniciando com essa frase.</p>
    <p>Não podemos afirmar quantas vezes essa frase foi buscada, mas o que dá para dizer com certeza é que na maior parte desses casos, ao digitar: “como fazer um bolo de…”, as pessoas procuravam exatamente por bolo de chocolate.</p>
    <p>A busca por receita de bolo de chocolate nada mais é do que um exemplo de tendência de ação. Nos sites de buscas, através da mineração de dados, uso de machine learning e estatística, é possível compreender e prever esse comportamento do usuário.</p>
    <p>Essa análise permite, além de um melhor entendimento imediato de autocompletar, a possibilidade de observar – ao longo das coletas – os padrões, as mudanças e as tendências futuras de comportamento desse mesmo consumidor.</p>

    <li>Serviço de atendimento ao cliente</li>
    <p>No atendimento ao cliente, a tecnologia é utilizada para automatizar os processos, bem como desenvolver robôs de atendimento ou assistentes virtuais — conhecidos como chatbot — para interagir com o cliente via chat de site, rede social, aplicativo etc.</p>
    <p>Afora outras soluções que compõem um sistema de atendimento, abrangendo atividades de coleta e análise de dados, geração de relatórios, base de conhecimento, autoatendimento, pesquisa de satisfação, assim como tarefas de comunicação interna.</p>
    `,
  },
  {
    title: 'Funcionamento Básico do Código',
    path: 'videos/capitulo04.mp4',
    content: `
    <p>Nessa parte abordaremos como a IA funciona, podemos dizer que é difícil uma definição quanto a seu funcionamento, mas podemos notar como a qual trabalha com diversos processos, que envolvem grande quantia de informações das quais não se pode perceber com experiências diárias. Ela é feita por códigos e programação que funcionam por meio de funções matemáticas. De maneira geral, a ideia é ter uma função na qual, quando se insere um determinado valor, outro valor surge. O importante é entender que esses valores não são aleatórios, mas têm um significado e, portanto, uma função. De forma análoga, os códigos de computador também não são aleatórios, sendo eles cada um é responsável por um papel no sistema.</p>
    <p>Na IA se trabalha com uma grande quantia de dados, dados com os quais se combinam e junto com algoritmos inteligentes, proporciona ao sistema a partir das informações, criar padrões, sendo forma de aprendizagem, desde que  sempre seja renovado.</p>
    <p>Para melhor compreendimento analisaremos uma nova aplicação que vem tornando se cada vez mais constante sua utilização.</p>
    `,
  },
  {
    title: 'Exemplo de um Código - Reconhecimento Facial',
    path: 'videos/capitulo05.mp4',
    content: `<p> </p>
    <p> </p>
    <p> </p>`,
  },
  {
    title: 'Campos de Aplicação, Possíveis Cargos e Ganhos',
    path: 'videos/capitulo06.mp4',
    content: `<p> </p>
    <p> </p>
    <p> </p>`,
  },
];

export default Chapthers;
