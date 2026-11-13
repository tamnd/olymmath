---
tag: 1VNER7N8D5
kind: problem
type: answer
answer: a) 978563412; b) 1260
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad
---
Um número inteiro positivo é chamado ziguezague, se satisfaz as seguintes três condições:
- Seus algarismos são não nulos e distintos.
- Não possui três algarismos consecutivos em ordem crescente.
- Não possui três algarismos consecutivos em ordem decrescente.
Por exemplo, $14385$ e $2917$ são ziguezague, mas $2564$ e $71544$ não.

a) Encontre o maior número ziguezague.

b) Quantos números ziguezague de quatro algarismos existem?
