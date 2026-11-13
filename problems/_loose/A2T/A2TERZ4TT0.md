---
tag: A2TERZ4TT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy:
$$
\begin{array}{l}
a_{1}=1, b_{1}=2, \\
a_{n+1} b_{n}=1+a_{n}+a_{n} b_{n}, \\
b_{n+1} a_{n}=1+b_{n}+a_{n} b_{n} .
\end{array}
$$

Prove: $\left\{\left[a_{n}\right]\right\}$ must be a constant sequence from some term onward, where $[x]$ denotes the greatest integer not exceeding the real number $x$.
