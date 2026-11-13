---
tag: R7TWKGMRY2
kind: problem
type: answer
answer: (x_2 + (1-p)x_1)/(2-p)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way BALTIC WAY
---
Let $x_1$ and $x_2$ be real numbers and $0 < p < 1$. Define $x_n = p x_{n-1} + (1-p) x_{n-2}$ for $n = 3, 4, \dots$. Show that the sequence $(x_n)$ converges and determine $\lim_{n \to \infty} x_n$.
