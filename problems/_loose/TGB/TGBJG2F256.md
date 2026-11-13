---
tag: TGBJG2F256
kind: problem
type: answer
answer: lim x_n = 1/2 and lim n(x_n − 1/2) = −1/3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $(x_n)_{n \ge 2}$ is given by
$$
x_n = \frac{e^{1/n} - 1}{e^{1/n^2} - 1} - n.
$$
Prove that $\lim_{n \to \infty} x_n = 1/2$ and compute $\lim_{n \to \infty} n(x_n - 1/2)$.
