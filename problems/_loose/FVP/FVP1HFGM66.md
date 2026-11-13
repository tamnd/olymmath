---
tag: FVP1HFGM66
kind: problem
type: answer
answer: 30, 45, 90
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=391
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
Seja $\overline{a b}$ um número inteiro de dois dígitos. Um inteiro positivo é um parente de $\overline{a b}$ se:
i) o dígito das unidades de $n$ também é $b$.
ii) os outros dígitos de $n$ são distintos de zero e somam $a$.
Por exemplo, os parentes de 31 são 31, 121, 211 e 1111. Encontre todos os números de dois dígitos que dividem todos os seus parentes.
