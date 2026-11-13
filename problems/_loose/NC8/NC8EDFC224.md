---
tag: NC8EDFC224
kind: problem
type: answer
answer: 645 coins; choose 93 pirates
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0000.parquet#row=149
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
A lei pirata estabelece que, para dividir as moedas de um tesouro, o capitão deve escolher um grupo de piratas (excluindo a si mesmo). Em seguida, o capitão deve distribuir a mesma quantidade de moedas a cada um dos piratas desse grupo, de tal modo que não seja possível dar a cada um deles nenhuma outra das moedas que restaram (respeitando o fato de que cada pirata recebe a mesma quantidade). As moedas restantes são então dadas ao capitão. No navio do capitão Barbaroxa há 100 piratas (sem incluir o capitão). Barbaroxa deve dividir um tesouro que contém menos de 1000 moedas. Se ele escolher 99 piratas, ele ficará com 51 moedas, mas se escolher 77 piratas, ele ficará com 29 moedas.
a) Quantas moedas contém o tesouro?
b) Quantos piratas deve escolher Barbaroxa para ficar com a maior quantidade possível de moedas?
