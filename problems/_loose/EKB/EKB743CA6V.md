---
tag: EKB743CA6V
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2019
    source: hf-mathnet
    label: Argentina Nacional OMA 2019
---
Bruno elige un número entero positivo $X$. A continuación, Flor elige cuatro números enteros $a, b, c, d$ y calcula $N = (a-b)(b-c)(c-d)(d-a)(a-c)(b-d)$, la multiplicación de las seis diferencias entre esos cuatro números. Determinar el mayor valor de $X$ con el que Bruno tiene la certeza de que $N$ será múltiplo de $X$.
