---
tag: ZYN0D2B83R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0000.parquet#row=128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil NÍVEL 3
---
Em certa loteria, existem 60 números distintos e 6 deles são sorteados sem reposição. Cada bilhete possui 6 números distintos entre os 60 possíveis. O prêmio máximo, conhecido como "gol-no-ângulo", é dado para o jogador que possuir o bilhete com os mesmos 6 números que foram sorteados. Nesta loteria, também existe o prêmio "bola-na-trave". Em um bilhete bola-na-trave, o menor número não possui diferença, em módulo, maior que 1 para o menor número sorteado, o segundo menor número não possui diferença, em módulo, maior que 1 para o segundo menor número sorteado e assim por diante até o sexto menor número. Por exemplo, suponha que o bilhete gol-no-ângulo seja $\{4,7,25,48,51,60\}$. Então os bilhetes $\{3,6,25,49,50,59\}$ e $\{5,6,25,47,50,60\}$ são bilhetes bola-na-trave, mas o bilhete $\{3,4,6,24,47,50\}$ não é bola-na-trave. Vale lembrar que um bilhete gol-no-ângulo não é um bilhete bola-na-trave. Para os itens a seguir, considere cada bilhete como a escolha de uma sequência de 6 números escritos em ordem crescente.
(a) Dê um exemplo de conjunto de 6 números formando um bilhete gol-no-ângulo que tem o menor número possível de bilhetes bola-na-trave associados a ele. Quantos bilhetes bola-na-trave possíveis haveria para estes 6 números?
(b) Dê um exemplo de conjunto de 6 números formando um bilhete gol-no-ângulo que resulta na maior quantidade possível de bilhetes bola-na-trave. Neste caso, haveria quantos bilhetes bola-na-trave possíveis?
(c) Considere os números sorteados $\{2,3,8,11,14,17\}$, quantos são os bilhetes bola-na-trave associados a ele?
(d) Suponha que o conjunto de números sorteados seja $\{8,10,12,14,16,18\}$. Neste caso, quantos são os bilhetes bola-na-trave possíveis associados a ele?
