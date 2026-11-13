---
tag: TRM8A6JF5A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=18
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
La sucesión de números reales $a_1, a_2, \dots$ se define como:
$$
a_1 = 56 y a_{n+1} = a_n - \frac{1}{a_n} \text{para cada entero } n \ge 1.
$$
Demuestre que existe un entero $k$, $1 \le k \le 2002$, tal que $a_k < 0$.
