---
tag: KK208X5HGS
kind: problem
type: answer
answer: 1, 81, 169, 256
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=128
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
Sergio pediu para Ivan pensar em um número inteiro positivo. Depois, pediu para Ivan calcular a soma de seus algarismos e, finalmente, elevar ao quadrado o resultado. Sem falar o número em que pensou inicialmente, Ivan contou que obteve como resultado final $x$. Mostre a Sergio como chegar às seguintes conclusões:

a) Se Ivan tivesse pensado em um número com 3 ou menos algarismos, então $x$ seria menor do que 730.

b) Se Ivan tivesse pensado em um número com 4 algarismos, então $x$ seria menor do que o número no qual Ivan pensou.

c) Se Ivan tivesse pensado em um número com 5 ou mais algarismos, então $x$ seria menor do que o número que Ivan pensou.

Sergio fez depois o seguinte: Considerou o número $x$ que Ivan disse, calculou a soma dos seus algarismos e elevou ao quadrado o resultado. Quando Sergio falou para Ivan o número que obteve, Ivan disse com surpresa que esse foi o número que havia pensado.

d) Determine todos os possíveis valores para o número que Ivan pensou.
