---
tag: DHPZFF5PE0
kind: problem
type: answer
answer: (1 + sin(pi/8)) / (1 - sin(pi/8))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=7
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sean $C$ y $C'$ dos circunferencias concéntricas de radios $r$ y $r'$ respectivamente. Determinar cuánto ha de valer el cociente $r'/r$ para que en la corona limitada por $C$ y $C'$ existan ocho circunferencias $C_i$, $i=1, \ldots, 8$, que sean tangentes a $C$ y a $C'$, y también que $C_i$ sea tangente a $C_{i+1}$ para $i=1, \ldots, 7$ y $C_8$ tangente a $C_1$.
