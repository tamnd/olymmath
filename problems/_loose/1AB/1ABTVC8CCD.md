---
tag: 1ABTVC8CCD
kind: problem
type: answer
answer: "10395"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=1133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-sce/2020
    source: hf-indonesian-olympiad
    label: SCE_SMA_2020
---
Diketahui $x_1=73$, dan untuk $n>1$ berlaku $x_n = \frac{n+1}{x_{n-1}}$. Tentukan hasil dari $\prod_{n=1}^{10} x_n$
