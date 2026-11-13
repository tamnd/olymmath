---
tag: D3SX9GTQ4X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90444
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=32
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x$ and $y$ be real numbers, and define a sequence $a_{0}, a_{1}, a_{2}, \ldots$ by

$$
a_{n}=\sum_{k=0}^{n} x^{k} y^{n-k}
$$

Suppose that $a_{m}, a_{m+1}, a_{m+2}, a_{m+3}$ are integers for some $m \geq 0$. Prove that $a_{n}$ is an integer for all $n \geq 0$.
