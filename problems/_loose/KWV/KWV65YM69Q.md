---
tag: KWV65YM69Q
kind: problem
type: answer
answer: 3/4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0000.parquet#row=43
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil
---
Um jogo é composto das seguintes regras:
i) Em cada rodada, ocorre o lançamento de um dado comum não viciado.
ii) Se sair o número $3$, então o jogador $A$ ganha.
iii) Se sair um dos números do conjunto $\{4,5,6\}$, então o jogador $B$ ganha.
iv) Se sair um dos números do conjunto $\{1,2\}$, então o dado é lançado outra vez até resultar em $3$ ou $4$ ou $5$ ou $6$.
Qual a probabilidade do jogador $B$ vencer?
