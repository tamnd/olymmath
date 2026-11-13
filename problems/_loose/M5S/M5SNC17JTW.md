---
tag: M5SNC17JTW
kind: problem
type: answer
answer: 265863 / 6817 = 39, then +221 → 260, then ×51 → 13260, then −13259 → 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0000.parquet#row=13
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
Partindo do número $265863$ e utilizando uma única vez cada uma das operações $+$, $-$, $\times$, $:$, e também uma única vez os números $51$, $221$, $6817$, $13259$, podemos obter vários números, por exemplo $54911$:

$265863 \xrightarrow{+221} 1203 \xrightarrow{\times 51} 61353 \xrightarrow{-13259} 48094 \xrightarrow{+6817} 54911$

Encontre a cadeia que permite obter o menor número inteiro positivo.
