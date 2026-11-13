---
tag: 3RSC4ZM3N5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $a_1 = 1$, and for each $n > 1$ let $a_n = n \cdot a_{\lfloor \frac{n}{2} \rfloor}$. Prove that for each $n \ge 12$ we have $a_n > n^2$.
