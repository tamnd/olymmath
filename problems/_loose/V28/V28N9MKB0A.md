---
tag: V28N9MKB0A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{n}$ be a sequence of real numbers such that $a_{1}+\cdots+a_{n}=0$ and define $b_{i}=a_{1}+\cdots+a_{i}$ for $1 \leq i \leq n$. Suppose that $b_{i}\left(a_{j+1}-a_{i+1}\right) \geq 0$ for all $1 \leq i \leq$ $j \leq n-1$. Prove that

$$
\max _{1 \leq \ell \leq n}\left|a_{\ell}\right| \geq \max _{1 \leq m \leq n}\left|b_{m}\right|
$$
