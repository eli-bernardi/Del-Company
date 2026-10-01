/* =========================================================
   BANCO DE QUESTÕES — Quiz Del Company
   ---------------------------------------------------------
   Modelo SAEP: contexto (situação-problema) + comando
   (gatilho) + 4 alternativas.

   Campos:
   - categoria  : tema da questão (usado no desempenho final)
   - contexto   : situação-problema
   - comando    : a pergunta (gatilho)
   - imagem     : caminho relativo ao HTML ("" = sem imagem)
   - alt        : texto alternativo da imagem
   - opcoes     : exatamente 4 alternativas
   - correta    : índice da correta (0 = A, 1 = B, 2 = C, 3 = D)
   - explicacao : comentário exibido após a resposta

   As alternativas são embaralhadas a cada tentativa
   (ver EMBARALHAR_ALTERNATIVAS em quiz.js), então NÃO use
   "todas as anteriores" ou "nenhuma das anteriores".
   ========================================================= */

const questoes = [
  /* ---------- 1) ROBÔS ---------- */
  {
    categoria: "Robôs",
    contexto:
      "Em uma linha de embalagem de biscoitos, os produtos chegam em esteira contínua e precisam ser transferidos para bandejas a mais de 100 ciclos por minuto. Cada item pesa menos de 100 g e há estrutura no teto da célula para fixar o robô sobre a esteira.",
    comando:
      "Considerando velocidade, carga útil e forma de montagem, qual arquitetura de robô é a mais adequada para essa aplicação?",
    imagem: "",
    alt: "",
    opcoes: [
      "Articulado, pois seus seis eixos rotativos permitem qualquer orientação da peça, o que é indispensável para cargas leves e ciclos rápidos.",
      "Delta, pois a estrutura paralela mantém os atuadores fixos na base e deixa a parte móvel leve, favorecendo grandes acelerações com cargas pequenas.",
      "Cartesiano, pois os eixos lineares independentes garantem a maior velocidade de ciclo entre todas as arquiteturas de robôs industriais.",
      "Colaborativo, pois a limitação de força para trabalhar ao lado de pessoas permite aumentar a velocidade nominal de operação."
    ],
    correta: 1,
    explicacao:
      "O robô Delta é um manipulador paralelo: os motores ficam fixos na base e apenas braços leves se movem, o que gera acelerações elevadas. É a escolha clássica para separação e embalagem (pick-and-place) de itens leves. Cobots, ao contrário, limitam velocidade e força por segurança."
  },

  /* ---------- 2) SENSORES ---------- */
  {
    categoria: "Sensores",
    contexto:
      "Em uma estufa, a temperatura do solo será monitorada em quatro pontos, com sondas enterradas em terra úmida e cabos de aproximadamente 5 m até o Arduino. O projeto dispõe de apenas um pino digital livre.",
    comando: "Qual sensor atende melhor a esses requisitos?",
    imagem: "",
    alt: "",
    opcoes: [
      "LM35, pois sua saída analógica permite ligar as quatro sondas em paralelo ao mesmo pino de leitura sem interferência entre elas.",
      "DHT11, pois mede temperatura por sinal digital e já é fabricado em encapsulamento à prova d'água para ser enterrado.",
      "DS18B20, pois usa o barramento 1-Wire, no qual vários sensores com endereço único compartilham o mesmo pino, e existe em versão de sonda encapsulada.",
      "BMP280, pois mede temperatura pelo barramento I²C e foi projetado para operar enterrado ou submerso em cabos longos."
    ],
    correta: 2,
    explicacao:
      "O DS18B20 transmite o dado de forma digital pelo 1-Wire; cada chip possui um código de 64 bits, permitindo vários sensores em um único pino, e há versões em sonda de aço inox à prova d'água. O LM35 exigiria um pino analógico por sensor e sofre ruído em cabos longos."
  },
  {
    categoria: "Sensores",
    contexto:
      "Um projeto mede a corrente de um motor CC com o módulo ACS712 alimentado em 5 V e ligado ao pino A0 de um Arduino UNO (ADC de 10 bits). Com o motor desligado, o monitor serial mostra leituras próximas de 512. Ao ligar o motor, os valores passam a oscilar entre 540 e 620.",
    comando: "Como esses valores devem ser interpretados?",
    imagem: "",
    alt: "",
    opcoes: [
      "A leitura 512 com o motor desligado indica defeito no módulo, pois sem corrente a saída deveria ficar em 0 V e a leitura em 0.",
      "A leitura 512 representa a corrente máxima suportada pelo módulo, e valores acima dela indicam que o motor está em sobrecorrente.",
      "O módulo entrega pulsos digitais, e o valor lido é a contagem de pulsos por segundo, que aumenta conforme a corrente do motor.",
      "A leitura 512 equivale a cerca de 2,5 V, o nível de repouso do sensor; a corrente é obtida pela diferença em relação a esse valor, e o sentido dela define se a leitura fica acima ou abaixo."
    ],
    correta: 3,
    explicacao:
      "O ACS712 é um sensor de efeito Hall linear e bidirecional: com corrente zero a saída fica em Vcc/2 (≈ 2,5 V → leitura ≈ 512). A variação em relação a esse offset é proporcional à corrente, com sensibilidade que depende da versão do módulo (5 A, 20 A ou 30 A)."
  },

  /* ---------- 3) MULTÍMETRO + IMAGEM ---------- */
  {
    categoria: "Multímetro",
    contexto:
      "Em uma bancada, um técnico monta o circuito da imagem: um pino digital do Arduino em nível HIGH alimenta um LED vermelho por meio de um resistor de 220 Ω. Para verificar o funcionamento, ele mede a tensão sobre o resistor com um multímetro.",
    comando:
      "Com base na chave seletora, nas pontas de prova e no valor indicado no visor, qual interpretação da medição está correta?",
    imagem: "../img/questao-multimetro.svg",
    alt: "Multímetro com a chave em V DC, pontas de prova ligadas aos terminais do resistor de 220 ohms e visor indicando 3,00 V.",
    opcoes: [
      "Cerca de 13,6 mA: o multímetro está em paralelo com o resistor e a corrente é obtida por I = V / R, com 3,00 V sobre 220 Ω.",
      "Cerca de 22,7 mA: o multímetro está em paralelo com o resistor e a corrente é obtida dividindo os 5 V do pino pela resistência de 220 Ω.",
      "Cerca de 13,6 mA: o multímetro está em série com o resistor, pois toda medição de tensão exige inserir o instrumento no caminho da corrente.",
      "Não é possível estimar a corrente, pois a tensão medida sobre o resistor não depende da corrente que circula pelo LED."
    ],
    correta: 0,
    explicacao:
      "Tensão se mede em paralelo com o componente. Como o resistor tem 220 Ω e 3,00 V sobre ele, a corrente do circuito série é I = 3,00 / 220 ≈ 13,6 mA. Usar os 5 V do pino ignora a queda de tensão do LED (≈ 2 V) e superestima a corrente."
  },

  /* ---------- 4) CONCEITOS DE ARDUINO ---------- */
  {
    categoria: "Arduino",
    contexto:
      "Um aluno quer variar gradualmente o brilho de um LED em um Arduino UNO usando analogWrite(pino, valor), com valores de 0 a 255. Ele liga o LED (com resistor) ao pino digital 7 e varia o valor continuamente, mas o LED apenas alterna entre apagado e aceso, sem brilho intermediário.",
    comando: "Qual é a causa mais provável do comportamento observado?",
    imagem: "",
    alt: "",
    opcoes: [
      "A função analogWrite() só controla os pinos analógicos A0 a A5, por isso o pino 7 não responde aos valores intermediários.",
      "O pino 7 precisa ser configurado com pinMode(7, INPUT) para aceitar valores entre 0 e 255 em analogWrite().",
      "O pino 7 não possui saída PWM no UNO; para variar o brilho é necessário usar um pino marcado com \"~\", como o 9 ou o 10.",
      "O resistor em série com o LED limita a corrente a ponto de impedir qualquer nível intermediário de brilho."
    ],
    correta: 2,
    explicacao:
      "No Arduino UNO, apenas os pinos 3, 5, 6, 9, 10 e 11 geram PWM. Em um pino sem PWM, analogWrite() apenas escreve LOW (valores abaixo de 128) ou HIGH (128 ou mais). Os pinos A0–A5 são entradas analógicas, não saídas PWM."
  },
  {
    categoria: "Arduino",
    contexto:
      "Um botão é ligado entre o pino digital 2 de um Arduino UNO e o GND, sem resistor externo. No setup(), o pino é configurado com pinMode(2, INPUT_PULLUP) e o programa lê o botão com digitalRead(2) dentro do loop().",
    comando: "Qual é o comportamento esperado dessa leitura?",
    imagem: "",
    alt: "",
    opcoes: [
      "LOW com o botão solto e HIGH ao pressioná-lo, pois o botão fornece nível alto ao pino quando é acionado.",
      "HIGH com o botão solto e LOW ao pressioná-lo, pois o resistor interno mantém o pino em nível alto até que o botão o conecte ao GND.",
      "Valores aleatórios nas duas situações, pois sem resistor externo o pino permanece flutuando e a leitura é instável.",
      "Sempre HIGH, pois o modo INPUT_PULLUP impede que o pino seja levado ao nível do GND por qualquer componente externo."
    ],
    correta: 1,
    explicacao:
      "INPUT_PULLUP ativa um resistor interno (≈ 20–50 kΩ) ligado a 5 V, que mantém o pino em HIGH. Ao fechar o botão, o pino é ligado ao GND e passa a ler LOW — a lógica é invertida em relação à ligação com pull-down."
  },

  /* ---------- 5) ESP ---------- */
  {
    categoria: "ESP32",
    contexto:
      "Uma equipe migra um projeto de monitoramento de nível de reservatório de um Arduino UNO para um ESP32, para enviar os dados via Wi-Fi. O sensor ultrassônico HC-SR04, alimentado com 5 V, tem o pino ECHO ligado diretamente a um GPIO do ESP32.",
    comando: "Qual ajuste é necessário para proteger o microcontrolador?",
    imagem: "",
    alt: "",
    opcoes: [
      "Nenhum, pois os GPIOs do ESP32 aceitam entradas de 5 V, assim como os pinos digitais do Arduino UNO.",
      "Trocar digitalRead() por analogRead(), pois o ESP32 só tolera 5 V em entradas ligadas ao conversor analógico-digital.",
      "Substituir o HC-SR04 por um sensor I²C, pois o ESP32 não consegue medir a largura de pulsos com a função pulseIn().",
      "Reduzir o sinal do ECHO para 3,3 V com divisor resistivo ou conversor de nível, pois os GPIOs do ESP32 operam em 3,3 V e não toleram 5 V."
    ],
    correta: 3,
    explicacao:
      "A lógica do ESP32 é de 3,3 V e seus GPIOs não são tolerantes a 5 V. O pino ECHO do HC-SR04 sai em ≈ 5 V, então é preciso um divisor de tensão (ex.: 1 kΩ + 2 kΩ) ou um conversor de nível. O pulseIn() funciona normalmente no ESP32."
  },

  /* ---------- 6) CÓDIGO EM C + IMAGEM ---------- */
  {
    categoria: "Código C",
    contexto:
      "Um sistema de iluminação deve acender um LED apenas quando houver presença e o ambiente estiver escuro. O LDR forma um divisor de tensão com um resistor de 10 kΩ ligado ao GND, de modo que quanto maior a luminosidade, maior o valor lido em A0. Ao testar o código da imagem, o LED acende com a sala iluminada e permanece apagado no escuro.",
    comando: "Qual alteração corrige o comportamento do sistema?",
    imagem: "../img/questao-codigo-iluminacao.svg",
    alt: "Código C do Arduino com leitura do PIR e do LDR e uma estrutura if que combina as duas leituras.",
    opcoes: [
      "Substituir luz > LIMITE por luz < LIMITE, pois nesse divisor de tensão valores baixos correspondem ao ambiente escuro.",
      "Substituir && por ||, para que o LED acenda quando ao menos uma das duas condições for verdadeira.",
      "Trocar digitalRead(PIR) por analogRead(PIR), pois o PIR informa a intensidade da presença detectada.",
      "Mover a leitura do LDR para dentro do setup(), pois a luminosidade só precisa ser medida uma vez."
    ],
    correta: 0,
    explicacao:
      "A condição atual liga o LED quando há presença E muita luz, o inverso do desejado. Como mais luz gera valor maior em A0, o ambiente escuro corresponde a luz < LIMITE. O PIR é digital e a leitura precisa estar no loop() para ser atualizada continuamente."
  },
  {
    categoria: "Código C",
    contexto:
      "No desafio do estacionamento inteligente, o Arduino mede a distância com um HC-SR04. A função pulseIn() retorna, em microssegundos, o tempo em que o pino ECHO permanece em HIGH, e a velocidade do som no ar é de aproximadamente 0,034 cm/µs.",
    comando:
      "Considerando o código da imagem, qual afirmação sobre a linha que calcula a variável distancia está correta?",
    imagem: "../img/questao-codigo-ultrassonico.svg",
    alt: "Código C do Arduino que dispara o HC-SR04, mede o pulso com pulseIn e calcula a distância com duracao * 0.034 / 2.",
    opcoes: [
      "Divide o produto por 2 para converter microssegundos em milissegundos, e o valor impresso está em milissegundos.",
      "Divide o produto por 2 porque o sensor utiliza dois pinos (TRIG e ECHO), e o valor impresso está em metros.",
      "Divide o produto por 2 porque o pulso percorre o trajeto de ida e volta; o valor impresso está em centímetros, sem casas decimais, pois foi armazenado em int.",
      "Divide o produto por 2 para descontar a duração de 10 µs do pulso de disparo, e o valor impresso está em centímetros com casas decimais."
    ],
    correta: 2,
    explicacao:
      "O tempo medido corresponde à ida até o obstáculo e à volta do eco, então a distância é metade de (tempo × velocidade). Como 0,034 está em cm/µs, o resultado é em centímetros; ao atribuir um valor decimal a uma variável int, a parte fracionária é truncada."
  },
  {
    categoria: "Código C",
    contexto:
      "Um aluno liga um potenciômetro ao pino A1 de um Arduino UNO alimentado com 5 V e deseja exibir no monitor serial a tensão em volts. O conversor analógico-digital do UNO tem 10 bits (valores de 0 a 1023). Ao girar o potenciômetro, a leitura muda, mas o monitor serial exibe sempre 0.00.",
    comando: "Qual é a causa do problema no código apresentado?",
    imagem: "../img/questao-codigo-tensao.svg",
    alt: "Código C do Arduino que lê A1 com analogRead e calcula a tensão com leitura * (5 / 1023), armazenando em uma variável float.",
    opcoes: [
      "O conversor do UNO retorna valores de 0 a 255, e a conversão para float arredonda o resultado de qualquer leitura para zero.",
      "A expressão (5 / 1023) é uma divisão entre inteiros e resulta em 0 antes da multiplicação; é preciso escrever 5.0 / 1023.",
      "A variável tensao foi declarada como float, tipo que não armazena casas decimais no Arduino UNO.",
      "A função Serial.println() só imprime valores inteiros, sendo necessário converter a tensão com int() antes de exibi-la."
    ],
    correta: 1,
    explicacao:
      "Em C, 5 / 1023 com dois operandos inteiros resulta em 0 (divisão inteira), e 0 multiplicado por qualquer leitura continua 0 — mesmo atribuído a um float. Usar 5.0 / 1023 (ou 5.0 * leitura / 1023) força o cálculo em ponto flutuante. O println() de float imprime duas casas por padrão, por isso aparece 0.00."
  }
];
